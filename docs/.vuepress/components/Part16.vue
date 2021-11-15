<template>
    <div class="part16">
        <div class="part16_content max-width">
            <div class="part16_title tit" title="规格参数">规格参数</div>
            <img :src="P10_front" alt="" loading="lazy">
        </div>
    </div>

</template>

<script>
import P10_front from "../public/svg/P10_front.svg"
export default {
    data() {
        return {
            P10_front
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
.part16 {
    background-color: #000;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    text-align: center;
    .max-width {
        max-width: 1440px;
    }
    .part16_content {
        margin: 0 auto;
        .part16_title {
            padding-bottom: 88px;
        }
        img {
            flex: 0 0 100%;
            max-width: 100%;
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
@media screen and (max-width: 900px) {
    .part16 {
        .part16_content {
            .part16_title {
                padding-bottom: 20px;
            }
        }
    }
}
@media screen and (max-width: 719px) {
    .part16 {
        font-size: 75%;
        .part16_content {
            img {
                padding: 0 10px;
            }
        }
    }
}
@media screen and (max-width: 400px) {
    .part16 {
        .part16_content {
            .part16_title {
                padding-bottom: 40px;
            }
        }
    }
}
</style>