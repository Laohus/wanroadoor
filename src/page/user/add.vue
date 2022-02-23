<template>
    <div>
        <div>
        <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
        </div>
        <div>
        <el-dialog
                title="新 增"
                :visible.sync="dialogFormVisible"
                :modal=true
                :modal-append-to-body=false
                :close-on-click-modal=false
                width="40%"
        >
        <el-form :model="formAdd" :rules="formRules" ref="formAdd">
            <el-form-item label="用户名" :label-width="formLabelWidth" prop="name">
                <el-input type="text" v-model="formAdd.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth" prop="password">
                <el-input type="password" v-model="formAdd.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="所属业务" :label-width="formLabelWidth" prop="department">
                <el-input type="test" v-model="formAdd.department" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="职级" :label-width="formLabelWidth" prop="rank">
                <el-select v-model="formAdd.rank" placeholder="请选择职级">
                    <el-option type="text" label="管理员" value="管理员"></el-option>
                    <el-option type="text" label="用户" value="用户"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
                <el-input type="email" v-model="formAdd.email" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="onsubmit('formAdd')">确 定</el-button>
        </div>
    </el-dialog>
        </div>
    </div>
</template>

<script>
    import {UserAdd} from "@/api/user";

    export default {
        name: "add",
        data(){
            return{
                dialogTableVisible: false,
                dialogFormVisible: false,
                formAdd: {
                    name: '',
                    password: '',
                    department: '',
                    rank: '',
                    email: '',

                },
                formLabelWidth: '80px',
                formRules:{
                    name:[
                        {required:true,message:"请输入用户名称！",trigger:"blur"},
                        {min: 5,max: 12,message:"请输入5~12个字符！",trigger:"blur"}
                    ],
                    password:[
                        {required:true,message:"请输入用户密码",trigger:"blur"},
                        {min:6,max:12,message:"请输入6~12个字符！",trigger:"blur"}
                    ],
                    department:[
                        {required:true,message:"请输入所属业务",trigger:"blur"},
                        {min:3,max:22,message:"请输入3~22个字符！",trigger:"blur"}
                    ],
                    rank:[
                        {required:true,message:"请输入职级",trigger:"blur"},
                    ],
                    email:[
                        {required:true,message:"请输入个人邮箱地址",trigger:"blur"},
                        {min:6,max:22,message:"请输入6~22个字符！",trigger:"blur"}
                    ],
                }
            }
        },
        methods:{
            onsubmit(formName){
                this.$refs[formName].validate(valid => {
                    if(valid){
                        UserAdd(JSON.stringify(this.formAdd)).then(response => {
                            if(response.code===0){
                                this.$message({
                                    message: '添加成功！',
                                    type: 'success'
                                });
                                this.dialogFormVisible=false;
                                this.$refs['formAdd'].resetFields();
                            }else {
                                this.$message.error(response.error);
                                return false
                            }
                        })
                    }else {
                        return false
                    }
                })
            }

        }
    }
</script>

<style scoped>

</style>