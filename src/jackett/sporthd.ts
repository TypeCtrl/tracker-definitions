import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'sporthd',
  name: 'SportHD',
  description: 'SportHD is a Private Torrent Tracker for HD SPORTS',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://sporthd.org/'],
  caps: {
    categorymappings: [
      { id: '83', cat: 'TV/Sport', desc: 'AFC Champions League' },
      { id: '50', cat: 'TV/Sport', desc: 'Australian Open' },
      { id: '32', cat: 'TV/Sport', desc: 'Basketball' },
      { id: '85', cat: 'TV/Sport', desc: 'Basketball Champions League' },
      { id: '87', cat: 'TV/Sport', desc: 'Basketball Eurocup' },
      { id: '88', cat: 'TV/Sport', desc: 'Basketball Pro A' },
      { id: '80', cat: 'TV/Sport', desc: 'Belgian ProLeague' },
      { id: '22', cat: 'TV/Sport', desc: 'Boxing' },
      { id: '23', cat: 'TV/Sport', desc: 'Brasilareo Seria A' },
      { id: '54', cat: 'TV/Sport', desc: 'Brazil League' },
      { id: '11', cat: 'TV/Sport', desc: 'BundesLiga' },
      { id: '90', cat: 'TV/Sport', desc: 'Bundesliga 2' },
      { id: '45', cat: 'TV/Sport', desc: 'CAF' },
      { id: '78', cat: 'TV/Sport', desc: 'Canadian Football League' },
      { id: '37', cat: 'TV/Sport', desc: 'Champions Hockey League' },
      { id: '77', cat: 'TV/Sport', desc: 'Chinese Super League' },
      { id: '74', cat: 'TV/Sport', desc: 'CONCACAF' },
      { id: '70', cat: 'TV/Sport', desc: 'Confederation CUP' },
      { id: '76', cat: 'TV/Sport', desc: 'CONMEBOL' },
      { id: '46', cat: 'TV/Sport', desc: 'Copa Americana' },
      { id: '41', cat: 'TV/Sport', desc: 'Copa Del Rey' },
      { id: '42', cat: 'TV/Sport', desc: 'Copa do Brasil' },
      { id: '43', cat: 'TV/Sport', desc: 'Copa Libertadores' },
      { id: '73', cat: 'TV/Sport', desc: 'Copa MX' },
      { id: '40', cat: 'TV/Sport', desc: 'Coppa Italia' },
      { id: '51', cat: 'TV/Sport', desc: 'Coupe de France' },
      { id: '79', cat: 'TV/Sport', desc: 'cyclisme' },
      { id: '39', cat: 'TV/Sport', desc: 'DFB Pokal' },
      { id: '72', cat: 'TV/Sport', desc: 'EFL' },
      { id: '49', cat: 'TV/Sport', desc: 'English League Cup' },
      { id: '8', cat: 'TV/Sport', desc: 'EPL' },
      { id: '13', cat: 'TV/Sport', desc: 'Eredivisie' },
      { id: '2', cat: 'TV/Sport', desc: 'EURO Cup' },
      { id: '6', cat: 'TV/Sport', desc: 'EURO Cup Qualification' },
      { id: '66', cat: 'TV/Sport', desc: 'Eurobasket' },
      { id: '53', cat: 'TV/Sport', desc: 'Euroleague ULEB' },
      { id: '86', cat: 'TV/Sport', desc: 'Europe Cup FIBA' },
      { id: '38', cat: 'TV/Sport', desc: 'FA Cup' },
      { id: '59', cat: 'TV/Sport', desc: 'FIFA U-20 World Cup' },
      { id: '69', cat: 'TV/Sport', desc: 'FIFA World Clup Cup' },
      { id: '19', cat: 'TV/Sport', desc: 'Football League Championship' },
      { id: '18', cat: 'TV/Sport', desc: 'Formula 1' },
      { id: '81', cat: 'TV/Sport', desc: 'France Ligue 2' },
      { id: '7', cat: 'TV/Sport', desc: 'Friendly matches' },
      { id: '91', cat: 'TV/Sport', desc: 'Greece Basket' },
      { id: '30', cat: 'TV/Sport', desc: 'Handball' },
      { id: '31', cat: 'TV/Sport', desc: 'IIHF' },
      { id: '15', cat: 'TV/Sport', desc: 'IndyCar' },
      { id: '20', cat: 'TV/Sport', desc: 'KHL' },
      { id: '10', cat: 'TV/Sport', desc: 'La Liga' },
      { id: '89', cat: 'TV/Sport', desc: 'liga Endesa' },
      { id: '84', cat: 'TV/Sport', desc: 'Liga Sudamericana' },
      { id: '12', cat: 'TV/Sport', desc: 'Ligue 1' },
      { id: '21', cat: 'TV/Sport', desc: 'Major League Soccer' },
      { id: '67', cat: 'TV/Sport', desc: 'MLB' },
      { id: '63', cat: 'TV/Sport', desc: 'MMA' },
      { id: '58', cat: 'TV/Sport', desc: 'MotoGP' },
      { id: '16', cat: 'TV/Sport', desc: 'NBA' },
      { id: '57', cat: 'TV/Sport', desc: 'NBA Playoffs' },
      { id: '14', cat: 'TV/Sport', desc: 'NCAA' },
      { id: '34', cat: 'TV/Sport', desc: 'NFL' },
      { id: '17', cat: 'TV/Sport', desc: 'NHL' },
      { id: '36', cat: 'TV/Sport', desc: 'Old classic games' },
      { id: '68', cat: 'TV/Sport', desc: 'Olympic Games 2016' },
      { id: '28', cat: 'TV/Sport', desc: 'Other domestic leagues' },
      { id: '55', cat: 'TV/Sport', desc: 'Paulista A1' },
      { id: '26', cat: 'TV/Sport', desc: 'Portuguese League' },
      { id: '65', cat: 'TV/Sport', desc: 'ROH' },
      { id: '61', cat: 'TV/Sport', desc: 'Rollan Garros' },
      { id: '29', cat: 'TV/Sport', desc: 'Rugby' },
      { id: '82', cat: 'TV/Sport', desc: 'Scotland Premiership' },
      { id: '9', cat: 'TV/Sport', desc: 'Serie A' },
      { id: '33', cat: 'TV/Sport', desc: 'SHL' },
      { id: '47', cat: 'TV/Sport', desc: 'Ski Jumping' },
      { id: '71', cat: 'TV/Sport', desc: 'Snooker' },
      { id: '25', cat: 'TV/Sport', desc: 'Sport video' },
      { id: '44', cat: 'TV/Sport', desc: 'Sudamericana' },
      { id: '52', cat: 'TV/Sport', desc: 'Taca Da Liga' },
      { id: '24', cat: 'TV/Sport', desc: 'Tennis' },
      { id: '64', cat: 'TV/Sport', desc: 'TNA' },
      { id: '56', cat: 'TV/Sport', desc: 'Torneo Premiera A' },
      { id: '75', cat: 'TV/Sport', desc: 'Turkish Super Lig' },
      { id: '3', cat: 'TV/Sport', desc: 'UCL' },
      { id: '4', cat: 'TV/Sport', desc: 'UEL' },
      { id: '60', cat: 'TV/Sport', desc: 'UFC' },
      { id: '35', cat: 'TV/Sport', desc: 'Volleyball' },
      { id: '5', cat: 'TV/Sport', desc: 'WC Qualification' },
      { id: '1', cat: 'TV/Sport', desc: 'World Cup' },
      { id: '27', cat: 'TV/Sport', desc: 'World Cup 2014' },
      { id: '48', cat: 'TV/Sport', desc: 'WWE' },
    ],
    modes: { search: ['q'], 'tv-search': ['q'] },
  },
  settings: [
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info_cookie',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Login to this tracker with your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button<li>Refresh the page by pressing <b>F5</b><li>Select the <b>Headers</b> tab<li>Find <b>'cookie:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole cookie string <i>(everything after 'cookie: ')</i> and <b>Paste</b> here.</ol>",
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '2',
      options: { '1': 'title', '2': 'created', '3': 'size', '4': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
    {
      name: 'info_results',
      type: 'info',
      label: 'Results Per Page',
      default:
        'For best results, change the <b>Torrents per page:</b> setting to <b>100</b> on your account profile.',
    },
  ],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 'index.php' },
  },
  download: {
    selector: 'a[href^="download.php?id="]',
    attribute: 'href',
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}filter_cat[{{.}}]=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: 1,
      s: 0,
      stype: 0,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table.embedded > tbody > tr:has(a[href^="browse.php?cat="])',
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['details.php?id=', 'download.php?id='] }],
      },
      size: { selector: 'td:nth-last-child(4)' },
      seeders: {
        selector: 'td:nth-last-child(3)',
        filters: [{ name: 'split', args: ['|', 0] }],
      },
      leechers: {
        selector: 'td:nth-last-child(3)',
        filters: [{ name: 'split', args: ['|', 0] }],
      },
      date: {
        selector: 'td:nth-last-child(1)',
        filters: [{ name: 'regexp', args: '^(.+?)\\d{4}' }, { name: 'timeago' }],
      },
      description: {
        optional: true,
        selector: 'img[src="/pic/vipbig.gif"]',
        attribute: 'title',
      },
      downloadvolumefactor: {
        case: { 'img[src="/pic/freedownload.gif"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
