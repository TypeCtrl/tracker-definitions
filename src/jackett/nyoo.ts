import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'nyoo',
  name: 'Nyoo',
  description:
    'Nyoo is a mirror for Nyaa-Pantsu, a Public site for Asian ANIME',
  language: 'en-EN',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://nyoo.moe'],
  settings: [],
  caps: {
    categorymappings: [
      { id: 312, cat: 'TV/Anime', desc: 'Anime music videos' },
      { id: 35, cat: 'TV/Anime', desc: 'English subtitled animes' },
      { id: 313, cat: 'TV/Anime', desc: 'Non-english subtitled animes' },
      { id: 36, cat: 'TV/Anime', desc: 'Raw animes' },
      { id: 23, cat: 'Audio', desc: 'Lossless audio' },
      { id: 24, cat: 'Audio', desc: 'Lossy audio' },
      { id: 47, cat: 'Books', desc: 'Literature english translated' },
      {
        id: 414,
        cat: 'Books',
        desc: 'Literature non-english translated',
      },
      { id: 48, cat: 'Books', desc: 'Raw literature' },
      { id: 11, cat: 'PC/ISO', desc: 'Applications' },
      { id: 12, cat: 'PC/Games', desc: 'Games' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  search: {
    paths: [{ path: '/search' }],
    inputs: { page: 'search', q: '{{ .Query.Keywords}}' },
    rows: { selector: 'tr.torrent-info' },
    fields: {
      title: { selector: 'td.tr-name a' },
      category: {
        selector: 'td.tr-cat div.nyaa-cat a',
        attribute: 'href',
        filters: [{ name: 'split', args: ['=', -1] }],
      },
      details: { selector: 'td.tr-name a', attribute: 'href' },
      download: {
        selector: 'a[title="Magnet Link"]',
        attribute: 'href',
      },
      size: { selector: 'td.tr-size' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
};
