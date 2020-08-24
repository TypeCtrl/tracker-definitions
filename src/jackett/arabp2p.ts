import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'arabp2p',
  name: 'ArabP2P',
  description: 'ArabP2P is an ARABIC Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'ar-AR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://www.arabp2p.com/'],
  legacylinks: ['https://www.arabp2p.com/'],
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
      default: '2',
      options: { '1': 'asc', '2': 'desc' },
    },
  ],
  caps: {
    categorymappings: [
      { id: '14', cat: 'Movies', desc: 'اسلامي (Islamic)' },
      { id: '19', cat: 'TV/Documentary', desc: 'وثائقي (Documentary)' },
      { id: '70', cat: 'TV', desc: 'تعليمي (Educational)' },
      { id: '41', cat: 'Movies', desc: 'افلام عربيه (Arabic Movies)' },
      {
        id: '88',
        cat: 'Movies',
        desc: 'افلام مدبلجه عربي (Arabic Dubbed Movies)',
      },
      { id: '44', cat: 'TV', desc: 'مسلسلات عربية (Arabic Series)' },
      {
        id: '89',
        cat: 'TV',
        desc: 'مسلسلات عربية كامله (Full Arabic Series)',
      },
      { id: '52', cat: 'TV', desc: 'مسرحيات (Plays)' },
      {
        id: '71',
        cat: 'TV',
        desc: 'مسلسلات مدبلجه عربي (Arabic Dubbed Series)',
      },
      { id: '90', cat: 'TV', desc: 'برامج ومسابقات (Shows)' },
      { id: '109', cat: 'TV', desc: 'رمضان 2020 (Ramadan 2020)' },
      { id: '92', cat: 'TV/Foreign', desc: 'تعليمي (Educational)' },
      { id: '93', cat: 'TV/Documentary', desc: 'وثائقي (Documentary)' },
      {
        id: '45',
        cat: 'TV/Foreign',
        desc: 'مسلسلات وبرامج اجنبيه (Serials)',
      },
      {
        id: '57',
        cat: 'TV/Foreign',
        desc: 'مسلسلات آسيوية (Asian Series)',
      },
      { id: '42', cat: 'Movies/Foreign', desc: 'افلام اجنبيه (Foreign)' },
      { id: '76', cat: 'Movies/3D', desc: '&ثلاثي الابعاد 3D (3D)' },
      { id: '74', cat: 'Movies/HD', desc: 'جودة عالية HD' },
      {
        id: '59',
        cat: 'Movies/Foreign',
        desc: 'افلام آسيوية (Asian Movies)',
      },
      {
        id: '86',
        cat: 'Movies/Foreign',
        desc: 'افلام هنديه (Indian Movies)',
      },
      { id: '98', cat: 'TV/Anime', desc: 'افلام (Movies)' },
      { id: '100', cat: 'TV/Anime', desc: 'مسلسلات (Series)' },
      { id: '102', cat: 'TV/Anime', desc: 'حلقات (Episdoes)' },
      { id: '99', cat: 'TV/Anime', desc: 'افلام (Movies)' },
      { id: '101', cat: 'TV/Anime', desc: 'مسلسلات (Series)' },
      { id: '103', cat: 'TV/Anime', desc: 'حلقات (Episodes)' },
      {
        id: '85',
        cat: 'TV/Anime',
        desc: 'الكارتون الصامت والكلاسيكي (Cartoons)',
      },
      { id: '25', cat: 'Audio', desc: 'القران الكريم (The Holy Quran)' },
      { id: '27', cat: 'Audio', desc: 'محاضرات (Lectures)' },
      { id: '26', cat: 'Audio', desc: 'اناشيد (Chants)' },
      { id: '22', cat: 'PC', desc: 'برامج عربية (Arabic Software)' },
      { id: '23', cat: 'PC', desc: 'برامج عامه (Public Software)' },
      { id: '78', cat: 'PC/Phone-IOS', desc: 'iPad/iPhone' },
      { id: '79', cat: 'PC/Phone-Android', desc: 'android' },
      { id: '30', cat: 'PC/Games', desc: 'PC' },
      { id: '31', cat: 'Console/PS3', desc: 'PS2' },
      { id: '53', cat: 'Console/Wii', desc: 'wii' },
      { id: '55', cat: 'Console/PSP', desc: 'PSP' },
      { id: '63', cat: 'Console/Xbox', desc: 'XBOX' },
      { id: '64', cat: 'Console/PS3', desc: 'PS3' },
      { id: '17', cat: 'Books', desc: 'كتب (Books)' },
      { id: '65', cat: 'Other', desc: 'صور (Images)' },
      { id: '56', cat: 'Other', desc: 'رياضي (Sport)' },
      { id: '46', cat: 'Other', desc: 'منوع (Misc)' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  login: {
    path: 'index.php?page=login',
    method: 'form',
    form: 'form[action^="index.php?page=login"]',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [{ selector: 'tr td span[style="color:#FF0000;"]' }],
    test: { path: 'index.php', selector: 'a[href^="logout.php?t="]' },
  },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      page: 'torrents',
      search: '{{ .Keywords }}',
      category: '{{ if .Categories }}{{ range .Categories }}{{.}};{{end}}{{else}}0{{end}}',
      active: 0,
      internel: 0,
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    rows: { selector: 'table.torrent tr.torrent' },
    fields: {
      category: {
        selector: 'td a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: { selector: 'td a[href^="index.php?page=torrent-details"]' },
      details: {
        selector: 'td a[href^="index.php?page=torrent-details"]',
        attribute: 'href',
      },
      download: {
        selector: 'td a[href^="download.php"]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(4) span',
        attribute: 'title',
        filters: [
          { name: 'append', args: ' +03:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(6)' },
      size: { selector: 'td:nth-child(7)' },
      downloadvolumefactor: { case: { 'span.free': 0, '*': 1 } },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 0.8 },
      minimumseedtime: { text: 259200 },
    },
  },
  source: 'jackett',
};
