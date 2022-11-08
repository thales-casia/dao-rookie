import { ethers } from "ethers";
import { defineStore } from 'pinia';

const KEY = 'LAST_ACTIVE_ACCOUNT';
const provider = new ethers.providers.Web3Provider(window.ethereum);
/**
 * 模型平台页面
 */
const useWallet = defineStore({
  id: 'wallet',
  state: () => ({
    instance: {
      signer: {}
    },
    list: [],
    address: <string|null>null
  }),
  getters: {
    /**
     * 展位介绍
     */
    account():any {
      if(!this.address) {
        this.address = window.localStorage.getItem(KEY);
      }
      return this.address;
    }
  },
  actions: {
    /**
     * 链接
     */
    connect() {
      provider?.send("eth_requestAccounts", []).then(res => {
        this.list = res;
        this.address = res[0];
        window.localStorage.setItem(KEY, res[0]);
      }).catch(err => {
        console.log(err);
      });
    },
    disconnect() {
      this.list = [];
      this.address = '';
      window.localStorage.removeItem(KEY);
    }
  }
});
export default useWallet;