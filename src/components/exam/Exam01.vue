<template>
    <div>
        <h1>src/compnents/exam/Exam01.vue</h1>
        <h3>自定义目录组件</h3>
         <button @click="show">添加</button>
        <ul>
            <li v-for="(elem,i) of tasks" :key="i">{{elem}} <button @click="dele(i)">删除</button>
        <button @click="add">添加</button><br>
        </li>
        </ul>
       
        <!-- http://127.0.0.1:5050/#/Exam011 -->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tasks:["云南","昆明","大理","雪山"],
                msg:""
            }
        },
        created() {
            this.$toast({//短消息提示框
                message: "登录成功",
                position:"top",
                iconClass:"iconfont icon-chenggong"//显示字体图标
            });
        },
        methods: {
             show() {
                this.$messagebox(
                   "消息", // 这个可以不要
                   "加载成功"
                );
            },
            dele(i) {
                this.$messagebox.confirm("是否删除该数据")
                .then(res=>{//如果点击确定，执行下面这句
                     this.tasks.splice(i,1);
                }).catch(err=>{//如果点击这条，执行这条
                    console.log("取消删除")
                })     
            },
            add() {
                this.$messagebox.prompt("请输入").then((value)=>{
                    this.tasks.push(value.value);
                     console.log(value.value);
                }).catch(err=>{
                    console.log(err);
                })
            },
        }
    }
</script>