<template>
    <div id="main">
        <Heade title="我的猫" />
        <keep-alive>
        <router-view />
        </keep-alive>
        <Footer />
    </div>
</template>

<script>
import Heade from '@/components/Header'
import Footer from '@/components/Tabar' 
export default {
    name : "mine",
    components:{
        Heade,
        Footer
    }
}
</script>

<style lang="scss" scoped>
    
</style>
