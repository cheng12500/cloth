<template>
    <div class="input">
        <input type="text" placeholder="大家都是搜：汉服女装" class="aninput"/>
        <img src="../../assets/img/home/搜索小.png">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.input{
    display: flex;
    background-color: #eeeeee;
    height: 34px;
    margin: 0 auto;
    justify-content: space-between;
}

img{
    width: 25px;
    height: 25px;
    padding-top: 5px;
}
.input .aninput{
    flex: 1;
    padding: 0 15px;
    font-size: 12px;
    border-radius: 30px;
    border: lightblue;
    outline: none;
}
</style>