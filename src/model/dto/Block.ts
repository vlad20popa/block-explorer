export interface Block {
    number: string;
    transactions: Array<Transaction>;
    timestamp: string;
}

export interface Transaction {
    hash: string;
    nonce: string;
    from: string;
    to: string;
    value: string;
}