import Link from "next/link";

export default function Sobre() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1>Sobre</h1>
      <p>Esta é a página Sobre do meu projeto em Next.js.</p>

      <Link href="/" className="text-blue-600 underline">
        ⬅ Voltar para o Início
      </Link>
    </main>
  );
}