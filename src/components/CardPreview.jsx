import Image from "next/image";

export default function CardPreview({pokemon}) {
    
    return (
        <div className="rounded-lg overflow-hidden w-44 aspect-square relative shadow-[0px_1px_3px_1px_rgba(0,_0,_0,_0.2)]">
            <small className="absolute top-2 right-2 text-slate-500">#001</small>
            <div className="absolute top-0 bottom-0 right-0 left-0 text-center flex justify-center flex-col items-center z-10">
                <Image src="/pokemon-skeleton.png" width={120} height={120} className="" />
                <h3 className="text-xl">{pokemon}</h3>
            </div>
            <div className="bg-zinc-200 rounded-t-lg h-1/2 absolute left-0 right-0 bottom-0"></div>
        </div>
    )
}

const CardPreviewLoading = () => {
    return (
        <div className="rounded-lg animate-pulse overflow-hidden w-44 aspect-square relative shadow-[0px_1px_3px_1px_rgba(0,_0,_0,_0.2)]">
            <div className="absolute top-0 bottom-0 right-0 left-0 text-center flex justify-center flex-col items-center z-10">
                <Image src="/pokemon-skeleton.png" width={120} height={120} className="" />
                <h3 className="text-xl">Pokémon Name</h3>
            </div>
            <div className="bg-zinc-200 rounded-t-lg h-1/2 absolute left-0 right-0 bottom-0"></div>
        </div>
    )
}