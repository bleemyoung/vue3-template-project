<template>
  <div id = "app">
    <p>
      <el-button>
              <router-link to="/login">登录</router-link>
      </el-button>
            
      <el-button>
              <router-link to="/register">注册</router-link>
      </el-button>
    </p>
    <router-view/>
    </div>
  </template>
  
  <script>
  // App.vue 的名称叫 app
      export default {
          name: 'app'
      }
  </script>