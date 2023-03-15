import CardDetail from "@/components/CardDetail";
import CardPreview from "@/components/CardPreview";
import Image from "next/image";

const pokemons = [
  'bulbasaur',
  'ivysaur',
  'venusaur',
  'charmander',
  'charmeleon',
  'charizard',
  'squirtle',
  'wartortle',
  'blastoise',
  'caterpie',
  'metapod',
  'butterfree',
  'weedle',
  'kakuna',
  'beedrill',
  'pidgey',
  'pidgeotto',
  'pidgeot',
  'rattata',
  'raticate',
  'spearow',
  'fearow',
  'ekans',
  'arbok',
  'pikachu',
  'raichu',
  'sandshrew',
  'sandslash',
  'nidoran-f',
  'nidorina',
  'nidoqueen',
];

export default function Home() {

  // pokemon

  return (
    <>
      <div className="shadow-md w-full py-3">
        <div className="container px-3 mx-auto flex justify-between items-center">
          <div>
            <Image src="/logo.svg" width="150" height="50" alt="Logo" />
          </div>

          <div>
            <ul className="flex justify-center md:justify-end gap-4">
              <li>
                <i className="ri-search-line ri-lg"></i>
              </li>
              <li>
                <i className="ri-contrast-2-fill ri-lg"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <main className="container block mx-auto mt-20">
        <div className="flex justify-center">
          <div className="">
            <h1 className="text-4xl font-bold">Pokemon!</h1>
            <p className="text-2xl">Let's get you favorite pokemon</p>

            <section className="container">
              <div className="flex">
                <div className="w-9/12">
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {pokemons.map((pokemon) => (
                      <CardPreview key={pokemon} pokemon={pokemon} />
                    ))}
                  </div>
                </div>
                <div className="max-w-sm w-fit">
                  <CardDetail />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
