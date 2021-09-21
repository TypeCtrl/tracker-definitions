import { Categories } from './categories';
import { Filters } from './filters';

export type SiteType = 'private' | 'semi-private' | 'public';

export type SiteEncoding =
  | 'ISO-8859-9'
  | 'ISO-8859-1'
  | 'ISO-8859-15'
  | 'ISO-8859-2'
  | 'UTF-8'
  | 'WINDOWS-1250'
  | 'WINDOWS-1251'
  | 'WINDOWS-1252'
  | 'WINDOWS-1253'
  | 'WINDOWS-874'
  | 'TIS-620';

export interface TrackerDefinition {
  /**
   * upstream origin of the tracker definition
   */
  source: 'jackett' | 'custom';
  /**
   * Internal name of the indexer (all lower case, typically the
   * display name without any special characters, same as filename)
   */
  id?: string;
  // TODO: deprecate??
  site?: string;
  /**
   * Display name (The full name of the tracker)
   */
  name: string;
  /**
   * List of known domains (the first one is the default, must end with
   */
  links: string[];
  /**
   * List of old domains which no longer work. If one of these URLs is
   * configured it will be automatically replaced with the default one.
   */
  legacylinks?: string[];
  /**
   * Capabilities of the indexer
   */
  caps: {
    /**
     * Mapping between the tracker categories and the Newznab categories
     */
    categorymappings?: Categorymapping[];
    /**
     * Specify which torznab search modes and attributes are supported by the indexers.
     * Implementation note: Jackett doesn't care very much about this but you
     * still should specify the correct modes.
     * Especially don't include imdbid if the tracker doesn't support
     * searching by imdbid.
     */
    modes?: Modes;
  };
  /**
   * Langauge code of the main language used on the tracker
   * @link https://en.wikipedia.org/wiki/Language_code
   * @link http://www.lingoes.net/en/translator/langcode.htm
   */
  language: string;
  description?: string;
  /**
   * Indexer type
   */
  type?: SiteType;
  /**
   * Website encoding used by the tracker
   */
  encoding?: SiteEncoding;
  testlinktorrent?: boolean;
  /**
   * If the tracker uses untrusted HTTPS certificates (self signed, expired) you can specify a list of thumbprint hashes which should be accepted as valid anyway.
   * This shouldn't be needed in most cases.
   */
  certificates?: string[];
  settings?: Setting[];
  download?: Download;
  search: Search;
  test?: Test;
  login?: Req;
  ratio?: Ratio;
  /**
   * Enable/Disable automatic update of the URL in case of a redirect to a different domain
   */
  followredirect?: boolean;
}

/**
 * Mapping between the tracker categories and the Newznab categories
 */
export interface Categorymapping {
  [key: string]: any;
  /**
   * The tracker specific category ID.
   */
  id: string;
  /**
   * The corresponding newznab predefined category.
   * @link https://github.com/nZEDb/nZEDb/blob/dev/docs/newznab_api_specification.txt#L608-L695
   */
  cat: Categories;
  /**
   * The tracker category name.
   * If provided it will be used for a 1:1 mapping between tracker and newznab categories.
   */
  desc?: string;
  /**
   * Specify if this category should be used as default (if the search query doesn't contain any categories).
   */
  default?: boolean;
}

export interface Setting {
  name: string;
  type: string;
  label?: string;
  default?: string | number | boolean;
  options?: Record<string, string>;
}

/**
 * Specify which torznab search modes and attributes are supported by the indexers.
 * Implementation note: Jackett doesn't care very much about this but you
 * still should specify the correct modes.
 * Especially don't include imdbid if the tracker doesn't support
 * searching by imdbid.
 */
export interface Modes {
  search?: string[];
  searchstr?: string[];
  'music-search'?: string[];
  'tv-search'?: string[];
  'movie-search'?: string[];
  'book-search'?: string[];
}

export interface Download {
  before?: Req | Record<string, Selector>;
  method?: string;
  selector?: string;
  selectors?: Selector[] | null;
  filters?: Filters[];
  attribute?: string;
  infohash?: Record<string, Selector | boolean>;
}

export interface Req {
  path?: string;
  method?: 'cookie' | 'post' | 'form' | 'get' | 'oneurl';
  submitpath?: string;
  inputs?: Record<string, string | number | boolean>;
  captcha?: Captcha;
  /**
   * multiple selectors for errors
   */
  error?: Error[];
  test?: Test;
  headers?: Record<string, string>;
  form?: string;
  cookies?: string[];
  selectors?: boolean;
  /**
   * Only needed in very limited cases.
   * Can be used to include values based on a result of a selector.
   * e.g. if a CSRF token is hidden in JavaScript).
   */
  selectorinputs?: {
    [key: string]:
      | {
          selector: string;
          attribute?: string;
          filters?: Filters[];
        }
      | undefined;
    cookie_test?: {
      selector: string;
      attribute: string;
    };
    _token?: {
      selector: string;
      attribute: string;
    };
    token?: {
      selector: string;
      attribute: string;
    };
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
  /**
   * image based captcha (can be image or text)
   */
  type: 'image' | 'text';
  /**
   * selector for the captcha HTML element
   */
  selector: string;
  /**
   * name of the target form element (captcha value)
   */
  input: string;
}

export interface Error {
  path?: string;
  selector?: string;
  /**
   * Optional selector to change the error message which will be displayed.
   */
  message?: Selector;
}

export interface Test {
  path?: string;
  select?: string;
  /**
   * check this selector (must match)
   */
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
  [key: string]: Selector | undefined;
  /**
   * title is required and parsed first
   * torrent title
   */
  title: Selector;
  category?: Selector;
  details?: Selector;
  comments?: Selector;
  download?: Selector;
  magnet?: Selector;
  size?: Selector;
  date?: Selector;
  seeders?: Selector;
  leechers?: Selector;
  grabs?: Selector;
  downloadvolumefactor?: Selector;
  uploadvolumefactor?: Selector;
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
  inputs?: Record<string, string | number | boolean | null>;
  error?: Error[];
  followredirect?: boolean;
  preprocessingfilters?: Filters[];
  keywordsfilters?: Filters[];
  headers?: Record<string, string | string[]>;
}

export interface RowsSelector {
  selector: string;
  filters?: Filters[] | null;
  /**
   * optional row merging
   * Use this if the tracker uses multiple row elements for each torrent (e.g. hidden tooltip or collapsed rows)
   * The specified number of elements from the rows selector result will be merged into the previous element.
   * In this example (1) two rows will be merged together.
   */
  after?: number;
  /**
   * optional selector for rows containing dates.
   * Use this if the torrent result rows don't contain a publish date but a previous row contains the date.
   * The indexer will go back and parse the first sibling element matching the selector as date for that torrent.
   */
  dateheaders?: Selector;
  remove?: string;
}

export interface Selector {
  /**
   * used to override the default GET method
   */
  method?: 'post';
  selector?: string;
  filters?: Filters[] | null;
  ffilters?: Filters[];
  optional?: boolean;
  attribute?: string;
  case?: Record<string, string | number>;
  text?: string | number;
  remove?: string;
}

export interface Path {
  path: string;
  inputs?: Record<string, string | number>;
  categories?: Array<number | string>;
  method?: string;
  followredirect?: boolean;
  categorymappings?: Array<string | number>;
}
