export enum ApiMethods {
    GET_LAST_NUMBER = "eth_blockNumber",
    GET_BY_BLOCK_NUMBER = "eth_getBlockByNumber"
}

export enum ApiCacheKeys {
    LATEST_BLOCK = 'latestBlock',
    BLOCK_NUMBERS = 'blockNumbers'
}