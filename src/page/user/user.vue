<template>
    <div>
        <add></add>
        <br>
    <el-table
            :data="tableData"
            :border="true"
            stripe
            style="width: 100%">
        <el-table-column type="index" label="序号" width="55">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="department" width="250" label="所属业务">
        </el-table-column>
        <el-table-column prop="rank" width="120" label="职级">
        </el-table-column>
        <el-table-column prop="email" width="250" label="邮箱">
        </el-table-column>
        <el-table-column prop="CreationTime" label="创建时间" width="250">
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button size="mini" type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
    import add from "@/page/user/add";
    import {UserDel, UserList} from "@/api/user";

    export default {
        name: "user",
        data() {
            return {
                tableData: []
            }
        },
        methods:{
            handleDelete(index, row) {
                UserDel(JSON.stringify(row)).then(response => {
                    if(response.code===0){
                        this.$message({
                            message: '删除成功！',
                            type: 'success'
                        });
                    }else {
                        this.$message.error(response.error);
                        return false
                    }
                })
            },
        },
        components:{
            "add":add
        },
        mounted() {
            UserList().then(response => {
                if(response.code===0){
                    for(let i =0; i<response.data.length; i++){
                        response.data[i].CreationTime=response.data[i].CreationTime.replace(/T/g, ' ').replace(/.[\d]{3}Z/, ' ');
                    }
                    this.tableData = response.data
                }else {
                    this.$message.error(response.error);
                    return false
                }
            })
        }
    }
</script>

<style scoped>

</style>