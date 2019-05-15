<template>
    <div id="mian">
        <Heade title="猫影院" />
        <div id="content">
            <div class="cinema_menu">
                <div class="city_switch">全城 <i class="iconfont"></i></div>
                <div class="brand_swtich">品牌 <i class="iconfont"></i></div>
                <div class="feature_switch">特色 <i class="iconfont"></i></div>
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
    name : "cinimer",
    components:{
        Heade,
        Footer
    }
}
</script>

<style lang="scss" scoped>
    #content .cinema_menu{
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #fff;
}
</style>
