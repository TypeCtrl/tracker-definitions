import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'dark-shadow',
  name: 'Dark-Shadow',
  description: 'Dark-Shadow is a German Private site for TV / MOVIES / GENERAL',
  language: 'de-DE',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://dark-shadow.me/'],
  legacylinks: ['https://dark-shadow.ml/'],
  caps: {
    categorymappings: [
      { id: '32', cat: 'Movies/HD', desc: 'Film HD' },
      { id: '28', cat: 'Movies/SD', desc: 'Film SD' },
      { id: '119', cat: 'Movies/DVD', desc: 'Film DVD' },
      { id: '114', cat: 'Movies/UHD', desc: 'Film 4K/2160p' },
      { id: '26', cat: 'Movies/3D', desc: 'Film 3D' },
      { id: '57', cat: 'TV/HD', desc: 'Serien HD' },
      { id: '60', cat: 'TV/SD', desc: 'Serien SD' },
      { id: '59', cat: 'TV', desc: 'Serien Pack' },
      { id: '122', cat: 'TV', desc: 'Serien Show' },
      { id: '123', cat: 'TV/Documentary', desc: 'Serien Doku' },
      { id: '14', cat: 'TV/Documentary', desc: 'Doku HD' },
      { id: '15', cat: 'TV/Documentary', desc: 'Doku SD' },
      { id: '17', cat: 'PC/Games', desc: 'Spiele PC' },
      { id: '24', cat: 'Console', desc: 'Spiele Konsole' },
      { id: '121', cat: 'Console', desc: 'Spiele Wimmelbild' },
      { id: '126', cat: 'Console/Other', desc: 'Spiele Mobil' },
      { id: '110', cat: 'Audio/MP3', desc: 'Musik MP3' },
      { id: '52', cat: 'Audio', desc: 'Musik Pack' },
      { id: '48', cat: 'Audio/Lossless', desc: 'Musik Flac' },
      { id: '120', cat: 'Audio/Video', desc: 'Musik Video' },
      { id: '12', cat: 'PC/0day', desc: 'App PC' },
      { id: '125', cat: 'PC/Mac', desc: 'App MacOS' },
      { id: '11', cat: 'PC/Phone-Other', desc: 'App Mobil' },
      { id: '61', cat: 'TV/Sport', desc: 'Sport HD' },
      { id: '62', cat: 'TV/Sport', desc: 'Sport SD' },
      { id: '128', cat: 'Movies/HD', desc: 'Internal Film HD' },
      { id: '129', cat: 'Movies/SD', desc: 'Internal Film SD' },
      { id: '130', cat: 'TV/HD', desc: 'Internal Serien HD' },
      { id: '131', cat: 'TV/SD', desc: 'Internal Serien SD' },
      { id: '132', cat: 'Other', desc: 'Internal Sonstiges' },
      { id: '64', cat: 'TV/Anime', desc: 'Anime' },
      { id: '96', cat: 'Books/Ebook', desc: 'e-Book' },
      { id: '63', cat: 'Audio/Audiobook', desc: 'Hörbuch' },
      { id: '71', cat: 'Other', desc: 'Anderes' },
      { id: '73', cat: 'XXX/x264', desc: 'XXX HD' },
      { id: '75', cat: 'XXX/Packs', desc: 'XXX Pack' },
      { id: '76', cat: 'XXX/XviD', desc: 'XXX SD' },
      { id: '124', cat: 'XXX/Other', desc: 'XXX Clips' },
    ],
    modes: {
      search: ['q', 'imdbid'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
      'music-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'info_pin',
      type: 'info',
      label: 'About Pin',
      default: 'If you have not set a Pin for your account then leave this box empty.',
    },
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
    captcha: {
      type: 'image',
      selector: 'img[src^="cap/captcha_math.php"]',
      input: 'stringCaptcha',
    },
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      pin: '{{ .Config.pin }}',
    },
    error: [{ selector: 'div#login_error' }],
    test: { path: 'selection.php' },
  },
  download: {
    before: {
      path: 'ajax_det_poll.php',
      method: 'post',
      inputs: {
        set_thanks: 'thanks',
        det_id: '{{ .DownloadUri.Query.torrent }}',
        ajax: 'yes',
      },
    },
  },
  search: {
    paths: [{ path: 'selection.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ .Query.IMDBID }}{{else}}{{ .Keywords }}{{end}}',
      blah: '{{ if .Query.IMDBID }}4{{else}}0{{end}}',
      orderby: '{{ .Config.sort }}',
      sort: '{{ .Config.type }}',
    },
    rows: { selector: 'div.selection_wrap' },
    fields: {
      category: {
        selector: 'div.kat_cat_pic',
        case: {
          ':has(div.kat_cat_pic_name:contains("Movie")):has(div.kat_cat_pic_name_b:contains("4K/2160p"))':
            '114',
          ':has(div.kat_cat_pic_name:contains("Movie")):has(div.kat_cat_pic_name_b:contains("DVD"))':
            '119',
          ':has(div.kat_cat_pic_name:contains("Movie")):has(div.kat_cat_pic_name_b:contains("HD"))':
            '32',
          ':has(div.kat_cat_pic_name:contains("Movie")):has(div.kat_cat_pic_name_b:contains("SD"))':
            '28',
          ':has(div.kat_cat_pic_name:contains("Movie")):has(div.kat_cat_pic_name_b:contains("3D"))':
            '26',
          ':has(div.kat_cat_pic_name:contains("Serien")):has(div.kat_cat_pic_name_b:contains("SD"))':
            '60',
          ':has(div.kat_cat_pic_name:contains("Serien")):has(div.kat_cat_pic_name_b:contains("HD"))':
            '57',
          ':has(div.kat_cat_pic_name:contains("Serien")):has(div.kat_cat_pic_name_b:contains("Pack"))':
            '59',
          ':has(div.kat_cat_pic_name:contains("Serien")):has(div.kat_cat_pic_name_b:contains("Show"))':
            '122',
          ':has(div.kat_cat_pic_name:contains("Serien")):has(div.kat_cat_pic_name_b:contains("Doku"))':
            '123',
          ':has(div.kat_cat_pic_name:contains("Music")):has(div.kat_cat_pic_name_b:contains("Flac"))':
            '48',
          ':has(div.kat_cat_pic_name:contains("Music")):has(div.kat_cat_pic_name_b:contains("MP3"))':
            '110',
          ':has(div.kat_cat_pic_name:contains("Music")):has(div.kat_cat_pic_name_b:contains("Pack"))':
            '52',
          ':has(div.kat_cat_pic_name:contains("Music")):has(div.kat_cat_pic_name_b:contains("Videos"))':
            '120',
          ':has(div.kat_cat_pic_name:contains("Doku")):has(div.kat_cat_pic_name_b:contains("SD"))':
            '15',
          ':has(div.kat_cat_pic_name:contains("Doku")):has(div.kat_cat_pic_name_b:contains("HD"))':
            '14',
          ':has(div.kat_cat_pic_name:contains("Game")):has(div.kat_cat_pic_name_b:contains("PC"))':
            '17',
          ':has(div.kat_cat_pic_name:contains("Game")):has(div.kat_cat_pic_name_b:contains("Wimmelbild"))':
            '121',
          ':has(div.kat_cat_pic_name:contains("Game")):has(div.kat_cat_pic_name_b:contains("Konsole"))':
            '24',
          ':has(div.kat_cat_pic_name:contains("Game")):has(div.kat_cat_pic_name_b:contains("Mobil"))':
            '126',
          ':has(div.kat_cat_pic_name:contains("App")):has(div.kat_cat_pic_name_b:contains("PC"))':
            '12',
          ':has(div.kat_cat_pic_name:contains("App")):has(div.kat_cat_pic_name_b:contains("MacOS"))':
            '125',
          ':has(div.kat_cat_pic_name:contains("App")):has(div.kat_cat_pic_name_b:contains("Mobil"))':
            '11',
          ':has(div.kat_cat_pic_name:contains("Sport")):has(div.kat_cat_pic_name_b:contains("SD"))':
            '62',
          ':has(div.kat_cat_pic_name:contains("Sport")):has(div.kat_cat_pic_name_b:contains("HD"))':
            '61',
          ':has(div.kat_cat_pic_name:contains("Sonstiges")):has(div.kat_cat_pic_name_b:contains("Anime"))':
            '64',
          ':has(div.kat_cat_pic_name:contains("Sonstiges")):has(div.kat_cat_pic_name_b:contains("E-Book"))':
            '96',
          ':has(div.kat_cat_pic_name:contains("Sonstiges")):has(div.kat_cat_pic_name_b:contains("Hörbuch"))':
            '63',
          ':has(div.kat_cat_pic_name:contains("Sonstiges")):has(div.kat_cat_pic_name_b:contains("Other"))':
            '71',
          ':has(div.kat_cat_pic_name:contains("XXX")):has(div.kat_cat_pic_name_b:contains("SD"))':
            '76',
          ':has(div.kat_cat_pic_name:contains("XXX")):has(div.kat_cat_pic_name_b:contains("HD"))':
            '73',
          ':has(div.kat_cat_pic_name:contains("XXX")):has(div.kat_cat_pic_name_b:contains("Pack"))':
            '75',
          ':has(div.kat_cat_pic_name:contains("XXX")):has(div.kat_cat_pic_name_b:contains("Clips"))':
            '124',
          ':has(div.kat_cat_pic_name:contains("Internal")):has(div.kat_cat_pic_name_b:contains("Film HD"))':
            '128',
          ':has(div.kat_cat_pic_name:contains("Internal")):has(div.kat_cat_pic_name_b:contains("Film SD"))':
            '129',
          ':has(div.kat_cat_pic_name:contains("Internal")):has(div.kat_cat_pic_name_b:contains("Serien HD"))':
            '130',
          ':has(div.kat_cat_pic_name:contains("Internal")):has(div.kat_cat_pic_name_b:contains("Serien SD"))':
            '131',
          ':has(div.kat_cat_pic_name:contains("Internal")):has(div.kat_cat_pic_name_b:contains("Sonstiges"))':
            '132',
        },
      },
      title: { selector: 'a.selection_a' },
      details: { selector: 'a.selection_a', attribute: 'href' },
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
      banner: {
        selector: 'div[id^="details"] img',
        attribute: 'src',
        optional: true,
      },
      imdb: {
        selector: 'a[href*="www.imdb.com/title/tt"]',
        attribute: 'href',
        optional: true,
      },
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
      uploadvolumefactor: { text: 1 },
      minimumratio: { text: 1 },
      minimumseedtime: { text: 172800 },
    },
  },
  source: 'jackett',
};