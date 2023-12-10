<!--  -->
<template>
  <div>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang='ts'>
import { toRefs,onBeforeMount,onMounted} from 'vue'
interface DataProps {}
</script>
<style scoped>
</style>