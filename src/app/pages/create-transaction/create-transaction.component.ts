import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockchainService, IWalletKey } from 'src/app/services/blockchain.service';
import { Transaction } from 'src/app/types';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent {
  public newTx: Transaction = {
    fromAddress: '',
    toAddress: '',
    amount: 0,
    signature: '',
    timestamp: 0
  };
  public walletKey: IWalletKey = {
    keyObj: null,
    publicKey: '',
    privateKey: ''
  };
  
  constructor(private blockchainService: BlockchainService, private router: Router){
    blockchainService.getWalletKeys().then(wallet => {
      this.walletKey = wallet[0]
    })
  }

  createTransaction(){
    this.blockchainService.createTransaction(
      this.walletKey.publicKey,
      this.newTx.toAddress,
      this.newTx.amount
    )

    // this.router.navigate(['/new/transaction/pending', { addedTx: true }])
  }
}
