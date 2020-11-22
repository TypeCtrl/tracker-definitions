import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'snowpt',
  name: 'SnowPT',
  description: 'SnowPT (SSPT) is a CHINESE Private Torrent Tracker for ANIME',
  language: 'zh-CN',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://skyeysnow.com/'],
  caps: {
    categorymappings: [{ id: '1', cat: 'TV/Anime', desc: 'Anime' }],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[id^="loginform_"]',
    inputs: {
      referer: '/',
      loginfield: 'username',
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      cookietime: 2592000,
    },
    error: [{ selector: 'div#messagetext:contains("登录失败") p' }],
    test: { path: '/', selector: 'a[href*="action=logout&formhash="]' },
  },
  search: {
    paths: [{ path: 'forum.php' }],
    inputs: { mod: 'torrents', cat: 1, search: '{{ .Keywords }}' },
    rows: {
      selector: 'table.torrents > tbody > tr:has(a[href^="/download.php?id="])',
    },
    fields: {
      category: { text: 1 },
      title: {
        optional: true,
        selector: 'a[title][href^="/forum.php?mod=viewthread&tid="]',
        attribute: 'title',
      },
      details: {
        selector: 'a[href^="/forum.php?mod=viewthread&tid="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="/download.php?id="]',
        attribute: 'href',
      },
      date: {
        selector: 'td:nth-child(3):not(:has(span))',
        optional: true,
        filters: [
          { name: 'append', args: ' +08:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(4)' },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(6)' },
      grabs: { selector: 'td:nth-child(7)' },
      downloadvolumefactor: {
        case: { 'img.sp_4': 0, 'img.sp_2': 0.5, '*': 1 },
      },
      uploadvolumefactor: { case: { '*': 1 } },
    },
  },
  source: 'jackett',
};
