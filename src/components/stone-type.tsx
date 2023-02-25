import { Gemstone } from "@/models/gemstone.enum";
import { Item } from "@/models/item";
import StoneComponent from "./stone";

export default function StoneTypeComponent({
    gemstoneType,
    items,
}: {
    gemstoneType: Gemstone,
    items: Item[],
}) {

    const minimalBuyPriceToPerfect = items.reduce((acc, item) => item.buyPriceToPerfect < acc ? item.buyPriceToPerfect : acc, Number.MAX_SAFE_INTEGER);

    return <div key={gemstoneType} className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-indigo-100">{gemstoneType}</h2>
        <div className="flex flex-col divide-y divide-gray-700">
            {items.map(item => {
                return <StoneComponent item={item} key={item.id} className={item.buyPriceToPerfect === minimalBuyPriceToPerfect ? 'bg-green-300/10' : 'hover:bg-gray-500/10'} />
            })}
        </div>
    </div>
}