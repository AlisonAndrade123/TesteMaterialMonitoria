import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1>Bem-vindo ao meu projeto</h1>
      <p>Essa é a página inicial.</p>

      <Link href="/sobre" className="text-blue-600 underline">
        Ir para a página Sobre ➔
      </Link>
    </main>
  );
}