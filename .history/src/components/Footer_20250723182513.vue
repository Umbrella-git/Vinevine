<script setup lang="ts">
// 定义当前年份
const currentYear = new Date().getFullYear();

// 定义社交媒体链接
const socialMediaLinks = [
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "GitHub", url: "https://github.com" },
];
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- 版权信息 -->
      <div class="copyright">
        <p>&copy; {{ currentYear }} Your Company Name. All rights reserved.</p>
      </div>
      <!-- 社交媒体链接 -->
      <div class="social-media">
        <span>Follow us: </span>
        <ul>
          <li v-for="link in socialMediaLinks" :key="link.name">
            <a :href="link.url" target="_blank" rel="noopener noreferrer">
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.el-footer {
  padding: 0;
}
.footer {
  background-color: #f8f9fa;
  padding: 20px 0;
  border-top: 1px solid #dee2e6;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.copyright p {
  margin: 0;
  font-size: 0.9rem;
  color: #6c757d;
}

.social-media ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.social-media li {
  margin-left: 15px;
}

.social-media a {
  color: #6c757d;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-media a:hover {
  color: #007bff;
}
</style>
