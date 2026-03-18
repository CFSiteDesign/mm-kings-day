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
  { id: 'kh-rong', name: 'Koh Rong', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/st-patrick-s-day-event-17th-march' },
  { id: 'kh-sdach', name: 'Koh Sdach', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/st-paddys-day' },
  { id: 'kh-phnom', name: 'Phnom Penh', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/st-patricks-event-mmpp' },
  { id: 'kh-siem', name: 'Siem Reap', country: 'Cambodia', url: 'https://madmonkeyhostels.com/tours-events/st-patricks-day-event-siem-reap' },
  { id: 'kh-kampot', name: 'Kampot', country: 'Cambodia', url: '' },
  { id: 'id-gili', name: 'Gili T', country: 'Indonesia', url: 'https://madmonkeyhostels.com/tours-events/paddy-s-party' },
  { id: 'id-kuta', name: 'Kuta Lombok', country: 'Indonesia', url: '' },
  { id: 'id-nusa', name: 'Nusa Lembongan', country: 'Indonesia', url: '' },
  { id: 'id-ulu', name: 'Uluwatu', country: 'Indonesia', url: 'https://madmonkeyhostels.com/tours-events/st-paddys-party-cocktail-free-flow-irish-pub-crawl-ticket' },
  { id: 'la-luang', name: 'Luang Prabang', country: 'Laos', url: '' },
  { id: 'la-vang', name: 'Vang Vieng', country: 'Laos', url: 'https://madmonkeyhostels.com/tours-events/st-patrick-s-day' },
  { id: 'ph-duma', name: 'Dumaguete', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/st-patrick-s-day-bash-at-mad-monkey-dumaguete' },
  { id: 'ph-manila', name: 'Manila', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/st-patrick-s-day-bash-at-mad-monkey-manila' },
  { id: 'ph-nacpan', name: 'Nacpan Beach', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/st-paddys-party-nacpan' },
  { id: 'ph-panglao', name: 'Panglao', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/st-patrick-s-day-bash-at-mad-monkey-panglao' },
  { id: 'ph-siargao', name: 'Siargao', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/st-patrick-s-day-bash-at-mad-monkey-siargao' },
  { id: 'ph-siquijor', name: 'Siquijor', country: 'Philippines', url: 'https://madmonkeyhostels.com/tours-events/st-patricks-day-siquijor' },
  { id: 'th-bangkok', name: 'Bangkok', country: 'Thailand', url: 'https://madmonkeyhostels.com/tours-events/st-paddys-party-free-flow-and-pub-crawl' },
  { id: 'th-chiang', name: 'Chiang Mai', country: 'Thailand', url: '' },
  { id: 'th-pai', name: 'Pai', country: 'Thailand', url: '' },
  { id: 'th-phuket', name: 'Phuket', country: 'Thailand', url: 'https://madmonkeyhostels.com/tours-events/st-paddy-s-party-foam-free-flow-pub-crawl' },
  { id: 'vn-hanoi', name: 'Hanoi', country: 'Vietnam', url: 'https://madmonkeyhostels.com/tours-events/hanoi-old-quarters-biggest-st-patricks-day-party' },
  { id: 'vn-hoian', name: 'Hoi An', country: 'Vietnam', url: 'https://madmonkeyhostels.com/tours-events/st-patricks-day-2026-hoi-an' },
  
  { id: 'au-coogee', name: 'Coogee Beach', country: 'Australia', url: '' },
];
