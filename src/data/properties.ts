export interface Property {
  id: string;
  name: string;
  country: string;
  url: string;
}

export type CountryFilter = 'All' | 'Cambodia' | 'Indonesia' | 'Laos' | 'Philippines' | 'Thailand' | 'Vietnam' | 'Australia';

export const COUNTRIES: CountryFilter[] = [
  'All', 'Cambodia', 'Indonesia', 'Laos', 'Philippines', 'Thailand', 'Vietnam', 'Australia'
];

export const PROPERTIES: Property[] = [
  { id: 'kh-rong', name: 'Koh Rong', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/king-s-day-event' },
  { id: 'kh-sdach', name: 'Koh Sdach', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/kings-day-mad-monkey-koh-sdach' },
  { id: 'kh-phnom', name: 'Phnom Penh', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/kings-day-mad-monkey-phnom-penh?currency=USD' },
  { id: 'kh-siem', name: 'Siem Reap', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/king-s-day-mad-monkey-siem-reap' },
  { id: 'kh-kampot', name: 'Kampot', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/king-s-day-event' },
  { id: 'id-gili', name: 'Gili T', country: 'Indonesia', url: 'https://madmonkeyhostels.com/tours-events/kings-day-mad-monkey-gili-trawangan' },
  { id: 'id-kuta', name: 'Kuta Lombok', country: 'Indonesia', url: 'https://madmonkeyhostels.com/tours-events/kings-day-mad-monkey-kuta-lombok' },
  { id: 'id-nusa', name: 'Nusa Lembongan', country: 'Indonesia', url: 'https://madmonkeyhostels.com/tours-events/king-s-day-mad-monkey-nusa-lembongan' },
  { id: 'id-ulu', name: 'Uluwatu', country: 'Indonesia', url: 'https://madmonkeyhostels.com/tours-events/kings-day-mad-monkey-uluwatu' },
  { id: 'la-luang', name: 'Luang Prabang', country: 'Laos', url: 'https://madmonkeyhostels.com/tours-events/king-s-day-mad-monkey-luang' },
  { id: 'la-vang', name: 'Vang Vieng', country: 'Laos', url: 'https://madmonkeyhostels.com/tours-events/king-s-day-event' },
  { id: 'ph-duma', name: 'Dumaguete', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/king-s-day-mad-monkey-dumaguete' },
  { id: 'ph-manila', name: 'Manila', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/kings-day-mad-monkey-manila' },
  { id: 'ph-nacpan', name: 'Nacpan Beach', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/kings-day-mad-monkey-nacpan' },
  { id: 'ph-panglao', name: 'Panglao', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/kings-day-mad-monkey-panglao' },
  { id: 'ph-siargao', name: 'Siargao', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/kings-day-mad-monkey-siargao' },
  { id: 'ph-siquijor', name: 'Siquijor', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/kings-day-mad-monkey-siquijor' },
  { id: 'th-bangkok', name: 'Bangkok', country: 'Thailand', url: 'https://madmonkeyhostels.com/tours-events/kings-day-mad-monkey-bangkok' },
  { id: 'th-chiang', name: 'Chiang Mai', country: 'Thailand', url: 'https://madmonkeyhostels.com/tours-events/kings-day-mad-monkey-chiang-mai' },
  { id: 'th-pai', name: 'Pai', country: 'Thailand', url: 'https://madmonkeyhostels.com/tours-events/kings-day-mad-monkey-pai' },
  { id: 'th-phuket', name: 'Phuket', country: 'Thailand', url: 'https://madmonkeyhostels.com/tours-events/kings-day-mad-monkey-phuket' },
  { id: 'vn-hanoi', name: 'Hanoi', country: 'Vietnam', url: 'https://madmonkeyhostels.com/tours-events/hanoi-old-quarters-biggest-kings-day-party-early-bird-rate' },
  { id: 'vn-hoian', name: 'Hoi An', country: 'Vietnam', url: 'https://madmonkeyhostels.com/tours-events/king-s-day-mad-monkey-hoi-an' },
  { id: 'au-coogee', name: 'Coogee Beach', country: 'Australia', url: '' },
];
