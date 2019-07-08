import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'soundpark',
  name: 'SoundPark',
  description: 'SoundPark Semi-Private RUSSIAN site dedicated to MUSIC.',
  language: 'ru-RU',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://sound-park.world/', 'https://soundpark-club.casa/'],
  legacylinks: ['https://soundpark-club.com/'],
  caps: {
    modes: {
      search: ['q'],
      'music-search': ['q', 'album', 'artist', 'label', 'year'],
    },
    categorymappings: [{ id: 'Music', cat: 'Audio' }],
  },
  login: {
    path: 'login',
    method: 'form',
    form: 'form[action="/login"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      returnto: '',
    },
    error: [{ selector: 'div.stdmsg_text' }],
    test: { path: '/', selector: 'a[href="/logout"]' },
  },
  download: { selector: 'a[href^="/album/download-torrent/"]' },
  search: {
    paths: [{ path: '{{if .Keywords}}search{{else}}music{{end}}' }],
    inputs: {
      q: '{{if .Query.Artist}}{{ .Query.Artist }}{{else}}{{ .Keywords }}{{end}}',
      num: 50,
    },
    rows: {
      selector: 'div[itemscope] > table.browse_albums, div.div-rellist',
    },
    fields: {
      title: { selector: 'tr:nth-child(1) td:nth-child(1) h2 a, div h3 a' },
      details: {
        selector: 'tr:nth-child(1) td:nth-child(1) h2 a, div h3 a',
        attribute: 'href',
      },
      category: { text: 'Music' },
      banner: {
        selector: 'tr:nth-child(2) td:nth-child(1) a img, div i img',
        attribute: 'src',
        optional: true,
      },
      download: {
        selector: 'tr:nth-child(1) td:nth-child(1) h2 a, div h3 a',
        attribute: 'href',
      },
      date: {
        selector:
          'tr:nth-child(1) > td:nth-child(2) > div.details > span:nth-child(1):not(:contains(":")), div > span.edit:not(:contains(":"))',
        optional: true,
        filters: [
          { name: 're_replace', args: ['enero|января', 'January'] },
          { name: 're_replace', args: ['febrero|февраля', 'February'] },
          { name: 're_replace', args: ['marzo|марта ', 'March'] },
          { name: 're_replace', args: ['abril|апреля', 'April'] },
          { name: 're_replace', args: ['mayo|мая', 'May'] },
          { name: 're_replace', args: ['junio|июня', 'June'] },
          { name: 're_replace', args: ['julio|июля', 'July'] },
          { name: 're_replace', args: ['agosto|августа', 'August'] },
          {
            name: 're_replace',
            args: ['septiembre|сентября', 'September'],
          },
          { name: 're_replace', args: ['octubre|октября', 'October'] },
          { name: 're_replace', args: ['noviembre|ноября', 'November'] },
          { name: 're_replace', args: ['diciembre|декабря', 'December'] },
          { name: 'dateparse', args: '2 January 2006' },
        ],
      },
      size: {
        selector: 'tr:nth-child(2) td.descr meta',
        attribute: 'content',
        optional: true,
        filters: [{ name: 'regexp', args: 'Size: (.*?),' }],
      },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 1 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
