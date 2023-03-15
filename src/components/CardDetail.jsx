import Image from "next/image";

export default function CardDetail() {
    return (
        <div className="border rounded-sm bg-zinc-400 p-2 relative z-0">
            <div>
                <div className="absolute top-0 py-4 px-2">
                    <h1 className="text-white text-3xl font-bold">Pokémon Name</h1>
                </div>
                <div className="">
                    <Image src="/pokeball.png" className="ml-auto" width={200} height={200} />
                </div>
            </div>
            <div className="bg-white rounded-md flex flex-col p-5 z-20 mt-5">
                <div className="w-100 flex justify-between items-end -mt-44">
                    <button className="p-3 text-white mb-14">Prev</button>
                    <div>
                        <Image src="/pokemon-skeleton.png" width={200} height={200} className="block" />
                    </div>
                    <button className="p-3 text-white mb-14">Next</button>
                </div>
                <div className="flex justify-center gap-x-3">
                    <Badge />
                    <Badge />
                </div>

                <h3 className="text-zinc-400 font-bold text-center">About</h3>

                <div className="flex justify-center text-center my-4">
                    <div className="w-1/3 p-1">
                        <div className="flex flex-col justify-center">
                            <div className="min-h-[50px] flex justify-center items-center">9,9 kg</div>
                            <small className="text-xs block">Weight</small>
                        </div>
                    </div>
                    <div className="w-1/3 p-1">
                        <div className="flex flex-col justify-center">
                            <div className="min-h-[50px] flex justify-center items-center">9,9 m</div>
                            <small className="text-xs block">Height</small>
                        </div>
                    </div>
                    <div className="w-1/3 p-1">
                        <div className="flex flex-col justify-center">
                            <div className="min-h-[50px] flex flex-col justify-center items-center">
                                <div>Abiliti 1</div>
                                <div>Abiliti 2</div>
                            </div>
                            <small className="text-xs block">Moves</small>
                        </div>
                    </div>
                </div>

                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vel earum nesciunt similique enim commodi libero! Temporibus vitae reprehenderit odio eaque tenetur quae quos explicabo eveniet esse facere, harum non.</p>


                <div className="mt-3">
                    <h3 className="text-zinc-400 font-bold text-center">Base Stats</h3>

                    <div>
                        <BarStatic title="HP" value={999} />
                        <BarStatic title="ATK" value={999} />
                        <BarStatic title="DEF" value={999} />
                        <BarStatic title="SATK" value={999} />
                        <BarStatic title="SDEF" value={999} />
                        <BarStatic title="PDF" value={999} />
                    </div>
                </div>
            </div>
        </div>
    )
}

const BarStatic = ({ title, value = 0 }) => {
    const full = 1500;
    return (
        <div className="flex align-middle items-center">
            <div className="w-2/12 font-semibold text-right uppercase">
                <strong className="text-slate-400 text-xs pr-4">{title}</strong>
            </div>
            <div className="w-10/12 border-l-2 h-full border-gray-400 pl-1">
                <div className="flex items-center justify-end w-full">
                    <div className="pr-3 text-slate-400">
                        <small>{value}</small>
                    </div>
                    <div className="w-10/12">
                        <div className="bg-zinc-200 h-2 rounded-md w-full">
                            <div className="bg-zinc-400 h-2 rounded-md" style={{ width: `${value / full * 100}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Badge = () => {
    return (
        <div className="bg-zinc-700 text-white rounded-full px-3 py-1 text-xs font-semibold tracking-wide">
            Badge
        </div>
    )
}