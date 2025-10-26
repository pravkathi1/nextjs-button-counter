import Counter from "../components/Counter";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-10">
      <h1 className="text-4xl font-bold mb-6">React Button Counter</h1>
      <Counter />
      <Counter initialCount={5} initialStep={2} />
    </main>
  );
}