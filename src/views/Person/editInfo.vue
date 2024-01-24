<!-- 编辑简历 -->
<template>
  <div>
    <el-form :model="form" label-width="120px">
        <el-form-item label="自我评价" prop="description" required>
            <el-input type="textarea" :rows="3" v-model="form.description" />
        </el-form-item>
        <el-form-item label="年龄" prop="age">
            <el-input-number v-model="form.age" :min="0" :max="60" />
        </el-form-item>
        <el-form-item label="经验" prop="year">
            <el-input-number v-model="form.year" :min="2" :max="60" />
        </el-form-item>
        <el-form-item label="求职意向" prop="location" required>
            <el-checkbox-group v-model="form.location">
                <el-checkbox label="杭州" name="杭州" />
                <el-checkbox label="上海" name="上海" />
                <el-checkbox label="深圳" name="深圳" />
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="在职状态" prop="status">
            <el-switch v-model="form.status" />
        </el-form-item>
        <el-form-item label="技能清单">
          <div style="width:100%">
              <div v-for="(skill, index) in form.skills" :key="index">
                <el-input style="width: 80%" type="textarea" :rows="2" v-model="skill.value" />
                <el-button style="margin-left:8px" @click.prevent="removeSkill(skill, index)">Delete</el-button>
              </div>
              <el-button style="width:100%;margin-top:12px" type="primary" @click.prevent="addSkill()">ADD</el-button>
          </div>
        </el-form-item>
        <el-form-item label="工作经验">
          <el-card style="width:100%;margin-top:12px" v-for="(item, index) in form.jobs" :key="index">
            <el-button style="float:right" @click.prevent="removeJob(item, index)">Delete</el-button>
            <div style="display:flex">
              <el-date-picker
                v-model="item.date"
                type="datetimerange"
                start-placeholder="Start date"
                end-placeholder="End date"
                format="YYYY-MM-DD HH:mm:ss"
                date-format="YYYY/MM/DD ddd"
                time-format="A hh:mm:ss"
              />
              <el-input v-model="item.company"></el-input>
              <el-input v-model="item.job"></el-input>
            </div>
            <el-input style="margin-top: 8px;" type="textarea" :rows="2" v-model="item.details" />
          </el-card>
          <el-button style="width:100%;margin-top:12px" type="primary" @click.prevent="addJob()">ADD</el-button>
        </el-form-item>
        <el-form-item label="项目经验">
          <el-card style="width:100%;margin-top:12px" v-for="(item, index) in form.projects" :key="index">
            <el-button style="float:right" @click.prevent="removeProject(item, index)">Delete</el-button>
            <div style="display: flex;">
              <el-input v-model="item.name"></el-input>
            </div>
            <div>
              <el-input style="margin-top: 8px;" type="textarea" :rows="2" v-model="item.info"></el-input>
            </div>
            <el-input style="margin-top: 8px;" type="textarea" :rows="3" v-model="item.details" />
          </el-card>
          <el-button style="width:100%;margin-top:12px" type="primary" @click.prevent="addProject()">ADD</el-button>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import {request} from '@/utils/service'
import {Form,JOBITEM,SKILLARR,PROJECTITEM} from '@/type/person'

const form = ref<Form>({
  description: '',
  age: 27,
  year: 2,
  location: [],
  status: true,
  skills: [],
  jobs:[],
  projects: []
})
interface responseData {
  code: number
  data: any
}

const onSubmit = () => {
  console.log(form.value)
  return request({
    type: 'post',
    url: '/api/person/create',
    data: form.value,
  }).then((res:responseData) => {
    console.log(res)
  })
}
const removeSkill = (item:SKILLARR, index) => {
  form.value.skills.splice(index,1)
}
const removeJob = (item:JOBITEM, index) => {
  form.value.jobs.splice(index,1)
}
const removeProject= (item:PROJECTITEM, index) => {
  form.value.projects.splice(index,1)
}
const addSkill = () => {
  form.value.skills.push({
    key:Date.now(),
    value:''
  })
}
const addJob = () => {
  form.value.jobs.push({
    company: '',
    job: '',
    date: '',
    details: ''
  })
}
const addProject = () => {
  form.value.projects.push({
    name: '',
    info: '',
    details: ''
  })
}
</script>
<style scoped>
</style>