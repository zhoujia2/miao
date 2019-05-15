<template>
    <footer id="footer">
        <ul>
            <router-link to="/movie" tag="li">
                <i class="iconfont icon-dianying"></i>
                <p>电影</p>
            </router-link>
            <router-link to="/cinimer" tag="li">
                <i class="iconfont icon-yingyuanb"></i>
                <p>影院</p>
            </router-link>
            <router-link to="/mine" tag="li">
                <i class="iconfont icon-icon-test"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
name : "tabar"
}
</script>

<style scoped lang="scss">
#footer{
    width: 100%;
    height: 50px;
    background: #fff;
    border-top: 2px solid #ebe8e3;
    position: fixed;
    left: 0;
    bottom: 0;
    ul{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    height: 50px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    li{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 40px;
    i{
        font-size: 20px;
    }
    p{
    font-size: 12px;
    line-height: 18px;
    }
    &.router-link-active{
        color: #e54847;
    }
    }
    }
}
</style>
