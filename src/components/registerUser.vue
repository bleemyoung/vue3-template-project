<template>
  <div>
    <p>
      <el-button>
        <router-link to="/">返回主页</router-link>
      </el-button>
    </p>
    当前是登录页面
    <el-form ref="formRef" :model="form" label-width="auto">
      <el-form-item label="账号" >
        <el-input v-model="form.account"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">注册</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  
  <script>
import { ref, reactive, toRefs } from "vue";

import {useRouter} from 'vue-router'
export default {
  name: "registerUser",
  setup() {
    const formRef = ref(null);
    const router=useRouter()

    const data = reactive({
      form: {
        account: "",
        password: "",
      },
    });
    const onSubmit = () => {
      console.log("submit!");
      router.push('/')
    };

    return {
      ...toRefs(data),
      formRef,
      onSubmit,
    };
  },
};
</script>
  
  <style scoped>
</style>
  
