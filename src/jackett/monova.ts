import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'monova',
  name: 'Monova',
  description: 'Monova is a Public torrent index.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://monova.org/', 'https://monova.to/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'video-camera', cat: 'Movies' },
      { id: 'music', cat: 'Audio' },
      { id: 'book', cat: 'Books' },
      { id: 'gamepad', cat: 'PC/Games' },
      { id: 'cog', cat: 'PC/0day' },
      { id: 'venus-mars', cat: 'XXX' },
      { id: 'list', cat: 'Other' },
      { id: 'picture-o', cat: 'Other/Misc' },
    ],
  },
  settings: [],
  download: { selector: 'a#download-file' },
  search: {
    paths: [
      {
        path: '{{if .Keywords}}search?term={{.Keywords}}?page=1{{else}}video?page=1{{end}}',
      },
      {
        path: '{{if .Keywords}}search?term={{.Keywords}}?page=2{{else}}video?page=2{{end}}',
      },
      {
        path: '{{if .Keywords}}search?term={{.Keywords}}?page=3{{else}}video?page=3{{end}}',
      },
      {
        path: '{{if .Keywords}}search?term={{.Keywords}}?page=4{{else}}video?page=4{{end}}',
      },
      {
        path: '{{if .Keywords}}search?term={{.Keywords}}?page=5{{else}}video?page=5{{end}}',
      },
    ],
    rows: { selector: 'tr.desktop', filters: [{ name: 'andmatch' }] },
    fields: {
      title: { selector: 'td.torrent_name a' },
      category: {
        selector: 'td.torrent_name i',
        attribute: 'class',
        filters: [{ name: 'replace', args: ['fa fa-', ''] }],
      },
      details: { selector: 'td.torrent_name a', attribute: 'href' },
      download: { selector: 'td.torrent_name a', attribute: 'href' },
      size: {
        optional: true,
        selector: 'td.center-align',
        filters: [{ name: 'replace', args: ['N/A', '500 MB'] }],
      },
      seeders: { text: '1' },
      leechers: { text: '1' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
      date: {
        optional: true,
        selector: 'td.torrent_name',
        remove: 'a',
        filters: [
          { name: 'replace', args: ['added ', ''] },
          { name: 'replace', args: [' ago.*$', ''] },
          { name: 'replace', args: ['min.', 'minutes'] },
          { name: 'timeago' },
        ],
      },
    },
  },
  source: 'jackett',
};
