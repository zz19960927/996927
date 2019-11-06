<template>
    <div class="search">
        <div class="title">
              <div class="item-inner">
                <div class="item-title label"><i class="iconfont">&#58887;</i></div>
                <div class="item-input">
                    <input type="text"  value="" placeholder="请输入关键词" v-model="keyword" autocomplete="off" style="width:100%">
                </div>
                    <button @click="repath" v-show="keyword==''?true:false">取消</button>
                    <button @click="repath" v-show="keyword==''?false:true">搜索</button>
              </div>
        </div>
        <div class="key_p">
            <p>热门搜索</p>
            <div class="keywords">
                <span>外套</span>
                <span>靴子</span>
                <span>板鞋</span>
                <span>腰包</span>
                <span>帽子</span>
                <span>连衣裙</span>
                <span>双肩包</span>
                <span>手链</span>
                <span>短裤</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
        keyword:""
        }
    },
    methods:{
        repath(){
            history.go(-1)
        }
    }
}
</script>

<style scoped>
.item-inner{ 
    width: 100%;
    color: #fff;
    margin-bottom:15px;
    display: flex;
   background: #474747;
    padding: 9px ;
}
.item-title{
padding: 0 12px;

}
.item-inner input{
    font-size: 1;
    color: #ccc;
border-radius: 3px;
    /* height: 29px; */
    width: 100%;
    background:#0f0f0f ;
    padding: 5px;
    outline: 0;
    border: 0;
}
.item-inner .item-input{
    width: 60%;
}
.item-inner button{    
    margin-left:20px; 
    background: #474747;
    border: none;
    outline: none;
    color: #fff;
}
input::-webkit-input-placeholder{
    color: rgba(196, 191, 191, 0.993);
    font-size: .9rem;
}
    .key_p{
        font-size: .8rem;
 
    }
    .key_p p{
        margin: 5px;
 
    }
    .keywords{
        flex-wrap: wrap;
        display: flex;
        padding: 5px 10px;
    }
    
    .keywords span{
        margin: 3px 6px;
    font-size: .9rem;
    display: inline-block;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-radius: 10px;
    }
</style>
