import { Component } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';
import { Blockchain } from 'src/app/types';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  public blockchain: any;
  
  constructor(private blockchainService: BlockchainService){
    this.blockchain = null;
  }
}
