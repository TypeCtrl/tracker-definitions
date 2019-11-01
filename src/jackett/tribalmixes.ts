import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'tribalmixes',
  name: 'TribalMixes',
  description: 'TribalMixes is a ratioless Semi-Private Torrent Tracker for DJ MIXES',
  language: 'en-EN',
  type: 'semi-private',
  encoding: 'ISO-8859-1',
  links: ['https://www.tribalmixes.com/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Audio', desc: 'tribal' },
      { id: '2', cat: 'Audio', desc: 'electro' },
      { id: '3', cat: 'Audio', desc: 'chillout' },
      { id: '4', cat: 'Audio', desc: 'house' },
      { id: '5', cat: 'Audio', desc: 'video' },
      { id: '6', cat: 'Audio', desc: 'breaks' },
      { id: '7', cat: 'Audio', desc: 'trance' },
      { id: '8', cat: 'Audio', desc: 'deep house' },
      { id: '9', cat: 'Audio', desc: 'techno' },
      { id: '10', cat: 'Audio', desc: 'drum&bass' },
      { id: '11', cat: 'Audio', desc: 'classic' },
      { id: '12', cat: 'Audio', desc: 'minimal' },
      { id: '14', cat: 'Audio', desc: 'progressive' },
      { id: '15', cat: 'Audio', desc: 'tech house' },
      { id: '16', cat: 'Audio', desc: 'psy-goa trance' },
      { id: '17', cat: 'Audio', desc: 'electro-tribe' },
      { id: '18', cat: 'Audio', desc: 'mega-pack' },
      { id: '19', cat: 'Audio', desc: 'dark' },
      { id: '20', cat: 'Audio', desc: 'dubstep' },
      { id: '22', cat: 'Audio', desc: 'misc' },
      { id: '30', cat: 'Audio', desc: '(tm) mixes' },
      { id: '31', cat: 'Audio', desc: '(tm) ONLY' },
    ],
    modes: {
      search: ['q'],
      'music-search': ['q', 'album', 'artist', 'label', 'year'],
    },
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'div.alert-danger' }],
    test: { path: '/', selector: 'a[href="/logout.php"]' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      search: '{{if .Query.Artist}}{{ .Query.Artist }}{{else}}{{ .Keywords }}{{end}}',
    },
    rows: { selector: 'div.row:has(a[href^="/download.php?id="])' },
    fields: {
      category: {
        selector: 'a[href^="/browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'a[href*="/torrent/"]' },
      details: { selector: 'a[href*="/torrent/"]', attribute: 'href' },
      download: {
        selector: 'a[href^="/download.php?id="]',
        attribute: 'href',
      },
      size: {
        selector: 'a[href^="/download.php?id="]',
        attribute: 'title',
        filters: [{ name: 'regexp', args: 'Size: (.+?)<' }],
      },
      seeders: {
        selector: 'a[href^="/download.php?id="]',
        attribute: 'title',
        filters: [{ name: 'regexp', args: '>(\\d+) seeder' }],
      },
      leechers: {
        selector: 'a[href^="/download.php?id="]',
        attribute: 'title',
        filters: [{ name: 'regexp', args: ', (\\d+) leecher' }],
      },
      date: {
        selector: 'a[href^="/download.php?id="]',
        attribute: 'title',
        filters: [{ name: 'regexp', args: 'shared (.+?)<' }],
      },
      downloadvolumefactor: { case: { '*': '1' } },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'jackett',
};