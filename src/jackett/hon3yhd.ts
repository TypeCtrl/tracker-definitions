import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'hon3yhd',
  name: 'Hon3y HD',
  description: 'Hon3yHD is an INDIAN Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://hon3yhd.com/'],
  caps: {
    categorymappings: [
      { id: '31', cat: 'Movies/BluRay', desc: '1080p BluRay' },
      { id: '70', cat: 'Movies/3D', desc: '3D Movies' },
      { id: '30', cat: 'Movies/BluRay', desc: '720p BluRay' },
      { id: '68', cat: 'TV/Anime', desc: 'Animation' },
      { id: '73', cat: 'TV/Anime', desc: 'Anime' },
      { id: '9', cat: 'Movies/BluRay', desc: 'BD25' },
      { id: '10', cat: 'Movies/BluRay', desc: 'BD50' },
      { id: '8', cat: 'Movies/DVD', desc: 'DVD5' },
      { id: '71', cat: 'Movies', desc: 'Bengali Movies' },
      { id: '7', cat: 'Movies/DVD', desc: 'DvD9' },
      { id: '1', cat: 'Movies/SD', desc: 'DVDRips' },
      { id: '26', cat: 'Books', desc: 'Ebooks' },
      { id: '13', cat: 'PC/Games', desc: 'Games' },
      { id: '2', cat: 'Movies/HD', desc: 'HDRips' },
      { id: '32', cat: 'Movies/HD', desc: 'HEVC Movies' },
      { id: '33', cat: 'Movies', desc: 'Hollywood Dub' },
      { id: '4', cat: 'Movies', desc: 'Hollywood Movies' },
      { id: '21', cat: 'TV', desc: 'Hollywood TV' },
      { id: '20', cat: 'TV', desc: 'Indian TV' },
      { id: '18', cat: 'Movies', desc: 'Malayalam Movies' },
      { id: '72', cat: 'Movies', desc: 'Marathi Movies' },
      { id: '25', cat: 'Audio', desc: 'Music' },
      { id: '24', cat: 'Audio/Video', desc: 'Music Videos' },
      { id: '5', cat: 'Movies', desc: 'Pakistani Movies' },
      { id: '19', cat: 'TV', desc: 'Pakistani TV' },
      { id: '36', cat: 'Other', desc: 'Pre Releases' },
      { id: '15', cat: 'Movies', desc: 'Punjabi Movies' },
      { id: '28', cat: 'Other', desc: 'Religious' },
      { id: '11', cat: 'Movies', desc: 'Remux' },
      { id: '12', cat: 'PC', desc: 'Softwares' },
      { id: '34', cat: 'Movies', desc: 'South Dub' },
      { id: '14', cat: 'TV/Sport', desc: 'Sports' },
      { id: '35', cat: 'TV', desc: 'Stage Drama' },
      { id: '17', cat: 'Movies', desc: 'Tamil Movies' },
      { id: '16', cat: 'Movies', desc: 'Telugu Movies' },
      { id: '27', cat: 'Other', desc: 'Tutorial' },
      { id: '29', cat: 'Movies/SD', desc: 'Upscaled DvDRips' },
      { id: '3', cat: 'Movies', desc: 'WEB-HD' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action="takelogin.php"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [
      { selector: 'tbody:has(td.colhead > span:contains("Error"))' },
      { selector: 'tbody:has(td.colhead > span:contains("failed"))' },
    ],
    test: { path: 'browse.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      searchin: 'title',
      incldead: 1,
    },
    keywordsfilters: [
      { name: 're_replace', args: ['[^\\w\\d]+', ' +'] },
      { name: 'prepend', args: '+' },
    ],
    rows: { selector: 'table > tbody > tr.tt' },
    fields: {
      title: { selector: 'a[href^="details.php?id="]' },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?torrent="]',
        attribute: 'href',
      },
      banner: {
        optional: true,
        selector: 'a[href^="details.php?id="]',
        attribute: 'onmouseover',
        filters: [
          { name: 'regexp', args: 'src=\\"(.*?)\\"' },
          { name: 'replace', args: ['./pic/noposter.jpg', ''] },
        ],
      },
      size: { selector: 'td:nth-child(7)' },
      files: { selector: 'td:nth-child(4)' },
      grabs: {
        selector: 'td:nth-child(8)',
        filters: [{ name: 'regexp', args: '([\\d\\.]+)' }],
      },
      seeders: { selector: 'td:nth-child(9)' },
      leechers: { selector: 'td:nth-child(10)' },
      date: { selector: 'td:nth-child(6)' },
      downloadvolumefactor: {
        case: { 'a.info > b:contains("Free")': 0, '*': 1 },
      },
      uploadvolumefactor: {
        case: { 'a.info > b:contains("Double Upload")': 2, '*': 1 },
      },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 259200 },
    },
  },
  source: 'jackett',
};
