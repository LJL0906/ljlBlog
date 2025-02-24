interface MenuItem {
  key: string
  label: string
  icon?: string
  children?: MenuItem[]
}

export const menuItems: MenuItem[] = [
  {
    key: 'blog',
    label: '博客文章',
    icon: 'BookOutlined',
    children: [
      {
        key: 'tech',
        label: '技术笔记',
        children: [
          { key: 'frontend', label: '前端开发' },
          { key: 'backend', label: '后端开发' },
          { key: 'devops', label: '运维部署' },
          { key: 'algorithms', label: '算法研究' },
          { key: 'database', label: '数据库' },
          { key: 'architecture', label: '架构设计' },
          { key: 'security', label: '网络安全' }
        ]
      },
      { key: 'thoughts', label: '随笔感悟' },
      { key: 'tutorials', label: '教程分享' },
      { key: 'reviews', label: '技术评测' }
    ]
  },
  {
    key: 'life',
    label: '生活记录',
    icon: 'CameraOutlined',
    children: [
      { key: 'photos', label: '照片墙' },
      { key: 'travel', label: '旅行日记' },
      { key: 'food', label: '美食记录' },
      { key: 'reading', label: '读书笔记' },
      { key: 'music', label: '音乐收藏' },
      { key: 'movie', label: '影视鉴赏' },
      { key: 'sports', label: '运动健身' }
    ]
  },
  {
    key: 'about',
    label: '关于我',
    icon: 'UserOutlined',
    children: [
      { key: 'profile', label: '个人简介' },
      { key: 'contact', label: '联系方式' },
      { key: 'skills', label: '技能清单' },
      { key: 'resume', label: '个人履历' },
      { key: 'awards', label: '获奖记录' }
    ]
  },
  {
    key: 'projects',
    label: '项目展示',
    icon: 'ProjectOutlined',
    children: [
      { key: 'personal', label: '个人项目' },
      { key: 'opensource', label: '开源贡献' },
      { key: 'commercial', label: '商业项目' },
      { key: 'research', label: '研究项目' }
    ]
  },
  {
    key: 'resources',
    label: '资源分享',
    icon: 'ShareAltOutlined',
    children: [
      { key: 'tools', label: '工具推荐' },
      { key: 'books', label: '好书推荐' },
      { key: 'websites', label: '网站收藏' },
      { key: 'templates', label: '项目模板' }
    ]
  },
  {
    key: 'interaction',
    label: '互动交流',
    icon: 'MessageOutlined',
    children: [
      { key: 'comments', label: '留言板' },
      { key: 'feedback', label: '反馈建议' },
      { key: 'community', label: '社区讨论' }
    ]
  }
]