import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'onejav',
  name: 'OneJAV',
  description: 'OneJAV is a Public tracker for Asian 3X (JAV)',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://onejav.com/'],
  caps: {
    modes: { search: ['q'] },
    categorymappings: [{ id: 'XXX', cat: 'XXX' }],
  },
  settings: [
    {
      name: 'flaresolverr-onejav',
      type: 'info',
      label: 'FlareSolverr',
      default:
        'This site may use Cloudflare DDoS Protection, therefore Jackett requires <a href="https://github.com/Jackett/Jackett#configuring-flaresolverr" target="_blank">FlareSolver</a> to access it.<br><br>If you have issues downloading, perform a keyword search (e.g. <b>video</b>) so FlareSolverr can grab new cookies.',
    },
  ],
  search: {
    paths: [
      {
        path: '{{ if .Keywords }}search/{{ .Keywords }}{{ else }}new{{ end }}',
      },
      {
        path: '{{ if .Keywords }}search/{{ .Keywords }}{{ else }}new{{ end }}?page=2',
      },
    ],
    rows: { selector: 'div.mb-3' },
    fields: {
      category: { text: 'XXX' },
      title: { selector: 'a[href^="/torrent/"]' },
      details: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      download: {
        selector: 'a[href*="/download/"]',
        attribute: 'href',
      },
      poster: { selector: 'img', attribute: 'src' },
      actress: {
        selector: 'a[href^="/actress/"]',
        optional: true,
        filters: [{ name: 'prepend', args: 'Actress: ' }],
      },
      tags: {
        selector: 'div.tags',
        optional: true,
        filters: [{ name: 'prepend', args: 'Tags: ' }],
      },
      descr: { selector: 'p.level', optional: true },
      description: {
        text: '{{ .Result.descr }}</br>{{ .Result.actress }}</br>{{ .Result.tags }}',
      },
      date: {
        selector: 'p.is-6 > a',
        attribute: 'href',
        filters: [
          { name: 'append', args: ' -07:00' },
          { name: 'dateparse', args: '/2006/01/02 -07:00' },
        ],
      },
      size: { selector: 'span.is-size-6' },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
