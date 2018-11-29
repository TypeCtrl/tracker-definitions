import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'torrentsmd',
  name: 'Torrents.Md',
  description:
    'Torrents.Md is a Moldovan Private site for TV / MOVIES / GENERAL',
  language: 'ru-mo',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://torrentsmd.com/'],
  caps: {
    categorymappings: [
      { id: 1, cat: 'Movies', desc: 'Filme' },
      { id: 2, cat: 'Audio', desc: 'Muzică' },
      { id: 3, cat: 'PC', desc: 'Software' },
      { id: 4, cat: 'Console', desc: 'Jocuri' },
      { id: 5, cat: 'TV', desc: 'Tv' },
      { id: 7, cat: 'Other', desc: 'Alte' },
      { id: 8, cat: 'Books', desc: 'Cărţi' },
      { id: 9, cat: 'Audio/Video', desc: 'Muzică video' },
      { id: 10, cat: 'TV/Anime', desc: 'Anime' },
      { id: 11, cat: 'Movies', desc: 'Filme animate' },
      { id: 12, cat: 'Movies/DVD', desc: 'DVD' },
      { id: 13, cat: 'Movies', desc: 'Filme documentare' },
      { id: 14, cat: 'Audio/Audiobook', desc: 'Cărţi audio' },
      { id: 15, cat: 'Other', desc: 'Lecţii video' },
      { id: 16, cat: 'Other', desc: 'Fotografii' },
      { id: 17, cat: 'TV/Sport', desc: 'Sport' },
      { id: 18, cat: 'TV/HD', desc: 'HDTV' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.embedded:has(h2:contains("eşuată"))' }],
    test: { path: 'browse.php' },
  },
  search: {
    paths: [
      { path: '{{if .Query.Keywords}}search.php{{else}}browse.php{{end}}' },
    ],
    inputs: { search_str: '{{ .Query.Keywords }}' },
    rows: {
      selector:
        'table.tableTorrents > tbody > tr:has(a[href^="/details.php?id="])',
    },
    fields: {
      title: { selector: 'a[href^="/details.php?id="]' },
      details: {
        selector: 'a[href^="/details.php?id="]',
        attribute: 'href',
      },
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      download: {
        selector: 'a[href^="/details.php?id="]',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['/details.php', '/download.php'] }],
      },
      files: { selector: 'td:nth-child(3)' },
      date: {
        selector: 'td:nth-child(5)',
        filters: [
          { name: 'replace', args: ['ore', 'hours ago'] },
          { name: 'replace', args: ['minute', 'minutes ago'] },
          { name: 'dateparse', args: '01-02 2006' },
          { name: 'dateparse', args: '01-02' },
        ],
      },
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: { case: { '*': '1' } },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};
