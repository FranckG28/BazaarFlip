import { DisplayMode } from "@/models/display-mode.enum";
import { Gemstone } from "@/models/gemstone.enum";
import { Item } from "@/models/item";
import StoneComponent from "./stone";

export default function StoneTypeComponent({
    gemstoneType,
    items,
    displayMode
}: {
    gemstoneType: Gemstone,
    items: Item[],
    displayMode: DisplayMode
}) {

    const minimalPriceToPerfect = items.reduce((acc, item) => {
        if (displayMode == DisplayMode.BUY) {
            return item.buyPriceToPerfect < acc
                ? item.buyPriceToPerfect
                : acc
        } else {
            return item.sellPriceToPerfect > acc
                ? item.sellPriceToPerfect
                : acc
        }
    }, (displayMode == DisplayMode.BUY ? Infinity : 0));

    return <div key={gemstoneType} className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold text-indigo-100">{gemstoneType}</h2>
        <div className="flex flex-col divide-y divide-gray-700">
            {items.map(item => {
                return <StoneComponent item={item} key={item.id} displayMode={displayMode} className={`transition duration-300
                    ${minimalPriceToPerfect === (
                        displayMode === DisplayMode.BUY
                            ? item.buyPriceToPerfect
                            : item.sellPriceToPerfect
                    )
                        ? 'bg-green-300/10 hover:bg-green-300/20 shadow-lg' : 'hover:bg-gray-500/10'
                    }
                `} />
            })}
        </div>
    </div>
}