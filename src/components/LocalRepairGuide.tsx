import React from 'react';
import { LOJAS, PageData, getBairrosPages, getCidadesPages, rotaDe } from '../siteData';

const cityNotes: Record<string, string> = {
  curitiba: 'Em Curitiba, compare os dois endereços com o seu ponto de partida. Entrega e retirada precisam ser combinadas com a mesma unidade; não presuma que um aparelho deixado no Guaíra estará disponível no Alto Boqueirão.',
  'sao-jose-dos-pinhais': 'Saindo de São José dos Pinhais, informe também o bairro de origem ao consultar a loja. O município tem diferentes pontos de partida, e o nome da cidade sozinho não determina a unidade mais conveniente. Combine a previsão de avaliação antes de organizar a ida a Curitiba.',
  pinhais: 'Para quem vem de Pinhais, separe a conversa inicial da confirmação de serviço: uma descrição pelo WhatsApp ajuda a preparar o atendimento, mas não substitui a inspeção do aparelho. Confirme a unidade de entrega e como receberá o orçamento.',
  colombo: 'Em Colombo, planeje também o retorno. Se o celular é usado para navegação ou transporte, anote o endereço e organize um contato alternativo antes de deixá-lo na assistência. A retirada depende da confirmação da unidade em Curitiba.',
  araucaria: 'Se você vem de Araucária e depende do aparelho no trabalho, avise essa necessidade ao pedir avaliação. Pergunte se será preciso deixar o celular, se há peça para o modelo exato e em qual etapa será possível confirmar o prazo.',
  'almirante-tamandare': 'Antes de sair de Almirante Tamandaré, confira se o orçamento inicial exige avaliação presencial. Uma foto de tela quebrada não mostra todos os danos internos; o valor final e a viabilidade do reparo devem ser confirmados após os testes.',
  'campo-largo': 'Para organizar uma visita de Campo Largo a Curitiba, confirme separadamente o recebimento do aparelho e a data de retirada. Não trate a disponibilidade de atendimento como confirmação de estoque da peça ou de conclusão no mesmo dia.',
  'campo-magro': 'Quem vem de Campo Magro pode preparar uma lista curta com modelo, defeito e histórico de quedas ou contato com líquido. Envie essas informações à unidade escolhida antes da viagem e guarde a resposta junto à ordem de serviço.',
  'fazenda-rio-grande': 'Saindo de Fazenda Rio Grande, escolha a unidade pela sua rota e pela confirmação da equipe, não por uma promessa genérica de proximidade. Se precisar de duas viagens, peça orientação sobre acompanhamento do diagnóstico e confirmação da retirada.',
  'quatro-barras': 'Para uma visita a partir de Quatro Barras, verifique os detalhes do modelo antes de pedir uma estimativa. Aparelhos com nomes parecidos podem usar telas, baterias e conectores diferentes. Fotografe a identificação do modelo sem expor números de conta ou senhas.',
  'campina-grande-do-sul': 'Quem está em Campina Grande do Sul deve combinar um meio de contato que continue funcionando enquanto o aparelho estiver na loja. Pode ser outro telefone autorizado por você. Registre também qual unidade receberá o celular.',
  mandirituba: 'Antes de se deslocar de Mandirituba, pergunte quais etapas precisam ocorrer presencialmente. Se o defeito for intermitente, anote quando acontece e, se possível, registre um vídeo. Isso ajuda a equipe a reproduzir o problema sem depender de um relato apressado na entrega.',
  'balsa-nova': 'Para quem vem de Balsa Nova, vale confirmar a necessidade de acessórios de teste antes da visita. Em problemas de carga, informe o carregador e o cabo usados. A equipe pode orientar o que levar, sem que isso signifique diagnóstico fechado à distância.',
  'rio-branco-do-sul': 'Ao planejar o atendimento saindo de Rio Branco do Sul, reserve a decisão sobre o reparo para depois de receber o orçamento detalhado. Pergunte como aprovar ou recusar a proposta e como será combinada a devolução caso você não queira seguir.',
  itaperucu: 'Quem vem de Itaperuçu pode evitar desencontros confirmando o endereço completo e o nome da unidade antes de sair. Guarde o contato correto: cada loja tem seu WhatsApp, e o acompanhamento deve ser feito onde o aparelho foi entregue.',
  'tijucas-do-sul': 'Saindo de Tijucas do Sul, aguarde confirmação expressa de que o aparelho está pronto antes de organizar a retirada. Uma previsão inicial pode mudar após testes ou necessidade de peça; peça uma atualização antes de iniciar o deslocamento.'
};

export function localContext(page: PageData): string {
  if (page.type === 'cidade') return cityNotes[page.slug] || '';
  if (page.nome === 'Guaíra') return 'No Guaíra, o atendimento ocorre dentro do Mercado Goes da Rua Maria Moscardi Fanini, 261. Use o contato dessa unidade para combinar avaliação e retirada. O endereço é diferente da loja Alto Boqueirão, por isso confira onde a sua ordem de serviço foi aberta.';
  if (page.nome === 'Alto Boqueirão') return 'No Alto Boqueirão, a unidade fica dentro do Mercado Goes da Rua Pastor Antônio Polito, 1805. Informe à equipe que pretende levar o aparelho a esse endereço e acompanhe o serviço pelo WhatsApp próprio da loja.';
  return `Para organizar o atendimento a partir de ${page.nome}, compare os dois endereços abaixo. O ponto de partida dentro do bairro, o transporte escolhido e o atendimento disponível influenciam essa escolha. Os links de rota usam ${page.nome}, Curitiba como origem geral: ajuste para seu endereço no aplicativo de mapas. A SUNCELL não apresenta uma unidade física neste bairro.`;
}

export function LocalRepairBody({ page }: { page: PageData }) {
  const directory = page.type === 'bairro' ? getBairrosPages() : getCidadesPages();
  const peers = directory.filter(p => p.slug !== page.slug && (!page.regiao || p.regiao === page.regiao));
  const origin = `${page.nome}${page.type === 'bairro' ? ', Curitiba' : ''}, PR`;
  return <>
    <section className="repair-panel">
      <h2>Planeje o atendimento saindo de {page.nome}</h2>
      <p>{localContext(page)}</p>
      <p>O diagnóstico gratuito é informado pela SUNCELL. Confirme os horários e as condições atuais diretamente com a unidade antes de se deslocar. Nenhum prazo, preço de reparo ou disponibilidade de peça é definido apenas pela sua localidade.</p>
      <div className="repair-stores">{LOJAS.map(loja => <article key={loja.id}>
        <h3>{loja.nome}</h3><p>{loja.endereco}</p>
        <p><a href={loja.linkWhats}>WhatsApp: {loja.telefone}</a></p>
        <a href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(loja.endereco)}`} target="_blank" rel="noopener noreferrer">Comparar rota de {page.nome} até {loja.nome}</a>
      </article>)}</div>
    </section>
    <section className="repair-panel"><h2>Da avaliação à retirada: o que combinar</h2>
      <ol className="repair-steps">
        <li><h3>1. Relato e avaliação</h3><p>Informe modelo, sintoma, quando o defeito começou e se houve queda, umidade ou reparo anterior. Se o problema aparece só em certas situações, descreva quais. A avaliação presencial diferencia falha de tela, bateria, carga, software ou placa.</p></li>
        <li><h3>2. Orçamento por escrito</h3><p>Solicite serviço proposto, peça compatível, valor total, prazo estimado e condições de garantia. Pergunte se os testes podem afetar arquivos e configurações. Compare o custo com o uso esperado do aparelho, sem presumir que todo reparo compensa.</p></li>
        <li><h3>3. Autorização e acompanhamento</h3><p>Registre sua decisão e guarde a ordem de serviço. Combine como receberá atualizações e como será consultado se surgirem novos defeitos. Evite enviar senhas por mensagens; converse com a equipe sobre alternativas para os testes necessários.</p></li>
        <li><h3>4. Confirmação e retirada</h3><p>Aguarde a confirmação de conclusão antes de sair de {page.nome}. Na retirada, confira com a equipe as funções relacionadas ao serviço e peça comprovante, descrição do reparo e orientação sobre cuidados e garantia.</p></li>
      </ol>
    </section>
    <section className="repair-panel"><h2>Cuidados enquanto aguarda a avaliação</h2><p>Se o celular ainda funciona, faça backup dos arquivos importantes. Se houve contato com líquido, desligue se for seguro e não conecte ao carregador. Não aqueça nem coloque em arroz. Se houver bateria estufada, calor excessivo ou odor incomum, interrompa o uso e não pressione, perfure ou tente abrir o aparelho.</p><p>Recuperação de dados e reparo de placa dependem do dano e não têm resultado garantido. Informe à equipe se preservar os arquivos é sua prioridade antes de autorizar qualquer procedimento.</p></section>
    <section className="repair-panel"><h2>Perguntas sobre atendimento para {page.nome}</h2>{page.faq.map(item => <div className="repair-answer" key={item.q}><h3>{item.q}</h3><p>{item.a}</p></div>)}</section>
    <nav className="repair-panel" aria-label="Diretório de atendimento"><h2>Continue pelo diretório SUNCELL</h2><p><a href="/bairros-e-cidades">Todos os bairros e cidades</a> · <a href="/loja/guaira">Conheça as unidades</a> · <a href="/assistencia-tecnica-curitiba">Assistência em Curitiba</a></p><div className="repair-links">{peers.slice(0, 8).map(p => <a key={p.slug} href={rotaDe(p)}>{p.nome}</a>)}</div></nav>
  </>;
}
export default function LocalRepairGuide({ page }: { page: PageData }) {
  return <main className="local-repair"><div className="repair-shell"><nav aria-label="Navegação"><a href="/">Início</a> / <a href="/bairros-e-cidades">Bairros e cidades</a> / {page.nome}</nav><header><p className="repair-eyebrow">SUNCELL · Atendimento nas lojas de Curitiba</p><h1>{page.h1}</h1><p>{page.intro}</p></header><LocalRepairBody page={page}/></div></main>;
}
