<template>
    <div class="footer">
        <div class="footer-content">
            <div class="content_text">
                <div class="content_block">
                    <template v-for="(item,i) in menus">
                        <ul class="content_list" :key="i">
                            <li class="content_title" :title="item.title">{{item.title}}</li>
                            <template v-for="(ole,k) in item.childer">
                                <li :key="k"><a :href="ole.value" :title="ole.label" target="_blank">{{ole.label}}</a></li>
                            </template>
                        </ul>
                    </template>
                </div>
            </div>
            <div class="content_info" title="易有云网络科技有限责任公司 Copyright © 2019-2021  备案号： 粤ICP备20024441号">易有云网络科技有限责任公司 Copyright © 2019-2021<br />
                <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">备案号： 粤ICP备20024441号</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menus: [
                {
                    title: "所有产品",
                    childer: [
                        {
                            label: "易有云APP",
                            value: "https://app.linkease.com/",
                        },
                        {
                            label: "DDNSTO",
                            value: "https://www.ddnsto.com",
                        },
                        {
                            label: "iStore",
                            value: "https://doc.linkease.com/zh/guide/istore/",
                        },
                        {
                            label: "EasePi",
                            value: "https://easepi.linkease.com",
                        }
                    ]
                },
                {
                    title: "购买渠道",
                    childer: [
                        {
                            label: "KoolCenter淘宝店",
                            value: "https://koolcenter.taobao.com/"
                        }
                    ]
                },
                {
                    title: "帮助与沟通",
                    childer: [
                        {
                            label: "问题反馈",
                            value: "https://github.com/linkease/easepi-doc/issues"
                        },
                        {
                            label: "商务洽谈",
                            value: "mailto:xiaobao@linkease.com"
                        }

                    ]
                },
                {
                    title: "关于易有云",
                    childer: [
                        {
                            label: "关于我们",
                            value: "https://doc.linkease.com/zh/guide/about/"
                        },
                        {
                            label: "联系我们",
                            value: "mailto:xiaobao@linkease.com"
                        }
                    ]
                },
                {
                    title: "合作伙伴",
                    childer: [
                        {
                            label: "KoolCenter",
                            value: "https://www.koolcenter.com/"
                        },
                    ]
                }
            ]
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
.footer {
    // background-color: #f4f4f4;
    min-height: 234px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: #000;
    .footer-content {
        display: flex;
        flex-wrap: wrap;
        .content_text {
            width: 1138px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            flex: 0 0 100%;
            border-bottom: 1.5px solid rgba(0, 0, 0, 0.7);
            margin-bottom: 10px;
            border-top: 1.5px solid rgba(0, 0, 0, 0.7);
            padding-top: 24px;
            padding-bottom: 24px;
            .content_block {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                // width: 1020px;
                .content_list {
                    margin: 0;
                    padding: 10px 50px;
                    .content_title {
                        font-size: 16px;
                        font-family: PingFangSC-Semibold, PingFang SC;
                        font-weight: 600;
                        color: #fff;
                        line-height: 22px;
                        padding-bottom: 12px;
                    }
                    a {
                        display: block;
                        font-size: 14px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #fff;
                        line-height: 20px;
                        margin-top: 8px;
                    }
                    a:hover {
                        color: #0060ff;
                    }
                }
            }
        }
        .content_info {
            flex: 0 0 100%;
            font-size: 12px;
            color: #8e8e8e;
            padding: 0 50px;
            a {
                color: #8e8e8e;
            }
            a:hover {
                color: #0060ff;
            }
        }
    }
}
li {
    list-style: none;
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1440px) {
    .footer {
        .footer-content {
            .content_text {
                width: 100%;
                .content_block {
                    max-width: 100%;
                    flex-wrap: nowrap;
                    padding: 0;
                    .content_list {
                        flex: 0 0 100%;
                        max-width: 25%;
                        margin: 0;
                        padding: 0;
                        margin-bottom: 0px;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 1300px) {
    .footer {
        .footer-content {
            .content_text {
                width: 100%;
                .content_block {
                    max-width: 100%;
                    flex-wrap: nowrap;
                    padding: 0 30px;
                    .content_list {
                        flex: 0 0 100%;
                        max-width: 25%;
                        margin: 0;
                        padding: 0;
                        margin-bottom: 0px;
                    }
                }
            }
            .content_info {
                padding-left: 30px;
            }
        }
    }
}
@media screen and (max-width: 1100px) {
    .footer {
        .footer-content {
            .content_text {
                width: 100%;
                // margin: 0 80px;
                .content_block {
                    max-width: 100%;
                    flex-wrap: wrap;
                    padding: 0 30px;
                    .content_list {
                        flex: 0 0 100%;
                        max-width: 25%;
                        margin: 0;
                        padding: 0;
                        margin-top: 10px;
                        .content_title {
                            padding-bottom: 0px;
                        }
                    }
                }
            }
            .content_info {
                padding-left: 30px;
            }
        }
    }
}
@media screen and(max-width:1024px) {
    .footer {
        .footer-content {
            .content_text {
                width: 100%;
                .content_block {
                    max-width: 100%;
                    flex-wrap: wrap;
                    padding: 0 80px;
                    .content_list {
                        flex: 0 0 100%;
                        max-width: 25%;
                        margin: 0;
                        padding: 0;
                        margin-top: 12px;
                        .content_title {
                            padding-bottom: 6px;
                        }
                    }
                }
            }
            .content_info {
                padding-left: 80px;
            }
        }
    }
}
@media screen and (max-width: 900px) {
    .footer {
        .footer-content {
            .content_text {
                width: 100%;
                padding-bottom: 0px;
                padding-top: 16px;
                .content_block {
                    width: 100%;
                    padding: 0 10px;
                    flex-wrap: wrap;
                    .content_list {
                        flex: 0 0 100%;
                        max-width: 50%;
                        margin: 0;
                        padding: 0;
                        margin-bottom: 20px;
                        .content_title {
                            padding-bottom: 0px;
                        }
                    }
                }
            }
            .content_info {
                padding-left: 10px;
            }
        }
    }
}
</style>
