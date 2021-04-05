import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'aussierules',
  name: 'Aussierul.es',
  description: 'Aussierul.es is a torrent site for Aussie Rules Football played in Australia',
  language: 'en-EN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://aussierul.es/'],
  caps: {
    modes: { search: ['q'] },
    categorymappings: [{ id: '1', cat: 'TV/Sport' }],
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'type',
      label: 'Search Type',
      type: 'select',
      default: 't_name',
      options: {
        t_name: 'Torrent Name',
        t_description: 'Torrent Description',
        t_both: 'Name & Description',
        t_uploader: 'Uploader',
        t_genre: 'IMDB Genre',
      },
    },
    {
      name: 'dead',
      label: 'Include Dead Torrents',
      type: 'select',
      default: 'No',
      options: { yes: 'Yes', no: 'No' },
    },
  ],
  login: {
    method: 'form',
    form: 'form',
    path: 'login.php',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'table:contains("An error has occured!")' }],
    test: { path: 'browse.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      search_type: '{{ .Config.type }}',
      include_dead_torrents: '{{ .Config.dead }}',
      keywords: '{{ .Keywords }}',
    },
    rows: {
      selector: 'table#sortabletable > tbody > tr:not(:first-child)',
    },
    fields: {
      category: { text: 1 },
      title: {
        selector: 'td:nth-child(2) > div:nth-child(1) > a > strong',
      },
      details: {
        selector: 'td:nth-child(2) > div:nth-child(1) > a',
        attribute: 'href',
      },
      download: {
        selector: 'a[href*="download.php?id="]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(2) > div:nth-child(2)',
        filters: [{ name: 'dateparse', args: '2-01-2006 15:04' }],
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
    },
  },
  source: 'jackett',
};
