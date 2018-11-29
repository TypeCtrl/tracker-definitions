import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'sportscult',
  name: 'SportsCult',
  description: 'Sports tracker',
  language: 'en-us',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://sportscult.org'],
  caps: {
    categorymappings: [
      { id: 47, cat: 'TV/Sport', desc: 'EPL' },
      { id: 41, cat: 'TV/Sport', desc: 'American Football' },
      { id: 17, cat: 'TV/Sport', desc: 'Athletics' },
      { id: 34, cat: 'TV/Sport', desc: 'Bodybuilding/Fitness' },
      { id: 29, cat: 'TV/Sport', desc: 'Boxing' },
      { id: 19, cat: 'TV/Sport', desc: 'BrainGames' },
      { id: 36, cat: 'TV/Sport', desc: 'BreakDance' },
      { id: 40, cat: 'TV/Sport', desc: 'Cricet/Golf/Baseball' },
      { id: 23, cat: 'TV/Sport', desc: 'Cycling' },
      { id: 31, cat: 'TV/Sport', desc: 'Documentary' },
      { id: 1, cat: 'TV/Sport', desc: 'European Basketball' },
      { id: 6, cat: 'TV/Sport', desc: 'European Soccer' },
      { id: 37, cat: 'TV/Sport', desc: 'Extreme Sports' },
      { id: 9, cat: 'TV/Sport', desc: 'Fight Sports' },
      { id: 32, cat: 'TV/Sport', desc: 'Formula1' },
      { id: 45, cat: 'TV/Sport', desc: 'GAA (Gaelic)' },
      { id: 8, cat: 'TV/Sport', desc: 'Golf' },
      { id: 22, cat: 'TV/Sport', desc: 'Gymnastics' },
      { id: 39, cat: 'TV/Sport', desc: 'Handball' },
      { id: 2, cat: 'TV/Sport', desc: 'International Basket' },
      { id: 25, cat: 'TV/Sport', desc: 'IceHockey' },
      { id: 4, cat: 'TV/Sport', desc: 'International Soccer' },
      { id: 42, cat: 'TV/Sport', desc: 'KHL' },
      { id: 35, cat: 'TV/Sport', desc: 'KickBoxing/Muay Thai' },
      { id: 43, cat: 'TV/Sport', desc: 'La Liga' },
      { id: 15, cat: 'TV/Sport', desc: 'MotorSport' },
      { id: 24, cat: 'TV/Sport', desc: 'MLB/Baseball' },
      { id: 28, cat: 'TV/Sport', desc: 'MMA' },
      { id: 11, cat: 'TV/Sport', desc: 'NBA/WNBA' },
      { id: 3, cat: 'TV/Sport', desc: 'NCAA Basket/Football' },
      { id: 5, cat: 'TV/Sport', desc: 'NFL' },
      { id: 27, cat: 'TV/Sport', desc: 'NHL' },
      { id: 26, cat: 'TV/Sport', desc: 'Olympic games' },
      { id: 7, cat: 'TV/Sport', desc: 'Rugby' },
      { id: 44, cat: 'TV/Sport', desc: 'Serie A' },
      { id: 38, cat: 'TV/Sport', desc: 'Snooker/Pool' },
      { id: 30, cat: 'TV/Sport', desc: 'Streetball' },
      { id: 18, cat: 'TV/Sport', desc: 'Swimming/Aquatics' },
      { id: 46, cat: 'TV/Sport', desc: 'AFL(AustralianFB)' },
      { id: 12, cat: 'TV/Sport', desc: 'Tennis' },
      { id: 20, cat: 'TV/Sport', desc: 'Volleyball/Beach' },
      { id: 21, cat: 'TV/Sport', desc: 'Weightlifting' },
      { id: 16, cat: 'TV/Sport', desc: 'WinterSport' },
      { id: 33, cat: 'TV/Sport', desc: 'Wrestling/Grapling' },
      { id: 48, cat: 'TV/Sport', desc: 'Uncategorised' },
    ],
    modes: { search: ['q'] },
  },
  login: {
    path: '/?page=login',
    method: 'form',
    form: 'form',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    error: [{ selector: 'span:contains("Password Incorrect")' }],
    test: { path: 'index.php' },
  },
  download: { selector: 'a[href^="download.php?id="]' },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      $raw: '{{range .Categories}}filter_cat[{{.}}]=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      page: 'torrents',
      category: 0,
      active: 1,
    },
    rows: {
      selector:
        'table[cellspacing!="1"].lista > tbody > tr:has(a[href^="index.php?page=torrents&category="])',
    },
    fields: {
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: { remove: 'span', selector: 'td:nth-child(2)' },
      download: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
        filters: [
          {
            name: 'replace',
            args: ['index.php?page=torrent-details&id=', 'download.php?id='],
          },
        ],
      },
      details: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(4)' },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      grabs: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: { case: { '*': '1' } },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};
