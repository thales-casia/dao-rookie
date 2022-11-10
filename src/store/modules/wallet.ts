import { abi, address } from "@/utils/contract/articles";
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
    list: [
      {
        name:'article 0',
        verify: false
      },
      {
        name:'article 1',
        verify: false
      },
      {
        name:'article 2',
        verify: false
      },
      {
        name:'article 3',
        verify: false
      },
      {
        name:'article 4',
        verify: false
      },
      {
        name:'article 5',
        verify: false
      },
      {
        name:'article 6',
        verify: false
      },
      {
        name:'article 7',
        verify: false
      }
    ],
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
    },
    /**
     * 文章审核列表
     */
    articles():any {
      return this.list;
    }
  },
  actions: {
    /**
     * 链接
     */
    connect() {
      provider?.send("eth_requestAccounts", []).then(res => {
        this.address = res[0];
        window.localStorage.setItem(KEY, res[0]);
        this.refreshArticle();
      }).catch(err => {
        console.log(err);
      });
    },
    disconnect() {
      this.address = '';
      window.localStorage.removeItem(KEY);
    },
    refreshArticle() {
      const contract = new ethers.Contract(address, abi, provider.getSigner());
      contract.getArticles().then((arr:string[]) => {
        for(const key in arr) {
          if(arr[key] !== '0x0000000000000000000000000000000000000000') {
            this.list[key].verify = true;
          }
        }
      });
    },
    verify(id:number) {
      const contract = new ethers.Contract(address, abi, provider.getSigner());
      contract.verify(id).then((res:any) => {
        this.refreshArticle();
      });
    }
  }
});
export default useWallet;