<template>
    <div class="body">
        <div class="part5">
            <div class="part5_content max-width">
                <div class="part5_title tit" title="产品包含">产品包含</div>
                <div class="part5_block">
                    <div class="part5_blockList">
                        <div class="part5_listImg">
                            <img :src="pic_chip" alt="" loading="lazy">
                        </div>
                        <div class="part5_listInfo" title="ARS2 开发板一块">ARS2 开发板一块</div>
                    </div>

                    <div class="part5_blockList">
                        <div class="part5_listImg">
                            <img :src="pic_charge" alt="" loading="lazy">
                        </div>
                        <div class="part5_listInfo" title="12V/2A 电源一个">12V/2A 电源一个</div>
                    </div>

                    <div class="part5_blockList">
                        <div class="part5_listImg">
                            <img :src="pic_line" alt="" loading="lazy">
                        </div>
                        <div class="part5_listInfo" title="带屏蔽干扰SATA数据线一根">带屏蔽干扰SATA数<br />据线一根 </div>
                    </div>

                    <div class="part5_blockList">
                        <div class="part5_listImg">
                            <img :src="pic_box" alt="" loading="lazy">
                        </div>
                        <div class="part5_listInfo" title="亚克力外壳一套">亚克力外壳一套</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import pic_box from "../public/home/pic_box.png"
import pic_charge from "../public/home/pic_charge.png"
import pic_chip from "../public/home/pic_chip.png"
import pic_line from "../public/home/pic_line.png"
export default {
    data() {
        return {
            pic_box,
            pic_charge,
            pic_chip,
            pic_line

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
    .part5 {
        padding-top: 158px;
        height: auto;
        background-color: #000;
        .part5_content {
            margin: 0 auto;
            text-align: center;
            .part5_title {
                padding-bottom: 88px;
            }
            .part5_block {
                display: flex;
                justify-content: space-between;
                align-items: center;
                text-align: center;
                flex-wrap: wrap;
                .part5_blockList {
                    flex: 0 0 100%;
                    max-width: calc(25% - 20px);
                    .part5_listImg {
                        width: 100%;
                        img {
                            width: 100%;
                        }
                    }
                    .part5_listInfo {
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #ffffff;
                        height: 60px;
                        margin-top: 22px;
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

        .part5 {
            .part5_content {
                .part5_block {
                    .part5_blockList {
                        max-width: calc(50% - 20px);
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
        .part5 {
            padding-top: 80px;
            .part5_content {
                .part5_block {
                    .part5_blockList {
                        flex: 0 0 100%;
                        max-width: calc(50% - 10px);
                        .part5_listImg {
                            width: 100%;
                            img {
                                width: 100%;
                            }
                        }
                        .part5_listInfo {
                            height: 98px;
                        }
                    }
                }
            }
        }
    }
}
</style>