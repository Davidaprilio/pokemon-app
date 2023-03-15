"use client"

import CardDetail from "@/components/CardDetail";
import CardPreview from "@/components/CardPreview";
import Image from "next/image";
import { useEffect, useState } from "react";
const Pokedex = require("pokeapi-js-wrapper")
const PokeApi = new Pokedex.Pokedex()

export default function Home() {

  const [pokemonList, setPokemonList] = useState([])
  
  useEffect(() => {
    if(pokemonList.length === 0) {
      console.log('Request');
      PokeApi.getPokemonsList({
        offset: 0,
        limit: 30,
      }).then(list => {
        const urls = list.results.map(p => p.url)
        PokeApi.resource(urls).then(function(response) {
          console.log(response)
          setPokemonList(response)
        })
      })
    }
  })

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
                    {pokemonList.length > 0 ? pokemonList.map((pokemon, i) => (
                        <CardPreview key={i} pokemon={pokemon} />
                    )) : <CardPokeLoading />}
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

const CardPokeLoading = () => {
  const cards = []
  for (let i = 0; i < 10; i++) {
    cards.push(
      <CardPreview key={i} loading={true} />
    )
  }
  return cards
}