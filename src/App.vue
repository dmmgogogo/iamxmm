<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- 导航栏 -->
    <NavBar />
    
    <!-- 路由视图 -->
    <router-view class="transition-all duration-300" />
    
    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script> 