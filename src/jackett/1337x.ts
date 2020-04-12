import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: '1337x',
  name: '1337x',
  description: '1337X is a Public torrent site that offers verified torrent downloads',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: [
    'https://1337x.to/',
    'https://1337x.gd/',
    'https://1337x.is/',
    'https://1337x.st/',
    'https://x1337x.ws/',
    'https://x1337x.eu/',
    'https://x1337x.se/',
    'https://1337x.unblockit.one/',
    'https://1337.root.yt/',
    'https://1337x.unblockninja.com/',
    'https://1337x.black-mirror.xyz/',
    'https://1337x.unblocked.casa/',
    'https://1337x.proxyportal.fun/',
    'https://1337x.uk-unblock.xyz/',
    'https://1337x.ind-unblock.xyz/',
  ],
  legacylinks: ['https://1337x.unblocked.earth/', 'https://1337x.unblockit.pro/'],
  caps: {
    categorymappings: [
      { id: '28', cat: 'TV/Anime', desc: 'Anime/Anime' },
      { id: '78', cat: 'TV/Anime', desc: 'Anime/Dual Audio' },
      { id: '79', cat: 'TV/Anime', desc: 'Anime/Dubbed' },
      { id: '80', cat: 'TV/Anime', desc: 'Anime/Subbed' },
      { id: '81', cat: 'TV/Anime', desc: 'Anime/Raw' },
      { id: '22', cat: 'Audio/MP3', desc: 'Music/MP3' },
      { id: '23', cat: 'Audio/Lossless', desc: 'Music/Lossless' },
      { id: '24', cat: 'Audio', desc: 'Music/DVD' },
      { id: '25', cat: 'Audio/Video', desc: 'Music/Video' },
      { id: '26', cat: 'Audio', desc: 'Music/Radio' },
      { id: '27', cat: 'Audio/Other', desc: 'Music/Other' },
      { id: '53', cat: 'Audio', desc: 'Music/Album' },
      { id: '58', cat: 'Audio', desc: 'Music/Box set' },
      { id: '59', cat: 'Audio', desc: 'Music/Discography' },
      { id: '60', cat: 'Audio', desc: 'Music/Single' },
      { id: '68', cat: 'Audio', desc: 'Music/Concerts' },
      { id: '69', cat: 'Audio', desc: 'Music/AAC' },
      { id: '1', cat: 'Movies/DVD', desc: 'Movies/DVD' },
      { id: '2', cat: 'Movies/SD', desc: 'Movies/Divx/Xvid' },
      { id: '3', cat: 'Movies', desc: 'Movies/SVCD/VCD' },
      { id: '4', cat: 'Movies/Foreign', desc: 'Movies/Dubs/Dual Audio' },
      { id: '42', cat: 'Movies/HD', desc: 'Movies/HD' },
      { id: '54', cat: 'Movies/HD', desc: 'Movies/h.264/x264' },
      { id: '55', cat: 'Movies', desc: 'Movies/Mp4' },
      { id: '66', cat: 'Movies/3D', desc: 'Movies/3D' },
      { id: '70', cat: 'Movies/HD', desc: 'Movies/HEVC/x265' },
      { id: '73', cat: 'Movies', desc: 'Movies/Bollywood' },
      { id: '76', cat: 'Movies/UHD', desc: 'Movies/UHD' },
      { id: '5', cat: 'TV', desc: 'TV/DVD' },
      { id: '6', cat: 'TV', desc: 'TV/Divx/Xvid' },
      { id: '7', cat: 'TV', desc: 'TV/SVCD/VCD' },
      { id: '41', cat: 'TV/HD', desc: 'TV/HD' },
      { id: '71', cat: 'TV', desc: 'TV/HEVC/x265' },
      { id: '74', cat: 'TV', desc: 'TV/Cartoons' },
      { id: '75', cat: 'TV/SD', desc: 'TV/SD' },
      { id: '9', cat: 'TV/Documentary', desc: 'TV/Documentary' },
      { id: '18', cat: 'PC', desc: 'Apps/PC Software' },
      { id: '19', cat: 'PC/Mac', desc: 'Apps/Mac' },
      { id: '20', cat: 'PC', desc: 'Apps/Linux' },
      { id: '21', cat: 'PC', desc: 'Apps/Other' },
      { id: '56', cat: 'PC/Phone-Android', desc: 'Apps/Android' },
      { id: '57', cat: 'PC/Phone-IOS', desc: 'Apps/iOS' },
      { id: '10', cat: 'PC/Games', desc: 'Games/PC Game' },
      { id: '11', cat: 'Console/Other', desc: 'Games/PS2' },
      { id: '12', cat: 'Console/PSP', desc: 'Games/PSP' },
      { id: '13', cat: 'Console/Xbox', desc: 'Games/Xbox' },
      { id: '14', cat: 'Console/Xbox360', desc: 'Games/Xbox360' },
      { id: '15', cat: 'Console/Other', desc: 'Games/PS1' },
      { id: '16', cat: 'Console/Other', desc: 'Games/Dreamcast' },
      { id: '17', cat: 'PC/Phone-Other', desc: 'Games/Other' },
      { id: '43', cat: 'Console/PS3', desc: 'Games/PS3' },
      { id: '44', cat: 'Console/Wii', desc: 'Games/Wii' },
      { id: '45', cat: 'Console/NDS', desc: 'Games/DS' },
      { id: '46', cat: 'Console', desc: 'Games/GameCube' },
      { id: '72', cat: 'Console/3DS', desc: 'Games/3DS' },
      { id: '77', cat: 'Console/PS4', desc: 'Games/PS4' },
      { id: '82', cat: 'Console/Other', desc: 'Games/Switch' },
      { id: '48', cat: 'XXX/DVD', desc: 'XXX/Video' },
      { id: '49', cat: 'XXX/Imageset', desc: 'XXX/Picture' },
      { id: '50', cat: 'XXX', desc: 'XXX/Magazine' },
      { id: '51', cat: 'XXX', desc: 'XXX/Hentai' },
      { id: '67', cat: 'XXX', desc: 'XXX/Games' },
      { id: '33', cat: 'Other', desc: 'Other/Emulation' },
      { id: '34', cat: 'Books', desc: 'Other/Tutorial' },
      { id: '35', cat: 'Other', desc: 'Other/Sounds' },
      { id: '36', cat: 'Books/Ebook', desc: 'Other/E-books' },
      { id: '37', cat: 'Other', desc: 'Other/Images' },
      { id: '38', cat: 'Other', desc: 'Other/Mobile Phone' },
      { id: '39', cat: 'Books/Comics', desc: 'Other/Comics' },
      { id: '40', cat: 'Other/Misc', desc: 'Other/Other' },
      { id: '47', cat: 'Other', desc: 'Other/Nulled Script' },
      { id: '52', cat: 'Audio/Audiobook', desc: 'Other/Audiobook' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q', 'album', 'artist', 'label', 'year'],
    },
  },
  settings: [
    {
      name: 'downloadlink',
      type: 'select',
      label: 'Download link',
      default: 'magnet:',
      options: {
        'http://itorrents.org/': 'iTorrents.org',
        'http://torrage.info/': 'Torrage.info',
        'http://btcache.me/': 'BTcache.me',
        'magnet:': 'magnet',
      },
    },
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
  download: {
    selector: 'ul li a[href^="{{ .Config.downloadlink }}"]',
    attribute: 'href',
  },
  search: {
    paths: [
      {
        path:
          '{{if or (.Query.Album) (.Query.Artist) (.Keywords) }}sort-search{{else}}cat/Movies{{end}}{{if or (.Query.Album) (.Query.Artist) }}/{{ or (.Query.Album) (.Query.Artist) }}{{else}}/{{ .Keywords }}{{end}}{{if or (.Query.Album) (.Query.Artist) (.Keywords) }}/{{else}}{{end}}{{ .Config.sort }}/{{ .Config.type }}/1/',
      },
      {
        path:
          '{{if or (.Query.Album) (.Query.Artist) (.Keywords) }}sort-search{{else}}cat/TV{{end}}{{if or (.Query.Album) (.Query.Artist) }}/{{ or (.Query.Album) (.Query.Artist) }}{{else}}/{{ .Keywords }}{{end}}{{if or (.Query.Album) (.Query.Artist) (.Keywords) }}/{{else}}{{end}}{{ .Config.sort }}/{{ .Config.type }}/{{if or (.Query.Album) (.Query.Artist) (.Keywords) }}2{{else}}1{{end}}/',
      },
      {
        path:
          '{{if or (.Query.Album) (.Query.Artist) (.Keywords) }}sort-search{{else}}cat/Music{{end}}{{if or (.Query.Album) (.Query.Artist) }}/{{ or (.Query.Album) (.Query.Artist) }}{{else}}/{{ .Keywords }}{{end}}{{if or (.Query.Album) (.Query.Artist) (.Keywords) }}/{{else}}{{end}}{{ .Config.sort }}/{{ .Config.type }}/{{if or (.Query.Album) (.Query.Artist) (.Keywords) }}3{{else}}1{{end}}/',
      },
    ],
    keywordsfilters: [{ name: 'replace', args: ['Greys Anatomy', "Grey's Anatomy"] }],
    rows: { selector: 'tr:has(a[href^="/torrent/"])' },
    fields: {
      title: {
        selector: 'td[class^="coll-1"] a[href^="/torrent/"]',
        attribute: 'href',
        filters: [
          { name: 'split', args: ['/', 3] },
          { name: 're_replace', args: ['(-+)', ' '] },
          { name: 'replace', args: ["Grey's Anatomy", 'Greys Anatomy'] },
          { name: 'replace', args: ['\u000f', ''] },
        ],
      },
      category: { text: 40 },
      'category|noappend': {
        optional: true,
        selector: 'td[class^="coll-1"] a[href^="/sub/"]',
        attribute: 'href',
        filters: [{ name: 'split', args: ['/', 2] }],
      },
      details: {
        selector: 'td[class^="coll-1"] a[href^="/torrent/"]',
        attribute: 'href',
      },
      download: {
        selector: 'td[class^="coll-1"] a[href^="/torrent/"]',
        attribute: 'href',
      },
      date: {
        optional: true,
        selector: 'td[class^="coll-date"]:contains(":")',
        filters: [{ name: 'dateparse', args: '3:04pm' }],
      },
      size: { selector: 'td[class^="coll-4"]' },
      seeders: { selector: 'td[class^="coll-2"]' },
      leechers: { selector: 'td[class^="coll-3"]' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
