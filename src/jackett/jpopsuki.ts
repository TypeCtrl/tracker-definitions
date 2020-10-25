import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'jpopsuki',
  name: 'JPopsuki',
  description: 'JPopSuki is a Private Torrent Tracker for ASIAN MUSIC',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://jpopsuki.eu/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Audio', desc: 'Album' },
      { id: '2', cat: 'Audio', desc: 'Single' },
      { id: '3', cat: 'Movies', desc: 'PV' },
      { id: '4', cat: 'Movies/DVD', desc: 'DVD' },
      { id: '5', cat: 'TV', desc: 'TV-Music' },
      { id: '6', cat: 'TV', desc: 'TV-Variety' },
      { id: '7', cat: 'TV', desc: 'TV-Drama' },
      { id: '8', cat: 'Other', desc: 'Fansubs' },
      { id: '9', cat: 'Other', desc: 'Pictures' },
      { id: '10', cat: 'Other/Misc', desc: 'Misc' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q', 'artist'],
    },
  },
  login: {
    path: 'login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      keeplogged: 1,
      login: 'Log in',
    },
    error: [{ selector: 'form#loginform > span.warning, font[color="red"]' }],
    test: { path: 'torrents.php' },
  },
  search: {
    paths: [{ path: 'ajax.php' }],
    inputs: {
      $raw:
        '{{ range .Categories }}filter_cat[{{.}}]=1&{{end}}{{ if or .Query.Artist .Keywords }}{{ else }}searchtags=japanese&tags_type=0&{{ end }}',
      searchstr: '{{ if .Query.Artist }}{{ .Query.Artist }}{{ else }}{{ .Keywords }}{{ end }}',
      order_by: 's3',
      order_way: 'desc',
      disablegrouping: 1,
      section: 'torrents',
    },
    rows: {
      selector: 'table#torrent_table > tbody > tr[class^="torrent"]',
    },
    fields: {
      category: {
        selector: 'a[href*="filter_cat"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '%5B(\\d+?)%5D' }],
      },
      download: {
        selector: 'a[href^="torrents.php?action=download&id="]',
        attribute: 'href',
      },
      description: { selector: 'div.tags' },
      title: {
        selector: 'td:nth-last-child(7)',
        remove: 'span, div.tags, a[title="View Comments"]',
        filters: [
          { name: 'replace', args: [' ()', ''] },
          { name: 'replace', args: ['\t', ''] },
          { name: 'replace', args: [' / Freeleech!', ''] },
        ],
      },
      details: {
        selector: 'a[href^="torrents.php?id="]',
        attribute: 'href',
      },
      banner: {
        selector: 'img[src^="static/images/torrents/"]',
        attribute: 'src',
        optional: true,
      },
      files: { selector: 'td:nth-last-child(6)' },
      date: {
        selector: 'td:nth-last-child(5)',
        attribute: 'title',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: 'Jan 02 2006, 15:04 -07:00' },
        ],
      },
      size: { selector: 'td:nth-last-child(4)' },
      grabs: { selector: 'td:nth-last-child(3)' },
      seeders: { selector: 'td:nth-last-child(2)' },
      leechers: { selector: 'td:nth-last-child(1)' },
      downloadvolumefactor: {
        case: { 'strong:contains("Freeleech!")': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
