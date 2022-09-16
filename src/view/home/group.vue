<template>
    <div class="box-one">
        <div class="box-one-icon" v-for="item in icon" :key="item.id">
            <img :src="item.iconUrl" alt="" srcset=""  @click="iconItem">
            <span>{{item.iconTex}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            icon:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        methods: {
            iconItem(){
                this.$router.replace('/category')
            }
        },
    }
</script>

<style scoped>
    .box-one{
        display: flex;
    }
    .box-one-icon{
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 12px;
        padding: 10px 0 5px;
        border-bottom: 10px solid #eee;
    }
    img{
        width: 100%;
        height:65%;
        margin-bottom: 10px;
        padding-left: 2px;
    }
</style>