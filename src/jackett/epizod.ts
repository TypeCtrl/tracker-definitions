import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'epizod',
  name: 'Epizod',
  description: 'Epizod is a FRENCH Public tracker for MOVIES / TV',
  language: 'fr-FR',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.epizod.tv/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'series', cat: 'TV' },
      { id: 'films', cat: 'Movies' },
      { id: 'other', cat: 'Other' },
    ],
  },
  settings: [],
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  search: {
    paths: [{ path: '/' }],
    inputs: { s: '{{ .Keywords }}' },
    rows: { selector: 'article:not(:has(a[title="DMCA"]))' },
    fields: {
      category: { text: 'other' },
      'category|noappend': {
        selector: 'a[href*="/category/"]',
        attribute: 'href',
        optional: true,
        filters: [{ name: 'split', args: ['/', 4] }],
      },
      title: { selector: 'div.post-cover > a', attribute: 'title' },
      details: { selector: 'div.post-cover > a', attribute: 'href' },
      download: { selector: 'div.post-cover > a', attribute: 'href' },
      banner: {
        selector: 'img[data-lazy-src]',
        attribute: 'data-lazy-src',
      },
      date: {
        selector: 'time',
        attribute: 'datetime',
        filters: [
          { name: 'replace', args: ['T', ' '] },
          { name: 'dateparse', args: '2006-01-02 15:04:05-07:00' },
        ],
      },
      cat: {
        selector: 'a[href*="/category/"]',
        attribute: 'href',
        optional: true,
        filters: [{ name: 'split', args: ['/', 4] }],
      },
      size: {
        text: '{{ if eq .Result.cat "series" }}512 MB{{else}}2 GB{{end}}',
      },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
