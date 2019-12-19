import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'crazyscorner',
  name: "Crazy's Corner",
  description: "Crazy's Corner is a Private Torrent Tracker",
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://crazys-corner.info/'],
  caps: {
    categorymappings: [
      { id: '34', cat: 'Movies/3D', desc: 'MOVIES 3D' },
      { id: '52', cat: 'Movies/HD', desc: 'MOVIES High Def Mkv/Mp4' },
      { id: '70', cat: 'Movies', desc: 'MOVIES Animation' },
      { id: '97', cat: 'Movies', desc: 'MOVIES DISNEY' },
      { id: '112', cat: 'Movies', desc: 'MOVIES itunes' },
      { id: '78', cat: 'TV', desc: 'MISC POD CASTS' },
      { id: '99', cat: 'Movies', desc: 'MOVIES Cam Ratio Free' },
      { id: '11', cat: 'Movies/DVD', desc: 'MOVIES DVD-R' },
      { id: '35', cat: 'Movies/BluRay', desc: 'MOVIES Blu-Ray' },
      { id: '95', cat: 'Movies', desc: 'MOVIES Classic picks' },
      { id: '100', cat: 'Movies/SD', desc: 'MOVIES XVD' },
      { id: '105', cat: 'Movies/HD', desc: 'MOVIES HD RIPS' },
      { id: '108', cat: 'Movies', desc: 'MOVIES Musical' },
      { id: '107', cat: 'Movies', desc: 'MOVIES Packs' },
      { id: '36', cat: 'Movies/DVD', desc: 'MOVIES DvD-Rips' },
      { id: '37', cat: 'Movies', desc: 'MOVIES Classic' },
      { id: '38', cat: 'Movies', desc: 'MOVIES Classic-Kids' },
      { id: '47', cat: 'Movies/WEBDL', desc: 'MOVIES Webrip/WEB-DL' },
      { id: '39', cat: 'Movies', desc: 'MOVIES Packs' },
      { id: '5', cat: 'Movies', desc: 'MOVIES Anime' },
      { id: '32', cat: 'XXX', desc: 'MOVIES Adult' },
      { id: '33', cat: 'Movies/UHD', desc: 'MOVIES 4K Ratio Free' },
      { id: '4', cat: 'Movies', desc: 'MOVIES Misc' },
      { id: '79', cat: 'Audio/Audiobook', desc: 'MISC AUDIO BOOKS' },
      { id: '81', cat: 'Audio/Other', desc: 'MISC RADIO SHOWS' },
      { id: '43', cat: 'TV', desc: 'TV Kids' },
      { id: '48', cat: 'Movies', desc: 'SPORTS Misc' },
      { id: '110', cat: 'TV/Sport', desc: 'MOVIES Christmas' },
      { id: '44', cat: 'PC/ISO', desc: 'GAMES Pc-Iso' },
      { id: '45', cat: 'Console', desc: 'GAMES All Console' },
      { id: '41', cat: 'TV', desc: 'TV Episodes' },
      { id: '101', cat: 'TV', desc: 'TV Soaps' },
      { id: '104', cat: 'TV', desc: 'TV MISC' },
      { id: '103', cat: 'Audio', desc: 'karaoke Misc' },
      { id: '111', cat: 'Audio', desc: 'MUSIC Christmas' },
      { id: '42', cat: 'TV', desc: 'VIP TV Packs' },
      { id: '84', cat: 'PC', desc: 'APPS MISC' },
      { id: '2', cat: 'Audio', desc: 'Music' },
      { id: '30', cat: 'Audio', desc: 'Music Packs' },
      { id: '31', cat: 'Audio', desc: 'Music Albums' },
      { id: '3', cat: 'PC/Games', desc: 'Games Misc' },
      { id: '40', cat: 'TV', desc: 'TV Single Seasons' },
      { id: '7', cat: 'PC/0day', desc: 'Apps Win' },
      { id: '8', cat: 'PC', desc: 'Apps Linux' },
      { id: '9', cat: 'PC/Mac', desc: 'Apps Mac' },
      { id: '51', cat: 'Books/Ebook', desc: 'E Books Food/Cook-Books' },
      { id: '64', cat: 'Books/Ebook', desc: 'E Books Book Packs' },
      { id: '26', cat: 'Books/Ebook', desc: 'E Books Magazines' },
      { id: '29', cat: 'Books/Ebook', desc: 'E Books Misc Books' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '3',
      options: { '2': 'title', '3': 'created', '4': 'size', '5': 'seeders' },
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
    path: 'index.php?page=login',
    method: 'post',
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
      search: '{{ .Keywords }}',
      page: 'torrents',
      category: '{{ range .Categories }}{{.}};{{end}}',
      uploader: 0,
      options: 0,
      active: 0,
      gold: 0,
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.lista tr:has(a[onmouseover][href^="index.php?page=torrent-details&id="])',
    },
    fields: {
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
      },
      details: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      banner: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.+?)  width' }],
      },
      size: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'Size: (.+?)<' }],
      },
      date: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'Added:(.+?)<' }, { name: 'timeago' }],
      },
      seeders: {
        selector: 'a[title][href^="index.php?page=torrent-details&id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'Seeders: (\\d+)<' }],
      },
      leechers: {
        selector: 'a[title][href^="index.php?page=torrent-details&id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'Leechers: (\\d+)<' }],
      },
      grabs: {
        selector: 'a[title][href^="index.php?page=torrent-details&id="]',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'Done: (\\d+)<' }],
      },
      downloadvolumefactor: {
        case: {
          'img[src="images/freeleech.gif"]': 0,
          'img[src="gold/gold.gif"]': 0,
          '*': 1,
        },
      },
      uploadvolumefactor: { case: { '*': 1 } },
    },
  },
  source: 'jackett',
};
