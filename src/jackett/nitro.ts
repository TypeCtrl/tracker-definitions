import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'nitro',
  name: 'Nitro',
  description: 'Nitro is a POLISH Public Torrent Tracker',
  language: 'pl-PL',
  type: 'public',
  encoding: 'UTF-8',
  links: ['http://nitro.to/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'TV', desc: 'Seriale' },
      { id: '2', cat: 'Movies', desc: 'Filmy' },
      { id: '3', cat: 'Audio', desc: 'Muzyka' },
      { id: '4', cat: 'PC/Games', desc: 'Gry' },
      { id: '5', cat: 'TV/Anime', desc: 'Anime' },
      { id: '6', cat: 'PC', desc: 'Programy' },
      { id: '7', cat: 'Books', desc: 'E-Booki/Książki' },
      { id: '8', cat: 'Audio/Audiobook', desc: 'Audio Booki' },
      { id: '9', cat: 'PC/Phone-Other', desc: 'GSM/PDA' },
      { id: '10', cat: 'Other', desc: 'Inne' },
      { id: '11', cat: 'XXX', desc: 'XXX' },
      { id: '144', cat: 'Other', desc: 'Nieposortowane' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
    },
  },
  settings: [
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 'data',
      options: { data: 'created', seeds: 'seeders', size: 'size' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  download: {
    selector: 'script:contains("magnet:")',
    filters: [
      { name: 'regexp', args: '(magnet:[^"]+)"' },
      {
        name: 'append',
        args:
          '&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Fp4p.arenabg.com%3A1337%2Fannounce&tr=udp%3A%2F%2Fexplodie.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.demonii.si%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.torrent.eu.org%3A451%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Fipv4.tracker.harry.lu%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2710%2Fannounce&tr=udp%3A%2F%2Fdenis.stalker.upeer.me%3A6969%2Fannounce',
      },
    ],
  },
  search: {
    paths: [{ path: 'tags.php' }],
    inputs: {
      search: '{{ .Keywords }}',
      where: 1,
      per: 50,
      active: 1,
      order: '{{ .Config.sort }}',
      by: '{{ .Config.type }}',
    },
    rows: {
      selector: 'table[width="100%"] > tbody > tr:has(a[onclick="getMagnet(this)"])',
    },
    fields: {
      title: { selector: 'a[href^="/torrent/"]' },
      details: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      category: {
        selector: 'a[href^="/tags.php?tags="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'tags' }],
      },
      download: {
        selector: 'a[onclick="getMagnet(this)"]',
        attribute: 'title',
        filters: [
          {
            name: 'replace',
            args: ['/__DWNMAGNET__?', 'download_magnet.php?'],
          },
          { name: 'prepend', args: '{{ .Config.sitelink }}' },
        ],
      },
      date: {
        selector: 'td:nth-child(1)',
        filters: [{ name: 'dateparse', args: '02/01/2006' }],
      },
      size: { selector: 'td:nth-child(4)' },
      seeders: { selector: 'td:nth-child(6)' },
      leechers: { selector: 'td:nth-child(7)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
