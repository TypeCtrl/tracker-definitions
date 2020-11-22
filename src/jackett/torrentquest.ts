import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentquest',
  name: 'TorrentQuest',
  description: 'TorrentQuest is a Public torrent Magnet Links search engine',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://torrentquest.com/'],
  caps: {
    categorymappings: [
      { id: 'TV', cat: 'TV', desc: 'TV Shows' },
      { id: 'Movie', cat: 'Movies', desc: 'Movies' },
      { id: 'Music', cat: 'Audio', desc: 'Music' },
      { id: 'E-Book', cat: 'Books/Ebook', desc: 'E-Books' },
      { id: 'Game', cat: 'PC/Games', desc: 'Games' },
      { id: 'Software', cat: 'PC', desc: 'Software' },
      { id: 'Other', cat: 'Other', desc: 'Other' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'age',
      options: { age: 'created', se: 'seeders', size: 'size' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  search: {
    headers: {
      Accept: ['text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'],
    },
    keywordsfilters: [{ name: 're_replace', args: [' ', '-'] }, { name: 'tolower' }],
    paths: [
      {
        path:
          '{{ if .Keywords }}{{ re_replace .Keywords "(.).*" "$1" }}/{{ .Keywords }}/{{ .Config.sort }}/{{ .Config.type }}/{{ else }}download/movies/{{ end }}',
      },
      {
        path:
          '{{ if .Keywords }}{{ re_replace .Keywords "(.).*" "$1" }}/{{ .Keywords }}/{{ .Config.sort }}/{{ .Config.type }}/2/{{ else }}download/tv/{{ end }}',
      },
    ],
    rows: { selector: 'tr:has(td.m)' },
    fields: {
      category: { text: 'Other' },
      'category|noappend': { optional: true, selector: 'td[class^="t"]' },
      title: { selector: 'td.n a', attribute: 'title' },
      details: { selector: 'td.n a', attribute: 'href' },
      magnet: { selector: 'td.m a', attribute: 'href' },
      date: {
        selector: 'td:nth-child(3)',
        filters: [{ name: 'timeago' }],
      },
      files: { selector: 'td:nth-child(5)' },
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td.s' },
      leechers: { selector: 'td.l' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
