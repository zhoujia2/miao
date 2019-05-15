<template>
    <div class="cinema_body">
        <div class="wrapper">
            <ul>
                <li>
                    <div>
                        <span>艺城影城</span>
                        <span class="q"><span class="price">23</span> 元起</span>
                    </div>
                    <div class="address">
                        <span>白河县城关镇书院北路19号</span>
                        <span>968.2km</span>
                    </div>
                    <div class="card">
                        <div class="bl">改签</div><!----><!----><!---->
                        <div class="bl">退</div><!---->
                        <div class="or">折扣卡</div><!---->
                    </div>
                </li>
                <li>
                    <div>
                        <span>艺城影城</span>
                        <span class="q"><span class="price">23</span> 元起</span>
                    </div>
                    <div class="address">
                        <span>白河县城关镇书院北路19号</span>
                        <span>968.2km</span>
                    </div>
                    <div class="card">
                        <div class="bl">改签</div><!----><!----><!---->
                        <div class="bl">退</div><!---->
                        <div class="or">折扣卡</div><!---->
                    </div>
                </li>
                <li>
                    <div>
                        <span>艺城影城</span>
                        <span class="q"><span class="price">23</span> 元起</span>
                    </div>
                    <div class="address">
                        <span>白河县城关镇书院北路19号</span>
                        <span>968.2km</span>
                    </div>
                    <div class="card">
                        <div class="bl">改签</div><!----><!----><!---->
                        <div class="bl">退</div><!---->
                        <div class="or">折扣卡</div><!---->
                    </div>
                </li>
                <li>
                    <div>
                        <span>艺城影城</span>
                        <span class="q"><span class="price">23</span> 元起</span>
                    </div>
                    <div class="address">
                        <span>白河县城关镇书院北路19号</span>
                        <span>968.2km</span>
                    </div>
                    <div class="card">
                        <div class="bl">改签</div><!----><!----><!---->
                        <div class="bl">退</div><!---->
                        <div class="or">折扣卡</div><!---->
                    </div>
                </li>                
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='scss'>
#content .cinema_body{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: auto;
    div{
        margin-bottom: 10px;
    }
    .wrapper {
    height: 100%;
}
ul {
    padding: 20px;
}
li{
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 20px;
}
.q{
    font-size: 11px;
    color: #f03d37;
}
.price {
    font-size: 18px;
}
.address{
    font-size: 13px;
    color: #666;
    span{
        &:nth-of-type(2){
            float: right;
        }
    }
}
.card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    div{
    padding: 0 3px;
    height: 15px;
    line-height: 15px;
    border-radius: 2px;
    color: #f90;
    border: 1px solid #f90;
    font-size: 13px;
    margin-right: 5px;
    &.bl {
    color: #589daf;
    border: 1px solid #589daf;
}
    &.or{
    color: #f90;
    border: 1px solid #f90;
}
}
}
}
</style>
