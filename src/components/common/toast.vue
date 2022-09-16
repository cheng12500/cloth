<template>
  <div class="toast" v-show="isShow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    name:"Toast",
    props:{
        message:{
            type:String,
            default:''
        },
        isShow:{
            type:Boolean,
            default:false
        }
    },
}
</script>

<style scoped>
    .toast{
        position: fixed;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 8px 10px;
        color: #fff;
        background-color: rgba(0, 0, 0, .75);
        z-index: 999;
        animation: cart 3s 1;
        text-align: center;
    }
    @keyframes cart {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>
