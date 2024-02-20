export default function BlockHeaderSkeleton() {
    return(
        <div className="flex flex-col py-6 px-4 animate-pulse">
            <div className="flex justify-between pb-4">
                <div className="h-3 bg-white bg-opacity-10 w-2/6"/>
                <div className="h-3 bg-white bg-opacity-10 w-1/5"/>
            </div>
            <div className="h-3 bg-white opacity-10 w-5/12"/>
        </div>
    );
}