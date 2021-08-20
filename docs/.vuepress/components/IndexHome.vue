<template>
    <div class="body">
        <div class="banner">
            <div class="banner_img" :style="bannerStyle">
                <div class="banner_content">
                    <div class="banner_text max_width">
                        <div class="banner_title">DDR4 4GB | eMMC 5.0 8GB | 4核 RTD1296</div>
                        <div class="banner_tit">EasePi ARS2</div>
                        <div class="banner_info">EasePi ARS2，是易有云团队推出的基于<br />RTD1296处理器且带存储的软路由开发板
                        </div>
                        <div class="banner_poster">
                            <a href="#" class="banner_btn">立即抢购</a>
                            <div class="banner_prices">
                                <div class="banner_price">¥618</div>
                                <img :src="icon_tag">
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div class="introduce1">
            <div class="introduce1_img" :style="introduce1Style">
                <div class="introduce1_content max_width">
                    <div class="introduce1_info">
                        <div class="introduce1_title">ARS2</div>
                        <div class="introduce1_tit">丰富的接口和强劲的性能，不再限制你的创意和想法
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="introduce2">
            <div class="introduce2_img" :style="introduce2Style">
                <div class="introduce2_content">
                    <div class="introduce2_text max_width">
                        <div class="introduce2_tit">基本功能</div>

                        <div class="introduce2_info">
                            <div class="introduce2_ico">
                                <img :src="icon_drop">
                                <span class="introduce2_infotit">低功率</span>
                            </div>
                            <p>待机功率3w，更省电</p>
                        </div>

                        <div class="introduce2_info">
                            <div class="introduce2_ico">
                                <img :src="icon_Soc">
                                <span class="introduce2_infotit">SoC原生支持</span>
                            </div>
                            <p>-两个千兆以太网口
                            </p>
                            <p>-两个SATA接口
                            </p>
                        </div>

                        <div class="introduce2_info">
                            <div class="introduce2_ico">
                                <img :src="icon_media">
                                <span class="introduce2_infotit">支持流媒体硬解码
                                </span>
                            </div>
                            <p>支持H264、H265 4K@60P
                            </p>
                        </div>

                        <div class="introduce2_info">
                            <div class="introduce2_ico">
                                <img :src="icon_rescuemode">
                                <span class="introduce2_infotit">独立救援模式</span>
                            </div>
                            <p>轻松解决主系统刷机或配置错误
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="introduce3">
            <div class="introduce3_img" :style="introduce3Style">
                <div class="introduce3_content max_width">
                    <div class="introduce3_blocks">

                        <div class="introduce3_block">
                            <div class="introduce3_info">
                                <span class="num">8</span>
                                <span class="letter">G</span>
                                <p>自带 8G eMMC，从此摆脱TF卡，刷机折腾更方便</p>
                            </div>
                        </div>

                        <div class="introduce3_block">
                            <div class="introduce3_info">
                                <span class="num">4</span>
                                <span class="letter">G</span>
                                <p>4G 大内存，nas、docker、jellyfin...撑起更多服务更流畅</p>
                            </div>
                        </div>

                        <div class="introduce3_block">
                            <div class="introduce3_info">
                                <span class="en">DSP</span>
                                <p>处理器流媒体硬解码，视频加载更快更清晰</p>
                            </div>
                        </div>

                        <div class="introduce3_block">
                            <div class="introduce3_info">
                                <span class="en">SATA</span>
                                <p>原生sata接口配稳定电源，数据传输更快更稳定</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

        <div class="introduce4">
            <div class="introduce4_content max_width">
                <div class="tit">软件支持</div>
                <div class="introduce4_list">
                    <template v-for="(item,i) in apps">
                        <a href="#" class="introduce4_listblock" :key="i">
                            <div class="introduce4_img">
                                <img :src="item.icon" alt="">
                            </div>
                            <p v-html="item.name"></p>
                        </a>
                    </template>
                </div>
            </div>
        </div>
        <div class="introduce5">
            <div class="introduce5_content max_width">
                <div class="tit">产品包含</div>
                <div class="introduce5_list">
                    <template v-for="(item,i) in product">
                        <div class="introduce5_blocks" :key="i">
                            <div class="introduce5_block"></div>
                            <p>{{item.tit}}</p>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div class="introduce6">
            <div class="introduce6_content max_width">
                <div class="tit">立即开始</div>
                <div class="list_tit">材料准备</div>
                <div class="introduce6_list">
                    <div class="list_block">
                        <div class="block_info1">必备物件:</div>
                        <div class="block_contents">
                            <div class="block_info line">千兆网线(不随开发板一同出售)</div>
                        </div>
                    </div>

                    <div class="list_block">
                        <div class="block_info1">可选物件</div>
                        <div class="block_info">十字螺丝套以供安装外壳</div>
                        <div class="block_info">M.2接口SATA协议硬盘</div>
                        <div class="block_info">SATA接口硬盘(2.5寸硬盘可安装进外壳内)</div>
                    </div>
                </div>

                <div class="introduce6_content2 max_width">
                    <div class="list_tit">查看文档</div>
                    <div class="content6_block">
                        <div class="block_list">
                            <a href="#" class="block_content">
                                <div class="block_info">如何安装外壳</div>
                                <img :src="arrow">
                            </a>
                            <a href="#" class="block_content">
                                <div class="block_info">如何配置成软路由</div>
                                <img :src="arrow">
                            </a>
                            <a href="#" class="block_content">
                                <div class="block_info">如何开启NAS功能</div>
                                <img :src="arrow">
                            </a>

                            <a href="#" class="block_content">
                                <div class="block_info">点击查看更多</div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Foodter></Foodter>
    </div>
</template>

<script>
import Foodter from './footer/index.vue'
import { apps, product } from "./apps.js"
import banner from "../public/home/bg1.jpg"
import bg2 from "../public/home/bg2.jpg"
import bg3 from "../public/home/bg3.jpg"
import bg4 from "../public/home/bg4.jpg"
import icon_drop from "../public/home/icon_drop.png"
import icon_media from "../public/home/icon_media.png"
import icon_rescuemode from "../public/home/icon_rescuemode.png"
import icon_Soc from "../public/home/icon_Soc.png"
import arrow from "../public/home/arrow.png"
import icon_tag from "../public/home/icon_tag.png"

export default {
    components: {
        Foodter
    },
    data() {
        return {
            apps,
            product,
            banner,
            bannerStyle: {  // 驼峰命名 
                backgroundImage: ` url(${banner})`
            },
            bg2,
            introduce1Style: {
                backgroundImage: `url(${bg2})`
            },
            bg3,
            introduce2Style: {
                backgroundImage: `url(${bg3})`
            },
            bg4,
            introduce3Style: {
                backgroundImage: `url(${bg4})`
            },
            icon_drop,
            icon_media,
            icon_rescuemode,
            icon_Soc,
            arrow,
            icon_tag


        }
    }
}
</script>

<style lang="scss" scoped>
.max_width {
    max-width: 1664px;
}
.body {
    font-family: PingFangSC-Semibold, PingFang SC;
    margin: 0 auto;
    background: linear-gradient(
        216deg,
        #000000 0%,
        #121212 23%,
        #0e0e0e 57%,
        #001835 100%
    );
    .banner {
        height: 1080px;
        margin: 0 auto;
        .banner_img {
            width: 100%;
            height: 100%;
            background-size: 100% 100%;
        }

        .banner_content {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            .banner_text {
                flex: 0 0 100%;
                margin: 0 auto;
                .banner_title {
                    font-size: 24px;
                    font-family: PingFangSC-Semibold, PingFang SC;
                    font-weight: 600;
                    color: #ff2c3b;
                    line-height: 33px;
                }
                .banner_tit {
                    font-size: 80px;
                    font-family: PingFangSC-Semibold, PingFang SC;
                    font-weight: 600;
                    color: #000000;
                    line-height: 112px;
                    height: 112px;
                }
                .banner_info {
                    font-size: 27px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 0.63);
                    height: 75px;
                }
                .banner_poster {
                    margin-top: 60px;
                    display: flex;
                    align-items: flex-end;
                    height: 88px;
                    position: relative;
                    .banner_btn {
                        width: 235px;
                        height: 88px;
                        background: #0060ff;
                        border-radius: 11px;
                        font-size: 32px;
                        font-family: PingFangSC-Semibold, PingFang SC;
                        font-weight: 600;
                        color: #ffffff;
                        line-height: 88px;
                        text-align: center;
                    }
                    .banner_btn:hover {
                        opacity: 0.9;
                    }
                    .banner_prices {
                        margin-left: 38px;
                        display: flex;
                        .banner_price {
                            font-size: 53px;
                            font-family: Impact;
                            color: #000000;
                            line-height: 53px;
                        }
                        img {
                            width: 60px;
                            position: absolute;
                            left: 368px;
                            top: 0;
                        }
                    }
                }
            }
        }
    }
    .introduce1 {
        height: 1133px;

        .introduce1_img {
            width: 100%;
            height: 100%;
            background-size: 100% 100%;

            .introduce1_content {
                margin: 0 auto;
                text-align: center;
                position: relative;
                .introduce1_info {
                    .introduce1_title {
                        background: linear-gradient(
                            180deg,
                            #c8ad6a 0%,
                            rgba(205, 177, 108, 0.03) 100%
                        );
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        font-size: 260px;
                        font-weight: bold;
                    }
                    .introduce1_tit {
                        font-size: 45px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #ffffff;
                        line-height: 64px;
                        padding-top: 92px;
                        position: absolute;
                        top: 132px;
                        left: 308px;
                    }
                }
            }
        }
    }
    .introduce2 {
        height: 1080px;
        .introduce2_img {
            width: 100%;
            height: 100%;
            background-size: 100% 100%;
            .introduce2_content {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                .introduce2_text {
                    flex: 0 0 100%;
                    margin: 0 auto;
                    .introduce2_tit {
                        width: 320px;
                        height: 112px;
                        font-size: 80px;
                        font-family: PingFangSC-Semibold, PingFang SC;
                        font-weight: 600;
                        color: #d2b56b;
                        line-height: 112px;
                        margin-bottom: 54px;
                    }
                    .introduce2_info {
                        padding-bottom: 32px;
                        .introduce2_ico {
                            display: flex;
                            align-items: center;
                            padding-bottom: 19px;
                            img {
                                width: 32px;
                                height: 32px;
                            }
                            .introduce2_infotit {
                                font-size: 32px;
                                font-weight: 600;
                                color: #ffffff;
                                line-height: 34px;
                                padding-left: 14px;
                            }
                        }
                        p {
                            font-size: 19px;
                            color: #ffffff;
                            padding-left: 43px;
                            line-height: 16px;
                        }
                    }
                }
            }
        }
    }
    .introduce3 {
        height: 1080px;
        .introduce3_img {
            width: 100%;
            height: 100%;
            background-size: 100% 100%;
            .introduce3_content {
                margin: 0 auto;
                .introduce3_blocks {
                    padding-top: 252px;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    align-items: center;
                    .introduce3_block {
                        flex: 0 0 100%;
                        max-width: calc(50% - 20px);
                        height: 275px;
                        margin-bottom: 32px;
                        position: relative;
                        border-radius: 16px;
                        .introduce3_info {
                            padding-left: 83px;
                            padding-top: 12px;
                            color: #d2b56b;
                            .num {
                                font-family: Impact;
                                font-size: 133px;
                            }
                            .letter {
                                font-size: 107px;
                                font-family: Helvetica Neue Bold;
                                font-weight: bold;
                            }
                            .en {
                                font-size: 133px;
                                font-family: DINAlternate-Bold, DINAlternate;
                            }
                            p {
                                font-size: 27px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #ffffff;
                                line-height: 28px;
                            }
                        }
                    }
                    .introduce3_block:after {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: linear-gradient(
                            225deg,
                            rgba(255, 255, 255, 0.81) 0%,
                            rgba(255, 255, 255, 0.4) 100%
                        );
                        opacity: 0.23;
                        border-radius: 16px;
                    }
                }
            }
        }
    }
    .introduce4 {
        height: 800px;

        .introduce4_content {
            margin: 0 auto;
            .introduce4_list {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                .introduce4_listblock {
                    text-align: center;
                    flex: 0 0 100%;
                    max-width: calc(20% - 10px);
                    padding: 28px 0;
                    .introduce4_img {
                        width: 224px;
                        height: 224px;
                        background: #d7d7d7;
                        border-radius: 160px;
                        margin: 0 auto;
                        // margin-bottom: 52px;
                    }
                    p {
                        font-size: 27px;
                        font-weight: 500;
                        color: #ffffff;
                        line-height: 37px;
                    }
                }
            }
        }
    }
    .introduce5 {
        height: 600px;
        margin-top: 318px;
        .introduce5_content {
            margin: 0 auto;
            .introduce5_list {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                .introduce5_blocks {
                    flex: 0 0 100%;
                    max-width: calc(20% - -62px);
                    text-align: center;
                    .introduce5_block {
                        width: 100%;
                        height: 275px;
                        background: linear-gradient(
                            225deg,
                            rgba(255, 255, 255, 0.81) 0%,
                            rgba(255, 255, 255, 0.4) 100%
                        );
                        border-radius: 16px;
                        opacity: 0.23;
                    }
                    p {
                        font-size: 27px;
                        font-weight: 400;
                        color: #ffffff;
                        line-height: 28px;
                    }
                }
            }
        }
    }
    .introduce6 {
        height: 100%;
        margin-top: 168px;
        .introduce6_content {
            margin: 0 auto;
            .list_tit {
                font-size: 43px;
                font-weight: 600;
                color: #ffffff;
                line-height: 45px;
            }
            .introduce6_list {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                .list_block {
                    height: 464px;
                    width: 100%;
                    max-width: calc(50% - 20px);
                    background: rgba(255, 255, 255, 0.15);
                    border-radius: 16px;
                    margin-top: 24px;
                    .block_info1 {
                        height: 98px;
                        background: rgba(255, 255, 255, 0.34);
                        border-top-left-radius: 16px;
                        border-top-right-radius: 16px;
                        font-size: 32px;
                        font-weight: 500;
                        color: #ffffff;
                        line-height: 98px;
                        padding-left: 32px;
                    }

                    .block_contents {
                        padding: 0 32px;
                    }
                    .block_info {
                        font-size: 32px;
                        font-weight: 500;
                        color: #ffffff;
                        // line-height: 82px;
                        border-bottom: 2px solid #222;
                        height: 82px;
                        padding-left: 32px;
                        display: flex;
                        align-items: center;
                    }
                    .block_info:last-child {
                        border-bottom: none;
                    }
                    .block_info.line {
                        border-bottom: 2px solid #222;
                        padding-left: 0;
                    }
                }
            }
            .introduce6_content2 {
                .list_tit {
                    margin-bottom: 24px;
                    font-size: 32px;
                    font-weight: 600;
                    color: #ffffff;
                    line-height: 45px;
                    margin-top: 102px;
                }
                .content6_block {
                    border-radius: 16px;
                    width: 100%;
                    height: 533px;
                    background: rgba(255, 255, 255, 0.15);
                    .block_list {
                        padding: 0 32px;
                        padding-top: 32px;
                        .block_content {
                            display: block;
                            text-decoration: none;
                            color: #ffffff;
                            width: 100%;
                            line-height: 82px;
                            height: 109px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            flex-wrap: wrap;
                            border-bottom: 2px solid #222;
                            .block_info {
                                font-size: 32px;
                                font-weight: 500;
                            }
                            img {
                                width: 32px;
                                height: 32px;
                            }
                        }
                        .block_content:last-child {
                            border-bottom: none;
                            color: #0060ff;
                        }
                        a:hover {
                            opacity: 0.9;
                        }
                    }
                }
            }
        }
    }
}
.tit {
    text-align: center;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    line-height: 84px;
    padding-top: 54px;
    margin-bottom: 94px;
    font-size: 80px;
    color: #d2b56b;
    line-height: 112px;
}
</style>


<style lang="scss" scoped>
@media screen and (max-width: 1440px) {
    .body {
        .max_width {
            max-width: 1080px;
        }
        .introduce1 {
            height: 1260px;
            .introduce1_img {
                .introduce1_content {
                    .introduce1_info {
                        .introduce1_tit {
                            left: 148px;
                        }
                    }
                }
            }
        }

        .introduce3 {
            height: 900px;
            .introduce3_img {
                .introduce3_content {
                    .introduce3_blocks {
                        .introduce3_block {
                            .introduce3_info {
                                p {
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }
                            }
                        }
                    }
                }
            }
        }
        .introduce4 {
            height: 1440px;
            .introduce4_content {
                .introduce4_list {
                    .introduce4_listblock {
                        max-width: calc(30% - 10px);
                    }
                }
            }
        }

        .introduce5 {
            height: 854px;
            .introduce5_content {
                .introduce5_list {
                    .introduce5_blocks {
                        max-width: calc(50% - 12px);
                    }
                }
            }
        }

        .introduce6 {
            .introduce6_content {
                .introduce6_list {
                    justify-content: center;
                    .list_block {
                        max-width: calc(100% - 12px);
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 1024px) {
    .body {
        .max_width {
            max-width: 768px;
        }
        .introduce1 {
            height: 1120px;
            .introduce1_img {
                .introduce1_content {
                    .introduce1_info {
                        .introduce1_tit {
                            left: 0px;
                        }
                    }
                }
            }
        }
        .introduce2 {
            height: 680px;
        }

        .introduce3 {
            height: 900px;
            .introduce3_img {
                .introduce3_content {
                    .introduce3_blocks {
                        .introduce3_block {
                            .introduce3_info {
                                p {
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }
                            }
                        }
                    }
                }
            }
        }

        .introduce4 {
            height: 1440px;
            .introduce4_content {
                .introduce4_list {
                    .introduce4_listblock {
                        max-width: calc(30% - 10px);
                    }
                }
            }
        }

        .introduce5 {
            height: 854px;
            .introduce5_content {
                .introduce5_list {
                    .introduce5_blocks {
                        max-width: calc(50% - 12px);
                    }
                }
            }
        }

        .introduce6 {
            .introduce6_content {
                .introduce6_list {
                    justify-content: center;
                    .list_block {
                        max-width: calc(100% - 12px);
                    }
                }
            }
        }
    }
}
</style>
