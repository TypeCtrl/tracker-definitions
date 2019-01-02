import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentz2',
  name: 'Torrentz2',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://torrentz2.eu/'],
  caps: {
    categorymappings: [
      { id: 'video tv', cat: 'TV' },
      { id: 'video', cat: 'Movies' },
      { id: 'video movie hd', cat: 'Movies/HD' },
      { id: 'adult', cat: 'XXX' },
      { id: 'ebook comics', cat: 'Books/Comics' },
      { id: 'ebook', cat: 'Books/Ebook' },
      { id: 'ebook tutorial', cat: 'Books/Technical' },
      { id: 'ebook magazine', cat: 'Books/Magazines' },
      { id: 'audio music mp3', cat: 'Audio/MP3' },
      { id: 'ebook audio book', cat: 'Audio/Audiobook' },
      { id: 'audio music lossless', cat: 'Audio/Lossless' },
      { id: 'application', cat: 'PC/0day' },
      { id: 'game', cat: 'PC/Games' },
      { id: 'game xbox', cat: 'Console/Xbox' },
      { id: 'adult milf', cat: 'XXX' },
      { id: 'adult hairy', cat: 'XXX' },
      { id: 'adult anal', cat: 'XXX' },
      { id: 'adult blowjobs', cat: 'XXX' },
      { id: 'game pc', cat: 'PC/Games' },
      { id: 'audio', cat: 'Audio' },
    ],
  },
  settings: [],
  search: {
    path: 'searchA',
    inputs: { f: '{{ .Query.Keywords }}' },
    rows: {
      selector: 'html body #wrap .results dl:has(a)',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'dt a' },
      details: { selector: 'dt a', attribute: 'href' },
      download: {
        selector: 'dt a',
        attribute: 'href',
        filters: [
          { name: 'regexp', args: '/(\\w+)' },
          { name: 'prepend', args: 'magnet:?xt=urn:btih:' },
        ],
      },
      category: {
        selector: 'dt',
        remove: 'a',
        filters: [{ name: 'trim', args: '»' }, { name: 'trim', args: ' ' }],
      },
      date: {
        selector: 'dd span:nth-child(2)',
        filters: [{ name: 'append', args: ' ago' }, { name: 'timeago' }],
      },
      size: { selector: 'dd span:nth-child(3)' },
      seeders: { selector: 'dd span:nth-child(4)' },
      leechers: { selector: 'dd span:nth-child(5)' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
};
