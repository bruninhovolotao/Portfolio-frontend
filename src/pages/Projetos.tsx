import { Projeto } from "../components/ProjetosCards";

export function Home() {
  const projetos = [
    {
      titulo: "Portfolio Pessoal",
      descricao: "Site institucional feito em React",
      capaUrl: "https://source.unsplash.com/random/800x600?code",
    },
    {
      titulo: "Sistema de Blog",
      descricao: "Plataforma de publicação com autenticação",
      capaUrl: "https://source.unsplash.com/random/800x600?blog",
    },
  ];

  return (
    <main className="pt-20">
      <section className="text-center mb-12 px-6">
        <h2 className="text-3xl font-bold">Olá! Eu sou o Bruninho</h2>
        <p className="mt-4 text-gray-700 max-w-xl mx-auto">
          Desenvolvedor web apaixonado por transformar ideias em soluções criativas e funcionais. Aqui você encontra alguns dos meus trabalhos.
        </p>
      </section>

      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-6">
        {projetos.map((proj, i) => (
          <Projeto key={i} {...proj} />
        ))}
      </section>
    </main>
  );
}
