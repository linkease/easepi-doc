<template>
    <div class="body">
        <div class="part3">
            <div class="part3_content max-width">
                <div class="part3_block">
                    <div class="block_content">
                        <div class="block_list1">
                            <div class="block_list">
                                <div class="list_tit" title="8G">8G</div>
                                <div class="list_info" title="自带8GB eMMC 5.0，从此摆脱TF卡，刷机折腾更方便">
                                    <p>自带8GB eMMC 5.0，从此摆</p>
                                    <p>脱TF卡，刷机折腾更方便</p>
                                </div>
                            </div>

                            <div class="block_list">
                                <div class="list_tit" title="4G">4G</div>
                                <div class="list_info" title="4GB大内存，nas、docker、jellyfin...撑起更多服务">
                                    <p>4GB大内存，NAS、Docker、</p>
                                    <p>Jellyfin...撑起更多服务</p>
                                </div>
                            </div>
                        </div>

                        <div class="block_list2">
                            <div class="block_list">
                                <div class="list_tit" title="DSP">DSP</div>
                                <div class="list_info" title="处理器流媒体硬解码，视频加载更快更清晰">
                                    <p>处理器流媒体硬解码，视频</p>
                                    <p>加载更快更清晰</p>
                                </div>
                            </div>

                            <div class="block_list">
                                <div class="list_tit" title="SATA">SATA</div>
                                <div class="list_info" title="原生sata接口配稳定电源，数据传输更快更稳定">
                                    <p>原生SATA接口配稳定电源,</p>
                                    <p>数据传输更快更稳定</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="block_img">
                    <img :src="part3_img" loading="lazy">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import part3_img from "../public/home/part3_img.png"
export default {
    data() {
        return {
            part3_img
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
    .part3 {
        height: auto;
        background-color: #000;
        padding-top: 296px;
        .part3_content {
            margin: 0 auto;
            position: relative;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            .part3_block {
                width: 1440px;
                height: 324px;
                background: linear-gradient(
                    90deg,
                    #442471 0%,
                    #000000 49%,
                    #6d2159 100%
                );
                border-radius: 16px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                text-align: center;
                flex-wrap: wrap;
                .block_content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    flex: 0 0 100%;
                    padding: 0 52px;
                    position: relative;
                    z-index: 2;
                    .block_list1 {
                        flex: 0 0 100%;
                        max-width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: space-between;
                        padding-bottom: 32px;
                        .block_list {
                            .list_tit {
                                font-size: 50px;
                                font-family: DINAlternate-Bold, DINAlternate;
                                font-weight: bold;
                                color: #ffffff;
                                line-height: 58px;
                            }
                            .list_info {
                                p {
                                    font-size: 14px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: rgba(255, 255, 255, 0.63);
                                    margin: 0;
                                }
                            }
                        }
                    }
                    .block_list2 {
                        flex: 0 0 100%;
                        max-width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        justify-content: space-between;
                        padding: 0 100px;
                        .block_list {
                            .list_tit {
                                font-size: 50px;
                                font-family: DINAlternate-Bold, DINAlternate;
                                font-weight: bold;
                                color: #ffffff;
                                line-height: 58px;
                            }
                            .list_info {
                                P {
                                    font-size: 14px;
                                    font-family: PingFangSC-Regular, PingFang SC;
                                    font-weight: 400;
                                    color: rgba(255, 255, 255, 0.63);
                                    margin-top: 18px;
                                    margin: 0;
                                }
                            }
                        }
                    }
                }
            }
            .block_img {
                max-width: 776px;
                max-height: 524px;
                position: absolute;
                top: -200px;
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
    }
}

@media screen and (max-width: 1024px) {
    .body {
        .max-width {
            max-width: 920px;
            padding: 0 30px;
        }

        .part3 {
            padding-top: 118px;
            .part3_content {
                flex-wrap: nowrap;
                .part3_block {
                    .block_content {
                        .block_list1 {
                            flex-wrap: nowrap;
                        }
                        .block_list2 {
                            flex-wrap: nowrap;
                            padding: 0 60px;
                        }
                    }
                }
                .block_img {
                    max-width: 576px;
                    max-height: 296px;
                    position: absolute;
                    top: -100px;
                    img {
                        max-width: 100%;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 900px) {
    .body {
        .part3 {
            padding-top: 226px;
        }
    }
}
@media screen and (max-width: 719px) {
    .body {
        .max-width {
            max-width: 100%;
            padding: 0 10px;
        }
        .part3 {
            padding-top: 48px;
            .part3_content {
                flex-wrap: nowrap;
                .part3_block {
                    max-width: 100%;
                    .block_content {
                        padding: 0 12px;
                        .block_list1 {
                            // padding: 0 -20px;
                            flex-wrap: nowrap;
                            padding-bottom: 14px;
                            .block_list {
                                max-width: 100%;
                                .list_tit {
                                    font-size: 40px;
                                }
                                .list_info {
                                    p {
                                        margin-top: 4px;
                                        font-size: 12px;
                                        // padding: 0 14px;
                                    }
                                }
                            }
                        }
                        .block_list2 {
                            flex: 0 0 100%;
                            flex-wrap: nowrap;
                            padding: 0 6px;
                            .block_list {
                                max-width: 52%;
                                .list_tit {
                                    font-size: 40px;
                                }
                                .list_info {
                                    p {
                                        margin-top: 4px;
                                        font-size: 12px;
                                    }
                                }
                            }
                        }
                    }
                }
                .block_img {
                    max-width: 300px;
                    // max-height: 296px;
                    position: absolute;
                    top: -60px;
                    img {
                        max-width: 100%;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 500px) {
    .body {
        padding-bottom: 0;
        .part3 {
            padding-top: 206px;
        }
    }
}
@media screen and (max-width: 400px) {
    .body {
        padding-bottom: 0;
    }
}
</style>