// tslint:disable:type-literal-delimiter

export interface TopLevel {
  site: string;
  name: string;
  description?: string;
  language: string;
  type?: string;
  encoding?: string;
  links: string[];
  certificates?: string[];
  caps: Caps;
  settings?: Setting[];
  download?: Download;
  search: Search;
  test?: Test;
  login?: Login;
  ratio?: Ratio;
  legacylinks?: string[];
  followredirect?: boolean;
}

export interface Caps {
  categorymappings?: Categorymapping[];
  modes?: Modes;
  categories?: { [key: string]: string };
}

export interface Categorymapping {
  id: number | string | boolean;
  cat: string;
  desc?: string;
  default?: boolean;
}

export interface Modes {
  search?: string[];
  searchstr?: string[];
  'music-search'?: string[];
  'tv-search'?: string[];
  'movie-search'?: string[];
}

export interface Download {
  before?: Login;
  method?: string;
  selector?: string;
  filters?: DownloadFilter[];
  attribute?: string;
}

export interface DownloadFilter {
  name: string;
  args?: string | (string | number)[];
}

export interface Login {
  path?: string;
  method?: string;
  submitpath?: string;
  inputs?: { [key: string]: string | number };
  captcha?: Captcha;
  error?: Error[];
  test?: Test;
  headers?: { [key: string]: string };
  form?: string;
  cookies?: string[];
  selectorinputs?: {
    getUnique?: {
      selector: string;
      attribute: string;
    }
    securitytoken?: {
      selector: string;
      filters: FilterElement[];
    };
  };
}

export interface Captcha {
  type: 'image';
  selector: string;
  input: string;
}

export interface Error {
  path?: string;
  selector?: string;
  message?: Selector;
}

export interface Test {
  path?: string;
  select?: string;
  selector?: string;
}

export interface Ratio {
  text?: string | number;
  path?: string;
  selector?: string | null;
  attribute?: string;
  filters?: DownloadFilter[];
}

export interface Search {
  path?: string;
  method?: string;
  inputs?: { [key: string]: string | number | boolean | null };
  error?: Error[];
  preprocessingfilters?: FilterElement[];
  keywordsfilters?: KeywordsfilterElement[];
  rows: Rows;
  fields: Fields;
  paths?: Path[];
  headers?: { [key: string]: string | string[] };
}

export interface Fields {
  [key: string]: Selector;
  // // TODO these are all the same
  // download: Selector;
  // _title_original: Selector;
  // title: Selector;
  // category?: Selector;
  // details?: Selector;
  // is_anime?: Selector;
  // title_anime?: Selector;
  // title_normal?: Selector;
  // date?: Selector;
  // size: Selector;
  // seeders?: Selector;
  // title_phase1?: Selector;
  // title_multilang?: Selector;
  // leechers?: Selector;
  // 'title-attribute'?: Selector;
  // 'title-text'?: Selector;
  // downloadvolumefactor?: Selector;
  // uploadvolumefactor?: Uploadvolumefactor;
  // comments?: Selector;
  // description?: Selector;
  // banner?: Selector;
  // files?: Selector;
  // grabs?: Selector;
  // imdb?: Selector;
  // minimumratio?: Minimum;
  // minimumseedtime?: Minimum;
  // magnet?: Selector;
  // site_date?: SiteDate;
  // _id?: Ratio;
}

export interface Selector {
  selector?: string;
  filters?: FilterElement[] | null;
  ffilters?: FilterElement[];
  optional?: boolean;
  attribute?: string;
  case?: { [key: string]: string | number };
  text?: string | number;
  remove?: string;
}

export interface FilterElement {
  name?: string;
  attribute?: string;
  // TODO: remove object when args fixed
  args?: (string | number)[] | string | { [key: string]: null };
  dateparse?: null;
}

export interface DateFilter {
  name: string;
  args: (string | number)[] | string;
}

export interface Minimum {
  text: string;
}

export interface SiteDate {
  selector: string;
  optional?: boolean;
  filters: DownloadFilter[];
}

export interface KeywordsfilterElement {
  name: string;
  args?: (string | number)[] | string;
}

export interface Uploadvolumefactor {
  text?: string;
  case?: { [key: string]: string | number };
  optional?: boolean;
  selector?: string;
  attribute?: string;
  filters?: Selector[];
}

export interface Path {
  path: string;
  inputs?: { [key: string]: string | number };
  method?: string;
  followredirect?: boolean;
  categorymappings?: (string | number)[];
}

export interface Rows {
  selector: string;
  remove?: string;
  filters?: RowsFilter[];
  after?: number;
  dateheaders?: SiteDate;
}

export interface RowsFilter {
  name: string;
  args?: number;
}

export interface Setting {
  name: string;
  type: string;
  label: string;
  default?: string | number | boolean;
  options?: { [key: string]: string };
}
