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
    avatar: 'https://t-imghost.pages.dev/file/0940c22e3087c199c9c26.jpg',
    name: 'MTR HK',
    title: 'Influencer',
    links: [
      { icon: 'facebook', link: 'https://www.facebook.com/mtrhk' },
      { icon: 'instagram', link: 'http://instagram.com/mtrhk' },
      { icon: 'youtube', link: 'http://www.youtube.com/mtrhongkong' }
    ]
  },  
  {
    avatar: 'https://t-imghost.pages.dev/file/8467140519ced3ea70fd6.jpg',
    name: '总局-鄂局武段的热干面',
    title: 'Leader / Group Owner 好面',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/1749292479' }
    ]
  },
  {
    avatar: 'https://t-imghost.pages.dev/file/8467140519ced3ea70fd6.jpg',
    name: 'xz111_Misaka',
    title: 'Leader / Group Owner',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/555976413' }
    ]
  },
  {
    avatar: 'https://t-imghost.pages.dev/file/8467140519ced3ea70fd6.jpg',
    name: '青柏菌 Sakai Harumi 汤达人',
    title: 'Creator 好面，汤决定',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/584835054/' }
    ]
  },
   {
    avatar: 'https://t-imghost.pages.dev/file/8467140519ced3ea70fd6.jpg',
    name: 'lanoel',
    title: 'Creator',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/402744005' }
    ]
  },
  {
    avatar: 'https://t-imghost.pages.dev/file/8467140519ced3ea70fd6.jpg',
    name: 'XXXXYOUXI',
    title: 'Builder / Creator Chi YX',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/1596446033' }
    ]
  },
  {
    avatar: 'https://t-imghost.pages.dev/file/8467140519ced3ea70fd6.jpg',
    name: '白云-Burgeoning',
    title: 'Builder / Creator',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/1642321436' }
    ]
  },
  {
    avatar: 'https://t-imghost.pages.dev/file/8467140519ced3ea70fd6.jpg',
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
    avatar: 'https://t-imghost.pages.dev/file/8467140519ced3ea70fd6.jpg',
    name: 'IF-游戏业界的一阵风',
    title: 'Creator 大魔王IF！',
    links: [
      { icon: 'website', link: 'https://if-chan.mika.vin/' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/14823193' },    
      { icon: 'twitter', link: 'https://twitter.com/KagamineX' },
      { icon: 'youtube', link: 'https://www.youtube.com/channel/UCu1u-4pgzdnQ_Q6hIr_dmGA' }
    ]
  },
  {
    avatar: 'https://t-imghost.pages.dev/file/340d06ad82c0697369cb6.jpg',
    name: 'Leo Tinyat',
    title: 'Builder / Creator',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/553853026' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/3493084180515360' },
    ]
  },
  {
    avatar: 'https://t-imghost.pages.dev/file/f1117bc04500457010bf1.jpg',
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
