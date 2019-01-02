import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'hdtorrentsit',
  name: 'HDTorrents.it',
  description: 'HDTorrents.it is an ITALIAN Private site for TV / MOVIES',
  language: 'it-IT',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://hdtorrents.xyz/'],
  legacylinks: ['http://hdtorrents.it/'],
  caps: {
    categorymappings: [
      { id: '2040', cat: 'Movies/HD' },
      { id: '5040', cat: 'TV/HD' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'div.error' }],
    test: { path: 'browse.php' },
  },
  search: {
    paths: [{ path: 'browse.php', method: 'post' }],
    keywordsfilters: [
      { name: 're_replace', args: ['[^a-zA-Z0-9]+', '%'] },
      { name: 'diacritics', args: 'replace' },
      { name: 're_replace', args: ['(S\\d{1,2}E\\d{1,2})', ''] },
      { name: 're_replace', args: ['(S\\d{1,2})', ''] },
    ],
    inputs: { ajax: false, search: '{{ .Keywords }}', incldead: 0 },
    rows: { selector: 'tbody#highlighted tr' },
    fields: {
      title: {
        selector: 'td:nth-child(2) a:nth-child(1)',
        filters: [
          {
            name: 're_replace',
            args: ['(\\s+\\/\\s+|\\/\\s+|\\s+\\/|\\/)(.*)\\s\\(', ' ('],
          },
          { name: 're_replace', args: ['(\\(\\d{4}\\)?\\s?)', ''] },
          { name: 're_replace', args: ['(\\s\\||\\s\\/)', ''] },
          {
            name: 're_replace',
            args: [
              "(?i)\\bStagion[ei]\\s?(\\d{1})\\b|\\bSeason'?s?\\s?(\\d{1})\\b",
              'S0$1$2',
            ],
          },
          {
            name: 're_replace',
            args: [
              "(?i)\\bStagion[ei]\\s?(\\d{2,})\\b|\\bSeason'?s?\\s?(\\d{2,})\\b",
              'S$1$2',
            ],
          },
          {
            name: 're_replace',
            args: ['(?i)(\\s\\/?\\s?Episodi[o]?)\\s\\[', 'E'],
          },
          {
            name: 're_replace',
            args: [
              '(?i)\\b(?:[\\s\\/\\|]?Episodi[o]?\\s?(\\d+)|Puntata\\s?(\\d+))',
              'E$1$2',
            ],
          },
          {
            name: 're_replace',
            args: ['(?i)(\\s\\/\\sCompleta\\s\\[episodi\\s)', 'E'],
          },
          {
            name: 're_replace',
            args: ['(?i)(\\sdi\\s\\d{1,2}|\\/\\d{1,2})\\]', ' '],
          },
          {
            name: 're_replace',
            args: ['(?i)(Serie completa|Completa|\\[in pausa\\])', ''],
          },
        ],
      },
      'title|append': {
        text: 'ITA]',
        filters: [{ name: 're_replace', args: ['[ ]{2,}', ' '] }],
      },
      details: {
        selector: 'td:nth-child(2) a:nth-child(1)',
        attribute: 'href',
      },
      banner: {
        selector: 'td:nth-child(2)[onmousemove]',
        attribute: 'onmousemove',
        filters: [{ name: 'regexp', args: ".*\\(.*,.*,.*,'(.*?)'\\)" }],
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(3)' },
      seeders: {
        selector: 'td:nth-child(4)',
        filters: [
          {
            name: 're_replace',
            args: ['(\\d*) \\(\\+\\d*\\)\n? \\| (\\d*) \\(\\+\\d*\\)', '$1'],
          },
        ],
      },
      leechers: {
        selector: 'td:nth-child(4)',
        filters: [
          {
            name: 're_replace',
            args: ['(\\d*) \\(\\+\\d*\\)\n? \\| (\\d*) \\(\\+\\d*\\)', '$2'],
          },
        ],
      },
      date: {
        selector: 'td:nth-child(2) i',
        filters: [
          { name: 'append', args: ' +02:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      category: {
        case: {
          'a[href^="details.php"]:contains("Stagione")': 5040,
          '*': 2040,
        },
      },
      downloadvolumefactor: {
        case: { 'img[src="pic/freedownload.gif"]': '0', '*': '1' },
      },
      uploadvolumefactor: { text: '1' },
    },
  },
};
