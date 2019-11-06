<template>
    <div class="enter" :style="heightenter">
        <table></table>
<button @click="toHome">男士 BOYS </button>
<button @click="toHome">女士 GIRLS</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            heightenter:{
                height:0
            }
        }
    },
    methods:{
        toHome(){
            this.$router.push("/messageHome")
        }
    },
            beforeMount() {
             this.heightenter.height = parseInt(document.documentElement.clientHeight || document.body.clientHeight)+ 'px'; 
             console.log( this.heightenter.height)
             console.log(1)
    }
}
</script>
<style scoped>
.enter{
    padding-top:65%;
    background-image: url("../../../assets/enter.jpg");
    background-size:cover;
}
.enter button{
    display: block;
    margin: 0 auto;
  width: 13rem;
    line-height: 3rem;
    text-align: center;
    margin: 1rem auto;
    box-shadow: 0 0 5px #333333;
    background: #333;
    color: #fff;
    border: solid 2px #fff;
}
.enter button+button{
    margin-top: 25px;
}
</style>

