<template>
    <div class="msg">
          <div class="repath"><a href="javascript:history.go(-1)">  &lt; </a></div>
          
<div class="title">
<span>信息</span>
</div>

  <div class="items"   data-path="/adress">
                    <div class="p1">  <i class="iconfont2">&#xe63b;</i>
                        <div>系统消息</div>
                    </div>
                    <span> &gt;</span>
  </div>
  <div class="items"   data-path="/adress">
                    <div class="p1"><i class="iconfont2">&#xe766;</i>
                        <div>评论</div>
                    </div>
                    <span> &gt;</span>
  </div>
  <div class="items"   data-path="/adress">
                    <div class="p1"><i class="iconfont2">&#xe617;</i>
                        <div>赞</div>
                    </div>
                    <span> &gt;</span>
  </div>
  <div class="items"  data-path="/adress">
                    <div class="p1"> <i class="iconfont2">&#xe610;</i>
                        <div>关注</div>
                    </div>
                    <span> &gt;</span>
  </div>
  <div class="items"  data-path="/adress">
                    <div class="p1"><i class="iconfont2">&#xe665;</i>
                        <div>客服</div>
                    </div>
                    <span> &gt;</span>
  </div>
    </div>
</template>
<script>
export default {

}
</script>
 <style scoped>
.msg .title{
    height:3.5rem; 
    background: #393a3e;
}

.repath{
  position: absolute;
    color: #fff;
    top: 12px;
    left: 28px;
    font-size: 1.8rem;
}
a{
    text-decoration: none;
    color: #fff;
}
.msg .title{
text-align: center;
}
.msg .title span{
    display: inline-block;
margin-top:1.1rem;   
    color:#fff;
}

 .msg .items {
                color:#000;
        position: relative;
        padding: 7px 15px !important;
        height: 35px;
        line-height: 35px;
        display: flex;
        justify-content: space-between;
        padding: 0 20px 0px 20px;
        border-bottom: 1px solid #ddd;
        font-size: 15px;
    }

    .msg .items .p1 {
        margin: 0;
        padding-top: 5px;
    }

    .msg .items .p1 img {

        width: 24px;
    }

    .msg .items .p1 div {
        position: absolute;
        display: inline-block;
        left: 52px;
    }
     .msg .items span{
         color:#bbb;
     }
 </style>

