import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'losslessclub',
  name: 'LosslessClub',
  description: 'LosslessClub is a Romanian Private site for High Quality Music',
  language: 'ru-RU',
  type: 'private',
  encoding: 'WINDOWS-1251',
  links: ['https://losslessclub.com/'],
  caps: {
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
    categorymappings: [{ id: '1', cat: 'Audio/Lossless' }],
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td.embedded > div.error' }],
    test: { path: '/browse.php', selector: 'span.bar_user_welcome' },
  },
  search: {
    paths: [{ path: '/browse.php' }],
    inputs: { search: '{{ .Query.Keywords }}', t: 'all' },
    rows: {
      selector: 'div#releases-table > table > tbody > tr:has(a.browselink)',
    },
    fields: {
      title: { selector: 'a.browselink' },
      category: { text: '1' },
      details: { selector: 'a.browselink', attribute: 'href' },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      banner: {
        optional: true,
        selector: 'img.thumbnail',
        attribute: 'src',
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: { optional: true, selector: 'td:nth-child(6) br + span' },
      seeders: {
        selector: 'td:nth-child(6)',
        remove: 'br + span',
        filters: [{ name: 'regexp', args: '([\\.\\d]+)\\s+\\|' }],
      },
      leechers: {
        selector: 'td:nth-child(6)',
        remove: 'br + span',
        filters: [{ name: 'regexp', args: '\\|\\s*([\\.\\d]+)' }],
      },
      date: {
        selector: 'td:nth-child(7)',
        remove: 'a, i',
        filters: [{ name: 'replace', args: ['by', ''] }, { name: 'dateparse', args: '2/01/06' }],
      },
      downloadvolumefactor: { case: { '*': '1' } },
      uploadvolumefactor: { case: { '*': '1' } },
      description: { selector: 'div.tag_list_browse' },
    },
  },
};
