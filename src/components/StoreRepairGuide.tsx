import React from 'react';
import { LOJAS, PageData } from '../siteData';

export default function StoreRepairGuide({ page }: { page: PageData }) {
  const loja = LOJAS.find(l => l.id === 'boqueirao')!;
  const links = [
    ['/conserto-de-tela-de-celular-curitiba', 'Troca de tela: vidro, imagem e toque'],
    ['/conserto-celular-samsung-curitiba', 'Conserto de celular Samsung'],
    ['/conserto-de-celular-sitio-cercado', 'Orientações para quem vem do Sítio Cercado'],
    ['/conserto-de-celular-curitiba', 'Assistência técnica de celular em Curitiba'],
    ['/loja/guaira', 'Conheça também a unidade Guaíra'],
  ];
  return <main className="pt-28 pb-20 px-4 bg-[#F5F5F7] text-[#0D0D0D]">
    <article className="max-w-5xl mx-auto space-y-8">
      <a href="/" className="inline-block py-3 underline">Início</a>
      <header className="bg-white rounded-3xl p-6 sm:p-10 space-y-5">
        <p className="font-bold text-suncell-orange">SUNCELL • Unidade Alto Boqueirão</p>
        <h1 className="text-3xl sm:text-4xl font-bold">{page.h1}</h1>
        <p className="text-lg leading-relaxed">{page.intro}</p>
        <address className="not-italic text-lg">{loja.endereco}</address>
        <div className="flex flex-wrap gap-3">
          <a className="bg-suncell-orange text-white font-bold rounded-xl p-4" href={loja.linkWhats}>Consultar orçamento no WhatsApp</a>
          <a className="border rounded-xl p-4 font-bold" href="tel:+5541997501961">Ligar: {loja.telefone}</a>
          <a className="border rounded-xl p-4 font-bold" href={loja.maps} target="_blank" rel="noopener noreferrer">Como chegar à loja</a>
        </div>
      </header>
      <section className="bg-white rounded-3xl p-6 sm:p-10 space-y-4">
        <h2 className="text-2xl font-bold">Qual problema seu celular apresenta?</h2>
        <p>Tela trincada, toque que não responde, bateria descarregando rápido e dificuldade para carregar podem exigir soluções diferentes. Na avaliação, informe o modelo e quando o defeito começou, inclusive se houve queda ou contato com líquido. Não é possível definir a peça ou o preço apenas pelo sintoma.</p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Tela:</strong> descreva se o vidro quebrou, se apareceram manchas ou se o toque falha. A equipe verifica o conjunto compatível com o aparelho.</li>
          <li><strong>Bateria:</strong> informe desligamentos inesperados e perda de autonomia para orientar a avaliação.</li>
          <li><strong>Carregamento:</strong> relate se o cabo precisa ficar em determinada posição ou se o aparelho deixou de reconhecer o carregador.</li>
          <li><strong>Placa e outros componentes:</strong> aparelhos que não ligam e falhas de câmera, áudio ou botões precisam de diagnóstico antes de indicar o reparo.</li>
        </ul>
      </section>
      <section className="bg-white rounded-3xl p-6 sm:p-10 space-y-4">
        <h2 className="text-2xl font-bold">Como organizar o conserto no Alto Boqueirão</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>Entre em contato e informe a marca, o modelo e o defeito. Confirme o horário e a disponibilidade antes de sair.</li>
          <li>Leve o aparelho à unidade dentro do Mercado Goes, na Rua Pastor Antônio Polito, 1805.</li>
          <li>Confira a solução proposta, o tipo de peça, o valor total, o prazo e as condições de garantia antes de autorizar.</li>
          <li>Na retirada, confira com a equipe as funções relacionadas ao serviço realizado.</li>
        </ol>
        <p>Se possível, faça uma cópia dos seus arquivos antes de entregar o celular. Não envie senhas de contas por WhatsApp. Combine com a equipe como serão feitos os testes necessários.</p>
        <p>Quem vem do Boqueirão, Sítio Cercado, Xaxim ou de outra região de Curitiba pode consultar a rota até esta unidade. O atendimento desta página ocorre no Alto Boqueirão, não em uma filial em cada bairro.</p>
      </section>
      <section className="bg-white rounded-3xl p-6 sm:p-10 space-y-4">
        <h2 className="text-2xl font-bold">Dúvidas antes de levar o celular</h2>
        {page.faq.map(f => <details key={f.q} className="border-b py-3"><summary className="cursor-pointer font-bold text-lg py-2">{f.q}</summary><p className="pt-3 leading-relaxed">{f.a}</p></details>)}
      </section>
      <nav aria-label="Guias de assistência técnica" className="bg-white rounded-3xl p-6 sm:p-10">
        <h2 className="text-2xl font-bold mb-4">Saiba mais antes de decidir</h2>
        <ul className="space-y-3">{links.map(([href,label]) => <li key={href}><a className="underline inline-block py-2" href={href}>{label}</a></li>)}</ul>
      </nav>
    </article>
  </main>;
}
