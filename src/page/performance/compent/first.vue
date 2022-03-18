<template>
    <div style="margin-left: 5%;margin-top: 5%;width: 36%;">
        <el-form :model="first" :rules="firstRules" ref="first">
            <el-form-item label="场景名称"  :label-width="formLabelWidth" prop="name">
                <el-input id="sceneName" type="text" v-model="first.name" placeholder="请输入场景名称" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="文件名称" :label-width="formLabelWidth" prop="fileName">
                <el-select v-model="first.fileName" placeholder="请选择脚本文件">
                    <el-option type="text" label="text1" value="text1"></el-option>
                    <el-option type="text" label="text2" value="text2"></el-option>
                    <el-option type="text" label="text3" value="text3"></el-option>
                </el-select>
            </el-form-item>
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
                first:{
                    name:"",
                    fileName:""
                },
                firstRules:{
                    name:[
                        {required:true,message:"请输入场景名称！",trigger:"blur"},
                        {min: 5,max: 12,message:"请输入5~12个字符！",trigger:"blur"}
                    ],
                    fileName:[
                        {required:true,message:"请选择脚本文件！",trigger:"blur"},
                    ],
                }
            };
        },
    }
</script>

<style scoped>
</style>