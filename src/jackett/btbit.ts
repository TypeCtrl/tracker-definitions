import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'btbit',
  name: 'btbit',
  description:
    'btbit is a public magnet search engine for MOVIES / GENERAL. This definition is for the English site.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['http://en.btbit.org/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'Movie', cat: 'Movies' },
      { id: 'Package', cat: 'PC/0day' },
      { id: 'Other', cat: 'Other' },
      { id: 'Software', cat: 'PC' },
      { id: 'Mirror', cat: 'PC/ISO' },
      { id: 'Music', cat: 'Audio' },
      { id: 'Picture', cat: 'Other/Misc' },
      { id: 'Document', cat: 'Books' },
    ],
  },
  settings: [],
  search: {
    paths: [
      {
        path: 'list/{{if .Keywords}}{{.Keywords}}{{else}}movie{{end}}/1-1-0.html',
      },
    ],
    rows: { selector: '.rs' },
    fields: {
      title: { selector: '.title' },
      category: { selector: '.sbar span[class^="cpill"]' },
      details: { selector: '.title h3 a', attribute: 'href' },
      download: {
        selector: '.sbar a[href^="magnet:?xt"]',
        attribute: 'href',
      },
      date: {
        selector: '.sbar span:nth-of-type(3) b',
        filters: [{ name: 'dateparse', args: '2006-01-02' }],
      },
      size: { selector: '.sbar span:nth-of-type(4) b' },
      files: { selector: '.sbar span:nth-of-type(5) b' },
      grabs: { selector: '.sbar span:nth-of-type(6) b' },
      seeders: { text: '1' },
      leechers: { text: '1' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
};
