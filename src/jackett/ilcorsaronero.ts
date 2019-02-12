import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'ilcorsaronero',
  name: 'Il Corsaro Nero',
  description: 'Il Corsaro Nero is an ITALIAN Public site for TV / MOVIES / GENERAL',
  language: 'it-IT',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://ilcorsaronero.vip/'],
  legacylinks: [
    'https://ilcorsaronero.info/',
    'https://ilcorsaronero.ch/',
    'https://ilcorsaronero.cc/',
  ],
  certificates: [
    '89c12d4a080b5aeec00acbb269dc9b44584b1b3f',
    'aa7c40aa360a1cec8a9687312fd50402b912e618',
    '83174ec1f92fa13cdef9d51888ea1dfba2166e17',
    'c414bf4ad6c69841693c147849f4c314aa200bdf',
    '3a402766ce22fd1aa24bfc1a4fd47e9309eb8c98',
    '160f832730737a70264768ceddf3cd94bc51ffb7',
    'a60e969b27965d4dc2ff45d50c20e2e872d4e9b9',
  ],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies/HD', desc: 'BDRiP', default: true },
      { id: '2', cat: 'Audio', desc: 'Music', default: true },
      { id: '2', cat: 'PC/Games', desc: 'Games', default: true },
      { id: '5', cat: 'TV/Anime', desc: 'Anime', default: true },
      { id: '7', cat: 'PC/0day', desc: 'App', default: true },
      { id: '15', cat: 'TV', desc: 'TV Series', default: true },
      { id: '19', cat: 'Movies/SD', desc: 'Screener', default: true },
      { id: '20', cat: 'Movies/SD', desc: 'Full DVD', default: true },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    {
      name: 'itorrents-links',
      type: 'checkbox',
      label: 'Add download links via itorrents.org',
    },
  ],
  search: {
    paths: [
      {
        path:
          '{{if .Keywords}}advsearch.php?&category={{range .Categories}}{{.}};{{end}}&search={{ .Keywords}}&order=data&by=DESC&page=0{{else}}/recenti{{end}}',
      },
      {
        path:
          '{{if .Keywords}}advsearch.php?&category={{range .Categories}}{{.}};{{end}}&search={{ .Keywords}}&order=data&by=DESC&page=1{{else}}/recenti{{end}}',
      },
      {
        path:
          '{{if .Keywords}}advsearch.php?&category={{range .Categories}}{{.}};{{end}}&search={{ .Keywords}}&order=data&by=DESC&page=2{{else}}/recenti{{end}}',
      },
      {
        path:
          '{{if .Keywords}}advsearch.php?&category={{range .Categories}}{{.}};{{end}}&search={{ .Keywords}}&order=data&by=DESC&page=3{{else}}/recenti{{end}}',
      },
      {
        path:
          '{{if .Keywords}}advsearch.php?&category={{range .Categories}}{{.}};{{end}}&search={{ .Keywords}}&order=data&by=DESC&page=4{{else}}/recenti{{end}}',
      },
      {
        path:
          '{{if .Keywords}}advsearch.php?&category={{range .Categories}}{{.}};{{end}}&search={{ .Keywords}}&order=data&by=DESC&page=5{{else}}/recenti{{end}}',
      },
      {
        path:
          '{{if .Keywords}}advsearch.php?&category={{range .Categories}}{{.}};{{end}}&search={{ .Keywords}}&order=data&by=DESC&page=6{{else}}/recenti{{end}}',
      },
      {
        path:
          '{{if .Keywords}}advsearch.php?&category={{range .Categories}}{{.}};{{end}}&search={{ .Keywords}}&order=data&by=DESC&page=7{{else}}/recenti{{end}}',
      },
      {
        path:
          '{{if .Keywords}}advsearch.php?&category={{range .Categories}}{{.}};{{end}}&search={{ .Keywords}}&order=data&by=DESC&page=8{{else}}/recenti{{end}}',
      },
      {
        path:
          '{{if .Keywords}}advsearch.php?&category={{range .Categories}}{{.}};{{end}}&search={{ .Keywords}}&order=data&by=DESC&page=9{{else}}/recenti{{end}}',
      },
    ],
    keywordsfilters: [
      { name: 'diacritics', args: 'replace' },
      { name: 're_replace', args: ['(?i)\\bS0*(\\d+)\\b', '$1'] },
      {
        name: 're_replace',
        args: ['(?i)\\bS0*(\\d+)E0*(\\d+)\\b', '$1 $2'],
      },
    ],
    rows: {
      selector: 'tr.odd,tr.odd2',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: {
        selector: 'td:nth-child(2) a.tab',
        attribute: 'href',
        filters: [
          { name: 'split', args: ['/', -1] },
          { name: 'urldecode' },
          { name: 're_replace', args: ['[^a-zA-Z0-9\\s]|\\.', ' '] },
          { name: 're_replace', args: ['[ ]{2,}', ' '] },
          {
            name: 're_replace',
            args: ['(?i)\\bS(\\d+)\\sE(\\d+)\\b', 'S$1E$2'],
          },
          { name: 're_replace', args: ['(?i)(\\d{2})x(\\d+)', 'S$1E$2'] },
          {
            name: 're_replace',
            args: ['(?i)\\b(\\d{1})x(\\d+)', 'S0$1E$2'],
          },
          {
            name: 're_replace',
            args: ["(?i)\\bStagion[ei]\\s?(\\d{1})\\b|\\bSeason'?s?\\s?(\\d{1})\\b", 'S0$1$2'],
          },
          {
            name: 're_replace',
            args: ["(?i)\\bStagion[ei]\\s?(\\d{2,})\\b|\\bSeason'?s?\\s?(\\d{2,})\\b", 'S$1$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)\\b(?:[\\/\\|]?Episodio\\s?(\\d+)|Puntata\\s?(\\d+))', 'E$1$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)\\b(?:Puntate\\s*)(\\d+)\\s?(\\d+)', 'E0$1-0$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)(Serie completa|Completat?a?|in pausa)', ''],
          },
        ],
      },
      category: {
        selector: 'td:nth-child(1) a',
        attribute: 'href',
        filters: [{ name: 'split', args: ['/', -1] }],
      },
      details: { selector: 'td:nth-child(4) a', attribute: 'href' },
      'download-itorrents': {
        selector: 'input.downarrow',
        attribute: 'value',
        filters: [
          { name: 'prepend', args: 'http://itorrents.org/torrent/' },
          { name: 'append', args: '.torrent' },
        ],
      },
      download: {
        text: '{{if .Config.itorrents-links}}{{ .Result.download-itorrents }}{{else}}{{end}}',
      },
      magnet: {
        selector: 'input.downarrow',
        attribute: 'value',
        filters: [
          { name: 'prepend', args: 'magnet:?xt=urn:btih:' },
          {
            name: 'append',
            args:
              '&dn={{ .Result.title }}.torrent&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://tracker.leechers-paradise.org:6969&tr=udp://tracker.opentrackr.org:1337',
          },
        ],
      },
      size: { selector: 'td:nth-child(3) font' },
      date: {
        selector: 'td:nth-child(5) font',
        filters: [{ name: 'dateparse', args: '02.01.06' }],
      },
      seeders: {
        selector: 'td:nth-child(6) font',
        filters: [{ name: 'replace', args: ['n/a', '0'] }],
      },
      leechers: {
        selector: 'td:nth-child(7) font',
        filters: [{ name: 'replace', args: ['n/a', '0'] }],
      },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
