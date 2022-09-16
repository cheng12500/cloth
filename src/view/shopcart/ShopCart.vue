<template>
    <div class="shopCart">
        <nav-bar class="navbar">
            <template #center>
                购物车({{cartList.length}})
            </template>
        </nav-bar>

         <div class="page-box" v-if="this.cartList.length > 0">
            <div class="top-box">
                    <div class="left">共{{cartList.length}}件商品</div>
                    <div class="right" @click="deleteClick">删除</div>
            </div>
        </div>
        
        <div class="item-list" v-for="(item,index) in cartList" :key="item.id">
            <div class="item" @click="detailClick(item.id)">
                <div class="shut" @click.stop="shutClick(index)">x</div>
                <div class="check-button" @click.stop="checkClick(index)" :class="{check:item.isCheck}">
                    <img src="../../assets/img/cart/tick.svg" alt="" srcset="">
                </div>
                <div class="pic">
                    <img :src="item.image">
                </div>
                <div class="content">
                    <div class="title">{{item.title}}</div>
                    <div class="price-info">
                        <div class="price">￥{{item.price}}</div>
                        <div class="oper">
                            <input type="button" :disabled="item.count<=1" value="-" class="reduce"  @click.stop="decreased(index)"/>
                            <input type="text" v-model="item.count"/>
                            <input type="button" value="+" class="add" @click.stop="increased(index)"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div class="no-content" v-if="this.cartList.length <= 0">
            <img src="../../assets/img/tabbar/shopcart.svg">
            <span class="spa">购物车竟然是空的</span>
            <span class="spw">再忙，也要买点东西什么的犒劳自己~</span>
        </div>
         <div class="total-box">
            <div class="all">
                <div class="check-button" :class="{check:isSelectAll}" @click="checkBtn">
                    <img src="../../assets/img/cart/tick.svg" alt="" srcset="">
                </div>
                <span>全选</span>
            </div>
            <div class="total-price">
                总价：<span class="price">￥{{totalPrice}}</span>
            </div>
            <div class="btn">去结算</div>
        </div>   
        <toast :message="message" :isShow="isShow"></toast>
    </div>
</template>

<script>
import NavBar from '../../components/common/NavBar';
import toast from '../../components/common/toast';

import { mapGetters } from 'vuex'
export default {
    components:{
        NavBar,
        toast
    },
    data() {
        return {
            message:'',
            isShow:false
        }
    },
    computed:{
        ...mapGetters(['cartList']),
        totalPrice(){
            return this.$store.state.cartList.filter(item=>{
                return item.isCheck
            }).reduce((pre,next)=>{
                return pre + next.price * next.count
            },0).toFixed(2)
        },
        isSelectAll(){
            if(this.cartList.length === 0) return false
            // return !(this.cartList.filter(item=>!item.isCheck).length)
            return this.cartList.every(item => item.isCheck)
        }
    },
    methods: {
        checkClick(index){
           this.$store.dispatch('isChecked',index)
        },
        checkBtn(){
            if(this.isSelectAll){ //全选选中
                this.cartList.forEach(item => item.isCheck = false)
            }else{  //部分或全部不选中
                this.cartList.forEach(item=>item.isCheck = true)
            }
        },
        decreased(index){
            this.$store.dispatch('decreased',index)
        },
        increased(index){
            this.$store.dispatch('increased',index)
        },
        deleteClick(){
            this.$store.dispatch('delete')
        },
        detailClick(id){
            // this.isShow = true
            //     this.message = `该功能还没有完善~~请谅解(*^▽^*)`
            //     setTimeout(()=>{
            //             this.isShow = false
            //             this.message = ''
            //     },2000)
            console.log(id);
            this.$router.push({
                path:'/detail/id',
                query:{
                    id
                }
            })
        },
        shutClick(index){
            this.$store.dispatch('shut',index)
        }
    },
}
</script>

<style scoped>
    .shopCart{
        margin-top: 44px;
        height: 100%;
        margin-bottom: calc(100% - 274px);
        /* background: #eee; */
        /* overflow-y: hidden; */
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
    .check{
        border-color: red;
        background-color: red;
    }
    .right{
        height: 30px;
    }
    .shut{
        position: absolute;
        top: 2px;
        right: 2px;
        width: 18px;
        height: 18px;
        line-height: 19px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid #c9c6c6;
    }
    .total-box{
        display: flex;
        align-items: center;
        position: fixed;
        justify-content: space-between;
        width: 100%;
        height: 55px;
        left: 0;
        bottom: 49px;
        background-color: rgb(227, 227, 227);
        padding: 0 10px;
        box-sizing: border-box;
    }
    .total-box .all{
        font-size: 12px;
        width: 100px;
        margin-top: 5px;
    }
    .top-box .total-price{
        font-size: 12px;
        flex: 1;
    }
    .total-box .total-price .price{
        font-size: 18px;
        color: #f60;
    }
    .total-box .btn{
        width: 75px;
        height: 35px;
        line-height: 35px;
        font-size: 16px;
        text-align: center;
        border-radius: 5px;
        flex: 0.8;
        background: #eee;
    }
    .item{
        position: relative;
    }
    .item .check-button {
        width: 16px;
        height: 16px;
        display: inline-block;
        margin-right: 8px;
        vertical-align: top;
        border-radius: 50%;
        border: 2px solid #aaa;
    }
    .item .check-button img{
        width: 16px;
        height: 16px;
        margin-left: 1px;
        vertical-align: top;
    }
    .all{
        display: flex;
        align-items: center;
    }
    .all .check-button{
        width: 16px;
        height: 16px;
        display: inline-block;
        margin-right: 4px;
        vertical-align: bottom;
        border-radius: 50%;
        border: 2px solid #aaa;
    }
    .all .check-button img{
        width: 16px;
        height: 16px;
        margin-left: 2px;
        vertical-align: top;
    }
    .no-content{
        padding-top: 50px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .no-content img{
        width: 30%;
        height: 100px;
    }
    .no-content .spw{
        color: #666;
        padding-top: 10px;
        font-size: 14px;
    }
    .no-content .spa{
        padding-top: 10px;
        font-size: 16px;
    }

    .item-list{
        background-color: #fff;
        border-bottom: 5px solid #eee;
        padding: 0 5px 5px;
    }
    .item-list .item{
        padding: 10px 0 5px;
        display: flex;
        align-items: center;
    }
    .item-list .item :checked{
        margin-right: 5px;
    }
    .item-list .item .pic img{
        width: 95px;
        height: 95px;
        border-radius: 10px;
    }
    .content{
        margin-left: 10px;
        width: 100%;
    }
    .content .title{
        width: 100%;
        height: 45px;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 16px;
    }
    .content .desc{
        font-size: 14px;
        columns: #999;
    }
    .price-info{
        display: flex;
        justify-content: space-between;
    }
    .content .price-info .price{
        width: 65%;
        font-size: 18px;
        color: #f60;
    }
    .content .oper{
        display: flex;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .content .oper .add{
        width: 25px;
        text-align: center;
        border-left: 1px solid #ccc;
    }
    .content .oper .reduce{
        width: 25px;
        text-align: center;
        border-right: 1px solid #ccc;
    }
    .content .oper input{
        width: 40px;
        text-align: center;
        font-size: 12px;
        outline: none;
        border: none;
    }

    .top-box{
        display: flex;
        height: 40px;
        line-height: 40px;
        background: #eee;
        padding: 0 15px;
        font-size: 14px;
    }
    .top-box .left{
        flex: 1;
    }
</style>