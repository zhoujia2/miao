<template>
    <div id="main">
        <Heade title="猫电影" />
    <div id="content">
        <div class="movie_menu">
            <router-link class="city_name" to="/movie/city" tag="div">
                <span>安康</span>
                <i class="iconfont"></i>
            </router-link>
            <div class="hot_swtich">
                <router-link class="hot_item active" to="/movie/now" tag="div">正在热映</router-link>
                <router-link class="hot_item" to="/movie/come" tag="div">即将上映</router-link>
            </div>
            <router-link class="search_entry" to="/movie/search" tag="div">
                <i class="iconfont icon-search"></i>
            </router-link>
        </div>
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>

        <Footer />
    </div>
</template>

<script>
import Heade from '@/components/Header'
import Footer from '@/components/Tabar' 
export default {
    name : "movie",
    components:{
        Heade,
        Footer
    }
}
</script>

<style lang="scss" scoped>
  #content .movie_menu{
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #fff;
    z-index: 10;
    .city_name{
    margin-left: 20px;
    height: 100%;
    line-height: 45px;
    &.router-link-active{
    color: #ef4238;
    border-bottom: 2px solid #ef4238;
}
}
.hot_swtich {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    line-height: 45px;
    .hot_item{
    font-size: 15px;
    color: #666;
    width: 80px;
    text-align: center;
    margin: 0 12px;
    font-weight: 700;
    &.router-link-active{
    color: #ef4238;
    border-bottom: 2px solid #ef4238;
}
}
}
.search_entry{
    margin-right: 20px;
    height: 100%;
    line-height: 45px;
    &.router-link-active{
    color: #ef4238;
    border-bottom: 2px solid #ef4238;
}
}
}
</style>
