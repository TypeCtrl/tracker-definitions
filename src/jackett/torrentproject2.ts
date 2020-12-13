import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentproject2',
  name: 'TorrentProject2',
  description: 'TorrentProject2 is a Public torrent meta-search engine',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: [
    'https://torrentproject2.com/',
    'https://torrentproject2.net/',
    'https://torrentproject2.org/',
    'https://torrentproject.info/',
    'https://torrentproject.biz/',
    'https://torrentproject.xyz/',
  ],
  legacylinks: ['https://torrentproject2.se/', 'https://torrentproject.cc/'],
  caps: {
    categorymappings: [
      { id: 'Movies', cat: 'Movies', desc: 'Movies' },
      { id: 'Music', cat: 'Audio', desc: 'Music' },
      { id: 'Apps', cat: 'PC/0day', desc: 'Apps' },
      { id: 'Mobile', cat: 'PC/Mobile-Other', desc: 'Mobile' },
      { id: 'Games', cat: 'PC/Games', desc: 'Games' },
      { id: 'TV', cat: 'TV', desc: 'TV' },
      {
        id: 'Documentaries',
        cat: 'TV/Documentary',
        desc: 'Documentaries',
      },
      { id: 'XXX', cat: 'XXX', desc: 'XXX' },
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
      name: 'filter-verified',
      type: 'checkbox',
      label: 'Only include verifed content in results',
      default: false,
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'latest',
      options: {
        latest: 'created desc',
        oldest: 'created asc',
        seeders: 'seeders',
        size: 'size',
      },
    },
  ],
  download: {
    selector: '#download > div:nth-child(2) > div:nth-child(1) > a',
    attribute: 'href',
    filters: [
      { name: 'replace', args: ['https://mylink.me.uk/?url=', ''] },
      { name: 'replace', args: ['https://mylink.cx/?url=', ''] },
      { name: 'urldecode' },
    ],
  },
  search: {
    paths: [
      {
        path:
          'browse?t={{ if .Keywords }}{{ re_replace .Keywords " " "+" }}{{ else }}{{ end }}&orderby={{ .Config.sort }}{{ if .Config.filter-verified }}&safe=on{{ else }}{{ end }}',
      },
      {
        path:
          'browse?t={{ if .Keywords }}{{ re_replace .Keywords " " "+" }}{{ else }}{{ end }}&orderby={{ .Config.sort }}{{ if .Config.filter-verified }}&safe=on{{ else }}{{ end }}&p=1',
      },
    ],
    rows: { selector: '#similarfiles div:has(a[href^="/t"])' },
    fields: {
      category: { text: 'Other' },
      'category|noappend': {
        optional: true,
        selector: 'div > span:nth-child(1) > span',
      },
      title: { selector: 'span > a' },
      details: { selector: 'span > a', attribute: 'href' },
      download: { selector: 'span > a', attribute: 'href' },
      date: {
        selector: 'div > span:nth-child(4):contains(":")',
        optional: true,
        filters: [
          { name: 'append', args: ' -07:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      size: {
        selector: 'div > span:nth-child(5)',
        filters: [{ name: 're_replace', args: ['\\.([0-9]{3})', '$1'] }],
      },
      seeders: {
        selector: 'div > span:nth-child(2)',
        filters: [{ name: 'replace', args: ['N/A', '0'] }],
      },
      leechers: {
        selector: 'div > span:nth-child(3)',
        filters: [{ name: 'replace', args: ['N/A', '0'] }],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
