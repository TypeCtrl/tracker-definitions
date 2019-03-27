import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'desireleasers',
  name: 'DesiReleasers',
  description: 'DesiReleasers is an INDIAN Private Torrent Tracker for INDIAN MOVIES',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://desireleasers.be/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Movies' },
      { id: '2', cat: 'TV', desc: 'TV' },
      { id: '3', cat: 'Audio', desc: 'Music' },
      { id: '4', cat: 'Audio/Video', desc: 'Music Videos' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid'],
      'movie-search': ['q', 'imdbid'],
    },
  },
  settings: [
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Login to this tracker in your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button<li>Refresh the page by pressing <b>F5</b><li>Select the <b>Headers</b> tab<li>Find 'cookie:' in the <b>Request Headers</b> section<li>Copy & paste the whole cookie string to here</ol>",
    },
  ],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 'torrents', selector: 'a[href$="/logout"]' },
  },
  ratio: {
    path: 'torrents',
    selector: 'li:has(i.fa-sync-alt)',
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
      sort: 'created_at',
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
      },
      size: { selector: 'td:nth-child(5)' },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      grabs: {
        selector: 'td:nth-child(8)',
        filters: [{ name: 'regexp', args: '([\\d\\.]+)' }],
      },
      imdb: {
        optional: true,
        selector: 'a[href*="www.imdb.com/title/tt"]',
        attribute: 'href',
      },
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
          'i[data-original-title="Personal Freeleech"]': '0',
          'i[data-original-title="Special Freeleech"]': '0',
          'i[data-original-title="Freeleech Token"]': '0',
          'i[data-original-title="Global FreeLeech"]': '0',
          'i[data-original-title="Freeleech"]': '0',
          'i[data-original-title="Featured"]': '0',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: {
          'i[data-original-title="Double Upload"]': '2',
          'i[data-original-title="Global Double Upload"]': '2',
          'i[data-original-title="Featured"]': '2',
          '*': '1',
        },
      },
    },
  },
  source: 'jackett',
};