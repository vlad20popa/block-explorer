type BlockStatProps = {
  name: string;
  value: string;
  unit?: string;
};

export default function BlockStat({ name, value, unit }: BlockStatProps) {
  const isLoading = false;

  return (
    <div className="md:mr-16">
      <div className="text-white opacity-50 mb-4">{name}</div>
      <div
        role="status"
        className={`space-y-8 ${isLoading && "animate-pulse"}`}
      >
        {isLoading ? (
          <div className="h-12 bg-white opacity-10 w-full md:w-64 mb-4"></div>
        ) : (
          <div className="flex items-end text-white font-extralight">
            <div className="text-4xl ">{value}</div>
              {unit && <div>{unit}</div>}
          </div>
        )}
      </div>
    </div>
  );
}
