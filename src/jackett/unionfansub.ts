import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'unionfansub',
  name: 'Union Fansub',
  description: 'Union Fansub is a SPANISH Semi private torrent site focused on ANIME',
  language: 'es-ES',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://torrent.unionfansub.com/'],
  legacylinks: ['http://torrent.unionfansub.com/'],
  caps: {
    categorymappings: [
      { id: '13', cat: 'Movies', desc: 'Animación' },
      { id: '1', cat: 'TV/Anime', desc: 'Anime' },
      { id: '2', cat: 'TV/Anime', desc: 'Anime/ISO' },
      { id: '3', cat: 'TV/Anime', desc: 'Anime/RAW' },
      { id: '10', cat: 'Audio', desc: 'BSO / OST' },
      { id: '15', cat: 'Movies', desc: 'Cine' },
      { id: '14', cat: 'TV/Documentary', desc: 'Documentales' },
      { id: '9', cat: 'TV/Anime', desc: 'Dorama' },
      { id: '4', cat: 'TV/Anime', desc: 'Hentai' },
      { id: '18', cat: 'TV/Anime', desc: 'Hentai CG' },
      { id: '6', cat: 'TV/Anime', desc: 'Hentai/ISO' },
      { id: '5', cat: 'TV/Anime', desc: 'Hentai/RAW' },
      { id: '16', cat: 'TV/Anime', desc: 'J-Music' },
      { id: '7', cat: 'TV/Anime', desc: 'Manga' },
      { id: '8', cat: 'TV/Anime', desc: 'Manga/Hentai' },
      { id: '17', cat: 'Books', desc: 'Novelas' },
      { id: '12', cat: 'TV/Other', desc: 'Otros' },
      { id: '11', cat: 'TV', desc: 'Programas' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 4,
      options: { '1': 'title', '4': 'created', '5': 'size', '7': 'seeders' },
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
    path: 'https://foro.unionfansub.com/member.php',
    method: 'post',
    inputs: {
      quick_username: '{{ .Config.username }}',
      quick_password: '{{ .Config.password }}',
      action: 'do_login',
      url: 'https://torrent.unionfansub.com/',
      quick_login: 1,
      quick_remember: 'yes',
    },
    error: [{ selector: 'div.error' }],
    test: { path: '/', selector: 'div#statusbar' },
  },
  search: {
    inputs: {
      $raw: '{{ range .Categories }}&c{{.}}=1{{end}}',
      incldead: 1,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
      search: '{{ .Keywords }}',
    },
    rows: { selector: '.tlist tr:not(:first-child)' },
    fields: {
      category: {
        selector: 'td:nth-child(1) a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'td:nth-child(2) a' },
      details: { selector: 'td:nth-child(2) a', attribute: 'href' },
      download: {
        selector: 'td:nth-child(2) a',
        attribute: 'href',
        filters: [
          {
            name: 'replace',
            args: ['details.php?id=', 'download.php?torrent='],
          },
          { name: 'replace', args: ['&hit=', '&aviso='] },
        ],
      },
      files: { selector: 'td:nth-last-child(8)' },
      size: { selector: 'td:nth-last-child(5)' },
      grabs: { selector: 'td:nth-last-child(4)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      date: {
        selector: 'td:nth-last-child(6)',
        filters: [{ name: 'timeago' }],
      },
      downloadvolumefactor: { text: 1 },
      uploadvolumefactor: { text: 1 },
    },
    paths: [{ path: 'browse.php' }],
  },
  source: 'jackett',
};
