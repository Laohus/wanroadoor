<template>
    <div class="search">
        <el-col :span="10">
            <el-input type="text"
                      size="medium"
                      v-model="input"
                      style="color: black"
                      minlength="1"
                      maxlength="32"
                      placeholder="  请输入书名..."
                      class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </el-col>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                input:""
            }
        }
    }
</script>

<style scoped>
    .el-input--medium /deep/ .el-input__inner{
        height: 50px;
        font-size: large;
    }
    /deep/ .el-input-group__append, /deep/ .el-input-group__prepend{
        background-color: #C0C4CC;
    }
    /deep/ .el-icon-search{
        color: white;
        font-size: 25px;
    }
</style>