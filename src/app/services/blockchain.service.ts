import { Injectable } from '@angular/core';
import { Block, Transaction } from '../types';
import { HttpService } from 'src/config/api';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  public walletKeys: Array<IWalletKey> = [];

  constructor(private httpService: HttpService) {
    this.getWalletKeys();
  }

  async getBlocks(): Promise<Block[]> {
    const { data: blocks } = await this.httpService.get('/blockchain/blocks')
    return blocks
  }

  async getWalletKeys(): Promise<IWalletKey[]> {
    const { data: wallet } = await this.httpService.get('/blockchain/wallet')
    return wallet
  }

  async createTransaction(publicKey: string, toAddress: string, amount: number): Promise<Transaction> {
    const { data: transaction } = await this.httpService.post('/blockchain/add/transaction', {
      publicKey,
      toAddress,
      amount
    })
    return transaction
  }

  async isValidTransaction(transaction: Transaction): Promise<boolean> {
    const { data: valid } = await this.httpService.post('/blockchain/transaction/isvalid', {
      ...transaction
    })
    return valid
  }

  async getPendingTransactions(): Promise<Transaction[]>{
    const { data: transaction } = await this.httpService.get('/blockchain/transactions/pending')
    return transaction
  }

  async minePendingTransactions(): Promise<string>{
    const { data: msg } = await this.httpService.get('/blockchain/transactions/mine')
    return msg
  }
}

export interface IWalletKey {
  keyObj: any;
  publicKey: string;
  privateKey: string;
}