import { findPageBySlug, rotaDe } from '../siteData';
import EnhancedSEO from './EnhancedSEO';
import LocalRepairGuide from './LocalRepairGuide';
export default function ConsertoSitioCercado() {
  const page = findPageBySlug('bairro', 'sitio-cercado')!;
  return <><EnhancedSEO pageData={page} canonicalPath={rotaDe(page)}/><LocalRepairGuide page={page}/></>;
}
