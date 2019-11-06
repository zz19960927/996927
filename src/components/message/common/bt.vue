<template>
    <div id="bt">
         <mt-tabbar fixed v-model="active">
            <mt-tab-item id="tab1">
             <img src="../../../assets/ic_weixin_normal.png" alt="" slot="icon" v-show="active=='tab1'?false:true">
             <img src="../../../assets/ic_weixin_selected.png" alt=""  slot="icon" v-show="active=='tab1'?true:false">
            </mt-tab-item>
            <mt-tab-item id="tab2">
             <img src="../../../assets/ic_me_normal.png" alt="" slot="icon" v-show="active=='tab2'?false:true">
             <img src="../../../assets/ic_contacts_selected.png" alt=""  slot="icon" v-show="active=='tab2'?true:false">
            </mt-tab-item>
            <mt-tab-item id="tab3">
             <img src="../../../assets/ic_find_normal.png" alt="" slot="icon" v-show="active=='tab3'?false:true">
             <img src="../../../assets/ic_find_selected.png" alt=""  slot="icon" v-show="active=='tab3'?true:false">
            </mt-tab-item>
            <mt-tab-item id="tab4">
             <img src="../../../assets/ic_me_normal.png" alt="" slot="icon" v-show="active=='tab4'?false:true">
             <img src="../../../assets/ic_me_selected.png" alt="" slot="icon"  v-show="active=='tab4'?true:false">
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return {
            active:"tab1"
        }
    }
}
</script>
<style>
.mint-tab-item-icon > img{
    display: block;
    width: 33px;
    height: 33px;
}
#bt .mint-tab-item {
    display: block;
    padding: 9px 0;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-decoration: none;
}

</style>

