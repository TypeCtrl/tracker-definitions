import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: '3dtorrents',
  name: '3D Torrents',
  description: '3D Movie tracker',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://www.3dtorrents.org/'],
  caps: {
    categorymappings: [
      { id: '14', cat: 'Movies', desc: 'Movies XviD' },
      { id: '34', cat: 'Movies', desc: 'Movies UltraHD' },
      { id: '15', cat: 'Movies', desc: 'Movies DVD-R' },
      { id: '11', cat: 'Movies', desc: 'Movies 720p' },
      { id: '13', cat: 'Movies', desc: 'Movies 1080p' },
      { id: '16', cat: 'Movies', desc: 'Movies 3DTV' },
      { id: '17', cat: 'Movies', desc: 'Movies Blu-ray' },
      { id: '27', cat: 'Movies', desc: 'Movies BD25 Encode' },
      { id: '33', cat: 'Movies', desc: 'Movies BD9 AVCHD' },
      { id: '22', cat: 'Movies', desc: 'Movies 2D to 3D Conv' },
      { id: '32', cat: 'Movies', desc: 'Bluray MKV Remux' },
      { id: '23', cat: 'Movies', desc: 'Movies Evo 3D' },
      { id: '21', cat: 'PC', desc: '3D Software' },
      { id: '2', cat: 'Audio', desc: 'Music' },
      { id: '28', cat: 'XXX', desc: 'Adult 720p' },
      { id: '29', cat: 'XXX', desc: 'Adult 1080p' },
      { id: '30', cat: 'XXX', desc: 'Adult Blu-ray' },
      { id: '31', cat: 'Other', desc: 'Misc' },
      { id: '19', cat: 'Audio', desc: 'Audio Packs' },
    ],
    modes: { search: ['q'] },
  },
  login: {
    path: 'index.php?page=login&amp;returnto=index.php',
    method: 'form',
    form: 'form',
    inputs: {
      uid: '{{ .Config.username }}',
      pwd: '{{ .Config.password }}',
    },
    captcha: {
      type: 'image',
      selector: 'img.captcha',
      input: 'private_key',
    },
    error: [{ selector: 'span.errormsg' }],
    test: { path: 'index.php' },
  },
  search: {
    paths: [{ path: 'index.php' }],
    inputs: {
      $raw: '{{range .Categories}}filter_cat[{{.}}]=1&{{end}}',
      search: '{{ .Query.Keywords }}',
      page: 'torrents',
      category: 0,
      '3dformat': 0,
      active: 1,
    },
    rows: {
      selector:
        'table[cellspacing!="1"].lista > tbody > tr:has(a[href^="index.php?page=torrents&category="])',
    },
    fields: {
      category: {
        selector: 'a[href^="index.php?page=torrents&category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      title: { remove: 'span', selector: 'td:nth-child(2)' },
      download: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
        filters: [
          {
            name: 'replace',
            args: ['index.php?page=torrent-details&id=', 'download.php?id='],
          },
        ],
      },
      details: {
        selector: 'a[href^="index.php?page=torrent-details&id="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-last-child(4)' },
      seeders: { selector: 'td:nth-last-child(3)' },
      date: {
        selector: 'td:nth-last-child(5)',
        filters: [{ name: 'dateparse', args: '02/01/2006' }],
      },
      downloadvolumefactor: {
        case: {
          'img[title^="You get 50% off download count on this torrent"]': '0.5',
          '*': '1',
        },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
};
