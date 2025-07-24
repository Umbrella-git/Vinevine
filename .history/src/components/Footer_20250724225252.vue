<template>
  <el-row>
    <el-col :span="8">
      <!-- <el-statistic title="Daily active users" :value="268500" /> -->
    </el-col>
    <!-- <el-col :span="6">
      <el-statistic :value="138">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            Ratio of men to women
            <el-icon style="margin-left: 4px" :size="12">
              <Male />
            </el-icon>
          </div>
        </template>
        <template #suffix>/100</template>
      </el-statistic>
    </el-col> -->
    <el-col :span="8">
      <!-- <el-statistic title="Total Transactions" :value="outputValue" /> -->
      <div class="footerText">
        <div>東京都江東区豐洲四丁目10番</div>
        <div>メ-ル vinevine@vinevine.com</div>
        <div>@ VINEVINE All rights reserved</div>
      </div>
    </el-col>
    <el-col :span="8" :style="{ display: 'flex', flexDirection: 'column' }">
      <div style="height: 75px">
        <div class="smallA" style="display: flex; float: right">
          <div class="facebook">
            <svg class="icon-font" width="20px" height="20px">
              <use xlink:href="#icon-facebook"></use>
            </svg>
          </div>
          <div class="instagram">
            <svg
              class="icon-font"
              width="20px"
              height="20px"
              style="margin-top: 2px"
            >
              <use xlink:href="#icon-instagram"></use>
            </svg>
          </div>
        </div>
      </div>
      <el-statistic
        title="Total Transactions"
        :value="outputValue"
        :style="{ textAlign: 'right', marginRight: '50px' }"
      />
      <!-- <el-statistic title="Feedback number" :value="562">
        <template #suffix>
          <el-icon style="vertical-align: -0.125em">
            <ChatLineRound />
          </el-icon>
        </template>
      </el-statistic> -->
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useTransition } from "@vueuse/core";
import { ChatLineRound, Male } from "@element-plus/icons-vue";

const source = ref(0);
const outputValue = useTransition(source, {
  duration: 1500,
});
source.value = 172000;
</script>

<style scoped>
.el-col {
  text-align: center;
}
.footerText {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 35px;
}
.footerText div {
  font-size: 12px;
  line-height: 25px;
  font-weight: bold;
  font-family: "Arial", sans-serif;
}
.facebook {
  border-radius: 50px;
  background: white;
  width: 25px;
  height: 25px;
}
.instagram {
  border-radius: 50px;
  background: white;
  width: 25px;
  height: 25px;
}
.smallA {
  display: flex;
  float: right;
  background: #484040;
  height: 35px;
  width: 70px;
  border-radius: 10px;
  margin-top: 10px;
  margin-right: 50px;
  justify-content: space-evenly;
  align-items: center;
}

</style>
