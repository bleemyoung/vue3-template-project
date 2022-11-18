<template>
    <div>
      <p>
      <el-button>
        <!-- <router-link to="/loginUser">登录</router-link> -->
        <router-link to="/login">登录</router-link>
      </el-button>

      <el-button>
        <router-link to="/register">注册</router-link>
        <!-- <router-link to="/registerUser">注册</router-link> -->
      </el-button>
      
    </p>
      当前是主页面
    </div>
  </template>
  
  <script>
  export default {
    name: "Home"
  }
  </script>
  
  <style scoped>
  </style>
  
