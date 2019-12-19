import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrent9clone',
  name: 'Torrent9 clone (torrent9.ch)',
  description: 'Torrent9 is a FRENCH Public site for TV / MOVIES / GENERAL',
  language: 'fr-FR',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://www.torrent9.so/'],
  legacylinks: [
    'https://www.torrents9.pw/',
    'https://www.torrent9.ch/',
    'https://www1.torrent9.ch/',
    'https://www2.torrent9.ch/',
    'https://wwv.torrent9.vg/',
    'https://www.torrent9.vc/',
    'https://wvw.torrent9.vc/',
    'https://www.torrent9.lol/',
    'https://wvw.torrent9.lol/',
    'https://wwv.torrent9.lol/',
    'https://ww1.torrent9.lol/',
    'https://ww5.torrent9.lol/',
    'https://ww6.torrent9.lol/',
    'https://www.torrent9.tw/',
    'https://ww7.torrent9.lol/',
    'https://www.torrent9.dev/',
    'https://www.torrent9.sx/',
    'https://ww1.torrent9.sx/',
    'https://www.t9.re/',
    'https://www.t9.vc/',
    'https://www.torrent9.ai/',
  ],
  caps: {
    categorymappings: [
      { id: 'Films', cat: 'Movies', desc: 'Movies' },
      { id: 'Séries', cat: 'TV', desc: 'TV' },
      { id: 'Musique', cat: 'Audio', desc: 'Music' },
      { id: 'Ebook', cat: 'Books', desc: 'Books' },
      { id: 'Logiciels', cat: 'PC', desc: 'Software' },
      { id: 'Jeux-PC', cat: 'PC/Games', desc: 'PC Games' },
      {
        id: 'Jeux-Consoles',
        cat: 'Console/Xbox360',
        desc: 'Console Games',
      },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [],
  download: { selector: 'a[href^="magnet:?"]', attribute: 'href' },
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}/recherche/{{ .Keywords }}{{else}}/top{{end}}',
      },
    ],
    rows: { selector: 'div.table-responsive > table tbody tr' },
    fields: {
      site_date: {
        selector: 'td:nth-child(1) a',
        filters: [{ name: 'regexp', args: '(\\w+)$' }],
      },
      title: {
        selector: 'td:nth-child(1) a',
        filters: [
          {
            name: 'replace',
            args: [' FRENCH', ' {{ .Result.site_date }} FRENCH'],
          },
          {
            name: 'replace',
            args: ['MULTI', '{{ .Result.site_date }} MULTI'],
          },
          {
            name: 'replace',
            args: ['TRUEFRENCH', '{{ .Result.site_date }} TRUEFRENCH'],
          },
          {
            name: 'replace',
            args: ['VOSTFR', '{{ .Result.site_date }} VOSTFR'],
          },
          { name: 're_replace', args: ['(\\w+)$', ''] },
        ],
      },
      details: { selector: 'td:nth-child(1) a', attribute: 'href' },
      category: { selector: 'td:nth-child(1) i', attribute: 'class' },
      download: { selector: 'td:nth-child(1) a', attribute: 'href' },
      date: { text: 'now' },
      size: { selector: 'td:nth-child(2)' },
      seeders: {
        selector: 'td:nth-child(3) span.seed_ok',
        optional: true,
      },
      leechers: { selector: 'td:nth-child(4)', optional: true },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
