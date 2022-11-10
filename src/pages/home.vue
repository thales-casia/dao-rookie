<template>
  <div class="home">
    <h1>杂志DAO</h1>
    <p>登录wallet发布文章</p>
    <fieldset>
      <legend>钱包</legend>
      <label v-if="account">
        <ul>
          <li>{{account}}</li>
        </ul>
        <button @click="onDisconnect">断开连接</button>
      </label>
      <label v-else><button @click="onConnect">链接钱包</button></label>
    </fieldset>
    <fieldset v-if="account">
      <legend>文章列表</legend>
      <ul>
        <li v-for="item, key in articles">
          {{item.name}}
          <button @click="onVerify" :data-id="key" :disabled="item.verify">审核</button>
        </li>
      </ul>
    </fieldset>
  </div>
</template>
<script setup lang="ts">
import { useWallet } from '@/store';
import { computed, onMounted, ref, watch } from 'vue';
const store = useWallet();
const account = computed(() => store.account);
const articles = computed(() => store.articles);
function onConnect() {
  store.connect();
}
function onDisconnect() {
  store.disconnect();
}
function onVerify(e:MouseEvent) {
  const btn = e.currentTarget as HTMLButtonElement;
  if(btn.dataset.id) store.verify(parseInt(btn.dataset.id));
}
onMounted(() => {
  store.refreshArticle();
});
</script>
