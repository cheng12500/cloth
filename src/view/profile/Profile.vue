<template>
    <div class="profile">
        <nav-bar class="navbar">
            <template #center>
                个人中心
            </template>
        </nav-bar>

        <div class="avatar">
            <img src="https://pic.hanfugou.com/pc/2017/4/17/15/f864af3e6de94f34bbece896e6342d8a.jpg_700x.jpg">
            <span>辞故南</span>
            <div class="mask"></div>
        </div>

        <div class="content">
            <div class="content-list">
                <img class="content-image" src="../../assets/img/profile/待付款.png">
                <div>待付款</div>
            </div>
            <div class="content-list">
                <img class="content-image" src="../../assets/img/profile/订单.png">
                <div>待发货</div>
            </div>
            <div class="content-list">
                <img class="content-image" src="../../assets/img/profile/待发货.png">
                <div>待收货</div>
            </div>
            <div class="content-list">
                <img class="content-image" src="../../assets/img/profile/待确认.png">
                <div>待确认</div>
            </div>
        </div>

        <div id="divider">
            <div class="cell">
                <div class="cell-item">
                    <div class="cell-one">
                        <img class="cell-image" src="../../assets/img/profile/个人资料.png">
                        <span>个人资料</span>
                    </div>
                    <span class="more">></span>
                </div>
                <div class="cell-item">
                    <div class="cell-one">
                        <img class="cell-image" src="../../assets/img/profile/浏览记录.png">
                        <span>浏览记录</span>
                    </div>
                    <span class="more">></span>
                </div>
                <div class="divider"></div>
            </div>
            <div class="cell">
                <div class="cell-item">
                    <div class="cell-one">
                        <img class="cell-image" src="../../assets/img/profile/售后服务.png">
                        <span>售后服务</span>
                    </div>
                    <span class="more">></span>
                </div>
                <div class="cell-item">
                    <div class="cell-one">
                        <img class="cell-image" src="../../assets/img/profile/购买记录.png">
                        <span>购买记录</span>
                    </div>
                    <span class="more">></span>
                </div>
                <div class="cell-item">
                    <div class="cell-one">
                        <img class="cell-image" src="../../assets/img/profile/我的优惠券.png">
                        <span>我的优惠券</span>
                    </div>
                    <span class="more">></span>
                </div>
                <div class="cell-item">
                    <div class="cell-one">
                        <img class="cell-image" src="../../assets/img/profile/地址.png">
                        <span>我的地址</span>
                    </div>
                    <span class="more">></span>
                </div>
                <div class="divider"></div>
            </div>
            <div class="cell">
                <div class="cell-item">
                    <div class="cell-one">
                        <img class="cell-image" src="../../assets/img/profile/设置.png">
                        <span>设置</span>
                    </div>
                    <span class="more">></span>
                </div>
                <div class="divider"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import NavBar from '../../components/common/NavBar'
    export default {
        components:{
            NavBar
        }
    }
</script>

<style scoped>
    .profile{
        padding-top: 44px;
        overflow-x: hidden;
    }
    .navbar{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
        background: #B0C4DE;
        color: whitesmoke;
    }
    .avatar{
        background: url('https://pic.hanfugou.com/pc/2017/4/17/15/9387e8c37bbc47a385b38eb6d593d569.jpg_700x.jpg');
        background-position: center;
        background-size: cover;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .mask{
        position: absolute;
        left: 0;
        top: 44px;
        width: 100%;
        height: 200px;
        z-index: 1;
        background-color: rgba(0,0,0,.1);
        backdrop-filter: blur(3px);
    }
    .avatar span{
        position: relative;
        z-index: 2;
        margin-top: 10px;
        color: #fff;
    }
    .avatar img{
        position: relative;
        z-index: 2;
        width: 100px;
        height: 100px;
        border: 5px solid rgba(246, 240, 240, 0.1);
        border-radius: 50%;
    }
    .content{
        background-color: #fff;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 20px 0;
    }
    .content-list{
        flex: 1;
        text-align: center;
    }
    .content-image{
        width: 32px;
        height: 32px;
    }

    .cell{
        font-size: 16px;
        background-color: #fff;
    }
    .cell-item{
        border-bottom: 2px solid #ddd;
        padding: 10px 10px 12px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 95%;
    }
    .cell-image{
        width: 12px;
        height: 12px;
        margin-right: 5px;
    }
    #divider{
        margin-bottom: 50px;
    }

    .divider{
        margin-top: 10px;
    }
    .cell-one{
        display: flex;
        align-items: center;
    }
    .more{
        font-size: 20px;
        color: #999999;
    }
      
</style>