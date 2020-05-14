import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'totallykids',
  name: 'TotallyKids',
  description: 'TotallyKids (TK) is a Private Torrent Tracker for CHILDRENS MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://www.totallykids.tv/'],
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'info_results',
      type: 'info',
      label: 'Search results',
      default:
        'Only the <b>xBtit_Default</b> style is supported with this indexer.<br />For best results, increase the torrents number in your profile to 100.<br />Default is 15.',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'data',
      options: {
        data: 'created',
        seeds: 'seeders',
        size: 'size',
        filename: 'title',
      },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'DESC',
      options: { DESC: 'desc', ASC: 'asc' },
    },
  ],
  caps: {
    categorymappings: [
      { id: '5', cat: 'Audio', desc: 'Music' },
      { id: '6', cat: 'Audio/Audiobook', desc: 'Audiobooks' },
      { id: '4', cat: 'Books/Comics', desc: 'Comics' },
      { id: '7', cat: 'Books/Ebook', desc: 'E-Books' },
      { id: '16', cat: 'Movies', desc: 'Family Movies' },
      { id: '23', cat: 'Movies', desc: 'Teen Movies' },
      { id: '8', cat: 'PC/Games', desc: 'Games' },
      { id: '1', cat: 'TV', desc: 'Kids' },
      { id: '2', cat: 'TV', desc: 'Family' },
      { id: '15', cat: 'TV', desc: 'Educational' },
      { id: '24', cat: 'TV', desc: 'Teens' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
      'music-search': ['q'],
    },
  },
  login: {
    path: 'index.php?page=login',
    method: 'form',
    form: 'form[action^="index.php?page=login"]',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [{ selector: 'tr td span[style="color:#FF0000;"]' }],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      page: 'torrents',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      category: '{{ if .Categories }}{{ range .Categories }}{{.}};{{end}}{{else}}0{{end}}',
      options: '{{ if .Query.IMDBID }}2{{else}}0{{end}}',
      active: 0,
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.lista tr td table.lista tr:has(a[href^="index.php?page=torrent-details"])',
    },
    fields: {
      title: { selector: 'td a[href^="index.php?page=torrent-details"]' },
      details: {
        selector: 'td a[href^="index.php?page=torrent-details"]',
        attribute: 'href',
      },
      category: {
        selector: 'td a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      download: {
        selector: 'td a[href^="download.php"]',
        attribute: 'href',
      },
      imdb: {
        optional: true,
        selector: 'a[href*="www.imdb.com/title/tt"]',
        attribute: 'href',
        filters: [
          {
            name: 'replace',
            args: [" http://anonym.to?javascript:popdetails('", ''],
          },
          { name: 'replace', args: ["');", ''] },
        ],
      },
      banner: {
        selector: 'td a[href^="index.php?page=torrent-details"]',
        attribute: 'onmouseover',
        filters: [
          { name: 'regexp', args: 'src=(.+?) width' },
          { name: 'replace', args: ['torrentimg/nocover.jpg', ''] },
        ],
      },
      size: { selector: 'td:nth-child(10)' },
      date: {
        selector: 'td:nth-child(5):not(:contains("day"))',
        optional: true,
        filters: [
          { name: 're_replace', args: ['[,]|[\\s+]|[// ],\\/g', ' '] },
          { name: 'dateparse', args: 'January 02  2006  03:04:05 PM' },
        ],
      },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      grabs: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: {
        case: { 'img[src="gold/gold.gif"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
