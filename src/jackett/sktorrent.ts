import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'sktorrent',
  name: 'SkTorrent',
  description: 'SkTorrent is a CZECH/SLOVAK Semi-Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'cs-CZ',
  type: 'semi-private',
  encoding: 'WINDOWS-1250',
  links: ['https://sktorrent.eu/'],
  legacylinks: ['http://sktorrent.eu/torrent/', 'http://sktorrent.eu/'],
  caps: {
    categorymappings: [
      { id: '9', cat: 'XXX', desc: 'xXx' },
      { id: '23', cat: 'Books', desc: 'Knihy a Časopisy' },
      { id: '25', cat: 'Other', desc: 'Ostatní' },
      { id: '5', cat: 'Movies', desc: 'Filmy Kreslené' },
      { id: '1', cat: 'Movies', desc: 'Filmy CZ/SK dabing' },
      { id: '14', cat: 'Movies/Other', desc: 'Filmy Kamera' },
      { id: '15', cat: 'Movies', desc: 'Filmy s titulkama' },
      { id: '20', cat: 'Movies/DVD', desc: 'Filmy DVD' },
      { id: '31', cat: 'Movies', desc: 'Filmy bez titulků' },
      { id: '3', cat: 'Movies/3D', desc: 'Filmy 3D' },
      { id: '19', cat: 'Movies/HD', desc: 'Filmy HD' },
      { id: '28', cat: 'Movies/BluRay', desc: 'Filmy Blu-ray' },
      { id: '29', cat: 'Movies/3D', desc: 'Filmy 3D Blu-ray' },
      { id: '43', cat: 'Movies/UHD', desc: 'Filmy UHD' },
      { id: '18', cat: 'PC/Games', desc: 'Hry na Windows' },
      { id: '30', cat: 'PC/Games', desc: 'Hry na Konzole' },
      { id: '37', cat: 'PC/Games', desc: 'Hry na Linux' },
      { id: '59', cat: 'PC/Games', desc: 'Hry na Mac' },
      { id: '16', cat: 'TV', desc: 'TV Seriál' },
      { id: '17', cat: 'TV/Documentary', desc: 'TV Dokument' },
      { id: '42', cat: 'TV', desc: 'TV Pořad' },
      { id: '44', cat: 'TV/Sport', desc: 'TV Sport' },
      { id: '2', cat: 'Audio', desc: 'Hudba' },
      { id: '22', cat: 'Audio', desc: "Hudba DJ's Mix" },
      { id: '24', cat: 'Audio', desc: 'Mluvené slovo' },
      { id: '26', cat: 'Audio/Video', desc: 'Hudební videa' },
      { id: '45', cat: 'Audio', desc: 'Soundtrack' },
      { id: '21', cat: 'PC', desc: 'Programy' },
      { id: '27', cat: 'PC/Mobile-Other', desc: 'Mobil, PDA' },
      { id: '58', cat: 'Other', desc: 'Neschválené' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  login: {
    path: 'torrent/login.php',
    method: 'form',
    form: 'form[action^="login.php?returnto=index.php"]',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [{ selector: 'font:contains("Incorrect")' }],
    test: { path: 'torrent/index.php' },
  },
  download: {
    selector: 'a[href^="download.php?id="]',
    attribute: 'href',
  },
  search: {
    paths: [{ path: 'torrent/torrents_v2.php' }],
    inputs: {
      search: '{{ .Keywords }}',
      category: '{{ range .Categories }}{{.}};{{end}}',
      active: 0,
    },
    keywordsfilters: [{ name: 'diacritics', args: 'replace' }],
    rows: {
      selector: 'table.lista > tbody > tr > td > table.lista > tbody > tr > td:has(a[href^="details.php?name="])',
    },
    fields: {
      category: {
        selector: 'a[href^="torrents_v2.php?category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: {
        selector: 'a[href^="details.php?name="]',
        filters: [
          { name: 're_replace', args: ['^VA\\s*\\|', 'VA -'] },
          { name: 're_replace', args: ['^.*? \\/\\s*|^.*? \\|\\s*', ''] },
          { name: 'diacritics', args: 'replace' },
          {
            name: 're_replace',
            args: ['\\|\\s*\\d+\\% CSFD\\.cz\\/|\\s*=*\\s*CSFD\\s*\\d+\\%|\\s*CSFD\\s*=*\\s*\\d+\\%|\\s*CSFD', ''],
          },
          {
            name: 're_replace',
            args: ['(\\d{1})\\s*\\.*\\s*az*\\s*(\\d{2,})\\s*\\.*\\s(?i)serie\\.*', 'S0$1-S$2'],
          },
          {
            name: 're_replace',
            args: ['(\\d{1})\\s*\\.*\\s*az*\\s*(\\d{1})\\s*\\.*\\s(?i)serie\\.*', 'S0$1-S$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)serie\\s*(\\d{1})\\s*\\.*\\s*az*\\s*(\\d{2,})\\s*\\.*', 'S0$1-S$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)serie\\s*(\\d{1})\\s*\\.*\\s*az*\\s*(\\d{1})\\s*\\.*', 'S0$1-S$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)season\\,*\\s*(\\d{1})\\,\\s*\\d{1}\\,\\s*(\\d{2,})', 'S0$1-S$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)season\\,*\\s*(\\d{1})\\,\\s*\\d{1}\\,\\s*(\\d{1})', 'S0$1-S0$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)season\\s*(\\d{1})\\s*\\.*\\-*\\,*\\+*\\s*(\\d{2,})\\s*\\.*', 'S0$1-S$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)season\\s*(\\d{1})\\s*\\.*\\-*\\,*\\+*\\s*(\\d{1})\\s*\\.*', 'S0$1-S0$2'],
          },
          {
            name: 're_replace',
            args: ['^GRID\\:*\\s(?i)season', 'GRID Seasson'],
          },
          {
            name: 're_replace',
            args: ['(?i)season\\s*(\\d{2,})\\.*', 'S$1'],
          },
          {
            name: 're_replace',
            args: ['(?i)season\\s*(\\d{1})\\.*', 'S0$1'],
          },
          { name: 're_replace', args: ['GRID Seasson', 'GRID Season'] },
          {
            name: 're_replace',
            args: ['\\sPES\\s(\\d{4})\\s(?i)season', ' PES $1 Seasson'],
          },
          {
            name: 're_replace',
            args: ['\\s\\(*(\\d{2,})\\.*\\s*(?i)season\\)*', ' S$1'],
          },
          {
            name: 're_replace',
            args: ['\\s\\(*(\\d{1})\\s*\\.*\\-*\\,*\\+*\\s*(\\d{2,})\\.*\\s(?i)season\\)*', ' S0$1-S$2'],
          },
          {
            name: 're_replace',
            args: ['\\s\\(*(\\d{1})\\s*\\.*\\-*\\,*\\+*\\s*(\\d{1})\\.*\\s(?i)season\\)*', ' S0$1-S0$2'],
          },
          {
            name: 're_replace',
            args: ['\\s\\(*(\\d{1})\\.*\\s*(?i)season\\)*', ' S0$1'],
          },
          {
            name: 're_replace',
            args: [' PES (\\d{4}) Seasson', ' PES $1 Season'],
          },
          {
            name: 're_replace',
            args: ['\\s\\(*(\\d{1})\\,\\s*\\d{1}\\,\\s*(\\d{2,})\\,*\\s*(?i)serie\\)*', ' S0$1-S$2'],
          },
          {
            name: 're_replace',
            args: ['\\s\\(*(\\d{1})\\,\\s*\\d{1}\\,\\s*(\\d{1})\\,*\\s*(?i)serie\\)*', ' S0$1-S0$2'],
          },
          {
            name: 're_replace',
            args: ['\\s\\(*(\\d{2,})\\.*\\s*(?i)serie\\)*', ' S$1'],
          },
          {
            name: 're_replace',
            args: ['\\s\\(*(\\d{1})\\s*\\.*\\-*\\,*\\+*\\s*(\\d{2,})\\.*\\s(?i)serie\\)*', ' S0$1-S$2'],
          },
          {
            name: 're_replace',
            args: ['\\s\\(*(\\d{1})\\s*\\.*\\-*\\,*\\+*\\s*(\\d{1})\\.*\\s(?i)serie\\)*', ' S0$1-S0$2'],
          },
          {
            name: 're_replace',
            args: ['\\s\\(*(\\d{1})\\.*\\s*(?i)serie\\)*', ' S0$1'],
          },
          {
            name: 're_replace',
            args: ['\\s\\(*(\\d{1})\\,\\s*\\d{1}\\,\\s*(\\d{2,})\\,*\\s*(?i)seria\\)*', ' S0$1-S$2'],
          },
          {
            name: 're_replace',
            args: ['\\s\\(*(\\d{1})\\,\\s*\\d{1}\\,\\s*(\\d{1})\\,*\\s*(?i)seria\\)*', ' S0$1-S0$2'],
          },
          {
            name: 're_replace',
            args: ['\\s\\d{2,}\\.*\\s*(?i)seria\\s\\((?i)s(\\d{2,})', ' (S$1'],
          },
          {
            name: 're_replace',
            args: ['\\s\\(*(\\d{1})\\s*\\.*\\-*\\,*\\+*\\s*(\\d{2,})\\.*\\s(?i)seria\\)*', ' S0$1-S$2'],
          },
          {
            name: 're_replace',
            args: ['\\s\\(*(\\d{1})\\s*\\.*\\-*\\,*\\+*\\s*(\\d{1})\\.*\\s(?i)seria\\)*', ' S0$1-S0$2'],
          },
          {
            name: 're_replace',
            args: ['\\s\\(*(\\d{2,})\\.*\\s*(?i)seria\\)*', ' S$1'],
          },
          {
            name: 're_replace',
            args: ['\\s\\(*(\\d{1})\\.*\\s*(?i)seria\\)*', ' S0$1'],
          },
          {
            name: 're_replace',
            args: ['\\s\\d{1}\\.*\\s*(?i)seria\\s*\\((?i)s(\\d{1})', ' (S0$1'],
          },
          {
            name: 're_replace',
            args: ['(\\d{2,})\\.*\\s*(?i)serii\\)*', 'S01-S$1'],
          },
          {
            name: 're_replace',
            args: ['(\\d{1})\\.*\\s*(?i)serii\\)*', 'S01-S0$1'],
          },
          {
            name: 're_replace',
            args: ['(?i)pouze (\\d{1})\\-(\\d{2,})', 'pouze S0$1-S$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)pouze (\\d{1})\\-(\\d{1})', 'pouze S0$1-S0$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)komplet (\\d{1})\\-(\\d{2,})', 'komplet S0$1-S$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)komplet (\\d{1})\\-(\\d{1})', 'komplet S0$1-S0$2'],
          },
        ],
      },
      details: {
        selector: 'a[href^="details.php?name="]',
        attribute: 'href',
      },
      poster: {
        selector: 'img[src="//cdn.sktorrent.eu/obrazky/xXx.jpg"]',
        attribute: 'src',
      },
      download: {
        selector: 'a[href^="details.php?name="]',
        attribute: 'href',
      },
      size: {
        selector: 'div > div',
        filters: [{ name: 'regexp', args: 'Velkost (.+?) \\|' }],
      },
      date: {
        selector: 'div > div',
        filters: [
          { name: 'regexp', args: 'Pridany (\\d{2}/\\d{2}/\\d{4})' },
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '02/01/2006 -07:00' },
        ],
      },
      seeders: {
        selector: 'div > div',
        filters: [{ name: 'regexp', args: 'Odosielaju : (\\d+)' }],
      },
      leechers: {
        selector: 'div > div',
        filters: [{ name: 'regexp', args: 'Stahuju : (\\d+)' }],
      },
      downloadvolumefactor: { text: 1 },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 0.51 },
    },
  },
  source: 'jackett',
};
