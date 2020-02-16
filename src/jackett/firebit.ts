import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'firebit',
  name: 'FireBit',
  description: 'FireBit is an UKRAINIAN / RUSSIAN Public Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'ru-RU',
  type: 'public',
  encoding: 'UTF-8',
  links: [
    'https://firebit.net/',
    'https://firebit.info/',
    'https://firebit.name/',
    'https://firebit.pro/',
    'https://firebit.club/',
    'https://firebit.biz/',
  ],
  legacylinks: [
    'http://firebit.net/',
    'http://firebit.info/',
    'http://firebit.name/',
    'http://firebit.pro/',
    'http://firebit.club/',
    'http://firebit.biz/',
  ],
  caps: {
    modes: { search: ['q'] },
    categorymappings: [
      { id: 'Мультфильмы', cat: 'TV/Anime' },
      { id: 'Программы', cat: 'PC' },
      { id: 'Литература', cat: 'Books' },
      { id: 'Игры', cat: 'PC/Games' },
      { id: 'Фильмы', cat: 'Movies' },
      { id: 'Видео', cat: 'Movies' },
      { id: 'Музыка', cat: 'Audio' },
      { id: 'Другие категории', cat: 'Other' },
      { id: 'Сериалы', cat: 'TV' },
    ],
  },
  settings: [],
  download: {
    selector: 'a[href^="/download.php?id="]',
    attribute: 'href',
  },
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}index.php?do=search&type=simple&q={{ .Keywords }}{{ else }}%D1%84%D0%B8%D0%BB%D1%8C%D0%BC/{{ end }}',
      },
      {
        path: '{{ if .Keywords }}{{ else }}%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB/{{ end }}',
      },
    ],
    rows: {
      selector: '{{ if .Keywords }}table.torrents tbody tr{{ else }}div[id^="post-id-"]{{ end }}',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        selector: 'td:nth-child(1), div.article-indent div b a',
        filters: [
          { name: 'replace', args: ['Новинки', ''] },
          { name: 'replace', args: [',', ''] },
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
      size: { selector: 'td.td-size, li.meta-size' },
      date: {
        selector: 'td:nth-child(5), li.meta-date',
        filters: [{ name: 'dateparse', args: '02.01.2006 15:04:05' }],
      },
      seeders: { selector: 'td.l1, li.meta-sead' },
      leechers: { selector: 'td.l2, li.meta-leech' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
