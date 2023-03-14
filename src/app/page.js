import Image from "next/image";

export default function Home() {
  return (
    <main className="container block mx-auto mt-20">
      <div className="flex justify-center">
        <div className="w-96">
          <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
          <p className="text-2xl">Let's get started!</p>

          <div className="border rounded-sm bg-zinc-400 p-2">
            <Image src="/pokeball.png" width={100} height={100} />
            <div className="bg-white rounded-md flex flex-col p-5" >
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

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vel earum nesciunt similique enim commodi libero! Temporibus vitae reprehenderit odio eaque tenetur quae quos explicabo eveniet esse facere, harum non.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


const Badge = () => {
  return (
    <div className="bg-zinc-700 text-white rounded-full px-3 py-1 text-xs font-semibold tracking-wide">
      Badge
    </div>
  )
}