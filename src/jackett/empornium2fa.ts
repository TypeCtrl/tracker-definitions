import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'empornium2fa',
  name: 'Empornium2FA',
  description: 'this indexer uses a cookie login for Empornium for those that want to use 2FA',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.empornium.me/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'XXX', desc: 'Amateur' },
      { id: '2', cat: 'XXX', desc: 'Anal' },
      { id: '5', cat: 'XXX', desc: 'Asian' },
      { id: '6', cat: 'XXX', desc: 'BBW' },
      { id: '30', cat: 'XXX', desc: 'BDSM' },
      { id: '36', cat: 'XXX', desc: 'Big Ass' },
      { id: '8', cat: 'XXX', desc: 'Big Tits' },
      { id: '7', cat: 'XXX', desc: 'Black' },
      { id: '9', cat: 'XXX', desc: 'Classic' },
      { id: '37', cat: 'XXX', desc: 'Creampie' },
      { id: '10', cat: 'XXX', desc: 'Cumshot' },
      { id: '11', cat: 'XXX', desc: 'DVD-R' },
      { id: '12', cat: 'XXX', desc: 'Fetish' },
      { id: '14', cat: 'XXX', desc: 'Gang Bang / Orgy' },
      { id: '39', cat: 'XXX', desc: 'Gay / Bi' },
      { id: '56', cat: 'XXX', desc: 'Hairy' },
      { id: '35', cat: 'XXX', desc: 'Hardcore' },
      { id: '44', cat: 'XXX', desc: 'HD Porn' },
      { id: '3', cat: 'XXX', desc: 'Hentai / 3D' },
      { id: '25', cat: 'XXX', desc: 'Homemade' },
      { id: '43', cat: 'XXX', desc: 'Interracial' },
      { id: '16', cat: 'XXX', desc: 'Latina' },
      { id: '23', cat: 'XXX', desc: 'Lesbian' },
      { id: '52', cat: 'XXX', desc: 'Lingerie' },
      { id: '27', cat: 'XXX', desc: 'Magazines' },
      { id: '53', cat: 'XXX', desc: 'Manga / Comic' },
      { id: '18', cat: 'XXX', desc: 'Masturbation' },
      { id: '26', cat: 'XXX', desc: 'Mature' },
      { id: '40', cat: 'XXX', desc: 'Megapack' },
      { id: '41', cat: 'XXX', desc: 'Natural Tits' },
      { id: '17', cat: 'XXX', desc: 'Oral' },
      { id: '29', cat: 'XXX', desc: 'Other' },
      { id: '47', cat: 'XXX', desc: 'Parody' },
      { id: '24', cat: 'XXX', desc: 'Paysite' },
      { id: '21', cat: 'XXX', desc: 'Pictures / Images' },
      { id: '50', cat: 'XXX', desc: 'Piss' },
      { id: '55', cat: 'XXX', desc: 'Porn Music Videos' },
      { id: '46', cat: 'XXX', desc: 'Pregnant / Preggo' },
      { id: '51', cat: 'XXX', desc: 'Scat/Puke' },
      { id: '22', cat: 'XXX', desc: 'Siterip' },
      { id: '20', cat: 'XXX', desc: 'Softcore' },
      { id: '49', cat: 'XXX', desc: 'Squirt' },
      { id: '34', cat: 'XXX', desc: 'Straight' },
      { id: '19', cat: 'XXX', desc: 'Teen' },
      { id: '15', cat: 'XXX', desc: 'Transsexual' },
      { id: '45', cat: 'XXX', desc: 'Voyeur' },
      { id: '13', cat: 'XXX', desc: 'XXX Games / Apps' },
    ],
    modes: { search: ['q'], 'tv-search': ['q'], 'movie-search': ['q'] },
  },
  settings: [
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'infocookie',
      type: 'info',
      label: 'Password',
      default:
        "<ol><li>Login to this tracker with your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button (Chrome Browser) or <b>HTML</b> button (FireFox)<li>Refresh the page by pressing <b>F5</b><li>Click on the first row entry<li>Select the <b>Headers</b> tab on the Right panel<li>Find <b>'cookie:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole cookie string <i>(everything after 'cookie: ')</i> and <b>Paste</b> here.</ol>",
    },
    {
      name: 'freeleech',
      type: 'checkbox',
      label: 'Search freeleech only',
      default: false,
    },
  ],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 'torrents.php', selector: '#nav_userinfo' },
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      $raw: '{{range .Categories}}filter_cat[{{.}}]=1&{{end}}',
      searchtext: '',
      title: '{{ .Keywords }}',
      order_by: 'time',
      order_way: 'desc',
      action: 'advanced',
      filter_freeleech: '{{ if .Config.freeleech }}1{{ else }}{{ end }}',
      filelist: '',
      taglist: '',
    },
    rows: {
      selector: 'table#torrent_table > tbody > tr[class^="torrent row"]',
    },
    fields: {
      download: {
        selector: 'a[href^="/torrents.php?action=download&id="]',
        attribute: 'href',
      },
      description: { selector: 'div.tags' },
      title: { selector: 'a[href^="/torrents.php?id="]' },
      category: {
        selector: 'a[href*="filter_cat"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '(\\d+)]=1' }],
      },
      details: {
        selector: 'a[href^="/torrents.php?id="]',
        attribute: 'href',
      },
      banner: {
        optional: true,
        selector: 'td:nth-child(2) > script',
        filters: [
          { name: 'regexp', args: 'src=\\\\"(.*?)\\\\"' },
          { name: 're_replace', args: ['\\\\(.)', '$1'] },
          {
            name: 'replace',
            args: ['/static/common/noartwork/noimage.png', ''],
          },
        ],
      },
      files: { selector: 'td:nth-child(3)' },
      date: {
        selector: 'td:nth-child(5) > span',
        attribute: 'title',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: 'Jan 02 2006, 15:04 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(6)' },
      grabs: { selector: 'td:nth-child(7)' },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      downloadvolumefactor: {
        case: {
          'span.icon[title*="Freeleech"]': 0,
          'img[alt="Freeleech"]': 0,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 0.5 },
    },
  },
  source: 'jackett',
};
