import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'hdarea',
  name: 'HDArea',
  language: 'en-US',
  links: ['http://www.hdarea.co/'],
  caps: {
    categorymappings: [
      { id: '401', cat: 'TV/HD' },
      { id: '402', cat: 'TV' },
      { id: '403', cat: 'TV' },
      { id: '404', cat: 'TV/Documentary' },
      { id: '405', cat: 'TV/Anime' },
      { id: '406', cat: 'Audio/Video' },
      { id: '407', cat: 'TV/Sport' },
      { id: '408', cat: 'Audio/Lossless' },
      { id: '409', cat: 'Other/Misc' },
      { id: '410', cat: 'TV/HD' },
      { id: '411', cat: 'TV/HD' },
      { id: '412', cat: 'Movies/WEBDL' },
      { id: '413', cat: 'TV/HD' },
      { id: '414', cat: 'Movies/DVD' },
      { id: '415', cat: 'Movies/BluRay' },
      { id: '416', cat: 'Movies/3D' },
      { id: '417', cat: 'Movies/Other' },
    ],
  },
  login: {
    path: '/takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ path: '/takelogin.php', message: { selector: 'td.text' } }],
    test: { path: '/messages.php' },
  },
  search: {
    path: '/torrents.php?search={{ .Query.Keywords}}',
    rows: { selector: 'table.torrents tbody tr.nonstick_outer_bg' },
    fields: {
      category: {
        selector: 'td:nth-child(1) > a:nth-child(1)',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '\\?cat=(\\d+)' }],
      },
      title: { selector: 'td:nth-child(2) table.torrentname tbody td a b' },
      details: {
        selector: 'td:nth-child(1) > a:nth-child(1)',
        attribute: 'href',
      },
      download: {
        selector: 'td:nth-child(4) > a:nth-child(1)',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(5)' },
      date: {
        selector: 'td:nth-child(4) > span:nth-child(1)',
        attribute: 'title',
      },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
    },
  },
  encoding: 'UTF-8',
};
