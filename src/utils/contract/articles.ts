export const address = '0xaE710D9E9BD12411456bCa17Bc6B951D0b18743c';
export const abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "articles",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "verify",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getArticles",
    "outputs": [
      {
        "internalType": "address[8]",
        "name": "",
        "type": "address[8]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];