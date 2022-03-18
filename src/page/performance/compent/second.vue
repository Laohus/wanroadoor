<template>
    <div style="margin-left: 5%;margin-top: 5%;width: 36%;">
        <el-form :model="second" :rules="secondRules" ref="first">
            <el-form-item label="线程数"  :label-width="formLabelWidth" prop="threadsCount">
                <el-input id="threadsCount" type="number" v-model="second.threadsCount" placeholder="请输入线程数" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="RampUp"  :label-width="formLabelWidth" prop="RampUp">
                <el-input id="RampUp" type="number" v-model="second.RampUp" placeholder="请输入Ramp-Up时间（秒）" autocomplete="off"></el-input>
            </el-form-item>
            <div style="height: 50px">
                <el-switch
                        v-model="time"
                        active-text="持续时间(秒)"
                        inactive-text="循环次数">
                </el-switch>
            </div>
            <el-form-item label="循环次数"  :label-width="formLabelWidth" prop="cycles" v-if="this.time === false">
                <el-input id="cycles" type="number" v-model="second.cycles" placeholder="请输入循环次数" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="持续时间" :label-width="formLabelWidth" prop="Duration" v-if="this.time === true">
                <el-select v-model="second.Duration" placeholder="请输入持续时间">
                    <el-option type="text" label="10分钟" value="10"></el-option>
                    <el-option type="text" label="30分钟" value="30"></el-option>
                    <el-option type="text" label="60分钟" value="60"></el-option>
                    <el-option type="text" label="120分钟" value="120"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="取样器错误后动作"  :label-width="formLabelWidth2" prop="radio">
                <el-radio-group v-model="second.radio">
                    <el-radio :label="1">继续</el-radio>
                    <el-radio :label="2">启动下一进程循环</el-radio>
                    <el-radio :label="3">停止线程</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active: 1,
                formLabelWidth: '80px',
                formLabelWidth2: '200',
                steps:"下一步",
                time:false,
                second:{
                    threadsCount:"",
                    RampUp:"",
                    cycles:"",
                    Duration:"",
                    radio:1,
                },
                secondRules:{
                    threadsCount:[
                        {required:true,message:"请输入线程数！",trigger:"blur"},
                        {min: 1,max: 5,message:"请输入1~5个整数！",trigger:"blur"}
                    ],
                    RampUp:[
                        {required:true,message:"请输入Ramp-Up时间（秒）！",trigger:"blur"},
                        {min: 1,max: 6,message:"请输入1~6个字符！",trigger:"blur"}
                    ],
                    cycles:[
                        {required:true,message:"请输入循环次数！",trigger:"blur"},
                        {min: 1,max: 6,message:"请输入1~6个字符！",trigger:"blur"}
                    ],
                    Duration:[
                        {required:true,message:"请输入持续时间！",trigger:"blur"},
                    ],
                    radio:[
                        {required:true,message:"请选择执行的动作！",trigger:"blur"},
                    ],
                }
            };
        },
    }
</script>

<style scoped>
</style>