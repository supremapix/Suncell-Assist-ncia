import { findPageBySlug, rotaDe } from '../siteData';
import EnhancedSEO from './EnhancedSEO';
import LocalRepairGuide from './LocalRepairGuide';
export default function ConsertoSantaFelicidade() {
  const page = findPageBySlug('bairro', 'santa-felicidade')!;
  return <><EnhancedSEO pageData={page} canonicalPath={rotaDe(page)}/><LocalRepairGuide page={page}/></>;
}
