import axios from "axios";
import { AbstractServerResponse } from "@/model/dto/AbstractServerResponse";
import { BlockNumberRequest } from "@/model/dto/BlockNumberRequest";
import { ApiMethods } from "@/model/ApiConstants";
import { Block } from "@/model/dto/Block";

//TODO extract route to key to env var
export async function getBlockNumbers(
  offset: number,
  limit: number,
): Promise<Array<AbstractServerResponse<Block>>> {
  const offsets = Array.from(new Array(limit).keys());
  const requestBody: BlockNumberRequest[] = offsets.map((id) => {
    return {
      jsonrpc: "2.0",
      method: ApiMethods.GET_BY_BLOCK_NUMBER,
      params: ["0x" + (offset - id).toString(16), true],
      id: (offset - id).toString(),
    };
  });

  const response = await axios.post(
    "https://goerli.infura.io/v3/75991326d8ef4b75843b73b25e178eeb",
    requestBody,
  );
  return response.data;
}

export async function getLatestBlock(): Promise<
  AbstractServerResponse<string>
> {
  const requestBody: BlockNumberRequest = {
    jsonrpc: "2.0",
    method: ApiMethods.GET_LAST_NUMBER,
    params: [],
    id: "1",
  };
  const response = await axios.post(
    "https://goerli.infura.io/v3/75991326d8ef4b75843b73b25e178eeb",
    requestBody,
  );

  return response.data;
}
