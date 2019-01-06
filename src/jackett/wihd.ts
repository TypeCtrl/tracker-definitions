import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'wihd',
  name: 'World-In-HD',
  description: 'Your world in HD',
  language: 'fr-FR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://world-in-hd.net/'],
  caps: {
    categorymappings: [
      { id: '565af82b1fd35761568b4572', cat: 'Movies/HD', desc: '1080p' },
      { id: '565af82b1fd35761568b4574', cat: 'Movies/HD', desc: '720p' },
      { id: '565af82b1fd35761568b4576', cat: 'Movies/HD', desc: 'HDTV' },
      {
        id: '565af82b1fd35761568b4578',
        cat: 'Movies/HD',
        desc: 'Bluray',
      },
      {
        id: '565af82b1fd35761568b457a',
        cat: 'Movies/HD',
        desc: 'Bluray Remux',
      },
      {
        id: '565af82b1fd35761568b457c',
        cat: 'Movies/HD',
        desc: 'Bluray 3D',
      },
      { id: '565af82d1fd35761568b4587', cat: 'TV/HD', desc: '1080p' },
      { id: '565af82d1fd35761568b4589', cat: 'TV/HD', desc: '720p' },
      { id: '565af82d1fd35761568b458b', cat: 'TV/HD', desc: 'HDTV' },
      { id: '565af82d1fd35761568b458d', cat: 'TV/HD', desc: 'Bluray' },
      {
        id: '565af82d1fd35761568b458f',
        cat: 'TV/HD',
        desc: 'Bluray Remux',
      },
      { id: '565af82d1fd35761568b4591', cat: 'TV/HD', desc: 'Bluray 3D' },
      { id: '565af82d1fd35761568b459c', cat: 'TV/Anime', desc: '1080p' },
      { id: '565af82d1fd35761568b459e', cat: 'TV/Anime', desc: '720p' },
      { id: '565af82d1fd35761568b45a0', cat: 'TV/Anime', desc: 'HDTV' },
      { id: '565af82d1fd35761568b45a2', cat: 'TV/Anime', desc: 'Bluray' },
      {
        id: '565af82d1fd35761568b45a4',
        cat: 'TV/Anime',
        desc: 'Bluray Remux',
      },
      {
        id: '565af82d1fd35761568b45a6',
        cat: 'TV/Anime',
        desc: 'Bluray 3D',
      },
      {
        id: '565af82d1fd35761568b45af',
        cat: 'PC/0day',
        desc: 'software',
      },
      {
        id: '565af82d1fd35761568b45b1',
        cat: 'Audio/Video',
        desc: 'clips',
      },
      {
        id: '565af82d1fd35761568b45b3',
        cat: 'Audio/Other',
        desc: 'Audio tracks',
      },
      {
        id: '565af82d1fd35761568b45b5',
        cat: 'TV/Documentary',
        desc: 'documentaries',
      },
      {
        id: '565af82d1fd35761568b45b7',
        cat: 'Movies/HD',
        desc: 'Bluray',
      },
      { id: '59591f0807fd301b6eaa7a8f', cat: 'Movies/HD', desc: '1080p' },
      { id: '595cd82e07fd301b6eaa7a90', cat: 'Movies/HD', desc: '720p' },
      {
        id: '59e67c0ed5b6a3e689dd1e1f',
        cat: 'Movies/UHD',
        desc: 'Bluray 4K',
      },
      {
        id: '59e488174a23a800358b4567',
        cat: 'Movies/UHD',
        desc: 'Bluray Remux 4K',
      },
      { id: '5a64af02ee30983a7e596aed', cat: 'Movies/HD', desc: 'WEB-DL' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  login: {
    path: '/login',
    method: 'form',
    form: 'form#login-form',
    inputs: {
      _username: '{{ .Config.username }}',
      _password: '{{ .Config.password }}',
      _remember_me: 'on',
    },
    error: [{ selector: ':contains("\\"success\\":false")' }],
    test: { path: '/torrents' },
  },
  search: {
    paths: [{ path: '/torrent/ajaxfiltertorrent/{{ .Keywords }}' }],
    keywordsfilters: [{ name: 're_replace', args: ['^$', 'null'] }],
    inputs: {
      $raw: '{{range .Categories}}subcat[]={{.}}&{{end}}',
      exclu: '0',
      freeleech: '0',
      reseed: '0',
    },
    rows: {
      selector: 'div.torrent-item',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: {
        selector: 'a.torrentlink',
        attribute: 'title',
        filters: [
          {
            name: 're_replace',
            args: ['(?i)(SEASON|SAISON) (\\d\\d)', 'S$2'],
          },
          {
            name: 're_replace',
            args: ['(?i)(SEASON|SAISON) (\\d)', 'S0$2'],
          },
          { name: 're_replace', args: ['(?i) (MULTI) ', ' $1 FRENCH '] },
        ],
      },
      banner: {
        selector: 'a.torrentlink > img.img-responsive',
        attribute: 'src',
      },
      details: { selector: 'a.torrentlink', attribute: 'href' },
      category: {
        selector: 'div.category',
        case: {
          ':contains("Films"):contains("1080p")': '565af82b1fd35761568b4572',
          ':contains("Films"):contains("720p")': '565af82b1fd35761568b4574',
          ':contains("Films"):contains("HDTV")': '565af82b1fd35761568b4576',
          ':contains("Films"):contains("Bluray Remux")': '565af82b1fd35761568b457a',
          ':contains("Films"):contains("Bluray 3D")': '565af82b1fd35761568b457c',
          ':contains("Films"):contains("Bluray Remux 4K")': '59e488174a23a800358b4567',
          ':contains("Films"):contains("Bluray 4K")': '59e67c0ed5b6a3e689dd1e1f',
          ':contains("Films"):contains("Bluray")': '565af82b1fd35761568b4578',
          ':contains("Films"):contains("WEB-DL")': '5a64af02ee30983a7e596aed',
          ':contains("Séries"):contains("1080p")': '565af82d1fd35761568b4587',
          ':contains("Séries"):contains("720p")': '565af82d1fd35761568b4589',
          ':contains("Séries"):contains("HDTV")': '565af82d1fd35761568b458b',
          ':contains("Séries"):contains("Bluray Remux")': '565af82d1fd35761568b458f',
          ':contains("Séries"):contains("Bluray 3D")': '565af82d1fd35761568b4591',
          ':contains("Séries"):contains("Bluray")': '565af82d1fd35761568b458d',
          ':contains("Animations"):contains("1080p")': '565af82d1fd35761568b459c',
          ':contains("Animations"):contains("720p")': '565af82d1fd35761568b459e',
          ':contains("Animations"):contains("HDTV")': '565af82d1fd35761568b45a0',
          ':contains("Animations"):contains("Bluray Remux")': '565af82d1fd35761568b45a4',
          ':contains("Animations"):contains("Bluray 3D")': '565af82d1fd35761568b45a6',
          ':contains("Animations"):contains("Bluray")': '565af82d1fd35761568b45a2',
          ':contains("Divers"):contains("Logiciels")': '565af82d1fd35761568b45af',
          ':contains("Divers"):contains("Clips")': '565af82d1fd35761568b45b1',
          ':contains("Divers"):contains("Pistes audios")': '565af82d1fd35761568b45b3',
          ':contains("Divers"):contains("Documentaires")': '565af82d1fd35761568b45b5',
          ':contains("Divers"):contains("Bluray")': '565af82d1fd35761568b45b7',
          ':contains("Divers"):contains("1080p")': '59591f0807fd301b6eaa7a8f',
          ':contains("Divers"):contains("720p")': '595cd82e07fd301b6eaa7a90',
          '*': '',
        },
      },
      size: {
        selector: 'div.category',
        case: {
          ':contains("Films"):contains("1080p")': '5GB',
          ':contains("Films"):contains("720p")': '4GB',
          ':contains("Films"):contains("HDTV")': '3GB',
          ':contains("Films"):contains("Bluray Remux")': '20GB',
          ':contains("Films"):contains("Bluray 3D")': '20GB',
          ':contains("Films"):contains("Bluray Remux 4K")': '40GB',
          ':contains("Films"):contains("Bluray 4K")': '40GB',
          ':contains("Films"):contains("Bluray")': '20GB',
          ':contains("Films"):contains("WEB-DL")': '5GB',
          ':contains("Séries"):contains("1080p")': '3GB',
          ':contains("Séries"):contains("720p")': '2GB',
          ':contains("Séries"):contains("HDTV")': '1GB',
          ':contains("Séries"):contains("Bluray Remux")': '20GB',
          ':contains("Séries"):contains("Bluray 3D")': '20GB',
          ':contains("Séries"):contains("Bluray")': '20GB',
          ':contains("Animations"):contains("1080p")': '3GB',
          ':contains("Animations"):contains("720p")': '2GB',
          ':contains("Animations"):contains("HDTV")': '1GB',
          ':contains("Animations"):contains("Bluray Remux")': '20GB',
          ':contains("Animations"):contains("Bluray 3D")': '20GB',
          ':contains("Animations"):contains("Bluray")': '20GB',
          ':contains("Divers"):contains("Logiciels")': '0',
          ':contains("Divers"):contains("Clips")': '1GB',
          ':contains("Divers"):contains("Pistes audios")': '1GB',
          ':contains("Divers"):contains("Documentaires")': '1GB',
          ':contains("Divers"):contains("Bluray")': '20GB',
          ':contains("Divers"):contains("1080p")': '5GB',
          ':contains("Divers"):contains("720p")': '4GB',
          '*': '',
        },
      },
      download: { selector: 'div.download-item > a', attribute: 'href' },
      seeders: {
        selector: 'div.seeders',
        filters: [{ name: 're_replace', args: ['^$', '999'] }],
      },
      leechers: {
        selector: 'div.leechers',
        filters: [{ name: 're_replace', args: ['^$', '999'] }],
      },
      grabs: { selector: 'div.completed' },
      downloadvolumefactor: { case: { 'div.fl-label': '0', '*': '1' } },
      uploadvolumefactor: { case: { '*': '1' } },
      date: { text: 'now' },
    },
  },
  source: 'jackett',
};
