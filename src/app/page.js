import CardDetail from "@/components/CardDetail";

export default function Home() {
  return (
    <main className="container block mx-auto mt-20">
      <div className="flex justify-center">
        <div className="w-96">
          <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
          <p className="text-2xl">Let's get started!</p>

          <CardDetail />
        </div>
      </div>
    </main>
  )
}
