import Tooltip from "@/components/common/Tooltip";
import { Block, Transaction } from "@/model/dto/Block";

type BlockProps = {
  block: Block;
  isFetching: boolean;
};
export default function Block({ block, isFetching }: BlockProps) {
  const squares = Array.from({ length: 25 });
  const blockAge = Math.floor(
    Date.now() / 1000 - parseInt(block.timestamp, 16),
  );
  const transactions = isFetching ? squares : block.transactions;
  const isAPeersTransaction = (transaction: Transaction) => {
    return transaction.from && transaction.to;
  };

  return (
    // TODO extract header in different component
    <div className="flex flex-col bg-white bg-opacity-25 max-w-72 h-96 shadow-block-shadow">
      <div className="flex flex-col py-6 px-4 text-white font-extralight">
        <div className="flex text-lg justify-between">
          <div>{`#${parseInt(block.number, 16).toLocaleString("en-US")}`}</div>
          <div>{`${block.transactions.length} TXs`}</div>
        </div>
        <div className="opacity-50">{`mined ${Math.floor(blockAge / 60)}m ${blockAge % 60}s ago`}</div>
      </div>

      <hr className="bg-white opacity-10 mb-4" />

      <div
        className={`grid grid-cols-10 gap-2 px-4 pb-4 ${isFetching && "animate-pulse"}`}
      >
        {/*TODO extract in separate component*/}
        {block.transactions.slice(0, 100).map((transaction) => (
          <div
            key={transaction?.nonce}
            className="group relative flex justify-center overflow-visible"
          >
            <div
              className={`h-4 bg-white ${isAPeersTransaction(transaction) ? "bg-opacity-100" : "bg-opacity-10"} w-4`}
            ></div>
            {isAPeersTransaction(transaction) && (
              <Tooltip transaction={transaction} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
