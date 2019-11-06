<template>
<div>
      <h1>hahah,我是子组件</h1> 
      <h3 @click="add3">{{msg}}</h3>
      <img :src="img3" alt="">
</div>
</template>
<script>
export default {
    props:{
        msg:{default:""},
        add3:{type:Function},//type意思为接收类型
        img3:{dedault:""},
        
    }//props:["msg","add3","img3"]
}
</script>

