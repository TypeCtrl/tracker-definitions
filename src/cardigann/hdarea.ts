export const definition: any = {
  site: 'hdarea',
  name: 'HDArea',
  language: 'en-us',
  links: ['http://www.hdarea.co/'],
  caps: {
    categories: {
      '401': 'TV/HD',
      '402': 'TV',
      '403': 'TV',
      '404': 'TV/Documentary',
      '405': 'TV/Anime',
      '406': 'Audio/Video',
      '407': 'TV/Sport',
      '408': 'Audio/Lossless',
      '409': 'Other/Misc',
      '410': 'TV/HD',
      '411': 'TV/HD',
      '412': 'Movies/WEBDL',
      '413': 'TV/HD',
      '414': 'Movies/DVD',
      '415': 'Movies/BluRay',
      '416': 'Movies/3D',
      '417': 'Movies/Other',
    },
  },
  login: {
    path: '/takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ path: '/takelogin.php', message: { selector: 'td.text' } }],
    test: { path: '/messages.php' },
  },
  search: {
    path: '/torrents.php?search={{ .Query.Keywords}}',
    rows: { selector: 'table.torrents tbody tr.nonstick_outer_bg' },
    fields: {
      category: {
        selector: 'td:nth-child(1) > a:nth-child(1)',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '\\?cat=(\\d+)' }],
      },
      title: { selector: 'td:nth-child(2) table.torrentname tbody td a b' },
      details: {
        selector: 'td:nth-child(1) > a:nth-child(1)',
        attribute: 'href',
      },
      download: {
        selector: 'td:nth-child(4) > a:nth-child(1)',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(5)' },
      date: {
        selector: 'td:nth-child(4) > span:nth-child(1)',
        attribute: 'title',
      },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
    },
  },
};
