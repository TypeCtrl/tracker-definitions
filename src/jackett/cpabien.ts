import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'cpasbien',
  name: 'cpasbien',
  description: 'cpasbien is a FRENCH Public site for TV / MOVIES / GENERAL',
  language: 'fr-FR',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://vww.cpasbien-fr.fr/'],
  legacylinks: [
    'http://www.cpasbiens.cc/',
    'http://www.cpabien.cm/',
    'http://cpabien.cm/',
    'http://cpasbiens1.com/',
    'http://cpabien.mx/',
    'http://www.cpabien.bz/',
    'http://cpabien.org/',
    'http://cpabien.cc/',
    'http://cpabien.co/',
    'http://cpabien.la/',
    'http://cpabien.club/',
    'http://www.cpabien.io/',
    'https://ww1.cpabien.io/',
    'https://wvw.cpabien.cm/',
    'https://www.cpabien.io/',
    'https://www.cpabien9.net/',
    'https://wwv.cpabien.cm/',
    'http://www.cpabien.cx/',
    'https://www.cpasbien.blue/',
    'https://www.cpabien.cx/',
    'https://www.cpasbien.re/',
    'http://www.cpasbien.io/',
    'https://www.cpabien.bz/',
    'https://www.cpabien.link/',
    'https://www.cpasbiens.cz/',
    'https://www.cpasbiens.bz/',
    'https://www.cpasbien.vg/',
    'https://www.cpasbien.lol/',
    'https://www.gktorrent.biz/',
  ],
  caps: {
    categorymappings: [
      { id: 'films', cat: 'Movies', desc: 'Movies' },
      { id: 'series', cat: 'TV', desc: 'TV' },
      { id: 'other', cat: 'Other', desc: 'Other' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [],
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}index.php?do=search&subaction=search&story={{ .Keywords }}{{else}}{{end}}',
      },
    ],
    rows: { selector: 'div#gauche > table > tbody > tr:has(a)' },
    fields: {
      category: { text: 'other' },
      site_date: {
        selector: 'a',
        filters: [{ name: 'regexp', args: '(\\w+)$' }],
      },
      title: {
        selector: 'a',
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
      details: { selector: 'a', attribute: 'href' },
      download: { selector: 'a', attribute: 'href' },
      size: { selector: 'div.poid' },
      date: { text: 'now' },
      seeders: { selector: 'div.up', optional: true },
      leechers: { selector: 'div.down', optional: true },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
