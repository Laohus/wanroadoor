<template>
    <div>
        <el-table
                :data="cueList"
                :border="true"
                stripe
                style="width: 100%">
            <el-table-column type="index" label="序号" width="70">
            </el-table-column>
            <el-table-column prop="sceneName" label="场景名称" width="380">
            </el-table-column>
            <el-table-column prop="founder" width="200" label="创建人">
            </el-table-column>
            <el-table-column prop="run" width="100" label="执行模式">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="handleDelete(scope.$index, scope.row)">执行</el-button>
                    <el-button size="mini" type="info" @click="handleDelete(scope.$index, scope.row)">停止</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    <el-button size="mini" type="success" @click="handleDelete(scope.$index, scope.row)">生成报告</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "cueList",
        data() {
            return {
                cueList: [
                    {
                        "index":1,"sceneName":"扫码点餐下单",'founder':"凤尾鱼","run":"等待"
                    }
                ]
            }
        },
        methods:{
            handleDelete(index, row) {
                console.log(index+row)
            },
        },
    }
</script>

<style scoped>

</style>