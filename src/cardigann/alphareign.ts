import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'alphareign',
  name: 'AlphaReign',
  description: 'A DHT only tracker',
  language: 'en-US',
  encoding: 'UTF-8',
  links: ['https://alphareign.se'],
  caps: {
    categorymappings: [
      { id: 'Movies', cat: 'Movies' },
      { id: 'Movies/HD', cat: 'Movies/HD' },
      { id: 'Movies/SD', cat: 'Movies/SD' },
      { id: 'TV', cat: 'TV' },
      { id: 'TV/HD', cat: 'TV/HD' },
      { id: 'TV/SD', cat: 'TV/SD' },
      { id: 'Other', cat: 'Other' },
    ],
  },
  login: {
    path: '/login',
    method: 'form',
    form: 'form[action^="/login"]',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ path: '/login', selector: 'div.auth-form > div > div.alert-danger' }],
    test: { path: 'settings', selector: 'a[href="/logout"]' },
  },
  ratio: { text: '∞' },
  search: {
    path: '/',
    method: 'get',
    inputs: { query: '{{ .Keywords }}' },
    rows: { selector: '.result' },
    fields: {
      title: { attribute: 'data-name' },
      details: { selector: 'a[href^="/torrent"]', attribute: 'href' },
      download: { selector: 'a[href^="magnet:"]', attribute: 'href' },
      date: { attribute: 'data-added' },
      size: { attribute: 'data-size' },
      seeders: { attribute: 'data-seeders' },
      leechers: { attribute: 'data-leechers' },
      downloadvolumefactor: { case: { '*': '1' } },
      uploadvolumefactor: { case: { '*': '1' } },
      category: {
        case: {
          'a[class="label label-primary"]:contains("video") + a[class="label label-success"]:contains("movie") + a[class="label label-info"]:contains("HD")':
            'Movies/HD',
          'a[class="label label-primary"]:contains("video") + a[class="label label-success"]:contains("movie") + a[class="label label-info"]:contains("720p")':
            'Movies/HD',
          'a[class="label label-primary"]:contains("video") + a[class="label label-success"]:contains("movie") + a[class="label label-info"]:contains("1080p")':
            'Movies/HD',
          'a[class="label label-primary"]:contains("video") + a[class="label label-success"]:contains("movie") + a[class="label label-info"]:contains("SD")':
            'Movies/SD',
          'a[class="label label-primary"]:contains("video") + a[class="label label-success"]:contains("movie")':
            'Movies',
          'a[class="label label-primary"]:contains("video") + a[class="label label-success"]:contains("show") + a[class="label label-info"]:contains("HD")':
            'TV/HD',
          'a[class="label label-primary"]:contains("video") + a[class="label label-success"]:contains("show") + a[class="label label-info"]:contains("SD")':
            'TV/SD',
          'a[class="label label-primary"]:contains("video") + a[class="label label-success"]:contains("show")':
            'TV',
          '*': 'Other',
        },
      },
    },
  },
  source: 'cardigann',
};
