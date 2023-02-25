import { GEMSTONE_CONFIG } from "@/models/gemstone.config";
import { Item } from "@/models/item";
import { nFormatter } from "@/services/utils";
import Badge from "./badge";

export default function StoneComponent({ item, className }: { item: Item, className?: string }) {

    return <div key={item.id} className={`flex flex-row gap-2 items-center transition duration-75 -mx-8 px-8 ${className}`}>
        <img src={item.skinUrl} className="h-20 w-20" />
        <div className="flex max-md:flex-col gap-2 items-start md:items-center flex-1 max-md:my-2">
            <div>
                <p className='text-indigo-200 font-medium text-xl'>{item.name}</p>
                <div className="flex max-md:flex-col md:gap-2 items-baseline">
                    <p className="text-gray-400">Unit price : </p>
                    <div className="flex items-baseline gap-2 flex-wrap">
                        <Badge className='bg-green-100 text-green-800'>
                            Buy : <span className="font-medium">{nFormatter(item.buyPrice, 2)}</span>
                        </Badge>
                        <Badge className='bg-red-100 text-red-800'>
                            Sell : <span className="font-medium">{nFormatter(item.sellPrice, 2)}</span>
                        </Badge>
                    </div>
                </div>

            </div>
            <div className="flex flex-col md:gap-2 flex-1">
                <p className="text-gray-400 md:text-right"><span className="font-medium">{item.quantityToPerfect}</span> to perfect</p>
                <div className="flex flex-wrap gap-2 items-baseline md:justify-end">
                    <Badge className='bg-green-100 text-green-800'>
                        Buy : <span className="font-medium">{nFormatter(item.buyPriceToPerfect, 2)}</span>
                    </Badge>
                    <Badge className='bg-red-100 text-red-800'>
                        Sell : <span className="font-medium">{nFormatter(item.sellPriceToPerfect, 2)}</span>
                    </Badge>
                </div>
            </div>
        </div>
    </div>
}