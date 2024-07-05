---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://ts1.cn.mm.bing.net/th/id/R-C.2b5ad9dd38c8d0382c657355c86593e2?rik=Ti5pg5cJX6%2bH3Q&riu=http%3a%2f%2fimg1.wikia.nocookie.net%2f__cb20140916154329%2fhk-rail%2fzh%2fimages%2f1%2f17%2fMTR_Mobile_Icon.png&ehk=5sOnNjPY4vDZ38CNrKRuNRcA%2fSmtD%2f4h0iTyOV8Aojo%3d&risl=&pid=ImgRaw&r=0',
    name: 'MTR HK',
    title: 'Influencer',
    links: [
      { icon: 'facebook', link: 'https://www.facebook.com/mtrhk' },
      { icon: 'instagram', link: 'http://instagram.com/mtrhk' },
      { icon: 'youtube', link: 'http://www.youtube.com/mtrhongkong' }
    ]
  },  
  {
    avatar: 'https://i0.hdslb.com/bfs/face/079fa6d90165bbcc66925f5b91a78391338387d3.jpg',
    name: '总局-鄂局武段的热干面',
    title: 'Leader / Group Owner 好面',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/1749292479' }
    ]
  },
  {
    avatar: 'https://space.bilibili.com/555976413',
    name: 'xz111_Misaka',
    title: 'Leader / Group Owner',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/555976413' }
    ]
  },
  {
    avatar: 'https://i0.hdslb.com/bfs/face/3779291d37cfa4f5788ec31c4a443a83d67992b6.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif',
    name: '青柏菌 Sakai Harumi 汤达人',
    title: 'Creator 好面，汤决定',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/584835054/' }
    ]
  },
   {
    avatar: 'https://i2.hdslb.com/bfs/face/2d037727373b613409e33819460267cce05ce7ed.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif',
    name: 'lanoel',
    title: 'Creator',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/402744005' }
    ]
  },
  {
    avatar: 'https://i2.hdslb.com/bfs/face/1bd977e7d94921759621fc0d14922f8b34425438.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif',
    name: 'Chi YX',
    title: 'Builder / Creator',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/1596446033' }
    ]
  },
  {
    avatar: 'https://i2.hdslb.com/bfs/face/6e2559418375ea2bdeefe2e4b053a339f24654c6.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif',
    name: '白云-Burgeoning',
    title: 'Builder / Creator',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/1642321436' }
    ]
  },
  {
    avatar: 'https://i1.hdslb.com/bfs/face/9c8c613b88c9c7425c42508a1195459876bffeec.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif',
    name: 'Takigawa',
    title: 'Server Administrator & Owner',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/37471042' }
    ]
  },
   {
    avatar: 'https://server.akio.top/icon',
    name: 'Misaka Akio 御坂秋生',
    title: 'Creator',
    links: [
      { icon: 'website', link: 'https://www.akio.top/' }
    ]
  },
    {
    avatar: 'https://i1.hdslb.com/bfs/face/ded1f75b871018a0387ea4864a10ece62710840f.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif',
    name: 'IF-游戏业界的一阵风',
    title: 'Creator',
    links: [
      { icon: 'website', link: 'https://if-chan.mika.vin/' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/14823193' },     
    ]
  },
  {
    avatar: 'https://i0.hdslb.com/bfs/face/af896ea48924bdea9fba76c645b24458d650c5de.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif',
    name: 'Leo Tinyat',
    title: 'Builder / Creator',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/553853026' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/3493084180515360' },
    ]
  },
  {
    avatar: 'https://bkimg.cdn.bcebos.com/pic/bd3eb13533fa828bf895ec30f31f4134960a5aaa?x-bce-process=image/format,f_auto/watermark,image_d2F0ZXIvYmFpa2UyNzI,g_7,xp_5,yp_5,P_20/resize,m_lfit,limit_1,h_1080',
    name: 'WHRT',
    title: 'Influencer',
    links: [
      { icon: 'website', link: 'https://www.wuhanrt.com/' }
    ]
  },
  {
    avatar: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.ujLS0YFylZcgtmG614MrbAHaFp?rs=1&pid=ImgDetMain',
    name: 'CRT',
    title: 'Influencer',
    links: [
      { icon: 'website', link: 'https://www.cqmetro.cn/index.shtml' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      哼哼哼啊啊啊啊啊啊啊啊啊啊啊啊啊
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
