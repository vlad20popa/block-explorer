import Block from "@/components/explorer/Block";
import { ApiCacheKeys } from "@/model/ApiConstants";
import { getBlockNumbers, getLatestBlock } from "@/api/BlocksApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import BlocksSkeleton from "@/components/explorer/BlocksSkeleton";
import { useWebSocketUpdate } from "@/hooks/useWebSocketUpdate";

export default function Blocks() {

  useWebSocketUpdate();

  const { data: latestBlock, isLoading: isLatestBlockLoading } = useQuery({
    queryKey: [ApiCacheKeys.LATEST_BLOCK],
    queryFn: getLatestBlock,
  });

  const offset = latestBlock?.result;

  const { data: blocks, isLoading: areBlocksLoading } = useQuery({
    queryKey: [ApiCacheKeys.BLOCK_NUMBERS, offset],
    queryFn: () => getBlockNumbers(parseInt(offset || "0", 16), 10),
    enabled: offset !== undefined,
  });

  const isFetching = isLatestBlockLoading || areBlocksLoading;

  if (isFetching) {
    return <BlocksSkeleton />;
  }

  return (
    <div className="flex flex-col pb-16">
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5 gap-4">
        {blocks?.map((block) => (
          <Block
            key={block.result.number}
            block={block.result}
            isFetching={isFetching}
          />
        ))}
        <div></div>
      </div>
      <button className="self-center rounded-full text-white opacity-10 bg-white bg-opacity-25 py-2 px-4">
        LOAD MORE
      </button>
    </div>
  );
}
