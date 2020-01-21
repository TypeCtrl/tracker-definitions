import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'estrenosdtl',
  name: 'EstrenosDTL',
  description: 'EstrenosDTL is a SPANISH Public tracker for MOVIES',
  language: 'es-ES',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.estrenosdtl.la/'],
  caps: {
    modes: { search: ['q'] },
    categorymappings: [
      { id: '1080p', cat: 'Movies/HD' },
      { id: '720p', cat: 'Movies/HD' },
      { id: 'BR-RIP', cat: 'Movies/BluRay' },
      { id: 'BR-SCREENER', cat: 'Movies/Other' },
      { id: 'DVDRip', cat: 'Movies/DVD' },
      { id: 'DVDScreener', cat: 'Movies/Other' },
      { id: 'HC HDRip', cat: 'Movies/HD' },
      { id: 'HD-RIP', cat: 'Movies/HD' },
      { id: 'HD-TC', cat: 'Movies/HD' },
      { id: 'HD-TS', cat: 'Movies/HD' },
      { id: 'HDRip', cat: 'Movies/HD' },
      { id: 'HDTC-SCREENER', cat: 'Movies/Other' },
      { id: 'HDTV-SCREENER', cat: 'Movies/Other' },
      { id: 'HQ-TC', cat: 'Movies' },
      { id: 'MKV', cat: 'Movies' },
      { id: 'TeleCine', cat: 'Movies' },
      { id: 'TS-HQ', cat: 'Movies' },
      { id: 'TS-Screener', cat: 'Movies/Other' },
      { id: 'V.O. Subtituladas', cat: 'Movies' },
      { id: 'VHS-Screener', cat: 'Movies/Other' },
      { id: 'Web DL', cat: 'Movies/WEBDL' },
      { id: 'WEB-RIP', cat: 'Movies/WEBDL' },
      { id: 'WEB-Screener', cat: 'Movies/Other' },
      { id: 'WEB-SCREENER HC', cat: 'Movies/Other' },
    ],
  },
  settings: [],
  download: {
    selector: 'a.linktorrent',
    attribute: 'href',
    filters: [
      {
        name: 'replace',
        args: ['https://www.estrenosdtl1.net/', '{{ .Config.sitelink }}'],
      },
    ],
  },
  search: {
    paths: [{ path: '/' }],
    inputs: { s: '{{ .Keywords }}' },
    rows: { selector: 'div.new_post', filters: [{ name: 'andmatch' }] },
    fields: {
      title: { selector: 'div.nombre_big1 a' },
      details: { selector: 'div.nombre_big1 a', attribute: 'href' },
      category: { selector: 'div.nombre_big1 p b', optional: true },
      download: { selector: 'div.nombre_big1 a', attribute: 'href' },
      date: {
        selector: 'div.fecha p',
        filters: [{ name: 'dateparse', args: '02-01-2006' }],
      },
      size: { selector: 'div.tamanio p', optional: true },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
