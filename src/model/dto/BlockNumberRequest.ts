export interface BlockNumberRequest {
    jsonrpc: string;
    method: string;
    params: Array<string | boolean>;
    id: string
}