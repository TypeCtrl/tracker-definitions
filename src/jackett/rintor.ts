import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'rintor',
  name: 'RinTor',
  description: 'RinTor is a Semi-Private Tracker for 3X',
  language: 'ru-RU',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://rintor.org/'],
  caps: {
    categorymappings: [
      {
        id: '71',
        cat: 'XXX',
        desc: 'Фильмы UHD | 4K UHD (2160p) Movies',
      },
      { id: '26', cat: 'XXX', desc: 'HD порнофильмы | HD Porn Movies' },
      { id: '20', cat: 'XXX', desc: 'Гонзо Фильмы | Gonzo &  All Sex' },
      { id: '22', cat: 'XXX', desc: 'Лесбо Фильмы | Lesbo Movies' },
      { id: '23', cat: 'XXX', desc: 'Этнические фильмы | Ethnic Movies' },
      { id: '21', cat: 'XXX', desc: 'Фильмы с сюжетом | Feature' },
      { id: '64', cat: 'XXX', desc: 'Эротические фильмы | Erotic Films' },
      { id: '25', cat: 'XXX', desc: 'Классика | Classic Porn' },
      {
        id: '65',
        cat: 'XXX',
        desc: 'Инцест и Табу (Инсценировка) | Incest and Taboo...',
      },
      { id: '28', cat: 'XXX', desc: "Сайтрипы HD | SiteRip's HD Video" },
      {
        id: '29',
        cat: 'XXX',
        desc: 'Сайтрипы UHD | 4K UHD (2160p) Porn Video',
      },
      { id: '27', cat: 'XXX', desc: "Сайтрипы | SiteRip's" },
      { id: '31', cat: 'XXX', desc: 'Сцены из фильмов | Movie Scenes' },
      {
        id: '32',
        cat: 'XXX',
        desc: 'Порноролики Разное | Various Clips',
      },
      { id: '66', cat: 'XXX', desc: 'Лесбо Порноролики | Lesbo Vids' },
      { id: '67', cat: 'XXX', desc: 'Порно Кастинг  | Porno Casting' },
      { id: '35', cat: 'XXX', desc: 'Японское порно | Japan Porn' },
      {
        id: '36',
        cat: 'XXX',
        desc: 'Русские порнофильмы | Russian Porn Films',
      },
      {
        id: '37',
        cat: 'XXX',
        desc: 'Русские Порноролики Разное | Russian Clips (various)',
      },
      {
        id: '38',
        cat: 'XXX',
        desc: 'Русское любительское порно видео | Russian Amateur Porn...',
      },
      {
        id: '40',
        cat: 'XXX',
        desc: 'Эротические студии Фото | Erotic Picture Gallery',
      },
      {
        id: '42',
        cat: 'XXX',
        desc: 'Любительское фото | Amateur Picture',
      },
      { id: '44', cat: 'XXX', desc: 'Подборки сетов | Picture Sets' },
      { id: '45', cat: 'XXX', desc: 'Нетрадиционное порно фото' },
      {
        id: '46',
        cat: 'XXX',
        desc: 'Комиксы и рисунки, Журналы | Magazines &  Comix',
      },
      { id: '47', cat: 'XXX', desc: 'Бисексуалы | Bisexual' },
      {
        id: '48',
        cat: 'XXX',
        desc: 'Транссексуалы | Shemale Transsexual',
      },
      { id: '49', cat: 'XXX', desc: 'БДСМ | BDSM' },
      {
        id: '50',
        cat: 'XXX',
        desc: 'Женское доминирование и страпон | Femdom &  Strapon',
      },
      { id: '51', cat: 'XXX', desc: 'Подглядывание | Voyeur' },
      {
        id: '52',
        cat: 'XXX',
        desc: 'Фистинг и дилдо | Fisting &  Dildo',
      },
      { id: '53', cat: 'XXX', desc: 'Беременные | Pregnant Preggo' },
      { id: '54', cat: 'XXX', desc: 'Буккаке | Bukkake' },
      { id: '55', cat: 'XXX', desc: 'Мочеиспускание | Peeing' },
      { id: '56', cat: 'XXX', desc: 'Фетиш | Fetish' },
      { id: '58', cat: 'XXX', desc: 'Хентай' },
      { id: '59', cat: 'XXX', desc: 'Игры' },
      { id: '60', cat: 'XXX', desc: 'Порно Мультики' },
      {
        id: '61',
        cat: 'XXX',
        desc: 'Полнометражные гей-фильмы | Full Length Gay Movies',
      },
      {
        id: '62',
        cat: 'XXX',
        desc: "Ролики, SiteRip'ы и сцены из гей-фильмов | Gay Clips...",
      },
    ],
    modes: { search: ['q'], 'tv-search': ['q'], 'movie-search': ['q'] },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 1,
      options: { '1': 'created', '2': 'title', '7': 'size', '10': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 1,
      options: { '1': 'asc', '2': 'desc' },
    },
  ],
  login: {
    path: 'login.php',
    method: 'post',
    inputs: {
      login_username: '{{ .Config.username }}',
      login_password: '{{ .Config.password }}',
      autologin: 1,
      login: 'Вход',
    },
    error: [{ selector: 'table.error' }],
    test: {
      path: 'tracker.php',
      selector: 'a[href="./login.php?logout=1"]',
    },
  },
  search: {
    paths: [{ path: 'tracker.php', method: 'post' }],
    inputs: {
      prev_allw: 1,
      prev_a: 0,
      prev_dla: 0,
      prev_dlc: 0,
      prev_dld: 0,
      prev_dlw: 0,
      prev_my: 0,
      prev_new: 0,
      prev_sd: 0,
      prev_da: 1,
      prev_dc: 0,
      prev_df: 1,
      prev_ds: 0,
      prev_tor_type: 0,
      o: '{{ .Config.sort }}',
      s: '{{ .Config.type }}',
      dc: 0,
      df: 1,
      da: 1,
      ds: 0,
      tm: -1,
      sns: -1,
      srg: -1,
      nm: '{{ .Keywords }}',
      pn: '',
      allw: 1,
      $raw: '{{ if .Categories }}{{range .Categories}}&f[]={{.}}{{end}}{{else}}&f[]=-1{{end}}',
    },
    rows: { selector: 'tr[id^="tor_"]' },
    fields: {
      category: {
        selector: 'a[href^="tracker.php?f="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'f' }],
      },
      title: { selector: 'td a.tLink' },
      details: { selector: 'td a.tLink', attribute: 'href' },
      download: {
        selector: 'a[href^="./dl.php?id="]',
        attribute: 'href',
      },
      magnet: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
      size: { selector: 'td:nth-child(6) u' },
      grabs: { selector: 'td:nth-child(9)' },
      seeders: { selector: 'td.seedmed' },
      leechers: { selector: 'td.leechmed' },
      date: { selector: 'td:nth-child(10) u' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
