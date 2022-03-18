<template>
<div>
    <div>
        <el-row>
            <el-col :sm="12" :lg="6" style="margin-top: 8%">
                <el-result icon="success" title="添加成功" subTitle="请在场景列表里查看结果">
                </el-result>
            </el-col>
        </el-row>
        <div style="width: 50%;height: 60%;margin-left: 30%;margin-top: -20%">
            <el-descriptions title="场景信息"
                             :border="true"
                             :column="2"
            >
                <el-descriptions-item label="场景名称">二维火扫码点餐下单</el-descriptions-item>
                <el-descriptions-item label="文件编码">1647585633000</el-descriptions-item>
                <el-descriptions-item label="线程数">100</el-descriptions-item>
                <el-descriptions-item label="用户数">20</el-descriptions-item>
                <el-descriptions-item label="执行时间">20分钟</el-descriptions-item>
                <el-descriptions-item label="取样器错误后动作">继续</el-descriptions-item>
                <el-descriptions-item label="执行模式">立即执行</el-descriptions-item>
                <el-descriptions-item label="报告模式">手动触发</el-descriptions-item>
            </el-descriptions>
        </div>
    </div>

</div>
</template>

<script>
    export default {
        name: "报告"
    }
</script>

<style scoped>

</style>