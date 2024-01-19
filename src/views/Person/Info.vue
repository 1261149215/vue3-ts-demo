<!-- 个人介绍 -->
<template>
  <div>
    <el-card shadow="always">
      <div class="flex">
        <div style="width:90%;margin-right: 200px;">
          <h2>郭颖</h2>
          <div style="margin-bottom:20px">
            有2年多前端开发经验，主导开发过交付上线的前端项目。本人热爱前端工作，有良好的责
            任心，积极上进，有着较高的求知欲。 具备良好的团队协作精神，能利用自身技术能力提
            升团队整体研发效率，提高团队影响力
          </div>
          <div class="flex">
            <span>27岁</span>
            <el-divider direction="vertical" />
            <span>2年多经验</span>
            <el-divider direction="vertical" />
            <span>18720062888</span>
            <el-divider direction="vertical" />
            <span>1261149215@qq.com</span>
          </div>
        </div>
        <el-avatar
          style="float:right"
          shape="square"
          :size="150"
          :src="pic"
        />
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h3>求职意向</h3>
        </div>
      </template>
      <div class="flex">
        <span><el-icon><Aim /></el-icon>前端开发</span>
        <span><el-icon><Location /></el-icon>浙江杭州</span>
        <span><el-icon><Message /></el-icon>离职找工作 - 随时到岗</span>
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h3>技能清单</h3>
        </div>
      </template>
      <ul>
        <li>熟练掌握 JavaScript 语言、ES6 规范，HTML5，CSS3及Sass语法，注重代码质量</li>
      </ul>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h3>教育背景</h3>
        </div>
      </template>
      <div>
        <div style="margin-bottom:20px" class="flex">
          <b>2020.6-2021.12</b>
          <b>香港大学（研究生）</b>
          <b>ITE</b>
        </div>
        <div class="flex">
          <b>2015.9-2019.6</b>
          <b>西安建筑科技大学（本科）</b>
          <b>信息管理与信息系统</b>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang='ts'>
import { reactive,toRefs,onBeforeMount,onMounted, ref} from 'vue'
import PIC from 'assets/image/pic.jpg'
interface DataProps {}
const pic = ref(PIC)
</script>
<style scoped>
.flex{
  display:flex;
  justify-content: space-between;
}
.el-card{
  margin-bottom:20px
}
.el-icon{
  margin-right:8px;
  vertical-align: middle;
}
</style>