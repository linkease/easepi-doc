<template>
    <div class="part1">
        <div class="part1_imgs">
            <img class="part1_bj" :src="P1_bg" loading="lazy">
            <img :src="P1_front" class="part1_img" loading="lazy">
        </div>
        <div class="part1_content max-width">
            <div class="content_text">
                <div class="text_tit" title="自由的数据中心">自由的数据中心</div>
                <div class="text_info" title="手机、电脑、EasePi、专业NAS、服务器...统一管理所有终端数据。不受系统隔离、所有设备数据皆可互传互通。不担心服务商跑路，个人数据完整掌握在你手中">
                    手机、电脑、EasePi、专业NAS、服务器...<br /> 统一管理所有终端数据。不受系统隔离、所有设备数据皆可互传互通。 <br />不担心服务商跑路，个人数据完整掌握在你手中 </div>
            </div>
        </div>
    </div>
</template>

<script>
import P1_bg from "../public/home/P1_bg.jpg"
import P1_front from "../public/home/P1_front.png"
export default {
    data() {
        return {
            P1_front,
            P1_bg,
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
.part1 {
    background-color: #000;
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .max-width {
        max-width: 1440px;
    }
    .part1_imgs {
        .part1_bj {
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
        .part1_img {
            position: relative;
            width: 100%;
        }
    }

    .part1_content {
        margin-top: 90px;
        position: absolute;
        flex: 0 0 100%;
        max-width: 100%;
        position: absolute;
        z-index: 999;
        .content_text {
            flex: 0 0 100%;
            max-width: 100%;
            max-width: 670px;
            margin: 0 auto;
            text-align: center;
            .text_tit {
                font-family: IBM Plex Mono;
                font-style: normal;
                font-weight: bold;
                font-size: 2.5em;
                color: #ffffff;
            }
            .text_info {
                font-family: PingFang SC;
                font-weight: 500;
                font-size: 1.25em;
                line-height: 1.875em;
                color: rgba(255, 255, 255, 0.8);
                margin-top: 20px;
                margin-bottom: 24px;
            }
        }
    }
}
</style>

<style lang="scss" scoped>
@media screen and (max-width: 1400px) {
    .part1 {
        .part1_imgs {
            .part1_img {
                padding-top: 80px;
            }
        }
    }
}
@media screen and (max-width: 1024px) {
    .part1 {
        .part1_content {
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
    .part1 {
        font-size: 40%;
        .part1_imgs {
            .part1_img {
                padding-top: 20px;
            }
        }
        .part1_content {
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
@media screen and (max-width: 800px) {
    .part1 {
        font-size: 40%;
        .part1_imgs {
            .part1_img {
                padding-top: 40px;
            }
        }
    }
}

@media screen and (max-width: 700px) {
    .part1 {
        font-size: 40%;
        .part1_imgs {
            .part1_img {
                padding-top: 100px;
            }
        }
    }
}
@media screen and (max-width: 500px) {
    .part1 {
        font-size: 40%;
        .part1_imgs {
            .part1_img {
                padding-top: 120px;
            }
        }
        .part1_content {
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

@media screen and (max-width: 400px) {
    .part1 {
        font-size: 40%;
        .part1_content {
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