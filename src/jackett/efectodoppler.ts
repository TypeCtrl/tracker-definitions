import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'efectodoppler',
  name: 'Efecto Doppler',
  description: 'Efecto Doppler is a SPANISH Private Torrent Tracker for MUSIC',
  language: 'es-ES',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://efectodoppler.pw/'],
  caps: {
    modes: {
      search: ['q'],
      'music-search': ['q', 'album', 'artist', 'label', 'year'],
    },
    categorymappings: [{ id: '1', cat: 'Audio' }],
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'time',
      options: { time: 'created', seeders: 'seeders', size: 'size' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  login: {
    path: 'login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      keeplogged: 1,
    },
    error: [{ selector: 'form > span.warning' }],
    test: { path: 'index.php', selector: 'a[href^="logout.php?auth="]' },
  },
  ratio: { path: 'index.php', selector: 'li#stats_ratio span.stat span' },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      artistname: '{{ if .Query.Artist }}{{ .Query.Artist }}{{else}}{{end}}',
      groupname: '{{ if .Query.Artist }}{{else}}{{ .Keywords }}{{end}}',
      order_by: '{{ .Config.sort }}',
      order_way: '{{ .Config.type }}',
    },
    rows: { selector: 'tr.torrent' },
    fields: {
      category: { text: 1 },
      artist: { selector: 'a[href^="artist.php?id="]', optional: true },
      title: {
        selector: 'a[href^="torrents.php?id="]',
        filters: [{ name: 'prepend', args: '{{.Result.artist}} - ' }],
      },
      details: {
        selector: 'a[href^="torrents.php?id="]',
        attribute: 'href',
      },
      banner: { selector: 'div.group_image img', attribute: 'src' },
      download: {
        selector: 'a[href^="torrents.php?action=download&id="]',
        attribute: 'href',
      },
      description: { selector: 'div.torrent_info' },
      files: { selector: 'td:nth-child(3)' },
      date: {
        selector: 'td:nth-child(4) span',
        attribute: 'title',
        filters: [{ name: 'dateparse', args: 'Jan 02 2006, 15:04' }],
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: {
        case: {
          'strong.torrent_label[title*="Neutral"]': 0,
          'strong.torrent_label[title*="Oro"]': 0,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: { 'strong.torrent_label[title*="Neutral"]': 0, '*': 1 },
      },
    },
  },
  source: 'jackett',
};
