<template>
    <div>
        <!-- 表单输入框 -->
        <mt-field label="用户名" placeholder="请输入用户名" :attr="{maxlength:10}" v-model="uname"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" :attr="{maxlength:10}" v-model="upwd" type="password"></mt-field>
        <mt-field label="年龄" placeholder="请输入年龄" v-model="age"></mt-field>
        <mt-button size="large" @click="reg">用户注册 </mt-button>
    </div>

</template>
<!-- http://127.0.0.1:5050/#/Exam022 -->
<script>
    export default {
        data() {
            return {
                uname: "",
                upwd: "",
                age: ""
            }
        },
        methods: {
            reg(){
                console.log(111)
                var reg=/^[a-z0-9]{3,12}$/i;
                var regage=/^[0-9]{2}$/i;
                if(!reg.test(this.uname)){
                      this.$messagebox(
                   "提示", // 这个可以不要
                  "用户名"+this.uname+ "不符合要求"
                );
                }else{
                    console.log("用户名正确")
                }
                if(!reg.test(this.upwd)){
                      this.$messagebox(
                 "提示", // 这个可以不要
                  `密码`+this.upwd+ "不符合要求"
                );
                }else{
                    console.log("密码正确")
                }
                if(!regage.test(this.age)){
                      this.$messagebox(
                "提示" , // 这个可以不要
                   `年龄`+ this.age+ "不符合要求"
                );
                }else{
                    console.log("年龄正确")
                }
            }
        //    load(){
        //         this.axios.get(
        //         "http://127.0.0.1:5050/Exam02"
        //     ).then(result=>{
        //         console.log(result.data)
        //     })
        //    }
        }
    }
</script>