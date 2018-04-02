<template>
    <flexbox id="layout" class="login-warp" orient="vertical" :gutter="0">
         <flexbox-item class="narrow">
            <div class="login-bg">
                <div class="form-wrap">
                    <div class="logo">
                        <span class="iconfont icon-logo"></span>
                    </div>
                    <div class="input-border">
                        <group class="form-input phone-input">
                            <x-input  v-model="phone"
                                name="password" placeholder="输入手机号" is-type="china-mobile"></x-input>
                        </group>
                        <div class="send-code" @click="getCode()">
                            <span v-show="!showCode">{{sendText}}</span>
                            <countdown v-model="timeCount" :start="showCode"
                                @on-finish="finish" v-show="showCode"></countdown>
                        </div>
                    </div>
                    <div class="input-border">
                        <group class="form-input">
                            <x-input type="password" v-model="password"  name="password" placeholder="设置密码" ></x-input>
                        </group>
                    </div>
                    <div class="code-input">
                        <div class="input-border">
                            <group class="form-input">
                                <x-input
                                    v-model="code"  name="code" placeholder="输入手机验证码" ></x-input>
                            </group>
                        </div>
                        <x-button class="btn-sure"
                            @click.native="showModule"  :gradients="['#FABE00', '#FABE00']">确定
                        </x-button>
                    </div>

                    <div class="speedy-view">
                        快捷登录
                    </div>
                    <div class="wechat-login">
                        <span class="iconfont icon-wechat"></span>
                        <span class="wechat-text" @click.native="$router.push({name:'login'})">授权微信一键登录</span>
                    </div>
                </div>
                <div v-transfer-dom>
                    <popup v-model="showWarn" position="top" :show-mask="false">
                        <div class="position-vertical-demo">
                            {{warnText}}
                        </div>
                    </popup>
                </div>
            </div>
         </flexbox-item>
    </flexbox>

</template>
<script>
import { Flexbox, FlexboxItem, Group, Cell, XInput, XButton, AlertModule, TransferDom, Popup, Countdown } from 'vux';

export default {
    name: 'forget-password',
    directives: {
        TransferDom,
    },
    components: {
        Flexbox,
        FlexboxItem,
        Group,
        Cell,
        XInput,
        XButton,
        Popup,
        Countdown,
    },
    data() {
        return {
            phone: '', // 手机
            password: '', // 密码
            code: null, // 验证码
            timeCount: 10, // 倒计时
            showCode: false, // 显示秒表 true为显示
            showWarn: false, // 是否显示警告pop
            warnText: '', // 警告内容
            sendText: '发送验证码',
        };
    },
    methods: {
        // 验证码倒计时完成
        finish() {
            this.sendText = '再次发送';
            this.showCode = false;
        },
        // 验证码倒计时开始
        getCode() {
            if (!(/^1(3|4|5|7|8|9)\d{9}$/.test(this.phone))) {
                this.showWarnFuc('手机号码格式不正确');
            } else if (!this.timer) {
                this.showCode = true;
            }
        },
        // 确定
        showModule() {
            const self = this;
            if (this.password) {
                if (!(/^1(3|4|5|7|8|9)\d{9}$/.test(this.phone))) {
                    this.showWarnFuc('手机号码格式不正确');
                } else {
                    const warntext = '请输入验证码';
                    if (this.code) {
                        AlertModule.show({
                            title: '',
                            content: '密码修改成功!',
                            buttonText: '返回登录',
                            onShow() {
                                // todo something
                            },
                            onHide() {
                                self.$router.push('login');
                                // self.$router.push({ name: 'login', params: { phone: this.phone } });
                            },
                        });
                    } else {
                        this.showWarnFuc(warntext);
                    }
                }
            } else {
                this.showWarnFuc('请设置密码');
            }
        },
        // 显示警告
        showWarnFuc(msg) {
            this.warnText = msg;
            this.showWarn = true;
            setTimeout(() => {
                this.showWarn = false;
            }, 1000);
        },
    },
};
</script>

<style lang="less">
    #layout {
        background-color: #FABE00;
        .login-bg {
            width: 100%;
            height: round(640/64rem, 3);
            background: url('../../static/ui/login_bg.png') no-repeat;
            background-size: contain;
            padding-top: round(50/64rem, 3);
        }
        .logo {
            height: round(250/64rem, 3);
            display: flex;
            justify-content: center;
            align-items: center
        }
        .form-wrap{
            width:round(550/64rem, 3);
            height: round(746/64rem, 3);
            margin: 0 auto;
            background: #fff;
            .iconfont {
                font-size: round(345/64rem, 3);
            }
            .weui-cells:after{
                border:none
            }
            .input-border{
                width: round(436/64rem, 3);
                height: round(58/64rem, 3);
                border-radius: round(29/64rem, 3);
                border:1px solid #d3d3d4;
                margin: 0 auto;
                margin-bottom: round(30/64rem, 3);
                display: flex;
                justify-content: space-between ;
                font-size: 12px;
                .send-code {
                    width: round(130/64rem, 3);
                    height: round(58/64rem, 3);
                    line-height: round(60/64rem, 3);
                    text-align: center;
                    background: #d3d3d4;
                    border-top-right-radius:round(29/64rem, 3);
                    border-bottom-right-radius:round(29/64rem, 3);
                    position: relative;
                    right: -1px;
                    font-size: 12px;
                    color:#fff;
                }
                .phone-input{
                    height: round(58/64rem, 3);
                    line-height: round(60/64rem, 3);
                    width: round(250/64rem, 3);
                    padding-right: 0;
                }
            }
            .code-input {
                display: block;
                width: round(436/64rem, 3);
                height: round(58/64rem, 3);
                margin: 0 auto;
                margin-bottom: round(60/64rem, 3);
                .input-border{
                    width: round(240/64rem, 3);
                    float: left;
                    margin: 0
                }
                .btn-sure {
                    width: round(160/64rem, 3);
                    height: round(60/64rem, 3);
                    font-size: round(28/64rem, 3);
                    float: right;
                }
            }
            .form-input {
                height: round(58/64rem, 3);
                padding: 0 round(35/64rem, 3);
                width: 100%;
                .weui-cells{
                    margin-top: 0px;
                    padding: 0;
                    font-size: 12px;
                }
                .weui-cell{
                    padding:  0;
                    height: round(58/64rem, 3);
                    line-height: round(60/64rem, 3);
                }
                .weui-cells:before{
                    border: none
                }
            }
            .speedy-view {
                font-size: 14px;
                height: round(19/64rem, 3);
                line-height: round(19/64rem, 3);
                letter-spacing:round(6/64rem, 3);
                text-indent: round(6/64rem, 3);
                text-align: center;
                position: relative;
                margin-bottom: round(35/64rem, 3);
                &:after {
                    content: '';
                    position: absolute;
                    display: block;
                    width: round(174/64rem, 3);
                    height: 1px;
                    background:#999;
                    top: round(10/64rem, 3);
                    left: round(35/64rem, 3);
                }
                &:before {
                    content: '';
                    position: absolute;
                    display: block;
                    width: round(179/64rem, 3);
                    height: 1px;
                    background:#999;
                    top: round(10/64rem, 3);
                    right: round(35/64rem, 3);
                }

            }
            .wechat-login {
                width: round(436.268/64rem, 3);
                height: round(58/64rem, 3);
                line-height: round(58/64rem, 3);
                background: #46B035;
                color:#fff;
                text-align: center;
                margin: 0 auto;
                font-size: 16px;
                border-radius: round(29/64rem, 3);
                .iconfont {
                    font-size: round(45/64rem, 3);
                    color:#fff;
                    margin-right: round(30/64rem, 3);
                }
                .wechat-text {
                    letter-spacing:round(6/64rem, 3);
                    text-indent: round(6/64rem, 3);
                }
            }
        }
    }
    .position-vertical-demo {
        background-color: #ffe26d;
        color: #fff;
        text-align: center;
        padding: 15px;
        font-size: 14px;
    }
</style>
