<template>
    <div class="part7">
        <div class="part7_imgs">
            <img class="part7_bj" :src="P7_bg" loading="lazy">
            <img :src="P7_front" alt="" class="part7_img" loading="lazy">
        </div>

        <div class="part7_content max-width">
            <div class="content_text">
                <div class="text_tit" title="一站式私人影院">一站式私人影院</div>
                <div class="text_info" title="一个APP搞定“远程下载”+“在线观看”">一个APP搞定“远程下载”+“在线观看”</div>
            </div>
        </div>

    </div>
</template>

<script>
import P7_bg from "../public/home/P7_bg.jpg"
import P7_front from "../public/home/P7_front.png"
export default {
    data() {
        return {
            P7_bg,
            P7_front
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
.part7 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: linear-gradient(179.9deg, #000000 27.79%, #000000 129.1%);
    position: relative;
    .max-width {
        max-width: 1440px;
    }
    .part7_imgs {
        .part7_bj {
            background-size: cover;
            width: 100%;
            height: 100%;
            z-index: 0;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
        }
        .part7_img {
            position: relative;
            width: 100%;
        }
    }

    .part7_content {
        flex: 0 0 100%;
        max-width: 100%;
        position: absolute;
        z-index: 999;
        margin-top: 100px;
        .content_text {
            max-width: 782px;
            margin: 0 auto;
            text-align: center;
            .text_tit {
                font-family: IBM Plex Mono;
                font-style: normal;
                font-weight: bold;
                font-size: 40px;
                color: #ffffff;
            }
            .text_info {
                font-family: PingFang SC;
                font-weight: 500;
                font-size: 20px;
                line-height: 30px;
                color: rgba(277, 277, 277, 0.8);
                margin-top: 20px;
            }
        }
    }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1200px) {
    .part7 {
        .part7_imgs {
            .part7_img {
                padding-top: 60px;
            }
        }
    }
}
@media screen and (max-width: 1024px) {
    .part7 {
        .part7_content {
            padding: 0 10px;
            margin-top: 40px;
            .content_text {
                .text_tit {
                    font-size: 20px;
                }
                .text_info {
                    font-size: 16px;
                    margin-top: 18px;
                }
            }
        }
    }
}
@media screen and (max-width: 900px) {
    .part7_bj {
        .part7_bj {
            .part7_imgs {
                .part7_img {
                    padding-top: 20px;
                }
            }
        }
    }
}
@media screen and (max-width: 800px) {
    .part7 {
        .part7_imgs {
            .part7_img {
                padding-top: 40px;
            }
        }
    }
}

@media screen and (max-width: 700px) {
    .part7 {
        .part7_imgs {
            .part7_img {
                padding-top: 60px;
            }
        }
    }
}
@media screen and (max-width: 400px) {
    .part7 {
        font-size: 40%;
        .part7_content {
            padding: 0 10px;
            margin-top: 20px;
            .content_text {
                .text_tit {
                    font-size: 18px;
                }
                .text_info {
                    font-size: 12px;
                    margin-top: 10px;
                    line-height: 16px;
                }
            }
        }
    }
}
</style>