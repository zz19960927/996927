<template++++>
    <div class="pass">
        <table></table>
          <div class="repath"><a href="javascript:history.go(-1)"> &lt;</a></div>

        <div class="logo">
               <img src="../../../assets/logo.png" alt="">
            </div>
        <div class="pass_input">
            
              <div class="item-inner">
                <div class="item-title label"><i class="iconfont2">&#xe689;</i></div>
                <div class="item-input">
                    <input type="text"  value="" placeholder="用户名/邮箱/手机号" v-model="uname" autocomplete="off">
                </div>
              </div>
              <div class="item-inner">
                  <div class="item-title label"><i class="iconfont2">&#xe620;</i></div>
                <div class="item-input">
                    <input type="password"  placeholder="填写密码" v-model="upwd">
                    <a href="javascript:;" class="view_password"><i class="iconfont icon-icon1"><div class="u-diagonal"></div></i></a>
                </div>
                <div class="item-title label"><i class="iconfont2">&#xe6ce; </i></div>
            </div>
            >
      <div class="btn">
          <mt-button size="large" @click="login" @keydown.13="login">登录</mt-button>
     </div>  
<div class="reg">
     <router-link :to="{path:'/reg'}">马上注册</router-link>
     <router-link :to="{path:'/password'}">忘记密码？</router-link>
<!-- <a href="javascript:this.$router.push('/reg');"></a> -->
<!-- <a href="javascript:;"></a> -->
</div>
<div class="logo_img ">
   
<a href="javascript:;"><img src="../../../assets/weixin.png" alt=""></a>
<a href="javascript:;"><img src="../../../assets/qqlogin.png" alt=""></a>
</div>  
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            uname:"",
            upwd:""
        }
    },
    methods:{
        login(){
      if(this.uname==""){
          this.$toast("请输入用户名")
      }
      else if(this.upwd==""){
          this.$toast("请输入密码")
      }else{
          if(localStorage.getItem(this.upwd+'+'+this.uname)==this.uname){
          this.$router.push({path:"/messageHome",query:{id:this.uname}})
          }
        console.log(localStorage.getItem(this.upwd+'+'+this.uname))
      }
      
        }
    }
}
</script scoped>
<style scoped>
.repath{
  position: absolute;
    color: #fff;
    top: 21px;
    left: 28px;
    font-size: 1.8rem;
}
a{
    text-decoration: none;
    color: #fff;
}

.logo{
    margin-top:23%;
    margin-left: 10%;
    border-bottom:4px solid rgb(139, 183, 240) ;
    width: 30%;
    padding: 5% 0;
    text-align: center;
}
.logo img{
    width: 80%;
}
.pass{
    height:812px;
    width:100%;
   
    background: url("../../../assets/enter_2.jpg") no-repeat center center;
    /* background: #000; */
     background-size: cover;
     background-attachment: fixed;
}
.pass .pass_input{    
     background-color:transparent !important;

padding: 13% 0;
width: 70%;
margin:0 auto;
}
.item-inner{ 
    color: #fff;
    margin-bottom:15px;
    display: flex;
    background-color: rgba(165, 164, 167, 0.3);
    padding: 7px ;
}
.item-title{
padding: 2px 12px 0 12px ;
}
.item-inner input{
    width: 70%;
    background: none;
    padding: 5px;
    outline: 0;
    border: 0;
}
input::-webkit-input-placeholder{
    color: #ccc;
    font-size: .9rem;
}
.btn{
    margin-top:25px;
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
.logo_img{
    display: flex;
    justify-content: space-between;
    margin-top:35px;
    padding: 0 40px;
}
.logo_img a{
    display: inline-block;
    text-decoration: none;
    color: #fff;
}
.logo_img a:active,a:hover,a:visited,a:link,a:focus{
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    outline: none;
    background: none;
}
.logo_img img{
    width: 49%;
}
.mint-button {
    color: black ! important;
    background-color: rgba(137, 178, 216, 0.5) ! important;  
}
</style>

