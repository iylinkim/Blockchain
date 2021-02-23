"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
//static으로 method를 생성한다면, new Block을 생성하지 않아도 사용할 수 있음
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "202020", "", "hello", 123456);
let blockchain = [genesisBlock];
// Block만 blockchain에 추가하도록 체크함
// blockchain.push("stuff") Block이 아니기 때문에 추가할 수 없음
const getBlockChain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
//# sourceMappingURL=index.js.map