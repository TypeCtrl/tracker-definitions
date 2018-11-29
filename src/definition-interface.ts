export interface TopLevel {
  site: string;
  name: string;
  description?: string;
  language: string;
  type?: string;
  encoding?: string;
  links: string[];
  caps: Caps;
  settings?: Setting[];
  download?: Download;
  search: Search;
  login?: Login;
  ratio?: Ratio;
  legacylinks?: string[];
  followredirect?: boolean;
}

export interface Caps {
  categorymappings?: Categorymapping[];
  modes?: Modes;
  categories?: {[key: string]: string};
}

export interface Categorymapping {
  id: number | string;
  cat: string;
  desc: string;
}

export interface Modes {
  search: string[];
  'tv-search'?: string[];
  'movie-search'?: string[];
}

export interface Download {
  selector: string;
  filters?: DownloadFilter[];
  attribute?: string;
}

export interface DownloadFilter {
  name: string;
  args?: string;
}

export interface Login {
  path?: string;
  method: string;
  submitpath?: string;
  inputs: { [key: string]: string | number };
  error?: Error[];
  test?: Test;
  headers?: {[key: string]: string};
  form?: string;
  selectorinputs?: {
    securitytoken: {
      selector: string;
      filters: FilterElement[];
    };
  };
}

export interface Error {
  selector: string;
  message?: Description;
}

export interface Description {
  selector: string;
  remove?: string;
}

export interface Test {
  path: string;
  selector?: string;
}

export interface Ratio {
  path?: string;
  selector: string;
  attribute?: string;
  filters?: DownloadFilter[];
}

export interface Search {
  path?: string;
  inputs?: {[key: string]: string | number};
  keywordsfilters?: KeywordsfilterElement[];
  rows: Rows;
  fields: Fields;
  paths?: Path[];
}

export interface Fields {
  // TODO these are all the same
  download: Selector;
  title: Selector;
  category: Category;
  details?: Comments;
  date?: DateClass;
  size: Size;
  seeders: Ers;
  leechers?: Ers;
  downloadvolumefactor?: Downloadvolumefactor;
  uploadvolumefactor?: Uploadvolumefactor;
  comments?: Comments;
  description?: Description;
  banner?: Selector;
  files?: Selector;
  grabs?: Grabs;
  imdb?: Selector;
  minimumratio?: Minimum;
  minimumseedtime?: Minimum;
  magnet?: Comments;
  site_date?: SiteDate;
  _id?: Ratio;
}

export interface Selector {
  selector?: string;
  filters?: FilterElement[];
  optional?: boolean;
  attribute?: string;
  text?: string;
}

export interface FilterElement {
  name: string;
  attribute?: string;
  args: any[] | string;
}

export interface Category {
  selector?: string;
  attribute?: string;
  filters?: FilterElement[];
  case?: { [key: string]: string };
  text?: number | string;
}

export interface Comments {
  selector: string;
  attribute: string;
}

export interface DateClass {
  selector?: string;
  attribute?: string;
  filters?: DateFilter[];
  text?: string;
  remove?: string;
  ffilters?: any;
}

export interface DateFilter {
  name: string;
  args: (string | number)[] | string;
}

export interface Downloadvolumefactor {
  text?: string;
  case?: { [key: string]: string | number };
  optional?: boolean;
  selector?: string;
  attribute?: string;
  filters?: DownloadvolumefactorFilter[];
}

export interface DownloadvolumefactorFilter {
  name: string;
  args?: (number | string)[];
}

export interface Grabs {
  selector: string;
  filters?: DateFilter[];
}

export interface Ers {
  selector?: string;
  text?: string;
  optional?: boolean;
}

export interface Minimum {
  text: string;
}

export interface SiteDate {
  selector: string;
  filters: DownloadFilter[];
}

export interface Size {
  selector: string;
  filters?: KeywordsfilterElement[];
  remove?: string;
}

export interface KeywordsfilterElement {
  name: string;
  args?: string[];
}

export interface Uploadvolumefactor {
  text?: string;
  case?: { [key: string]: string | number };
  optional?: boolean;
  selector?: string;
  attribute?: string;
  filters?: DownloadvolumefactorFilter[];
}

export interface Path {
  path: string;
  inputs?: PathInputs;
  method?: string;
  categorymappings?: string[];
}

export interface PathInputs {
  Torrent_page: string;
}

export interface Rows {
  selector: string;
  filters?: RowsFilter[];
  after?: number;
  dateheaders?: SiteDate;
}

export interface RowsFilter {
  name: string;
}

export interface Setting {
  name: string;
  type: string;
  label: string;
  default?: string | number;
  options?: { [key: string]: string };
}
