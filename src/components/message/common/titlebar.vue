<template>
    <div id="titlebar" :class="active=='tab5'?'':'bg'">
        <!-- tab1的head  HTML -->

            <div class="nav_left">
              <img src="../../../assets/icon_#fff/hanbaocaidan.png" alt="" @click="show">
            </div>
            <div class="nav_right">
             <img src="../../../assets/icon_#fff/xinxi.png" alt="" v-show="active=='tab5'?false:true" @click="is_logined($event)" data-path="/message">
             <img src="../../../assets/icon_#ccc/xinxi.png" alt="" v-show="active=='tab5'?true:false" @click="is_logined($event)" data-path="/message">
            </div>


        <div v-show="active=='tab1'?true:false" class="tab1">
            <div class="Ctab1">
                <img :src="img1" alt="">
             
            </div>
            
            <div class="left_ser" @click="sear">
                <img src="../../../assets/ic_search.png" alt=""> 
            </div>
        </div>

        <!-- tab1的head  HTML  分类 品牌 设计师-->
        <div v-show="active=='tab2'?true:false" class="tab2">
            <div class="Ctab1">
                <span @click="change_1('ac_tab1')" :class="active_tab2=='ac_tab1'?'on':''">分类</span>
                <span @click="change_1('ac_tab2')" :class="active_tab2=='ac_tab2'?'on':''">品牌</span>
                <span @click="change_1('ac_tab3')" :class="active_tab2=='ac_tab3'?'on':''">设计师</span>
            </div>
            <div class="left_ser" @click="sear">
                <img src="../../../assets/ic_search.png" alt="">
              
            </div>
        </div>
        <!-- tab1的head  HTML  分类 品牌 设计师-->
        <div v-show="active=='tab3'?true:false" class="tab3">
            <div class="Ctab1">
                <div @click="change_2('ac_tab1')" :class="active_tab3=='ac_tab1'?'on':''">社 区</div>
                <div @click="change_2('ac_tab2')" :class="active_tab3=='ac_tab2'?'on':''">直 播</div>
            </div>
            <div class="left_ser" @click="sear">
                <img src="../../../assets/ic_search.png" alt="">
            </div>
        </div>
        <!-- tab1的head  HTML  分类 品牌 设计师-->
        <div v-show="active=='tab4'?true:false" class="tab4">
            <div class="Ctab1">
                <div @click="change_2('ac_tab1')" :class="active_tab3=='ac_tab1'?'on':''">设计</div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        name: 'demo',
        data() {
            return {
                
            }
        },
        props: {
            msg: {
                default: ""
            },
            img1: {
                dedault: ""
            },
            active: {
                default: ""
            },
            active_tab2: {
                default: ""
            },
            active_tab3: {
                default: ""
            }
        },
        //porps:["msg","img1","img2"],
        methods: {
            change_1(tab) {
                // console.log(tab)
                this.$emit("change1", tab)
            },
            change_2(tab) {
                this.$emit("change2", tab)
            },
            show() {
                this.$emit("show")
            },
            is_logined(e){
                  this.$emit("is_logined",e)
                  console.log("调用父组件方法is_logined")
            },
            sear(){
                this.$router.push("/search")
            }
        }
    }
</script>
<style >
    #titlebar {
        position: fixed;
        z-index: 998;
        width: 100%;
        height: 52px;
    }
.nav_left{
    position: absolute;
    padding-left: 0.6rem;
    padding-top: 0.3rem;
}
.nav_left img:first-child{
       width:2.4rem; 
}
.nav_right img{
    z-index: 1;
       position: absolute;
    top: 11px;
    width: 31px;
    left: 87%;
}
.bg{
  background: #393a3e;
}
    /* tab1的headcss */
    /* .tab1 {
        display: flex;
        position: relative;
    } */

    .tab1 .Ctab1 img {
        position: absolute;
        margin-top: 15px;
        width: 85px;
        left: 38%;
    }
    .tab1 .Ctab1 img {
        position: absolute;
        margin-top: 15px;
        width: 85px;
        left: 38%;
    }

    .tab1 .left_ser img:first-child {
        position: absolute;
        top: 15px;
        width: 24px;
        right: 20%;
    }


    /* tab2的headcss
    .tab2 {
        display: flex;
        position: relative;
    } */

    .tab2 .Ctab1 {
        position: absolute;
        top: 15px;
        left: 100px;
        color: #aaa;
        align-items: center
    }

    .tab2 .Ctab1 .on {
        color: #fff !important;
    }

    .tab2 .Ctab1 span+span {
        margin-left: 20px;
    }

    .tab2 .left_ser img:first-child {
        position: absolute;
        top: 15px;
        width: 24px;
        right: 20%;
    }

    /* tab3的headcss */
    /* .tab3 {
        display: flex;
        position: relative;
    } */

    .tab3 .Ctab1 {
        position: absolute;
        top: 16px;
        left: 34%;
        width: 60%;
        color: #aaa;
        align-items: center;
        display:flex;
    }
 .tab3 .Ctab1 div{
   height: 33px;
}
    .tab3 .Ctab1 .on {
        color: #fff !important;
         border-bottom:2px solid #fff;
    }

    .tab3 .Ctab1 div+div {
        margin-left: 19%;
    }

    .tab3 .left_ser img:first-child {
        position: absolute;
        top: 15px;
        width: 24px;
        right: 20%;
    }

    /* tab4的headcss */

    .tab4 .Ctab1 {
        position: absolute;
        top: 16px;
        left: 45%;
        width: 60%;
        color: #fff;
        align-items: center;
        display:flex;
    }
 .tab4 .Ctab1 div{
   height: 34px;
}


  
</style>