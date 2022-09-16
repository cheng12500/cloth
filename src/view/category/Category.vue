<template>
    <div class="category">
        <nav-bar class="navbar">
            <template #center>
                商品分类
            </template>
        </nav-bar>
        <div class="top">
         <div class="goods-main">
            <div class="left">
                <div v-for="(item,index) in cateList" :key="item.id">
                    <span class="cate-name" :class="{active: index === currentIndex}"
                          @click="itemClick(index)">{{item.catename}}</span>
                </div>
            </div>
            <div class="right">
                <div class="content">
                    <div class="content-image">
                        <img :src="goodsImg.banner">
                    </div>
                    <div class="cate-list">
                        <div class="goods-list">
                            <div class="goods-list-item" v-for="item in goodsShow" :key="item.item_title" >
                                <img :src="item.item_img"  @click="goodList">
                                <span>{{item.item_title}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    </div>    
</template>

<script>
import NavBar from '../../components/common/NavBar'
    export default {
        components:{
            NavBar
        },
        data() {
            return {
                cateList:[
                    {
                        id:'goods1',
                        banner:'https://pic.hanfugou.com/web/2022/6/14/18/20b7c95d24f24484ba27f89c0fd69a5f.png_min.jpg',
                        catename:'女装',
                        goods_list:[
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/10/82fa87fd840a41be965b64d13a82a1e4.png_0.jpg',
                            item_title:'立领套装'
                        },{
                            item_img:'https://pic.hanfugou.com/web/2021/8/11/15/7facc4feb00346198bc8634e4bec8f1b.png_0.jpg',
                            item_title:'交领套装'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/13/9/41e59e985c6a4061b481a1ace562ce49.png_0.jpg',
                            item_title:'对襟套装'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/13/9/eb3757d04e1741d1b52668dfad86c6e5.png_0.jpg',
                            item_title:'齐胸套装'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/18/938c7106046c455da7f67c1a5412f33f.png_0.jpg',
                            item_title:'唐兴套装'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/18/7a2bdb36db0e4c42b61ed87eae1a6bad.png_0.jpg',
                            item_title:'珂子群装'
                        }
                        ]
                    },{
                        id:'goods2',
                        banner:'https://pic.hanfugou.com/web/2022/6/20/10/594fd86acad84507ac204b702257d8db.png_min.jpg',
                        catename:'男装',
                        goods_list:[
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/18/cf93c081d7094a74962e6a17add4c0e6.png_0.jpg',
                            item_title:'衣裳'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/18/dce37f695c5045ae98dcf849616142a4.png_0.jpg',
                            item_title:'阁撒'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/18/70b4d498f287426b9e324fbead9f580c.png_0.jpg',
                            item_title:'嗒护'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/18/ea87eca0cdd945f8aeda9013efa08ee7.png_0.jpg',
                            item_title:'道袍'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/18/1731e474079342f888f4afa4d12ecf2c.png_0.jpg',
                            item_title:'直裰'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/18/c3e17a8221294b0baa3c2f8ae894fed0.png_0.jpg',
                            item_title:'直身'
                        },
                        ]
                    },
                    {
                        id:'goods3',
                        banner:'https://pic.hanfugou.com/web/2022/6/15/18/8452f7946eee4821b5999d55d4dab3f4.png_min.jpg',
                        catename:'童装',
                        goods_list:[
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/9770f4195c3a40c2828fec47d8e62ec3.png_0.jpg',
                            item_title:'女装'
                        },{
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/23d18ee0589141909b8f86e413ae4f25.png_0.jpg',
                            item_title:'男装'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/0b2836e1ebc74abb90fe79ec5f18b067.png_0.jpg',
                            item_title:'褙子'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/8929ffbdeccb4ac89e25d73aefea29f1.png_0.jpg',
                            item_title:'裙裤'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/47b96f2b51ff48c6ab691aabe43a7999.png_0.jpg',
                            item_title:'中衣'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/cdb4d302905449db902fa0666de7d9fa.png_0.jpg',
                            item_title:'义领'
                        },
                        ]
                    },
                    {
                        id:'goods4',
                        banner:'https://pic.hanfugou.com/web/2022/6/16/19/8c1f0a1c26564179ae03f1c39ea78a98.png_min.jpg',
                        catename:'配饰',
                        goods_list:[
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/3fa6c57b734f48d6b76a4f34dfc2bd25.png_0.jpg',
                            item_title:'发饰'
                        },{
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/2f7251f8708946f484e2c23a9d7786c2.png_0.jpg',
                            item_title:'耳饰'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/751dd5ce4bfd4b5eb8861ca8c0cd35bd.png_0.jpg',
                            item_title:'缠花'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/180ec73520eb4757aa51419c7b029573.png_0.jpg',
                            item_title:'绒花'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/365f14812e5e46e28996d73ea64457d4.png_0.jpg',
                            item_title:'发带'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/09960f24908643ed87717e95ea9aafee.png_0.jpg',
                            item_title:'鞋/靴'
                        },
                        ]
                    },
                    {
                        id:'goods5',
                        banner:'https://pic.hanfugou.com/web/2022/6/14/19/8cd702b584e14021b0b1a609313694de.png_min.jpg',
                        catename:'美妆',
                        goods_list:[
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/13/9/b8f92cc5771a409e84b5ba30a1c5f6b8.png_0.jpg',
                            item_title:'彩妆套装'
                        },{
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/2f7251f8708946f484e2c23a9d7786c2.png_0.jpg',
                            item_title:'唇妆'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/18/a3e991e895774912b1b5641892bf0bfd.png_0.jpg',
                            item_title:'底妆'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/17/16/6958f2a03cc840a88a5de05213cdc3ac.png_0.jpg',
                            item_title:'护肤'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/17/16/a82abdadc385418da8bfe0cd1c419d82.png_0.jpg',
                            item_title:'高光修容'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/c4e7c8fb5fc34a33b9594abe531e7815.png_0.jpg',
                            item_title:'美甲'
                        },
                        ]
                    },
                    {
                        id:'goods6',
                        banner:'https://pic.hanfugou.com/web/2022/6/14/18/5159c896b60d4f478893f8c924c60d49.png_min.jpg',
                        catename:'文玩',
                        goods_list:[
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/2b737165076a4f3f8824edff39220cd9.png_0.jpg',
                            item_title:'扇子'
                        },{
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/ce9020af54884c319255c8cc8635d88e.png_0.jpg',
                            item_title:'包类'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/c7888f52a47c4a7ba86eb8eb2a82ede9.png_0.jpg',
                            item_title:'手捂'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/00bdd042966c439ab4b16a009f76a0b2.png_0.jpg',
                            item_title:'香事'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/dcec48267cfc4210af21c1594b5e919e.png_0.jpg',
                            item_title:'文房'
                        },
                        {
                            item_img:'https://pic.hanfugou.com/web/2021/8/12/20/21aae76b51ff492fbebb34e6ba5ea8f8.png_0.jpg',
                            item_title:'篆刻'
                        },
                        ]
                    },
                ],
                currentIndex:0,
                goodsShow:[],
                goodsImg:[]
            }
        },
        created() {
                this.itemClick(this.currentIndex)
        },
        methods: {
            itemClick(index){
                this.currentIndex = index
                this.goodsShow = this.cateList[this.currentIndex].goods_list
                this.goodsImg = this.cateList[this.currentIndex]
            },
            goodList(){
                this.$router.push('/category/goodList')
            }
        },
    }
</script>

<style scoped>
    .navbar{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
        background-color: #B0C4DE;
        color: whitesmoke;
    }
    .top{
        margin-top: 44px;
    }
     .goods-main{
        display: flex;
        width: 100%;
        height: 100%;
        background-color: #fff;
    }
    .left{
        position: fixed;
        left: 0;
        display: flex;
        flex-direction: column;
        width: 30px;
        height: 100%;
        padding: 0 10px;
        border-right: 1px solid #dcdcdc;
        text-align: center;
    }
    .cate-name{
        display: inline-block;
        margin-top: 20px;
        font-size: 14px;
    }
    .cate-name.active{
        font-size: 14px;
        color: #f60;
    }
    .right{
        width: 100%;
        margin-left: 50px;
        display: flex;
        flex-direction: column;
    }
    .content{
        margin-top: 0.5px;
    }
    .content-image{
        height: 110px;
        display: flex;
        justify-content: center;
    }
    .content-image img{
        width: 100%;
        height: 100%;
    }
    .cate-list{
        height: 100vh;
        margin: 10px 10px 0;
    }
    .cate-list:nth-child(1){
        margin-top: 0px;
    }
    .cate-list .cate-title{
        height: 45px;
        line-height: 45px;
        font-size: 15px;
        margin-top: 0px;
        text-align: center;
    }
    .goods-list{
        display: flex;
        flex-wrap: wrap;
    }
    .goods-list-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 125px;
        height: 150px;
        margin: 7px 13px;
    }
    .goods-list-item img{
        display: inline-block;
        width: 125px;
        height: 125px;
        border-radius: 10px;
        background-color: #eee;
    }
    .goods-list-item span{
        display: inline-block;
        font-size: 12px;
        margin-top: 8px;
    } 
</style>