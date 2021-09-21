import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'audiobookbay',
  name: 'AudioBookBay',
  description: 'AudioBook Bay (ABB) is a public Torrent Tracker for AUDIOBOOKS',
  language: 'en-US',
  type: 'public',
  encoding: 'UTF-8',
  links: [
    'http://audiobookbay.nl/',
    'http://audiobookbay.net/',
    'http://audiobookbayabb.com/',
    'https://audiobookbay.unblockit.ws/',
  ],
  legacylinks: [
    'https://audiobookbay.la/',
    'https://audiobookbay.unblockit.lat/',
    'https://audiobookbay.unblockit.app/',
    'https://audiobookbay.unblockit.dev/',
    'https://audiobookbay.unblockit.ltd/',
    'https://audiobookbay.unblockit.link/',
    'https://audiobookbay.unblockit.buzz/',
    'https://audiobookbay.unblockit.club/',
    'https://audiobookbay.unblockit.onl/',
    'https://audiobookbay.unblockit.li/',
    'https://audiobookbay.unblockit.uno/',
    'https://audiobookbay.unblockit.ch/',
  ],
  caps: {
    categorymappings: [
      {
        id: '(Post)apocalyptic',
        cat: 'Audio/Audiobook',
        desc: '(Post)apocalyptic',
      },
      { id: 'Action', cat: 'Audio/Audiobook', desc: 'Action' },
      { id: 'Adults', cat: 'Audio/Audiobook', desc: 'Adults' },
      { id: 'Adventure', cat: 'Audio/Audiobook', desc: 'Adventure' },
      { id: 'Anthology', cat: 'Audio/Audiobook', desc: 'Anthology' },
      { id: 'Art', cat: 'Audio/Audiobook', desc: 'Art' },
      {
        id: 'Autobiography',
        cat: 'Audio/Audiobook',
        desc: 'Autobiography & Biographies',
      },
      { id: 'Bestsellers', cat: 'Audio/Audiobook', desc: 'Bestsellers' },
      { id: 'Business', cat: 'Audio/Audiobook', desc: 'Business' },
      { id: 'Children', cat: 'Audio/Audiobook', desc: 'Children' },
      { id: 'Classic', cat: 'Audio/Audiobook', desc: 'Classic' },
      { id: 'Computer', cat: 'Audio/Audiobook', desc: 'Computer' },
      {
        id: 'Contemporary',
        cat: 'Audio/Audiobook',
        desc: 'Contemporary',
      },
      { id: 'Crime', cat: 'Audio/Audiobook', desc: 'Crime' },
      { id: 'Detective', cat: 'Audio/Audiobook', desc: 'Detective' },
      { id: 'Doctor', cat: 'Audio/Audiobook', desc: 'Doctor Who' },
      { id: 'Documentary', cat: 'Audio/Audiobook', desc: 'Documentary' },
      { id: 'Education', cat: 'Audio/Audiobook', desc: 'Education' },
      { id: 'Fantasy', cat: 'Audio/Audiobook', desc: 'Fantasy' },
      { id: 'Full', cat: 'Audio/Audiobook', desc: 'Full Cast' },
      { id: 'Gay', cat: 'Audio/Audiobook', desc: 'Gay' },
      { id: 'General', cat: 'Audio/Audiobook', desc: 'General Fiction' },
      {
        id: 'Historical',
        cat: 'Audio/Audiobook',
        desc: 'Historical Fiction',
      },
      { id: 'History', cat: 'Audio/Audiobook', desc: 'History' },
      { id: 'Horror', cat: 'Audio/Audiobook', desc: 'Horror' },
      { id: 'Humor', cat: 'Audio/Audiobook', desc: 'Humor' },
      { id: 'Lecture', cat: 'Audio/Audiobook', desc: 'Lecture' },
      { id: 'Lesbian', cat: 'Audio/Audiobook', desc: 'Lesbian' },
      { id: 'LGBT', cat: 'Audio/Audiobook', desc: 'LGBT' },
      { id: 'Libertarian', cat: 'Audio/Audiobook', desc: 'Libertarian' },
      { id: 'Literature', cat: 'Audio/Audiobook', desc: 'Literature' },
      { id: 'LitRPG', cat: 'Audio/Audiobook', desc: 'LitRPG' },
      { id: 'Military', cat: 'Audio/Audiobook', desc: 'Military' },
      { id: 'Misc.', cat: 'Audio/Audiobook', desc: 'Misc. Non-fiction' },
      { id: 'Mystery', cat: 'Audio/Audiobook', desc: 'Mystery' },
      { id: 'Novel', cat: 'Audio/Audiobook', desc: 'Novel' },
      { id: 'Other', cat: 'Audio/Audiobook', desc: 'Other' },
      { id: 'Paranormal', cat: 'Audio/Audiobook', desc: 'Paranormal' },
      { id: 'Plays', cat: 'Audio/Audiobook', desc: 'Plays & Theater' },
      { id: 'Poetry', cat: 'Audio/Audiobook', desc: 'Poetry' },
      { id: 'Political', cat: 'Audio/Audiobook', desc: 'Political' },
      { id: 'Radio', cat: 'Audio/Audiobook', desc: 'Radio Productions' },
      { id: 'Romance', cat: 'Audio/Audiobook', desc: 'Romance' },
      { id: 'Sci-Fi', cat: 'Audio/Audiobook', desc: 'Sci-Fi' },
      { id: 'Science', cat: 'Audio/Audiobook', desc: 'Science' },
      { id: 'Self-help', cat: 'Audio/Audiobook', desc: 'Self-help' },
      { id: 'Sex', cat: 'Audio/Audiobook', desc: 'Sex Scenes' },
      { id: 'Short', cat: 'Audio/Audiobook', desc: 'Short Story' },
      {
        id: 'Spiritual',
        cat: 'Audio/Audiobook',
        desc: 'Spiritual & Religious',
      },
      { id: 'Sports', cat: 'Audio/Audiobook', desc: 'Sports' },
      { id: 'Suspense', cat: 'Audio/Audiobook', desc: 'Suspense' },
      { id: 'Teen', cat: 'Audio/Audiobook', desc: 'Teen & Young Adult' },
      { id: 'The', cat: 'Audio/Audiobook', desc: 'The Undead' },
      { id: 'Thriller', cat: 'Audio/Audiobook', desc: 'Thriller' },
      { id: 'True', cat: 'Audio/Audiobook', desc: 'True Crime' },
      { id: 'Tutorial', cat: 'Audio/Audiobook', desc: 'Tutorial' },
      { id: 'Violence', cat: 'Audio/Audiobook', desc: 'Violence' },
      { id: 'Westerns', cat: 'Audio/Audiobook', desc: 'Westerns' },
    ],
    modes: { search: ['q'], 'book-search': ['q'] },
  },
  settings: [],
  download: {
    infohash: {
      hash: {
        selector: 'td:contains("Info Hash:") ~ td',
        filters: [{ name: 'regexp', args: '([A-F|a-f|0-9]{40})' }],
      },
      title: {
        selector: 'h1',
        filters: [{ name: 'trim' }, { name: 'validfilename' }],
      },
    },
  },
  search: {
    paths: [
      { path: '{{ if .Keywords }}?s={{ .Keywords }}{{ else }}{{ end }}' },
      {
        path: 'page/2/{{ if .Keywords }}?s={{ .Keywords }}{{ else }}{{ end }}',
      },
      {
        path: 'page/3/{{ if .Keywords }}?s={{ .Keywords }}{{ else }}{{ end }}',
      },
      {
        path: 'page/4/{{ if .Keywords }}?s={{ .Keywords }}{{ else }}{{ end }}',
      },
      {
        path: 'page/5/{{ if .Keywords }}?s={{ .Keywords }}{{ else }}{{ end }}',
      },
    ],
    rows: { selector: 'div.post:has(div[class="postTitle"])' },
    fields: {
      category: {
        selector: 'div.postInfo',
        filters: [{ name: 'regexp', args: 'Category: (.+?)\\s' }],
      },
      title: { selector: 'div.postTitle' },
      details: { selector: 'div.postTitle h2 a', attribute: 'href' },
      download: { selector: 'div.postTitle h2 a', attribute: 'href' },
      poster: { selector: 'img', attribute: 'src' },
      _date: {
        selector: 'div.postContent',
        filters: [
          { name: 'regexp', args: '(\\d{1,2} \\D{3} \\d{4})' },
          { name: 'dateparse', args: '2 Jan 2006' },
        ],
      },
      date: {
        text: '{{ if .Result._date }}{{ .Result._date }}{{ else }}now{{ end }}',
      },
      _size: {
        selector: 'div.postContent',
        filters: [
          { name: 'regexp', args: 'File Size: (.+?)$' },
          { name: 'replace', args: ['MBs', 'MB'] },
          { name: 'replace', args: ['GBs', 'GB'] },
          { name: 'replace', args: ['KBs', 'KB'] },
        ],
      },
      size: {
        text: '{{ if .Result._size }}{{ .Result._size }}{{ else }}0 B{{ end }}',
      },
      seeders: { text: 1 },
      leechers: { text: 1 },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
