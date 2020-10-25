import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'unlimitz',
  name: 'Unlimitz',
  description: 'Unlimitz is a THAI Private Torrent Tracker for GENERAL',
  language: 'th-TH',
  type: 'private',
  encoding: 'WINDOWS-874',
  links: ['https://www.unlimitz.biz/'],
  caps: {
    categorymappings: [
      { id: '84', cat: 'Audio', desc: 'ธรรมะ [Dharma]' },
      { id: '93', cat: 'TV/Anime', desc: 'การ์ตูน [Cartoon]' },
      { id: '112', cat: 'TV/Sport', desc: 'กีฬา [Sport]' },
      {
        id: '101',
        cat: 'Other',
        desc: 'ฟอนต์/ไอคอน/คลิปอาร์ท/เทมเพลท [Fonts, icons, clip art]',
      },
      {
        id: '90',
        cat: 'Movies',
        desc: 'ซีรีย์ (หนังชุด) [movie series]',
      },
      { id: '92', cat: 'Console', desc: 'เกมส์ (non PC) [games]' },
      { id: '91', cat: 'PC/Games', desc: 'เกมส์ (PC) [games]' },
      {
        id: '100',
        cat: 'PC/Phone-Other',
        desc: 'โปรแกรมที่ใช้บน (มือถือ) [mobiles]',
      },
      { id: '82', cat: 'PC', desc: 'โปรแกรมที่ใช้บน (Linux)' },
      { id: '83', cat: 'PC/0day', desc: 'โปรแกรมที่ใช้บน (Windows)' },
      { id: '110', cat: 'Audio', desc: 'เพลงไทย [Thai music]' },
      { id: '119', cat: 'Other', desc: 'เลขเด็ด เลขดัง [lucky number]' },
      { id: '81', cat: 'PC', desc: 'ระบบปฏิบัติการ [PC]' },
      {
        id: '89',
        cat: 'Movies/DVD',
        desc: 'ภาพยนตร์  DVD Master [movies]',
      },
      { id: '120', cat: 'Movies/3D', desc: 'ภาพยนตร์ 3D [ movies]' },
      {
        id: '114',
        cat: 'Movies/DVD',
        desc: 'ภาพยนตร์ DVD Modified [movies]',
      },
      { id: '98', cat: 'Movies/DVD', desc: 'ภาพยนตร์ DVD Zoom [movies]' },
      {
        id: '107',
        cat: 'Movies/DVD',
        desc: 'ภาพยนตร์ DVD/VCD Rip [movies]',
      },
      { id: '103', cat: 'Movies/HD', desc: 'ภาพยนตร์ Hi-DeF [movies]' },
      {
        id: '113',
        cat: 'Movies/HD',
        desc: 'ภาพยนตร์ mini Hi-Def [movies]',
      },
      { id: '88', cat: 'Movies', desc: 'ภาพยนตร์ VCD Master [movies]' },
      {
        id: '115',
        cat: 'Movies',
        desc: 'ภาพยนตร์ VCD Modified [movies]',
      },
      { id: '99', cat: 'Movies', desc: 'ภาพยนตร์ VCD Zoom [movies]' },
      { id: '97', cat: 'TV', desc: 'รายการทีวี [TV]' },
      { id: '118', cat: 'Audio', desc: 'รายการวิทยุ [radio]' },
      {
        id: '111',
        cat: 'Audio/Video',
        desc: 'มิวสิค วีดีโอ/การแสดงสด/คาราโอเกะ/ทอล์คโชว์ [music video]',
      },
      {
        id: '94',
        cat: 'Other',
        desc: 'รูปภาพ (ไม่โป๊,ไม่วาบหวิว) [pictures]',
      },
      {
        id: '87',
        cat: 'Books',
        desc: 'หนังสือ/สื่อการเรียนรู้/นวนิยาย [books]',
      },
      { id: '96', cat: 'TV/Documentary', desc: 'สารคดี [documentary]' },
      { id: '108', cat: 'Other/Misc', desc: 'อื่นๆ [other]' },
      { id: '106', cat: 'XXX', desc: 'UnlimitZ Pink (Cartoon)' },
      { id: '104', cat: 'XXX', desc: 'UnlimitZ Pink (Censored)' },
      { id: '116', cat: 'XXX', desc: 'UnlimitZ Pink (Game)' },
      { id: '117', cat: 'XXX', desc: 'UnlimitZ Pink (Rated R)' },
      { id: '105', cat: 'XXX', desc: 'UnlimitZ Pink (Uncensored)' },
    ],
    modes: {
      search: ['q'],
      'tv-search': ['q', 'season', 'ep'],
      'movie-search': ['q'],
      'music-search': ['q'],
      'book-search': ['q'],
    },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    { name: 'staffpass', type: 'text', label: 'Staff Pass' },
    {
      name: 'freeleech',
      type: 'checkbox',
      label: 'Filter freeleech only',
      default: false,
    },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: 4,
      options: { '1': 'title', '4': 'created', '5': 'size', '7': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action="takelogin.php"]',
    captcha: {
      type: 'image',
      selector: 'img.cimage',
      input: 'captcha',
    },
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
      staffpass: '{{ .Config.staffpass }}',
    },
    error: [
      { selector: 'td.embedded:has(h2:contains("failed"))' },
      { selector: 'td.embedded:has(h2:contains("Error"))' },
    ],
    test: { path: 'index.php', selector: 'a[href="logout.php"]' },
  },
  download: {
    selector: 'a[href^="d.php?keyalert1="]',
    attribute: 'href',
    filters: [
      { name: 'replace', args: ['d.php?keyalert1=', '/dI.php/'] },
      { name: 'replace', args: ['&keyalert2=', '/'] },
    ],
  },
  search: {
    paths: [{ path: 'browse.php' }],
    inputs: {
      $raw: '{{ range .Categories }}c{{.}}=1&{{end}}',
      search: '{{ .Keywords }}',
      blah: 0,
      incldead: 1,
      sort: '{{ .Config.sort }}',
      type: '{{ .Config.type }}',
    },
    rows: {
      selector:
        'table[border=1][cellspacing=0][cellpadding=5] > tbody > tr:has(a[href^="details.php?id="]){{ if .Config.freeleech }}:has(img[src="pic/freedownload.gif"]){{ else }}{{ end }}',
    },
    fields: {
      category: {
        selector: 'a[href^="browse.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: { selector: 'a[href^="details.php?id="]' },
      details: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="details.php?id="]',
        attribute: 'href',
      },
      files: { selector: 'td:nth-child(4)' },
      date: {
        selector: 'td:nth-child(7)',
        filters: [
          { name: 'append', args: ' +07:00' },
          { name: 'dateparse', args: '2006-01-0215:04:05 -07:00' },
        ],
      },
      size: { selector: 'td:nth-child(8)' },
      grabs: {
        selector: 'td:nth-child(9)',
        filters: [{ name: 'regexp', args: '(\\d+)' }],
      },
      seeders: { selector: 'td:nth-child(10)' },
      leechers: { selector: 'td:nth-child(11)' },
      downloadvolumefactor: {
        case: { 'img[src="pic/freedownload.gif"]': 0, '*': 1 },
      },
      uploadvolumefactor: {
        case: {
          'img[src="icon/upl2.png"]': 2,
          'img[src="icon/upl3.png"]': 3,
          '*': 1,
        },
      },
      minimumratio: { text: 1 },
    },
  },
  source: 'jackett',
};
