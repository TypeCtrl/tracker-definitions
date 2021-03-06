import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'gfxpeers',
  name: 'GFXPeers',
  description: 'GFXPeers is a ratio-based torrent tracker for all things graphic design and visual effects',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://gfxpeers.net/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'PC/0day', desc: 'Applications' },
      { id: '2', cat: 'PC/0day', desc: 'Plug-ins' },
      { id: '3', cat: 'Other', desc: 'Tutorials' },
      { id: '4', cat: 'Other', desc: 'Textures' },
      { id: '5', cat: 'Other', desc: '3D Models' },
      { id: '6', cat: 'Other', desc: 'Game-Dev' },
      { id: '7', cat: 'Other', desc: 'Miscellaneous' },
    ],
    modes: { search: ['q'] },
  },
  login: {
    path: 'login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      keeplogged: 1,
    },
    error: [{ selector: '.auth_form > .warning' }],
    test: { path: 'torrents.php' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{ range .Categories }}filter_cat[{{.}}]=1&{{end}}',
      searchstr: '{{ .Keywords }}',
      order_by: 'time',
      order_way: 'desc',
      action: 'advanced',
      searchsubmit: 1,
    },
    rows: { selector: 'table#torrent_table > tbody > tr.torrent' },
    fields: {
      category: {
        selector: 'a[href^="torrents.php?filter_cat"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '\\[(\\d+?)\\]' }],
      },
      title: { selector: 'a[href^="torrents.php?id="]' },
      details: {
        selector: 'a[href^="torrents.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="torrents.php?action=download&id="]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(3)' },
      date: { selector: 'td:nth-child(4)' },
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: { case: { 'strong.tl_free': 0, '*': 1 } },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 0.6 },
      minimumseedtime: { text: 259200 },
    },
  },
  source: 'jackett',
};
