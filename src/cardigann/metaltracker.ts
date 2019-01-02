import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'metaltracker',
  name: 'Metal Tracker',
  description:
    'Metal Tracker is a Semi-Private site dedicated to HEAVY METAL MUSIC. This definition is for the English site.',
  language: 'en-US',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['http://en.metal-tracker.com/'],
  caps: {
    modes: {
      search: ['q'],
      'music-search': ['q', 'album', 'artist', 'label', 'year'],
    },
    categorymappings: [
      { id: 'Books', cat: 'Audio/Audiobook' },
      { id: 'Video', cat: 'Audio/Video' },
      { id: 'Music', cat: 'Audio/MP3' },
    ],
  },
  login: {
    path: '/user/login.html',
    method: 'form',
    form: 'form[action="/user/login.html"]',
    inputs: {
      'UserLogin[username]': '{{ .Config.username }}',
      'UserLogin[password]': '{{ .Config.password }}',
    },
    error: [
      {
        selector: 'div.errorSummary',
        message: { selector: 'div.errorSummary ul li' },
      },
    ],
    test: {
      path: '/torrents/search.html',
      selector: 'li li:has(a[href="/user/logout.html"])',
    },
  },
  search: {
    path: '/torrents/search.html',
    method: 'post',
    inputs: {
      'SearchTorrentsForm[nameTorrent]': '{{ .Query.Keywords }}',
      'go-search': 'Search',
    },
    rows: { selector: '.smallalbum' },
    fields: {
      title: { selector: 'a h3' },
      details: { selector: '.thumb a', attribute: 'href' },
      download: {
        selector: '.center a[href^="/torrents/download/id/"]',
        attribute: 'href',
      },
      seeders: { selector: '.center font:nth-of-type(1)' },
      leechers: { selector: '.center font:nth-of-type(2)' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
      date: { text: 'today' },
      category: {
        filters: [{ name: 'regexp', args: '.*Type: ([A-Z][a-z]+).*' }],
      },
      size: {
        filters: [{ name: 'regexp', args: 'Size:\\s+([\\w\\d\\.,]+ \\w\\w)' }],
      },
    },
  },
};
