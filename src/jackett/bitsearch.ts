import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'bitsearch',
  name: 'BitSearch',
  description: 'BitSearch is a Public torrent meta-search engine',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://bitsearch.to/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
    categorymappings: [
      { id: 'eBook', cat: 'Books/Ebook' },
      { id: 'Ebook/Course', cat: 'Books/Ebook' },
      { id: 'Movies', cat: 'Movies' },
      { id: 'Music/Album', cat: 'Audio' },
      { id: 'Music/mp3', cat: 'Audio/MP3' },
      { id: 'Music/Lossless', cat: 'Audio/Lossless' },
      { id: 'Other', cat: 'Other' },
      { id: 'Other/Android', cat: 'PC/Mobile-Android' },
      { id: 'Other/Archive', cat: 'Other' },
      { id: 'Other/Audio', cat: 'Audio' },
      { id: 'Other/Database', cat: 'Movies/DVD' },
      { id: 'Other/DiskImage', cat: 'PC/ISO' },
      { id: 'Other/Document', cat: 'Books/Comics' },
      { id: 'Other/Image', cat: 'Other/Misc' },
      { id: 'Other/Program', cat: 'PC/0day' },
      { id: 'Other/Sourcecode', cat: 'Movies/Other' },
      { id: 'Other/Video', cat: 'TV' },
      { id: 'Softwares/Windows', cat: 'PC/0day' },
      { id: 'TV', cat: 'TV' },
      { id: 'Unknown', cat: 'Other' },
      { id: 'XXX', cat: 'XXX' },
    ],
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'date',
      options: { date: 'created', seeders: 'seeders', size: 'size' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  download: {
    selectors: null,
    infohash: {
      hash: {
        selector: 'a[href^="magnet:?xt"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '([A-F|a-f|0-9]{40})' }],
      },
      title: {
        selector: 'a[href^="magnet:?xt"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '&dn=(.+?)$' }, { name: 'validfilename' }],
      },
    },
  },
  search: {
    paths: [{ path: 'search' }],
    inputs: {
      q: '{{ .Keywords }}',
      sort: '{{ .Config.sort }}',
      order: '{{ .Config.type }}',
    },
    rows: { selector: 'div.search-result' },
    fields: {
      category: { selector: 'a.category' },
      title: { selector: 'h5' },
      details: { selector: 'h5 a', attribute: 'href' },
      download: { selector: 'h5 a', attribute: 'href' },
      grabs: {
        selector: 'div.stats div:has(img[alt="Download"])',
        filters: [
          { name: 'replace', args: ['.', ''] },
          { name: 'replace', args: ['K', '00'] },
          { name: 'replace', args: ['M', '00000'] },
        ],
      },
      size: { selector: 'div.stats div:has(img[alt="Size"])' },
      seeders: {
        selector: 'div.stats div:has(img[alt="Seeder"])',
        filters: [
          { name: 'replace', args: ['.', ''] },
          { name: 'replace', args: ['K', '00'] },
          { name: 'replace', args: ['M', '00000'] },
        ],
      },
      leechers: {
        selector: 'div.stats div:has(img[alt="Leecher"])',
        filters: [
          { name: 'replace', args: ['.', ''] },
          { name: 'replace', args: ['K', '00'] },
          { name: 'replace', args: ['M', '00000'] },
        ],
      },
      date: {
        selector: 'div.stats div:has(img[alt="Date"])',
        filters: [{ name: 'dateparse', args: 'Jan 2, 2006' }],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
