import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'hdforever',
  name: 'HD-Forever',
  description: 'HD-Forever (HD-F) is a FRENCH Private Torrent Tracker for HD MOVIES',
  language: 'fr-FR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://hdf.world/'],
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'usetoken',
      type: 'checkbox',
      label: 'Always try to use the FreeLeech Token',
      default: false,
    },
  ],
  caps: {
    modes: { search: ['q'] },
    categorymappings: [
      { id: '1', cat: 'Movies' },
      { id: '2', cat: 'Movies' },
      { id: '3', cat: 'Movies' },
      { id: '4', cat: 'Movies' },
      { id: '5', cat: 'TV' },
      { id: '6', cat: 'TV/Anime' },
      { id: '7', cat: 'Movies' },
    ],
  },
  login: {
    path: 'login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      keeplogged: 1,
      login: 'Log in',
    },
    error: [{ selector: 'form#loginform > span.warning' }],
    test: { path: 'torrents.php' },
  },
  ratio: { path: 'torrents.php', selector: 'li#stats_ratio > span' },
  search: {
    inputs: {
      $raw: '{{range .Categories}}filter_cat[{{.}}]=1&{{end}}',
      searchstr: '{{ .Query.Keywords }}',
      order_by: 'time',
      order_way: 'desc',
      action: 'basic',
      searchsubmit: 1,
    },
    rows: { selector: 'table#torrent_table > tbody > tr.torrent' },
    fields: {
      'download-regular': {
        selector: 'a[href^="torrents.php?action=download&"]',
        attribute: 'href',
      },
      'download-usetoken': {
        selector: 'a[href^="torrents.php?action=download&"]',
        attribute: 'href',
        filters: [{ name: 'append', args: '&usetoken=1' }],
      },
      download: {
        text:
          '{{if .Config.usetoken}}{{ .Result.download-usetoken }}{{else}}{{ .Result.download-regular }}{{end}}',
      },
      title: {
        selector: 'div.group_info',
        remove: 'span:nth-child(1), div.tags',
        filters: [
          { name: 'replace', args: ['\n', ''] },
          {
            name: 're_replace',
            args: [
              '^(.+)                                                                            (.+)',
              '$2-$1',
            ],
          },
          { name: 'replace', args: ['                         ', ' '] },
          {
            name: 'replace',
            args: ['Blu-Ray Original', 'Complete.BluRay'],
          },
          { name: 'replace', args: ['Blu-Ray Remux', 'Remux'] },
          { name: 'replace', args: ['Blu-Ray Rip', 'BluRay.Rip'] },
          { name: 'replace', args: ['mHD', 'mHD.BluRay.Rip'] },
          { name: 'replace', args: ['/ DC', '/ Directors.Cut'] },
          { name: 'replace', args: ['/ VL', '/ Extended'] },
          { name: 'replace', args: ['/ RM', '/ Remastered'] },
          { name: 'replace', args: ['/ UC', '/ Uncut'] },
          { name: 'replace', args: ['/ ES', '/ Special.Edition'] },
          { name: 'replace', args: [' / Cust_sub', ''] },
          { name: 'replace', args: [' / Cust', ''] },
          { name: 'replace', args: ['/ UN', '/ Unrated'] },
          { name: 'replace', args: [' / Crit', ''] },
          { name: 'replace', args: [' / WAC', ''] },
          { name: 'replace', args: [' / MoC', ''] },
          { name: 'replace', args: [' / BFI', ''] },
          { name: 'replace', args: [' / MUET', ''] },
          { name: 'replace', args: ['/ Exc NF', '/ NF'] },
          { name: 'replace', args: ['/ Exc AMZ', '/ AMZ'] },
          { name: 'replace', args: ['/ Exc YOU', '/ YT'] },
          { name: 'replace', args: [' / ↓25%', ''] },
          { name: 'replace', args: [' / ↓50%', ''] },
          { name: 'replace', args: [' / ↓75%', ''] },
          { name: 'replace', args: [' / Free', ''] },
          { name: 'replace', args: [' / Complété!', ''] },
          { name: 'replace', args: [' / ', '.'] },
          { name: 'trim' },
          {
            name: 'replace',
            args: ['.VFF.VFQ.StFr.MULTI', '.MULTI.VFF.VFQ'],
          },
          {
            name: 'replace',
            args: ['.VFF.VFQ.VO.StFr.MULTI', '.MULTI.VFF.VFQ'],
          },
          { name: 'replace', args: ['.VFF.VFQ.VO.StFr', '.MULTI.VFF.VFQ'] },
          { name: 'replace', args: ['.VFQ.VO.StFr', '.MULTI.VFQ'] },
          { name: 'replace', args: ['.VO.VFI.StFr', '.MULTI'] },
          { name: 'replace', args: ['.VO.VF?.StFr', '.MULTI'] },
          { name: 'replace', args: ['.VFF.VO.StFr', '.MULTI.VFF'] },
          { name: 'replace', args: ['.VOF.StFr', '.FRENCH'] },
          { name: 'replace', args: ['.VFQ.StFr', '.FRENCH'] },
          { name: 'replace', args: ['.VFF.StFr.MULTI', '.MULTI.VFF'] },
          { name: 'replace', args: ['.VFF.StFr', '.FRENCH'] },
          { name: 'replace', args: ['.VFI.MULTI', '.MULTI'] },
          { name: 'replace', args: ['.VO.StFr', '.VOSTFR'] },
          { name: 'replace', args: ['.VFQ.VO', '.MULTI.VFQ'] },
          { name: 'replace', args: ['.VFF.VO', '.MULTI.VFF'] },
          { name: 'replace', args: ['.VO.VF?.StFr', '.MULTI'] },
          { name: 'replace', args: ['.VFI.StFr', '.FRENCH'] },
          { name: 'replace', args: ['.VOF.MULTI', '.MULTI.FRENCH'] },
          { name: 'replace', args: ['.VOF', '.FRENCH'] },
          { name: 'replace', args: ['.VFQ.MULTI', '.MULTI.VFQ'] },
        ],
      },
      description: { selector: 'div.group_info' },
      details: {
        selector: 'a[href^="torrents.php?id="]',
        attribute: 'href',
      },
      comments: {
        selector: 'a[href^="torrents.php?id="]',
        attribute: 'href',
      },
      category: {
        selector: 'td.cats_col',
        case: {
          'div.cats_film': 1,
          'div.cats_dessinanimé': 2,
          'div.cats_bonusbd': 3,
          'div.cats_concert': 4,
          'div.cats_série': 5,
          'div.cats_sérieanim': 6,
          'div.cats_doc': 7,
        },
      },
      files: { selector: 'td:nth-child(3)' },
      date: {
        selector: 'td:nth-child(4)',
        filters: [
          { name: 'replace', args: ['Il y a ', ''] },
          { name: 'replace', args: ['heures', 'hours'] },
          { name: 'replace', args: ['heure', 'hour'] },
          { name: 'replace', args: ['jours', 'days'] },
          { name: 'replace', args: ['jour', 'day'] },
          { name: 'replace', args: ['semaines', 'weeks'] },
          { name: 'replace', args: ['semaine', 'week'] },
          { name: 'replace', args: ['mois', 'months'] },
          { name: 'replace', args: ['ans', 'years'] },
          { name: 'replace', args: ['an', 'year'] },
          { name: 'append', args: ' ago' },
        ],
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: {
        case: {
          'div.group_info:contains("/ Free")': '0',
          'div.group_info:contains("↓75%")': '0.75',
          'div.group_info:contains("↓50%")': '0.50',
          'div.group_info:contains("↓25%")': '0.25',
          '*': '1',
        },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
    paths: [{ path: 'torrents.php' }],
  },
  source: 'jackett',
};
