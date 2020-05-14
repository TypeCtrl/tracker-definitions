import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'teamhd',
  name: 'TeamHD',
  description: 'TeamHD is a RUSSIAN Private Torrent Tracker for HD MOVIES / TV',
  language: 'ru-RU',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://teamhd.org/'],
  caps: {
    categorymappings: [
      { id: '29', cat: 'Movies/HD', desc: 'Movies Фильмы' },
      { id: '25', cat: 'TV/Anime', desc: 'Cartoons Мультфильмы' },
      { id: '26', cat: 'Audio/Lossless', desc: 'Hi-Res Audio' },
      { id: '27', cat: 'Other', desc: 'Demo Демо' },
      {
        id: '28',
        cat: 'TV/Documentary',
        desc: 'Documentary Документальное кино',
      },
      {
        id: '30',
        cat: 'Audio/Video',
        desc: 'Music Video Музыкальное видео',
      },
      { id: '31', cat: 'TV/Sport', desc: 'Sport Спорт' },
      { id: '32', cat: 'TV/HD', desc: 'TV Show ТВ Шоу' },
      { id: '33', cat: 'TV/HD', desc: 'Soaps Сериалы' },
      { id: '34', cat: 'TV/HD', desc: 'Other' },
      {
        id: '35',
        cat: 'Movies',
        desc: 'Content w/o subs Контент без перевода',
      },
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
      name: 'info',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Login to this tracker with your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button<li>Refresh the page by pressing <b>F5</b><li>Select the <b>Headers</b> tab<li>Find <b>'cookie:'</b> in the <b>Request Headers</b> section<li><b>Select</b> and <b>Copy</b> the whole cookie string <i>(everything after 'cookie: ')</i> and <b>Paste</b> here.</ol>",
    },
    {
      name: 'striprussian',
      type: 'checkbox',
      label: 'Strip Russian Letters',
      default: false,
    },
  ],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 'index.php', selector: 'a[href*="/logout.php"]' },
  },
  search: {
    paths: [{ path: 'browse' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: 1,
      free: 0,
      year: '',
    },
    keywordsfilters: [{ name: 're_replace', args: [' +(?:19|20)\\d{2} *$', ''] }],
    rows: { selector: 'table.browse > tbody > tr' },
    fields: {
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      title: {
        selector: 'a[href^="/details/id"]',
        filters: [
          {
            name: 're_replace',
            args: [
              '(\\([А-Яа-яЁё\\W]+\\))|(^[А-Яа-яЁё\\W\\d]+\\/ )|([а-яА-ЯЁё \\-]+,+)|([а-яА-ЯЁё]+)',
              '{{ if .Config.striprussian }}{{ else }}$1$2$3$4{{ end }}',
            ],
          },
        ],
      },
      details: {
        selector: 'a[href^="/details/id"]',
        attribute: 'href',
      },
      category: {
        selector: 'a[href*="/browse/cat"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      date: {
        selector: 'td > div > small',
        filters: [{ name: 'dateparse', args: '02-01-2006 15:04' }],
      },
      seeders: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'split', args: ['|', 0] }],
      },
      leechers: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'split', args: ['|', 1] }],
      },
      grabs: {
        selector: 'td:nth-child(5) strong',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      size: { selector: 'td:nth-child(5)', remove: 'strong' },
      downloadvolumefactor: {
        case: {
          'a[href^="/details/id"][style="color:#f2b101"]': 0,
          'a[href^="/details/id"][style="color:#828b8b"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
