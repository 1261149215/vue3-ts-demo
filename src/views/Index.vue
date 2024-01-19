<template>
  <div class="common-layout">
    <el-container>
      <el-header style="padding:0">
        <el-menu
          :default-active="activeName"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <el-menu-item index="/project/info">首页</el-menu-item>
          <!-- <el-menu-item index="/info">文章</el-menu-item> -->
        </el-menu>
      </el-header>
      <el-main >
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { useRouter, RouterView } from 'vue-router'
import { defineComponent, reactive, ref, toRefs } from 'vue'
const router = useRouter()
let activeName = ref('/project/info')
const handleSelect = (key: string, keyPath: string[]) => {
  activeName = key
  router.push({path: key})
}
</script>


<style scoped>

</style>
