import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'theshinning',
  name: 'The Shinning',
  description: 'The Shinning (TsH) is a GERMAN Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'de-DE',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://theshinning.me/'],
  legacylinks: ['https://theshinning.org', 'https://theshinning.org/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '2', cat: 'TV', desc: 'TV' },
      { id: '3', cat: 'Audio', desc: 'Music' },
      { id: '4', cat: 'Console', desc: 'Games' },
      { id: '5', cat: 'PC', desc: 'Apps' },
      { id: '6', cat: 'Other', desc: 'Misc' },
      { id: '7', cat: 'XXX', desc: 'XXX' },
      { id: '8', cat: 'Movies', desc: 'Kids' },
      { id: '9', cat: 'TV/Sport', desc: 'Sport' },
      { id: '10', cat: 'TV/Documentary', desc: 'Doku' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  login: {
    path: 'login',
    method: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      remember: 1,
    },
    selectorinputs: {
      _token: {
        selector: 'meta[name="csrf-token"]',
        attribute: 'content',
      },
    },
    error: [{ selector: 'form[action$="/login"] .text-red' }],
    test: { path: '/', selector: 'a[href$="/logout"]' },
  },
  ratio: {
    path: '/',
    selector: 'span:has(i.fa-sync-alt)',
    filters: [{ name: 'regexp', args: 'Ratio : (\\d+)' }],
  },
  search: {
    paths: [{ path: 'filterTorrents' }],
    inputs: {
      $raw: '{{range .Categories}}categories[]={{.}}&{{end}}',
      search: '{{if .Query.IMDBID}}{{else}}{{ .Keywords }}{{end}}',
      description: '',
      uploader: '',
      imdb: '{{ .Query.IMDBIDShort }}',
      tvdb: '',
      tmdb: '',
      mal: '',
      sorting: 'created_at',
      direction: 'desc',
      qty: 100,
    },
    rows: { selector: 'table > tbody > tr' },
    fields: {
      category: {
        selector: 'a[href*="/categories/"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '/categories/.*?\\.(\\d+)' }],
      },
      title: { selector: 'a.view-torrent' },
      download: {
        selector: 'a[href*="/download/"]',
        attribute: 'href',
      },
      details: { selector: 'a.view-torrent', attribute: 'href' },
      banner: {
        optional: true,
        selector: 'div.torrent-poster img',
        attribute: 'src',
        filters: [
          {
            name: 'replace',
            args: ['https://via.placeholder.com/600x900/212121/FFFFFF/?text=NOCOVER', ''],
          },
        ],
      },
      size: { selector: 'td:nth-last-child(4)' },
      grabs: {
        selector: 'td:nth-last-child(3)',
        filters: [{ name: 'regexp', args: '([\\d\\.]+)' }],
      },
      seeders: { selector: 'td:nth-last-child(2)' },
      leechers: { selector: 'td:nth-last-child(1)' },
      date: {
        selector: 'time',
        filters: [
          {
            name: 're_replace',
            args: [
              '(önce|tagasi|geleden|fa|temu|siden|atrás|nazpět|назад|acum|hace|il y a|vor|преди)',
              'ago',
            ],
          },
          {
            name: 're_replace',
            args: ['(dakika|minut|minuto|minuta|minutt|минута|Minute|minuut)', 'minute'],
          },
          {
            name: 're_replace',
            args: [
              '(dakika|minutit|minutter|minuti|minuty|minutos|минуты|минут|Minuten|минути|minuten)',
              'minutes',
            ],
          },
          {
            name: 're_replace',
            args: ['(saat|tund|time|ora|godzina|hora|hodina|час|oră|heure|Stunde|uur)', 'hour'],
          },
          {
            name: 're_replace',
            args: [
              '(saat|tundi|timer|ore|godziny|horas|hodiny|hoden|часа|часов|ore|heures|Stunden)',
              'hours',
            ],
          },
          {
            name: 're_replace',
            args: ['(gün|päev|dag|giorno|dzień|dia|den|день|zi|día|jour|Tag|ден)', 'day'],
          },
          {
            name: 're_replace',
            args: [
              '(gün|päeva|dage|giorni|dni|dias|dny|дня|дней|zile|días|jours|Tagen|дни|dagen)',
              'days',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(hafta|nädal|uge|settimana|tydzień|uke|semana|týden|неделю|săptămână|semaine|Woche|седмица)',
              'week',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(hafta|nädalat|uger|settimane|tygodnie|uker|semanas|týdny|недели|недель|săptămâni|semaines|Wochen|седмици|weken)',
              'weeks',
            ],
          },
          {
            name: 're_replace',
            args: [
              ' (ay|kuu|måned|mese|miesiąc|mês|měsíc|месяц|lună|mes|mois|Monat|месец|maand)',
              'month',
            ],
          },
          {
            name: 're_replace',
            args: [
              ' (ay|kuud|måneder|mesi|miesiące|meses|měsíce|месяца|месяцев|luni|meses|mois|Monaten|месеца|maanden)',
              'months',
            ],
          },
        ],
      },
      downloadvolumefactor: {
        case: {
          'i[class*="fa-star text-gold"]': 0,
          'i[class*="fa-globe text-blue"]': 0,
          'i[class*="fa-certificate text-pink"]': 0,
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: {
          'i[class*="fa-gem text-green"]': 2,
          'i[class*="fa-globe text-green"]': 2,
          'i[class*="fa-certificate text-pink"]': 2,
          '*': '1',
        },
      },
    },
  },
  source: 'jackett',
};
