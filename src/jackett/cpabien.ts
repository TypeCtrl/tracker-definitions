import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'cpasbien',
  name: 'cpasbien',
  description: 'cpasbien is a FRENCH Public site for TV / MOVIES / GENERAL',
  language: 'fr-FR',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://wvw.cpasbien-fr.fr/'],
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
    'https://vww.cpasbien-fr.fr/',
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
  settings: [
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info_cookie',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Login to this tracker with your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button<li>Refresh the page by pressing <b>F5</b><li>Select the <b>Headers</b> tab<li>Find <b>'cookie:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole cookie string <i>(everything after 'cookie: ')</i> and <b>Paste</b> here.</ol>",
    },
    { name: 'useragent', type: 'text', label: 'User-Agent' },
    {
      name: 'info_useragent',
      type: 'info',
      label: 'How to get the User-Agent',
      default:
        "<ol><li>From the same place you fetched the cookie,<li>Find <b>'user-agent:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole user-agent string <i>(everything after 'user-agent: ')</i> and <b>Paste</b> here.</ol>",
    },
  ],
  login: {
    method: 'cookie',
    inputs: {
      cookie: '{{ .Config.cookie }}',
      'user-agent': '[ .Config.useragent ]',
    },
  },
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}index.php?do=search&subaction=search{{else}}{{end}}',
        method: 'post',
      },
    ],
    inputs: { story: '{{ if .Keywords }}{{ .Keywords }}{{else}}{{end}}' },
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
