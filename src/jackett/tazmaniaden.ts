import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'tazmaniaden',
  name: 'Tazmania-Den',
  description: 'Tazmania-Den is a Private tracker for MOVIES / TV / GENERAL',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://tazmania-den.net/'],
  caps: {
    categorymappings: [{ id: '1', cat: 'Other', desc: 'Other' }],
    modes: { search: ['q'] },
  },
  login: {
    path: 'account-login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'div.myFrame:contains("Access Denied")' }],
    test: {
      path: 'torrents-search.php',
      selector: 'a[href="account-logout.php"]',
    },
  },
  download: {
    before: {
      path: 'thanks.php',
      method: 'post',
      inputs: {
        torrent: '{{ .DownloadUri.Query.id }}',
        submit: 'Thanks!',
      },
    },
    selector: 'a[href^="download.php?id="]',
    attribute: 'href',
  },
  search: {
    paths: [{ path: 'torrents-search.php' }],
    inputs: {
      search: '{{ .Keywords }}',
      incldead: 1,
      freeleech: 0,
      lang: 0,
    },
    rows: { selector: 'tr.t-row' },
    fields: {
      category: { text: 1 },
      title: { selector: 'a[href^="torrents-details.php?id="]' },
      details: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      banner: {
        selector: 'td:nth-child(1) img',
        optional: true,
        attribute: 'src',
      },
      date: {
        selector: 'td:nth-child(2)',
        filters: [
          { name: 'regexp', args: '(\\d{2}-\\d{2}-\\d{4})' },
          { name: 'dateparse', args: '02-01-2006' },
        ],
      },
      size: { selector: 'td:nth-child(4)' },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(6)' },
      grabs: { selector: 'td:nth-child(7)' },
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
