<template>
<div>
    <div>
        <el-steps
                :active="active"
                :space="500"
        >
            <el-step title="新增场景" description="场景描述主要是干什么的"></el-step>
            <el-step title="配置场景参数" description="请设置执行的线程数、并发数"></el-step>
            <el-step title="执行场景" description="运行脚本"></el-step>
        </el-steps>
    </div>
    <br>
    <first v-if="this.active === 0"></first>
    <second v-if="this.active === 1"></second>
    <third v-if="this.active === 2"></third>
    <results v-if="this.active === 3"></results>
    <div>
        <el-button-group style="margin-left: 70%">
            <el-button  v-show="show" size="big" type="info"  @click="nextBack">{{stepsBack}}</el-button>
            <el-button  style="margin-left: 30px" size="big" type="primary"  @click="next('first')">{{steps}}</el-button>
        </el-button-group>
    </div>
</div>
</template>

<script>
    import first from "@/page/performance/compent/first";
    import second from "@/page/performance/compent/second";
    import third from "@/page/performance/compent/third";
    import results from "@/page/performance/compent/results";
    export default {
        data() {
            return {
                active: 0,
                steps:"下一步",
                stepsBack:"上一步",
                show:true
            };
        },
        methods: {
            next() {
                if (this.active++ > 2){
                    this.active = 0
                }
                if (this.active < 2){
                    this.steps = "下一步"
                    this.show=true
                }
                if (this.active === 3){
                    this.steps = "完成"
                    this.show=false
                }
                if (this.active === 0){
                    this.show=false
                }
            },
            nextBack(){
                if(this.active >= 1 && this.active < 3){
                    this.active = this.active-1
                }
                if (this.active === 0){
                    this.show=false
                }
            }
        },
        components:{
            first:first,
            second:second,
            third:third,
            results:results
        },
        mounted() {
            if (this.active === 0){
                this.show=false
            }
        }
    }
</script>

<style scoped>
</style>