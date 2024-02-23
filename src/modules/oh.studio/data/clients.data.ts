interface Client {
  logo_url: string;
  description: string;
}

const rootUrl = '/oh.studio/clients';

const Clients: Client[] = [
  { logo_url: `${ rootUrl}/01.png`, description: 'Eurosport' },
  { logo_url: `${ rootUrl}/02.png`, description: 'Eurosport' },
  { logo_url: `${ rootUrl}/03.png`, description: 'Eurosport' },
  { logo_url: `${ rootUrl}/04.png`, description: 'Eurosport' },
  { logo_url: `${ rootUrl}/05.png`, description: 'Eurosport' },
  { logo_url: `${ rootUrl}/06.png`, description: 'Eurosport' },
  { logo_url: `${ rootUrl}/07.png`, description: 'Eurosport' },
  { logo_url: `${ rootUrl}/08.png`, description: 'Eurosport' },
  { logo_url: `${ rootUrl}/09.png`, description: 'Eurosport' },
  { logo_url: `${ rootUrl}/10.png`, description: 'Eurosport' },
  { logo_url: `${ rootUrl}/12.png`, description: 'Eurosport' },
]

export default Clients;