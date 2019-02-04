import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'tntvillage',
  name: 'TNTVillage',
  description: 'TNTVillage is an ITALIAN Public site for TV / MOVIES / GENERAL',
  language: 'it-IT',
  type: 'public',
  encoding: 'UTF-8',
  links: ['http://tntvillage.scambioetico.org/'],
  legacylinks: ['http://www.tntvillage.scambioetico.org/'],
  caps: {
    categorymappings: [
      { id: '4', cat: 'Movies', desc: 'Movies category' },
      { id: '2', cat: 'Audio', desc: 'Music videos' },
      { id: '29', cat: 'TV', desc: 'TV Series' },
      { id: '7', cat: 'TV/Anime', desc: 'Animes' },
      { id: '8', cat: 'TV/Anime', desc: 'Cartoons' },
      { id: '14', cat: 'TV/Documentary', desc: 'Documentaries' },
      { id: '30', cat: 'Books/Comics', desc: 'Comics' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
    },
  },
  settings: [],
  search: {
    paths: [{ path: '/src/releaselist.php', method: 'post' }],
    inputs: { cat: 0, page: 1, srcrel: '{{ .Keywords }}' },
    keywordsfilters: [{ name: 'diacritics', args: 'replace' }],
    rows: {
      selector: 'div.showrelease_tb table tbody tr:not(tr:nth-child(1))',
    },
    fields: {
      title: { selector: 'td:nth-child(7)' },
      category: {
        selector: 'td:nth-child(3) a',
        attribute: 'href',
        filters: [
          { name: 'split', args: ['=', '-1'] },
          {
            name: 're_replace',
            args: ['(?i)\\b([s])?(\\d{1,3})[x\\s](\\d{1,3})', 'S$2E$3'],
          },
          { name: 're_replace', args: ['(?i)web-?\\s?dlmux', 'WEB-DL'] },
        ],
      },
      details: { selector: 'td:nth-child(7) a', attribute: 'href' },
      download: { selector: 'td:nth-child(1) a', attribute: 'href' },
      magnet: { selector: 'td:nth-child(2) a', attribute: 'href' },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(4)' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
      size: {
        selector: 'td:nth-child(3) a',
        case: {
          'a[href*="&cat=4"]': '5GB',
          'a[href*="&cat=2"]': '100MB',
          'a[href*="&cat=30"]': '100MB',
          '*': '2GB',
        },
      },
    },
  },
  source: 'jackett',
};
