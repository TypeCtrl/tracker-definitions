import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'firebit',
  name: 'FireBit',
  description: 'FireBit is an UKRAINIAN / RUSSIAN Public Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'ru-RU',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://firebit.net/', 'https://firebit.info/'],
  legacylinks: [
    'https://firebit.name/',
    'https://firebit.biz/',
    'http://firebit.net/',
    'http://firebit.info/',
    'http://firebit.name/',
    'http://firebit.pro/',
    'http://firebit.club/',
    'http://firebit.biz/',
    'https://firebit.pro/',
    'https://firebit.club/',
  ],
  caps: {
    categorymappings: [
      { id: 'Мультфильмы', cat: 'TV/Anime', desc: 'Мультфильмы' },
      { id: 'Программы', cat: 'PC', desc: 'Программы' },
      { id: 'Программы Видео', cat: 'PC', desc: 'Программы Видео' },
      { id: 'Программы FAQ', cat: 'PC', desc: 'Программы FAQ' },
      {
        id: 'Программы Web Оформление',
        cat: 'PC',
        desc: 'Программы Web Оформление',
      },
      { id: 'Linux', cat: 'PC', desc: 'Linux' },
      { id: 'Мобилка', cat: 'PC/Mobile-Other', desc: 'Мобилка' },
      {
        id: 'Мобилка Игры',
        cat: 'PC/Mobile-Other',
        desc: 'Мобилка Игры',
      },
      { id: 'Литература', cat: 'Books', desc: 'Литература' },
      { id: 'Игры', cat: 'PC/Games', desc: 'Игры' },
      { id: 'Игры Мобилка', cat: 'PC/Games', desc: 'Игры Мобилка' },
      { id: 'Фильмы', cat: 'Movies', desc: 'Фильмы' },
      { id: 'Фильмы Видео', cat: 'Movies', desc: 'Фильмы Видео' },
      { id: 'Фильмы Сериалы', cat: 'Movies', desc: 'Фильмы Сериалы' },
      {
        id: 'Фильмы Скоро на трекере',
        cat: 'Movies',
        desc: 'Фильмы Скоро на трекере',
      },
      { id: 'Видео', cat: 'Movies', desc: 'Видео' },
      { id: 'Музыка', cat: 'Audio', desc: 'Музыка' },
      { id: 'Музыка Фильмы', cat: 'Audio', desc: 'Музыка Фильмы' },
      { id: 'Видео Музыка', cat: 'Audio/Video', desc: 'Видео Музыка' },
      {
        id: 'Фильмы Музыка Видео',
        cat: 'Audio/Video',
        desc: 'Фильмы Музыка Видео',
      },
      { id: 'Музыка Видео', cat: 'Audio/Video', desc: 'Музыка Видео' },
      { id: 'Другие категории', cat: 'Other', desc: 'Другие категории' },
      { id: 'Сериалы', cat: 'TV', desc: 'Сериалы' },
      { id: '-', cat: 'Other', desc: 'Другие категории' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [],
  download: {
    selectors: [{ selector: 'a[href^="/download.php?id="]', attribute: 'href' }],
  },
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}index.php?do=search&type=simple&q={{ .Keywords }}{{ else }}%D1%84%D0%B8%D0%BB%D1%8C%D0%BC/{{ end }}',
      },
      {
        path: '{{ if .Keywords }}index.php?do=search&type=simple&q=abcd1234{{ else }}%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB/{{ end }}',
      },
    ],
    rows: {
      selector:
        '{{ if .Keywords }}table.torrents tbody tr:has(td.td-size){{ else }}div[id^="post-id-"]:has(li.meta-size){{ end }}',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'td:nth-child(1), div.article-indent div b',
        filters: [
          { name: 'replace', args: ['Новинки', ''] },
          { name: 're_replace', args: [',', ''] },
          { name: 'trim' },
        ],
      },
      title: { selector: 'td:nth-child(2), span.article-title' },
      details: {
        selector: 'td:nth-child(2) a, span.article-title a',
        attribute: 'href',
      },
      download: {
        selector: 'td:nth-child(2) a, span.article-title a',
        attribute: 'href',
      },
      size: {
        selector: 'td.td-size, li.meta-size',
        filters: [{ name: 'replace', args: ['-', '0 B'] }],
      },
      date: {
        selector: 'td:nth-child(5):not(:contains(",")), li.meta-date:not(:contains(","))',
        optional: true,
        filters: [
          { name: 'append', args: ' +03:00' },
          { name: 'dateparse', args: '02.01.2006 15:04:05 -07:00' },
        ],
      },
      seeders: { selector: 'td.l1, li.meta-sead' },
      leechers: { selector: 'td.l2, li.meta-leech' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
