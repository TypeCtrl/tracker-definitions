import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentsectorcrew',
  name: 'Torrent Sector Crew',
  description: 'A German general tracker',
  language: 'de-DE',
  type: 'private',
  encoding: 'WINDOWS-1252',
  links: ['https://tsctracker.net/'],
  caps: {
    categorymappings: [
      { id: '65', cat: 'PC/Phone-Android', desc: 'Android' },
      { id: '83', cat: 'PC/Phone-IOS', desc: 'iOS' },
      { id: '107', cat: 'PC/0day', desc: 'Linux' },
      { id: '48', cat: 'PC/Mac', desc: 'MAC' },
      { id: '109', cat: 'PC', desc: 'Sonstige' },
      { id: '22', cat: 'PC/0day', desc: 'Win' },
      { id: '24', cat: 'Audio/Audiobook', desc: 'aBooks' },
      { id: '104', cat: 'Audio', desc: "Disco's" },
      { id: '38', cat: 'Audio/Audiobook', desc: 'Hörspiel' },
      { id: '6', cat: 'Audio', desc: 'Musik' },
      { id: '82', cat: 'Audio', desc: 'Tracks' },
      { id: '29', cat: 'Audio/Video', desc: 'Videos' },
      { id: '113', cat: 'TV/Documentary', desc: '3D' },
      { id: '76', cat: 'TV/Documentary', desc: 'HD' },
      { id: '78', cat: 'TV/Documentary', desc: 'Packs' },
      { id: '75', cat: 'TV/Documentary', desc: 'SD' },
      { id: '114', cat: 'TV/Documentary', desc: 'Sonstige' },
      { id: '77', cat: 'TV/Documentary', desc: 'Untouched' },
      { id: '54', cat: 'Movies/HD', desc: '1080p' },
      { id: '5', cat: 'Movies/3D', desc: '3D' },
      { id: '55', cat: 'Movies/HD', desc: '720p' },
      { id: '111', cat: 'Movies', desc: 'Anime' },
      { id: '43', cat: 'Movies/BluRay', desc: 'BluRay' },
      { id: '20', cat: 'Movies/DVD', desc: 'DVDR' },
      { id: '120', cat: 'Movies/Foreign', desc: 'Int.' },
      { id: '119', cat: 'Movies', desc: 'Remux' },
      { id: '121', cat: 'Movies/HD', desc: 'UHD' },
      { id: '36', cat: 'Movies/HD', desc: 'x264' },
      { id: '19', cat: 'Movies/SD', desc: 'XviD' },
      { id: '112', cat: 'TV/Anime', desc: 'Anime' },
      { id: '69', cat: 'TV/HD', desc: 'HD' },
      { id: '72', cat: 'TV/Foreign', desc: 'Int.' },
      { id: '68', cat: 'TV', desc: 'Packs' },
      { id: '66', cat: 'TV/SD', desc: 'SD' },
      { id: '108', cat: 'TV', desc: 'TV-Shows' },
      { id: '117', cat: 'Other', desc: 'Diverses' },
      { id: '28', cat: 'Books', desc: 'eBooks' },
      { id: '42', cat: 'TV/Sport', desc: 'Sport' },
      { id: '103', cat: 'Other', desc: 'Tutorials' },
      { id: '9', cat: 'Other', desc: 'Wallpaper' },
      { id: '64', cat: 'XXX', desc: 'XXX' },
      { id: '115', cat: 'PC/Mac', desc: 'MAC' },
      { id: '37', cat: 'Console/NDS', desc: 'Nintendo' },
      { id: '4', cat: 'PC/Games', desc: 'PC' },
      { id: '58', cat: 'Console/PS4', desc: 'PSX' },
      { id: '116', cat: 'Other', desc: 'Sonstige' },
      { id: '50', cat: 'Console/Xbox', desc: 'XBOX' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  settings: [
    { name: 'pin', type: 'text', label: 'Pin' },
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
  ],
  login: {
    path: 'landing.php',
    method: 'form',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      pin: '{{ .Config.pin }}',
    },
    error: [{ selector: '#login_box_desc' }],
    test: { path: 'my.php' },
  },
  ratio: {
    path: '/my.php',
    selector: 'td.navi_top:contains("Deine Ratio:")',
    filters: [
      { name: 'replace', args: ['Deine Ratio: ', ''] },
      { name: 'replace', args: ['.', ''] },
      { name: 'replace', args: [',', '.'] },
    ],
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      incldead: '1',
      orderby: 'added',
      sort: 'desc',
    },
    rows: {
      selector:
        'h2 +p + br + table.tablebrowse > tbody > tr[style="height: 45px;"], tr:contains("Weiter") > td > table.tablebrowse > tbody > tr[style="height: 45px;"]',
    },
    fields: {
      title: {
        selector: 'a[title][href^="details.php"]',
        attribute: 'title',
      },
      category: {
        selector: 'a[href*="cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      comments: { selector: 'a[href*="&tocomm="]', attribute: 'href' },
      download: {
        selector: 'a[href^="download_ssl.php"]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(3)' },
      grabs: {
        selector: 'td:nth-child(9)',
        filters: [{ name: 'replace', args: ['-mal', ''] }],
      },
      size: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'replace', args: ['.', ''] }, { name: 'replace', args: [',', '.'] }],
      },
      seeders: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      leechers: {
        selector: 'td:nth-child(8)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      date: {
        selector: 'td:nth-child(5)',
        remove: 'br',
        filters: [{ name: 'dateparse', args: '02.01.200615:04:05' }],
      },
      downloadvolumefactor: {
        case: {
          'font:contains("[OnlyUpload]")': '0',
          'font:contains("[-40 Download]")': '0.6',
          '*': '1',
        },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'jackett',
};
