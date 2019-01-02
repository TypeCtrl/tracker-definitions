import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentland',
  name: 'Torrentland',
  description: 'Torrentland is a SPANISH site for General content',
  language: 'es-ES',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://torrentland.li/'],
  caps: {
    categorymappings: [
      { id: '23', cat: 'Movies/BluRay', desc: 'Peliculas - Full BluRay' },
      {
        id: '62',
        cat: 'Movies/BluRay',
        desc: 'Peliculas - BluRay Remux',
      },
      { id: '66', cat: 'Movies/HD', desc: 'Peliculas - HD 1080' },
      { id: '65', cat: 'Movies/HD', desc: 'Peliculas - HD 720' },
      { id: '14', cat: 'Movies/SD', desc: 'Peliculas - HDRip' },
      { id: '32', cat: 'Movies/DVD', desc: 'Peliculas - DVDFULL' },
      { id: '15', cat: 'Movies/DVD', desc: 'Peliculas - DVDRip' },
      {
        id: '71',
        cat: 'Movies/Other',
        desc: 'Peliculas - Peliculas V.O.',
      },
      { id: '72', cat: 'Movies/3D', desc: 'Peliculas - 3D' },
      { id: '75', cat: 'Movies/HD', desc: 'Peliculas - 4K' },
      { id: '69', cat: 'Movies/BluRay', desc: 'Eml HDTeam - FULLBR' },
      { id: '68', cat: 'Movies/BluRay', desc: 'Eml HDTeam - JMBD' },
      { id: '67', cat: 'Movies/BluRay', desc: 'EML HDTeam - BDRemux' },
      { id: '35', cat: 'Movies/HD', desc: 'EML HDTeam - 1080' },
      { id: '34', cat: 'Movies/HD', desc: 'EML HDTeam - 720' },
      { id: '36', cat: 'TV/HD', desc: 'EML HDTeam - Series' },
      { id: '73', cat: 'Movies/3D', desc: 'EML HDTeam - 3D' },
      { id: '74', cat: 'Movies/DVD', desc: 'EML HDTeam - DVD' },
      { id: '77', cat: 'Movies/Other', desc: 'EML HDTeam - Animacion' },
      { id: '78', cat: 'Movies/HD', desc: 'EML HDTeam - 4K' },
      { id: '79', cat: 'Movies/BluRay', desc: 'EML HDTeam - CUSTOM BR' },
      { id: '50', cat: 'TV/HD', desc: 'Series - Full BluRay' },
      { id: '49', cat: 'TV/HD', desc: 'Series - H264' },
      { id: '20', cat: 'TV/SD', desc: 'Series - HDRip' },
      { id: '22', cat: 'TV/SD', desc: 'Series - DVD' },
      { id: '51', cat: 'TV/Other', desc: 'Series - Otros Formatos' },
      { id: '53', cat: 'TV/Documentary', desc: 'Documentales - HD' },
      { id: '52', cat: 'TV/Documentary', desc: 'Documentales - SD' },
      { id: '55', cat: 'XXX/x264', desc: 'Adultos - HD' },
      { id: '54', cat: 'XXX/XviD', desc: 'Adultos - SD' },
      { id: '58', cat: 'Movies/HD', desc: 'Animacion - HD' },
      { id: '57', cat: 'Movies/SD', desc: 'Animacion - SD' },
      { id: '76', cat: 'Movies/3D', desc: 'Animacion - 3D' },
      { id: '61', cat: 'TV/Sport', desc: 'Deportes - HD' },
      { id: '60', cat: 'TV/Sport', desc: 'Deportes - SD' },
    ],
    modes: { search: ['q'] },
  },
  login: {
    path: 'index.php?page=login',
    method: 'post',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [{ selector: '.alertMessage' }],
    test: { path: 'index.php', selector: 'form[name="jump1"]' },
  },
  search: {
    path: 'index.php',
    inputs: {
      page: 'torrents',
      $raw: '&category={{range .Categories}}{{.}};{{end}}',
      active: '0',
      search: '{{ .Query.Keywords }}',
    },
    rows: {
      selector: '#Mcol table.table-inverse ~ table.table-inverse > tbody > tr:not(:first-child)',
    },
    fields: {
      category: {
        selector: 'td:nth-child(1) a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: { selector: 'td:nth-child(2) a' },
      banner: {
        optional: true,
        selector: 'td:nth-child(2) a',
        attribute: 'onmouseover',
        filters: [{ name: 'regexp', args: 'src=(.+?)width' }, { name: 'trim' }],
      },
      details: { selector: 'td:nth-child(2) a', attribute: 'href' },
      size: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(8) a' },
      leechers: { selector: 'td:nth-child(9) a' },
      grabs: {
        selector: 'td:nth-child(10)',
        filters: [{ name: 'replace', args: ['---', '0'] }],
      },
      date: {
        selector: 'td:nth-child(7)',
        filters: [{ name: 'dateparse', args: '02/01/2006' }],
      },
      download: {
        selector: 'a[href^="download.php"]',
        attribute: 'href',
      },
      downloadvolumefactor: {
        optional: true,
        selector: 'tr',
        attribute: 'style',
        filters: [
          { name: 'regexp', args: 'background: #(.*)' },
          { name: 'replace', args: ['f9e5a5', '0'] },
          { name: 'replace', args: ['a9a9a9', '0.5'] },
          { name: 'replace', args: ['f6c8a6', '0.75'] },
        ],
      },
      uploadvolumefactor: {
        case: {
          'img[src$="2x.gif"]': '2',
          'img[src$="3x.gif"]': '3',
          'img[src$="4x.gif"]': '4',
          'img[src$="5x.gif"]': '5',
          'img[src$="6x.gif"]': '6',
          'img[src$="7x.gif"]': '7',
          '*': '1',
        },
      },
    },
  },
};
