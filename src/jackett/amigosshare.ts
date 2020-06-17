import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'amigosshare',
  name: 'Amigos Share Club',
  description: 'Amigos Share Club is a Brazilian Private site for TV / MOVIES / GENERAL',
  language: 'pt-BR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://cliente.amigos-share.club/'],
  legacylinks: ['http://amigos-share.club/', 'https://amigos-share.club/'],
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'info_results',
      type: 'info',
      label: 'Search results',
      default:
        'Set <b>Exibição De Torrents</b> to <b>Lista</b> in your <b>Minhas Configurações</b>.<br />Using <b>Capas</b> is not supported and will return 0 results.',
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'id',
      options: {
        id: 'created',
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
  caps: {
    categorymappings: [
      { id: '107', cat: 'XXX', desc: 'Adultos: Gay' },
      { id: '75', cat: 'XXX', desc: 'Adultos: Hentai' },
      { id: '108', cat: 'XXX', desc: 'Adultos: Transex/Female' },
      { id: '74', cat: 'XXX', desc: 'Adultos: XXX' },
      { id: '69', cat: 'TV/Anime', desc: 'Anime: Anime' },
      { id: '116', cat: 'TV/Anime', desc: 'Anime: Filmes' },
      { id: '118', cat: 'TV/Anime', desc: 'Anime: Séries' },
      { id: '23', cat: 'PC/Phone-Android', desc: 'Aplicativos: Android' },
      { id: '27', cat: 'PC/Phone-IOS', desc: 'Aplicativos: iPad' },
      { id: '26', cat: 'PC/Phone-IOS', desc: 'Aplicativos: iPhone' },
      { id: '28', cat: 'PC/Phone-IOS', desc: 'Aplicativos: iPod' },
      { id: '25', cat: 'PC', desc: 'Aplicativos: Linux' },
      { id: '22', cat: 'PC/Mac', desc: 'Aplicativos: Mac' },
      { id: '21', cat: 'PC/0day', desc: 'Aplicativos: Windows' },
      { id: '72', cat: 'Books', desc: 'Apostila: Apostila' },
      { id: '71', cat: 'Books', desc: 'Apostila: Cursos' },
      { id: '121', cat: 'Audio/Audiobook', desc: 'Ebook: Audio-book' },
      { id: '112', cat: 'Books', desc: 'Ebook: HQs' },
      { id: '67', cat: 'Books', desc: 'Ebook: Livros' },
      { id: '68', cat: 'Books', desc: 'Ebook: Revistas' },
      { id: '119', cat: 'Movies', desc: 'Filmes:' },
      { id: '70', cat: 'XXX', desc: 'Fotos: XXX' },
      { id: '57', cat: 'Console', desc: 'Jogos: Android' },
      { id: '52', cat: 'Console', desc: 'Jogos: Dreamcast' },
      { id: '109', cat: 'Console', desc: 'Jogos: Emulação' },
      { id: '61', cat: 'Console', desc: 'Jogos: Emuladores e Roms' },
      { id: '48', cat: 'PC/Mac', desc: 'Jogos: Mac' },
      { id: '58', cat: 'Console/NDS', desc: 'Jogos: Nintendo DS' },
      { id: '110', cat: 'Console', desc: 'Jogos: Nintendo Switch' },
      { id: '47', cat: 'PC/Games', desc: 'Jogos: Pc' },
      { id: '49', cat: 'Console', desc: 'Jogos: Ps1' },
      { id: '50', cat: 'Console', desc: 'Jogos: Ps2' },
      { id: '51', cat: 'Console/PS3', desc: 'Jogos: Ps3' },
      { id: '79', cat: 'Console/PS4', desc: 'Jogos: Ps4' },
      { id: '82', cat: 'Console/PSP', desc: 'Jogos: PSP' },
      { id: '55', cat: 'Console/Wii', desc: 'Jogos: Wii' },
      { id: '54', cat: 'Console/Xbox360', desc: 'Jogos: Xbox360' },
      { id: '56', cat: 'Console/Xbox', desc: 'Jogos: Xbox' },
      { id: '78', cat: 'Console/XboxOne', desc: 'Jogos: Xbox One' },
      { id: '29', cat: 'Audio', desc: 'Musica: Axé' },
      { id: '38', cat: 'Audio', desc: 'Musica: Blues' },
      { id: '39', cat: 'Audio', desc: 'Musica: Dance' },
      { id: '40', cat: 'Audio', desc: 'Musica: Discografia' },
      { id: '43', cat: 'Audio', desc: 'Musica: Dubstep' },
      { id: '41', cat: 'Audio', desc: 'Musica: Erudita' },
      { id: '42', cat: 'Audio', desc: 'Musica: Forró' },
      { id: '31', cat: 'Audio', desc: 'Musica: Funk' },
      { id: '84', cat: 'Audio', desc: 'Musica: Game (OST)' },
      { id: '83', cat: 'Audio', desc: 'Musica: Gospel' },
      { id: '37', cat: 'Audio', desc: 'Musica: Hard Rock' },
      { id: '33', cat: 'Audio', desc: 'Musica: Hip-Hop' },
      { id: '114', cat: 'Audio', desc: 'Musica: MPB' },
      { id: '77', cat: 'Audio', desc: 'Musica: Outros' },
      { id: '32', cat: 'Audio', desc: 'Musica: Pagode' },
      { id: '115', cat: 'Audio', desc: 'Musica: POP' },
      { id: '34', cat: 'Audio', desc: 'Musica: Rap' },
      { id: '76', cat: 'Audio', desc: 'Musica: Reggae' },
      { id: '36', cat: 'Audio', desc: 'Musica: Rock' },
      { id: '45', cat: 'Audio', desc: 'Musica: Samba' },
      { id: '46', cat: 'Audio', desc: 'Musica: Sertanejo' },
      { id: '120', cat: 'TV', desc: 'Series:' },
      { id: '65', cat: 'TV', desc: 'Shows: Show' },
      { id: '63', cat: 'TV', desc: 'Tv: Aberta' },
      { id: '62', cat: 'TV/Sport', desc: 'Tv: Esportes' },
      { id: '64', cat: 'TV', desc: 'Tv: Fechada' },
      { id: '73', cat: 'TV', desc: 'Video Aula: Video Aula' },
      { id: '999', cat: 'Other', desc: 'Error Cat not Found' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  login: {
    path: 'account-login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      remember: 'yes',
    },
    error: [{ selector: 'div.alert-error' }],
    test: {
      path: 'torrents-search.php',
      selector: 'a[href="account-logout.php"]',
    },
  },
  ratio: {
    path: 'torrents-search.php',
    selector: 'li:contains("Ratio:") a b',
  },
  search: {
    paths: [
      { path: 'torrents-search.php' },
      { path: 'torrents-search.php', inputs: { page: 1 } },
      { path: 'torrents-search.php', inputs: { page: 2 } },
      { path: 'torrents-search.php', inputs: { page: 3 } },
      { path: 'torrents-search.php', inputs: { page: 4 } },
    ],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ re_replace .Keywords "[\\s]+" "%" }}',
      incldead: 1,
      freeleech: 0,
      lang: 0,
      sort: '{{ .Config.sort }}',
      order: '{{ .Config.type }}',
    },
    keywordsfilters: [{ name: 're_replace', args: ['([12][0-9]{3})', ''] }],
    rows: {
      selector: 'div#fancy-list-group ul.list-group li.list-group-item',
    },
    fields: {
      _quality: {
        selector:
          'div.list-group-item-content p.m-0 span.badge-primary:contains("1080p"), div.list-group-item-content p.m-0 span.badge-primary:contains("720p"), div.list-group-item-content p.m-0 span.badge-primary:contains("4k")',
        optional: true,
      },
      _year: {
        selector: 'div.list-group-item-content p.m-0 span.badge-primary[style$="#246AB6;"]',
        optional: true,
      },
      _type: {
        selector:
          'div.list-group-item-content p.m-0 span.badge-info:contains("Rip"), div.list-group-item-content p.m-0 span.badge-info:contains("WEB-"), div.list-group-item-content p.m-0 span.badge-info:contains("TV"), div.list-group-item-content p.m-0 span.badge-info:contains("Blu-Ray"), div.list-group-item-content p.m-0 span.badge-info:contains("BD50"), div.list-group-item-content p.m-0 span.badge-info:contains("MUX"), div.list-group-item-content p.m-0 span.badge-info:contains("DVD"), div.list-group-item-content p.m-0 span.badge-info:contains("320"), div.list-group-item-content p.m-0 span.badge-info:contains("CAM"), div.list-group-item-content p.m-0 span.badge-info:contains("rip")',
        optional: true,
      },
      _language: {
        selector: 'div.list-group-item-content p.m-0 span.badge-primary[style$="#b6249d;"]',
        optional: true,
      },
      title: {
        selector: 'a[href^="torrents-details.php?id="]',
        filters: [
          {
            name: 're_replace',
            args: ['^(.*?)[\\(](.*?)[\\)](.*?)$', '$2$3'],
          },
          {
            name: 'append',
            args: '{{if .Result._year}} {{.Result._year}}{{else}}{{end}}',
          },
          {
            name: 'append',
            args: '{{if .Result._quality}} {{.Result._quality}}{{else}}{{end}}',
          },
          {
            name: 'append',
            args: '{{if .Result._type}} {{.Result._type}}{{else}}{{end}}',
          },
          {
            name: 'append',
            args: '{{if .Result._language}} {{.Result._language}}{{else}}{{end}}',
          },
          {
            name: 're_replace',
            args: ['(Dual-Audio|Dublado)', 'Brazilian $1'],
          },
        ],
      },
      details: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      category: {
        selector: 'div.list-group-item-addon img',
        attribute: 'src',
        case: {
          '[src$="/XXXZ.png"]': 74,
          '[src$="/Hentai.png"]': 75,
          '[src$="/Anime.png"]': 69,
          '[src$="/Windows.png"]': 21,
          '[src$="/Mac.png"]': 22,
          '[src$="/Android.png"]': 23,
          '[src$="/Linux.png"]': 25,
          '[src$="/iPhone.png"]': 26,
          '[src$="/iPad.png"]': 27,
          '[src$="/iPod.png"]': 28,
          '[src$="/Cursos.png"]': 71,
          '[src$="/Apostila.png"]': 72,
          '[src$="/E-books.png"]': 67,
          '[src$="/Revista.png"]': 68,
          '[src$="/HQ.png"]': 112,
          '[src$="/Filmes.png"]': 119,
          '[src$="/Revistas-XXX.png"]': 70,
          '[src$="/PS4.png"]': 79,
          '[src$="/Jogos-PC.png"]': 47,
          '[src$="/Emulador.png"]': 61,
          '[src$="/Emulacao.png"]': 109,
          '[src$="/Jogos-Mac.png"]': 48,
          '[src$="/Jogos-PS1.png"]': 49,
          '[src$="/Jogos-PS2.png"]': 50,
          '[src$="/Jogos-PS3.png"]': 51,
          '[src$="/Jogos-Dreamcast.png"]': 52,
          '[src$="/Jogos-Xbox360.png"]': 54,
          '[src$="/Jogos-Xbox.png"]': 56,
          '[src$="/Jogos-Wii.png"]': 55,
          '[src$="/Jogos-DS.png"]': 58,
          '[src$="/jogosandroid.png"]': 57,
          '[src$="/Jogos-PSP.png"]': 82,
          '[src$="/Jogos-NS.png"]': 110,
          '[src$="/Jogos-XboxOne.png"]': 78,
          '[src$="/Axe.png"]': 29,
          '[src$="/Funk.png"]': 31,
          '[src$="/Pagode.png"]': 32,
          '[src$="/HIP_HOP.png"]': 33,
          '[src$="/Rap.png"]': 34,
          '[src$="/Rock.png"]': 36,
          '[src$="/Hard-Rock.png"]': 37,
          '[src$="/Blues.png"]': 38,
          '[src$="/Dance.png"]': 39,
          '[src$="/Discografia.png"]': 40,
          '[src$="/Erudita.png"]': 41,
          '[src$="/Forro.png"]': 42,
          '[src$="/Dubstep.png"]': 43,
          '[src$="/Sertanejo.png"]': 46,
          '[src$="/Samba.png"]': 45,
          '[src$="/Musica-Outros.png"]': 77,
          '[src$="/Reggae.png"]': 76,
          '[src$="/Gospel.png"]': 83,
          '[src$="/POP.png"]': 115,
          '[src$="/MPB.png"]': 114,
          '[src$="/OST.png"]': 84,
          '[src$="/Seriados.png"]': 120,
          '[src$="/Shows.png"]': 65,
          '[src$="/Aberta.png"]': 63,
          '[src$="/Esporte.png"]': 62,
          '[src$="/Fechada.png"]': 64,
          '[src$="/Videoaula.png"]': 73,
          '*': 999,
        },
      },
      date: {
        selector: 'p:contains("Lançado:")',
        optional: true,
        filters: [
          { name: 'regexp', args: 'Lançado: (.+?)$' },
          { name: 're_replace', args: [' (\\d:)', ' 0$1'] },
          { name: 'dateparse', args: '02/01/06 15:04:05' },
        ],
      },
      size: {
        selector: 'div.list-group-item-content p.m-0 span.badge-info',
      },
      seeders: { selector: 'div.list-group-item-controls a:nth-child(1)' },
      leechers: { selector: 'div.list-group-item-controls a:nth-child(2)' },
      grabs: { selector: 'div.list-group-item-controls a:nth-child(3)' },
      downloadvolumefactor: {
        case: { 'span.badge-success:contains("FREE")': 0, '*': 1 },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
