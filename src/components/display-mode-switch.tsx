import { DisplayMode } from "@/models/display-mode.enum";

const displayModeLabels = {
    [DisplayMode.BUY]: 'd\'achat',
    [DisplayMode.SELL]: 'de vente'
}

export default function DisplayModeSwitch({
    displayMode,
    setDisplayMode
}: {
    displayMode: DisplayMode,
    setDisplayMode: (displayMode: DisplayMode) => void
}) {

    return <div className="flex flex-col">
        <p className="text-gray-200 md:text-right">
            Affichage des {' '}
            <span className={`font-medium transition duration-300 ${displayMode === DisplayMode.BUY
                ? 'text-green-300'
                : 'text-red-300'}`}>
                meilleurs prix {displayModeLabels[displayMode]}
            </span>.
        </p>
        <button className="text-indigo-300 font-medium hover:text-indigo-400 md:text-right" onClick={() => setDisplayMode(displayMode ? 0 : 1)}>
            Afficher les prix de {displayModeLabels[displayMode ? 0 : 1]}
        </button>
    </div >
}