<!--  -->
<template>
  <div class="loginRoot">
    <el-form :model="form" label-width="100px" ref="formRef" :rules="rules">
        <el-form-item label="name">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="password">
            <el-input v-model="form.password" type="password" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login(formRef)">
                LOGIN
            </el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang='ts'>
import { reactive,ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
interface Form {
  name: string
  password: string
}
const form = reactive<Form>({
  name: '',
  password: ''
})
const formRef = ref<FormInstance>()
const rules = reactive<FormRules<Form>>({
    name: [
        { required: true, message: 'Please input name', trigger: 'blur' },
        { min: 3, max:165, message: 'Length should be 3 to 16', trigger: 'blur' },
    ],
    password: [
        { required: true, message: 'Please input password', trigger: 'blur' }
    ]
})
</script>
<style scoped>
.loginRoot{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
}
</style>