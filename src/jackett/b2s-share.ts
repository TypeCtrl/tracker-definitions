import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'b2s-share',
  name: 'B2S-Share',
  description: 'B2S-Share is a Brazilian Private site for TV / MOVIES / GENERAL',
  language: 'pt-BR',
  type: 'private',
  encoding: 'ISO-8859-1',
  links: ['http://www.b2s-share.com/'],
  caps: {
    categorymappings: [
      { id: '141', cat: 'Movies/3D', desc: '3D Ação' },
      { id: '142', cat: 'Movies/3D', desc: '3D Animação' },
      { id: '143', cat: 'Movies/3D', desc: '3D Aventura' },
      { id: '144', cat: 'Movies/3D', desc: '3D Clássico' },
      { id: '145', cat: 'Movies/3D', desc: '3D Comédia' },
      { id: '146', cat: 'Movies/3D', desc: '3D Documentário' },
      { id: '147', cat: 'Movies/3D', desc: '3D Drama' },
      { id: '149', cat: 'Movies/3D', desc: '3D Ficção' },
      { id: '150', cat: 'Movies/3D', desc: '3D Guerra' },
      { id: '151', cat: 'Movies/3D', desc: '3D Infantil' },
      { id: '152', cat: 'Movies/3D', desc: '3D Musical' },
      { id: '154', cat: 'Movies/3D', desc: '3D Outros' },
      { id: '155', cat: 'Movies/3D', desc: '3D Policial' },
      { id: '156', cat: 'Movies/3D', desc: '3D Religioso' },
      { id: '157', cat: 'Movies/3D', desc: '3D Romance' },
      { id: '158', cat: 'Movies/3D', desc: '3D Shows' },
      { id: '159', cat: 'Movies/3D', desc: '3D Suspense' },
      { id: '160', cat: 'Movies/3D', desc: '3D Terror' },
      { id: '161', cat: 'Movies/3D', desc: '3D Thriller' },
      { id: '162', cat: 'Movies/3D', desc: '3D Western' },
      { id: '173', cat: 'Movies', desc: '4K Ação' },
      { id: '191', cat: 'Movies', desc: '4K Animação' },
      { id: '190', cat: 'Movies', desc: '4K Aventura' },
      { id: '188', cat: 'Movies', desc: '4K Clássico' },
      { id: '175', cat: 'Movies', desc: '4K Comédia' },
      { id: '186', cat: 'Movies', desc: '4K Documentário' },
      { id: '185', cat: 'Movies', desc: '4K Drama' },
      { id: '177', cat: 'Movies', desc: '4K Ficção' },
      { id: '178', cat: 'Movies', desc: '4K Guerra' },
      { id: '179', cat: 'Movies', desc: '4K Infantil' },
      { id: '180', cat: 'Movies', desc: '4K Musical' },
      { id: '184', cat: 'Movies', desc: '4K Outros' },
      { id: '176', cat: 'Movies', desc: '4K Policial' },
      { id: '187', cat: 'Movies', desc: '4K Religioso' },
      { id: '174', cat: 'Movies', desc: '4K Romance' },
      { id: '181', cat: 'Movies', desc: '4K Shows' },
      { id: '182', cat: 'Movies', desc: '4K Suspense' },
      { id: '189', cat: 'Movies', desc: '4K Terror' },
      { id: '183', cat: 'Movies', desc: '4K Thriller' },
      { id: '11', cat: 'TV/Anime', desc: 'Anime' },
      { id: '2', cat: 'PC', desc: 'PC APPS - Linux' },
      { id: '3', cat: 'PC', desc: 'PC APPS - Mac' },
      { id: '33', cat: 'PC', desc: 'PC APPS - Portateis' },
      { id: '1', cat: 'PC', desc: 'PC APPS - Windows' },
      { id: '140', cat: 'Movies', desc: 'BD-R Autorado' },
      { id: '119', cat: 'Movies', desc: 'BD-R' },
      { id: '163', cat: 'Other', desc: 'Mobile App/Jogos-Android' },
      { id: '164', cat: 'Other', desc: 'Mobile App/Jogos-iPhone' },
      { id: '93', cat: 'Other', desc: 'Mobile App/Jogos-Java' },
      { id: '169', cat: 'Other', desc: 'Mobile App/Jogos-Outros' },
      { id: '168', cat: 'Other', desc: 'Mobile App/Jogos-Win' },
      { id: '92', cat: 'Other', desc: 'Mobile Filmes' },
      { id: '118', cat: 'Other', desc: 'Mobile Séries' },
      { id: '94', cat: 'Other', desc: 'Mobile Wallpapers' },
      { id: '172', cat: 'TV/Other', desc: 'Desenho Animado' },
      { id: '4', cat: 'Other', desc: 'Apostilas/Cursos' },
      { id: '12', cat: 'Books', desc: 'Diversos' },
      { id: '167', cat: 'Books', desc: 'E-book/Livros' },
      { id: '7', cat: 'PC/Games', desc: 'Emuladores / Roms' },
      { id: '166', cat: 'Books/Comics', desc: 'HQ' },
      { id: '165', cat: 'Books', desc: 'Revistas' },
      { id: '41', cat: 'Movies/SD', desc: 'DVD-R Autorado' },
      { id: '32', cat: 'Movies/SD', desc: 'DVD-R' },
      { id: '14', cat: 'Movies', desc: 'Filmes Ação' },
      { id: '99', cat: 'Movies', desc: 'Filmes Animação' },
      { id: '15', cat: 'Movies', desc: 'Filmes Aventura' },
      { id: '16', cat: 'Movies', desc: 'Filmes Clássico' },
      { id: '17', cat: 'Movies', desc: 'Filmes Comédia' },
      { id: '31', cat: 'Movies', desc: 'Filmes Documentário' },
      { id: '18', cat: 'Movies', desc: 'Filmes Drama' },
      { id: '19', cat: 'Movies', desc: 'Filmes Ficção' },
      { id: '20', cat: 'Movies', desc: 'Filmes Guerra' },
      { id: '126', cat: 'Movies', desc: 'Filmes Infantil' },
      { id: '96', cat: 'Movies', desc: 'Filmes Musical' },
      { id: '24', cat: 'Movies', desc: 'Filmes Outros' },
      { id: '40', cat: 'Movies', desc: 'Filmes Policial' },
      { id: '39', cat: 'Movies', desc: 'Filmes Religioso' },
      { id: '30', cat: 'Movies', desc: 'Filmes Romance' },
      { id: '22', cat: 'Movies', desc: 'Filmes Suspense' },
      { id: '23', cat: 'Movies', desc: 'Filmes Terror' },
      { id: '130', cat: 'Movies', desc: 'Filmes Thriller' },
      { id: '131', cat: 'Movies', desc: 'Filmes Western' },
      { id: '34', cat: 'Movies', desc: 'Filmes x264' },
      { id: '73', cat: 'Movies/HD', desc: 'Filmes 1080p Ação' },
      { id: '87', cat: 'Movies/HD', desc: 'Filmes 1080p Animação' },
      { id: '74', cat: 'Movies/HD', desc: 'Filmes 1080p Aventura' },
      { id: '75', cat: 'Movies/HD', desc: 'Filmes 1080p Clássico' },
      { id: '76', cat: 'Movies/HD', desc: 'Filmes 1080p Comédia' },
      { id: '77', cat: 'Movies/HD', desc: 'Filmes 1080p Documentário' },
      { id: '78', cat: 'Movies/HD', desc: 'Filmes 1080p Drama' },
      { id: '79', cat: 'Movies/HD', desc: 'Filmes 1080p Ficção' },
      { id: '80', cat: 'Movies/HD', desc: 'Filmes 1080p Guerra' },
      { id: '127', cat: 'Movies/HD', desc: 'Filmes 1080p Infantil' },
      { id: '97', cat: 'Movies/HD', desc: 'Filmes 1080p Musical' },
      { id: '63', cat: 'Movies/HD', desc: 'Filmes 1080p Outros' },
      { id: '82', cat: 'Movies/HD', desc: 'Filmes 1080p Policial' },
      { id: '83', cat: 'Movies/HD', desc: 'Filmes 1080p Religioso' },
      { id: '84', cat: 'Movies/HD', desc: 'Filmes 1080p Romance' },
      { id: '88', cat: 'Movies/HD', desc: 'Filmes 1080p Shows' },
      { id: '85', cat: 'Movies/HD', desc: 'Filmes 1080p Suspense' },
      { id: '86', cat: 'Movies/HD', desc: 'Filmes 1080p Terror' },
      { id: '132', cat: 'Movies/HD', desc: 'Filmes 1080p Thriller' },
      { id: '135', cat: 'Movies/HD', desc: 'Filmes 1080p Western' },
      { id: '58', cat: 'Movies/HD', desc: 'Filmes 720p Ação' },
      { id: '89', cat: 'Movies/HD', desc: 'Filmes 720p Animação' },
      { id: '60', cat: 'Movies/HD', desc: 'Filmes 720p Aventura' },
      { id: '61', cat: 'Movies/HD', desc: 'Filmes 720p Clássico' },
      { id: '62', cat: 'Movies/HD', desc: 'Filmes 720p Comédia' },
      { id: '72', cat: 'Movies/HD', desc: 'Filmes 720p Documentário' },
      { id: '64', cat: 'Movies/HD', desc: 'Filmes 720p Drama' },
      { id: '65', cat: 'Movies/HD', desc: 'Filmes 720p Ficção' },
      { id: '66', cat: 'Movies/HD', desc: 'Filmes 720p Guerra' },
      { id: '129', cat: 'Movies/HD', desc: 'Filmes 720p Infantil' },
      { id: '98', cat: 'Movies/HD', desc: 'Filmes 720p Musical' },
      { id: '59', cat: 'Movies/HD', desc: 'Filmes 720p Outros' },
      { id: '70', cat: 'Movies/HD', desc: 'Filmes 720p Policial' },
      { id: '57', cat: 'Movies/HD', desc: 'Filmes 720p Religioso' },
      { id: '71', cat: 'Movies/HD', desc: 'Filmes 720p Romance' },
      { id: '90', cat: 'Movies/HD', desc: 'Filmes 720p Shows' },
      { id: '68', cat: 'Movies/HD', desc: 'Filmes 720p Suspense' },
      { id: '69', cat: 'Movies/HD', desc: 'Filmes 720p Terror' },
      { id: '134', cat: 'Movies/HD', desc: 'Filmes 720p Thriller' },
      { id: '137', cat: 'Movies/HD', desc: 'Filmes 720p Western' },
      { id: '6', cat: 'Console', desc: 'Jogos Console' },
      { id: '51', cat: 'PC/Games', desc: 'Jogos Emuladores' },
      { id: '44', cat: 'Console', desc: 'Jogos Gamecube' },
      { id: '43', cat: 'Console/NDS', desc: 'Jogos Nintendo DS' },
      { id: '52', cat: 'Console', desc: 'Jogos Outros' },
      { id: '5', cat: 'PC/Games', desc: 'Jogos PC' },
      { id: '47', cat: 'Console', desc: 'Jogos PS2' },
      { id: '48', cat: 'Console', desc: 'Jogos PS3' },
      { id: '170', cat: 'Console', desc: 'Jogos PS4' },
      { id: '46', cat: 'Console', desc: 'Jogos PSP' },
      { id: '45', cat: 'Console/Wii', desc: 'Jogos Wii' },
      { id: '49', cat: 'Console/Xbox', desc: 'Jogos XBOX' },
      { id: '50', cat: 'Console/Xbox360', desc: 'Jogos XBOX360' },
      { id: '171', cat: 'Console', desc: 'Jogos XBOXONE' },
      { id: '29', cat: 'Audio', desc: 'Musica Discografia' },
      { id: '28', cat: 'Audio', desc: 'Musica Gospel' },
      { id: '139', cat: 'Audio', desc: 'Musica Infantil' },
      { id: '27', cat: 'Audio', desc: 'Musica Internacionais' },
      { id: '26', cat: 'Audio', desc: 'Musica Nacionais' },
      { id: '91', cat: 'Audio', desc: 'Musica Outros' },
      { id: '35', cat: 'TV/HD', desc: 'Séries HD' },
      { id: '8', cat: 'TV', desc: 'Séries' },
      { id: '13', cat: 'Audio/Video', desc: 'Show' },
      { id: '56', cat: 'Audio/Video', desc: 'Video Clipes' },
      { id: '53', cat: 'TV', desc: 'Entretenimento' },
      { id: '54', cat: 'TV/Sport', desc: 'Esportes' },
      { id: '138', cat: 'TV', desc: 'Infantil' },
      { id: '55', cat: 'TV', desc: 'Jornalismo' },
      { id: '36', cat: 'XXX/Other', desc: 'Anime Hentai' },
      { id: '10', cat: 'XXX', desc: 'Filmes Adultos' },
      { id: '37', cat: 'XXX/Other', desc: 'XXX Fotos' },
      { id: '95', cat: 'XXX/Other', desc: 'XXX Revistas' },
    ],
    modes: { search: ['q'] },
  },
  login: {
    path: 'account-login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    test: {
      path: 'torrents.php',
      selector: 'div:has(a[href*="account-logout.php"])',
    },
  },
  search: {
    paths: [{ path: 'torrents-search.php' }],
    keywordsfilters: [
      { name: 're_replace', args: ['[Ss][0-9]{2}[Ee][0-9]{2,3}', ''] },
      { name: 're_replace', args: ['[^a-zA-Z0-9]+', '%'] },
    ],
    inputs: { search: '{{ .Keywords }}' },
    rows: {
      selector:
        'table[class^="ttable_headinner"] > tbody > tr:has(a[href^="torrents-details.php?id="])',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      details: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      is_anime: {
        optional: true,
        selector: 'a[href^="torrents.php?cat=11"]',
        attribute: 'href',
      },
      title_anime: {
        selector: 'a[href^="torrents-details.php?id="]',
        filters: [
          {
            name: 're_replace',
            args: ['(Ep[\\.]?[ ]?)|([S]\\d\\d[Ee])', 'E'],
          },
        ],
      },
      title_normal: {
        selector: 'a[href^="torrents-details.php?id="]',
        filters: [
          {
            name: 're_replace',
            args: ['^(.*)[ ]([Ss][0-9]{2}[Ee][0-9]{2,3}).*(?:(?:\\((.*?)\\)))(.*$)', '$3 $2 $4'],
          },
          {
            name: 're_replace',
            args: ['^(.*)[ ].*(?:(?:\\((.*?)\\)))(.*$)', '$2 $3'],
          },
        ],
      },
      title: {
        text:
          '{{if .Result.is_anime }}{{ .Result.title_anime }}{{else}}{{ .Result.title_normal }}{{end}}',
      },
      download: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
        filters: [
          {
            name: 'replace',
            args: ['torrents-details.php', 'download.php'],
          },
        ],
      },
      category: {
        selector: 'a[href^="torrents.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      date: {
        selector: 'td:nth-child(2) > span',
        filters: [{ name: 'replace', args: ['(', ''] }, { name: 'replace', args: [')', ''] }],
      },
      size: { selector: 'td:nth-child(3)' },
      grabs: { selector: 'td:nth-child(4) > font > b' },
      seeders: { selector: 'td:nth-child(5) > b > font' },
      leechers: { selector: 'td:nth-child(6) > font > b' },
      downloadvolumefactor: {
        case: { 'img[alt="[free]"]': '0', '*': '1' },
      },
      uploadvolumefactor: {
        case: { 'img[alt="[+UP x2]"]': '2', '*': '1' },
      },
    },
  },
  source: 'jackett',
};
