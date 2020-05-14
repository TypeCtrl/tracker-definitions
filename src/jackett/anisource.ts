import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'anisource',
  name: 'AniSource',
  description: 'AniSource is a Public site for HD Anime raws.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://asnet.pw/'],
  settings: [],
  caps: {
    categorymappings: [{ id: '1', cat: 'TV/Anime', desc: 'Raw Animes' }],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  search: {
    paths: [
      { path: '/' },
      { path: '/', inputs: { tpage: 2 } },
      { path: '/', inputs: { tpage: 3 } },
      { path: '/', inputs: { tpage: 4 } },
      { path: '/', inputs: { tpage: 5 } },
    ],
    inputs: { search: '{{ .Keywords }}' },
    rows: { selector: 'div[class^="item"]' },
    fields: {
      category: { text: 1 },
      title: {
        selector: 'a[href*="/showprofile/"]',
        filters: [{ name: 're_replace', args: ['^(\\[.+?\\]) (.+?)$', '$2 $1'] }],
      },
      details: {
        selector: 'a[href*="/showprofile/"]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href*="/download/"]',
        attribute: 'href',
      },
      magnet: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
      date: {
        selector: 'font[color="Black"]',
        filters: [
          { name: 'regexp', args: 'Date: (.+?) Central' },
          { name: 'replace', args: [' at ', ' '] },
          { name: 'append', args: ' -09:00' },
          { name: 'dateparse', args: '2006-01-02 15:04 -07:00' },
        ],
      },
      size: {
        selector: 'font[color="Black"]',
        filters: [
          { name: 'regexp', args: 'Size: (.+?) \\|' },
          { name: 'replace', args: ['b', 'B'] },
        ],
      },
      files: {
        selector: 'font[color="Black"]',
        filters: [{ name: 'regexp', args: '(\\d+)$' }],
      },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
