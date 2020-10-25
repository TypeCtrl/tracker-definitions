import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'gtorrent',
  name: 'GTorrent',
  description: 'GTorrent is a RUSSIAN Public Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'ru-RU',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://gtorrent.org/'],
  caps: {
    categorymappings: [{ id: '1', cat: 'Other', desc: 'Other' }],
    modes: { search: ['q'] },
  },
  settings: [],
  download: {
    selector: 'a[href^="/uploads/torrents/"]',
    attribute: 'href',
  },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      do: 'search',
      subaction: 'search',
      search_start: 0,
      full_search: 0,
      result_from: 1,
      story: '{{ if .Keywords }}{{ .Keywords }}{{ else }}{{ .Today.Year }}{{ end }}',
    },
    rows: {
      selector: 'div.blog_brief_news:not(div.first_line):not(:has(div.uploaded:empty))',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: { text: 1 },
      title: { selector: 'div.name' },
      details: { selector: 'div.name a', attribute: 'href' },
      download: { selector: 'div.name a', attribute: 'href' },
      date: { text: 'now' },
      size: { selector: 'div:nth-child(2)' },
      seeders: { selector: 'div.uploaded' },
      leechers: { selector: 'div.download' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
