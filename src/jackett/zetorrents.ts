import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'zetorrents',
  name: 'zetorrents',
  description: 'zetorrents is a FRENCH Public site for MOVIES / TV / GENERAL',
  language: 'fr-FR',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.zetorrents.co/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [{ id: '1', cat: 'Other' }],
  },
  settings: [
    {
      name: 'info',
      type: 'info',
      default:
        'zetorrents does not use categories. In your software Indexer settings, set the category to 7000.',
    },
  ],
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  search: {
    paths: [{ path: '{{ if .Keywords }}recherche/{{ .Keywords }}{{else}}{{end}}' }],
    rows: {
      selector: 'table.table > tbody > tr:has(a[href^="/torrent/"])',
    },
    fields: {
      category: { text: 1 },
      site_date: {
        selector: 'a[href^="/torrent/"]',
        filters: [{ name: 'regexp', args: '(\\d{4})$' }],
      },
      title: {
        selector: 'a[href^="/torrent/"]',
        attribute: 'title',
        filters: [
          { name: 'replace', args: [' en Torrent', ''] },
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
          { name: 're_replace', args: ['(\\d{4})$', ''] },
          { name: 'replace', args: ['WEBRIP', 'WEBDL'] },
        ],
      },
      details: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      download: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      date: { text: 'now' },
      size: { selector: 'td:nth-child(2)' },
      seeders: { selector: 'td:nth-child(3)' },
      leechers: { selector: 'td:nth-child(4)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
