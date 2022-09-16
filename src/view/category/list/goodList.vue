<template>
    <div class="good-list">
        <nav-bar class="navbar">
             <template #left>
                <img @click="itemClick" src="@/assets/img/common/back.svg" alt="" srcset="">
            </template>
            <template #center>
                商品列表
            </template>
        </nav-bar>

        <div class="filter">
            <div class="filter-tab">
                <span :class="sortPrice == 0?'active': ''" @click="lowPriseClick(1)">价格↓</span>
                <span :class="sortPrice == 1?'active': ''" @click="sortPriseClick(0)">价格↑</span>
                <span :class="sortPrice == 3?'active': ''" @click="newShopClick(1)">最新</span>
                <span :class="sortPrice == 2?'active': ''" @click="likeShopClick(0)">种草</span>
            </div>
            <div class="tab"></div>
        </div>

          <div class="mall-sell">
            <div class="sell-item" v-for="item in goodList" :key="item.id">
                <img :src="item.goodsImage" @click="detailClick(item.goodsNo)">
                    <span class="sell-title">{{item.title}}</span>
                    <span class="sell-mian">跨店满200减20</span>
                <div class="sell-price">
                    <span class="price">￥{{item.salePrice.toFixed(2)}}</span>
                    <span class="zhong">{{item.stock}}人种草</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/common/NavBar';

import { getList,sortPrice,lowPrise,newShop,likeShop } from '@/server/getList';
    export default {
        data() {
            return {
                goodList:[],
                sortPrice:0
            }
        },
        components:{
            NavBar
        },
        created() {
            this.getLists()
            // this.lowPriseClick(1)
        },
        methods:{
            getLists(){
                getList().then(res=>{
                    this.goodList = res.data.message
                })
            },
            itemClick(){
                this.$router.back()
            },
            newShopClick(id){
                newShop(id).then(res=>{
                    this.goodList = res.data.message
                    this.sortPrice = 3
                })
            },
            likeShopClick(id){
                likeShop(id).then(res=>{
                    this.goodList = res.data.message
                    this.sortPrice = 2
                })
            },
            sortPriseClick(id){
                sortPrice(id).then(res=>{
                    this.goodList = res.data.message
                    this.sortPrice = 1
                })
            },
            lowPriseClick(id){
                lowPrise(id).then(res=>{
                    this.goodList = res.data.message
                    this.sortPrice = 0
                })
            },
            detailClick(id){
                this.$router.push({
                    path:'/detail/id',
                    query:{
                        id
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .good-list{
        width: 100%;
        position: relative;
        left: 0;
        right: 0;
        background: #eee;
        height: 100vh;
        z-index: 99;
        overflow-y: scroll;
    }
    .navbar{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
        background-color: #B0C4DE;
        color: whitesmoke;
    }
    .navbar img{
        vertical-align: middle;
    }
    .filter-tab{
        padding-top: 44px;
        display: flex;
        width: 100%;
        line-height: 40px;
        border-bottom: 1px solid #ddd;
        position: relative;
        background-color: #fff;
        position: fixed;
        top: 0;
    }
    .tab{
        width: 100%;
        height: 40px;
    }
    .filter-tab span{
        flex: 1;
        text-align: center;
    }
    .filter-tab span::after{
        content: '';
        display: inline-block;
        vertical-align: 2px;
        width: 0;
        height: 0;
        border-top: 6px solid #bbb;
        margin-left: 4px;
    }
    .filter-tab span.active{
        color: #B0C4DE;
        border-bottom: 3px solid #9bb7db;
        font-weight: bold;
    }
    .filter-panel{
        display: flex;
        background-color: #f5f5f5;
        position: absolute;
        width: 100%;
        z-index: 13;
        overflow: hidden;
    }
    .filter-panel-item{
        flex: 1;
        line-height: 40px;
        text-align: center;
        max-height: 240px;
        overflow-y: auto;
    }
    .filter-shadow{
        position: absolute;
        width: 100%;
        top: 0;
        bottom: 0;
        z-index: 1;
        background-color: rgb(0,0,0,.5);
    }
    .mall-sell::after{
        content: '';
        display: block;
        width: 100%;
        height: 20px;
    }
    .mall-sell{
        padding-bottom: 20px;
        margin-top: 50px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .sell-item{
        width: 48%;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 12px;
        border-bottom: 10px solid #eee;
    }
    .sell-item img{
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
        width: 100%;
        height: 225px;
    }
    .sell-title{
        padding: 5px 5px 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
    }
    .sell-mian{
        width: 80px;
        height: 15px;
        font-size: 11px;
        padding: 2px 5px ;
        border: 1px solid #ec3030;
        color:red;
        text-align: center;
        white-space: nowrap;
        margin-left: 5px;
    }
    .sell-price{
        margin: auto;
        padding: 5px 0 5px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    .sell-price .price{
        padding-left: 5px;
        font-size: 17px;
        color: red;
    }
    .sell-price .zhong{
        font-size: 12px;
        padding-right: 5px;
        color: rgb(124, 122, 122);
    }
</style>