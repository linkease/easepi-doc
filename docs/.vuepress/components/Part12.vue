<template>
    <div class="body">
        <div class="part2">
            <div class="part2_content max-width">
                <div class="part2_block">
                    <div class="part2_left">
                        <div class="part2_leftTitle" title="基本功能">基本功能</div>
                        <div class="part2_leftInfo">
                            <div class="part2_leftInfoList">
                                <div class="part2_InfoTile">
                                    <img class="icon" :src="icon_drop" loading="lazy">
                                    <div class="part2_infoTit" title="低功耗">低功耗</div>
                                </div>
                                <div class="part2_infoText" title="待机功率仅约3W，更省电更环保">待机功率仅约3W，更省电更环保</div>
                            </div>

                            <div class="part2_leftInfoList">
                                <div class="part2_InfoTile">
                                    <img class="icon" :src="icon_Soc" loading="lazy">
                                    <div class="part2_infoTit" title="SoC原生支持">SoC原生支持</div>
                                </div>
                                <div class="part2_infoText" title="一个M.2 SATA 接口  一个SATA 3 接口">两个千兆以太网口<br />
                                    一个M.2 SATA 接口<br />
                                    一个SATA 3 接口</div>
                            </div>

                            <div class="part2_leftInfoList">
                                <div class="part2_InfoTile">
                                    <img class="icon" :src="icon_media" loading="lazy">
                                    <div class="part2_infoTit" title="支持流媒体硬解码">支持流媒体硬解码</div>
                                </div>
                                <div class="part2_infoText" title="支持H264、H265 4K@60P">支持H264、H265 4K@60P</div>
                            </div>

                            <div class="part2_leftInfoList">
                                <div class="part2_InfoTile">
                                    <img class="icon" :src="icon_rescuemode" loading="lazy">
                                    <div class="part2_infoTit" title="独立救援模式">独立救援模式</div>
                                </div>
                                <div class="part2_infoText" title="轻松解决主系统刷机失败或配置错误">轻松解决主系统刷机失败或配置错误</div>
                            </div>
                        </div>
                    </div>
                    <div class="part2_right">
                        <img :src="part2_img" loading="lazy">
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import part2_img from "../public/home/part2_img.png"
import icon_drop from "../public/svg/icon_drop.svg"
import icon_media from "../public/svg/icon_media.svg"
import icon_rescuemode from "../public/svg/icon_rescuemode.svg"
import icon_Soc from "../public/svg/icon_Soc.svg"
export default {
    data() {
        return {
            part2_img,
            icon_drop,
            icon_media,
            icon_rescuemode,
            icon_Soc
        }
    }

}
</script>

<style lang="scss" scoped>
* {
    -webkit-box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    word-wrap: break-word;
    outline: none;
}
.body {
    background-color: #000;
    padding-bottom: 100px;
    .max-width {
        max-width: 1440px;
    }
    .part2 {
        background: #000000;
        height: auto;
        padding: 142px 0;
        .part2_content {
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            .part2_block {
                position: relative;
                width: 1440px;
                height: 388px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                border-radius: 16px;
                .part2_left {
                    flex: 0 0 100%;
                    max-width: calc(100% - 574px);
                    position: absolute;
                    z-index: 1;
                    padding-left: 24px;
                    .part2_leftTitle {
                        font-size: 40px;
                        font-family: PingFangSC-Semibold, PingFang SC;
                        font-weight: 600;
                        color: #ffffff;
                        line-height: 56px;
                        margin-left: 26px;
                    }
                    .part2_leftInfo {
                        margin-top: 45px;
                        padding-left: 24px;
                        margin-top: 45px;
                        padding-left: 24px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;
                        // max-width: 50%;
                        .part2_leftInfoList {
                            flex: 0 0 100%;
                            max-width: 50%;
                            margin-bottom: 36px;
                            height: 80px;
                            .part2_InfoTile {
                                display: flex;
                                align-items: center;
                                .icon {
                                    width: 24px;
                                    height: 24px;
                                }
                                .part2_infoTit {
                                    font-size: 24px;
                                    font-family: PingFangSC-Semibold,
                                        PingFang SC;
                                    font-weight: 600;
                                    color: #ffffff;
                                    line-height: 34px;
                                    margin-left: 16px;
                                }
                            }
                            .part2_infoText {
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: rgba(255, 255, 255, 0.63);
                                line-height: 20px;
                                margin-left: 6px;
                                margin-top: 14px;
                                margin-left: 42px;
                            }
                        }
                    }
                }
                .part2_right {
                    position: absolute;
                    z-index: 1;
                    flex: 0 0 100%;
                    right: 0;
                }
            }
            .part2_block::after {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                content: "";
                background: linear-gradient(
                    270deg,
                    #000000 0%,
                    #413b75 58%,
                    #c2368c 100%
                );
                border-radius: 16px;
                opacity: 0.6;
            }
        }
    }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1440px) {
    .body {
        .max-width {
            padding: 0 30px;
        }
        .part2 {
            .part2_content {
                .part2_block {
                    .part2_left {
                        .part2_leftInfo {
                            .part2_leftInfoList {
                                .part2_infoText {
                                    height: 60px;
                                    overflow: hidden;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1024px) {
    .body {
        .max-width {
            max-width: 920px;
            padding: 0 30px;
        }
        .part2 {
            .part2_content {
                .part2_block {
                    .part2_left {
                        max-width: 50%;
                        position: absolute;
                        z-index: 5;
                        .part2_leftInfo {
                            flex-wrap: nowrap;
                            .part2_leftInfoList {
                                max-width: 50%;
                                .part2_leftInfoList {
                                    .part2_infoText {
                                        height: 10px;
                                        overflow: hidden;
                                    }
                                }
                            }
                        }
                    }
                    .part2_right {
                        width: 574px;
                        height: 460px;
                        position: absolute;
                        z-index: 1;
                        flex: 0 0 100%;
                        right: 0;
                    }
                }
                .part2_block::after {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    content: "";
                    background: linear-gradient(
                        270deg,
                        #000000 0%,
                        #413b75 58%,
                        #c2368c 100%
                    );
                    border-radius: 16px;
                    opacity: 0.6;
                }
            }
        }
    }
}

@media screen and (max-width: 719px) {
    .body {
        .max-width {
            max-width: 100%;
            padding: 0 10px;
        }
        .part2 {
            padding-top: 0px;
            .part2_content {
                .part2_block {
                    max-width: 100%;
                    justify-content: center;
                    .part2_left {
                        max-width: 100%;
                        padding-left: 0;
                        .part2_leftTitle {
                            margin-top: 14px;
                            padding-left: 0;
                            font-size: 24px;
                            margin-left: 12px;
                            // text-align: center;
                        }
                        .part2_leftInfo {
                            flex-wrap: wrap;
                            margin-top: 10px;
                            padding-left: 0;
                            padding: 0 12px;
                            .part2_leftInfoList {
                                max-width: 50%;
                                margin-bottom: 18px;
                                margin-bottom: 46px;
                                .part2_InfoTile {
                                    padding-bottom: 0px;
                                    .icon {
                                        width: 18px;
                                        height: 18px;
                                    }
                                    .part2_infoTit {
                                        font-size: 16px;
                                        margin-left: 8px;
                                    }
                                }
                                .part2_infoText {
                                    font-size: 12px;
                                    margin-top: 0px;
                                    margin-left: 28px;
                                    max-width: 110px;
                                    height: 120px;
                                }
                            }
                        }
                    }
                    .part2_right {
                        width: 300px;
                        position: absolute;
                        z-index: 1;
                        flex: 0 0 100%;
                        right: -10px;
                        opacity: 0.8;
                        top: -100px;
                        img {
                            max-width: 100%;
                        }
                    }
                }
            }
        }
    }
}
</style>