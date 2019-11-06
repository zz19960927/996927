
<template>
    <div>
     <!-- 3、调用子组件 -->
     <!-- 这是两种传值方式加：号 和不加：冒号 -->
     <!-- 传递图片:img3="require('../../../public/img/nav-icon3.png')" -->
   <mychild :msg="msg" :add3="myadd3" :img3="require('../../../public/img/nav-icon3.png')"></mychild> 
   <!-- 不加冒号传的是msg这个字符串，加冒号是传的msg这个变量 -->
   <!-- <mychild msg="msg" ></mychild> -->
    <h1>我是父组件</h1>
    </div>
</template>

<script>
import child from './child.vue'//1、引入子组件
export default {
    data(){
        return {
            msg:"测试数据"
            //img3:"../../../public/img/nav-icon3.png"
        }
    },
    components:{//2、注册子组件
        "mychild":child
    },
    methods:{
        myadd3(){
            console.log("父组件传递的函数")
        }
    }
}
</script>
