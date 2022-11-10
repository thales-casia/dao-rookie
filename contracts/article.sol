pragma solidity ^0.8.0;

contract Article {
  address[8] public articles;  // 文章
    // 审核
  function verify(uint id) public returns (uint) {
    require(id >= 0 && id < 8);  // 确保id在数组长度内

    articles[id] = msg.sender;        // 保存调用这地址
    return id;
  }
  // 返回文章审核状态
  function getArticles() public view returns (address[8] memory) {
    return articles;
  }
}