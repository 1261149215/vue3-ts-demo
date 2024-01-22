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
                <el-checkbox label="杭州" />
                <el-checkbox label="上海" />
                <el-checkbox label="深圳" />
            </el-checkbox-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Submit</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang='ts'>
import { reactive,toRefs,onBeforeMount,onMounted,ref} from 'vue'
interface DataProps {}
const form = reactive({
  description: '',
  age: 27,
  year: 2,
  localtion: '',
})

const onSubmit = () => {
  console.log(form)
}
</script>
<style scoped>
</style>