<template>
    <div class="movie_body">
        <div class="wrapper">
            <ul>
                <li>
                    <div class="pic_show">
                        <img src="http://p0.meituan.net/128.180/movie/3a99e82eb46c2f5da78b4c64d805f9b12425410.jpg">
                    </div>
                    <div class="info_list">
                        <h2>罗马 <!----></h2>
                        <p>观众评 <span   class="grade">8.6</span></p>
                        <p>主演: 雅利扎·阿巴里西奥,玛丽娜·德·塔维拉,迭戈·科蒂娜·奥特里</p>
                        <p>今天2家影院放映2场</p>
                    </div>
                    <div class="btn_mall">购票</div>
                </li>
                <li>
                    <div class="pic_show">
                        <img src="http://p0.meituan.net/128.180/movie/3a99e82eb46c2f5da78b4c64d805f9b12425410.jpg">
                    </div>
                    <div class="info_list">
                        <h2>罗马 <!----></h2>
                        <p>观众评 <span   class="grade">8.6</span></p>
                        <p>主演: 雅利扎·阿巴里西奥,玛丽娜·德·塔维拉,迭戈·科蒂娜·奥特里</p>
                        <p>今天2家影院放映2场</p>
                    </div>
                    <div class="btn_mall">购票</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'nonwpalying'
}
</script>

<style scoped lang='scss'>
#content .movie_body{
    -webkit-box-flex: 1;
    flex: 1;
    overflow: auto;
    .wrapper{
        height: 100%;
        ul{
        margin: 0 12px;
        overflow: hidden;
        li{
            margin-top: 12px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            border-bottom: 1px solid #e6e6e6;
            padding-bottom: 10px;
            .pic_show{
            width: 64px;
            height: 90px;
            img{
                width: 100%;
            }
            }
            .info_list{
            margin-left: 10px;
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            position: relative;
            h2{
                font-size: 17px;
                line-height: 24px;
                width: 150px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                img{
                    width: 50px;
                    position: absolute;
                    right: 10px;
                    top: 5px;
                }
            }
            p{
                font-size: 13px;
                color: #666;
                line-height: 22px;
                width: 200px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .grade{
                font-weight: 700;
                color: #faaf00;
                font-size: 15px;
                }
            }
        }
        }
    }
    .btn_mall,
    .btn_pre{
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    background-color: #f03d37;
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
}
}
</style>
