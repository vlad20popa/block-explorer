import BlockHeaderSkeleton from "@/components/explorer/BlockHeaderSkeleton";

type BlockProps = {
  blockNumber: number;
  transactionsCount: number;
  age: number;
};
export default function Block({
  blockNumber,
  transactionsCount,
  age,
}: BlockProps) {
  const squares = Array.from({ length: 25 });
  const isLoading = false;

  return (
    <div className="flex flex-col bg-white bg-opacity-25 max-w-72 h-96 shadow-block-shadow">
      {isLoading ? (
        <BlockHeaderSkeleton />
      ) : (
        <div className="flex flex-col py-6 px-4 text-white font-extralight">
          <div className="flex text-lg justify-between">
            <div>{`#${blockNumber.toLocaleString("en-US")}`}</div>
            <div>{`${transactionsCount} TXs`}</div>
          </div>
          <div className="opacity-50">minted 2m 32s ago</div>
        </div>
      )}

      <hr className="bg-white opacity-10 mb-4" />

      <div className="grid grid-cols-10 gap-2 px-4 pb-4 animate-pulse">
        {squares.map(() => (
          <div className="h-4 bg-white bg-opacity-10 w-4"></div>
        ))}
      </div>
    </div>
  );
}
