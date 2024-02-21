import {useEffect} from "react";
import {ApiCacheKeys} from "@/model/ApiConstants";
import {useQueryClient} from "@tanstack/react-query";

export function useWebSocketUpdate(){

    const queryClient = useQueryClient();
    const onMessageReceived = (event: MessageEvent<any>) => {
        const response = JSON.parse(event.data);
        if (response.params?.result.number) {
            Promise.all([
                queryClient.invalidateQueries({
                    queryKey: [ApiCacheKeys.LATEST_BLOCK],
                }),
                queryClient.invalidateQueries({
                    queryKey: [ApiCacheKeys.BLOCK_NUMBERS],
                }),
            ]);
        } else {
            console.log("Received:", event.data);
        }
    };

    useEffect(() => {
        const ws = new WebSocket("wss://goerli.infura.io/ws/v3/75991326d8ef4b75843b73b25e178eeb");
        ws.onopen = () => {
            ws.send(JSON.stringify( {"jsonrpc":  "2.0",  "id":  1,  "method":  "eth_subscribe",  "params":  ["newHeads"]}))
            console.log("Connected to WebSocket server");
        };
        ws.onmessage = (event) => {
            // Handle incoming messages
            // onMessageReceived(event);
        };
        ws.onclose = () => {
            console.log("Disconnected from WebSocket server");
        };
        return () => {
            ws.close();
        };
    }, []);
}