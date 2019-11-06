<template>
    <div class="pass1">
          <div class="repath"><a href="javascript:history.go(-1)">  &lt; </a></div>
        <div class="pass_input">
            <div >注册</div>
              <div class="item-inner">
         
                <div class="item-input">
                    <input type="text"  value="" placeholder="用户名/邮箱/手机号" v-model="uname">
                </div>
              </div>
              <div class="item-inner">
                <div class="item-input item-left">
                    <input type="text"  placeholder="填写验证码" v-model="txt" size="18">
                    <a href="javascript:;" class="test">发送验证码</a>
                </div>
            </div>
              <div class="item-inner">
                <div class="item-input">
                    <input type="password"  placeholder="填写密码" v-model="upwd1">
                    <a href="javascript:;" class="view_password"><i class="iconfont icon-icon1"><div class="u-diagonal"></div></i></a>
                </div>
            </div>
            
      <div class="xieyi">
          注册即代表我同意《用户注册协议》
     </div>  
      <div class="btn">
          <mt-button size="large" @click="reg">注册</mt-button>
     </div>  
 </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            uname:"hello",
            upwd:123456,
            upwd1:"",
            txt:"",
        }
    },
    methods:{
        reg(){
            if(this.uname==''){
             this.$toast("请输入用户名")   
            }else if(this.upwd==""||this.upwd1==""){
             this.$toast("请输入密码")   
            }else if(this.upwd!=this.upwd1){
             this.$toast("两次输入密码不一致")                   
            } else{
             if(this.uname!=localStorage.getItem(this.uname)){   
                localStorage.setItem(this.upwd+'+'+this.uname,this.uname)
                localStorage.setItem(this.uname+'+'+this.uname,this.upwd)//保存该户名的密码
                localStorage.setItem(this.uname,this.uname)//用来保证用户名不重复
                        this.$toast("注册成功")
                        this.$router.push("/messageHome")
            }else{
                this.$toast("该用户名已存在")
                this.uname=""              
            }
            }
        }
    }

}
</script>
<style scoped>
.item-left{
    text-align: left !important;
}
.item-left>input{
    width: 56%;
}
.repath{
  position: absolute;
    color: #fff;
    top: 21px;
    left: 28px;
    font-size: 1.8rem;
}
    .xieyi{
        color: #fff;
        font-size: 5px;;
    width: 100%;
    text-align: left;
    padding-bottom: 10px;
    padding-left: 5px;
    }
.pass_input>div:first-child{
    padding-bottom: 20%;
    padding-top: 30px;
    color: #fff;
    font-weight: 500;
    font-size: 1.2rem;
}

.pass1{
    height:812px;
    width:100%;
   
    background: url("../../../assets/enter_2.jpg") no-repeat center center;
    /* background: #000; */
     background-size: cover;
     background-attachment: fixed;
}
.pass1 .pass_input{    
padding: 0 0;
width: 70%;
margin:0 auto;
text-align: center;
}
.item-inner{ 
    color: #fff;
    margin-bottom:15px;
    display: flex;
    background-color: rgba(165, 164, 167, 0.3);
    padding: 7px ;
}
.item-title{
padding: 0 12px;
}
.item-inner input{
    background: none;
    padding: 5px;
    outline: 0;
    border: 0;
}
input::-webkit-input-placeholder{
    color: #ccc;
    font-size: .9rem;
}
.reg{
    display: flex;
    justify-content: space-between;
    margin-top:25px;
}
.reg a{
    display: inline-block;
    text-decoration: none;
    color: #fff;
}

.mint-button {
    color: black ! important;
    background-color: rgba(137, 178, 216, 0.5) ! important;  
}

.test{
    display: inline-block;
    font-size: .7rem;
    border: 1px solid #fff;
    padding: 7px;
    color: #fff; text-decoration: none;
    border-radius: 3px;
}
a{
    text-decoration: none;
    color: #fff;
}
</style>



