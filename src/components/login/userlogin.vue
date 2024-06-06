<template>
    <div class="login" clearfix>
        <div class="login-wrap">
            <el-row type="flex" justify="center">
                <el-form ref="loginForm" status-icon label-width="80px">
                    <h3>登录</h3>
                    <hr>
                    <el-form-item prop="username" label="用户名">
                        <el-input v-model="loginForm.loginName" placeholder="请输入用户名" prefix-icon></el-input>
                    </el-form-item>
                    <el-form-item id="password" prop="password" label="密码">
                        <el-input v-model="loginForm.password" show-password placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <router-link to="/">找回密码</router-link>
                    <router-link to="/register">注册账号</router-link>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-upload" @click="login">登 录</el-button>
                    </el-form-item>
                </el-form>
            </el-row>
        </div>
    </div>


</template>
<script>
//   import bus from '../js/eventBus'


import axios from 'axios'
export default {
    name: 'MyLogin',
    data() {
        return {
            loginForm: {
                id: '',
                password: '',
                life: null,
                score: null,
                loginName: null,
                isFirst: true
            }
        }
    },
    methods: {
        writenum() {
            this.loginForm.loginName = 123456;
            this.loginForm.password = 123456;

        },
        login() {
            //  console.log(this.$store.state.count)
            // console.log('submit!',this.loginForm);
            //表单验证
            console.log(axios)
            if (this.loginForm.loginName == "") {
                this.$message({
                    message: '请输入用户名',
                    type: 'error'
                });
                return;
            }
            if (this.loginForm.password == "") {
                this.$message({
                    message: '请输入密码',
                    type: 'error'
                });
                return;
            }
            //发送登陆请求
            if (this.loginForm.loginName != "" && this.loginForm.password != "") {
                axios.post('http://localhost:3312/sys-user/login', this.loginForm).then((resp) => {

                    console.log("this is login", resp);
                    let data = resp.data;
                    // console.log(this.$store.state.user)
                    console.log(resp.data.content)
                    //es6语法,扩展操作符,找到resp.data.content的每一个属性然后赋值给新的对象
                    // this.$store.state.user = { ...resp.data.content }
                    // console.log(this.$store.state.user)
                    //localStorage存
                    localStorage.setItem("insuranceCode", JSON.stringify(resp.data.content));
                    console.log(this.loginForm.isFirst)
                    localStorage.setItem("getisFirst", JSON.stringify(this.loginForm.isFirst));
                    console.log(JSON.parse(localStorage.getItem("getisFirst")))
                    //localStorage取
                    console.log(JSON.parse(localStorage.getItem("insuranceCode")))
                    if (data.success) {
                        this.loginForm = {};
                        this.$message({
                            message: '登陆成功!!!',
                            type: 'success'
                        });
                        this.$router.push({ path: '/' })
                    } else {
                        this.$message({
                            message: '登陆失败,密码错误或用户名未注册',
                            type: 'error'
                        });
                        console.log(data)
                    }
                })
            }
        },
        toregister() {
            this.$router.push('/')
        },
    },
    mounted() {
        // bus.$emit('getLoginName', this.loginForm)
    }
}
</script>

<style scoped>
.login {
    width: 100%;
    height: 740px;
    background: url("../../assets/bg1.png") no-repeat;
    background-size: cover;
    overflow: hidden;
}

.login-wrap {
    /* background: url("../../assets/logo.png") no-repeat; */
    background-size: cover;
    width: 400px;
    height: 300px;
    margin: 215px auto;
    overflow: hidden;
    padding-top: 10px;
    line-height: 40px;
}

#password {
    margin-bottom: 5px;
}

h3 {
    color: #0babeab8;
    font-size: 24px;
}

hr {
    background-color: #444;
    margin: 20px auto;
}

a {
    text-decoration: none;
    color: #aaa;
    font-size: 15px;
}

a:hover {
    color: coral;
}

.el-button {
    width: 80%;
    margin-left: -50px;
}
</style>
