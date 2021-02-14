import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'montorrent',
  name: 'MonTorrent',
  description: 'MonTorrent is a FRENCH Public Indexer',
  language: 'fr-FR',
  type: 'public',
  encoding: 'UTF-8',
  followredirect: true,
  links: ['https://www.montorrent.com/'],
  caps: {
    categorymappings: [
      { id: 'vo', cat: 'Movies', desc: 'Films VO' },
      { id: 'vostfr', cat: 'Movies', desc: 'Films VOSTFR' },
      { id: 'dvdrip', cat: 'Movies', desc: 'Films DVDRIP' },
      { id: 'bdrip', cat: 'Movies', desc: 'Films BDRIP' },
      { id: 'webrip', cat: 'Movies', desc: 'Films WEBRIP' },
      { id: 'hdrip', cat: 'Movies', desc: 'Films HDRIP' },
      { id: 'dvdscreener', cat: 'Movies', desc: 'Films DVD Screener' },
      { id: 'screener', cat: 'Movies', desc: 'Films Screener' },
      { id: 'hd2160p', cat: 'Movies', desc: 'Films 2160p' },
      { id: 'hd1080p', cat: 'Movies', desc: 'Films 1080p' },
      { id: 'hd720p', cat: 'Movies', desc: 'Films 720p' },
      {
        id: 'hd2160p-hdlight',
        cat: 'Movies',
        desc: 'Films 2160p HD Light',
      },
      {
        id: 'hd1080p-hdlight',
        cat: 'Movies',
        desc: 'Films 1080p HD Light',
      },
      {
        id: 'hd720p-hdlight',
        cat: 'Movies',
        desc: 'Films 720p HD Light',
      },
      { id: 'hd3d', cat: 'Movies', desc: 'Films 3D' },
      { id: 'serie-vostfr', cat: 'TV', desc: 'Emission TV VOSTFR' },
      { id: 'serie-vf', cat: 'TV', desc: 'Emission TV VF' },
      { id: 'pack-vf', cat: 'TV', desc: 'Emission TV Pack VF' },
      { id: 'pack-vostfr', cat: 'TV', desc: 'Emission TV Pack VOSTFR' },
      { id: 'pack-vo', cat: 'TV', desc: 'Emission TV VO' },
      { id: 'albums', cat: 'Audio', desc: 'Audio' },
      { id: 'jeux', cat: 'PC/Games', desc: 'Jeu vidéo' },
      { id: 'jeux-pc', cat: 'PC/Games', desc: 'Jeu vidéo PC' },
      { id: 'jeux-console', cat: 'PC/Games', desc: 'Jeu vidéo Consoles' },
      { id: 'logiciels', cat: 'PC', desc: 'Application' },
      { id: 'ebooks', cat: 'Books', desc: 'eBook' },
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
    {
      name: 'filter_title',
      type: 'checkbox',
      label: 'Try to normalize releases names by moving year after the title',
      default: false,
    },
    {
      name: 'langfilter',
      type: 'select',
      label: 'Lang Filter / Filtre Langue',
      default: 'on',
      options: {
        on: 'Tous',
        french: 'French',
        truefrench: 'TrueFrench',
        vostfr: 'VOSTFR',
        vo: 'VO',
      },
    },
    {
      name: 'multilang',
      type: 'checkbox',
      label: 'Replace MULTI by another language in release name',
      default: false,
    },
    {
      name: 'multilanguage',
      type: 'select',
      label: 'Replace MULTI by this language',
      default: 'FRENCH',
      options: {
        FRENCH: 'FRENCH',
        'MULTI.FRENCH': 'MULTI.FRENCH',
        ENGLISH: 'ENGLISH',
        'MULTI.ENGLISH': 'MULTI.ENGLISH',
        VOSTFR: 'VOSTFR',
        'MULTI.VOSTFR': 'MULTI.VOSTFR',
      },
    },
    {
      name: 'vostfr',
      type: 'checkbox',
      label: 'Replace VOSTFR with ENGLISH',
      default: false,
    },
    {
      name: 'enhancedAnime',
      type: 'checkbox',
      label:
        'Enhance sonarr compatibility with anime by renaming episode (xxx to exxx). Works only if episode is at the end of the query. Can disturb movies search. (back to the future 3 -> back to the future e3)',
      default: false,
    },
    {
      name: 'order',
      type: 'select',
      label: 'Sort requested from site',
      default: 'id',
      options: {
        id: 'id',
        seeders: 'seeders',
        size: 'taille',
        rls: 'name',
      },
    },
    {
      name: 'orderby',
      type: 'select',
      label: 'Order requested from site',
      default: 'desc',
      options: { desc: 'desc', asc: 'asc' },
    },
  ],
  search: {
    paths: [
      {
        path:
          '{{ if .Keywords }}/recherche/?query={{ .Keywords }}&{{ else }}/torrents/?{{ end }}langue={{ .Config.langfilter }}&order={{ .Config.order }}&orderby={{ .Config.orderby }}',
      },
      {
        path:
          '{{ if .Keywords }}/recherche/?query={{ .Keywords }}&{{ else }}/torrents/?{{ end }}langue={{ .Config.langfilter }}&order={{ .Config.order }}&orderby={{ .Config.orderby }}&page=2',
      },
    ],
    rows: {
      selector: 'div.t-details',
      filters: [{ name: 'andmatch' }],
    },
    fields: {
      category: {
        optional: true,
        selector: 'a[href*="id_cat"]',
        attribute: 'class',
        filters: [{ name: 'replace', args: ['liste-categorie-couleur ', ''] }],
      },
      title_normal: { selector: 'a[href^="/torrent/"]' },
      title_filtered: {
        text: '{{ .Result.title_normal }}',
        filters: [
          {
            name: 're_replace',
            args: [
              '(?i)^(?:(.+?)((?:[\\.\\-\\s_\\[]+(?:imax|(?:dvd|bd|tv)(?:rip|scr)|bluray(?:\\-?rip)?|720\\s*p?|1080\\s*p?|vof?|vost(?:fr)?|multi|vf(?:f|q)?[1-3]?|(?:true)?french|eng?)[\\.\\-\\s_\\]]*)*)([\\(\\[]?(?:20|1[7-9])\\d{2}[\\)\\]]?)(.*)$|(.*))$',
              '$1 $3 $2 $4 $5',
            ],
          },
          { name: 'replace', args: ['.', ' '] },
          { name: 'trim' },
          {
            name: 're_replace',
            args: ['(?i)\\s(mkv|avi|divx|xvid|mp4)$', ''],
          },
          { name: 're_replace', args: ['(\\s{2,5})', ' '] },
          { name: 'trim' },
        ],
      },
      title_phase1: {
        text: '{{ if .Config.filter_title }}{{ .Result.title_filtered }}{{ else }}{{ .Result.title_normal }}{{ end }}',
      },
      title_multilang: {
        text: '{{ .Result.title_phase1 }}',
        filters: [
          {
            name: 're_replace',
            args: ['(?i)[\\.\\s\\[\\-]multi[\\.\\s\\]\\-]', '.{{ .Config.multilanguage }}.'],
          },
        ],
      },
      title_phase2: {
        text: '{{ if .Config.multilang }}{{ .Result.title_multilang }}{{ else }}{{ .Result.title_phase1 }}{{ end }}',
      },
      title_vostfr: {
        text: '{{ .Result.title_phase2 }}',
        filters: [
          {
            name: 're_replace',
            args: ['(?i)[\\.\\s\\[\\-]vostfr[\\.\\s\\]\\-]', '.ENGLISH.'],
          },
          {
            name: 're_replace',
            args: ['(?i)[\\.\\s\\[\\-]subfrench[\\.\\s\\]\\-]', '.ENGLISH.'],
          },
        ],
      },
      title_phase3: {
        text: '{{ if .Config.vostfr }}{{ .Result.title_vostfr }}{{ else }}{{ .Result.title_phase2 }}{{ end }}',
      },
      title_anime: {
        text: '{{ .Result.title_phase3 }}',
        filters: [
          {
            name: 're_replace',
            args: ['(.*)(\\.| |\\-)(\\d{2,3})(\\.| |\\-)(.*)', '$1 E$3 $5'],
          },
        ],
      },
      title: {
        text: '{{ if .Config.enhancedAnime }}{{ .Result.title_anime }}{{ else }}{{ .Result.title_phase3 }}{{ end }}',
      },
      details: { selector: 'a[href^="/torrent/"]', attribute: 'href' },
      download: {
        selector: 'a[href^="/telechargement/"]',
        attribute: 'href',
      },
      size: { selector: 'div.t-taille' },
      seeders: { selector: 'div.t-sources', optional: true },
      leechers: { selector: 'div.t-clients', optional: true },
      downloadvolumefactor: { text: 0 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
