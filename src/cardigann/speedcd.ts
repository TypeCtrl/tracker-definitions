import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'speedcd',
  name: 'speed.cd',
  description: 'TV Series anyone?',
  language: 'en-US',
  links: ['http://speed.cd/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies/Other' },
      { id: '2', cat: 'TV/SD' },
      { id: '24', cat: 'PC/0day' },
      { id: '25', cat: 'PC/ISO' },
      { id: '26', cat: 'Audio' },
      { id: '27', cat: 'Books' },
      { id: '28', cat: 'Movies/BluRay' },
      { id: '29', cat: 'Audio/Video' },
      { id: '30', cat: 'TV/Anime' },
      { id: '32', cat: 'Movies' },
      { id: '33', cat: 'Console/Xbox360' },
      { id: '35', cat: 'Console' },
      { id: '39', cat: 'Console/Wii' },
      { id: '40', cat: 'Movies/DVD' },
      { id: '41', cat: 'TV/Other' },
      { id: '42', cat: 'Movies' },
      { id: '43', cat: 'Movies/HD' },
      { id: '44', cat: 'Audio' },
      { id: '45', cat: 'Console/PS3' },
      { id: '46', cat: 'PC/Phone-Other' },
      { id: '47', cat: 'Movies' },
      { id: '48', cat: 'Movies/3D' },
      { id: '49', cat: 'TV/HD' },
      { id: '50', cat: 'TV/Sport' },
      { id: '51', cat: 'PC/Mac' },
      { id: '52', cat: 'TV/HD' },
      { id: '55', cat: 'TV/Other' },
    ],
  },
  ratio: {
    path: '/browse.php',
    selector: 'body > div.cHead > table.sts > tbody > tr > td:nth-child(1) > div:nth-child(2)',
    filters: [{ name: 'regexp', args: '(\\ \\d{1,2}\\.\\d{2}\\ )' }],
  },
  login: {
    path: '/takeElogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'tbody:contains("File Not Found")' }],
    test: { path: '/user/' },
  },
  search: {
    path: '/browse.php',
    inputs: { search: '{{ .Query.Keywords }}' },
    rows: { selector: '#torrentTable .boxContent > table tbody tr' },
    fields: {
      title: { selector: 'td.lft > div > a > b' },
      category: {
        selector: 'td:nth-child(1) > div:nth-child(1) > a:nth-child(2)',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      download: {
        selector: 'td:nth-child(3) > a:nth-child(1)',
        attribute: 'href',
      },
      date: {
        selector: 'td.lft > div > span.date > span',
        attribute: 'title',
      },
      size: { selector: 'td:nth-child(5)' },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
    },
  },
  encoding: 'UTF-8',
  source: 'cardigann',
};
