"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "202020", "", "hello", 123456);
let blockchain = [genesisBlock];
// Block만 blockchain에 추가하도록 체크함
// blockchain.push("stuff") Block이 아니기 때문에 추가할 수 없음
console.log(blockchain);
//# sourceMappingURL=index.js.map