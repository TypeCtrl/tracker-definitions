import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentdownload',
  name: 'TorrentDownload',
  description: 'TorrentDownload is a Public general torrent index',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.torrentdownload.info/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'TVshows', cat: 'TV' },
      { id: 'Television', cat: 'TV' },
      { id: 'Anime', cat: 'TV/Anime' },
      { id: 'MoviesDocumentary', cat: 'TV/Documentary' },
      { id: 'Movies', cat: 'Movies' },
      { id: 'VideoMobile', cat: 'Movies' },
      { id: 'Music', cat: 'Audio' },
      { id: 'AudioBooks', cat: 'Audio/Audiobook' },
      { id: 'Games', cat: 'Console' },
      { id: 'Applications', cat: 'PC/0day' },
      { id: 'Other', cat: 'Other/Misc' },
      { id: 'OtherUnsorted', cat: 'Other/Misc' },
    ],
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site (Applies only to Search with Keywords)',
      default: 'd',
      options: { d: 'created', s: 'seeders', _: 'size' },
    },
  ],
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}search{{ re_replace .Config.sort "_" "" }}?q={{ .Keywords }}{{else}}latest{{end}}',
      },
    ],
    rows: { selector: 'table.table2 > tbody > tr:has(span.smallish)' },
    fields: {
      category: {
        selector: 'div.tt-name > span.smallish',
        optional: true,
        filters: [{ name: 're_replace', args: ['[^A-Za-z]+', ''] }],
      },
      title: { selector: 'div.tt-name > a[href^="/"]' },
      details: {
        selector: 'div.tt-name > a[href^="/"]',
        attribute: 'href',
      },
      download: {
        selector: 'div.tt-name > a[href^="/"]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(2)',
        filters: [
          { name: 'replace', args: ['right ', ''] },
          { name: 'replace', args: ['Last Month', '1 month ago'] },
          { name: 'replace', args: ['+', ' ago'] },
        ],
      },
      size: { selector: 'td:nth-child(3)' },
      seeders: { selector: 'td.tdseed' },
      leechers: { selector: 'td.tdleech' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};