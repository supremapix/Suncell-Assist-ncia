import { findPageBySlug, rotaDe } from '../siteData';
import EnhancedSEO from './EnhancedSEO';
import LocalRepairGuide from './LocalRepairGuide';
export default function ConsertoCentroCuritiba() {
  const page = findPageBySlug('bairro', 'centro')!;
  return <><EnhancedSEO pageData={page} canonicalPath={rotaDe(page)}/><LocalRepairGuide page={page}/></>;
}
