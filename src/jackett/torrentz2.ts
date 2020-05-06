import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentz2',
  name: 'Torrentz2',
  description:
    'Torrentz2 is a Public torrent meta-search engine combining results from dozens of torrent sites',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: [
    'https://torrentz2.eu/',
    'https://torrentz.unblockit.me/',
    'https://torrentz2.black-mirror.xyz/',
    'https://torrentz2.unblocked.casa/',
    'https://torrentz2.proxyportal.fun/',
    'https://torrentz2.uk-unblock.xyz/',
    'https://torrentz2.ind-unblock.xyz/',
  ],
  legacylinks: [
    'https://torrentz2.unblockninja.com/',
    'https://torrentz.unblockit.pro/',
    'https://torrentz.unblockit.one/',
  ],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
    categorymappings: [
      { id: 'video tv', cat: 'TV' },
      { id: 'video anime', cat: 'TV/Anime' },
      { id: 'video', cat: 'Movies' },
      { id: 'movies divx xvid', cat: 'Movies' },
      { id: 'video movie dvd', cat: 'Movies' },
      { id: 'video movie dvdrip', cat: 'Movies' },
      { id: 'video movie hd', cat: 'Movies/HD' },
      { id: 'ebook', cat: 'Books/Ebook' },
      { id: 'ebook comics', cat: 'Books/Comics' },
      { id: 'ebook magazine', cat: 'Books/Magazines' },
      { id: 'ebook tutorial', cat: 'Books/Technical' },
      { id: 'ebook audio book', cat: 'Audio/Audiobook' },
      { id: 'audio', cat: 'Audio' },
      { id: 'audio music lossless', cat: 'Audio/Lossless' },
      { id: 'audio music mp3', cat: 'Audio/MP3' },
      { id: 'application', cat: 'PC/0day' },
      { id: 'game', cat: 'PC/Games' },
      { id: 'game pc', cat: 'PC/Games' },
      { id: 'game xbox', cat: 'Console/Xbox' },
      { id: 'game nintendo', cat: 'Console/NDS' },
      { id: 'adult', cat: 'XXX' },
      { id: 'adult amateur', cat: 'XXX' },
      { id: 'adult anal', cat: 'XXX' },
      { id: 'adult asian', cat: 'XXX' },
      { id: 'adult blowjobs', cat: 'XXX' },
      { id: 'adult creampie', cat: 'XXX' },
      { id: 'adult double p', cat: 'XXX' },
      { id: 'adult fisting', cat: 'XXX' },
      { id: 'adult hairy', cat: 'XXX' },
      { id: 'adult hentai', cat: 'XXX' },
      { id: 'adult interracial', cat: 'XXX' },
      { id: 'adult lesbian', cat: 'XXX' },
      { id: 'adult milf', cat: 'XXX' },
      { id: 'adult squirting', cat: 'XXX' },
      { id: 'adult tattoo', cat: 'XXX' },
      { id: 'other', cat: 'Other' },
      { id: 'images', cat: 'Other' },
    ],
  },
  settings: [
    {
      name: 'itorrents-links',
      type: 'checkbox',
      label: 'Add download links via itorrents.org',
      default: false,
    },
    {
      name: 'filter-safe',
      type: 'checkbox',
      label: 'Exclude adult content from results',
      default: true,
    },
    {
      name: 'filter-verified',
      type: 'checkbox',
      label: 'Only include verifed content in results',
      default: false,
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'A',
      options: { _: 'peers', N: 'rating', A: 'created', S: 'size' },
    },
  ],
  search: {
    paths: [
      {
        path:
          '{{if .Config.filter-verified }}verified{{else}}search{{end}}{{ re_replace .Config.sort "_" "" }}',
      },
    ],
    inputs: {
      f: '{{ if .Keywords }}title: {{ .Keywords }}{{else}}{{end}}',
      safe: '{{ if .Config.filter-safe }}1{{else}}0{{end}}',
    },
    rows: { selector: 'html body #wrap .results dl:has(a)' },
    fields: {
      title: { selector: 'dt a' },
      details: { selector: 'dt a', attribute: 'href' },
      'download-itorrents': {
        selector: 'dt a',
        attribute: 'href',
        filters: [
          { name: 'regexp', args: '/(\\w+)' },
          { name: 'toupper' },
          { name: 'prepend', args: 'http://itorrents.org/torrent/' },
          { name: 'append', args: '.torrent' },
        ],
      },
      download: {
        text: '{{if .Config.itorrents-links}}{{ .Result.download-itorrents }}{{else}}{{end}}',
      },
      magfile: {
        text: '{{ .Result.title }}',
        filters: [{ name: 'validfilename' }, { name: 'urlencode' }],
      },
      magnet: {
        selector: 'dt a',
        attribute: 'href',
        filters: [
          { name: 'regexp', args: '/(\\w+)' },
          { name: 'prepend', args: 'magnet:?xt=urn:btih:' },
          {
            name: 'append',
            args:
              '&dn={{ .Result.magfile }}.torrent&tr=udp://tracker.coppersurfer.tk:6969&tr=udp://tracker.leechers-paradise.org:6969&tr=udp://tracker.opentrackr.org:1337',
          },
        ],
      },
      category: { text: 'other' },
      'category|noappend': {
        optional: true,
        selector: 'dt',
        remove: 'a',
        filters: [{ name: 're_replace', args: ['[^a-zA-Z0-9\\s]+', ''] }, { name: 'trim' }],
      },
      date: { selector: 'dd span:nth-child(2)', attribute: 'title' },
      size: { selector: 'dd span:nth-child(3)' },
      seeders: { selector: 'dd span:nth-child(4)' },
      leechers: { selector: 'dd span:nth-child(5)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
