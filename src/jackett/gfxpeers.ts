import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'gfxpeers',
  name: 'GFXPeers',
  description:
    'GFXPeers is a ratio-based torrent tracker for all things graphic design and visual effects',
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
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: '/login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      keeplogged: '1',
    },
    error: [{ selector: '.auth_form > .warning' }],
    test: { path: '/torrents.php' },
  },
  search: {
    paths: [{ path: '/torrents.php' }],
    inputs: {
      $raw: '{{range .Categories}}filter_cat[{{.}}]=1&{{end}}',
      searchstr: '{{ .Query.Keywords }}',
      order_by: 'time',
      order_way: 'desc',
      action: 'advanced',
      searchsubmit: '1',
    },
    rows: { selector: 'table#torrent_table > tbody > tr.torrent' },
    fields: {
      download: {
        selector: 'a[href^="torrents.php?action=download&id="]',
        attribute: 'href',
      },
      title: { selector: 'a[href^="torrents.php?id="]' },
      downloadvolumefactor: { case: { 'strong.tl_free': '0', '*': '1' } },
      uploadvolumefactor: { case: { '*': '1' } },
      category: {
        selector: 'a[href^="torrents.php?filter_cat"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '\\[(\\d+?)\\]' }],
      },
      details: {
        selector: 'a[href^="torrents.php?id="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(6)' },
      files: { selector: 'td:nth-child(3)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      date: { selector: 'td:nth-child(4)' },
    },
  },
  source: 'jackett',
};
