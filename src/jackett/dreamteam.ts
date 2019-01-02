import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'dreamteam',
  name: 'Dream Team',
  description: 'Dream Team is a GREEK Private Torrent Tracker for MOVIES / TV / GENERAL',
  language: 'el-GR',
  type: 'private',
  encoding: 'UTF-8',
  links: ['http://dream-team.ga/'],
  legacylinks: ['http://dream-team.ml/'],
  caps: {
    categorymappings: [
      {
        id: '115',
        cat: 'Movies',
        desc: 'One foreign films external subtitles',
      },
      { id: '130', cat: 'Movies', desc: 'CAM / TS / TC' },
      { id: '131', cat: 'Movies', desc: 'DVDSCR / PPVRiP / WebRip / R5' },
      { id: '132', cat: 'Movies', desc: 'DVDRrip' },
      { id: '133', cat: 'Movies', desc: 'BDRip / BRRip / HDRip' },
      { id: '134', cat: 'Movies', desc: 'MicroHD' },
      { id: '135', cat: 'Movies', desc: 'HD - WEB-DL' },
      { id: '136', cat: 'Movies', desc: 'HD - 480p' },
      { id: '137', cat: 'Movies', desc: 'HD - 720p' },
      { id: '138', cat: 'Movies', desc: 'HD - 1080p' },
      { id: '139', cat: 'Movies', desc: '9.01 3D HD 720p Half SBS & OU' },
      { id: '140', cat: 'Movies', desc: '9.2 3D HD 1080p Half SBS & OU' },
      {
        id: '141',
        cat: 'Movies',
        desc: '9.3 3D Bluray Disc HD 720p / 1080p',
      },
      { id: '142', cat: 'Movies', desc: '9.4 3D MicroHD 720p / 1080p' },
      { id: '144', cat: 'Movies', desc: '9.5 packages' },
      { id: '145', cat: 'Movies', desc: '9.6 filmography' },
      { id: '143', cat: 'Movies', desc: '9.7 Tv Movies' },
      {
        id: '116',
        cat: 'Movies',
        desc: 'Two foreign films integrated subtitles',
      },
      { id: '146', cat: 'Movies', desc: 'CAM / TS / TC' },
      { id: '147', cat: 'Movies', desc: 'DVDSCR / PPVRiP / WebRip / R5' },
      { id: '148', cat: 'Movies', desc: 'DVDRrip' },
      { id: '149', cat: 'Movies', desc: 'BDRip / BRRip / HDRip' },
      { id: '150', cat: 'Movies', desc: 'MicroHD' },
      { id: '151', cat: 'Movies', desc: 'HD - WEB-DL' },
      { id: '152', cat: 'Movies', desc: 'Tv Movies' },
      { id: '153', cat: 'Movies', desc: 'Packages' },
      { id: '154', cat: 'Movies', desc: 'filmography' },
      { id: '243', cat: 'Movies', desc: 'HD 1080p' },
      { id: '244', cat: 'Movies', desc: 'HD 480p' },
      { id: '117', cat: 'Movies', desc: '???????e? ?a???e?' },
      { id: '155', cat: 'Movies', desc: 'CAM / TS / TC' },
      { id: '156', cat: 'Movies', desc: 'SCR / PPVRiP / Webrip / R5' },
      { id: '157', cat: 'Movies', desc: 'DVDRrip 3' },
      { id: '158', cat: 'Movies', desc: 'BDRip / BRRip / HDRip' },
      { id: '159', cat: 'Movies', desc: 'MicroHD 5' },
      { id: '160', cat: 'Movies', desc: 'HD - 480p' },
      { id: '161', cat: 'Movies', desc: '6.1 HD - 720p' },
      { id: '162', cat: 'Movies', desc: 'HD 6.2 - 1080' },
      { id: '163', cat: 'Movies', desc: 'TV Movies' },
      { id: '164', cat: 'Movies', desc: '?a?eta 8' },
      { id: '165', cat: 'Movies', desc: 'F??µ???af?e?' },
      {
        id: '118',
        cat: 'TV',
        desc: 'Foreign Television external subtitles',
      },
      { id: '166', cat: 'TV', desc: 'SD' },
      { id: '167', cat: 'TV', desc: '720p' },
      { id: '168', cat: 'TV', desc: '1080p' },
      { id: '169', cat: 'TV', desc: 'Sport' },
      { id: '170', cat: 'TV', desc: 'documentaries' },
      { id: '171', cat: 'TV', desc: 'Packages' },
      {
        id: '119',
        cat: 'TV',
        desc: 'foreign Television integrated subtitles',
      },
      { id: '172', cat: 'TV', desc: 'SD' },
      { id: '173', cat: 'TV', desc: '720p' },
      { id: '174', cat: 'TV', desc: '1080p' },
      { id: '175', cat: 'TV', desc: 'Sport' },
      { id: '176', cat: 'TV', desc: 'documentaries' },
      { id: '177', cat: 'TV', desc: 'Tv Rips' },
      { id: '178', cat: 'TV', desc: 'Packages' },
      { id: '120', cat: 'TV', desc: 'Greek Television' },
      { id: '179', cat: 'TV', desc: 'SD' },
      { id: '180', cat: 'TV', desc: '720p' },
      { id: '181', cat: 'TV', desc: '1080p' },
      { id: '182', cat: 'TV', desc: 'Sport' },
      { id: '183', cat: 'TV', desc: 'five documentaries' },
      { id: '184', cat: 'TV', desc: 'six Tv Rips' },
      { id: '185', cat: 'TV', desc: 'Packages' },
      { id: '122', cat: 'Audio', desc: '?e?? ???s???' },
      { id: '216', cat: 'Audio', desc: '1. DJs Stuff & Promos' },
      { id: '217', cat: 'Audio', desc: '2. DJs Stuff & Promos (Flac)' },
      { id: '218', cat: 'Audio', desc: '3. Singles' },
      { id: '219', cat: 'Audio', desc: '4. Singles (Flac)' },
      { id: '220', cat: 'Audio', desc: '5. ??s????af?e?' },
      { id: '221', cat: 'Audio', desc: '6. ??s????af?e? (Flac)' },
      { id: '222', cat: 'Audio', desc: '7. ??af??e? S?????e?' },
      { id: '223', cat: 'Audio', desc: '8. ??af??e? S?????e? (Flac)' },
      { id: '224', cat: 'Audio', desc: '9. SoundTracks' },
      { id: '225', cat: 'Audio', desc: '9.1 Varius Artist' },
      { id: '226', cat: 'Audio', desc: '9.2 Compact Disc Club' },
      { id: '227', cat: 'Audio', desc: '9.3 ???s??a Video Clips' },
      { id: '123', cat: 'Audio', desc: '???????? ???s???' },
      { id: '228', cat: 'Audio', desc: '1. DJs Stuff & Promos' },
      { id: '229', cat: 'Audio', desc: '2. DJs Stuff & Promos (Flac)' },
      { id: '230', cat: 'Audio', desc: '3. Singles' },
      { id: '231', cat: 'Audio', desc: '4. Singles (Flac)' },
      { id: '232', cat: 'Audio', desc: '5. ??s????af?e?' },
      { id: '233', cat: 'Audio', desc: '6. ??s????af?e? (Flac)' },
      { id: '234', cat: 'Audio', desc: '7. ??af??e? S?????e?' },
      { id: '235', cat: 'Audio', desc: '8. ??af??e? S?????e? (Flac)' },
      { id: '236', cat: 'Audio', desc: '9. ?a?d??a' },
      { id: '237', cat: 'Audio', desc: '9.1 SoundTracks' },
      { id: '238', cat: 'Audio', desc: '9.2 Varius Artist' },
      { id: '239', cat: 'Audio', desc: '9.3 Compact Disc Club' },
      { id: '240', cat: 'Audio', desc: '9.4 ???s??a Video Clips' },
      { id: '121', cat: 'Movies', desc: 'children' },
      {
        id: '186',
        cat: 'Movies',
        desc: "children's films external subtitles",
      },
      {
        id: '187',
        cat: 'Movies',
        desc: "two children's films integrated subtitles",
      },
      {
        id: '188',
        cat: 'Movies',
        desc: "three children's films Metaglotismenes",
      },
      {
        id: '189',
        cat: 'Movies',
        desc: 'four cartoon series external subtitles',
      },
      {
        id: '190',
        cat: 'Movies',
        desc: "five children's series integrated subtitles",
      },
      {
        id: '191',
        cat: 'Movies',
        desc: "six children's series Metaglotismenes",
      },
      { id: '192', cat: 'Movies', desc: 'Anime external subtitles' },
      { id: '193', cat: 'Movies', desc: 'Anime integrated subtitles' },
      { id: '194', cat: 'Movies', desc: 'Anime Metaglotismenes' },
      { id: '128', cat: 'Console', desc: '9.1 ?a????d?a' },
      { id: '195', cat: 'Console', desc: 'Windows Games' },
      { id: '196', cat: 'Console', desc: 'Nintendo DS' },
      { id: '197', cat: 'Console', desc: 'Sony PS1' },
      { id: '198', cat: 'Console', desc: 'Sony PS2' },
      { id: '199', cat: 'Console', desc: 'Sony PS3' },
      { id: '200', cat: 'Console', desc: 'Sony PSP' },
      { id: '201', cat: 'Console', desc: 'Wii' },
      { id: '202', cat: 'Console', desc: 'XboX 360' },
      { id: '124', cat: 'PC', desc: '9.2 Applications' },
      { id: '203', cat: 'PC', desc: 'Applications Windows' },
      { id: '204', cat: 'PC', desc: 'Applications Mac' },
      { id: '205', cat: 'PC', desc: 'Linux Applications' },
      { id: '126', cat: 'Books', desc: '9.3 Electronic Books' },
      { id: '206', cat: 'Books', desc: 'Electronic books' },
      { id: '207', cat: 'Books', desc: 'Magazines' },
      { id: '208', cat: 'Books', desc: 'Comic Books' },
      { id: '125', cat: 'Other', desc: '9.4 Gallery' },
      { id: '209', cat: 'Other', desc: 'Gallery' },
      { id: '210', cat: 'Other', desc: 'Gallery HD' },
      { id: '211', cat: 'Other', desc: 'Photos 3D' },
      { id: '212', cat: 'Other', desc: 'Wallpapers' },
      { id: '213', cat: 'Other', desc: 'Screensavers' },
      {
        id: '127',
        cat: 'PC/Phone-Other',
        desc: '9.5 Mobile / Miscellaneous',
      },
      { id: '214', cat: 'PC/Phone-Other', desc: 'Mobile' },
      { id: '215', cat: 'PC/Phone-Other', desc: 'Miscellaneous' },
      { id: '129', cat: 'Other', desc: '9.6 Blocked DREAM TEAM' },
    ],
    modes: { search: ['q'], 'tv-search': ['q', 'season', 'ep'] },
  },
  login: {
    path: 'takelogin.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'td:contains("remaining tries")' }],
    test: { path: 'browse.php', selector: 'a[href*="/logout.php"]' },
  },
  download: {
    before: {
      path: 'takethanks.php',
      method: 'post',
      inputs: { torrentid: '{{ .DownloadUri.Query.id }}' },
    },
  },
  search: {
    paths: [{ path: 'browse.php' }],
    keywordsfilters: [
      {
        name: 're_replace',
        args: ['(?:^|\\s)[_\\+\\/\\.\\-\\(\\)]*[\\S]{0,3}[_\\+\\/\\.\\-\\(\\)]*(?:\\s|$)', ' '],
      },
    ],
    inputs: {
      do: 'search',
      keywords: '{{ .Keywords }}',
      search_type: 't_name',
      category: '0',
      include_dead_torrents: 'yes',
    },
    rows: {
      selector: 'table#sortabletable > tbody > tr:has(a[href*="/details.php?id="])',
      filters: [{ name: 'andmatch', args: 66 }],
    },
    fields: {
      download: {
        selector: 'a[href*="/download.php?id="]',
        attribute: 'href',
      },
      title: { optional: true, selector: 'div.tooltip-content > div' },
      details: {
        selector: 'a[href*="/details.php?id="]',
        attribute: 'href',
      },
      category: {
        selector: 'a[href*="/browse.php?category="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category' }],
      },
      banner: {
        optional: true,
        selector: 'div.tooltip-content > img',
        attribute: 'src',
      },
      size: { selector: 'td:nth-child(5)' },
      grabs: { selector: 'td:nth-child(6)' },
      seeders: { selector: 'td:nth-child(7)' },
      leechers: { selector: 'td:nth-child(8)' },
      downloadvolumefactor: {
        case: {
          'img[alt^="Free Torrent "]': '0',
          'img[alt^="Silver Torrent "]': '0.5',
          '*': '1',
        },
      },
      uploadvolumefactor: { case: { '*': '1' } },
      date: {
        selector: 'td:nth-child(2) > div:has(span[style="float: right;"])',
        remove: 'span',
        filters: [
          { name: 'append', args: ' +00:00' },
          { name: 'dateparse', args: '02-01-2006 15:04 -07:00' },
        ],
      },
    },
  },
};
