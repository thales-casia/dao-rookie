import { ethers } from "ethers";
const KEY = 'LAST_ACTIVE_ACCOUNT';

export class DaoWallet {
  // provider: any = new ethers.providers.Web3Provider(window.ethereum);
  list: string[] = []
  constructor() {
  }
  getAddress() {
    return this.list[0]||null;
  }
  /**
   * 连接
   * @returns promise
   */
  connect() {
    const provider: any = new ethers.providers.Web3Provider(window.ethereum);
    provider?.send("eth_requestAccounts", []).then((res:string[]) => {
      this.list = res;
      window.localStorage.setItem(KEY, res[0]);
      console.log(res);
    }).catch((err:Error) => {
      console.log(err);
    });
  }
  /**
   * 断开连接(伪)
   */
  disconnect() {
    this.list = [];
    window.localStorage.removeItem(KEY);
  }
}