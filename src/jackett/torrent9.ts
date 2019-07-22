import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrent9',
  name: 'Torrent9',
  description: 'Torrent9 is a FRENCH Public site for TV / MOVIES / GENERAL',
  language: 'fr-FR',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://ww1.torrent9.is/', 'https://www.torrent09.uno/', 'https://ww1.torrent9.to/'],
  legacylinks: [
    'http://www.torrent9.ec/',
    'http://www.torrent9.red/',
    'http://www.torrent9.bz/',
    'http://www.torrents9.pe/',
    'http://www.torrent9.cc/',
    'http://www.torrent9.pe/',
    'http://www.torrent9.blue/',
    'https://www.torrent9.blue/',
    'https://ww2.torrent9.blue/',
    'https://www.torrent9.rip/',
    'https://www.torrent9.ph/',
    'https://ww1.torrent9.ph/',
    'https://torrent9.ga/',
    'https://www.torrent9.uno/',
    'https://wvw.torrent9.uno/',
    'https://ww1.torrent9.uno/',
    'https://wvw.t9.pe/',
    'https://www4.torrent9.to/',
    'https://www.torrent9.cat/',
    'https://www.torrent9.is/',
  ],
  caps: {
    categorymappings: [
      { id: 'films', cat: 'Movies', desc: 'Movies' },
      { id: 'series', cat: 'TV', desc: 'TV' },
      { id: 'musique', cat: 'Audio', desc: 'Music' },
      { id: 'ebook', cat: 'Books', desc: 'Books' },
      { id: 'logiciels', cat: 'PC', desc: 'Software' },
      { id: 'jeux-pc', cat: 'PC/Games', desc: 'PC Games' },
      {
        id: 'jeux-consoles',
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
        path:
          '{{ if .Keywords }}/search_torrent/{{ re_replace .Keywords "[\']+" "" }}/page-0{{else}}/top_torrent.php{{end}}',
      },
    ],
    rows: {
      selector: 'div.table-responsive > table tbody tr',
      filters: [{ name: 'andmatch' }],
    },
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
      category: {
        selector: 'td:nth-child(1) i',
        case: {
          'i[class="fa fa-video-camera"]': 'films',
          'i[class="fa fa-desktop"]': 'series',
          'i[class="fa fa-tv"]': 'series',
          'i[class="fa fa-music"]': 'musique',
          'i[class="fa fa-gamepad"]': 'jeux-pc',
          'i[class="fa fa-laptop"]': 'logiciels',
          'i[class="fa fa-book"]': 'ebook',
        },
      },
      download: { selector: 'td:nth-child(1) a', attribute: 'href' },
      date: { text: 'now' },
      size: {
        selector: 'td:nth-child(2)',
        filters: [
          { name: 're_replace', args: ['\\.(\\d) Ko', '$1X00'] },
          { name: 're_replace', args: [' Ko', '000'] },
          { name: 're_replace', args: ['\\.(\\d) Mo', '$1X00000'] },
          { name: 're_replace', args: [' Mo', '000000'] },
          { name: 're_replace', args: ['\\.(\\d) Go', '$1X00000000'] },
          { name: 're_replace', args: [' Go', '000000000'] },
          { name: 're_replace', args: ['\\.(\\d) To', '$1X00000000000'] },
          { name: 're_replace', args: [' To', '000000000000'] },
          { name: 'replace', args: ['X', ''] },
          { name: 're_replace', args: ['(\\d+)\\.\\d', '$1 MB'] },
        ],
      },
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
