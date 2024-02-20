import Block from "@/components/explorer/Block";
import { ApiCacheKeys } from "@/model/ApiConstants";
import { getBlockNumbers, getLatestBlock } from "@/api/BlocksApi";
import { useQuery } from "@tanstack/react-query";
import BlocksSkeleton from "@/components/explorer/BlocksSkeleton";

export default function Blocks() {
  const { data: latestBlock, isLoading: isLatestBlockLoading } = useQuery({
    queryKey: [ApiCacheKeys.LATEST_BLOCK],
    queryFn: getLatestBlock,
  });

  const offset = latestBlock?.result;

  const { data: blocks, isLoading: areBlocksLoading } = useQuery({
    queryKey: [ApiCacheKeys.BLOCK_NUMBERS],
    queryFn: () => getBlockNumbers(parseInt(offset || "0", 16), 10),
    enabled: offset !== undefined,
  });

  const isFetching = isLatestBlockLoading || areBlocksLoading;

  console.log(blocks);
  if (isFetching) {
    return <BlocksSkeleton />;
  }

  return (
    <div className="flex flex-col pb-16">
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-4">
        {blocks?.map((block) => (
          <Block block={block.result} isFetching={isFetching} />
        ))}
        <div></div>
      </div>
      <button className="self-center rounded-full text-white opacity-10 bg-white bg-opacity-25 py-2 px-4">
        LOAD MORE
      </button>
    </div>
  );
}
