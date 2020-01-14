import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'limetorrents',
  name: 'LimeTorrents',
  description: 'LimeTorrents is a Public general torrent index with mostly verified torrents',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: [
    'https://www.limetorrents.info/',
    'https://www.limetorrents.asia/',
    'https://www.limetorrents.co/',
    'https://www.limetorrents.zone/',
    'https://limetor.com/',
    'https://www.limetor.pro/',
  ],
  legacylinks: [
    'https://www.limetorrents.io/',
    'https://www.limetorrents.cc/',
    'https://www.limetorrents.me/',
  ],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'TV shows', cat: 'TV' },
      { id: 'Movies', cat: 'Movies' },
      { id: 'Music', cat: 'Audio' },
      { id: 'Games', cat: 'Console' },
      { id: 'Applications', cat: 'PC/0day' },
      { id: 'Other', cat: 'Other/Misc' },
      { id: 'Anime', cat: 'TV/Anime' },
    ],
  },
  settings: [
    {
      name: 'downloadlink',
      type: 'select',
      label: 'Download link',
      default: 'magnet:',
      options: {
        'http://itorrents.org/': 'iTorrents.org',
        'magnet:': 'magnet',
      },
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'date',
      options: { date: 'created', seeds: 'seeders', size: 'size' },
    },
  ],
  download: {
    selector: 'a.csprite_dltorrent[href^="{{ .Config.downloadlink }}"]',
    attribute: 'href',
  },
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}search/all/{{ .Keywords }}/{{ .Config.sort }}/1/{{else}}/latest100{{end}}',
      },
    ],
    keywordsfilters: [{ name: 're_replace', args: ['S[0-9]{2}([^E]|$)', ''] }],
    rows: { selector: '.table2 > tbody > tr[bgcolor]' },
    fields: {
      title: { selector: 'div.tt-name > a[href^="/"]' },
      details: {
        selector: 'div.tt-name > a[href^="/"]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(3)' },
      seeders: { selector: '.tdseed' },
      leechers: { selector: '.tdleech' },
      date: {
        selector: 'td:nth-child(2)',
        filters: [
          { name: 'split', args: ['-', 0] },
          { name: 'replace', args: ['Last Month', '1 month ago'] },
          { name: 'replace', args: ['+', ' ago'] },
        ],
      },
      download: {
        selector: 'div.tt-name > a[href^="/"]',
        attribute: 'href',
      },
      category: {
        optional: true,
        selector: 'td:nth-child(2)',
        filters: [
          { name: 'split', args: ['-', 1] },
          { name: 'replace', args: [' in ', ''] },
          { name: 'replace', args: ['.', ''] },
        ],
      },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
