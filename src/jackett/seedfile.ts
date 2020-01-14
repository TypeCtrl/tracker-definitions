import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'seedfile',
  name: 'SeedFile',
  description: 'SeedFile (SF) is a ROMANIAN Private Torrent Tracker for 0DAY / GENERAL',
  language: 'ro-RO',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://www.seedfile.ro/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'Books/Magazines', desc: 'Cărți/Reviste' },
      { id: '2', cat: 'Other', desc: 'Desene SD' },
      { id: '3', cat: 'Other', desc: 'Diverse n/a' },
      { id: '5', cat: 'Movies/BluRay', desc: 'Filme Blu-Ray' },
      { id: '6', cat: 'Movies/DVD', desc: 'Filme DVD' },
      { id: '7', cat: 'Movies/DVD', desc: 'Filme DVD-RO' },
      { id: '8', cat: 'Movies/HD', desc: 'Filme HD' },
      { id: '9', cat: 'Movies/HD', desc: 'Filme HD-RO' },
      { id: '10', cat: 'Movies/SD', desc: 'Filme SD' },
      { id: '11', cat: 'Movies/SD', desc: 'Filme SD-RO' },
      { id: '12', cat: 'Other', desc: 'Imagini' },
      { id: '13', cat: 'Console', desc: 'Jocuri Console' },
      { id: '14', cat: 'PC/Games', desc: 'Jocuri PC' },
      { id: '15', cat: 'Audio', desc: 'Muzică' },
      { id: '16', cat: 'PC/Phone-Other', desc: 'Mobile' },
      { id: '17', cat: 'PC', desc: 'Programe\t' },
      { id: '18', cat: 'TV/HD', desc: 'Seriale HD' },
      { id: '19', cat: 'TV/HD', desc: 'Seriale HD-RO\t' },
      { id: '20', cat: 'TV/SD', desc: 'Seriale TV' },
      { id: '21', cat: 'TV/SD', desc: 'Seriale TV-RO ' },
      { id: '22', cat: 'TV/Sport', desc: 'Sport ' },
      { id: '23', cat: 'Audio/Video', desc: 'Video Clip' },
      { id: '24', cat: 'XXX', desc: 'Adult 18+' },
      { id: '36', cat: 'Movies/3D', desc: 'Video 3D' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'div.recover-error2' }],
    test: { path: 'profile.php' },
  },
  download: { selector: 'a[href^="download.php/"]', attribute: 'href' },
  search: {
    paths: [{ path: 'download-torrents' }],
    inputs: {
      $raw: '{{range .Categories}}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      incldead: 1,
    },
    rows: { selector: 'tr.browse' },
    fields: {
      category: {
        selector: 'a[href^="torrents.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-last-child(7)' },
      date: {
        selector: 'td:nth-last-child(5)',
        filters: [
          {
            name: 're_replace',
            args: [
              '(?i)(minutit|minutter|minuti|minuty|minutos|минуты|минут|Minuten|минути|minuten)',
              'minutes',
            ],
          },
          {
            name: 're_replace',
            args: ['(?i)(dakika|minut|minuto|minuta|minutt|минута|Minute|minuut|分钟)', ' minute'],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(tundi|timer|ore|godziny|horas|hodiny|hoden|часа|часов|ore|heures|Stunden)',
              'hours',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(saat|tund|time|ora|godzina|hora|hodina|час|oră|heure|Stunde|uur|小时)',
              ' hour',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(päeva|dage|giorni|dni|dias|dny|дня|дней|zile|días|jours|Tagen|дни|dagen)',
              'days',
            ],
          },
          {
            name: 're_replace',
            args: ['(?i)(gün|päev|dag|giorno|dzień|dia|den|день|zi|día|jour|Tag|ден|天)', ' day'],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(nädalat|uger|settimane|tygodnie|uker|semanas|týdny|недели|недель|săptămâni|semaines|Wochen|седмици|weken)',
              'weeks',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(hafta|nädal|uge|settimana|tydzień|uke|semana|týden|неделю|săptămână|semaine|Woche|седмица|周)',
              ' week',
            ],
          },
          { name: 're_replace', args: ['(?i) (ay)', 'month'] },
          {
            name: 're_replace',
            args: [
              '(?i)(kuud|måneder|mesi|miesiące|meses|měsíce|месяца|месяцев|luni|meses|mois|Monaten|месеца|maanden)',
              'months',
            ],
          },
          {
            name: 're_replace',
            args: [
              '(?i)(kuu|måned|mese|miesiąc|mês|měsíc|месяц|lună|mes|Monat|месец|maand|个月)',
              ' month',
            ],
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
          { name: 'append', args: ' ago' },
        ],
      },
      size: { selector: 'td:nth-last-child(4)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      leechers: { selector: 'td:nth-last-child(2)' },
      downloadvolumefactor: {
        case: { 'img[src="./pic/freeleech.png"]': 0, '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'jackett',
};
