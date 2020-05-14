import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentbd',
  name: 'TorrentBD',
  description: 'A general Bangladesh tracker',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.torrentbd.net/'],
  legacylinks: [
    'http://www.torrentbd.com/torrent',
    'http://www.torrentbd.com/',
    'https://www.torrentbd.com/',
  ],
  caps: {
    categorymappings: [
      { id: '28', cat: 'TV/Anime', desc: 'Anime - All' },
      { id: '65', cat: 'PC/Phone-Android', desc: 'Apps - Android' },
      { id: '20', cat: 'PC', desc: 'Apps - Linux' },
      { id: '19', cat: 'PC/Mac', desc: 'Apps - Mac' },
      { id: '18', cat: 'PC', desc: 'Apps - PC' },
      { id: '7', cat: 'Movies', desc: 'Bangla - Movies | Natok' },
      { id: '49', cat: 'TV', desc: 'Cartoons - All' },
      { id: '9', cat: 'TV/Documentary', desc: 'Documentaries - All' },
      { id: '73', cat: 'Books/Comics', desc: 'E-Books - Comics' },
      { id: '77', cat: 'Books/Ebook', desc: 'E-Books - Manga' },
      { id: '60', cat: 'PC/Games', desc: 'Games - Cracks | Patches' },
      { id: '17', cat: 'Console', desc: 'Games - Other' },
      { id: '10', cat: 'PC/Games', desc: 'Games - PC' },
      { id: '43', cat: 'Console/PS3', desc: 'Games - PS3' },
      { id: '52', cat: 'PC/Games', desc: 'Games - Updates | DLC' },
      { id: '14', cat: 'Console/Xbox', desc: 'Games - Xbox' },
      { id: '80', cat: 'Movies/UHD', desc: 'Movies - 4K BluRay' },
      { id: '47', cat: 'Movies/HD', desc: 'Movies - 1080p BluRay' },
      { id: '67', cat: 'Movies/3D', desc: 'Movies - 3D' },
      { id: '42', cat: 'Movies/BluRay', desc: 'Movies - 720p BluRay' },
      { id: '4', cat: 'Movies/SD', desc: 'Movies - CAM | TS | TC' },
      { id: '1', cat: 'Movies/SD', desc: 'Movies - DVDRip' },
      { id: '56', cat: 'Movies/SD', desc: 'Movies - DVDSCR | R5 | R6' },
      { id: '46', cat: 'Movies/HD', desc: 'Movies - HD-Rip' },
      {
        id: '76',
        cat: 'Movies/BluRay',
        desc: 'Movies - Lossless BluRay',
      },
      { id: '2', cat: 'Movies', desc: 'Movies - Packs' },
      { id: '24', cat: 'Movies/SD', desc: 'Movies - SD BluRay' },
      { id: '3', cat: 'Movies', desc: 'Movies - Unrated' },
      { id: '55', cat: 'Movies', desc: 'Movies - WEB-DL | WEBRip' },
      { id: '22', cat: 'Audio', desc: 'Music - Audio' },
      { id: '64', cat: 'Audio', desc: 'Music - Concerts | Live Shows' },
      { id: '71', cat: 'Audio/Lossless', desc: 'Music - Lossless' },
      { id: '26', cat: 'Audio', desc: 'Music - Radio' },
      { id: '25', cat: 'Audio/Video', desc: 'Music - Video' },
      { id: '36', cat: 'Books/Ebook', desc: 'Other - E-Books' },
      { id: '37', cat: 'Other', desc: 'Other - Images' },
      { id: '38', cat: 'PC/Phone-Other', desc: 'Other - Mobile Phone' },
      { id: '40', cat: 'Other', desc: 'Other - Other | Misc' },
      { id: '39', cat: 'Other', desc: 'Other - Tutorial' },
      { id: '44', cat: 'Other', desc: 'Religious  - Islam' },
      { id: '48', cat: 'TV/Sport', desc: 'Sports - All' },
      { id: '70', cat: 'TV/Sport', desc: 'Sports - Football' },
      { id: '6', cat: 'TV/Sport', desc: 'Sports - Pro Wrestling' },
      { id: '66', cat: 'TV', desc: 'TV - Awards | Ceremonies' },
      { id: '5', cat: 'TV/SD', desc: 'TV - Episodes' },
      { id: '61', cat: 'TV/HD', desc: 'TV - Episodes - 720p | 1080p' },
      { id: '41', cat: 'TV/SD', desc: 'TV - Packs' },
      { id: '62', cat: 'TV/HD', desc: 'TV - Packs - HD | BRRip' },
      { id: '33', cat: 'Other', desc: 'Trailers - Movie | Games' },
      { id: '21', cat: 'Audio', desc: 'Bangla - Audio' },
      { id: '78', cat: 'Audio', desc: 'Music - Video 4K' },
      { id: '72', cat: 'Movies', desc: 'Movies - WEB Rip' },
      { id: '50', cat: 'Audio', desc: 'Music - OST' },
      { id: '34', cat: 'Movies', desc: 'Movies - Tamil' },
      { id: '69', cat: 'Movies', desc: 'Movies - Dual Audio' },
      { id: '57', cat: 'Movies', desc: 'Movies - Animation' },
      { id: '11', cat: 'Console/PS3', desc: 'Games - PS2' },
      { id: '14', cat: 'Console/Xbox360', desc: 'Games - Xbox360' },
      { id: '12', cat: 'Console/PSP', desc: 'Games - PSP' },
      { id: '23', cat: 'Movies/BluRay', desc: 'Hindi - Blu-ray' },
      { id: '51', cat: 'Movies/SD', desc: 'Hindi - CAM | TS | TC' },
      { id: '27', cat: 'Movies/DVD', desc: 'Hindi - DVDRip' },
      { id: '58', cat: 'Movies/SD', desc: 'Hindi - DVDScr | Pre-DVD' },
      { id: '68', cat: 'Movies/SD', desc: 'Hindi - HD-Rip' },
      { id: '59', cat: 'Movies', desc: 'Hindi - Web-Rip' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
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
  ],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 'torrent/', selector: 'a[href="account-logout.php"]' },
  },
  search: {
    paths: [{ path: 'torrent/ajgettorrents.php', method: 'post' }],
    inputs: {
      page: 1,
      origin: 'home',
      sortBy: '',
      order: '',
      query: '{{ .Keywords }}',
      fl: false,
      intris: false,
      active: false,
      categories: '',
      spcat: '',
    },
    rows: { selector: 'table.torrents-table > tbody > tr' },
    fields: {
      category: {
        selector: 'td[onclick^="getSpCatTorrents"]',
        attribute: 'onclick',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      title: { selector: 'a[href^="torrents-details.php?id="]' },
      details: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      date: {
        selector: 'td.torrent-name span:last-child',
        filters: [
          { name: 'replace', args: ['<', ''] },
          { name: 'replace', args: ['min', 'minute'] },
          { name: 'replace', args: ['hr', 'hour'] },
          { name: 'replace', args: ['wk', 'week'] },
          { name: 'timeago' },
        ],
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      comments: { selector: 'a[href*="#comments"]', attribute: 'href' },
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      grabs: { selector: 'td:nth-child(9)' },
      downloadvolumefactor: {
        case: { 'img[src="images/free.gif"]': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
