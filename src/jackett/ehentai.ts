import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'ehentai',
  name: 'E-Hentai',
  description: 'E-Hentai is a Public site for Hentai doujinshi, manga.',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://e-hentai.org/'],
  settings: [],
  caps: {
    categorymappings: [{ id: '1', cat: 'TV/Anime', desc: 'Anime' }],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  download: { selector: 'a[href*="/get/"]', attribute: 'href' },
  search: {
    paths: [
      {
        path: 'torrents.php{{ if .Keywords }}?search={{ .Keywords }}{{else}}{{end}}',
      },
      {
        path: 'torrents.php{{ if .Keywords }}?search={{ .Keywords }}&page=1{{else}}?page=1{{end}}',
      },
    ],
    rows: { selector: 'table.itg > tbody > tr:has(td)' },
    fields: {
      category: { text: 1 },
      title: { selector: 'a[href*="/gallerytorrents.php?gid="]' },
      details: { selector: 'a[href*="/g/"]', attribute: 'href' },
      download: {
        selector: 'a[href*="/gallerytorrents.php?gid="]',
        attribute: 'href',
      },
      date: {
        selector: 'td:first-child',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '2006-01-02 15:04 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(4)' },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(6)' },
      grabs: { selector: 'td:nth-child(7)' },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
