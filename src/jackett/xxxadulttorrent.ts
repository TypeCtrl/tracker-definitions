import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'xxxadulttorrent',
  name: 'xxxAdultTorrent',
  description: 'xxxAdultTorrent is a RUSSIAN Public tracker for 3X',
  language: 'ru-RU',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://xxxadulttorrent.org/'],
  caps: {
    modes: { search: ['q'] },
    categorymappings: [{ id: 'XXX', cat: 'XXX' }],
  },
  settings: [],
  download: {
    selectors: [{ selector: 'a[href^="magnet:?xt="]', attribute: 'href' }],
  },
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}search/{{ .Keywords }}{{ else }}browse/0/0/0/0{{ end }}',
      },
    ],
    rows: {
      selector:
        'li.content__item:has(div#torrent_info > div:contains("GB")), li.content__item:has(div#torrent_info > div:contains("MB"))',
    },
    fields: {
      category: { text: 'XXX' },
      title: { selector: 'h1' },
      details: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      download: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      poster: {
        selector: 'img.content__item-img-wrapper',
        attribute: 'src',
      },
      date: { text: 'now' },
      size: { selector: 'div#torrent_info > div' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
