import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'cpasbien',
  name: 'cpasbien',
  description: 'cpasbien is a FRENCH Public site for TV / MOVIES / GENERAL',
  language: 'fr-FR',
  type: 'semi-private',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://wwwv.cpasbien-fr.fr/'],
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
    'https://wvw.cpasbien-fr.fr/',
  ],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [{ id: 'Other', cat: 'Other' }],
  },
  settings: [
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info_cookie',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Login to this tracker with your browser<li>Solve the challenge<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button<li>Refresh the page by pressing <b>F5</b><li>Select the <b>Headers</b> tab<li>Find <b>'cookie:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole cookie string <i>(everything after 'cookie: ')</i> and <b>Paste</b> here.</ol>",
    },
    { name: 'useragent', type: 'text', label: 'User-Agent' },
    {
      name: 'info_useragent',
      type: 'info',
      label: 'How to get the User-Agent',
      default:
        "<ol><li>From the same place you fetched the cookie,<li>Find <b>'user-agent:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole user-agent string <i>(everything after 'user-agent: ')</i> and <b>Paste</b> here.</ol>",
    },
    {
      name: 'flaresolverr',
      type: 'info',
      label: 'FlareSolverr',
      default:
        'This site may use Cloudflare DDoS Protection, therefore Jackett requires <a href="https://github.com/Jackett/Jackett#configuring-flaresolverr" target="_blank">FlareSolver</a> to access it.',
    },
    {
      name: 'info_8000',
      type: 'info',
      label: 'About cpasbien Categories',
      default:
        "cpasbien does not return categories in its search results.</br>To add to your Apps' Torznab indexer, replace all categories with 8000(Other).",
    },
    {
      name: 'multilang',
      type: 'checkbox',
      label: 'Replace MULTI by another language in release name',
      default: false,
    },
    {
      name: 'multilanguage',
      type: 'select',
      label: 'Replace MULTI by this language',
      default: 'FRENCH',
      options: {
        FRENCH: 'FRENCH',
        'MULTI.FRENCH': 'MULTI.FRENCH',
        ENGLISH: 'ENGLISH',
        'MULTI.ENGLISH': 'MULTI.ENGLISH',
        VOSTFR: 'VOSTFR',
        'MULTI.VOSTFR': 'MULTI.VOSTFR',
      },
    },
    {
      name: 'vostfr',
      type: 'checkbox',
      label: 'Replace VOSTFR with ENGLISH',
      default: false,
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
        path: '{{ if .Keywords }}index.php?do=search&subaction=search{{ else }}{{ end }}',
        method: 'post',
      },
    ],
    inputs: {
      story: '{{ if .Keywords }}{{ .Keywords }}{{ else }}{{ end }}',
    },
    keywordsfilters: [
      { name: 're_replace', args: ['(?i)(S0)(\\d{1,2})$', 'saison $2'] },
      { name: 're_replace', args: ['(?i)(S)(\\d{1,3})$', 'saison $2'] },
    ],
    rows: { selector: 'div#gauche > table > tbody > tr:has(a)' },
    fields: {
      category: { text: 'Other' },
      site_date: {
        selector: 'a',
        filters: [{ name: 'regexp', args: '(19|20\\d{2})$' }],
      },
      title_phase1: {
        selector: 'a',
        filters: [
          {
            name: 're_replace',
            args: ['(?i)( FRENCH)', ' {{ .Result.site_date }} FRENCH'],
          },
          {
            name: 're_replace',
            args: ['(?i)( MULTI)', ' {{ .Result.site_date }} MULTI'],
          },
          {
            name: 're_replace',
            args: ['(?i)( TRUEFRENCH)', ' {{ .Result.site_date }} TRUEFRENCH'],
          },
          {
            name: 're_replace',
            args: ['(?i)( VOSTFR)', ' {{ .Result.site_date }} VOSTFR'],
          },
          {
            name: 're_replace',
            args: ['(?i)( SUBFRENCH)', ' {{ .Result.site_date }} SUBFRENCH'],
          },
          { name: 're_replace', args: ['(19|20\\d{2})$', ''] },
        ],
      },
      title_multilang: {
        text: '{{ .Result.title_phase1 }}',
        filters: [
          {
            name: 're_replace',
            args: ['(?i)(\\smulti\\s)', ' {{ .Config.multilanguage }} '],
          },
        ],
      },
      title_phase2: {
        text: '{{ if .Config.multilang }}{{ .Result.title_multilang }}{{ else }}{{ .Result.title_phase1 }}{{ end }}',
      },
      title_vostfr: {
        text: '{{ .Result.title_phase2 }}',
        filters: [
          { name: 're_replace', args: ['(?i)(\\svostfr\\s)', ' ENGLISH '] },
          {
            name: 're_replace',
            args: ['(?i)(\\ssubfrench\\s)', ' ENGLISH '],
          },
        ],
      },
      title: {
        text: '{{ if .Config.vostfr }}{{ .Result.title_vostfr }}{{ else }}{{ .Result.title_phase2 }}{{ end }}',
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
