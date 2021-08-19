<template>
    <div class="body">
        <div class="banner">
            <div class="banner_img" :style="bannerStyle">
                <div class="banner_content">
                    <div class="banner_text">
                        <div class="banner_title">DDR4 4GB | eMMC 5.0 8GB</div>
                        <div class="banner_tit">EasePi ARS2</div>
                        <div class="banner_info">EasePi ARS2，是易有云团队推出的基于<br />RTD1296处理器且带存储的软路由开发板。
                        </div>
                        <div class="banner_describe">RTD1296 1.4GHz x4
                        </div>
                        <div class="banner_poster">
                            <a href="#" class="banner_btn">立即抢购</a>
                            <div class="banner_prices">
                                <span class="banner_price">¥618</span>
                                <span class="banner_priceinfo">早鸟价</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div class="introduce1">
            <div class="introduce1_img" :style="introduce1Style">
                <div class="introduce1_content">
                    <div class="introduce1_info">
                        <div class="introduce1_title">ARS2</div>
                        <div class="introduce1_tit">丰富的接口和强劲的性能,不再限制
                            你的创意和想法
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="introduce2">
            <div class="introduce2_img" :style="introduce2Style">
                <div class="introduce2_content">
                    <div class="introduce2_text">
                        <div class="introduce2_tit">基本功能</div>

                        <div class="introduce2_info">
                            <div class="introduce2_ico">
                                <img :src="icon_drop">
                                <span class="introduce2_infotit">低功率</span>
                            </div>
                            <p>待机功率3w,更省电</p>
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
                                <span class="introduce2_infotit">救援模式与主系统独立</span>
                            </div>
                            <p>轻松解决主系统刷机或配置错误的问题
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="introduce3">
            <div class="introduce3_img" :style="introduce3Style">
                <div class="introduce3_content">
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
                                <span class="en">VPU</span>
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
            <div class="introduce4_content">
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
            <div class="introduce5_content">
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
            <div class="introduce6_content">
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

                <div class="introduce6_content2">
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
import banner from "../public/home/bg1.png"
import bg2 from "../public/home/bg2.png"
import bg3 from "../public/home/bg3.png"
import bg4 from "../public/home/bg4.png"
import icon_drop from "../public/home/icon_drop.png"
import icon_media from "../public/home/icon_media.png"
import icon_rescuemode from "../public/home/icon_rescuemode.png"
import icon_Soc from "../public/home/icon_Soc.png"
import arrow from "../public/home/arrow.png"

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
            arrow


        }
    }
}
</script>

<style lang="scss" scoped>
.body {
    font-family: PingFangSC-Semibold, PingFang SC;
    margin: 0 auto;
    .banner {
        height: 933px;
        margin: 0 auto;
        .banner_img {
            width: 100%;
            height: 100%;
            background-size: cover;
        }

        .banner_content {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            .banner_text {
                flex: 0 0 100%;
                max-width: 1428px;
                margin: 0 auto;
                .banner_title {
                    font-size: 18px;
                    font-family: PingFangSC-Semibold, PingFang SC;
                    font-weight: 600;
                    color: #ff2c3b;
                    line-height: 25px;
                }
                .banner_tit {
                    font-size: 60px;
                    font-weight: 600;
                    color: #000000;
                    line-height: 84px;
                }
                .banner_info {
                    width: 425px;
                    height: 56px;
                    font-size: 20px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 0.63);
                    line-height: 28px;
                    margin: 20px 0 40px 0;
                }
                .banner_describe {
                    font-size: 14px;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 0.63);
                    line-height: 20px;
                    span {
                        width: 218px;
                        height: 20px;
                        background: #000000;
                        border-radius: 2px;
                        font-size: 14px;
                        font-weight: 600;
                        color: #ffffff;
                        line-height: 20px;
                        padding: 0 16px;
                        margin-left: 10px;
                    }
                }
                .banner_poster {
                    margin-top: 60px;
                    display: flex;
                    .banner_btn {
                        display: inline-block;
                        width: 176px;
                        height: 66px;
                        background: #0060ff;
                        border-radius: 33px;
                        font-size: 24px;
                        font-weight: 600;
                        color: #ffffff;
                        line-height: 66px;
                        text-align: center;
                    }
                    .banner_prices {
                        text-align: end;
                    }
                    .banner_btn:hover {
                        opacity: 0.9;
                    }
                    .banner_price {
                        font-size: 50px;
                        font-family: Impact;
                        color: #000000;
                        line-height: 61px;
                        margin-left: 28px;
                    }
                    .banner_priceinfo {
                        font-size: 20px;
                        font-weight: 600;
                        color: rgba(0, 0, 0, 0.63);
                        line-height: 28px;
                        margin-left: 16px;
                    }
                }
            }
        }
    }
    .introduce1 {
        height: 1368px;

        .introduce1_img {
            width: 100%;
            height: 100%;
            background-size: cover;

            .introduce1_content {
                max-width: 1428px;
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
                        font-size: 284px;
                        font-weight: bold;
                    }
                    .introduce1_tit {
                        font-size: 34px;
                        font-weight: 500;
                        color: #ffffff;
                        line-height: 48px;
                        padding-top: 138px;
                        position: absolute;
                        top: 132px;
                        left: 314px;
                    }
                }
            }
        }
    }
    .introduce2 {
        height: 924px;
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
                    max-width: 1428px;
                    margin: 0 auto;
                    .introduce2_tit {
                        font-size: 60px;
                        font-weight: 600;
                        color: #d2b56b;
                        line-height: 84px;
                        margin-bottom: 54px;
                    }
                    .introduce2_info {
                        padding-bottom: 32px;
                        .introduce2_ico {
                            display: flex;
                            align-items: center;
                            img {
                                width: 24px;
                                height: 24px;
                            }
                            .introduce2_infotit {
                                font-size: 24px;
                                font-weight: 600;
                                color: #ffffff;
                                line-height: 34px;
                                padding-left: 14px;
                            }
                        }
                        p {
                            font-size: 14px;
                            font-weight: 400;
                            color: #ffffff;
                            line-height: 20px;
                            padding-left: 43px;
                        }
                    }
                }
            }
        }
    }
    .introduce3 {
        height: 1002px;
        .introduce3_img {
            width: 100%;
            height: 100%;
            background-size: cover;
            .introduce3_content {
                max-width: 1428px;
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
                        height: 206px;
                        margin-bottom: 32px;
                        position: relative;
                        border-radius: 16px;
                        .introduce3_info {
                            padding-left: 62px;
                            padding-top: 12px;
                            color: #d2b56b;
                            .num {
                                font-family: Impact;
                                font-size: 100px;
                            }
                            .letter {
                                font-size: 100px;
                                font-family: Helvetica Neue Bold;
                                font-size: 80px;
                                font-weight: bold;
                            }
                            .en {
                                font-size: 100px;
                                font-family: DINAlternate-Bold, DINAlternate;
                            }
                            p {
                                font-size: 20px;
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
        background: #000;

        .introduce4_content {
            max-width: 1428px;
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
                    height: 208px;
                    padding: 28px 0;
                    .introduce4_img {
                        width: 168px;
                        height: 168px;
                        background: #d7d7d7;
                        border-radius: 120px;
                        margin: 0 auto;
                    }
                    p {
                        font-size: 20px;
                        font-weight: 500;
                        color: #ffffff;
                        line-height: 28px;
                    }
                }
            }
        }
    }
    .introduce5 {
        height: 600px;
        background: #333;
        .introduce5_content {
            max-width: 1428px;
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
                        height: 206px;
                        background: linear-gradient(
                            225deg,
                            rgba(255, 255, 255, 0.81) 0%,
                            rgba(255, 255, 255, 0.4) 100%
                        );
                        border-radius: 16px;
                        opacity: 0.23;
                    }
                    p {
                        font-size: 20px;
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
        background: #000;
        .introduce6_content {
            max-width: 1428px;
            margin: 0 auto;
            .list_tit {
                font-size: 32px;
                font-weight: 600;
                color: #ffffff;
                line-height: 45px;
            }
            .introduce6_list {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .list_block {
                    height: 348px;
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
                        font-size: 24px;
                        font-weight: 500;
                        color: #ffffff;
                        line-height: 98px;
                        padding-left: 32px;
                    }

                    .block_contents {
                        padding: 0 32px;
                    }
                    .block_info {
                        font-size: 24px;
                        font-weight: 500;
                        color: #ffffff;
                        line-height: 82px;
                        border-bottom: 2px solid #222;
                        height: 82px;
                        padding-left: 32px;
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
                    height: 400px;
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
                            height: 82px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            flex-wrap: wrap;
                            border-bottom: 2px solid #222;
                            .block_info {
                                height: 100%;

                                font-size: 24px;
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
    font-size: 60px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #d2b56b;
    line-height: 84px;
    padding-top: 100px;
    margin-bottom: 42px;
}
</style>