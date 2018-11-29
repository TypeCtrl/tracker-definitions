import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'cpasbien',
  name: 'cpasbien',
  description: 'cpasbien is a FRENCH Public site for TV / MOVIES / GENERAL',
  language: 'fr-fr',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://wwv.cpabien.cm/'],
  legacylinks: [
    'http://www.cpasbiens.cc/',
    'http://www.cpabien.cm/',
    'http://cpabien.cm/',
    'http://cpasbiens1.com/',
    'http://cpabien.mx/',
    'https://www.cpabien.bz/',
    'http://www.cpabien.bz/',
    'http://www.cpabien.cx/',
    'http://cpabien.org/',
    'http://cpabien.cc/',
    'http://cpabien.co/',
    'http://cpabien.la/',
    'http://cpabien.club/',
    'http://www.cpabien.io/',
    'https://ww1.cpabien.io/',
    'https://www.cpasbien.blue/',
    'https://wvw.cpabien.cm/',
    'https://www.cpabien.io/',
    'https://www.cpabien.cx/',
    'https://www.cpabien9.net/',
  ],
  caps: {
    categorymappings: [
      { id: 'films', cat: 'Movies', desc: 'Movies' },
      { id: 'series', cat: 'TV', desc: 'TV' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  settings: [],
  download: { selector: 'div.btn-download a', attribute: 'href' },
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}recherche/{{ .Keywords }}{{else}}derniers/{{end}}',
      },
    ],
    rows: { selector: 'table.table-corps tbody tr td' },
    fields: {
      site_date: {
        selector: 'a',
        filters: [{ name: 'regexp', args: '(\\w+)$' }],
      },
      title: {
        selector: 'a',
        filters: [
          {
            name: 'replace',
            args: ['FRENCH', '{{ .Result.site_date }} FRENCH'],
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
      size: {
        selector: 'div.poid',
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
        ],
      },
      date: { text: 'now' },
      seeders: { selector: 'div.up', optional: true },
      leechers: { selector: 'div.down', optional: true },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
};
