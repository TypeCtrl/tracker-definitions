import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'swarmazon',
  name: 'Swarmazon',
  description: 'Swarmazon is a Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://swarmazon.club/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '2', cat: 'TV', desc: 'Television' },
      { id: '3', cat: 'Other', desc: 'Video Courses' },
      { id: '4', cat: 'Audio', desc: 'Music' },
      { id: '5', cat: 'PC/Games', desc: 'Games' },
      { id: '6', cat: 'PC', desc: 'Software' },
      { id: '7', cat: 'TV/Anime', desc: 'Anime' },
      { id: '8', cat: 'Books/Ebook', desc: 'E-Books' },
      { id: '9', cat: 'Audio/Audiobook', desc: 'Audio Books' },
      { id: '10', cat: 'Books/Comics', desc: 'Comics' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  login: {
    path: 'en/account/login.php',
    method: 'form',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      remember: 'on',
    },
    error: [
      {
        selector: 'script:contains("Wrong")',
        message: { text: 'Wrong username or password.' },
      },
      {
        selector: 'script:contains("not found")',
        message: { text: 'User not found.' },
      },
    ],
    test: { path: 'forum/' },
  },
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}en/search/search.php?category=all&query={{ .Keywords }}&limit=50{{ else }}index.php?date_range=14{{ end }}',
      },
    ],
    rows: {
      selector: 'table.table-striped > tbody > tr',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'td.Name',
        case: {
          'small:contains("in Movies")': 1,
          'small:contains("in Television")': 2,
          'small:contains("in Video Courses")': 3,
          'small:contains("in Music")': 4,
          'small:contains("in Games")': 5,
          'small:contains("in Software")': 6,
          'small:contains("in Anime")': 7,
          'small:contains("in E-Books")': 8,
          'small:contains("in Audio Books")': 9,
          'small:contains("in Comics")': 10,
        },
      },
      title: { selector: 'a[href*="/view/torrent.php?hash="]' },
      details: {
        selector: 'a[href*="/view/torrent.php?hash="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="/api/download.php?hash="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-last-child(6)' },
      date: {
        selector: 'td:nth-last-child(5)',
        filters: [
          { name: 'append', args: ' -07:00' },
          { name: 'dateparse', args: '2006-01-02 15:04:05 -07:00' },
        ],
      },
      grabs: { selector: 'td:nth-last-child(4)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      downloadvolumefactor: {
        case: { 'span.badge:contains("Freeleech")': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 1.1 },
    },
  },
  source: 'jackett',
};
