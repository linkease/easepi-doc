<template>
    <div class="body">
        <div class="part6">
            <div class="part6_content max-width">
                <div class="part6_title tit" title="立即开始">立即开始</div>
                <div class="part6_substance">
                    <div class="substance_left">
                        <div class="left_title" title="准备：">准备：</div>
                        <div class="left_block">
                            <div class="block_info" title="千兆网线（必备，不随开发板一同出售）">千兆网线（必备，不随开发板一同出售）</div>
                            <div class="block_info" title="十字螺丝套以供安装外壳">十字螺丝套以供安装外壳</div>
                            <div class="block_info" title="M.2接口SATA协议硬盘（非NVME）">M.2接口SATA协议硬盘（非NVME）</div>
                            <div class="block_info" title="SATA接口硬盘（2.5寸硬盘可安装进外壳内）">SATA接口硬盘（2.5寸硬盘可安装进外壳内）</div>
                        </div>
                    </div>

                    <div class="substance_right">
                        <div class="right_title" title="文档：">文档：</div>
                        <div class="right_block">
                            <div class="block_info">
                                <a href="https://doc.linkease.com/zh/guide/easepi/case.html" title="1. 如何安装外壳">1. 如何安装外壳
                                    <img :src="arrow">
                                </a>
                            </div>

                            <div class="block_info">
                                <a href="https://doc.linkease.com/zh/guide/easepi/quick.html#_1-开机" title="2. 如何配置成软路由">2. 如何配置成软路由
                                    <img :src="arrow">
                                </a>
                            </div>

                            <div class="block_info">
                                <a href="https://doc.linkease.com/zh/guide/easepi/common.html#变身nas" title="3. 如何开启NAS功能">3. 如何开启NAS功能
                                    <img :src="arrow">
                                </a>
                            </div>

                            <div class="block_info">
                                <a href="https://doc.linkease.com/zh/guide/easepi/" title="点击查看更多">点击查看更多</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import arrow from "../public/home/arrow.png"
export default {
    data() {
        return {
            arrow
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
    .part6 {
        height: auto;
        background-color: #000;
        .part6_content {
            margin: 0 auto;
            .part6_title {
                text-align: center;
                padding-top: 198px;
                padding-bottom: 88px;
            }
            .part6_substance {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                .substance_left {
                    flex: 0 0 100%;
                    max-width: calc(50% - 22px);
                    .left_title {
                        font-size: 24px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: rgba(255, 255, 255, 0.63);
                        line-height: 34px;
                        padding-bottom: 24px;
                        margin-left: 24px;
                    }
                    .left_block {
                        width: 100%;
                        height: 272px;
                        background: rgba(255, 255, 255, 0.22);
                        border-radius: 16px;
                        .block_info {
                            width: 100%;
                            height: 68px;
                            font-size: 14px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #ffffff;
                            line-height: 68px;
                            padding-left: 32px;
                        }
                    }
                }
                .substance_right {
                    flex: 0 0 100%;
                    max-width: calc(50% - 22px);
                    .right_title {
                        font-size: 24px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: rgba(255, 255, 255, 0.63);
                        line-height: 34px;
                        padding-bottom: 24px;
                        margin-left: 24px;
                    }
                    .right_block {
                        width: 100%;
                        height: 272px;
                        background: rgba(255, 255, 255, 0.22);
                        border-radius: 16px;
                        display: flex;
                        justify-content: space-between;
                        align-items: left;
                        flex-wrap: wrap;
                        .block_info {
                            flex: 0 0 100%;
                            width: 100%;
                            height: 68px;
                            a {
                                display: block;
                                width: 100%;
                                height: 100%;
                                font-size: 14px;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #ffffff;
                                line-height: 20px;
                                padding: 0 32px;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                img {
                                    width: 22px;
                                    height: 22px;
                                }
                            }
                            a:hover {
                                opacity: 0.9;
                            }
                        }
                        .block_info:last-child {
                            a {
                                color: #0060ff;
                            }
                        }
                    }
                }
            }
        }
    }
}
.tit {
    font-size: 2.5em;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 56px;
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1440px) {
    .body {
        font-size: 90%;
        .max-width {
            padding: 0 30px;
        }
    }
}

@media screen and (max-width: 1024px) {
    .body {
        font-size: 80%;
        .max-width {
            max-width: 920px;
            padding: 0 30px;
        }
        .part6 {
            .part6_content {
                .part6_substance {
                    .substance_left {
                        max-width: 100%;
                        margin-bottom: 50px;
                    }
                    .substance_right {
                        max-width: 100%;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 719px) {
    .body {
        font-size: 70%;
        .max-width {
            max-width: 100%;
            padding: 0 10px;
        }
        .part6 {
            .part6_content {
                .part6_title {
                    padding-top: 58px;
                    padding-bottom: 60px;
                }
                .part6_substance {
                    .substance_left {
                        max-width: 100%;
                    }
                    .substance_right {
                        max-width: 100%;
                    }
                }
            }
        }
    }
}
</style>