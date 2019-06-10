import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'rptorrents',
  name: 'RPTorrents',
  description: 'RPTorrents is a Private tracker for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://rptorrents.com/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'PC/Games', desc: 'Games PC' },
      { id: '2', cat: 'PC/0day', desc: 'Apps Windows' },
      { id: '3', cat: 'PC/Mac', desc: 'Apps  Mac' },
      { id: '4', cat: 'PC', desc: 'Apps Linux' },
      { id: '34', cat: 'PC/Phone-Other', desc: 'Apps Mobile' },
      { id: '6', cat: 'TV/Anime', desc: 'Movie Cartoons' },
      { id: '7', cat: 'Movies/WEBDL', desc: 'Movies WEB-DL' },
      { id: '32', cat: 'Movies/UHD', desc: 'Movies 4k' },
      { id: '9', cat: 'Movies/HD', desc: 'Movies HD' },
      { id: '10', cat: 'Movies/3D', desc: 'Movies 3D' },
      { id: '11', cat: 'Movies', desc: 'Movies Pack' },
      { id: '12', cat: 'Movies/BluRay', desc: 'Movies Bluray' },
      { id: '33', cat: 'Movies/BluRay', desc: 'Movies  Bluray - Rips' },
      { id: '14', cat: 'TV/HD', desc: 'TV HD' },
      { id: '15', cat: 'TV/WEB-DL', desc: 'TV WEB-DL' },
      { id: '16', cat: 'TV/SD', desc: 'TV SD' },
      { id: '17', cat: 'TV', desc: 'TV Pack' },
      { id: '18', cat: 'TV/Documentary', desc: 'TV Documentary' },
      { id: '19', cat: 'Audio/MP3', desc: 'Music MP3' },
      { id: '20', cat: 'Audio/Lossless', desc: 'Music Flac' },
      { id: '23', cat: 'Audio', desc: 'Music Pack' },
      { id: '22', cat: 'Audio/Video', desc: 'Music Video' },
      { id: '35', cat: 'PC/Games', desc: 'Games Pack' },
      { id: '29', cat: 'XXX', desc: 'Movie XXX' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: 'account-login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      remember: 'yes',
    },
    error: [
      {
        selector: 'div.myFrame-caption:contains("Access Denied")',
        message: { selector: 'div.myFrame-content' },
      },
    ],
    test: {
      path: 'torrents-search.php',
      selector: 'a[href="account-logout.php"]',
    },
  },
  search: {
    paths: [{ path: 'torrents-search.php' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldesc: 1,
    },
    rows: { selector: 'tr.t-row' },
    fields: {
      category: {
        selector: 'a[href^="torrents.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'title',
      },
      details: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(4)' },
      date: {
        selector: 'td:nth-child(5)',
        filters: [{ name: 'dateparse', args: '02.01.200615:04:05' }],
      },
      grabs: { selector: 'td:nth-child(7)' },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      downloadvolumefactor: {
        case: {
          'img[src="images/free.gif"]': '0',
          'img[src="images/t_extern.png"]': '0',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: { 'img[src="images/t_extern.png"]': '0', '*': '1' },
      },
    },
  },
  source: 'jackett',
};
