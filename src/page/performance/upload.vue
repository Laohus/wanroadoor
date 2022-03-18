<template>
    <div>
        <br>
        <el-upload
                class="upload-demo"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="true"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false">
                <el-button slot="trigger" size="big" type="primary">选取文件</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button  size="big" type="success" @click="submitUpload">上传到服务器</el-button>
        </el-upload>
        <el-divider content-position="left "></el-divider>
        <el-table
                :data="fileData"
                :border="true"
                stripe
                style="width: 100%">
            <el-table-column type="index" label="序号" width="70">
            </el-table-column>
            <el-table-column prop="fileName" label="文件名称" width="250">
            </el-table-column>
            <el-table-column prop="scriptId" label="文件编码" width="250">
            </el-table-column>
            <el-table-column prop="creator" width="250" label="创建人">
            </el-table-column>
            <el-table-column prop="CreationTime" label="创建时间" width="260">
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
    export default {
        data() {
            return {
                fileList: [
                    // {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
                    // {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
                    ],
                fileData: []
            };
        },
        methods: {
            submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            }
        }
    }
</script>

<style scoped>

</style>