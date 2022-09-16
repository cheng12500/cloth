<template>
  <div id="home">
    <nav-bar class="app-nav">
      <template #center>
          汉服商店
      </template>
    </nav-bar>

   <div class="content">
     <search/>

    <swiper>
      <swiper-item v-for="(item,index) in imageUrl" :key="index">
          <img :src="item" alt="">
      </swiper-item>
    </swiper>

    <group :icon="icon"/>

    <mall-sell :getList="getList"></mall-sell>
   </div>
   
  </div>
</template>

<script>
  import NavBar from '@/components/common/NavBar';
  import {Swiper,SwiperItem} from '@/components/common/swiper'
  import search from '../home/search'
  import group from '../home/group'
  import MallSell from './mallSell.vue';

  import { getList } from '@/server/getList'

  export default {
    data() {
      return {
        imageUrl:[
        'https://pic.hanfugou.com/web/2022/6/20/10/594fd86acad84507ac204b702257d8db.png_min.jpg',
        'https://pic.hanfugou.com/web/2022/6/16/19/8c1f0a1c26564179ae03f1c39ea78a98.png_min.jpg',
        'https://pic.hanfugou.com/web/2022/6/14/19/8cd702b584e14021b0b1a609313694de.png_min.jpg',
        'https://pic.hanfugou.com/web/2022/6/9/18/83385c5686dd4309a4d7124844a67a95.png_min.jpg'
      ],
      icon:[{
        id: 1,
        iconUrl: 'https://pic.hanfugou.com/web/2021/8/11/16/80d6d344989345848ade4dc619b7f4a2.png_100x100.jpg',
        iconTex: '女装'
      },
      {
        id: 2,
        iconUrl: 'https://pic.hanfugou.com/web/2021/8/9/16/92eb024b86344de097c91eada53e73cf.png_100x100.jpg',
        iconTex: '男装'
      },
      {
        id: 3,
        iconUrl: 'https://pic.hanfugou.com/web/2021/8/6/20/389e0e8ee41845179daf783058b9b9d0.png_100x100.jpg',
        iconTex: '童装'
      },
      {
        id: 4,
        iconUrl: 'https://pic.hanfugou.com/web/2021/8/6/20/a2d7e90bb75d40709659c3aef276e596.png_100x100.jpg',
        iconTex: '汉服'
      }
      ],
      getList:[]
      }
    },
    components: {
        NavBar,
        Swiper,
        SwiperItem,
        search,
        group,
        MallSell
    },
    created() {
     this.getLists()
    },
    methods: {
      getLists(){
        getList().then(res=>{
          this.getList = res.data.message 
        })
      }
    },
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;

  }

 .app-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background-color: #B0C4DE;
    color: whitesmoke;
  }
  img{
    width: 100%;
  }
  .content{
    overflow-y: hidden;
  }
</style>