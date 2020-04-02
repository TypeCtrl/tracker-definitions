import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'ettv',
  name: 'ETTV',
  description:
    'ETTV is a Public torrent site for TV / MOVIES, home of the  ETTV, ETHD and DTOne groups.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: [
    'https://www.ettvdl.com/',
    'https://ettv.unblockit.pro/',
    'https://ettv.unblockninja.com/',
    'https://ettv.root.yt/',
    'https://ettv.black-mirror.xyz/',
    'https://ettv.unblocked.casa/',
    'https://ettv.proxyportal.fun/',
    'https://ettv.uk-unblock.xyz/',
    'https://ettv.ind-unblock.xyz/',
  ],
  legacylinks: ['https://www.ettv.tv/', 'https://www.ettv.to/'],
  caps: {
    categorymappings: [
      { id: '88', cat: 'XXX', desc: 'Adult - Books' },
      { id: '84', cat: 'XXX', desc: 'Adult - Games' },
      { id: '82', cat: 'XXX', desc: 'Adult - HD-Movies' },
      { id: '83', cat: 'XXX', desc: 'Adult - Hentai' },
      { id: '86', cat: 'XXX', desc: 'Adult - Magazines' },
      { id: '81', cat: 'XXX', desc: 'Adult - Movies' },
      { id: '87', cat: 'XXX', desc: 'Adult - Other' },
      { id: '85', cat: 'XXX', desc: 'Adult - Pictures' },
      { id: '74', cat: 'TV/Anime', desc: 'Anime - Dubbed/Subbed' },
      { id: '73', cat: 'TV/Anime', desc: 'Anime - Movies' },
      { id: '75', cat: 'TV/Anime', desc: 'Anime - Others' },
      { id: '56', cat: 'Audio/Audiobook', desc: 'Books - Audio' },
      { id: '55', cat: 'Books/Comics', desc: 'Books - Comics' },
      { id: '53', cat: 'Books/Ebook', desc: 'Books - Ebooks' },
      { id: '54', cat: 'Books/Magazines', desc: 'Books - Magazines' },
      { id: '68', cat: 'Books/Other', desc: 'Books - Others' },
      { id: '58', cat: 'PC/Games', desc: 'Games - Android' },
      { id: '71', cat: 'PC/Games', desc: 'Games - Others' },
      { id: '57', cat: 'PC/Games', desc: 'Games - Windows' },
      { id: '49', cat: 'Movies/3D', desc: 'Movies - 3D' },
      {
        id: '66',
        cat: 'Movies/BluRay',
        desc: 'Movies - BluRay Disc/Remux',
      },
      { id: '91', cat: 'Movies', desc: 'Movies - Bollywood' },
      { id: '65', cat: 'Movies', desc: 'Movies - CAM/TS' },
      { id: '80', cat: 'TV/Documentary', desc: 'Documentary' },
      { id: '51', cat: 'Movies', desc: 'Movies - Dubs/Dual Audio' },
      { id: '67', cat: 'Movies/DVD', desc: 'Movies - DVDR' },
      { id: '1', cat: 'Movies/HD', desc: 'Movies - HD 1080p' },
      { id: '2', cat: 'Movies/HD', desc: 'Movies - HD 720p' },
      { id: '76', cat: 'Movies/HD', desc: 'Movies - HEVC/x265' },
      { id: '47', cat: 'Movies/HD', desc: 'Movies - X264/H264' },
      { id: '3', cat: 'Movies/UHD', desc: 'Movies - UltraHD/4K' },
      { id: '42', cat: 'Movies/SD', desc: 'Movies - XviD' },
      { id: '60', cat: 'Audio/Lossless', desc: 'Music - FLAC' },
      { id: '59', cat: 'Audio/MP3', desc: 'Music - MP3' },
      { id: '61', cat: 'Audio/Video', desc: 'Music - Music Videos' },
      { id: '69', cat: 'Audio/Other', desc: 'Music - Others' },
      { id: '95', cat: 'Other/Misc', desc: 'Others - Misc' },
      { id: '78', cat: 'Other', desc: 'Others - Unsorted' },
      { id: '63', cat: 'PC/Phone-Android', desc: 'Software - Android' },
      { id: '64', cat: 'PC/Mac', desc: 'Software - Mac' },
      { id: '70', cat: 'PC', desc: 'Software - Others' },
      { id: '62', cat: 'PC/0day', desc: 'Software - Windows' },
      { id: '94', cat: 'Books', desc: 'Tutorials - Tutorials' },
      { id: '79', cat: 'TV/Documentary', desc: 'Documentary' },
      { id: '41', cat: 'TV/HD', desc: 'TV - HD/X264/H264' },
      { id: '77', cat: 'TV/HD', desc: 'TV - HEVC/x265' },
      { id: '5', cat: 'TV/HD', desc: 'TV - SD/X264/H264' },
      { id: '50', cat: 'TV/SD', desc: 'TV - SD/XVID' },
      { id: '72', cat: 'TV/Sport', desc: 'TV - Sport' },
      { id: '7', cat: 'TV', desc: 'TV - TV Packs' },
      { id: '89', cat: 'TV/UHD', desc: 'TV - UltraHD/4K' },
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
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  search: {
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      sort: '{{ .Config.sort }}',
      order: '{{ .Config.type }}',
      incldead: 1,
    },
    keywordsfilters: [
      { name: 'replace', args: ['-', ' '] },
      { name: 'replace', args: ['+', ' '] },
      { name: 're_replace', args: ['(\\w+)', ' +$1'] },
      { name: 're_replace', args: ['\\s+', ' '] },
    ],
    rows: {
      selector: 'div.myFrame-content > div > table > tbody > tr[class]',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      download: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      title: {
        selector: 'a[href^="/torrent/"][title]',
        attribute: 'title',
        filters: [{ name: 're_replace', args: ['( torrent)$', ''] }],
      },
      category: { text: 78 },
      'category|noappend': {
        optional: true,
        selector: 'a[href^="/torrents.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      date: { selector: 'td:nth-child(3)' },
      size: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'replace', args: ['N/A', '0 B'] }],
      },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
    paths: [
      {
        path: '{{ if .Keywords }}torrents-search.php{{else}}torrents.php{{end}}',
      },
    ],
  },
  source: 'jackett',
};
