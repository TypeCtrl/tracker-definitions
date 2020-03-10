import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'broadcity',
  name: 'BroadCity',
  description: 'BroadCity is a TURKISH Private Torrent Tracker for MOVIES and TV',
  language: 'tr-TR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://broadcity.in/'],
  legacylinks: ['http://broadcity.in/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies/UHD', desc: 'UHD' },
      { id: '2', cat: 'Movies/HD', desc: 'BluRay' },
      { id: '8', cat: 'Movies/HD', desc: 'TV' },
      { id: '6', cat: 'Movies/HD', desc: 'WEB-DL' },
      { id: '16', cat: 'Movies/HD', desc: 'WEBRip' },
      { id: '3', cat: 'Movies/HD', desc: 'Movies HD' },
      { id: '25', cat: 'Movies/3D', desc: 'Movies 3D' },
      { id: '4', cat: 'Movies/HD', desc: 'BluRay' },
      { id: '7', cat: 'Movies/HD', desc: 'TV' },
      { id: '5', cat: 'Movies/HD', desc: 'WEB-DL' },
      { id: '14', cat: 'Movies/HD', desc: 'WEBRip' },
      { id: '27', cat: 'Movies/HD', desc: 'LORD Rips' },
      { id: '9', cat: 'Movies/SD', desc: 'SD' },
      { id: '23', cat: 'Movies/SD', desc: 'BluRay' },
      { id: '10', cat: 'Movies/SD', desc: 'DVD' },
      { id: '12', cat: 'Movies/SD', desc: 'TV' },
      { id: '13', cat: 'Movies/SD', desc: 'WEB-DL' },
      { id: '15', cat: 'Movies/SD', desc: 'WEBRip' },
      { id: '17', cat: 'TV', desc: 'TV' },
      { id: '26', cat: 'TV/Other', desc: 'TV Program' },
      { id: '19', cat: 'TV', desc: 'Yabanci Dizi' },
      { id: '18', cat: 'TV', desc: 'Yerli Dizi' },
      { id: '20', cat: 'Movies/HD', desc: 'VIP' },
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
      label: 'Captcha Text Note',
      default: 'The <i>Captcha Text</i> code is <b>case sensitive</b>.',
    },
  ],
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action$="takelogin.php"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    captcha: {
      type: 'image',
      selector: 'img#regimage',
      input: 'imagestring',
    },
    error: [
      { selector: 'table:contains("Bir Hata oluştu!")' },
      { selector: 'table:contains("Bir Hata Oluştu!")' },
      { selector: 'table:contains("Login Giriş Kilitlendi!")' },
    ],
    test: {
      path: 'index.php',
      selector: 'a[href*="/logout.php?logouthash="]',
    },
  },
  ratio: {
    path: 'index.php',
    selector: 'div#top div:nth-child(2) span:nth-child(2)',
    filters: [{ name: 'regexp', args: 'Ratio: (.+?) Bonus:' }],
  },
  search: {
    paths: [{ path: 'browse.php' }],
    keywordsfilters: [{ name: 're_replace', args: ['(?i)\\bE(\\d+)\\b', 'E$1'] }],
    inputs: {
      do: 'search',
      keywords: '{{ .Keywords }}',
      category: 0,
      search_type: 't_name',
      include_dead_torrents: 'yes',
    },
    rows: {
      selector: 'table#sortabletable tbody tr:has(div[id^="port-target-"])',
    },
    fields: {
      title: {
        selector: 'div[id^="port-target-"] a',
        filters: [{ name: 're_replace', args: ['(?i)\\bBL(\\d+)\\b', ' E$1 '] }],
      },
      details: {
        selector: 'div[id^="port-target-"] a',
        attribute: 'href',
      },
      category: {
        selector: 'a[href*="browse.php?category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      banner: {
        selector: 'div[id^="port-content-"] img',
        attribute: 'src',
      },
      date: {
        selector: 'td:nth-child(2)',
        filters: [{ name: 'dateparse', args: '02-01-2006 15:04' }],
      },
      download: {
        selector: 'a[href*="download.php?id="]',
        attribute: 'href',
      },
      comments: { selector: 'td:nth-child(4) a', attribute: 'href' },
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: {
        case: {
          'img[src$="/freedownload.gif"]': 0,
          'img[src$="/silverdownload.gif"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: { case: { 'img[src$="/x2.gif"]': 2, '*': 1 } },
    },
  },
  source: 'jackett',
};
