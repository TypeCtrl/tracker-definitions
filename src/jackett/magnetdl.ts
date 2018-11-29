import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'magnetdl',
  name: 'MagnetDL',
  description: 'MagnetDL is a Public torrent Magnet Links search engine',
  language: 'en-us',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.magnetdl.com/'],
  legacylinks: ['http://www.magnetdl.com/'],
  caps: {
    categories: {
      TV: 'TV',
      Movie: 'Movies',
      Music: 'Audio',
      'E-Book': 'Books/Ebook',
      Game: 'PC/Games',
      Software: 'PC',
      Other: 'Other',
    },
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [],
  search: {
    headers: {
      Accept: [
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      ],
    },
    keywordsfilters: [
      { name: 're_replace', args: [' ', '-'] },
      { name: 'tolower' },
    ],
    paths: [
      {
        path:
          '{{if .Keywords}}/{{ re_replace .Keywords "(.).*" "$1" }}/{{ .Keywords }}/{{else}}download/invalid-cat/{{end}}',
      },
    ],
    rows: { selector: 'tr:has(td[class="m"])' },
    fields: {
      title: { selector: 'td[class="n"] a', attribute: 'title' },
      category: { optional: true, selector: 'td[class^="t"]' },
      details: { selector: 'td[class="n"] a', attribute: 'href' },
      magnet: { selector: 'td[class="m"] a', attribute: 'href' },
      date: {
        selector: 'td:nth-child(3)',
        filters: [{ name: 'timeago' }],
      },
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td[class="s"]' },
      files: { selector: 'td[class="l"]' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
};
