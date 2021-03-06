import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'iptorrents',
  name: 'IPTorrents',
  description: 'Always a step ahead.',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: [
    'https://iptorrents.com/',
    'https://www.iptorrents.com/',
    'https://iptorrents.eu/',
    'https://nemo.iptorrents.com/',
    'https://ipt.getcrazy.me/',
    'https://ipt.findnemo.net/',
    'https://ipt.beelyrics.net/',
    'https://ipt.venom.global/',
    'https://ipt.workisboring.net/',
    'https://ipt.lol/',
    'https://ipt.cool/',
    'https://ipt.world/',
  ],
  caps: {
    categorymappings: [
      { id: '72', cat: 'Movies', desc: 'Movies' },
      { id: '87', cat: 'Movies/3D', desc: 'Movies/3D' },
      { id: '77', cat: 'Movies/SD', desc: 'Movies/480p' },
      { id: '101', cat: 'Movies/UHD', desc: 'Movies/4K' },
      { id: '89', cat: 'Movies/BluRay', desc: 'Movies/BD-R' },
      { id: '90', cat: 'Movies/BluRay', desc: 'Movies/BD-Rip' },
      { id: '96', cat: 'Movies/SD', desc: 'Movies/Cam' },
      { id: '6', cat: 'Movies/SD', desc: 'Movies/DVD-R' },
      { id: '48', cat: 'Movies/HD', desc: 'Movies/HD/Bluray' },
      { id: '54', cat: 'Movies', desc: 'Movies/Kids' },
      { id: '62', cat: 'Movies', desc: 'Movies/MP4' },
      { id: '38', cat: 'Movies/Foreign', desc: 'Movies/Non-English' },
      { id: '68', cat: 'Movies', desc: 'Movies/Packs' },
      { id: '20', cat: 'Movies', desc: 'Movies/Web-DL' },
      { id: '7', cat: 'Movies', desc: 'Movies/Xvid' },
      { id: '100', cat: 'Movies', desc: 'Movies/x265' },
      { id: '73', cat: 'TV', desc: 'TV' },
      { id: '26', cat: 'TV/Documentary', desc: 'Documentaries' },
      { id: '55', cat: 'TV/Sport', desc: 'Sports' },
      { id: '78', cat: 'TV/SD', desc: 'TV/480p' },
      { id: '23', cat: 'TV/HD', desc: 'TV/BD' },
      { id: '24', cat: 'TV/SD', desc: 'TV/DVD-R' },
      { id: '25', cat: 'TV/SD', desc: 'TV/DVD-Rip' },
      { id: '66', cat: 'TV/SD', desc: 'TV/Mobile' },
      { id: '82', cat: 'TV/Foreign', desc: 'TV/Non-English' },
      { id: '65', cat: 'TV', desc: 'TV/Packs' },
      { id: '83', cat: 'TV/Foreign', desc: 'TV/Packs/Non-English' },
      { id: '79', cat: 'TV/SD', desc: 'TV/SD/x264' },
      { id: '22', cat: 'TV/WEB-DL', desc: 'TV/Web-DL' },
      { id: '5', cat: 'TV', desc: 'TV/x264' },
      { id: '99', cat: 'TV', desc: 'TV/x265' },
      { id: '4', cat: 'TV', desc: 'TV/Xvid' },
      // { id: '74', cat: 'Games', desc: 'Games' },
      { id: '2', cat: 'PC/Games', desc: 'Games/Mixed' },
      { id: '47', cat: 'Console/NDS', desc: 'Games/Nintendo DS' },
      { id: '43', cat: 'PC/ISO', desc: 'Games/PC-ISO' },
      { id: '45', cat: 'PC/Games', desc: 'Games/PC-Rip' },
      { id: '39', cat: 'Console/PS3', desc: 'Games/PS2' },
      { id: '71', cat: 'Console/PS3', desc: 'Games/PS3' },
      { id: '40', cat: 'Console/PSP', desc: 'Games/PSP' },
      { id: '50', cat: 'Console/Wii', desc: 'Games/Wii' },
      { id: '44', cat: 'Console/Xbox360', desc: 'Games/Xbox-360' },
      { id: '75', cat: 'Audio', desc: 'Music' },
      { id: '3', cat: 'Audio/MP3', desc: 'Music/Audio' },
      { id: '80', cat: 'Audio/Lossless', desc: 'Music/Flac' },
      { id: '93', cat: 'Audio', desc: 'Music/Packs' },
      { id: '37', cat: 'Audio/Video', desc: 'Music/Video' },
      { id: '21', cat: 'Audio/Other', desc: 'Podcast' },
      { id: '76', cat: 'Other/Misc', desc: 'Miscellaneous' },
      { id: '60', cat: 'TV/Anime', desc: 'Anime' },
      { id: '1', cat: 'PC/0day', desc: 'Appz' },
      { id: '86', cat: 'PC/0day', desc: 'Appz/Non-English' },
      { id: '64', cat: 'Audio/Audiobook', desc: 'AudioBook' },
      { id: '35', cat: 'Books', desc: 'Books' },
      { id: '94', cat: 'Books/Comics', desc: 'Comics' },
      { id: '95', cat: 'Books/Other', desc: 'Educational' },
      { id: '98', cat: 'Other', desc: 'Fonts' },
      { id: '69', cat: 'PC/Mac', desc: 'Mac' },
      { id: '92', cat: 'Books/Mags', desc: 'Magazines / Newspapers' },
      { id: '58', cat: 'PC/Mobile-Android', desc: 'Mobile' },
      { id: '36', cat: 'Other/Misc', desc: 'Pics/Wallpapers' },
      { id: '88', cat: 'XXX', desc: 'XXX' },
      { id: '85', cat: 'XXX/Other', desc: 'XXX/Magazines' },
      { id: '8', cat: 'XXX', desc: 'XXX/Movie' },
      { id: '81', cat: 'XXX', desc: 'XXX/Movies/0Day' },
      { id: '91', cat: 'XXX/Pack', desc: 'XXX/Packs' },
      { id: '84', cat: 'XXX/Imageset', desc: 'XXX/Pics/Wallpapers' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  login: {
    path: '/take_login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'div#login:has(h1:contains("Error:"))' }],
    test: { path: '/settings.php' },
  },
  ratio: { path: '/indexipt.php', selector: '.c_ratio' },
  search: {
    paths: [{ path: '/t' }],
    inputs: {
      $raw: '{{range .Categories}}{{.}}&{{end}}q={{ .Query.Keywords }}',
    },
    rows: {
      selector: 'table#torrents > tbody > tr:nth-child(n+2):has(td.t_label)',
    },
    fields: {
      category: {
        selector: 'td:nth-child(1) > a',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '^\\?(\\d+)$' }],
      },
      title: { selector: 'td:nth-child(2) > a' },
      details: { selector: 'td:nth-child(2) > a', attribute: 'href' },
      comments: { selector: 'td:nth-child(5) > a', attribute: 'href' },
      download: { selector: 'td:nth-child(4) > a', attribute: 'href' },
      size: { selector: 'td:nth-child(6)' },
      date: {
        selector: 'td:nth-child(2) .t_ctime',
        filters: [
          { name: 'split', args: ['|', -1] },
          { name: 'split', args: [' by ', 0] },
        ],
      },
      seeders: { selector: 'td:nth-child(8)' },
      leechers: { selector: 'td:nth-child(9)' },
      grabs: { selector: 'td:nth-child(7)' },
      downloadvolumefactor: {
        case: { 'span.t_tag_free_leech': '0', '*': '1' },
      },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'custom',
};
