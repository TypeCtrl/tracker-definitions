import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  id: 'erzsebetpl',
  name: 'Erzsebet.pl',
  description: 'Erzsebet.pl is a RUSSIAN Semi-Private Torrent Tracker for 3X',
  language: 'ru-RU',
  type: 'semi-private',
  encoding: 'UTF-8',
  links: ['https://erzsebet.pl/'],
  caps: {
    categorymappings: [
      { id: '3', cat: 'Movies', desc: 'Зарубежное кино' },
      {
        id: '4',
        cat: 'Movies',
        desc: 'Зарубежное кино Классика мирового кинематографа',
      },
      {
        id: '10',
        cat: 'Movies',
        desc: 'Зарубежное кино Зарубежные фильмы',
      },
      {
        id: '157',
        cat: 'Movies',
        desc: 'Зарубежное кино Зарубежное кино (DVD Video)',
      },
      {
        id: '142',
        cat: 'Movies',
        desc: 'Зарубежное кино Зарубежное кино (HD Video)',
      },
      {
        id: '161',
        cat: 'TV',
        desc: 'Зарубежное кино Зарубежные сериалы',
      },
      {
        id: '11',
        cat: 'Movies',
        desc: 'Кино России, CCCР и бывших стран СССР',
      },
      { id: '12', cat: 'Movies', desc: 'Кино России Кино СССР' },
      { id: '132', cat: 'Movies', desc: 'Кино России Наше кино' },
      {
        id: '158',
        cat: 'Movies',
        desc: 'Кино России Наше кино (DVD Video)',
      },
      {
        id: '133',
        cat: 'Movies',
        desc: 'Кино России Наше кино (HD Video)',
      },
      { id: '160', cat: 'TV', desc: 'Кино России Русские сериалы' },
      { id: '111', cat: 'Movies', desc: 'Мультфильмы' },
      {
        id: '113',
        cat: 'Movies',
        desc: 'Мультфильмы Иностранные мультфильмы',
      },
      { id: '196', cat: 'Movies', desc: 'Мультфильмы Мультсериалы' },
      {
        id: '112',
        cat: 'Movies',
        desc: 'Мультфильмы Отечественные мультфильмы',
      },
      {
        id: '162',
        cat: 'TV/Anime',
        desc: 'Мультфильмы Аниме (Японская анимация)',
      },
      { id: '179', cat: 'Movies', desc: 'Театр' },
      {
        id: '180',
        cat: 'Movies',
        desc: 'Театр Произведения театрального искусства',
      },
      { id: '175', cat: 'Audio', desc: 'Популярная музыка' },
      {
        id: '183',
        cat: 'Audio/Lossless',
        desc: 'Популярная музыка Зарубежная популярная музыка (lossless)',
      },
      {
        id: '184',
        cat: 'Audio',
        desc: 'Популярная музыка Сборники песен для детей (lossy и lossless)',
      },
      {
        id: '182',
        cat: 'Audio/Video',
        desc: 'Популярная музыка Наша популярная музыка (Видео и DVD)',
      },
      {
        id: '176',
        cat: 'Audio/Video',
        desc: 'Популярная музыка Наша популярная музыка (HD Video)',
      },
      { id: '199', cat: 'Audio', desc: 'Джазовая и Блюзовая музыка' },
      {
        id: '201',
        cat: 'Audio/MP3',
        desc: 'Джазовая и Блюзовая музыка Jazz (lossy)',
      },
      {
        id: '200',
        cat: 'Audio/Lossless',
        desc: 'Джазовая и Блюзовая музыка Jazz (lossless)',
      },
      {
        id: '204',
        cat: 'Audio/MP3',
        desc: 'Джазовая и Блюзовая музыка Blues (lossy)',
      },
      {
        id: '203',
        cat: 'Audio/Lossless',
        desc: 'Джазовая и Блюзовая музыка Blues (lossless)',
      },
      { id: '150', cat: 'Audio', desc: 'Рок-музыка' },
      {
        id: '181',
        cat: 'Audio/Lossless',
        desc: 'Рок-музыка Зарубежный Rock (lossless)',
      },
      {
        id: '245',
        cat: 'Audio/MP3',
        desc: 'Рок-музыка Зарубежный Metal (lossy)',
      },
      {
        id: '246',
        cat: 'Audio/Lossless',
        desc: 'Рок-музыка Зарубежный Metal (lossless)',
      },
      {
        id: '156',
        cat: 'Audio/MP3',
        desc: 'Рок-музыка Отечественный Rock, Metal (lossy)',
      },
      {
        id: '155',
        cat: 'Audio/Lossless',
        desc: 'Рок-музыка Отечественный Rock, Metal (lossless)',
      },
      {
        id: '154',
        cat: 'Audio/Video',
        desc: 'Рок-музыка Metal (DVD Video)',
      },
      {
        id: '153',
        cat: 'Audio/Video',
        desc: 'Рок-музыка Рок-музыка (HD Video)',
      },
      { id: '27', cat: 'PC/Games', desc: 'Игры для Windows ' },
      {
        id: '28',
        cat: 'PC/Games',
        desc: 'Игры для Windows Горячие новинки',
      },
      { id: '38', cat: 'PC/Games', desc: 'Игры для Windows Аркады' },
      { id: '214', cat: 'PC/Games', desc: 'Игры для Windows Файтинги' },
      { id: '31', cat: 'PC/Games', desc: 'Игры для Windows Экшены' },
      {
        id: '185',
        cat: 'PC/Games',
        desc: 'Игры для Windows Логические игры',
      },
      { id: '215', cat: 'PC/Games', desc: 'Игры для Windows Хорроры' },
      {
        id: '219',
        cat: 'PC/Games',
        desc: 'Игры для Windows Приключения и квесты',
      },
      { id: '29', cat: 'PC/Games', desc: 'Игры для Windows Демо-версии' },
      {
        id: '186',
        cat: 'PC/Games',
        desc: 'Игры для Windows Многопользовательские игры',
      },
      {
        id: '187',
        cat: 'PC/Games',
        desc: 'Игры для Windows Онлайновые игры',
      },
      {
        id: '33',
        cat: 'PC/Games',
        desc: 'Игры для Windows Стратегии в реальном времени',
      },
      {
        id: '35',
        cat: 'PC/Games',
        desc: 'Игры для Windows Пошаговые стратегии',
      },
      { id: '41', cat: 'PC/Games', desc: 'Игры для Windows Разное' },
      { id: '168', cat: 'Console', desc: 'Игры для Linux ' },
      {
        id: '169',
        cat: 'Console',
        desc: 'Игры для Linux Нативные игры для Linux ',
      },
      {
        id: '170',
        cat: 'Console',
        desc: 'Игры для Linux Портированные игры для Linux ',
      },
      { id: '163', cat: 'Console', desc: 'Игры для Консолей' },
      { id: '189', cat: 'Console', desc: 'Игры для Консолей PS ' },
      { id: '166', cat: 'Console', desc: 'Игры для Консолей PS2 ' },
      { id: '239', cat: 'Console', desc: 'Игры для Консолей PS3 ' },
      { id: '165', cat: 'Console', desc: 'Игры для Консолей PS4 ' },
      { id: '171', cat: 'Console', desc: 'Игры для Консолей PSP ' },
      { id: '164', cat: 'Console', desc: 'Игры для Консолей Xbox 360 ' },
      {
        id: '167',
        cat: 'Console',
        desc: 'Игры для Консолей Остальные платформы',
      },
      { id: '13', cat: 'PC', desc: 'Операционные системы' },
      { id: '14', cat: 'PC', desc: 'Операционные системы Windows ' },
      { id: '15', cat: 'PC', desc: 'Операционные системы Linux ' },
      { id: '147', cat: 'PC', desc: 'Операционные системы Mac OS ' },
      { id: '173', cat: 'PC', desc: 'Системные программы' },
      {
        id: '190',
        cat: 'PC',
        desc: 'Системные программы Работа с жёстким диском',
      },
      {
        id: '216',
        cat: 'PC',
        desc: 'Системные программы Резервное копирование',
      },
      {
        id: '217',
        cat: 'PC',
        desc: 'Системные программы Архиваторы и файловые менеджеры',
      },
      {
        id: '174',
        cat: 'PC',
        desc: 'Системные программы Программы для настройки и оптимизации ОС',
      },
      {
        id: '218',
        cat: 'PC',
        desc: 'Системные программы Сервисное обслуживание компьютера',
      },
      {
        id: '244',
        cat: 'PC',
        desc: 'Системные программы Программы для интернет и сетей',
      },
      {
        id: '109',
        cat: 'PC',
        desc: 'Программы для работы с мультимедиа и 3D ',
      },
      {
        id: '172',
        cat: 'PC',
        desc: 'Программы для работы с мультимедиа и 3D Графические редакторы',
      },
      {
        id: '110',
        cat: 'PC',
        desc:
          'Программы для работы с мультимедиа и 3D 3D моделирование, рендеринг и плагины для них',
      },
      { id: '77', cat: 'PC', desc: 'ГИС, системы навигации и карты' },
      {
        id: '79',
        cat: 'PC',
        desc: 'ГИС, системы навигации и карты Разное - системы навигации и карты',
      },
      {
        id: '78',
        cat: 'PC',
        desc: 'ГИС, системы навигации и карты Navigon / Navitel ',
      },
      {
        id: '53',
        cat: 'Other',
        desc: 'Видеоуроки и обучающие интерактивные DVD ',
      },
      {
        id: '56',
        cat: 'Other',
        desc: 'Видеоуроки и обучающие интерактивные DVD Кулинария',
      },
      {
        id: '57',
        cat: 'Other',
        desc: 'Видеоуроки и обучающие интерактивные DVD Спорт',
      },
      {
        id: '59',
        cat: 'Other',
        desc: 'Видеоуроки и обучающие интерактивные DVD Оздоровительные практики',
      },
      {
        id: '62',
        cat: 'Other',
        desc: 'Видеоуроки и обучающие интерактивные DVD Игра на гитаре',
      },
      {
        id: '68',
        cat: 'Other',
        desc: 'Видеоуроки и обучающие интерактивные DVD Психология',
      },
      {
        id: '69',
        cat: 'Other',
        desc: 'Видеоуроки и обучающие интерактивные DVD Строительство, ремонт и дизайн',
      },
      {
        id: '55',
        cat: 'Other',
        desc: 'Компьютерные видеоуроки и обучающие интерактивные DVD ',
      },
      {
        id: '70',
        cat: 'Other',
        desc:
          'Компьютерные видеоуроки и обучающие интерактивные DVD Компьютерные сети и безопасность',
      },
      {
        id: '71',
        cat: 'Other',
        desc:
          'Компьютерные видеоуроки и обучающие интерактивные DVD ОС и серверные программы Microsoft ',
      },
      {
        id: '72',
        cat: 'Other',
        desc: 'Компьютерные видеоуроки и обучающие интерактивные DVD 2D и 3D графика',
      },
      {
        id: '75',
        cat: 'Other',
        desc: 'Компьютерные видеоуроки и обучающие интерактивные DVD Программирование (видеоуроки)',
      },
      {
        id: '76',
        cat: 'Other',
        desc: 'Компьютерные видеоуроки и обучающие интерактивные DVD Работа с видео',
      },
      { id: '49', cat: 'TV/Sport', desc: 'Футбол' },
      { id: '177', cat: 'TV/Sport', desc: 'Футбол Чемпионаты Мира' },
      { id: '178', cat: 'TV/Sport', desc: 'Футбол Россия и СССР' },
      { id: '193', cat: 'TV/Sport', desc: 'Футбол Чемпионаты Европы' },
      { id: '194', cat: 'TV/Sport', desc: 'Футбол Еврокубки' },
      { id: '205', cat: 'TV/Sport', desc: 'Хоккей' },
      {
        id: '210',
        cat: 'TV/Sport',
        desc: 'Хоккей Хоккей с мячом / Бенди',
      },
      { id: '209', cat: 'TV/Sport', desc: 'Хоккей КХЛ' },
      { id: '208', cat: 'TV/Sport', desc: 'Хоккей НХЛ' },
      {
        id: '207',
        cat: 'TV/Sport',
        desc: 'Хоккей Международные турниры',
      },
      { id: '211', cat: 'TV/Sport', desc: 'Хоккей СССР - Канада' },
      {
        id: '206',
        cat: 'TV/Sport',
        desc: 'Хоккей Документальные фильмы и аналитика',
      },
      { id: '226', cat: 'TV/Sport', desc: 'Баскетбол' },
      {
        id: '229',
        cat: 'TV/Sport',
        desc: 'Баскетбол Международные соревнования',
      },
      { id: '228', cat: 'TV/Sport', desc: 'Баскетбол NBA / NCAA ' },
      {
        id: '227',
        cat: 'TV/Sport',
        desc: 'Баскетбол Европейский клубный баскетбол',
      },
      { id: '116', cat: 'XXX', desc: 'Зарубежные порнофильмы' },
      {
        id: '126',
        cat: 'XXX',
        desc: 'Зарубежные порнофильмы Паки полных фильмов',
      },
      {
        id: '118',
        cat: 'XXX',
        desc: 'Зарубежные порнофильмы Классические фильмы',
      },
      {
        id: '145',
        cat: 'XXX',
        desc: 'Зарубежные порнофильмы Фильмы с сюжетом',
      },
      {
        id: '136',
        cat: 'XXX',
        desc: 'Зарубежные порнофильмы Гонзо-фильмы',
      },
      {
        id: '122',
        cat: 'XXX',
        desc: 'Зарубежные порнофильмы Фильмы без сюжета',
      },
      {
        id: '137',
        cat: 'XXX',
        desc: 'Зарубежные порнофильмы Лесбо-фильмы',
      },
      {
        id: '159',
        cat: 'XXX',
        desc: 'Зарубежные порнофильмы Этнические фильмы',
      },
      {
        id: '146',
        cat: 'XXX',
        desc: 'Зарубежные порнофильмы Видео для телефонов и КПК',
      },
      {
        id: '124',
        cat: 'XXX',
        desc: 'Зарубежные порнофильмы Фильмы с сюжетом, Классические (DVD)',
      },
      {
        id: '117',
        cat: 'XXX',
        desc: 'Зарубежные порнофильмы Гонзо, Лесбо и Фильмы без сюжета (DVD)',
      },
      {
        id: '198',
        cat: 'XXX',
        desc: 'Зарубежные порнофильмы Фильмы с сюжетом (HD Video)',
      },
      {
        id: '125',
        cat: 'XXX',
        desc: 'Зарубежные порнофильмы Гонзо, Лесбо и Фильмы без сюжета (HD Video)',
      },
      { id: '114', cat: 'XXX', desc: 'Зарубежные порноролики' },
      {
        id: '121',
        cat: 'XXX',
        desc: 'Зарубежные порноролики Паки сайтрипов',
      },
      {
        id: '127',
        cat: 'XXX',
        desc: 'Зарубежные порноролики Паки порнороликов по актрисам',
      },
      { id: '129', cat: 'XXX', desc: 'Зарубежные порноролики Сайтрипы' },
      {
        id: '115',
        cat: 'XXX',
        desc: 'Зарубежные порноролики Сайтрипы (HD Video)',
      },
      {
        id: '195',
        cat: 'XXX',
        desc: 'Зарубежные порноролики Сцены из фильмов',
      },
      {
        id: '123',
        cat: 'XXX',
        desc: 'Зарубежные порноролики Порноролики Разное',
      },
      { id: '138', cat: 'XXX', desc: 'Русское порно' },
      {
        id: '213',
        cat: 'XXX',
        desc: 'Русское порно Русские порнофильмы',
      },
      {
        id: '144',
        cat: 'XXX',
        desc: 'Русское порно Паки русских порнороликов',
      },
      {
        id: '140',
        cat: 'XXX',
        desc: 'Русское порно Сайтрипы с русскими актрисами',
      },
      {
        id: '141',
        cat: 'XXX',
        desc: 'Русское порно Сайтрипы с русскими актрисами (HD Video)',
      },
      {
        id: '143',
        cat: 'XXX',
        desc: 'Русское порно Русские Порноролики Разное',
      },
      {
        id: '139',
        cat: 'XXX',
        desc: 'Русское порно Русское любительское видео',
      },
      { id: '240', cat: 'XXX', desc: 'Японское порно' },
      {
        id: '243',
        cat: 'XXX',
        desc: 'Русское порно Паки японских фильмов и сайтрипов',
      },
      {
        id: '242',
        cat: 'XXX',
        desc: 'Русское порно Японские фильмы и сайтрипы (DVD и HD Video)',
      },
      {
        id: '241',
        cat: 'XXX',
        desc: 'Русское порно Японские фильмы и сайтрипы',
      },
      {
        id: '191',
        cat: 'XXX',
        desc: 'Эротические студии, фото и журналы',
      },
      {
        id: '192',
        cat: 'XXX',
        desc: 'Эротические студии Эротические студии (видео)',
      },
      {
        id: '232',
        cat: 'XXX',
        desc: 'Эротические студии Met-Art &amp;MetModels ',
      },
      {
        id: '233',
        cat: 'XXX',
        desc: 'Эротические студии Эротические студии Разное',
      },
      {
        id: '247',
        cat: 'XXX',
        desc: 'Эротические студии Паки сайтрипов эротических студий',
      },
      {
        id: '220',
        cat: 'XXX',
        desc: 'Эротические студии Любительское фото',
      },
      {
        id: '248',
        cat: 'XXX',
        desc: 'Эротические студии Подборки по актрисам',
      },
      {
        id: '212',
        cat: 'XXX',
        desc: 'Эротические студии Подборки сетов',
      },
      {
        id: '202',
        cat: 'XXX',
        desc: 'Эротические студии Тематическое и нетрадиционное фото',
      },
      { id: '249', cat: 'XXX', desc: 'Эротические студии Журналы' },
      { id: '250', cat: 'XXX', desc: 'Порноигры' },
      {
        id: '251',
        cat: 'XXX',
        desc: 'Порноигры Игры: основной подраздел',
      },
      {
        id: '252',
        cat: 'XXX',
        desc: 'Порноигры Игры: визуальные новеллы',
      },
      { id: '256', cat: 'XXX', desc: 'Порноигры Игры: ролевые' },
      { id: '255', cat: 'XXX', desc: 'Порноигры Игры и Софт: Анимация' },
      {
        id: '254',
        cat: 'XXX',
        desc: 'Порноигры Игры: В разработке и Демо (основной подраздел)',
      },
      {
        id: '253',
        cat: 'XXX',
        desc: 'Порноигры Игры: В разработке и Демо (ролевые)',
      },
      { id: '119', cat: 'XXX', desc: 'Нетрадиционное порно' },
      {
        id: '130',
        cat: 'XXX',
        desc: 'Нетрадиционное порно Транссексуалы',
      },
      { id: '134', cat: 'XXX', desc: 'Нетрадиционное порно Бисексуалы' },
      { id: '221', cat: 'XXX', desc: 'Нетрадиционное порно БДСМ' },
      {
        id: '131',
        cat: 'XXX',
        desc: 'Нетрадиционное порно Женское доминирование и страпон',
      },
      {
        id: '236',
        cat: 'XXX',
        desc: 'Нетрадиционное порно Подглядывание',
      },
      {
        id: '128',
        cat: 'XXX',
        desc: 'Нетрадиционное порно Фистинг и дилдо',
      },
      { id: '237', cat: 'XXX', desc: 'Нетрадиционное порно Беременные' },
      { id: '120', cat: 'XXX', desc: 'Нетрадиционное порно Буккаке' },
      {
        id: '135',
        cat: 'XXX',
        desc: 'Нетрадиционное порно Мочеиспускание',
      },
      { id: '188', cat: 'XXX', desc: 'Нетрадиционное порно Фетиш' },
      { id: '234', cat: 'XXX', desc: 'Нетрадиционное порно Дефекация' },
      { id: '222', cat: 'XXX', desc: 'Гей-порно' },
      {
        id: '223',
        cat: 'XXX',
        desc: 'Гей-порно Полнометражные гей-фильмы',
      },
      {
        id: '224',
        cat: 'XXX',
        desc: 'Гей-порно Полнометражные азиатские гей-фильмы',
      },
      {
        id: '225',
        cat: 'XXX',
        desc: 'Гей-порно Классические гей-фильмы (до 1990 года)',
      },
      {
        id: '230',
        cat: 'XXX',
        desc: 'Гей-порно Гей-фильмы в высоком качестве (DVD и HD)',
      },
      {
        id: '231',
        cat: 'XXX',
        desc: 'Гей-порно Азиатские гей-фильмы в высоком качестве (DVD и HD)',
      },
      {
        id: '235',
        cat: 'XXX',
        desc: 'Гей-порно ПАКи гей-роликов и сайтрипов',
      },
      {
        id: '238',
        cat: 'XXX',
        desc: 'Гей-порно Гей-ролики в высоком качестве (HD Video)',
      },
      { id: '197', cat: 'Other', desc: 'Повторы и поглощенные раздачи' },
    ],
    modes: { search: ['q'], 'tv-search': ['q'], 'movie-search': ['q'] },
  },
  settings: [
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    {
      name: 'sort',
      type: 'select',
      label: 'Sort requested from site',
      default: '1',
      options: { '1': 'created', '2': 'title', '7': 'size', '10': 'seeders' },
    },
    {
      name: 'type',
      type: 'select',
      label: 'Order requested from site',
      default: '2',
      options: { '1': 'asc', '2': 'desc' },
    },
  ],
  login: {
    path: 'login.php',
    method: 'form',
    form: 'form[action="login.php"]',
    inputs: {
      login_username: '{{ .Config.username }}',
      login_password: '{{ .Config.password }}',
      autologin: 1,
    },
    error: [{ selector: 'table.error' }],
    test: {
      path: 'index.php',
      selector: 'a[href="./login.php?logout=1"]',
    },
  },
  search: {
    paths: [{ path: 'tracker.php' }],
    keywordsfilters: [
      { name: 'diacritics', args: 'replace' },
      { name: 're_replace', args: ['(?i)\\bS0*(\\d+)\\b', 'сезон $1'] },
      {
        name: 're_replace',
        args: ['(?i)\\bS0*(\\d+)E0*(\\d+)\\b', 'сезон $1 серии $2'],
      },
    ],
    inputs: {
      $raw: '{{ if .Categories }}{{ range .Categories }}f[]={{.}}&{{end}}{{else}}f[]=-1{{end}}',
      prev_allw: 1,
      prev_a: 0,
      prev_dla: 0,
      prev_dlc: 0,
      prev_dld: 0,
      prev_dlw: 0,
      prev_my: 0,
      prev_new: 0,
      prev_sd: 0,
      prev_da: 1,
      prev_dc: 0,
      prev_df: 1,
      prev_ds: 0,
      prev_tor_type: 0,
      o: '{{ .Config.sort }}',
      s: '{{ .Config.type }}',
      dc: 0,
      df: 1,
      da: 1,
      ds: 0,
      tm: -1,
      sns: -1,
      srg: -1,
      nm: '{{ .Keywords }}',
      pn: '',
      allw: 0,
    },
    rows: { selector: 'tr[id^="tor_"]:has(a[href^="./dl.php?id="])' },
    fields: {
      category: {
        selector: 'a.gen',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'f' }],
      },
      title: { selector: 'a[data-topic_id]' },
      details: { selector: 'a[data-topic_id]', attribute: 'href' },
      download: {
        selector: 'a[href^="./dl.php?id="]',
        attribute: 'href',
      },
      magnet: {
        optional: true,
        selector: 'a[href^="magnet:?xt="]',
        attribute: 'href',
      },
      size: { selector: 'td:nth-child(6) > u' },
      seeders: { selector: 'td.seedmed > b' },
      leechers: { selector: 'td.leechmed > b' },
      grabs: { selector: 'td:nth-child(9)' },
      date: { selector: 'td:last-child > u' },
      downloadvolumefactor: { text: 1 },
      uploadvolumefactor: { text: 1 },
    },
  },
  source: 'jackett',
};
