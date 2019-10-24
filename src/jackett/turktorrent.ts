import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'turktorrent',
  name: 'TurkTorrent',
  description: 'TurkTorrent (TT) is a TURKISH Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'tr-TR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://turktorrent.us/'],
  legacylinks: ['http://turktorrent1.in/', 'http://turktorrent.us/'],
  caps: {
    categorymappings: [
      { id: '36', cat: 'Movies', desc: 'Film' },
      { id: '59', cat: 'Movies', desc: 'Türk Filmi' },
      { id: '61', cat: 'Movies/3D', desc: '3D' },
      { id: '18', cat: 'Movies', desc: 'Anime - Çizgi Türkçe' },
      { id: '19', cat: 'Movies', desc: 'Anime - Çizgi TR Altyazı' },
      { id: '20', cat: 'Movies', desc: 'Boxset Türkçe' },
      { id: '21', cat: 'Movies', desc: 'Boxset Tr Altyzı' },
      { id: '22', cat: 'Movies/DVD', desc: 'DVD Disk Türkçe' },
      { id: '23', cat: 'Movies/DVD', desc: 'DVD Disk Tr Altyazı' },
      { id: '24', cat: 'Movies/BluRay', desc: 'Bluray Disk Türkçe' },
      { id: '25', cat: 'Movies/BluRay', desc: 'Bluray Disk Tr Altyazı' },
      { id: '26', cat: 'Movies/UHD', desc: '4K UHD Disk Türkçe' },
      { id: '27', cat: 'Movies/UHD', desc: '4K UHD Disk Tr Altyazı' },
      { id: '28', cat: 'Movies/HD', desc: 'X265 Türkçe' },
      { id: '29', cat: 'Movies/HD', desc: 'X265 Tr Altyazı' },
      { id: '30', cat: 'Movies/HD', desc: 'X264 Türkçe' },
      { id: '37', cat: 'Movies/HD', desc: 'X264 Tr Altyazı' },
      { id: '31', cat: 'TV', desc: 'Dizi' },
      { id: '32', cat: 'TV', desc: 'Yerli Dizi' },
      {
        id: '33',
        cat: 'TV',
        desc: 'Yabancı Orjinal Dil / Tr Dublaj Dizi',
      },
      { id: '34', cat: 'TV', desc: 'Dizi Boxset' },
      { id: '35', cat: 'TV', desc: 'Netflix' },
      { id: '41', cat: 'TV', desc: 'Anime - Çizgi' },
      { id: '39', cat: 'TV', desc: 'Film' },
      { id: '38', cat: 'TV', desc: 'Dizi' },
      { id: '40', cat: 'TV', desc: 'Belgesel' },
      { id: '42', cat: 'Audio', desc: 'Müzik' },
      { id: '43', cat: 'Audio', desc: 'Türkçe Müzik' },
      { id: '44', cat: 'Audio', desc: 'Yabancı Müzik' },
      { id: '45', cat: 'Audio', desc: 'Seri Albüm - Diskografi' },
      { id: '2', cat: 'Console', desc: 'Oyun' },
      { id: '46', cat: 'Console', desc: 'PC' },
      { id: '3', cat: 'Console', desc: 'Sony PS' },
      { id: '4', cat: 'Console', desc: 'Wii' },
      { id: '14', cat: 'Console', desc: 'XboX' },
      { id: '16', cat: 'Console', desc: 'Nintendo' },
      { id: '47', cat: 'PC', desc: 'Programlar' },
      { id: '48', cat: 'PC', desc: 'Windows' },
      { id: '49', cat: 'PC', desc: 'MaC' },
      { id: '50', cat: 'PC', desc: 'Mobile' },
      { id: '51', cat: 'Other', desc: 'Diğer' },
      { id: '62', cat: 'Other', desc: 'Eğitim' },
      { id: '52', cat: 'Other', desc: 'Belgesel' },
      { id: '53', cat: 'Other', desc: 'Dini Yayınlar' },
      { id: '54', cat: 'Other', desc: 'Spor' },
      { id: '55', cat: 'Other', desc: 'Duvar Kağıtları' },
      { id: '56', cat: 'Other', desc: 'Diğer Her Şey' },
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
      name: 'info',
      type: 'info',
      label: 'Layout',
      default:
        '<ol><li>Only the English Classic profile is supported.<li>Make sure to set the <b>Torrent Listing (Listeleme Biçimi)</b> option in your profile to <b>Classic (Klasik)</b><li>And set the <b>Language (Dil)</b> to <b>English</b><li>Using the <i>Modern</i> theme will prevent results, and using <i>Turkish</i> will prevent upload dates.</ol>',
    },
  ],
  login: {
    path: '?p=home&pid=1',
    method: 'form',
    form: 'form#loginbox_form',
    submitpath: 'ajax/login.php',
    inputs: {
      action: 'login',
      loginbox_membername: '{{ .Config.username }}',
      loginbox_password: '{{ .Config.password }}',
      loginbox_remember: 1,
    },
    selectorinputs: {
      securitytoken: {
        selector: 'script:contains("stKey: ")',
        filters: [{ name: 'regexp', args: 'stKey: "(.+?)",' }],
      },
    },
    error: [{ selector: 'div.error' }, { selector: ':contains("-ERROR-")' }],
    test: { path: '?p=home&pid=1', selector: 'div#member_info_bar' },
  },
  search: {
    paths: [{ path: '/' }],
    inputs: {
      p: 'torrents',
      pid: 32,
      $raw: '{{range .Categories}}cid[]={{.}}&{{end}}',
      keywords: '{{ .Keywords }}',
      search_type: 'name',
    },
    rows: {
      selector: 'table#torrents_table_classic > tbody > tr:has(td.torrent_name)',
    },
    fields: {
      category: {
        selector: 'div.category_image > a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cid' }],
      },
      title: { selector: 'a[href*="?p=torrents&pid=10&action=details"]' },
      details: {
        selector: 'a[href*="?p=torrents&pid=10&action=details"]',
        attribute: 'href',
      },
      date: {
        optional: true,
        selector: 'td.torrent_name:contains(" at ")',
        filters: [
          { name: 'regexp', args: 'Uploaded (.+?) by' },
          { name: 'replace', args: [' at ', ' '] },
        ],
      },
      download: {
        selector: 'a[href*="?p=torrents&pid=10&action=download"]',
        attribute: 'href',
      },
      magnet: {
        optional: true,
        selector: 'a[href^="magnet:?xt="]',
        attribute: 'href',
      },
      size: { selector: 'a[rel="torrent_size"]' },
      seeders: { selector: 'a[rel="torrent_seeders"]' },
      leechers: { selector: 'a[rel="torrent_leechers"]' },
      grabs: { selector: 'a[rel="times_completed"]' },
      banner: {
        selector: 'a[rel="fancybox"]',
        optional: true,
        attribute: 'href',
      },
      downloadvolumefactor: {
        case: {
          'img[title="FREE!"]': 0,
          'img[title="Download Multiplier: 0.5"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: { 'img[title="Upload Multiplier: 2"]': 2, '*': 1 },
      },
    },
  },
  source: 'jackett',
};
