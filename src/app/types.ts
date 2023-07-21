export interface Transaction{
    fromAddress: string;
    toAddress: string;
    amount: number;
    timestamp: number;
    signature: string;
}

export interface Blockchain{
    chain: Block[];
    difficulty: number;
    pendingTransactions: Transaction[];
    miningReward: number;
}

export interface Block{
    previousHash: string;
    timestamp: number;
    nonce: number;
    transactions: Transaction[];
    hash: string;
}