import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'theaudioscene',
  name: 'TheAudioScene',
  description: 'TheAudioScene is a Private Torrent Tracker for AUDIO SOFTWARE / SAMPLES / ETC',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://theaudioscene.net/'],
  caps: {
    categorymappings: [
      { id: '1', cat: 'PC', desc: 'Tutorial' },
      { id: '2', cat: 'PC', desc: 'Addon' },
      { id: '3', cat: 'PC', desc: 'Hybrid Update' },
      { id: '4', cat: 'PC', desc: 'Hybrid Win/Mac' },
      { id: '5', cat: 'PC/Mac', desc: 'Mac App' },
      { id: '6', cat: 'PC/Mac', desc: 'Mac Update' },
      { id: '7', cat: 'PC/Mac', desc: 'Mac VST' },
      { id: '8', cat: 'PC/Mac', desc: 'Mac VSTi' },
      { id: '9', cat: 'Other', desc: 'Unknown' },
      { id: '10', cat: 'Audio', desc: 'SampleCD' },
      { id: '11', cat: 'PC/0day', desc: 'Win App' },
      { id: '12', cat: 'PC/0day', desc: 'Win Update' },
      { id: '13', cat: 'PC/0day', desc: 'Win VST' },
      { id: '14', cat: 'PC/0day', desc: 'Win VSTi' },
      { id: '15', cat: 'PC/Phone-Other', desc: 'Handheld App' },
    ],
    modes: { search: ['q'] },
  },
  settings: [
    { name: 'cookie', type: 'text', label: 'Cookie' },
    {
      name: 'info',
      type: 'info',
      label: 'How to get the Cookie',
      default:
        "<ol><li>Login to this tracker with your browser<li>Open the <b>DevTools</b> panel by pressing <b>F12</b><li>Select the <b>Network</b> tab<li>Click on the <b>Doc</b> button<li>Refresh the page by pressing <b>F5</b><li>Select the <b>Headers</b> tab<li>Find 'cookie:' in the <b>Request Headers</b> section<li>Copy & paste the whole cookie string to here.</ol>",
    },
  ],
  login: {
    method: 'cookie',
    inputs: { cookie: '{{ .Config.cookie }}' },
    test: { path: 'usersettings/usermessages.php?mailbox=new' },
  },
  search: {
    paths: [{ path: 'torrentsettings/torrentbrowse.php' }],
    inputs: {
      SrcCat: 0,
      SrcDat: 0,
      SrcEnd: 0,
      search: '{{ .Keywords }}',
    },
    rows: {
      selector: 'table.tablewidthfixed tbody tr table:has(tr[onMouseOver])',
      dateheaders: {
        selector: 'td:contains("Added On ")',
        filters: [
          { name: 'replace', args: ['Added On ', ''] },
          { name: 're_replace', args: ['(th|st|nd|rd)', ''] },
          { name: 'dateparse', args: 'Jan 02 2006' },
        ],
      },
    },
    fields: {
      title: { selector: 'td[id$="_1"] a', attribute: 'title' },
      details: { selector: 'td[id$="_1"] a', attribute: 'href' },
      download: { selector: 'td[id$="_2"] a', attribute: 'href' },
      category: {
        selector: 'img[src^="/images/categories/"]',
        case: {
          'img[title="Tutorial"]': '1',
          'img[title="Addon"]': '2',
          'img[title="Hybrid Update"]': '3',
          'img[title="Hybrid Win/Mac"]': '4',
          'img[title="Mac App"]': '5',
          'img[title="Mac Update"]': '6',
          'img[title="Mac VST"]': '7',
          'img[title="Mac VSTi"]': '8',
          'img[title="Unknown"]': '9',
          'img[title="SampleCD"]': '10',
          'img[title="Win App"]': '11',
          'img[title="Win Update"]': '12',
          'img[title="Win VST"]': '13',
          'img[title="Win VSTi"]': '14',
          'img[title="Handheld App"]': '15',
        },
      },
      size: { selector: 'td[id$="_6"]' },
      seeders: { selector: 'td[id$="_10"]' },
      leechers: { selector: 'td[id$="_11"]' },
      grabs: { selector: 'td[id$="_12"]' },
      downloadvolumefactor: { text: '1' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
