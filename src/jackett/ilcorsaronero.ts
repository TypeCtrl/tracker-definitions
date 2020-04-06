import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'ilcorsaronero',
  name: 'Il Corsaro Nero',
  description: 'Il Corsaro Nero is an ITALIAN Public site for TV / MOVIES / GENERAL',
  language: 'it-IT',
  type: 'public',
  encoding: 'WINDOWS-1252',
  followredirect: true,
  links: ['https://ilcorsaronero.xyz/', 'https://ilcorsaronero.fun/', 'https://ilcorsaronero.pro/'],
  legacylinks: [
    'https://ilcorsaronero.live/',
    'https://ilcorsaronero.vip/',
    'https://ilcorsaronero.info/',
    'https://ilcorsaronero.ch/',
    'https://ilcorsaronero.cc/',
    'https://ilcorsaronero.pizza/',
    'https://ilcorsaronero.pw/',
    'https://ilcorsaronero.unblockit.pro/',
  ],
  caps: {
    categorymappings: [
      {
        id: '1',
        cat: 'Movies/HD',
        desc: 'Movies BDRiP',
        default: true,
      },
      { id: '2', cat: 'Audio', desc: 'Music', default: true },
      { id: '3', cat: 'PC/Games', desc: 'Games PC', default: true },
      { id: '4', cat: 'Other', desc: 'Other', default: true },
      { id: '5', cat: 'TV/Anime', desc: 'Anime', default: true },
      { id: '6', cat: 'Books/Ebook', desc: 'Ebooks', default: true },
      { id: '7', cat: 'PC/0day', desc: 'App Windows', default: true },
      { id: '8', cat: 'PC', desc: 'App Linux', default: true },
      { id: '9', cat: 'PC/Mac', desc: 'App Mac', default: true },
      {
        id: '13',
        cat: 'Console/PSP',
        desc: 'Games Playstation',
        default: true,
      },
      {
        id: '14',
        cat: 'Console/Xbox',
        desc: 'Games Xbox',
        default: true,
      },
      { id: '15', cat: 'TV', desc: 'TV Series', default: true },
      { id: '16', cat: 'Other', desc: 'Other', default: true },
      {
        id: '18',
        cat: 'Audio/Audiobook',
        desc: 'Audio Book',
        default: true,
      },
      {
        id: '19',
        cat: 'Movies/SD',
        desc: 'Movies Screener',
        default: true,
      },
      { id: '20', cat: 'Movies/DVD', desc: 'Movies DVD', default: true },
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
          '{{if .Keywords}}advsearch.php?&category={{range .Categories}}{{.}};{{end}}&search={{ .Keywords}}&order=data&by=DESC&page=0{{else}}/browse/0{{end}}',
      },
      {
        path:
          '{{if .Keywords}}advsearch.php?&category={{range .Categories}}{{.}};{{end}}&search={{ .Keywords}}&order=data&by=DESC&page=1{{else}}/browse/1{{end}}',
      },
      {
        path:
          '{{if .Keywords}}advsearch.php?&category={{range .Categories}}{{.}};{{end}}&search={{ .Keywords}}&order=data&by=DESC&page=2{{else}}/browse/2{{end}}',
      },
      {
        path:
          '{{if .Keywords}}advsearch.php?&category={{range .Categories}}{{.}};{{end}}&search={{ .Keywords}}&order=data&by=DESC&page=3{{else}}/browse/3{{end}}',
      },
      {
        path:
          '{{if .Keywords}}advsearch.php?&category={{range .Categories}}{{.}};{{end}}&search={{ .Keywords}}&order=data&by=DESC&page=4{{else}}/browse/4{{end}}',
      },
      {
        path:
          '{{if .Keywords}}advsearch.php?&category={{range .Categories}}{{.}};{{end}}&search={{ .Keywords}}&order=data&by=DESC&page=5{{else}}/browse/5{{end}}',
      },
    ],
    keywordsfilters: [
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
          { name: 'diacritics', args: 'replace' },
          { name: 'urldecode' },
          {
            name: 're_replace',
            args: ['[\\[!"#$%&\'()*+,\\-.\\/:;<=>?@[\\]^_`{|}~]', ' '],
          },
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
      description: {
        selector: 'td:nth-child(1) a',
        attribute: 'href',
        filters: [
          { name: 'split', args: ['/', -1] },
          { name: 'prepend', args: 'cat=' },
        ],
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
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
