import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentdownload',
  name: 'TorrentDownload',
  description: 'TorrentDownload is a Public general torrent index',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: [
    'https://www.torrentdownload.info/',
    'https://torrentdownload.unblockit.one/',
    'https://torrentdownload.black-mirror.xyz/',
    'https://torrentdownload.unblocked.casa/',
    'https://torrentdownload.proxyportal.fun/',
    'https://torrentdownload.uk-unblock.xyz/',
    'https://torrentdownload.ind-unblock.xyz/',
  ],
  legacylinks: ['https://torrentdownload.unblockit.pro/'],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
    categorymappings: [
      { id: 'TV', cat: 'TV' },
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
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Access this tracker with your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button<li>Refresh the page by pressing <b>F5</b><li>Select the <b>Headers</b> tab<li>Find <b>'cookie:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole cookie string <i>(everything after 'cookie: ')</i> and <b>Paste</b> here.</ol>",
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site (Applies only to Search with Keywords)',
      default: 'd',
      options: { d: 'created', s: 'seeders', _: 'size' },
    },
  ],
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  login: { method: 'cookie', test: { path: '/' } },
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}search{{ re_replace .Config.sort "_" "" }}?q={{ .Keywords }}{{else}}{{end}}',
      },
    ],
    rows: { selector: 'table.table2 > tbody > tr:has(span.smallish)' },
    fields: {
      category: {
        selector: 'div.tt-name > span.smallish',
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
