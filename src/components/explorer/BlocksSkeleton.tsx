import BlockHeaderSkeleton from "@/components/explorer/BlockHeaderSkeleton";

export default function BlocksSkeleton() {
  const squares = Array.from({ length: 25 });
  const blocks = Array.from({ length: 5 });

  return (
    <div className="flex flex-col pb-16">
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-4">
        {blocks?.map((block, index) => (
          <div key={index} className="flex flex-col bg-white bg-opacity-25 max-w-72 h-96 shadow-block-shadow">
            <BlockHeaderSkeleton />

            <hr className="bg-white opacity-10 mb-4" />

            <div className={`grid grid-cols-10 gap-2 px-4 pb-4 animate-pulse`}>
              {squares.map((item, index) => (
                <div
                  key={index}
                  className="group relative flex justify-center overflow-visible"
                >
                  <div className="h-4 bg-white bg-opacity-10 w-4" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="self-center rounded-full text-white opacity-10 bg-white bg-opacity-25 py-2 px-4">
        LOAD MORE
      </button>
    </div>
  );
}
