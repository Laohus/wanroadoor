<template>
    <div style="margin-left: 5%;margin-top: 5%;width: 36%;">
        <el-form :model="third" :rules="thirdRules" ref="third">
            <div style="height: 50px">
                <el-switch
                        v-model="third.run"
                        active-text="立即执行"
                        inactive-text="等待">
                </el-switch>
            </div>
            <div style="height: 50px">
                <el-switch
                        v-model="third.report"
                        active-text="自动生成报告"
                        inactive-text="手动触发">
                </el-switch>
            </div>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 0,
                formLabelWidth: '80px',
                steps:"下一步",
                third:{
                    run:false,
                    report:false
                },
                thirdRules:{
                    report:[
                        {required:true,message:"请选择生成报告模式！",trigger:"blur"},
                    ],
                    run:[
                        {required:true,message:"请选择执行场景模式！",trigger:"blur"},
                    ],
                }
            };
        },
    }
</script>

<style scoped>
</style>