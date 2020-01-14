import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'prostylex',
  name: 'ProStyleX',
  description: 'ProStyleX is a Public torrent site for 0Day and General',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://prostylex.org/'],
  legacylinks: ['http://prostylex.com/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies/SD', desc: 'Movies - Divx/Xvid' },
      { id: '2', cat: 'Movies/WEBDL', desc: 'Movies - h.264/x264' },
      { id: '3', cat: 'Movies/HD', desc: 'Movies - HD' },
      { id: '4', cat: 'Movies/DVD', desc: 'Movies - DVD' },
      { id: '5', cat: 'Movies/Other', desc: 'Movies - Cam/TS' },
      { id: '6', cat: 'Movies/Foreign', desc: 'Movies - Non-English' },
      { id: '7', cat: 'Movies/3D', desc: 'Movies - 3D' },
      { id: '8', cat: 'Movies/UHD', desc: 'Movies - 4K' },
      { id: '9', cat: 'Movies/Other', desc: 'Movies - Dubs/Dual Audio' },
      { id: '10', cat: 'Movies/HD', desc: 'Movies - HEVC/x265' },
      { id: '12', cat: 'TV/WEB-DL', desc: 'TV - x264' },
      { id: '13', cat: 'TV/SD', desc: 'TV - Xvid' },
      { id: '14', cat: 'TV/HD', desc: 'TV - HD' },
      { id: '15', cat: 'TV/Other', desc: 'TV - Packs' },
      { id: '16', cat: 'TV/Sport', desc: 'TV - Sports' },
      { id: '17', cat: 'TV/HD', desc: 'TV - HEVC/x265' },
      { id: '20', cat: 'Audio/MP3', desc: 'Music - Audio' },
      { id: '21', cat: 'Audio/Video', desc: 'Music - Video' },
      { id: '22', cat: 'Audio/Other', desc: 'Music - Other' },
      { id: '40', cat: 'XXX', desc: 'XXX - Video' },
      { id: '42', cat: 'XXX', desc: 'XXX - HD Video' },
      { id: '43', cat: 'XXX', desc: 'XXX - Movie' },
      { id: '44', cat: 'XXX', desc: 'XXX - Anime/Hentai' },
      { id: '45', cat: 'XXX', desc: 'XXX - Pics/Comix/Book' },
      { id: '46', cat: 'XXX', desc: 'XXX - Games' },
      { id: '53', cat: 'Audio/Audiobook', desc: 'Books - Audio books' },
      { id: '54', cat: 'Books/Comics', desc: 'Books - Comics' },
      { id: '55', cat: 'Books/Ebook', desc: 'Books - Ebooks' },
      { id: '56', cat: 'Books/Magazines', desc: 'Books - Magazines' },
      { id: '57', cat: 'Books/Other', desc: 'Books - Other' },
      { id: '58', cat: 'Other', desc: 'Pictures - Other' },
      { id: '59', cat: 'Other', desc: 'Pictures - Wallpapers' },
      { id: '65', cat: 'TV/Anime', desc: 'Anime - All' },
      { id: '68', cat: 'TV/Anime', desc: 'Anime - HEVC/x265' },
      { id: '90', cat: 'PC/ISO', desc: 'Games - PC-ISO' },
      { id: '91', cat: 'Console', desc: 'Games - PS2' },
      { id: '92', cat: 'Console/PSP', desc: 'Games - PSP' },
      { id: '93', cat: 'Console/PS3', desc: 'Games - PS3' },
      { id: '94', cat: 'PC/Games', desc: 'Games - PC-RIP' },
      { id: '95', cat: 'Console/Xbox360', desc: 'Games - Xbox360' },
      { id: '96', cat: 'Console/Other', desc: 'Games - Other' },
      { id: '97', cat: 'Console/Wii', desc: 'Games - Wii' },
      { id: '98', cat: 'Console/NDS', desc: 'Games - Nintendo DS' },
      { id: '99', cat: 'PC/Phone-Android', desc: 'Games - Android' },
      { id: '103', cat: 'Console', desc: 'Games - Switch' },
      { id: '120', cat: 'PC/0day', desc: 'Apps - Windows' },
      { id: '121', cat: 'PC', desc: 'Apps - Linux' },
      { id: '122', cat: 'PC/Phone-Android', desc: 'Apps - Android' },
      { id: '123', cat: 'PC/Mac', desc: 'Apps - Mac' },
      { id: '124', cat: 'PC', desc: 'Apps - Other' },
      { id: '130', cat: 'Other', desc: 'Other - Other' },
      { id: '132', cat: 'Other', desc: 'Other - Nulled Script' },
      { id: '134', cat: 'Other', desc: 'Other - Tutorials' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'id',
      options: {
        id: 'created',
        seeders: 'seeders',
        size: 'size',
        name: 'title',
      },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  download: { selector: 'a[href^="magnet:?"]', attribute: 'href' },
  search: {
    paths: [{ path: 'torrents-search.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      cat: 0,
      lang: 0,
      sort: '{{ .Config.sort }}',
      order: '{{ .Config.type }}',
    },
    rows: { selector: 'tr.t-row' },
    fields: {
      title: { selector: 'td a[href^="torrents-details.php?id="]' },
      category: {
        selector: 'td a[href^="torrents.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'td a[href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'td a[href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      date: {
        selector: 'th:nth-child(5)',
        filters: [{ name: 'timeago' }],
      },
      size: { selector: 'th:nth-child(4)' },
      seeders: { selector: 'th:nth-child(6)' },
      leechers: { selector: 'th:nth-child(7)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
