<template>
    <div class="part8">
        <div class="part8_imgs">
            <img class="part8_bj" :src="P8_bg2" loading="lazy" />
            <img :src="P8_front2" alt class="part8_img" loading="lazy" />
        </div>
        <div class="text_info2" title="硬盘分区、格式化、挂载一步搞定，轻松配置存储服务">硬盘分区、格式化、挂载一步搞定，轻松配置存储服务</div>
    </div>
</template>

<script>
import P8_bg2 from "../public/home/P8_bg2.png"
import P8_front2 from "../public/home/P8_front2.png"
export default {
    data() {
        return {
            P8_bg2,
            P8_front2
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
.part8 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: linear-gradient(189.9deg, #000000 28.89%, #000000 129.1%);
    position: relative;
    .max-width {
        max-width: 1440px;
    }
    .part8_imgs {
        .part8_bj {
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
        .part8_img {
            position: relative;
            width: 100%;
            margin-top: 100px;
        }
    }
    .text_info2 {
        position: relative;
        height: 60px;
        font-family: IBM Plex Mono;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 60px;
        color: #aca8ff;
        z-index: 999;
        font-size: 2vw;
        top: -5vw;
    }
}
</style>