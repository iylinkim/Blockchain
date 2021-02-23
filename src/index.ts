class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "202020", "", "hello", 123456);

let blockchain: [Block] = [genesisBlock];
// Block만 blockchain에 추가하도록 체크함
// blockchain.push("stuff") Block이 아니기 때문에 추가할 수 없음
console.log(blockchain)

export {};
