import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  //static으로 method를 생성한다면, new Block을 생성하지 않아도 사용할 수 있음
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

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

let blockchain: Block[] = [genesisBlock];
// Block만 blockchain에 추가하도록 체크함
// blockchain.push("stuff") Block이 아니기 때문에 추가할 수 없음

const getBlockChain = (): Block[] => blockchain;
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

export {};
