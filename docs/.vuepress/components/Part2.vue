<template>
    <div class="part2">
        <div class="part2_imgs">
            <img :src="P2_front" class="part2_img" loading="lazy">
            <img :src="P2_front_words" class="part2_icon" loading="lazy">
        </div>

        <div class="part2_content max-width">
            <div class="content_text">
                <div class="text_tit" title="全方位拓展存储空间">全方位拓展存储空间</div>
                <div class="text_info" title="EasePi SATA接口支持最大16T硬盘，还可以通过USB外接更多存储空间，轻松存放海量高清电影、高清照片、工作文件">EasePi SATA接口支持最大16T硬盘，还可以通过USB外接更多存储空间，轻松存放海量高清电影、高清照片、工作文件 </div>
            </div>
        </div>
    </div>
</template>

<script>
import P2_front from "../public/home/P2_front.png"
import P2_front_words from "../public/svg/P2_front_words.svg"
export default {
    data() {
        return {
            P2_front,
            P2_front_words
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
.part2 {
    background: linear-gradient(159.9deg, #000000 26.79%, #000000 129.1%);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    .max-width {
        max-width: 1440px;
    }
    .part2_imgs {
        position: relative;
        .part2_img {
            background-size: cover;
            width: 100%;
        }
        .part2_icon {
            width: 100%;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
        }
    }
    .part2_content {
        flex: 0 0 100%;
        max-width: 100%;
        position: absolute;
        z-index: 999;
        margin-top: 90px;
        .content_text {
            max-width: 670px;
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
                color: rgba(255, 255, 255, 0.8);
                margin-top: 20px;
            }
        }
    }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1024px) {
    .part2 {
        .part2_content {
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
    .part2 {
        font-size: 40%;
        .part2_content {
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