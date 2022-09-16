<template>
    <div class="like">
        <div class="like-top">
        ——————猜你喜欢——————
        </div>
        <div class="mall-sell" >
            <div class="sell-item" @click="itemSell(item.goodsNo)" v-for="item in getList" :key="item.id">
                <img :src="item.goodsImage" alt="" srcset="">
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
    export default {
        props:{
            getList:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods: {
          itemSell(index){
            // this.$router.push('/detail/' + index)
            this.$router.push({
              path:'/detail/id',
              query:{
                id:index
              }
            })
          }
        },
    }
</script>

<style scoped>
.like{
  padding: 10px 5px 50px;
  display: flex;
  flex-direction: column;
  background-color: #eee;
}
.like-top{
  margin:0 auto;
  padding-bottom: 10px;
  color: #6e6d6d;
}
.mall-sell{
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
.sell-item image{
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
  width: 85px;
  height: 15px;
  font-size: 11px;
  padding: 2.5px 5px ;
  border: 1px solid #ec3030;
  color:red;
  margin-left: 5px;
}
.sell-price{
  margin: auto;
  padding: 5px 0px 5px;
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