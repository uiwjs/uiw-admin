import styles from './index.module.less';

type FooterProps = {
  editorUrl?: string;
};

const Footer = (props: FooterProps) => {
  const { editorUrl } = props || {};
  return (
    <div className={styles.footer}>
      {editorUrl && (
        <a
          title="Editor Current Page"
          target="_blank"
          rel="noreferrer"
          href={`https://github.com/uiwjs/uiw-admin/edit/master${editorUrl}`}
        >
          编辑当前页面
        </a>
      )}
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/uiw-admin/issues/new">
        提交 Bug
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/uiw-admin">
        GitHub
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/kktjs/kkt">
        kkt
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiwjs/uiw">
        uiwjs
      </a>
    </div>
  );
};

export default Footer;
