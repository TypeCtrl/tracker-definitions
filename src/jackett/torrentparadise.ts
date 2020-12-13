import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'torrentparadise',
  name: 'TorrentParadise',
  description: 'Torrent Paradise is a Public magnet indexer',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://torrentparadise.cc/'],
  legacylinks: [
    'https://torrentparadise.org/',
    'https://torrentparadise.cl/',
    'https://torrentparadise.to/',
    'https://torrentparadise.la/',
  ],
  caps: {
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
    categorymappings: [
      { id: '', cat: 'Other' },
      { id: 'ADULT', cat: 'XXX' },
      { id: 'ADULTLATINA', cat: 'XXX' },
      { id: 'ADULTMILF', cat: 'XXX' },
      { id: 'ADULTHDMOVIES', cat: 'XXX' },
      { id: 'ADULTPORN', cat: 'XXX' },
      { id: 'ADULTXXX', cat: 'XXX' },
      { id: 'ANDROID', cat: 'PC' },
      { id: 'ANIME', cat: 'TV/Anime' },
      { id: 'ANIMEDUBBEDSUBBED', cat: 'TV/Anime' },
      { id: 'APPLICATIONS', cat: 'PC' },
      { id: 'APPLICATIONSANDROID', cat: 'PC' },
      { id: 'APPLICATIONSHANDHELD', cat: 'PC/Mobile-Other' },
      { id: 'APPLICATIONSMAC', cat: 'PC/Mac' },
      { id: 'APPLICATIONSOTHEROS', cat: 'PC' },
      { id: 'APPLICATIONSWINDOWS', cat: 'PC/0day' },
      { id: 'APPS', cat: 'PC' },
      { id: 'APPSANDROID', cat: 'PC' },
      { id: 'APPSHANDHELD', cat: 'PC/Mobile-Other' },
      { id: 'APPSMAC', cat: 'PC/Mac' },
      { id: 'APPSOTHEROS', cat: 'PC' },
      { id: 'APPSPC', cat: 'PC' },
      { id: 'APPSWINDOWS', cat: 'PC/0day' },
      { id: 'AUDIO', cat: 'Audio' },
      { id: 'AUDIOBOOKS', cat: 'Audio/Audiobook' },
      { id: 'AUDIOAUDIOBOOKS', cat: 'Audio/Audiobook' },
      { id: 'AUDIOFLAC', cat: 'Audio/Lossless' },
      { id: 'AUDIOLOSSLESS', cat: 'Audio/Lossless' },
      { id: 'AUDIOMP3', cat: 'Audio/MP3' },
      { id: 'AUDIOMUSIC', cat: 'Audio' },
      { id: 'AUDIOOTHER', cat: 'Audio/Other' },
      { id: 'AUDIOSOUNDCLIPS', cat: 'Audio' },
      { id: 'ADULTGAMES', cat: 'XXX' },
      { id: 'ADULTMOVIES', cat: 'XXX' },
      { id: 'BOOKS', cat: 'Books' },
      { id: 'BOOKSAUDIO', cat: 'Audio/Audiobook' },
      { id: 'BOOKSCOMICS', cat: 'Books/Comics' },
      { id: 'BOOKSEBOOKS', cat: 'Books/Ebook' },
      { id: 'BOOKSMAGAZINES', cat: 'Books/Mags' },
      { id: 'BOOKSNONFICTION', cat: 'Books' },
      { id: 'BOOKSTEXTBOOKS', cat: 'Books' },
      { id: 'BOOKSTUTORIALS', cat: 'Books' },
      { id: 'COMICSNEM43COMICS', cat: 'Books/Comics' },
      { id: 'DESIPORN', cat: 'XXX' },
      { id: 'DOCUMENTARIES', cat: 'TV/Documentary' },
      { id: 'DVDRVIDEO', cat: 'Movies/DVD' },
      { id: 'EBOOKS', cat: 'Books/Ebook' },
      { id: 'EBOOKSTUTORIALS', cat: 'Books/Ebook' },
      { id: 'ESTRENOS', cat: 'XXX' },
      { id: 'FLAC', cat: 'Audio/Lossless' },
      { id: 'FLACMUSIC', cat: 'Audio/Lossless' },
      { id: 'GAMES', cat: 'PC/Games' },
      { id: 'GAMESANDROID', cat: 'PC/Games' },
      { id: 'GAMESHANDHELD', cat: 'Console' },
      { id: 'GAMESOTHER', cat: 'Console' },
      { id: 'GAMESPC', cat: 'PC/Games' },
      { id: 'GAMESPS2', cat: 'Console/PSP' },
      { id: 'GAMESPS3', cat: 'Console/PS3' },
      { id: 'GAMESPS4', cat: 'Console/PS4' },
      { id: 'GAMESPSP', cat: 'Console/PSP' },
      { id: 'GAMESWII', cat: 'Console/Wii' },
      { id: 'GAMESWIIU', cat: 'Console/WiiU' },
      { id: 'GAMESWINDOWS', cat: 'PC/Games' },
      { id: 'GAMESXBOX', cat: 'Console/Xbox' },
      { id: 'GAMESXBOX360', cat: 'Console/Xbox360' },
      { id: 'HDMOVIES', cat: 'Movies/HD' },
      { id: 'IMAGES', cat: 'Other' },
      { id: 'JAPANESEANIME', cat: 'TV/Anime' },
      { id: 'JUEGOS', cat: 'Console' },
      { id: 'JUEGOSPC', cat: 'PC/Games' },
      { id: 'JUEGOSPS2', cat: 'Console/PSP' },
      { id: 'JUEGOSPS3', cat: 'Console/PS3' },
      { id: 'JUEGOSPS4', cat: 'Console/PS4' },
      { id: 'JUEGOSPSP', cat: 'Console/PSP' },
      { id: 'JUEGOSWII', cat: 'Console/Wii' },
      { id: 'JUEGOSWIIU', cat: 'Console/WiiU' },
      { id: 'JUEGOSXBOX', cat: 'Console/Xbox' },
      { id: 'JUEGOSXBOX360', cat: 'Console/Xbox360' },
      { id: 'MACINTOSH', cat: 'PC/Mac' },
      { id: 'MISCELLANEOUS', cat: 'Other' },
      { id: 'MOBILE', cat: 'PC/Mobile-Other' },
      { id: 'MOVIES', cat: 'Movies' },
      { id: 'MOVIESBLURAYDISCREMUX', cat: 'Movies/HD' },
      { id: 'MOVIESBOLLYWOOD', cat: 'Movies' },
      { id: 'MOVIESCAMTS', cat: 'Movies' },
      { id: 'MOVIESDOCUMENTARY', cat: 'TV/Documentary' },
      { id: 'MOVIESDUBSDUALAUDIO', cat: 'Movies' },
      { id: 'MOVIESENGLISHSPANISHSUBT', cat: 'Movies' },
      { id: 'MOVIESSDX264H264', cat: 'Movies/SD' },
      { id: 'MOVIESHD', cat: 'Movies/HD' },
      { id: 'MOVIESHD720P', cat: 'Movies/HD' },
      { id: 'MOVIESHD1080P', cat: 'Movies/HD' },
      { id: 'MOVIESHEVCX265', cat: 'Movies/HD' },
      { id: 'MOVIESHIGHRESMOVIES', cat: 'Movies/HD' },
      { id: 'MOVIESSPANISHLANGUAGE', cat: 'Movies' },
      { id: 'MOVIESSPANISHLATINAMERICA', cat: 'Movies' },
      { id: 'MOVIESULTRAHD4K', cat: 'Movies/UHD' },
      { id: 'MOVIESX264H264', cat: 'Movies/HD' },
      { id: 'MOVIESXVID', cat: 'Movies/SD' },
      { id: 'MOVIESWEBRIPX264X265', cat: 'Movies/HD' },
      { id: 'MP3', cat: 'Audio/MP3' },
      { id: 'MP3MUSIC', cat: 'Audio/MP3' },
      { id: 'MSICA', cat: 'Other' },
      { id: 'MUSIC', cat: 'Audio' },
      { id: 'MUSICFLAC', cat: 'Audio/Lossless' },
      { id: 'MUSICLOSSLESS', cat: 'Audio/Lossless' },
      { id: 'MUSICMP3', cat: 'Audio/MP3' },
      { id: 'MUSICMUSICVIDEOS', cat: 'Audio/Video' },
      { id: 'MUSICVIDEOS', cat: 'Audio/Video' },
      { id: 'OTHER', cat: 'Other' },
      { id: 'OTHERCOMICS', cat: 'Other' },
      { id: 'OTHERCOVERS', cat: 'Other' },
      { id: 'OTHEREBOOKS', cat: 'Other' },
      { id: 'OTHEROTHER', cat: 'Other' },
      { id: 'OTHERPICTURES', cat: 'Other' },
      { id: 'OTHERSOUNDCLIPS', cat: 'Other' },
      { id: 'PELICULASCVCD', cat: 'TV/SD' },
      { id: 'PELICULASDIVX', cat: 'TV/SD' },
      { id: 'PELICULASHDRIP', cat: 'TV/HD' },
      { id: 'PELICULASMICROHD', cat: 'TV/HD' },
      { id: 'PICTURES', cat: 'Other' },
      { id: 'PORN', cat: 'XXX' },
      { id: 'PORNHDMOVIES', cat: 'XXX' },
      { id: 'PORNGAMES', cat: 'XXX' },
      { id: 'PORNMOVIECLIPS', cat: 'XXX' },
      { id: 'PORNMOVIESDVDR', cat: 'XXX' },
      { id: 'PORNMOVIES', cat: 'XXX' },
      { id: 'PORNOTHER', cat: 'XXX' },
      { id: 'PORNPICTURES', cat: 'XXX' },
      { id: 'SERIES', cat: 'TV' },
      { id: 'SOFTWARE', cat: 'PC' },
      { id: 'SOFTWAREANDROID', cat: 'PC/Mobile-Android' },
      { id: 'SOFTWAREMAC', cat: 'PC/Mac' },
      { id: 'SOFTWAREWINDOWS', cat: 'PC/0day' },
      { id: 'SOTFTWARE', cat: 'PC' },
      { id: 'SPORTS', cat: 'TV/Sport' },
      { id: 'TVHDSPORTS', cat: 'TV/Sport' },
      { id: 'TUTORIALS', cat: 'Other' },
      { id: 'TUTORIALSTUTORIALS', cat: 'Other' },
      { id: 'TV', cat: 'TV' },
      { id: 'TVHDX264H264', cat: 'TV/HD' },
      { id: 'TVHEVCX265', cat: 'TV/HD' },
      { id: 'TVDIVXXVID', cat: 'TV/SD' },
      { id: 'TVDOCUMENTARY', cat: 'TV/Documentary' },
      { id: 'TVSDXVID', cat: 'TV/SD' },
      { id: 'TVSDX264H264', cat: 'TV/SD' },
      { id: 'TVSDX264X265', cat: 'TV/SD' },
      { id: 'TVSHOWS', cat: 'TV' },
      { id: 'TVSPORT', cat: 'TV/Sport' },
      { id: 'TVULTRAHD4K', cat: 'TV/UHD' },
      { id: 'TVTVPACKS', cat: 'TV' },
      { id: 'VIDEO', cat: 'Movies' },
      { id: 'UNSORTEDUNSORTED', cat: 'Other' },
      { id: 'VIDEOHANDHELD', cat: 'Movies' },
      { id: 'VIDEOHDMOVIES', cat: 'Movies/HD' },
      { id: 'VIDEOHDRIP', cat: 'Movies' },
      { id: 'VIDEOHDTVSHOWS', cat: 'TV/HD' },
      { id: 'VIDEOMOVIESDVDR', cat: 'Movies/DVD' },
      { id: 'VIDEOMOVIECLIPS', cat: 'Movies' },
      { id: 'VIDEOMOVIES', cat: 'Movies' },
      { id: 'VIDEOMUSICVIDEOS', cat: 'Audio/Video' },
      { id: 'VIDEOOTHER', cat: 'Movies' },
      { id: 'VIDEOS', cat: 'Movies' },
      { id: 'VIDEOSDMOVIES', cat: 'Movies/SD' },
      { id: 'VIDEOSDTVSHOWS', cat: 'TV/SD' },
      { id: 'VIDEOTVSHOWS', cat: 'TV' },
      { id: 'VIDEOUHDMOVIES', cat: 'Movies/UHD' },
      { id: 'VIDEOUHDTVSHOWS', cat: 'TV/UHD' },
      { id: 'WINDOWS', cat: 'PC/0day' },
      { id: 'XXX', cat: 'XXX' },
      { id: 'XXXHDVIDEO', cat: 'XXX' },
      { id: 'XXXVIDEO', cat: 'XXX' },
    ],
  },
  settings: [],
  download: { selector: 'a[href^="magnet:?xt="]', attribute: 'href' },
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}search.php?f={{ .Keywords }}{{ else }}recent{{ end }}',
      },
    ],
    rows: { selector: 'table.table-bordered > tbody > tr.table-default' },
    fields: {
      category: {
        selector: 'td:nth-child(1) a',
        filters: [{ name: 're_replace', args: ['[^a-zA-Z0-9]+', ''] }, { name: 'toupper' }],
      },
      description: { selector: 'td:nth-child(1) a' },
      title: { selector: 'td:nth-child(2) a' },
      details: { selector: 'td:nth-child(2) a', attribute: 'href' },
      download: { selector: 'td:nth-child(2) a', attribute: 'href' },
      size: { selector: 'td:nth-child(3)' },
      date: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'timeago' }],
      },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(6)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
