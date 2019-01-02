import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'gay-torrentsorg',
  name: 'gay-torrents.org',
  description: 'Tracker for GAY XXX, movies, TV, books and PC.',
  language: 'en-US',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://gay-torrents.org', 'https://gay-area.org/'],
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'active',
      type: 'select',
      label: 'Status',
      default: 0,
      options: { '0': 'Active and Inactive', '1': 'Active', '2': 'Inactive' },
    },
    {
      name: 'info_categories',
      type: 'info',
      label: 'Hidden categories',
      default: 'Results for categories hidden in profile will not be visible.',
    },
    {
      name: 'info_results',
      type: 'info',
      label: 'Search results',
      default: 'You can increase the number of search results in your profile.<br />Default is 15.',
    },
  ],
  caps: {
    categorymappings: [
      { id: '15', cat: 'XXX', desc: 'Amateur' },
      { id: '16', cat: 'XXX', desc: 'Anal' },
      { id: '42', cat: 'XXX', desc: 'Animation' },
      { id: '18', cat: 'XXX', desc: 'Asian' },
      { id: '19', cat: 'XXX', desc: 'Bareback' },
      { id: '20', cat: 'XXX', desc: 'Bears' },
      { id: '22', cat: 'XXX', desc: 'Bisexual' },
      { id: '21', cat: 'XXX', desc: 'Black' },
      { id: '23', cat: 'XXX', desc: 'Chubs' },
      { id: '25', cat: 'XXX', desc: 'Cross Generation' },
      { id: '51', cat: 'XXX', desc: 'Doctor/Medical' },
      { id: '27', cat: 'XXX', desc: 'Fetish' },
      { id: '28', cat: 'XXX', desc: 'Group Sex' },
      { id: '30', cat: 'XXX', desc: 'Hunks' },
      { id: '52', cat: 'XXX', desc: 'Interracial' },
      { id: '68', cat: 'XXX', desc: 'Homo Erotic' },
      { id: '68', cat: 'Movies', desc: 'Homo Erotic' },
      { id: '68', cat: 'TV', desc: 'Homo Erotic' },
      { id: '68', cat: 'Other', desc: 'Homo Erotic' },
      { id: '32', cat: 'XXX', desc: 'Latino' },
      { id: '50', cat: 'XXX', desc: 'Middle Eastern' },
      { id: '33', cat: 'XXX', desc: 'Military' },
      { id: '34', cat: 'XXX', desc: 'Oral-Sex' },
      { id: '40', cat: 'Other', desc: 'Other' },
      { id: '35', cat: 'XXX', desc: 'Solo' },
      { id: '36', cat: 'XXX', desc: 'Transsexual' },
      { id: '37', cat: 'XXX', desc: 'Twinks' },
      { id: '38', cat: 'XXX', desc: 'Vintage' },
      { id: '39', cat: 'XXX', desc: 'Wrestling' },
      { id: '17', cat: 'PC', desc: 'Applications' },
      { id: '31', cat: 'XXX/Imageset', desc: 'Images' },
      { id: '49', cat: 'Books', desc: 'Books' },
      { id: '41', cat: 'Movies', desc: 'Non-Porn' },
      { id: '41', cat: 'TV', desc: 'Non-Porn' },
      { id: '41', cat: 'Other', desc: 'Non-Porn' },
    ],
    modes: { search: ['q'] },
  },
  login: {
    method: 'post',
    path: 'login.php',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [
      {
        selector: 'div.fixed_width:nth-child(4) > span:contains("Incorrect")',
      },
    ],
    test: { path: 'usercp.php' },
  },
  search: {
    paths: [{ path: 'torrents_beta.php', method: 'get' }],
    inputs: {
      $raw: '{{range .Categories}}category[]={{.}}&{{end}}',
      search: '{{ .Query.Keywords }}',
      active: '{{ .Config.active }}',
    },
    rows: { selector: 'div.torrent' },
    fields: {
      title: {
        selector: 'div:nth-child(2) > div:nth-child(1) > a:nth-child(1)',
      },
      category: {
        selector: 'a[href^="torrents_beta.php?category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      banner: {
        optional: true,
        selector: 'a.screenshot',
        attribute: 'rel',
      },
      grabs: {
        selector: 'div.downloadTimes',
        filters: [
          { name: 'replace', args: ['No downloads yet', '0'] },
          { name: 'regexp', args: '([\\d,]+)' },
        ],
      },
      comments: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      size: { selector: 'div.size' },
      seeders: { selector: 'div.downloadPeers div:nth-child(1) > a' },
      leechers: { selector: 'div.downloadPeers > div:nth-child(2) > a' },
      date: {
        selector: 'div.date',
        filters: [
          {
            name: 're_replace',
            args: ['on (\\d{2}:\\d{2}) (\\d{2})-([a-zA-Z]{3})-(\\d{4})', '$2 $3 $4 $1'],
          },
          { name: 'append', args: ' +01:00' },
          { name: 'dateparse', args: '02 Jan 2006 15:04 -07:00' },
        ],
      },
      downloadvolumefactor: {
        case: {
          'div:nth-child(2) > div:nth-child(3) > a:contains("FREE!")': 0,
          'div:nth-child(2) > div:nth-child(3) > a:contains("-50%")': 0.5,
          'div:nth-child(2) > div:nth-child(3) > a:contains("-25%")': 0.25,
          '*': 1,
        },
      },
      uploadvolumefactor: { case: { '*': 1 } },
    },
  },
};
