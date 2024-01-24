<!-- 个人介绍 -->
<template>
  <div>
    <el-card shadow="always">
      <div class="flex">
        <div style="width:90%;margin-right: 200px;">
          <h2>郭颖</h2>
          <div style="margin-bottom:20px">
            {{ info.description }}
          </div>
          <div class="flex">
            <span>{{info.age}}岁</span>
            <el-divider direction="vertical" />
            <span>{{info.year}}经验</span>
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
        <span><el-icon><Location /></el-icon>
          <span v-for="(item,index) in info.location" :key="index" style="margin-right: 4px;">{{ item }}</span>
        </span>
        <span><el-icon><Message /></el-icon>
          <template v-if="info.status">在职找工作</template>
          <template v-else>离职找工作 - 随时到岗</template>
        </span>
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h3>技能清单</h3>
        </div>
      </template>
      <ul>
        <li v-for="(item,index) in info.skills" :key="index">
          {{ item.value }}
        </li>
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
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h3>工作经验</h3>
        </div>
      </template>
      <div style="margin-top: 12px;" v-for="(item,index) in info.jobs" :key="index">
        <div style="display: flex; font-size: 16px;font-weight: bold;justify-content: space-between;">
          <span>{{ formattedDate(item.date)[0] }}-{{ formattedDate(item.date)[1] }}</span>
          <span>{{ item.company }}</span>
          <span>{{ item.job }}</span>
        </div>
        <div>{{ item.details }}</div>
      </div>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <h3>项目经验</h3>
        </div>
      </template>
      <div style="margin-top: 12px;" v-for="(item,index) in info.projects" :key="index">
        <div style="display: flex; font-size: 18px;font-weight: bold;justify-content: space-between;">
          <span>{{ item.name }}</span>
        </div>
        <div style="margin-top: 12px;">
          <b>项目介绍</b>
          <div>{{ item.info }}</div>
        </div>
        <div style="margin-top: 12px;">
          <b>工作内容</b>
          <div>{{ item.details }}</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang='ts'>
import { computed, ref} from 'vue'
import PIC from 'assets/image/pic.jpg'
import {request} from '@/utils/service'
import {Form} from '@/type/person'
import {formatDates} from '@/utils/hooks'
const formattedDate = ((val:string[]) => {
  return formatDates(val); // 假设这里是需要格式化的日期字段
});
interface response {
  code: number
  data: {
    description: string,
    age: number,
    year: number,
    location: string,
    status: boolean,
    skills: string,
    jobs: string,
    projects: string
  }
}
const pic = ref(PIC)
let info = ref<Form>({
  description: '',
  age: 27,
  year: 2,
  location: [],
  status: true,
  skills: [],
  jobs: [],
  projects: []
});
const load = () => {
  return request({
    url: '/api/person/search'
  }).then((res:response) => {
    info.value = res.data
    info.value.jobs = JSON.parse(res.data.jobs)
    info.value.location = JSON.parse(res.data.location)
    info.value.skills = JSON.parse(res.data.skills)
    info.value.projects = JSON.parse(res.data.projects)
    console.log(info.value)
  })
}
load()
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