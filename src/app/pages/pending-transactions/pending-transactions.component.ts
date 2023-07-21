import { Component } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Transaction } from 'src/app/types';

@Component({
    selector: 'app-pending-transactions',
    templateUrl: './pending-transactions.component.html',
    styleUrls: ['./pending-transactions.component.scss']
})
export class PendingTransactionsComponent {
    public pendingTransactions: Transaction[] = [];

    constructor(private blockchainService: BlockchainService){
        blockchainService.getPendingTransactions().then(transactions => {
            console.log('essas aqui tao pendendo', transactions)
            this.pendingTransactions = transactions
        });
    }

    minePendingTransactions(){
        this.blockchainService.minePendingTransactions().then(msg => {
            console.log('aqui fala se minerou:', msg)
        })
    }
}
