import { LOJAS, PageData, rotaDe } from './siteData';
export const SITE_URL = 'https://www.suncellassistencia.com.br';
export function localSchemas(page?: PageData) {
  const stores = LOJAS.map(loja => ({'@context':'https://schema.org','@type':'LocalBusiness','@id':`${SITE_URL}/#loja-${loja.id}`,name:loja.nome,url:`${SITE_URL}/loja/${loja.id}`,telephone:`+55${loja.telefone.replace(/\D/g,'')}`,image:loja.foto,address:{'@type':'PostalAddress',streetAddress:loja.id === 'guaira' ? 'Rua Maria Moscardi Fanini, 261 - Mercado Goes' : 'Rua Pastor Antônio Polito, 1805 - Mercado Goes',addressLocality:'Curitiba',addressRegion:'PR',addressCountry:'BR'}}));
  if (!page) return stores;
  return [...stores,
    {'@context':'https://schema.org','@type':'WebPage','@id':`${SITE_URL}${rotaDe(page)}#webpage`,url:`${SITE_URL}${rotaDe(page)}`,name:page.title,description:page.description,inLanguage:'pt-BR',about:{'@type':'Service',name:'Assistência técnica de celulares',provider:stores.map(s=>({'@id':s['@id']}))}},
    {'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Início',item:SITE_URL},{'@type':'ListItem',position:2,name:'Bairros e cidades',item:`${SITE_URL}/bairros-e-cidades`},{'@type':'ListItem',position:3,name:page.nome,item:`${SITE_URL}${rotaDe(page)}`}]},
    {'@context':'https://schema.org','@type':'FAQPage',mainEntity:page.faq.map(f=>({'@type':'Question',name:f.q,acceptedAnswer:{'@type':'Answer',text:f.a}}))}
  ];
}
