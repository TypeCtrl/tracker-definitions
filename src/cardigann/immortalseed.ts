import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'immortalseed',
  name: 'Immortalseed',
  description: 'a general tracker',
  language: 'en-US',
  links: ['https://immortalseed.me/'],
  caps: {
    categorymappings: [
      { id: '3', cat: 'Other' },
      { id: '4', cat: 'TV/HD' },
      { id: '6', cat: 'TV/SD' },
      { id: '7', cat: 'TV/Sport' },
      { id: '8', cat: 'TV/HD' },
      { id: '9', cat: 'TV/SD' },
      { id: '14', cat: 'Movies/SD' },
      { id: '16', cat: 'Movies/HD' },
      { id: '17', cat: 'Movies/SD' },
      { id: '22', cat: 'Books/Ebook' },
      { id: '23', cat: 'PC' },
      { id: '25', cat: 'PC/Games' },
      { id: '30', cat: 'Audio' },
      { id: '31', cat: 'Books' },
      { id: '32', cat: 'TV/Anime' },
      { id: '35', cat: 'Audio/Audiobook' },
      { id: '45', cat: 'Other' },
      { id: '47', cat: 'TV/SD' },
      { id: '48', cat: 'TV/SD' },
    ],
  },
  ratio: {
    path: '/browse.php',
    selector: 'div#top > div.padding > span:nth-child(2)',
    filters: [{ name: 'regexp', args: 'Ratio: ([\\d\\.,]+)' }],
  },
  login: {
    path: '/takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    test: { path: '/usercp.php', selector: 'div#header > div.zepclass' },
  },
  search: {
    inputs: {
      keywords: '{{ .Query.Keywords }}',
      include_dead_torrents: 'yes',
      category: 0,
      search_type: 't_name',
    },
    rows: {
      selector: 'table#sortabletable > tbody > tr:has(div[class="tooltip-content"])',
    },
    fields: {
      title: {
        selector: 'div[class="tooltip-content"] > div:nth-child(1)',
      },
      category: {
        selector: 'td.unsortable2 > a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      comments: { selector: 'a[title="Comments"]', attribute: 'href' },
      download: {
        selector: 'td:nth-child(3) > a:nth-child(2)',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(5)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      date: {
        selector: 'td:nth-child(n) > div:has(span[style="float: right;"])',
      },
    },
    paths: [{ path: '/browse.php?do=search' }],
  },
  encoding: 'UTF-8',
  source: 'cardigann',
};
