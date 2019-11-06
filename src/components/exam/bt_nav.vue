<template>
    <div>
        <!-- 这是一种最简单的方式  -->
        <mt-button @click="active='tab1'">子面板一</mt-button>

        <mt-button @click="change('tab2')">子面板二</mt-button>
        <mt-button @click="change('tab3')">子面板三</mt-button>
        <mt-button @click="change('tab4')">子面板四</mt-button>
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="tab1"  :style="{'background-color':'red'}">
                <h1 :style="{'text-align':'center'}">美食</h1></mt-tab-container-item>
            <mt-tab-container-item id="tab2" ><h1 :style="{'text-align':'center'}">休闲</h1></mt-tab-container-item>
            <mt-tab-container-item id="tab3"><h1 :style="{'text-align':'center'}">购物</h1></mt-tab-container-item>
            <mt-tab-container-item id="tab4"><h1 :style="{'text-align':'center'}">我的</h1></mt-tab-container-item>  
        </mt-tab-container>
        <mt-tabbar fixed v-model="active">

            <mt-tab-item id="tab1">
                <!-- //这是个按钮 点击它 active就会被赋值为tab1 -->
                <!-- :style="{'width':'50px'}" -->
                <img src="../../../public/img/nav-icon3.png" alt=""  slot="icon" v-show="active=='tab1'?false:true">
                <!-- 这样可以实现切换图片 -->
                <img src="../../../public/img/girls-4.jpg" alt=""  slot="icon" v-show="active=='tab1'?true:false">
               美食
            </mt-tab-item>
            <mt-tab-item id="tab2">
                <img src="../../../public/img/nav-icon4.png" alt="" slot="icon" >
                休闲
            </mt-tab-item>
            <mt-tab-item id="tab3">
                <img src="../../../public/img/nav-icon5.png" alt="" slot="icon">
                购物
            </mt-tab-item>
            <mt-tab-item id="tab4">
                <img src="../../../public/img/nav-icon7.png" alt="" slot="icon">
                我的
            </mt-tab-item>
        </mt-tabbar>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                active: "tab1",
            }
        },
        methods:{
            change(id){
                this.active=id;
            }
        }
    }
</script>