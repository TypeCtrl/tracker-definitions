import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'worldofp2p',
  name: 'WorldOfP2P',
  description: 'A general tracker',
  language: 'en-us',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://worldofp2p.net'],
  caps: {
    categorymappings: [
      { id: 9, cat: 'TV/Anime', desc: 'Anime' },
      { id: 15, cat: 'PC/0day', desc: 'Apps-Linux' },
      { id: 16, cat: 'PC/Mac', desc: 'Apps-Macintosh' },
      { id: 17, cat: 'PC/Phone-Other', desc: 'Apps-Mobile' },
      { id: 1, cat: 'PC/0day', desc: 'Apps-Windows' },
      { id: 49, cat: 'Audio', desc: 'Audio Tracks' },
      { id: 51, cat: 'Audio/Audiobook', desc: 'AudioBook' },
      { id: 50, cat: 'Books', desc: 'Ebooks' },
      { id: 23, cat: 'Console/Other', desc: 'Games-Mixed' },
      { id: 32, cat: 'Console', desc: 'Games-Packs' },
      { id: 2, cat: 'PC/Games', desc: 'Games-PC' },
      { id: 12, cat: 'PC/Games', desc: 'Games-PC Rips' },
      { id: 20, cat: 'Console/Other', desc: 'Games-PS1' },
      { id: 8, cat: 'Console/Other', desc: 'Games-PS2' },
      { id: 21, cat: 'Console/PS3', desc: 'Games-PS3' },
      { id: 22, cat: 'Console/PS4', desc: 'Games-PS4' },
      { id: 7, cat: 'Console/PSP', desc: 'Games-PSP' },
      { id: 14, cat: 'Console/Wii', desc: 'Games-Wii' },
      { id: 44, cat: 'Console/Xbox360', desc: 'Games-Xbox 360' },
      { id: 45, cat: 'Console/Xbox', desc: 'Games-Xbox One' },
      { id: 43, cat: 'Console/Xbox', desc: 'Gamex-Xbox' },
      { id: 30, cat: 'Movies/HD', desc: 'Movies-1080p' },
      { id: 56, cat: 'Movies/HD', desc: 'Movies-2160p' },
      { id: 24, cat: 'Movies/3D', desc: 'Movies-3D' },
      { id: 53, cat: 'Movies/SD', desc: 'Movies-480p' },
      { id: 52, cat: 'Movies/SD', desc: 'Movies-576p' },
      { id: 25, cat: 'Movies/HD', desc: 'Movies-720p' },
      { id: 11, cat: 'Movies/BluRay', desc: 'Movies-Bluray' },
      { id: 26, cat: 'Movies/HD', desc: 'Movies-BRRip' },
      { id: 27, cat: 'Movies/SD', desc: 'Movies-Camera' },
      { id: 10, cat: 'Movies/DVD', desc: 'Movies-DVDR' },
      { id: 28, cat: 'Movies/Other', desc: 'Movies-Oldies' },
      { id: 31, cat: 'Movies/Other', desc: 'Movies-Packs' },
      { id: 57, cat: 'Movies/HD', desc: 'Movies-Remux' },
      { id: 33, cat: 'Movies/Other', desc: 'Movies-Sport' },
      { id: 29, cat: 'Movies/WEBDL', desc: 'Movies-Web/DL' },
      { id: 3, cat: 'Movies/SD', desc: 'Movies-XviD' },
      { id: 13, cat: 'Audio/Lossless', desc: 'Music-Flac' },
      { id: 4, cat: 'Audio/MP3', desc: 'Music-MP3' },
      { id: 18, cat: 'Audio', desc: 'Music-Packs' },
      { id: 19, cat: 'Audio/Video', desc: 'Music-Videos' },
      { id: 37, cat: 'TV/HD', desc: 'TV-1080p' },
      { id: 54, cat: 'TV/HD', desc: 'TV-2160p' },
      { id: 55, cat: 'TV/SD', desc: 'TV-480p' },
      { id: 39, cat: 'TV/HD', desc: 'TV-720p' },
      { id: 38, cat: 'TV/HD', desc: 'TV-Bluray' },
      { id: 35, cat: 'TV/SD', desc: 'TV-DVDR' },
      { id: 36, cat: 'TV/SD', desc: 'TV-DVDRip' },
      { id: 41, cat: 'TV', desc: 'TV-Packs' },
      { id: 42, cat: 'TV/WEB-DL', desc: 'TV-Web/DL' },
      { id: 58, cat: 'TV/HD', desc: 'TV-x264' },
      { id: 5, cat: 'TV/SD', desc: 'TV-XviD' },
      { id: 46, cat: 'XXX', desc: 'xXx-HD' },
      { id: 47, cat: 'XXX/Imageset', desc: 'xXx-Images' },
      { id: 48, cat: 'XXX/Packs', desc: 'xXx-Packs' },
      { id: 6, cat: 'XXX/XviD', desc: 'xXx-XviD' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: '/login.php',
    method: 'form',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      login: 'Login',
    },
    error: [{ selector: 'td.stdmsg2' }],
    test: { path: '/usercp.php?action=default' },
  },
  search: {
    paths: [{ path: '/browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      incldead: '1',
      searchin: 'title',
    },
    rows: {
      selector: 'table > tbody > tr:has(a[href^="download.php?torrent="])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'a[href^="details.php?id="]' },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      comments: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(5)' },
      size: { selector: 'td:nth-child(8)' },
      seeders: { selector: 'td:nth-child(10)' },
      leechers: { selector: 'td:nth-child(11)' },
      date: { selector: 'td:nth-child(7)' },
      grabs: {
        selector: 'a[href^="snatches.php?id="]',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      downloadvolumefactor: {
        case: {
          'a.info:contains("Free")': '0',
          'img[src*="/free.png"]': '0',
          '*': '1',
        },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};
