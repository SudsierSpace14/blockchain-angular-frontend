import { Component, Input } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Block } from 'src/app/types';

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.scss']
})
export class BlockViewComponent {
  @Input() public block: any
  @Input() public selectedBlock = null;
  @Input() public blockNumber: any;

  constructor(private blockchainService: BlockchainService) {
  }
}