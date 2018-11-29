import { TopLevel } from '../definition-interface';
export const definition: TopLevel = {
  site: 'skytorrentsclone',
  name: 'SkyTorrentsClone',
  description:
    'SkyTorrents.lol is a Public SkyTorrents clone for TV / MOVIES / GENERAL',
  language: 'en-us',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.skytorrents.lol/'],
  caps: {
    categories: {
      album: 'Audio',
      ebook: 'Books',
      movie: 'Movies',
      show: 'TV',
      audio: 'Audio',
      doc: 'Books',
      games: 'PC/Games',
      software: 'PC',
    },
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [],
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}?query={{ .Keywords }}&sort=created{{else}}top100{{end}}',
      },
      {
        path:
          '{{ if .Keywords }}?query={{ .Keywords }}&sort=created&page=2{{else}}{{end}}',
      },
      {
        path:
          '{{ if .Keywords }}?query={{ .Keywords }}&sort=created&page=3{{else}}{{end}}',
      },
      {
        path:
          '{{ if .Keywords }}?query={{ .Keywords }}&sort=created&page=4{{else}}{{end}}',
      },
    ],
    rows: { selector: 'tr.result' },
    fields: {
      title: { selector: 'td a' },
      category: { optional: true, selector: 'a.label[href*="type="]' },
      details: { selector: 'td a', attribute: 'href' },
      download: {
        selector: 'a[href^="//itorrents"]',
        attribute: 'href',
      },
      magnet: { selector: 'a[href^="magnet:?"]', attribute: 'href' },
      size: { selector: 'td:nth-child(2)' },
      files: { selector: 'td:nth-child(3)' },
      date: {
        selector: 'td:nth-child(4)',
        filters: [{ name: 'timeago' }],
      },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(6)' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
};
