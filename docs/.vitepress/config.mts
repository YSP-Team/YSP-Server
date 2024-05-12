import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "烟渚 & 天穹 & 鸽城",
  description: "公益MOD城市服 丨 Minecraft服务器",
  head: [['link', { rel: 'icon', href: '/image/logo.png' }]],
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-hans'
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'View', link: '/view' },
      { text: 'Help', link: '/help' },
      {
        text: "More",
        items: [
          { text: 'Links', link: '/links' },
          { text: 'Join US', link: 'https://qm.qq.com/q/HhoxMGLwyq' },
          { text: 'Github repository', link: 'https://github.com/JXSG-UP/YSP-Server' }
        ]}
    ],
    logo: 'https://t-imghost.pages.dev/file/af2ee627d5e5152c79818.png',
    socialLinks: [
      { icon: 'QQ Group', link: 'https://qm.qq.com/q/HhoxMGLwyq', }
    ],
    footer: {
      copyright: '© 2077 Ynagisa & Skydome & PigeONCity'
    }
  }
})
