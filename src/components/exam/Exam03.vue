<template>
    <div>
            <!--开关组件 --> 
            <mt-switch v-model="val1" @change="change">开关选项</mt-switch>
            <mt-radio title="单选列表" :options='["a","b","c"]' v-model="val2" v-show="val1"></mt-radio>
            <mt-radio title="东哥今天多大了" :options='option' v-model="val3" v-show="val1"></mt-radio>
            <mt-checklist title="复选框列表" v-model="val4" :options="['a','b','c']"></mt-checklist>
    </div>
</template>
<script>
export default {
    data(){
        return {
            val1:true,
            val2:"",//这个值会存储a,b,c
            val3:"",
            val4:[],
            option:[
                {label:"去年",value:"24"},
                {label:"今年",value:"23"},
                {label:"明年",value:"22"},
                {label:"后年",value:"21"},
            ]
        }
    },
    methods:{
        change(){//处理状态改变函数console.log(this.val1);
            console.log(this.val2);
            console.log(this.val3);
            console.log(this.val4);
            this.$toast({message:`你已经选择了${this.val2}`})
        },

    }
}
</script>

