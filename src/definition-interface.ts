// tslint:disable:type-literal-delimiter
import { Categories } from './categories';
import { Filters } from './filters';

export type SiteType = 'private' | 'semi-private' | 'public';

export type SiteEncoding =
  | 'ISO-8859-1'
  | 'ISO-8859-15'
  | 'ISO-8859-2'
  | 'UTF-8'
  | 'WINDOWS-1250'
  | 'WINDOWS-1251'
  | 'WINDOWS-1252'
  | 'WINDOWS-1253';

export interface TrackerDefinition {
  source: 'jackett' | 'cardigann';
  site: string;
  name: string;
  links: string[];
  caps: {
    categorymappings?: Categorymapping[];
    modes?: Modes;
  };
  /**
   * language code
   * @link https://en.wikipedia.org/wiki/Language_code
   */
  language: string;
  description?: string;
  type?: SiteType;
  encoding?: SiteEncoding;
  /**
   * cardigann - self signed cert to trusted certs
   */
  certificates?: string[];
  settings?: Setting[];
  download?: Download;
  search: Search;
  test?: Test;
  login?: Req;
  ratio?: Ratio;
  legacylinks?: string[];
  followredirect?: boolean;
}

export interface Categorymapping {
  id: string;
  cat: Categories;
  desc?: string;
  default?: boolean;
}

export interface Setting {
  name: string;
  type: string;
  label: string;
  default?: string | number | boolean;
  options?: { [key: string]: string };
}

export interface Modes {
  search?: string[];
  searchstr?: string[];
  'music-search'?: string[];
  'tv-search'?: string[];
  'movie-search'?: string[];
}

export interface Download {
  before?: Req;
  method?: string;
  selector?: string;
  filters?: Filters[];
  attribute?: string;
}

export interface Req {
  path?: string;
  method?: 'cookie' | 'post' | 'form' | 'get';
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
    };
    securitytoken?: {
      selector: string;
      filters: Filters[];
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
  filters?: Filters[];
}

export interface Fields {
  /**
   * title is required and parsed first
   */
  title: Selector;
  [key: string]: Selector;
}

export interface Search {
  /**
   * path of search page - eg /terms or browse?q=terms
   */
  paths: Path[];
  /**
   * root html element of search results
   */
  rows: RowsSelector;
  /**
   * result selections
   */
  fields: Fields;
  method?: string;
  inputs?: { [key: string]: string | number | boolean | null };
  error?: Error[];
  followredirect?: boolean;
  preprocessingfilters?: Filters[];
  keywordsfilters?: Filters[];
  headers?: { [key: string]: string | string[] };
}

export interface RowsSelector {
  selector: string;
  filters?: Filters[] | null;
  after?: number;
  dateheaders?: Selector;
  remove?: string;
}

export interface Selector {
  selector?: string;
  filters?: Filters[] | null;
  ffilters?: Filters[];
  optional?: boolean;
  attribute?: string;
  case?: { [key: string]: string | number };
  text?: string | number;
  remove?: string;
}

export interface Path {
  path: string;
  inputs?: { [key: string]: string | number };
  method?: string;
  followredirect?: boolean;
  categorymappings?: (string | number)[];
}
