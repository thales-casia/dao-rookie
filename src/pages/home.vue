<template>
  <div class="home">
    <h1>杂志DAO</h1>
    <p>登录wallet发布文章</p>
    <div>
      <label v-if="account">
        <ul>
          <li>{{account}}</li>
        </ul>
        <button @click="onDisconnect">断开连接</button>
      </label>
      <label v-else><button @click="onConnect">链接钱包</button></label>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useWallet } from '@/store';
import { computed, onMounted, ref, watch } from 'vue';
const store = useWallet();
const account = computed(() => store.account);
function onConnect() {
  store.connect();
}
function onDisconnect() {
  store.disconnect();
}
onMounted(() => {
});
</script>
