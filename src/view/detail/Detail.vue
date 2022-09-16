<template>
    <div id="detail">
        <nav-bar class="title-nav">
            <template #left>
                <img @click="itemClick" src="../../assets/img/common/back.svg" alt="" srcset="">
            </template>
            <template #center>
                商品详细
            </template>
        </nav-bar>
        <swiper class="swiperH">
        <swiper-item v-for="(item,index) in goodsImg" :key="index">
            <img class="swiper" :src="item" alt="">
        </swiper-item>
        </swiper>

        <div class="goodsinfo">
            <div class="price">
                <span class="cprice">￥{{DetailPro.salePrice}}</span>
                <span class="oprice">￥{{DetailPro.yuanPrice}}</span>
            </div>
            <div class="goodsinfo-top">
                <div class="goodstitle">{{DetailPro.title}}</div>
            </div>
            <div class="tags-list">
                <span>金币可抵0.54元起</span>
                <span>店铺卷满78减5</span>
            </div>
            <div class="like">
                <span>运费：包邮</span>
                <span>库存：{{DetailPro.kun}}</span>
                <span>{{DetailPro.stock}}人已种草</span>
            </div>
        </div>

        <div class="pickerPanel">
            <div class="item-one">
                <span class="one">选择</span>
                <span class="two">请选择 颜色 尺码</span>
            </div>
            <div class="item-one">
                <span class="one">保障</span>
                <span class="two">正品保证 七天无理由退货</span>
            </div>
            <div class="item-one">
                <span class="one">支付</span>
                <div class="three">
                    <div class="plan">
                        <img src="../../assets/img/detail/微信支付.png" alt="" srcset="">
                        <span>微信支付</span>
                    </div>
                    <div class="plan">
                        <img src="../../assets/img/detail/支付宝.png" alt="" srcset="">
                        <span>支付宝</span>
                    </div>
                    <div class="plan">
                        <img src="../../assets/img/detail/银行卡1.png" alt="" srcset="">
                        <span>银行卡</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="goods-detail">
            <span class="show">————商品展示————</span>
                <img v-for="(item,index) in goodsImg" :src="item" :key="index">
                <img src="https://pic.hanfugou.com/web/2021/6/24/12/7dc2223a1668499294f220803c6007b1.jpg_700xshop.jpg" class="last-img">
        </div>

        <div class="product-bottom">
            <div class="bottom-nav" @click="backClick">
                <img src="../../assets/img/detail/首页.png">
                <div>首页</div>
            </div>
            <div class="bottom-nav" @click="messageClick">
                <img src="../../assets/img/detail/店铺.png">
                <div>店铺</div>
            </div>
            <div class="bottom-nav" @click="cartClick">
                <img src="../../assets/img/detail/种草.png">
                <div>种草</div>
            </div>
            <div class="add-cart" @click="addCart">加入购物车</div>
            <div class="add-buy">立即购买</div>
        </div>

        <toast :message="message" :isShow="isShow"></toast>
    </div>
</template>

<script>
import { goodsDetail } from '../../server/getList'

import NavBar from '../../components/common/NavBar'
import toast from '../../components/common/toast';
import {Swiper,SwiperItem} from '../../components/common/swiper'

    export default {
        components:{
            NavBar,
            Swiper,
            SwiperItem,
            toast
        },
        data() {
            return {
                id:null,
                DetailPro:[],
                goodsImg:[],
                message:'',
                isShow:false
            }
        },
        created() {
            this.id = this.$route.query.id
            this.$nextTick(()=>{
                this.goodsDetailPro(this.id)
            })
        },
        methods: {
            itemClick(){
                this.$router.go(-1)
            },
            goodsDetailPro(id){
                goodsDetail(id).then(res=>{
                    this.DetailPro = res.data.message[0]
                    this.goodsImg = res.data.message[0].goodsimg.split(',')
                })
            },
            backClick(){
                this.$router.back()
            },
            cartClick(){
              this.$router.push('/shopcart')
            },
            messageClick(){
                this.isShow = true
                this.message = `查看店铺不支持~~请谅解(*^▽^*)`
                setTimeout(()=>{
                        this.isShow = false
                        this.message = ''
                },5000)
            },
            addCart(){
                const product = {}
                product.id = this.id
                product.image = this.DetailPro.goodsImage
                product.title = this.DetailPro.title
                product.price = this.DetailPro.salePrice
                product.yuanPrice = this.DetailPro.yuanPrice
                product.kun = this.DetailPro.kun
                product.stock = this.DetailPro.stock

                this.$store.dispatch('addCart',product).then(res=>{
                    this.isShow = true
                    this.message = res
                    setTimeout(()=>{
                        this.isShow = false
                        this.message = ''
                    },3000)
                })
            }
        }
    }
</script>

<style scoped>
    .swiperH{
        padding-top: 44px;
    }
    #detail{
        width: 100%;
        position: relative;
        left: 0;
        right: 0;
        background: #fff;
        height: 100vh;
        z-index: 9;
        overflow-x: hidden;
    }
    .title-nav{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 9;
        color: whitesmoke;
        background: #B0C4DE;
    }
    .title-nav img{
        vertical-align: middle;
    }
    .swiper img{
        width: 100%;
        height: 470px;
    }
    .goodstitle{
        margin: 0 5px;
    }
    .goodsinfo{
        background-color: #fff;
        border-bottom: 10px solid #eee;
    }
    .goodsinfo-top{
        width: 100%;
        padding: 5px 5px 5px;
        margin: 5px;
        display: flex;
        align-items: center;
    }
    .button-share{
        right: -45px;
        width: 30px;
        height: 30px;
        margin-left: 5px;
        align-items: center;
        background-color: #fff;
        font-weight: normal;
    }
    .button-share::after{
        border: none;
    }
    .goodsale{
        padding: 5px 0;
    }
    .price{
        padding: 5px 5px 0px;
    }
    .cprice{
        color: #f00;
        font-size: 24px;
    }
    .oprice{
        color: #ccc;
        font-size: 16px;
        padding: 0 10px;
        text-decoration: line-through;
    }
    .snum{
        color: #ccc;
        font-size: 14px;
    }
    .like{
        display: flex;
        width: 96%;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: #999;
        padding: 0px 7.5px 5px;
    }
    .tags-list{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: 5px;
    }
    .tags-list span{
        padding: 5px 5px;
        background: #f60;
        font-size: 10px;
        color: #fff;
        span-align: center;
        border-radius: 4px;
        margin-right: 10px;
        margin-bottom: 5px;
    }
    .pickerPanel{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 10px 10px 10px;
        background-color: #fff;
        font-size: 14px;
        border-bottom: 10px solid #eee;
    }
    .pickerPanel .item-one{
        width: 100%;
        display: flex;
        color: #000;
        padding-bottom: 10px;
    }
    .item-one .one{
        color: #999;
        width: 15%;
    }
    .item-one .two{
        color: #333;
        font-size: 13px;
    }
    .item-one .three{
        display:flex;
        width: 100%;
    }
    .three .plan{
        display: flex;
        padding-right: 10px;
        align-items: center;
        color: #333;
        font-size: 13px;
    }
    .plan img{
        width: 20px;
        height: 20px;
        padding-right: 5px;
    }
    .chooseColor{
        display: flex;
        flex-direction: row;
        flex: 0 1 50%;
    }
    .color{
        width: 15px;
        height: 15px;
        border: 1px solid #000;
        margin-right: 7.5px;
    }
    .chooseColor img{
        width: 13.5px;
        height: 8px;
    }
    .chooseColor{
        background: #fff;
    }
    .goods-detail img{
        width: 100%;
    }
    .goods-detail img:last-child{
        margin-bottom: 38px;
    }
    .goods-detail{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .goods-detail .show{
        color: #999999;
        padding-bottom: 7.5px;
    }
    .product-bottom{
        width: 100%;
        height: 50px;
        display: flex;
        position: fixed;
        left: 0;
        bottom: 0;
        background: #fff;
        padding-bottom: 2.5px;
        box-shadow: 0 -1px 2px rgb(100 100 100 / 20%);
    }
    .bottom-nav{
        display: flex;
        flex-direction: column;
        flex: 0.5;
        font-size: 15px;
        color: #999999;
        justify-content: center;
        align-items: center;
        font-style: 14px;
        position: relative;
    }
    .bottom-nav img{
        width: 22.5px;
        height: 20px;
    }
    .add-cart{
        flex: 1;
        text-align: center;
        line-height: 50px;
        font-size: 18px;
        background: #ffa900;
        color: #fff;
    }
    .add-buy{
        flex: 1;
        text-align: center;
        line-height: 50px;
        font-size: 18px;
        background: #fe7302;
        color: #fff;
    }

</style>