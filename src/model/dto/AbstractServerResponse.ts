export interface AbstractServerResponse<T> {
    jsonrpc: string;
    id: number;
    result: T;
    errro: ServerError;
}

interface ServerError {
    code: number;
    message: string;
}