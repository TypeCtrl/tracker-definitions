export const definition: any = {
  site: 'immortalseed',
  name: 'Immortalseed',
  description: 'a general tracker',
  language: 'en-us',
  links: ['https://immortalseed.me/'],
  caps: {
    categories: {
      '3': 'Other',
      '4': 'TV/HD',
      '6': 'TV/SD',
      '7': 'TV/Sport',
      '8': 'TV/HD',
      '9': 'TV/SD',
      '14': 'Movies/SD',
      '16': 'Movies/HD',
      '17': 'Movies/SD',
      '22': 'Books/Ebook',
      '23': 'PC',
      '25': 'PC/Games',
      '30': 'Audio',
      '31': 'Books',
      '32': 'TV/Anime',
      '35': 'Audio/Audiobook',
      '45': 'Other',
      '47': 'TV/SD',
      '48': 'TV/SD',
    },
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
    path: '/browse.php?do=search',
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
  },
};
