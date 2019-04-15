const links = [
  {
    title: '操作一',
    href: '',
  },
  {
    title: '操作二',
    href: '',
  },
  {
    title: '操作三',
    href: '',
  },
  {
    title: '操作四',
    href: '',
  },
  {
    title: '操作五',
    href: '',
  },
  {
    title: '操作六',
    href: '',
  },
];

const members = [
  {
    id: 'members-1',
    title: 'hello专家组',
    logo: 'http://img0.imgtn.bdimg.com/it/u=3828860558,2961560834&fm=27&gp=0.jpg',
    link: '',
  },
  {
    id: 'members-2',
    title: 'hello搬砖组',
    logo: 'http://img2.imgtn.bdimg.com/it/u=1432917965,1193452257&fm=27&gp=0.jpg',
    link: '',
  },
  {
    id: 'members-3',
    title: 'hello天才组',
    logo: 'http://img5.imgtn.bdimg.com/it/u=3325212690,29220839&fm=27&gp=0.jpg',
    link: '',
  },
  {
    id: 'members-4',
    title: 'hello少女团',
    logo: 'http://img0.imgtn.bdimg.com/it/u=2787811980,3666585010&fm=27&gp=0.jpg',
    link: '',
  },
  {
    id: 'members-5',
    title: 'hello中二组',
    logo: 'http://img0.imgtn.bdimg.com/it/u=4127899898,2449637072&fm=27&gp=0.jpg',
    link: '',
  },
];

const titles = [
  '项目一',
  '项目二',
  '项目三',
  '项目四',
  '项目五',
  '项目六',
  '项目七',
  '项目八',
];

const avatars = [
  'http://img0.imgtn.bdimg.com/it/u=3828860558,2961560834&fm=27&gp=0.jpg',
  'http://img2.imgtn.bdimg.com/it/u=1432917965,1193452257&fm=27&gp=0.jpg',
  'http://img5.imgtn.bdimg.com/it/u=3325212690,29220839&fm=27&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=2787811980,3666585010&fm=27&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=4127899898,2449637072&fm=27&gp=0.jpg',
  'http://img5.imgtn.bdimg.com/it/u=3372096268,4227823703&fm=27&gp=0.jpg',
];

const avatars2 = [
  'http://img5.imgtn.bdimg.com/it/u=3325212690,29220839&fm=27&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=4127899898,2449637072&fm=27&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=2787811980,3666585010&fm=27&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=4127899898,2449637072&fm=27&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=4127899898,2449637072&fm=27&gp=0.jpg',
  'http://img0.imgtn.bdimg.com/it/u=2787811980,3666585010&fm=27&gp=0.jpg',
  'http://img5.imgtn.bdimg.com/it/u=3372096268,4227823703&fm=27&gp=0.jpg',
  'http://img2.imgtn.bdimg.com/it/u=1432917965,1193452257&fm=27&gp=0.jpg',
  'http://img5.imgtn.bdimg.com/it/u=3372096268,4227823703&fm=27&gp=0.jpg',
  'http://img5.imgtn.bdimg.com/it/u=3372096268,4227823703&fm=27&gp=0.jpg',
];


const notice = [
  {
    id: 'xxx1',
    title: titles[0],
    logo: avatars[0],
    description: '但凡未得到，但凡是过去，总是最登对。',
    updatedAt: new Date(),
    member: '《似是故人来》',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx2',
    title: titles[1],
    logo: avatars[1],
    description: '无论热恋中失恋中，都永远记住第一戒，别要张开双眼。',
    updatedAt: new Date('2017-07-24'),
    member: '《相爱很难》',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx3',
    title: titles[2],
    logo: avatars[2],
    description: '得到，你的爱情，还要再得到你任性。一切，原是注定，因我跟你都任性。',
    updatedAt: new Date(),
    member: '《明知故犯》',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx4',
    title: titles[3],
    logo: avatars[3],
    description: '悲哀是真的，泪是假的，本来没因果，一百年后没有你也没有我。',
    updatedAt: new Date('2017-07-23'),
    member: '《百年孤寂》',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx5',
    title: titles[4],
    logo: avatars[4],
    description: '感情寻找它的模特儿，衣服挂在橱窗，有太多人适合，没有独一无二。',
    updatedAt: new Date('2017-07-23'),
    member: '《香奈儿》',
    href: '',
    memberLink: '',
  },
  {
    id: 'xxx6',
    title: titles[5],
    logo: avatars[5],
    description: '有生之年狭路相逢终不能幸免，手心忽然长出纠缠的曲线，懂事之前情动以后长不过一天，留不住算不出流年。',
    updatedAt: new Date('2017-07-23'),
    member: '《流年》',
    href: '',
    memberLink: '',
  },
];

const activities = [
  {
    id: 'trend-1',
    updatedAt: new Date(),
    user: {
      name: 'Gloaming',
      avatar: avatars2[0],
    },
    group: {
      name: '似是故人来',
      link: 'http://www.yto.net.cn/',
    },
    project: {
      name: '《红豆》',
      link: 'http://www.yto.net.cn/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
  {
    id: 'trend-2',
    updatedAt: new Date(),
    user: {
      name: 'Albert',
      avatar: avatars2[1],
    },
    group: {
      name: '相爱很难',
      link: 'http://www.yto.net.cn/',
    },
    project: {
      name: '《邮差》',
      link: 'http://www.yto.net.cn/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
  {
    id: 'trend-3',
    updatedAt: new Date(),
    user: {
      name: '丽丽',
      avatar: avatars2[2],
    },
    group: {
      name: '明知故犯',
      link: 'http://www.yto.net.cn/',
    },
    project: {
      name: '《不爱我的我不爱》',
      link: 'http://www.yto.net.cn/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
  {
    id: 'trend-4',
    updatedAt: new Date(),
    user: {
      name: '建林',
      avatar: avatars2[4],
    },
    project: {
      name: '百年孤寂',
      link: 'http://www.yto.net.cn/',
    },
    template: '将 @{project} 更新至已发布状态',
  },
  {
    id: 'trend-5',
    updatedAt: new Date(),
    user: {
      name: '大山',
      avatar: avatars2[3],
    },
    project: {
      name: '流年',
      link: 'http://www.yto.net.cn/',
    },
    comment: {
      name: '留言',
      link: 'http://www.yto.net.cn/',
    },
    template: '在 @{project} 发布了 @{comment}',
  },
  {
    id: 'trend-6',
    updatedAt: new Date(),
    user: {
      name: '风尘',
      avatar: avatars2[5],
    },
    group: {
      name: '香奈儿',
      link: 'http://www.yto.net.cn/',
    },
    project: {
      name: '《蝴蝶》',
      link: 'http://www.yto.net.cn/',
    },
    template: '在 @{group} 新建项目 @{project}',
  },
];

export default { links, members, notice, activities };
