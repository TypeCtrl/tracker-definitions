import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'transmithenet',
  name: 'Transmithe.net',
  description: 'A TV tracker',
  language: 'en-US',
  links: ['https://transmithe.net'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'TV' },
      { id: '2', cat: 'TV/HD' },
      { id: '3', cat: 'TV/SD' },
    ],
  },
  login: {
    path: '/login.php',
    method: 'post',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      keeplogged: '1',
      login: 'Login',
    },
    error: [{ selector: 'span.warning' }],
    test: { path: '/torrents.php' },
  },
  ratio: { text: '-1' },
  search: {
    path: '/torrents.php',
    inputs: {
      searchtext: '{{ .Query.Keywords }}',
      order_by: 'time',
      order_way: 'desc',
      action: 'advanced',
    },
    rows: { selector: 'table#torrent_table > tbody > tr.torrent' },
    fields: {
      title: {
        selector: 'a[data-src]',
        attribute: 'data-src',
        filters: [{ name: 'regexp', args: '(.+?)(\\.[\\d\\w]{3,4})?$' }],
      },
      description: { selector: 'div.tags' },
      category: {
        selector: 'div.tags',
        case: {
          'a[href="torrents.php?action=basic&taglist=hd"]': '2',
          'a[href="torrents.php?action=basic&taglist=sd"]': '3',
          'a:contains("4320p")': '2',
          'a:contains("2160p")': '2',
          'a:contains("1440p")': '2',
          'a:contains("1080p")': '2',
          'a:contains("720p")': '2',
          'a:contains("480p")': '3',
          'a:contains("360p")': '3',
          'a:contains("240p")': '3',
        },
      },
      comments: { selector: 'a[data-src]', attribute: 'href' },
      download: {
        selector: 'a[href^="torrents.php?action=download&id="]',
        attribute: 'href',
      },
      files: {
        selector: 'td > div:contains("Files:")',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      size: { selector: 'a[data-filesize]', attribute: 'data-filesize' },
      seeders: { selector: 'td:nth-last-child(2)' },
      leechers: { selector: 'td:nth-last-child(1)' },
      date: { selector: 'span.time', attribute: 'title' },
      grabs: { selector: 'td:nth-last-child(3)' },
      downloadvolumefactor: {
        case: { 'img[alt="Freeleech"]': '0', '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  encoding: 'UTF-8',
};
