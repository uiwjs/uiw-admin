import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styles from './index.module.css';
import { throttle } from 'lodash-es';

interface NavBarProps {
  // markdown文件
  markdown: string;
  // markdown页面距离顶部边距
  headingTopOffset?: number;
  // 路由加载形式 哈希或者 h5
  routerType: 'hash' | 'bower';
}

interface NavDataItem {
  index: number;
  level: number;
  text: string;
  listNo: number;
}

interface matchStackItem {
  arr: number[];
  level: number;
}

interface ListItem {
  dataId: string;
  offsetTop: number;
  listNo: number;
}

const trimArrZero = (arr: any) => {
  let start, end;
  for (start = 0; start < arr.length; start++) {
    if (arr[start]) {
      break;
    }
  }
  for (end = arr.length - 1; end >= 0; end--) {
    if (arr[end]) {
      break;
    }
  }
  return arr.slice(start, end + 1);
};

const NavBar: React.FC<NavBarProps> = (props) => {
  const { markdown, headingTopOffset = 100, routerType = 'bower' } = props;

  const [currentListNo, setCurrentListNo] = useState<number>(0);

  const timer = useRef<any>(null);

  const navData = useMemo(() => {
    const contentWithoutCode = markdown
      .replace(/^[^#]+\n/g, '')
      .replace(/(?:[^\n#]+)#+\s([^#\n]+)\n*/g, '') // 匹配行内出现 # 号的情况
      .replace(/^#\s[^#\n]*\n+/, '')
      .replace(/```[^`\n]*\n+[^```]+```\n+/g, '')
      .replace(/`([^`\n]+)`/g, '$1')
      .replace(/\*\*?([^*\n]+)\*\*?/g, '$1')
      .replace(/__?([^_\n]+)__?/g, '$1')
      .trim();
    const pattOfTitle = /#+\s([^#\n]+)\n*/g;
    const matchResult = contentWithoutCode.match(pattOfTitle);

    if (!matchResult) {
      return [];
    }

    const data: Array<NavDataItem> = matchResult.map((r: string, i) => ({
      index: i,
      level: r.match(/^#+/g)![0].length,
      text: r.replace(pattOfTitle, '$1'),
      listNo: 0,
    }));
    // level最大
    let maxLevel = 0;
    data.forEach((t) => {
      if (t.level > maxLevel) {
        maxLevel = t.level;
      }
    });

    let matchStack: Array<matchStackItem> = [];

    for (let i = 0; i < data.length; i++) {
      const t = data[i];
      const { level } = t;
      while (
        matchStack.length &&
        matchStack[matchStack.length - 1].level > level
      ) {
        matchStack.pop();
      }
      if (matchStack.length === 0) {
        const arr = new Array(maxLevel).fill(0);
        arr[level - 1] += 1;
        matchStack.push({
          level,
          arr,
        });
        t.listNo = trimArrZero(arr).join('.');
        continue;
      }
      const { arr } = matchStack[matchStack.length - 1];
      const newArr = arr.slice();
      newArr[level - 1] += 1;
      matchStack.push({
        level,
        arr: newArr,
      });
      t.listNo = trimArrZero(newArr).join('.');
    }
    return data;
  }, [markdown]);

  const refreshNav = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      initNav();

      document.addEventListener('scroll', winScroll, false);
    }, 500);
  };

  useEffect(() => {
    if (navData) {
      refreshNav();
    }
  }, [navData]);

  const getHeadingList = useCallback(() => {
    const list: Array<ListItem> = [];
    if (navData) {
      navData.forEach((nav) => {
        const headings = [...document.querySelectorAll(`h${nav.level}`)];
        const curHeading = headings.find(
          (head) => (head as HTMLElement).innerText.trim() === nav.text.trim(),
        );
        if (curHeading) {
          list.push({
            dataId: nav.text,
            offsetTop: (curHeading as HTMLElement).offsetTop,
            listNo: nav.listNo,
          });
        }
      });
    }
    return list;
  }, [navData]);

  const safeScrollTo = (
    element: any,
    top: number,
    left = 0,
    // smooth: boolean,
  ) => {
    if (!element) return;
    if (typeof element.scrollTo === 'function') {
      const scrollConfig = {
        top,
        left,
      };
      element.scrollTo(scrollConfig);
    } else {
      if (element === window) {
        document.documentElement.scrollTop = top;
        document.documentElement.scrollLeft = left;
      } else {
        element.scrollTop = top;
        element.scrollLeft = left;
      }
    }
  };

  const scrollToTarget = (dataId: string) => {
    const ids = `${decodeURIComponent(dataId)}`.replace(/\./g, '');
    const target = document.querySelector(`#${ids}`) as HTMLElement;
    if (target && typeof target.offsetTop === 'number') {
      safeScrollTo(window, target.offsetTop - headingTopOffset, 0);
    }
  };

  const updateHash = (dataId: string) => {
    let navHref = window.location.href;
    let href = '';
    if (routerType === 'bower') {
      href = `${window.location.pathname}${window.location.search}#${dataId}`;
    } else {
      if (navHref.includes('?title=')) {
        const idx = navHref.indexOf('?title=');
        const pureHash = navHref.slice(0, idx);
        href = `${pureHash}?title=${dataId}`;
      } else {
        href = `${navHref}?title=${dataId}`;
      }
    }
    window.history.replaceState({}, '', href);
  };

  const winScroll = throttle(() => {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const newHeadingList = getHeadingList().map((h) => ({
      ...h,
      distanceToTop: Math.abs(scrollTop + headingTopOffset - h.offsetTop),
    }));

    const distanceList = newHeadingList.map((h) => h.distanceToTop);

    const minDistance = Math.min(...distanceList);
    const curHeading = newHeadingList.find(
      (h) => h.distanceToTop === minDistance,
    );
    if (!curHeading) return;

    updateHash(curHeading.dataId.toLowerCase().replace(' ', '-'));
    setCurrentListNo(curHeading.listNo);
  }, 200);

  const initNav = () => {
    if (window.location.hash) {
      if (routerType === 'bower') {
        scrollToTarget(window.location.hash.replace('#', ''));
      } else {
        const idx = window.location.href.indexOf('?title=');
        if (idx > -1) {
          const title = window.location.href.slice(idx + 7);
          scrollToTarget(title);
        }
      }
    }
  };

  return (
    <div className={styles.navbox}>
      {navData &&
        navData.map((nav, idx) => (
          <div
            style={{
              paddingLeft: 5 * nav.level,
              paddingRight: 5,
              lineHeight: '25px',
              cursor: 'pointer',
            }}
            className={currentListNo === nav.listNo ? styles.active : ''}
            key={idx}
            onClick={() => {
              const currentHash = nav.text.toLowerCase().replace(' ', '-');
              scrollToTarget(currentHash);
              updateHash(currentHash);
              setCurrentListNo(nav.listNo);
            }}
          >
            {nav.listNo} {nav.text}
          </div>
        ))}
    </div>
  );
};

export default NavBar;
