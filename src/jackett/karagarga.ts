import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'karagarga',
  name: 'Karagarga',
  description: 'Karagarga tracks non-hollywood, rare and obscure movies, music and literature.',
  language: 'en-US',
  type: 'private',
  encoding: 'ISO-8859-1',
  links: ['https://karagarga.in/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '2', cat: 'Audio', desc: 'Music' },
      { id: '3', cat: 'Books', desc: 'Literature' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
      'music-search': ['q'],
    },
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    captcha: {
      type: 'image',
      selector: 'img#captcha_img',
      input: 'imagestring',
    },
    error: [{ selector: 'table:contains("Login failed!")' }],
    test: { path: 'index.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      search_type: '{{ if .Query.IMDBID }}imdb{{ else }}title{{ end }}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      cat: 0,
      genre: '',
      subgenre: '',
      country: 0,
      hdrip: '',
      incldead: '',
      sort: '{{ if .Keywords }}{{ else }}added{{ end }}',
      d: '{{ if .Keywords }}{{ else }}DESC{{ end }}',
    },
    rows: {
      selector: 'table#browse > tbody > tr:has(a[href^="browse.php?genre="])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?genre="] img',
        case: {
          'img[title^="Movie"]': 1,
          'img[title^="Music"]': 2,
          'img[title^="Literature"]': 3,
        },
      },
      year: { selector: 'a[href$="search_type=year"]', optional: true },
      flag: {
        selector: 'a[href^="browse.php?country="] img',
        attribute: 'title',
        optional: true,
      },
      filename: {
        selector: 'a[href^="/down.php/"]',
        attribute: 'href',
        filters: [
          { name: 'regexp', args: '(?:/down\\.php/\\d+/)(.+?)\\.torrent' },
          { name: 're_replace', args: ['%20', '.'] },
        ],
      },
      title: {
        selector: 'a[href^="details.php?id="]',
        filters: [
          {
            name: 'append',
            args: ' {{ .Result.year }} {{ .Result.flag }} [{{ .Result.filename }}]',
          },
        ],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="/down.php/"]',
        attribute: 'href',
      },
      imdb: {
        selector: 'a[href*="imdb.com/title/tt"]',
        attribute: 'href',
        optional: true,
      },
      date: {
        selector: 'td:nth-child(9)',
        filters: [
          {
            name: 're_replace',
            args: ["([a-zA-Z]+)\\s+(\\d{1,2})\\s+'(\\d{2})", '$2 $1 $3'],
          },
          { name: 'dateparse', args: '2 Jan 06' },
        ],
      },
      files: { selector: 'td:nth-child(10)' },
      size: { selector: 'td:nth-child(11)' },
      grabs: {
        selector: 'td:nth-child(12)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-child(13)' },
      leechers: { selector: 'td:nth-child(14)' },
      subs: { selector: 'span:contains("Subs:")', optional: true },
      genre: {
        selector: 'td:nth-child(5)',
        optional: true,
        filters: [{ name: 'prepend', args: 'Genre: ' }],
      },
      mom: {
        selector: 'img[title^="CURRENT"]',
        attribute: 'title',
        optional: true,
      },
      description: {
        text:
          '{{ .Result.subs }} {{ .Result.genre }}{{ if .Result.mom }} Current MoM{{ else }}{{ end }}',
      },
      downloadvolumefactor: {
        case: {
          'span:contains("Freeleech")': 0,
          'span:contains("Featured")': 0,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: { 'img[title^="CURRENT"]': 1.6, '*': 1.1 },
      },
    },
  },
  source: 'jackett',
};
