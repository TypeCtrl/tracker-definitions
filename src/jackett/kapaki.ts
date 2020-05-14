import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'kapaki',
  name: 'Kapaki',
  description: 'Kapaki is a GREEK Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'el-GR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://kapaki.info/'],
  caps: {
    categorymappings: [
      { id: '32', cat: 'TV', desc: 'Ελληνική TV - Greek TV' },
      { id: '37', cat: 'TV', desc: 'Πακέτα' },
      { id: '44', cat: 'TV', desc: 'Θέατρο - Όπερα - Συναυλίες' },
      { id: '46', cat: 'TV', desc: 'Σειρές' },
      { id: '47', cat: 'TV', desc: 'Talk Shows - News - Info' },
      { id: '48', cat: 'TV', desc: 'Ψυχαγωγικά Show' },
      { id: '49', cat: 'TV/Sport', desc: 'Αθλητικά' },
      { id: '51', cat: 'TV/Documentary', desc: 'Ντοκυμαντέρ' },
      { id: '55', cat: 'TV', desc: 'Εκπαιδευτικά' },
      { id: '60', cat: 'TV', desc: 'Διάφορα' },
      { id: '58', cat: 'TV', desc: 'Ξένη TV - Foreign TV' },
      { id: '79', cat: 'TV', desc: 'Σειρές' },
      { id: '81', cat: 'TV', desc: 'Πακέτα' },
      { id: '82', cat: 'TV', desc: 'Ψυχαγωγικά Shows' },
      { id: '83', cat: 'TV/Sport', desc: 'Αθλητικά' },
      { id: '84', cat: 'TV/Documentary', desc: 'Ντοκυμαντέρ' },
      { id: '85', cat: 'TV', desc: 'Διάφορα' },
      {
        id: '1',
        cat: 'Movies',
        desc: 'Ξένες Ταινίες από 1971 - Foreign Movies after 1971',
      },
      { id: '16', cat: 'Movies', desc: 'CAM/TS/TC/WP/VHSrip/TVRip' },
      { id: '92', cat: 'Movies', desc: 'PDTV/DSR/DTH/VODrip/PPVrip' },
      {
        id: '59',
        cat: 'Movies/WEBDL',
        desc: ' SCR/R5/WEBrip/WEBDL/HDrip',
      },
      { id: '90', cat: 'Movies/HD', desc: ' HDTV 404/540/720/1080p' },
      { id: '14', cat: 'Movies/SD', desc: 'DVD-R/DVDRip' },
      { id: '17', cat: 'Movies/HD', desc: 'BDRip/BRRip' },
      { id: '107', cat: 'Movies/HD', desc: 'BDRip/BRRip 720p' },
      { id: '104', cat: 'Movies/HD', desc: 'BDRip/BRRip 1080p' },
      { id: '102', cat: 'Movies/UHD', desc: 'BDRip/BRRip 4K (2160p)' },
      {
        id: '93',
        cat: 'Movies/BluRay',
        desc: ' BD-R (Full Bluray Disc)',
      },
      { id: '76', cat: 'Movies/3D', desc: '3-D' },
      {
        id: '31',
        cat: 'Movies',
        desc: ' Packs/Filmographies/Special Features',
      },
      {
        id: '61',
        cat: 'Movies',
        desc: 'Ελληνικές Ταινίες από 1991 - Greek Movies after 1991',
      },
      { id: '62', cat: 'Movies', desc: 'CAM/TS/TC/WP/VHSrip/TVRip' },
      { id: '94', cat: 'Movies', desc: 'PDTV/DSR/DTH/VODrip/PPVrip' },
      {
        id: '67',
        cat: 'Movies/WEBDL',
        desc: 'SCR/R5/WEBrip/WEBDL/HDrip ',
      },
      { id: '89', cat: 'Movies/HD', desc: 'HDTV 404/540/720/1080p ' },
      { id: '63', cat: 'Movies/SD', desc: 'DVD-R/DVDRip' },
      { id: '69', cat: 'Movies/HD', desc: 'BDRip/BRRip' },
      { id: '105', cat: 'Movies/HD', desc: 'BDRip/BRRip 1080p' },
      { id: '108', cat: 'Movies/HD', desc: 'BDRip/BRRip 720p' },
      {
        id: '95',
        cat: 'Movies/BluRay',
        desc: 'BD-R (Full Bluray Disc) ',
      },
      { id: '77', cat: 'Movies/3D', desc: '3-D' },
      {
        id: '78',
        cat: 'Movies',
        desc: 'Packs/Filmographies/Special Features ',
      },
      { id: '99', cat: 'Movies', desc: "Vintage Collectors' Zone" },
      {
        id: '100',
        cat: 'Movies',
        desc: 'Ελληνικές Ταινίες έως  και 1990 - GreekMovies upto 1990',
      },
      {
        id: '101',
        cat: 'Movies',
        desc: 'Ξένες Ταινίες έως  και 1970 - Foreign Movies upto 1970',
      },
      { id: '50', cat: 'TV/Anime', desc: 'Anime - Κινούμενα Σχέδια' },
      { id: '64', cat: 'TV/Anime', desc: 'CAM/TS/TC/WP/VHSrip/TVRip ' },
      { id: '65', cat: 'TV/Anime', desc: 'DVD-R/DVDRip' },
      { id: '66', cat: 'TV/Anime', desc: 'SCR/R5/WEBrip/WEBDL/HDrip ' },
      { id: '68', cat: 'TV/Anime', desc: 'BDRip/BRRip' },
      { id: '91', cat: 'TV/Anime', desc: 'HDTV 404/540/720/1080p ' },
      { id: '96', cat: 'TV/Anime', desc: 'PDTV/DSR/DTH/VODrip/PPVrip ' },
      { id: '97', cat: 'TV/Anime', desc: 'BD-R (Full Bluray Disc) ' },
      { id: '98', cat: 'TV/Anime', desc: '3-D ' },
      {
        id: '80',
        cat: 'TV/Anime',
        desc: 'Packs/Filmographies/Special Features ',
      },
      { id: '103', cat: 'TV/Anime', desc: 'BDRip/BRRip 4K (2160p)' },
      { id: '106', cat: 'TV/Anime', desc: 'BDRip/BRRip 1080p' },
      { id: '109', cat: 'TV/Anime', desc: 'BDRip/BRRip 720p' },
      { id: '35', cat: 'Audio', desc: 'Ελληνική Μουσική - Greek Music' },
      { id: '70', cat: 'Audio/Video', desc: 'Video Clips ' },
      { id: '71', cat: 'Audio', desc: 'Μουσικά CD ' },
      { id: '72', cat: 'Audio', desc: 'Μουσικά DVD ' },
      {
        id: '73',
        cat: 'Audio',
        desc: 'Soundtracks - Μουσικά Θέματα Ταινιών',
      },
      { id: '74', cat: 'Audio', desc: 'Δισκογραφίες ' },
      { id: '86', cat: 'Audio', desc: 'Συλλογές' },
      { id: '75', cat: 'Audio', desc: 'DJs Compilation' },
      { id: '43', cat: 'Audio', desc: 'Ραδιοφωνικές εκπομπές' },
      { id: '7', cat: 'Audio', desc: 'Ξένη Μουσική - Foreign Music' },
      { id: '20', cat: 'Audio/Video', desc: 'Video Clips' },
      { id: '36', cat: 'Audio', desc: 'Μουσικά CD' },
      { id: '45', cat: 'Audio', desc: 'Μουσικά DVD' },
      {
        id: '38',
        cat: 'Audio',
        desc: 'Soundtracks - Μουσικά Θέματα Ταινιών',
      },
      { id: '40', cat: 'Audio', desc: 'Δισκογραφίες' },
      { id: '87', cat: 'Audio', desc: 'Συλλογές' },
      { id: '42', cat: 'Audio', desc: 'DJs Compilation' },
      { id: '2', cat: 'Console', desc: 'Παιχνίδια - Games' },
      { id: '3', cat: 'Console/PS3', desc: 'Sony PS' },
      { id: '4', cat: 'Console/Wii', desc: 'Wii' },
      { id: '26', cat: 'Console/Xbox', desc: 'XboX' },
      { id: '27', cat: 'PC/Games', desc: 'PC' },
      { id: '28', cat: 'Console/NDS', desc: 'Nintendo' },
      { id: '6', cat: 'PC', desc: 'Εφαρμογές - Applications' },
      { id: '18', cat: 'PC/0day', desc: 'PC / Windows Applications' },
      { id: '19', cat: 'PC/Mac', desc: 'Macintosh Applications' },
      {
        id: '34',
        cat: 'PC/Phone-Other',
        desc: 'Mobile Applications - Εφαρμογές Κινητών',
      },
      { id: '33', cat: 'Books', desc: 'Βιβλία - Books' },
      { id: '53', cat: 'Books', desc: 'Έλληνες Συγγραφείς' },
      { id: '39', cat: 'Books', desc: 'Ξένοι Συγγραφείς' },
      { id: '88', cat: 'Books', desc: 'Περιοδικά κ.ά. - Magazines etc' },
      { id: '54', cat: 'Other', desc: 'Φωτογραφίες - Photos' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
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
    error: [{ selector: ':contains("-ERROR-")' }],
    test: { path: '?p=torrents&pid=32', selector: 'a#logout' },
  },
  search: {
    paths: [{ path: '/' }],
    keywordsfilters: [{ name: 're_replace', args: ['[^a-zA-Z0-9]+', '%25'] }],
    inputs: {
      p: 'torrents',
      pid: 32,
      $raw: '{{ range .Categories }}cid[]={{.}}&{{end}}',
      keywords: '{{ .Keywords }}',
      search_type: 'name',
      searchin: 'title',
    },
    error: [
      {
        selector: 'div#show_error:not(:contains("Ουπς! Λάθος!Δεν βρέθηκαν αποτελέσματα."))',
      },
    ],
    rows: {
      selector:
        'table#torrents_table_classic > tbody > tr:not(:first-child), div#content > div.torrent-box[id^="torrent_"]',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'a[href*="?p=torrents&pid=10&action=details"]' },
      category: {
        selector: 'div.category_image > a, div.categoryImage > a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cid' }],
      },
      details: {
        selector: 'a[href*="?p=torrents&pid=10&action=details"]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href*="?p=torrents&pid=10&action=download"]',
        attribute: 'href',
      },
      imdb: {
        selector: 'a[href*="www.imdb.com/title/tt"]',
        attribute: 'href',
      },
      size: { selector: 'a[rel="torrent_size"]' },
      seeders: { selector: 'a[rel="torrent_seeders"]' },
      leechers: { selector: 'a[rel="torrent_leechers"]' },
      grabs: { selector: 'a[rel="times_completed"]' },
      banner: {
        optional: true,
        selector: 'a[rel="fancybox"]',
        attribute: 'href',
      },
      downloadvolumefactor: {
        case: {
          'img[title="ΧΡΥΣΟ!"]': 0,
          'img[title="100% FREE!"]': 0,
          'img[title="Πολλαπλασιαστής Κατεβάσματος: 0.5"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: { 'img[title="Πολλαπλασιαστής Ανεβάσματος: 2"]': 2, '*': 1 },
      },
      date: {
        optional: true,
        selector: 'div.torrentOwner:not(:has(abbr.timeago))',
        remove: 'span',
        filters: [
          { name: 'replace', args: ['Ανέβηκε ', ''] },
          { name: 'replace', args: [' από', ''] },
          { name: 'replace', args: [' τον/την', ''] },
          { name: 'replace', args: ['στις ', ''] },
          { name: 'replace', args: ['σήμερα', 'Today'] },
          { name: 'replace', args: ['Χθες', 'Yesterday'] },
          { name: 'replace', args: ['Δευτέρα', 'Monday'] },
          { name: 'replace', args: ['Τρίτη', 'Tuesday'] },
          { name: 'replace', args: ['Τετάρτη', 'Wednesday'] },
          { name: 'replace', args: ['Πέμπτη', 'Thursday'] },
          { name: 'replace', args: ['Παρασκευή', 'Friday'] },
          { name: 'replace', args: ['Σάββατο', 'Saturday'] },
          { name: 'replace', args: ['Κυριακή', 'Sunday'] },
          { name: 'dateparse', args: '02-01-2006 15:04' },
        ],
      },
    },
  },
  source: 'jackett',
};
