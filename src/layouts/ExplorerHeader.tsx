'use client';
import BlockStat from "@/components/explorer/BlockStat";

export default function ExplorerHeader() {
    return (
        <div className="flex flex-col md:flex-row bg-black bg-opacity-10 px-8 py-9 w-full">
            <BlockStat name="CURRENT BLOCK" value="8,243,123"/>
            <BlockStat name="AVERAGE GAS PRICE" value="87" unit=" gwei"/>
            <BlockStat name="AVERAGE BLOCK SIZE" value="8.2" unit="mgas"/>
            <BlockStat name="AVERAGE BLOCK FULLNESS" value="88%"/>
        </div>
    );
}