import fs from 'node:fs';
import assert from 'node:assert/strict';
const dirs=['assistencia-tecnica','assistencia-tecnica-cidade'];
let count=0;
for (const prefix of dirs) for (const slug of fs.readdirSync(`dist/${prefix}`)) {
 const html=fs.readFileSync(`dist/${prefix}/${slug}/index.html`,'utf8');
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,slug);
 assert.equal((html.match(/rel="canonical"/g)||[]).length,1,slug);
 assert(html.includes(`https://www.suncellassistencia.com.br/${prefix}/${slug}`),slug);
 assert(html.includes('Da avaliação à retirada'),slug);
 assert(html.includes('5541997501961') && html.includes('5541999176640'),slug);
 assert(!html.includes('149.90') && !html.includes('MobilePhoneRepair'),slug);
 assert(!html.includes('conserto expresso no mesmo dia') && !html.includes('menos de 2 horas'),slug);
 for(const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
 count++;
}
for (const path of ['conserto-de-celular-curitiba-centro','conserto-de-celular-santa-felicidade','conserto-de-celular-sitio-cercado']) {
 const html=fs.readFileSync(`dist/${path}/index.html`,'utf8'); assert(html.includes('Da avaliação à retirada'),path); assert.equal((html.match(/rel="canonical"/g)||[]).length,1,path);
}
assert(fs.readFileSync('dist/llms.txt','utf8').includes('Duas unidades físicas'));
console.log(`${count} neighborhood/city pages + 3 legacy local pages passed: body, canonical, phones, schema and factual limits.`);
