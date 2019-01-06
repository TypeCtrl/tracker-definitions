import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'shellife',
  name: 'Shellife',
  description: 'Shellife (SL) is a Private Torrent Tracker for NON MAINSTREAM MUSIC',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://shellife.eu/'],
  caps: {
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
    categorymappings: [{ id: '1', cat: 'Audio' }],
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td:has(h2:contains("failed"))' }],
    test: { path: 'browse.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: { search: '{{ .Query.Keywords }}', incldead: 1 },
    rows: {
      selector: 'table#ct > tbody > tr.torrent_row',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      title: { selector: 'a.altlink' },
      'title|append|1': { text: ' - ' },
      'title|append|2': { selector: 'a[name]' },
      details: {
        selector: 'a[name]',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['#', '/details.php?id='] }],
      },
      category: { text: 1 },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      grabs: { selector: 'td:nth-child(6)' },
      size: { selector: 'td:nth-child(5)' },
      downloadvolumefactor: {
        case: {
          'img[alt="Freeleech"]': '0',
          'img[alt="Free"]': '0',
          '*': '1',
        },
      },
      uploadvolumefactor: { case: { '*': '1' } },
      description: {
        selector: 'td:nth-child(2)',
        remove: 'a.altlink, a[name], div[id^="news"]',
        filters: [{ name: 'trim', args: '-' }, { name: 'trim', args: ' ' }],
      },
    },
  },
  source: 'jackett',
};
