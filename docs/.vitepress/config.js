module.exports = {
  title: 'Xfuu UI',
  description: 'A Vue 3 UI Component Library.',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/modal' }
    ],
    sidebar: {
      '/components/': [
        {
          text: '组件',
          items: [
            { text: 'Modal 弹窗', link: '/components/modal' }
          ]
        }
      ]
    }
  }
}