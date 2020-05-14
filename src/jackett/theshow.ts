import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'theshow',
  name: 'The Show',
  description: 'Entertainment E-Learning',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://theshow.click/'],
  legacylinks: ['http://theshow.click/'],
  caps: {
    categorymappings: [
      { id: '72', cat: 'Other', desc: '-empty-' },
      { id: '64', cat: 'Other', desc: 'Graphics / Photo Editing' },
      { id: '51', cat: 'Other', desc: 'Performing Craft: Acting' },
      { id: '85', cat: 'Other', desc: 'Scripts: Theatre' },
      { id: '90', cat: 'Other', desc: 'Visual Craft: Handcraft/Sculpt' },
      { id: '81', cat: 'Other', desc: '-empty-' },
      { id: '32', cat: 'Other', desc: 'Magazines / Trade Journals' },
      { id: '4', cat: 'Other', desc: 'Performing Craft: Dance' },
      { id: '49', cat: 'Other', desc: 'Software / Tutorials' },
      { id: '93', cat: 'Other', desc: 'Visual Craft: Jewelry Making' },
      { id: '17', cat: 'Other', desc: 'A-V: Film/Video Editing' },
      { id: '66', cat: 'Other', desc: 'Mindset / Creativity' },
      { id: '10', cat: 'Other', desc: 'Production: Cinematography' },
      { id: '26', cat: 'Other', desc: 'Stock: Film / Video' },
      { id: '11', cat: 'Other', desc: 'Visual Craft: Needlework' },
      { id: '30', cat: 'Other', desc: 'A-V: Sound Recording/Design' },
      { id: '67', cat: 'Other', desc: 'Music Business / Promotion' },
      { id: '1', cat: 'Other', desc: 'Production: Directing (Film)' },
      { id: '54', cat: 'Other', desc: 'Stock: Music / Sound FX' },
      { id: '52', cat: 'Other', desc: 'Visual Craft: Photography' },
      { id: '6', cat: 'Other', desc: 'A-V: Videography' },
      { id: '73', cat: 'Other', desc: 'Music: Shows/Special Events' },
      { id: '7', cat: 'Other', desc: 'Production: Directing(Theatre)' },
      { id: '13', cat: 'Other', desc: 'Stock: Photos / Illustrations' },
      { id: '89', cat: 'Other', desc: 'Visual Craft: Scrapbooking' },
      { id: '9', cat: 'Other', desc: 'A-V: Visual FX' },
      { id: '70', cat: 'Other', desc: 'Performances: Competitions' },
      { id: '53', cat: 'Other', desc: 'Production: Visuals' },
      { id: '69', cat: 'Other', desc: 'TV Shows: Action/Drama/Mystery' },
      { id: '88', cat: 'Other', desc: 'Visual Craft: Tattoos/Body Art' },
      { id: '29', cat: 'Other', desc: 'Business / Distribution' },
      { id: '94', cat: 'Other', desc: 'Performances: Dance/Ballet' },
      { id: '77', cat: 'Other', desc: 'Radio: Comedy/Drama/Mystery' },
      { id: '68', cat: 'Other', desc: 'TV Shows: Comedy' },
      { id: '21', cat: 'Other', desc: 'Writing Craft: Screenwriting' },
      { id: '56', cat: 'Other', desc: 'Creative Writing' },
      { id: '82', cat: 'Other', desc: 'Performances: Drama/Art' },
      { id: '79', cat: 'Other', desc: 'Radio: Entertain/Arts/Narrativ' },
      { id: '71', cat: 'Other', desc: 'TV Shows: Entertain/Chat/Goss' },
      { id: '25', cat: 'Other', desc: 'Digital Craft: 3D Modeling' },
      { id: '76', cat: 'Other', desc: 'Performances: Sketch/Improv' },
      { id: '80', cat: 'Other', desc: 'Radio: Music Performances' },
      { id: '92', cat: 'Other', desc: 'Visual Craft: Design Theory' },
      { id: '63', cat: 'Other', desc: 'Everything Else' },
      { id: '75', cat: 'Other', desc: 'Performances: Spoken Word' },
      { id: '83', cat: 'Other', desc: 'Scripts: Radio' },
      { id: '91', cat: 'Other', desc: 'Visual Craft: Drawing/Drafting' },
      { id: '65', cat: 'Other', desc: 'Film History / Theory ' },
      { id: '78', cat: 'Other', desc: 'Performances: Standup Comedy' },
      { id: '84', cat: 'Other', desc: 'Scripts: Television' },
      { id: '87', cat: 'Other', desc: 'Visual Craft: Fashion/Makeup' },
    ],
    modes: { search: ['q'] },
  },
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    captcha: { type: 'image', selector: 'img#freecap', input: 'word' },
    error: [{ selector: 'table:contains("Login failed!")' }],
    test: { path: 'main.php' },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{range .Categories}}filter_cat[{{.}}]=1&{{end}}',
      search: '{{ .Keywords }}',
    },
    rows: {
      selector: 'table[border="0"] > tbody > tr.ttable:has(a[href^="browse.php?cat="])',
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { filters: null, selector: 'td:nth-child(2) b' },
      download: {
        selector: 'a[href^="download.php/"]',
        attribute: 'href',
      },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      grabs: {
        selector: 'td:nth-child(8)',
        filters: [
          { name: 'replace', args: ['Never', '0'] },
          { name: 'regexp', args: '(\\d+)' },
        ],
      },
      files: { selector: 'td:nth-child(4)' },
      size: { selector: 'td:nth-child(7)' },
      seeders: { selector: 'td:nth-child(9)' },
      leechers: { selector: 'td:nth-child(10)' },
      date: {
        selector: 'td:nth-child(6)',
        filters: [{ name: 'regexp', args: '(\\d{4}-\\d{2}-\\d{2})' }],
      },
      downloadvolumefactor: {
        case: {
          'font[color="green"]': '0',
          'font[color="blue"]': '0',
          '*': '1',
        },
      },
      uploadvolumefactor: {
        case: { 'font[color="green"]': '0', '*': '1' },
      },
    },
  },
  source: 'jackett',
};
