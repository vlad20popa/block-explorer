import Block from "@/components/explorer/Block";

export default function Blocks() {
  const blocks = Array.from({ length: 5 });
  return (
    <div className="flex flex-col pb-16">
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-4">
        {blocks.map(() => (
          <Block blockNumber={8243123} transactionsCount={87} age={12} />
        ))}
        <div></div>
      </div>
      <button className="self-center rounded-full text-white opacity-10 bg-white bg-opacity-25 py-2 px-4">
        LOAD MORE
      </button>
    </div>
  );
}
