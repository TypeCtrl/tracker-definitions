import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'torrentkitty',
  name: 'TorrentKitty',
  description: 'TorrentKitty is a CHINESE Public torrent search engine.',
  language: 'cn-CN',
  type: 'public',
  encoding: 'UTF-8',
  links: ['http://cntorrentkitty.com/', 'http://cntorrentkitty.xyz/'],
  settings: [
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      default: '0',
      options: {
        '0': 'All',
        '1': 'Other',
        '2': 'Video',
        '3': 'Music',
        '4': 'Documents',
        '5': 'Software',
        '6': 'Compress',
        '7': 'Images',
        '8': 'Image',
      },
    },
  ],
  caps: {
    modes: { search: ['q'] },
    categorymappings: [
      { id: '[其他]', cat: 'Other' },
      { id: '[视频]', cat: 'Movies' },
      { id: '[音乐]', cat: 'Audio' },
      { id: '[文档]', cat: 'Books' },
      { id: '[软件]', cat: 'PC/0day' },
      { id: '[压缩]', cat: 'PC' },
      { id: '[图片]', cat: 'Other/Misc' },
      { id: '[映像]', cat: 'Other/Misc' },
    ],
  },
  download: { selector: 'a[href^="magnet:?"]' },
  search: {
    paths: [
      {
        path:
          '{{if .Keywords}}tk/{{.Keywords}}/1-0-{{.Config.category}}.html{{else}}newest/{{end}}',
      },
      {
        path: '{{if .Keywords}}tk/{{.Keywords}}/2-0-{{.Config.category}}.html{{else}}{{end}}',
      },
      {
        path: '{{if .Keywords}}tk/{{.Keywords}}/3-0-{{.Config.category}}.html{{else}}{{end}}',
      },
      {
        path: '{{if .Keywords}}tk/{{.Keywords}}/4-0-{{.Config.category}}.html{{else}}{{end}}',
      },
      {
        path: '{{if .Keywords}}tk/{{.Keywords}}/5-0-{{.Config.category}}.html{{else}}{{end}}',
      },
    ],
    rows: {
      selector: 'p.p1:not(p.filelist), p.p0:not(p.filelist)',
      after: 1,
    },
    fields: {
      category: { selector: 'span:nth-child(1)' },
      title: { selector: 'a[target="_blank"]' },
      details: { selector: 'a[target="_blank"]', attribute: 'href' },
      download: { selector: 'a[target="_blank"]', attribute: 'href' },
      size: {
        selector: 'b:contains(" GB"), b:contains(" MB"), b:contains(" KB")',
      },
      date: {
        selector: 'b:contains(收录):not(:contains(":"))',
        optional: true,
        filters: [
          { name: 'replace', args: ['收录', ''] },
          { name: 'dateparse', args: '2006-01-02' },
        ],
      },
      files: {
        selector: 'b:contains("个文件")',
        filters: [{ name: 'replace', args: ['个文件', ''] }],
      },
      seeders: { text: '1' },
      leechers: { text: '1' },
      downloadvolumefactor: { text: '0' },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};