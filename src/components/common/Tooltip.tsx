import {Transaction} from "@/model/dto/Block";

type TooltipProps = {
    transaction: Transaction
}
export default function Tooltip({transaction}: TooltipProps) {
    console.log(transaction.to);

    return (
        <div className="absolute z-10 flex flex-col w-80 scale-0 rounded bg-white p-2 text-xs text-gray-500 group-hover:scale-100" style={{
            left: "120%"
        }}>
            <div className="flex justify-between pb-4">
                <div className="flex flex-col">
                    <div>FROM</div>
                    <div>{`${transaction.from.slice(0, 6)}...${transaction.from.slice(transaction.from.length - 4)}`}</div>
                </div>
                <div className="flex flex-col">
                    <div>TO</div>
                    <div>{`${transaction.to.slice(0, 6)}...${transaction.to.slice(transaction.to.length - 4)}`}</div>
                </div>
            </div>
            <div>VALUE</div>
            <div className="flex justify-between">
                <div>{`${parseInt(transaction.value, 16)} ETH`}</div>
                <div>$1452.68</div>
                <div>@ 90.10</div>
            </div>
        </div>
    );
}