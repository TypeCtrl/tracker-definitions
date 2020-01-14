import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'gamestorrents',
  name: 'GamesTorrents',
  description: 'GamesTorrents is a SPANISH Public tracker for GAMES',
  language: 'es-ES',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://www.gamestorrents.nu/'],
  legacylinks: ['https://www.gamestorrents.com/', 'https://www.gamestorrents.tv/'],
  caps: {
    modes: { search: ['q'] },
    categorymappings: [
      { id: 'juegos-pc', cat: 'PC/Games' },
      { id: 'juegos-psp', cat: 'Console/PSP' },
      { id: 'juegos-ps3', cat: 'Console/PS3' },
      { id: 'juegos-ps4', cat: 'Console/PS4' },
      { id: 'juegos-ps2', cat: 'Console/PS Vita' },
      { id: 'juegos-mac', cat: 'PC/Mac' },
      { id: 'juegos-xbox360', cat: 'Console/Xbox360' },
      { id: 'juegos-wii', cat: 'Console/Wii' },
      { id: 'juegos-nds', cat: 'Console/NDS' },
    ],
  },
  settings: [],
  download: { selector: 'a#download_torrent', attribute: 'href' },
  search: {
    paths: [{ path: '/' }],
    inputs: { s: '{{ .Keywords }}' },
    rows: {
      selector: 'table.metalion > tbody > tr',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      title: { selector: 'td:nth-child(1) a' },
      details: { selector: 'td:nth-child(1) a', attribute: 'href' },
      category: {
        selector: 'td:nth-child(1) a',
        attribute: 'href',
        filters: [{ name: 'split', args: ['/', 3] }],
      },
      download: { selector: 'td:nth-child(1) a', attribute: 'href' },
      date: {
        selector: 'td:nth-child(2)',
        filters: [{ name: 'dateparse', args: '02-01-2006' }],
      },
      size: {
        selector: 'td:nth-child(3)',
        filters: [{ name: 'replace', args: ['s', ''] }],
      },
      description: { selector: 'td:nth-child(4)' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
