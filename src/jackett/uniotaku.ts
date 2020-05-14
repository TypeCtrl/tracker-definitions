import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'uniotaku',
  name: 'UniOtaku',
  description: 'UniOtaku is a BRAZILIAN Semi-Private Torrent Tracker for ANIME',
  language: 'pt-BR',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://tracker.uniotaku.com/'],
  caps: {
    categorymappings: [
      { id: '28', cat: 'TV/Anime', desc: 'Anime' },
      { id: '50', cat: 'TV/Other', desc: 'Dorama' },
      { id: '49', cat: 'Books/Comics', desc: 'Mangá' },
      { id: '48', cat: 'TV/Anime', desc: 'OVA' },
      { id: '47', cat: 'TV/Other', desc: 'Filme' },
      { id: '51', cat: 'Audio', desc: 'OST' },
      { id: '52', cat: 'TV/Anime', desc: 'Anime Completo' },
      { id: '53', cat: 'Books/Comics', desc: 'Mangá Completo' },
      { id: '54', cat: 'TV/Other', desc: 'Dorama Completo' },
      { id: '55', cat: 'XXX', desc: 'Hentai' },
      { id: '56', cat: 'XXX/Other', desc: 'H Doujinshi' },
      { id: '57', cat: 'TV/Other', desc: 'Tokusatsu' },
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
      manter: 1,
    },
    error: [{ selector: 'span.text-red' }],
    test: {
      path: 'index.php',
      selector: 'a[href="account-logout.php"]',
    },
  },
  download: {
    selector: 'a[href^="download.php?id="]',
    attribute: 'href',
  },
  search: {
    paths: [{ path: 'torrents.php' }],
    inputs: {
      busca: '{{ re_replace .Keywords "[\\s]+" "%" }}',
      grupo: 0,
      status: 0,
    },
    rows: { selector: 'table#data-table-torrents > tbody > tr' },
    fields: {
      title: { selector: 'a[href^="torrents-details.php?id="]' },
      details: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      category: {
        selector: 'td:nth-child(2)',
        attribute: 'src',
        case: {
          'img[src$="/anime.png"]': 28,
          'img[src$="/dorama.png"]': 50,
          'img[src$="/manga.png"]': 49,
          'img[src$="/ova.png"]': 48,
          'img[src$="/filme.png"]': 47,
          'img[src$="/ost.png"]': 51,
          'img[src$="/completo.png"]': 52,
          'img[src$="/completo_m.png"]': 54,
          'img[src$="/hentai.png"]': 55,
          'img[src$="/hdojinshi.png"]': 56,
          'img[src$="/tokusatsu.png"]': 57,
        },
      },
      date: { text: 'now' },
      seeders: { selector: 'td:nth-child(4)' },
      leechers: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(6)' },
      size: { selector: 'td:nth-child(7)' },
      downloadvolumefactor: {
        case: {
          'img[src="images/free.gif"]': 0,
          'img[src="images/silverdownload.gif"]': 0.5,
          '*': 1,
        },
      },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
