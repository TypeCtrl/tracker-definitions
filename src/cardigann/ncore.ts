import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'ncore',
  name: 'NCore',
  language: 'en-US',
  links: ['https://ncore.cc'],
  caps: {
    categorymappings: [
      { id: 'xvid_hun', cat: 'Movies/Foreign' },
      { id: 'xvid', cat: 'Movies/SD' },
      { id: 'dvd_hu', cat: 'Movies/Foreign' },
      { id: 'dvd', cat: 'Movies/SD' },
      { id: 'dvd9_hun', cat: 'Movies/Foreign' },
      { id: 'dvd9', cat: 'Movies/SD' },
      { id: 'hd_hun', cat: 'Movies/Foreign' },
      { id: 'hd', cat: 'Movies/HD' },
      { id: 'xvidser_hun', cat: 'TV/Foreign' },
      { id: 'xvidser', cat: 'TV/SD' },
      { id: 'dvdser_hun', cat: 'TV/Foreign' },
      { id: 'dvdser', cat: 'TV/SD' },
      { id: 'hdser_hun', cat: 'TV/Foreign' },
      { id: 'hdser', cat: 'TV/HD' },
      { id: 'mp3_hun', cat: 'Audio/Foreign' },
      { id: 'mp3', cat: 'Audio/MP3' },
      { id: 'lossless_hun', cat: 'Audio/Foreign' },
      { id: 'lossless', cat: 'Audio/Lossless' },
      { id: 'clip', cat: 'Audio/Lossless' },
    ],
  },
  login: {
    path: '/login.php',
    form: 'form',
    inputs: {
      nev: '{{ .Config.username }}',
      pass: '{{ .Config.password }}',
    },
    error: [
      {
        path: '/login.php',
        message: { selector: "#hibauzenet td[valign='middle']" },
      },
    ],
    test: { path: '/profile.php' },
  },
  search: {
    path: '/torrents.php',
    inputs: {
      $raw:
        '{{range .Categories}}kivalasztott_tipus[]={{.}}&{{end}}mire={{ .Query.Keywords }}&miben=name&tipus={{if .Categories}}kivalasztottak_kozott{{else}}all_own{{end}}&submit.x=44&submit.y=16&submit=Ok&tags="\n',
    },
    rows: { selector: '.box_torrent_all > .box_torrent' },
    fields: {
      category: {
        selector: '.box_alap_img > a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'tipus' }],
      },
      title: {
        selector: '.torrent_txt > a, .torrent_txt2 > a',
        attribute: 'title',
      },
      details: {
        selector: '.torrent_txt > a, .torrent_txt2 > a',
        attribute: 'href',
      },
      download: {
        selector: '.torrent_txt > a, .torrent_txt2 > a',
        attribute: 'href',
        filters: [{ name: 'replace', args: ['action=details', 'action=download'] }],
      },
      size: { selector: '.box_meret2' },
      date: { selector: '.box_feltoltve2', remove: 'i, br' },
      seeders: { selector: '.box_s2 a' },
      leechers: { selector: '.box_l2 a' },
    },
  },
  encoding: 'UTF-8',
};
