import { Component } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Block, Transaction } from 'src/app/types';

interface ITransaction extends Transaction {
  valid?: boolean;
}

@Component({
  selector: 'app-blockchain-viewer',
  templateUrl: './blockchain-viewer.component.html',
  styleUrls: ['./blockchain-viewer.component.scss']
})
export class BlockchainViewerComponent {
  public blocks: Block[] = [];
  public selectedBlock: any;

  constructor(private blockchainService: BlockchainService) {
    blockchainService.getBlocks().then(blocks => {
      this.blocks = blocks
      this.selectedBlock = this.blocks[1]
      this.blocks.forEach(block => {
        block.transactions.forEach((tx: ITransaction) => {
          this.blockchainService.isValidTransaction(tx).then(valid => {
            tx.valid = valid
          })
        })
      })
    })
  }

  showTransactions(block: Block) {
    this.selectedBlock = block
  }

  getBlockNumber(block: Block) {
    return this.blocks.indexOf(block) + 1;
  }
}
