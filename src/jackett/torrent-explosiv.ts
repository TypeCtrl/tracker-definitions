import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrent-explosiv',
  name: 'Torrent-Explosiv',
  description: 'Torrent-Explosiv is a German Private site for TV / MOVIES / GENERAL',
  language: 'de-DE',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://torrent-explosiv.eu/'],
  caps: {
    categorymappings: [
      { id: '12', cat: 'PC/0day', desc: 'App Win' },
      { id: '10', cat: 'PC/Mac', desc: 'App Mac' },
      { id: '127', cat: 'PC/Phone-Android', desc: 'App Android' },
      { id: '177', cat: 'TV/Documentary', desc: 'Doku HD ' },
      { id: '178', cat: 'TV/Documentary', desc: 'Doku SD ' },
      { id: '263', cat: 'Console/Other', desc: 'Game Sonstiege' },
      { id: '264', cat: 'Console', desc: 'Game PDA / Handy' },
      { id: '265', cat: 'Console/PSP', desc: 'Game PlayStation' },
      { id: '299', cat: 'Console', desc: 'Game Wimmelbild' },
      { id: '17', cat: 'PC/Games', desc: 'Game PC' },
      { id: '277', cat: 'Movies', desc: 'Movie Pack' },
      { id: '300', cat: 'Movies/3D', desc: 'Movie 3D' },
      { id: '258', cat: 'Movies/UHD', desc: 'Movie UHD ' },
      { id: '262', cat: 'Movies/DVD', desc: 'Movie DVD-R' },
      { id: '301', cat: 'Movies/BluRay', desc: 'Movie Bluray' },
      { id: '28', cat: 'Movies/SD', desc: 'Movie SD ' },
      { id: '32', cat: 'Movies/HD', desc: 'Movie HD ' },
      { id: '48', cat: 'Audio', desc: 'Music Album' },
      { id: '288', cat: 'Audio', desc: 'Music Discographie' },
      { id: '201', cat: 'Audio/Lossless', desc: 'Music FLAC' },
      { id: '121', cat: 'Audio/MP3', desc: 'Music MP3' },
      { id: '124', cat: 'Audio', desc: 'Music Mixe' },
      { id: '55', cat: 'Audio/Video', desc: 'Music Video SD' },
      { id: '53', cat: 'Audio', desc: 'Music Sampler' },
      { id: '52', cat: 'Audio', desc: 'Music Pack' },
      { id: '49', cat: 'Audio', desc: 'Music Charts/Single' },
      { id: '303', cat: 'Audio', desc: 'Music Soundtrack' },
      { id: '286', cat: 'TV/Anime', desc: 'Tv Serien Anime HD' },
      { id: '226', cat: 'TV/SD', desc: 'Tv Serien SD' },
      { id: '209', cat: 'TV/HD', desc: 'Tv Serien HD ' },
      { id: '287', cat: 'TV/Anime', desc: 'Tv Serien Anime SD' },
      { id: '273', cat: 'TV', desc: 'Tv Serien Pack' },
      { id: '62', cat: 'TV/Sport', desc: 'Sport SD ' },
      { id: '282', cat: 'TV/Sport', desc: 'Sport HD' },
      { id: '216', cat: 'Books', desc: 'Sonstiges Pdf' },
      { id: '202', cat: 'Books/Magazines', desc: 'Sonstiges Magazine' },
      { id: '217', cat: 'Books', desc: 'Sonstiges EPaper' },
      { id: '269', cat: 'Books', desc: 'Sonstiges Hörspiel' },
      { id: '63', cat: 'Audio/Audiobook', desc: 'Sonstiges A-Book' },
      { id: '96', cat: 'Books/Ebook', desc: 'Sonstiges E-Book' },
      { id: '73', cat: 'XXX', desc: 'XXX HD ' },
      { id: '75', cat: 'XXX', desc: 'XXX Pack' },
      { id: '76', cat: 'XXX', desc: 'XXX SD ' },
      { id: '147', cat: 'XXX', desc: 'XXX Bilder//Clips' },
      { id: '302', cat: 'XXX', desc: 'XXX DVD-R' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    { name: 'pin', type: 'text', label: 'Pin' },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'added',
      options: {
        added: 'created',
        seeds: 'seeders',
        size: 'size',
        name: 'title',
      },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action="/login.php"]',
    cookies: ['JAVA=OK'],
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      pin: '{{ .Config.pin }}',
    },
    error: [{ selector: 'div#login_error' }],
    test: { path: 'selection.php' },
  },
  search: {
    paths: [{ path: 'selection.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      blah: 0,
      orderby: '{{ .Config.sort }}',
      sort: '{{ .Config.type }}',
    },
    rows: { selector: 'div.selection_wrap' },
    fields: {
      download: {
        selector: 'a.selection_a',
        attribute: 'href',
        filters: [
          {
            name: 'replace',
            args: ['details.php?id=', 'download.php?torrent='],
          },
        ],
      },
      title: {
        selector: 'a.selection_a',
        filters: [
          { name: 're_replace', args: ['^\\[[\\w ]*\\]\\s?', ''] },
          { name: 're_replace', args: ['^\\[[\\w ]*\\]\\s?', ''] },
        ],
      },
      details: { selector: 'a.selection_a', attribute: 'href' },
      category: {
        selector: 'div.kat_cat_pic',
        case: {
          ':has(div.kat_cat_pic_name:contains("Movie")):has(div.kat_cat_pic_name_b:contains("Pack"))':
            '277',
          ':has(div.kat_cat_pic_name:contains("Movie")):has(div.kat_cat_pic_name_b:contains("3D"))':
            '300',
          ':has(div.kat_cat_pic_name:contains("Movie")):has(div.kat_cat_pic_name_b:contains("UHD"))':
            '258',
          ':has(div.kat_cat_pic_name:contains("Movie")):has(div.kat_cat_pic_name_b:contains("DVD"))':
            '262',
          ':has(div.kat_cat_pic_name:contains("Movie")):has(div.kat_cat_pic_name_b:contains("Bluray"))':
            '301',
          ':has(div.kat_cat_pic_name:contains("Movie")):has(div.kat_cat_pic_name_b:contains("SD"))':
            '28',
          ':has(div.kat_cat_pic_name:contains("Movie")):has(div.kat_cat_pic_name_b:contains("HD"))':
            '32',
          ':has(div.kat_cat_pic_name:contains("Serien")):has(div.kat_cat_pic_name_b:contains("Anime HD"))':
            '286',
          ':has(div.kat_cat_pic_name:contains("Serien")):has(div.kat_cat_pic_name_b:contains("Anime SD"))':
            '287',
          ':has(div.kat_cat_pic_name:contains("Serien")):has(div.kat_cat_pic_name_b:contains("SD"))':
            '226',
          ':has(div.kat_cat_pic_name:contains("Serien")):has(div.kat_cat_pic_name_b:contains("HD"))':
            '209',
          ':has(div.kat_cat_pic_name:contains("Serien")):has(div.kat_cat_pic_name_b:contains("Pack"))':
            '273',
          ':has(div.kat_cat_pic_name:contains("Music")):has(div.kat_cat_pic_name_b:contains("Album"))':
            '48',
          ':has(div.kat_cat_pic_name:contains("Music")):has(div.kat_cat_pic_name_b:contains("Discographie"))':
            '288',
          ':has(div.kat_cat_pic_name:contains("Music")):has(div.kat_cat_pic_name_b:contains("FLAC"))':
            '201',
          ':has(div.kat_cat_pic_name:contains("Music")):has(div.kat_cat_pic_name_b:contains("MP3"))':
            '121',
          ':has(div.kat_cat_pic_name:contains("Music")):has(div.kat_cat_pic_name_b:contains("Mixe"))':
            '124',
          ':has(div.kat_cat_pic_name:contains("Music")):has(div.kat_cat_pic_name_b:contains("Video"))':
            '55',
          ':has(div.kat_cat_pic_name:contains("Music")):has(div.kat_cat_pic_name_b:contains("Sampler"))':
            '53',
          ':has(div.kat_cat_pic_name:contains("Music")):has(div.kat_cat_pic_name_b:contains("Pack"))':
            '52',
          ':has(div.kat_cat_pic_name:contains("Music")):has(div.kat_cat_pic_name_b:contains("Charts"))':
            '49',
          ':has(div.kat_cat_pic_name:contains("Music")):has(div.kat_cat_pic_name_b:contains("Soundtrack"))':
            '303',
          ':has(div.kat_cat_pic_name:contains("Doku")):has(div.kat_cat_pic_name_b:contains("HD"))':
            '177',
          ':has(div.kat_cat_pic_name:contains("Doku")):has(div.kat_cat_pic_name_b:contains("SD"))':
            '178',
          ':has(div.kat_cat_pic_name:contains("Game")):has(div.kat_cat_pic_name_b:contains("Sonstiege"))':
            '263',
          ':has(div.kat_cat_pic_name:contains("Game")):has(div.kat_cat_pic_name_b:contains("PDA"))':
            '264',
          ':has(div.kat_cat_pic_name:contains("Game")):has(div.kat_cat_pic_name_b:contains("PlayStation"))':
            '265',
          ':has(div.kat_cat_pic_name:contains("Game")):has(div.kat_cat_pic_name_b:contains("Wimmelbild"))':
            '299',
          ':has(div.kat_cat_pic_name:contains("Game")):has(div.kat_cat_pic_name_b:contains("PC"))':
            '17',
          ':has(div.kat_cat_pic_name:contains("App")):has(div.kat_cat_pic_name_b:contains("Win"))':
            '12',
          ':has(div.kat_cat_pic_name:contains("App")):has(div.kat_cat_pic_name_b:contains("Mac"))':
            '10',
          ':has(div.kat_cat_pic_name:contains("App")):has(div.kat_cat_pic_name_b:contains("Android"))':
            '127',
          ':has(div.kat_cat_pic_name:contains("Sport")):has(div.kat_cat_pic_name_b:contains("SD"))':
            '62',
          ':has(div.kat_cat_pic_name:contains("Sport")):has(div.kat_cat_pic_name_b:contains("HD"))':
            '282',
          ':has(div.kat_cat_pic_name:contains("Sonstiges")):has(div.kat_cat_pic_name_b:contains("Pdf"))':
            '216',
          ':has(div.kat_cat_pic_name:contains("Sonstiges")):has(div.kat_cat_pic_name_b:contains("Magazine"))':
            '202',
          ':has(div.kat_cat_pic_name:contains("Sonstiges")):has(div.kat_cat_pic_name_b:contains("EPaper"))':
            '217',
          ':has(div.kat_cat_pic_name:contains("Sonstiges")):has(div.kat_cat_pic_name_b:contains("Hörspiel"))':
            '269',
          ':has(div.kat_cat_pic_name:contains("Sonstiges")):has(div.kat_cat_pic_name_b:contains("A-Book"))':
            '63',
          ':has(div.kat_cat_pic_name:contains("Sonstiges")):has(div.kat_cat_pic_name_b:contains("E-Book"))':
            '96',
          ':has(div.kat_cat_pic_name:contains("XXX")):has(div.kat_cat_pic_name_b:contains("HD"))':
            '73',
          ':has(div.kat_cat_pic_name:contains("XXX")):has(div.kat_cat_pic_name_b:contains("Pack"))':
            '75',
          ':has(div.kat_cat_pic_name:contains("XXX")):has(div.kat_cat_pic_name_b:contains("SD"))':
            '76',
          ':has(div.kat_cat_pic_name:contains("XXX")):has(div.kat_cat_pic_name_b:contains("Clips"))':
            '147',
          ':has(div.kat_cat_pic_name:contains("XXX")):has(div.kat_cat_pic_name_b:contains("DVD"))':
            '302',
        },
      },
      banner: { selector: 'div[id^="details"] img', attribute: 'src' },
      size: {
        selector: 'div.selection_unter_ad',
        filters: [
          { name: 'replace', args: ['.', ''] },
          { name: 'replace', args: [',', '.'] },
        ],
      },
      grabs: {
        selector: 'div.selection_unter_ae',
        filters: [
          { name: 'trim', args: 'x' },
          { name: 'replace', args: ['.', ''] },
          { name: 'replace', args: [',', '.'] },
        ],
      },
      date: {
        selector: 'div.selection_unter_ab:contains(".")',
        optional: true,
        filters: [
          { name: 'replace', args: [' um', ''] },
          { name: 'dateparse', args: '02.01.2006 15:04:05' },
        ],
      },
      description: { selector: 'selection_unter_af', optional: true },
      seeders: {
        selector: 'div.selection_unter_aa',
        filters: [
          { name: 'replace', args: ['.', ''] },
          { name: 'replace', args: [',', '.'] },
        ],
      },
      leechers: {
        selector: 'div.selection_unter_aaa',
        filters: [
          { name: 'replace', args: ['.', ''] },
          { name: 'replace', args: [',', '.'] },
        ],
      },
      downloadvolumefactor: {
        case: { ':root:has(div.onlyup)': 0, '*': 1 },
      },
      uploadvolumefactor: { case: { '*': 1 } },
    },
  },
  source: 'jackett',
};
