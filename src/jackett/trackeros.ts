import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'trackeros',
  name: 'Trackeros',
  description: 'Trackeros is a Private SPANISH Tracker for HD MOVIES / TV / GENERAL',
  language: 'es-ES',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://trackeros.tk'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Movies', desc: 'Películas' },
      { id: '2', cat: 'TV', desc: 'Series' },
      { id: '3', cat: 'Audio', desc: 'Música' },
      { id: '4', cat: 'Console', desc: 'Juegos' },
      { id: '8', cat: 'TV/Documentary', desc: 'Documentales' },
      { id: '7', cat: 'Audio/Video', desc: 'Conciertos' },
      { id: '5', cat: 'PC', desc: 'Aplicaciones' },
      { id: '6', cat: 'Other', desc: 'Otros' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep', 'imdbid', 'tvdbid'],
      'movie-search': ['q', 'imdbid', 'tmdbid'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'freeleech',
      type: 'checkbox',
      label: 'Search freeleech only',
      default: false,
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'created_at',
      options: {
        created_at: 'created',
        seeders: 'seeders',
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
    path: 'login',
    method: 'form',
    form: 'form[action$="/login"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      remember: 'on',
    },
    selectorinputs: {
      _token: { selector: 'input[name="_token"]', attribute: 'value' },
    },
    error: [{ selector: 'div#ERROR_COPY' }],
  },
  search: {
    paths: [{ path: 'torrents/filter' }],
    inputs: {
      $raw: '{{ range .Categories }}categories[]={{.}}&{{end}}',
      search: '{{ if .Query.IMDBID }}{{ else }}{{ .Keywords }}{{ end }}',
      description: '',
      uploader: '',
      imdb: '{{ .Query.IMDBIDShort }}',
      tvdb: '{{ .Query.TVDBID }}',
      tmdb: '{{ .Query.TMDBID }}',
      mal: '',
      igdb: '',
      start_year: '',
      end_year: '',
      sorting: '{{ .Config.sort }}',
      direction: '{{ .Config.type }}',
      qty: 100,
      page: 0,
      view: 'list',
      freeleech: '{{ if .Config.freeleech }}1{{ else }}{{ end }}',
    },
    rows: { selector: 'table > tbody > tr' },
    fields: {
      category: {
        selector: 'a[href*="/categories/"]',
        attribute: 'href',
        filters: [{ name: 'regexp', args: '/categories/(\\d+)' }],
      },
      title: {
        selector: 'a.view-torrent',
        filters: [
          { name: 're_replace', args: ['[\\[\\]]', ' '] },
          { name: 're_replace', args: [' +', ' '] },
          { name: 're_replace', args: ['(?i)microhd', 'BDRip MicroHD'] },
          {
            name: 're_replace',
            args: ['(?i)(m1080p|mhd1080p)', '1080p MicroHD'],
          },
          {
            name: 're_replace',
            args: ['(?i)(m720p|mhd720p)', '720p MicroHD'],
          },
          { name: 're_replace', args: ['(?i)brrip', 'BDRip'] },
          {
            name: 're_replace',
            args: ['(?i)\\btemporada *(\\d{1,2})\\b', 'S$1'],
          },
          { name: 're_replace', args: ['\\bT(\\d{1,2})\\b', 'S$1'] },
          { name: 're_replace', args: ['\\b([SE])(\\d)\\b', '${1}0$2'] },
          {
            name: 're_replace',
            args: ['\\b[ST](\\d{1,2}) *E(\\d{1,2})\\b', 'S$1E$2'],
          },
          {
            name: 're_replace',
            args: ['(S\\d{1,2})( a S*| A S*| a la S*| A LA S*)(\\d{1,2})', '$1-$3'],
          },
          {
            name: 're_replace',
            args: ['([E-]\\d{1,2})( E| a E*| A E*| al E*| AL E*)(\\d{1,2})', '$1-$3'],
          },
          {
            name: 're_replace',
            args: ['([E-]\\d{1,2})( E| a E*| A E*| al E*| AL E*)(\\d{1,2})', '$1-$3'],
          },
          {
            name: 're_replace',
            args: ['([E-]\\d{1,2})( E| a E*| A E*| al E*| AL E*)(\\d{1,2})', '$1-$3'],
          },
          {
            name: 're_replace',
            args: ['([E-]\\d{1,2})( E| a E*| A E*| al E*| AL E*)(\\d{1,2})', '$1-$3'],
          },
          {
            name: 're_replace',
            args: ['([E-]\\d{1,2})( E| a E*| A E*| al E*| AL E*)(\\d{1,2})', '$1-$3'],
          },
          {
            name: 're_replace',
            args: ['([E-]\\d{1,2})( E| a E*| A E*| al E*| AL E*)(\\d{1,2})', '$1-$3'],
          },
          {
            name: 're_replace',
            args: ['([E-]\\d{1,2})( E| a E*| A E*| al E*| AL E*)(\\d{1,2})', '$1-$3'],
          },
          {
            name: 're_replace',
            args: ['([E-]\\d{1,2})( E| a E*| A E*| al E*| AL E*)(\\d{1,2})', '$1-$3'],
          },
          {
            name: 're_replace',
            args: ['([E-]\\d{1,2})( E| a E*| A E*| al E*| AL E*)(\\d{1,2})', '$1-$3'],
          },
          {
            name: 're_replace',
            args: ['\\b(\\d{1,2})x(\\d{1,2})\\b', 'S$1E$2'],
          },
          { name: 'append', args: ' MULTi/SPANiSH' },
        ],
      },
      download: {
        selector: 'a[href*="/download/"]',
        attribute: 'href',
      },
      details: { selector: 'a.view-torrent', attribute: 'href' },
      poster: {
        selector: 'div.torrent-poster img',
        attribute: 'src',
        filters: [
          { name: 'replace', args: ['&w=52&h=80', '&w=180&h=270'] },
          {
            name: 'replace',
            args: ['https://images.weserv.nl/?url=https://via.placeholder.com/52x80&w=180&h=270', ''],
          },
        ],
      },
      size: { selector: 'td:nth-last-child(4)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      grabs: {
        selector: 'td:nth-last-child(1)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      date: {
        selector: 'time',
        filters: [
          {
            name: 're_replace',
            args: [
              '(?i)(önce|tagasi|geleden|fa|temu|siden|há|atrás|nazpět|назад|acum|în urmă|hace|il y a|vor|преди|前|sedan)',
              ' ago',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(saniye|sekundit|sekunder|secondi|sekund|segundos|sekundami|секунд|secunde|secondes|Sekunden|секунди|seconden|秒前)',
              'seconds',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(minutit|minutter|minuti|minuty|minutos|минуты|минут|Minuten|минути|minuten|minuter)',
              'minutes',
            ],
          },
          {
            name: 're_replace',
            args: ['(?i)(dakika|minut|minuto|minuta|minutt|минута|Minute|minuut|分钟|分)', ' minute'],
          },
          {
            name: 're_replace',
            args: ['(?i)(tundi|timer|ore|godziny|horas|hodiny|hoden|часа|часов|ore|heures|Stunden|timmar)', 'hours'],
          },
          {
            name: 're_replace',
            args: ['(?i)(saat|tund|time|ora|godzina|hora|hodina|час|oră|heure|Stunde|uur|小时|時間|timme)', ' hour'],
          },
          {
            name: 're_replace',
            args: ['(?i)(päeva|dage|giorni|dni|dias|dny|дня|дней|zile|días|jours|Tagen|дни|dagen|dagar)', 'days'],
          },
          {
            name: 're_replace',
            args: ['(?i)(gün|päev|dag|giorno|dzień|dia|den|день|zi|día|jour|Tag|ден|天|日)', ' day'],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(nädalat|uger|settimane|tygodnie|uker|semanas|týdny|недели|недель|săptămâni|semaines|Wochen|седмици|weken|veckor)',
              'weeks',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(hafta|nädal|uge|settimana|tydzień|uke|semana|týden|неделю|săptămână|semaine|Woche|седмица|周|週間|vecka)',
              ' week',
            ],
          },
          { name: 're_replace', args: ['(?i) (ay)', 'month'] },
          {
            name: 're_replace',
            args: [
              '(?i)(kuud|måneder|mesi|miesiące|meses|měsíce|месяца|месяцев|luni|meses|mois|Monaten|месеца|maanden|månader)',
              'months',
            ],
          },
          {
            name: 're_replace',
            args: ['(?i)(kuu|måned|mese|miesiąc|mês|měsíc|месяц|lună|mes|Monat|месец|maand|个月|ヶ月|månad)', ' month'],
          },
          {
            name: 're_replace',
            args: ['(?i)(aastat|anni|lata|anos|roky|года|ani|años|ans|Jahren|години)', ' years'],
          },
          {
            name: 're_replace',
            args: ['(?i)(yil|aasta|år|anno|rok|ano|год|año|Jahr|година|jaar|年)', ' year'],
          },
          { name: 're_replace', args: ['(?i) (an)', 'year'] },
          { name: 're_replace', args: ['(?i)(För |und)', ''] },
          { name: 'timeago' },
        ],
      },
      downloadvolumefactor: {
        case: {
          'i[class*="fa-id-badge text-orange"]': 0,
          'i[class*="fa-trophy text-purple"]': 0,
          'i[class*="fa-star text-bold"]': 0,
          'i[class*="fa-coins text-bold"]': 0,
          'i[class*="fa-globe text-blue"]': 0,
          'i[class*="fa-star text-gold"]': 0,
          'i[class*="fa-certificate text-pink"]': 0,
          '*': 1,
        },
      },
      uploadvolumefactor: {
        case: {
          'i[class*="fa-gem text-green"]': 2,
          'i[class*="fa-globe text-green"]': 2,
          'i[class*="fa-certificate text-pink"]': 2,
          '*': 1,
        },
      },
      minimumratio: { text: 0.4 },
      minimumseedtime: { text: 115200 },
    },
  },
  source: 'jackett',
};
