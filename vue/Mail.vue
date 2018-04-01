<template>
    <div id="mall-content">
        <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
        <div class="name">
            <img src="../../static/images/damao.jpg" class="avatar">
            <b>大猫</b>
            <img src="/static/ui/level/c.png" alt="" class="level">
            <my-badge class="sign" :n1="100" :n2="25"></my-badge>
        </div>
        <div class="goods-list">
            <!-- 商品列表 -->
            <ul>
                <li>
                    <div class="title">
                        <div>
                        <checker v-model="demo21" type="checkbox"
                            default-item-class="iconfont icon-checked default-goods-class"
                            selected-item-class="iconfont icon-checked selected-goods-class">
                            <checker-item :value="item"  >{{item.value}}</checker-item>
                        </checker>
                        <span class="goods-name">一代女皇酵母软糖</span>
                        </div>

                        <span class="goods-unit-price">[250]</span>
                    </div>
                    <div class="content">
                        <div class="flex-wrap">
                            <div class="goods-pic">
                                <img src="../../static/images/damao.jpg">
                            </div>
                            <div class="goods-price">
                                <p class="price">¥68.00</p>
                                <p class="unit">元/盒</p>
                            </div>
                        </div>

                        <div class="goods-count">
                            <group>
                                <x-number  v-model="changeValue" :min="0" @on-change="change"></x-number>
                            </group>
                            <p>总价<span class="count-price">¥<span>250</span></span></p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="title">
                        <div>
                        <checker v-model="demo21" type="checkbox"
                            default-item-class="iconfont icon-checked default-goods-class"
                            selected-item-class="iconfont icon-checked selected-goods-class">
                            <checker-item :value="item"  >{{item.value}}</checker-item>
                        </checker>
                        <span class="goods-name">一代女皇酵母软糖</span>
                        </div>

                        <span class="goods-unit-price">[250]</span>
                    </div>
                    <div class="content">
                        <div class="flex-wrap">
                            <div class="goods-pic">
                                <img src="../../static/images/damao.jpg">
                            </div>
                            <div class="goods-price">
                                <p class="price">¥68.00</p>
                                <p class="unit">元/盒</p>
                            </div>
                        </div>

                        <div class="goods-count">
                            <group>
                                <x-number  v-model="changeValue" :min="0" @on-change="change"></x-number>
                            </group>
                            <p>总价<span class="count-price">¥<span>250</span></span></p>
                        </div>
                    </div>
                </li>
            </ul>
            <!-- 同意书 -->
            <div class="agree">
                <check-icon :value.sync="agree"></check-icon>
                我已认真阅读<a>《<span>云仓储行为规范及用户协议</span>》</a>并同意将本订单产品暂存于云仓库，遵守相关协议规定。
            </div>
            <!-- 总计 -->
            <div class="account">
                <p>订单数量：<span>1500</span>盒</p>
                <p>订单总金额：<span>111001</span>元</p>
            </div>
            <!-- 提交按钮 -->
            <div class="submit">
                <x-button @click.native="showScrollBox=true"  type="primary">提交订单</x-button>
            </div>
        </div>
        <div v-transfer-dom>
            <x-dialog v-model="showScrollBox" class="order">
                <p class="order-title">确认订单</p>
                <div class="order-number">201711050827 - LXCQ/AX2QGJ7568</div>
                <div class="order-content" style="height:100px;overflow:scroll;-webkit-overflow-scrolling:touch;">

                    <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
                        <thead>
                            <tr style="background-color: #F7F7F7">
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Apple</td>
                                <td>$1.25</td>
                                <td> x 1</td>
                            </tr>
                            <tr>
                                <td>Banana</td>
                                <td>$1.20</td>
                                <td> x 2</td>
                            </tr>
                        </tbody>
                    </x-table>
                </div>
                <div @click="showScrollBox=false">
                    <span class="vux-close"></span>
                </div>
                <div class="order-sum">
                    <span class="price">¥<span>111000</span></span>
                    <span class="number">1500</span>
                </div>
                <div class="order-info">
                    请认真核对以上订单信息，确认无误后点击确定按钮，查看订单信息请在<span>我的 > 订单管理</span>内查看。
                </div>
                <p class="order-title order-ok">确认</p>
            </x-dialog>
        </div>
    </div>
</template>
<script>
import { Swiper,
    Checker,
    CheckerItem,
    Group,
    XNumber,
    CheckIcon,
    XButton,
    XDialog,
    TransferDomDirective as TransferDom,
    XTable } from 'vux';
import MyBadge from '../components/MyBadge';

// 基础列表
const baseList = [{
    url: 'test:',
    img: 'https://static.vux.li/demo/1.jpg',
    title: '送你一朵fua',
}, {
    url: 'test:',
    img: 'https://static.vux.li/demo/2.jpg',
    title: '送你一辆车',
}, {
    url: 'test:',
    img: 'https://static.vux.li/demo/1.jpg',
    title: '送你一次旅行',
    fallbackImg: 'https://static.vux.li/demo/3.jpg',
}];

// 轮播图列表
const urlList = baseList.map(item => ({
    url: 'http://m.baidu.com',
    img: item.img,
    fallbackImg: item.fallbackImg,
    title: `(可点击)${item.title}`,
}));

export default {
    name: 'mall',
    directives: {
        TransferDom,
    },
    components: {
        Swiper,
        MyBadge,
        Checker,
        CheckerItem,
        Group,
        XNumber,
        CheckIcon,
        XButton,
        XDialog,
        XTable,
    },
    data() {
        return {
            demo06_list: urlList,
            demo06_index: 0,
            swiperItemIndex: 1,
            demo21: null,
            item: {
                key: '1',
            },
            items1: [{
                key: '1',
                value: 'A',
            }, {
                key: '2',
                value: 'B',
            }, {
                key: '3',
                value: 'C',
            }],
            changeValue: 0,
            index: null,

            agree: false, // 是否同意授权
            showScrollBox: false, // 弹出model
        };
    },
    methods: {
        demo06_onIndexChange(index) {
            this.demo06_index = index;
        },
        change() {
            // console.log('change', val)
        },
    },
};
</script>

<style lang="less">
    #mall-content {
        background: #eeeeee;
        // 头像
        .name {
            background: #fff;
            margin: round(18/64rem, 3)  0;
            height: round(65/64rem, 3);
            line-height: round(65/64rem, 3);
            padding-left: round(40/64rem, 3);
            display: flex;
            align-items:center;
            .avatar {
                border-radius: 50%;
                height: round(80/64rem, 3);
                display: inline-block;
                border: round(5/64rem, 3) solid #fff;
                // position: relative;
                // bottom:round(15/64rem, 3);
            }
            b, img, span {
                // vertical-align: middle;
            }
            b {
                font-size: round(28/64rem, 3);
                font-weight: normal;
                display: inline-block;
                letter-spacing: .4em;
                text-indent: .4em;
            }
            .level {
                width: round(34/64rem, 3);
                height: round(34/64rem, 3);
            }
            .sign {
                margin-left: round(15/64rem, 3);
            }
        }

        // 选择icon
        .selected-goods-class {
            color: #e60144;
        }
        .default-goods-class {
            color: #999
        }
        // 商品列表
        .goods-list {
            height: round(615/64rem, 3);
            overflow-y: auto;
            background: #fff;
            padding-top: round(10/64rem, 3);
            padding-bottom: round(70/64rem, 3);
            ul {
                padding-bottom: round(10/64rem, 3);
            }
            li {
                width: round(605/64rem, 3);
                height: round(151/64rem, 3);
                padding-right: round(18/64rem, 3);
                margin: 0 auto;
                list-style:none;
                border-bottom:1px solid #eee;
                padding-bottom: round(8/64rem, 3);
            }
            .title {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .vux-checker-box {
                    display: inline-block;
                }
                .goods-name {
                    margin-left: round(5/64rem, 3);
                }
                .goods-unit-price {
                    color: #979692;
                    letter-spacing: 1px;
                    font-size: 14px;
                }
            }
            .content {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                .flex-wrap {
                    display: flex;
                }
                .goods-pic {
                    height: round(100/64rem, 3);
                    width: round(130/64rem, 3);
                    margin-left: round(30/64rem, 3);
                    img {
                        // width: 100%;
                        height: 100%;
                    }
                }
                .goods-price {
                    margin-left: round(80/64rem, 3);
                    text-align: center;
                    .price {
                        margin-top: round(5/64rem, 3);
                        // margin-bottom: round(5/64rem, 3);
                        color: #e60144;
                        font-size: 16px;
                        letter-spacing: 1px;
                    }
                    .unit {
                        color: #9f9d99;
                        font-size: 12px;
                    }
                }
                .goods-count {
                    .weui-cells {
                        margin: 0;
                        .weui-cell {
                            padding-top:round(10/64rem, 3);
                            padding-right: 0;
                            padding-bottom: round(10/64rem, 3);;
                            a {
                                border-right:inset;
                                border: 1px solid #ececec;
                                background: #ddd;
                                svg {
                                    color: #fff
                                }
                            }
                            .vux-number-selector {
                                height: round(36/64rem, 3);
                                width: round(33/64rem, 3);
                                padding: 0;
                                text-align: center;
                                border-radius: 2px;
                            }
                            .vux-number-selector-plus {
                                margin-right: 0;
                            }
                            input {
                                margin: 0 4px;
                                padding: 0;
                                width: round(78/64rem, 3) !important;
                                height: round(36/64rem, 3);
                                font-size: 14px;
                                color:#231815
                            }
                            .vux-number-selector svg {
                                fill: #fff;
                                width: round(19/64rem, 3);
                            }
                        }
                    }
                    .weui-cells:before {
                        border: none
                    }
                    .weui-cells:after {
                        border: none
                    }
                    p {
                        float: right;
                        color: #979692;
                        font-size: 12px;
                        .count-price {
                            margin-left: round(7/64rem, 3);
                            font-size: 16px;
                            letter-spacing: 1px;
                        }
                    }
                }

            }

            .agree {
                letter-spacing: 1px;
                padding:0 round(40/64rem, 3);
                .weui-icon-circle {
                    font-size: 17px;
                }
                .weui-icon-success {
                    font-size: 17px;
                }
                .weui-icon-success-circle {
                    font-size: 17px;
                }
                a {
                    color: #0e2f8f;
                    text-decoration:underline
                }
            }

            .account {
                width: round(588/64rem, 3);
                height: round(111/64rem, 3);
                margin: 0 auto;
                margin-top: round(45/64rem, 3);
                margin-bottom: round(70/64rem, 3);
                border:1px solid #d3d4d4;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: round(16/64rem, 3);
                p {
                    letter-spacing: 1px;
                    margin-top: 4px;
                }
                span {
                    color: #e60144;
                    font-size: 14px;
                }
            }
            .submit {
                width: round(210/64rem, 3);
                height: round(60/64rem, 3);
                margin: 0 auto;
                .weui-btn_primary {
                    background: #fed722;
                    border-radius: 5px;
                    box-shadow: 0  0 15px #fbc300 inset;
                    color:#030000;
                }
            }
        }

    }
    // 弹框
    .order {
        .weui-dialog{
            width: round(550/64rem, 3);
            border-radius: 8px;
            padding-top: round(16/64rem, 3);
            max-height: round(790/64rem, 3);
        }
        .order-title {
            height: round(84/64rem, 3);
            line-height: round(84/64rem, 3);
            color: #666;
            font-size: 18px;
            letter-spacing: round(5/64rem, 3);
            text-indent:round(5/64rem, 3);
        }
        .order-number {
            height: round(56/64rem, 3);
            line-height: round(56/64rem, 3);
            color: #fff;
            background: #fabe00;
            text-align: center;
            letter-spacing: 1px;
        }
        .order-content {
            height: 350px;
            overflow: hidden;
            border-bottom:1px solid #9f9fa0;
            padding: 0 round(25/64rem, 3);
            margin-bottom: round(30/64rem, 3);
            padding-bottom: round(30/64rem, 3);
        }
        .vux-close {
            margin-top: 8px;
            margin-bottom: 8px;
        }
        .order-sum {
            display: flex;
            flex-direction: row-reverse;
            padding-right: round(40/64rem, 3);
            .number {
                font-size: 12px;
                color:#333;
                margin-right: round(60/64rem, 3);
            }
            .price {
                color:#e60144;
            }
        }
        .order-info {
            padding: round(35/64rem, 3) round(40/64rem, 3) round(35/64rem, 3)  round(50/64rem, 3);
            line-height: round(35/64rem, 3);

        }
        .order-ok {
            border-top: 1px solid #9f9fa0;
            letter-spacing: round(17/64rem, 3);
            text-indent:round(17/64rem, 3);
        }
    }

</style>
