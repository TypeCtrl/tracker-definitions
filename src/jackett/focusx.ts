import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'focusx',
  name: 'FocusX',
  description: 'FocusX is a RUSSIAN Public torrent site for MOVIES and TV',
  language: 're-RU',
  type: 'public',
  encoding: 'UTF-8',
  links: ['https://focu.sx/'],
  caps: {
    categorymappings: [
      { id: '111', cat: 'Movies', desc: '1922' },
      { id: '135', cat: 'Movies', desc: 'Анон' },
      { id: '168', cat: 'Movies', desc: 'Воспитательница' },
      { id: '10', cat: 'Movies', desc: 'Мёд в голове' },
      { id: '16', cat: 'Movies', desc: 'Малыш' },
      { id: '18', cat: 'Movies', desc: 'Копенгаген' },
      { id: '19', cat: 'Movies', desc: 'Заброшенный' },
      {
        id: '38',
        cat: 'Movies',
        desc: 'Звёздные войны: Эпизод 7 Пробуждение силы',
      },
      { id: '42', cat: 'Movies', desc: 'В лабиринте молчания' },
      { id: '44', cat: 'Movies', desc: 'Женщина в золотом' },
      { id: '45', cat: 'Movies', desc: 'Падение Лондона' },
      { id: '46', cat: 'Movies', desc: 'Высотка' },
      {
        id: '49',
        cat: 'Movies',
        desc: 'Капитан Америка: Гражданская война',
      },
      { id: '50', cat: 'Movies', desc: 'Рыцарь кубков' },
      { id: '54', cat: 'Movies', desc: 'Охотник: Война Зимы' },
      { id: '57', cat: 'Movies', desc: 'Портниха' },
      {
        id: '60',
        cat: 'Movies',
        desc: 'Бэтмен против Супермена: На заре справедливости',
      },
      { id: '61', cat: 'Movies', desc: 'Комета' },
      { id: '64', cat: 'Movies', desc: 'Зоотопия' },
      { id: '65', cat: 'Movies', desc: 'В твоих глазах' },
      { id: '66', cat: 'Movies', desc: 'Люди Икс: Апокалипсис' },
      { id: '67', cat: 'Movies', desc: 'Потерянный Валентин' },
      { id: '70', cat: 'Movies', desc: 'Припаркованные' },
      { id: '71', cat: 'Movies', desc: 'Легенда о Тарзане' },
      { id: '72', cat: 'Movies', desc: 'Пока я не исчезну' },
      { id: '73', cat: 'Movies', desc: 'Механик: Воскрешение' },
      { id: '74', cat: 'Movies', desc: 'Варкрафт' },
      { id: '76', cat: 'Movies', desc: 'Гнилые кварталы' },
      { id: '80', cat: 'Movies', desc: 'Приятные вибрации' },
      { id: '83', cat: 'Movies', desc: 'Возмущение' },
      { id: '84', cat: 'Movies', desc: 'Трейнспоттинг (На игле)' },
      { id: '85', cat: 'Movies', desc: "Тысячу раз 'спокойной ночи'" },
      { id: '90', cat: 'Movies', desc: 'Дангал' },
      { id: '100', cat: 'TV', desc: 'Смертельное оружие' },
      { id: '101', cat: 'TV', desc: 'Гавайи 5-0' },
      { id: '102', cat: 'TV', desc: 'Черный Список' },
      { id: '103', cat: 'TV', desc: 'Нелюди' },
      { id: '106', cat: 'TV', desc: 'Одаренные' },
      { id: '107', cat: 'TV', desc: 'Теория большого взрыва' },
      { id: '108', cat: 'TV', desc: 'Ходячие мертвецы' },
      { id: '109', cat: 'TV', desc: 'Хроники Шаннары' },
      { id: '110', cat: 'TV', desc: 'Порох' },
      { id: '112', cat: 'TV', desc: 'Субура' },
      { id: '115', cat: 'TV', desc: 'Безбожники' },
      { id: '116', cat: 'TV', desc: 'Секретные Материалы' },
      { id: '118', cat: 'TV', desc: 'Охотник за разумом' },
      { id: '119', cat: 'TV', desc: 'Алиенист' },
      { id: '120', cat: 'TV', desc: 'Ординатор' },
      { id: '121', cat: 'TV', desc: 'Уэйко' },
      { id: '122', cat: 'TV', desc: 'Американская история преступлений' },
      { id: '124', cat: 'TV', desc: 'Бельвью' },
      { id: '126', cat: 'TV', desc: 'Видоизменённый углерод' },
      { id: '128', cat: 'TV', desc: 'Здесь и Сейчас' },
      { id: '129', cat: 'TV', desc: 'Взлет' },
      { id: '130', cat: 'TV', desc: 'Инстинкт' },
      { id: '131', cat: 'TV', desc: 'Стартап' },
      { id: '133', cat: 'TV', desc: 'Террор' },
      { id: '136', cat: 'TV', desc: 'Мир Дикого Запада' },
      { id: '138', cat: 'TV', desc: 'В пустыне смерти' },
      { id: '139', cat: 'TV', desc: 'Дождь' },
      { id: '140', cat: 'TV', desc: 'Страйк' },
      { id: '141', cat: 'TV', desc: 'Безопасность' },
      { id: '143', cat: 'TV', desc: 'Подлый пит' },
      { id: '144', cat: 'TV', desc: 'Голиаф' },
      { id: '146', cat: 'TV', desc: 'Весьма Английский Скандал' },
      { id: '147', cat: 'TV', desc: 'Королева Сахара' },
      { id: '155', cat: 'TV', desc: 'Наследники' },
      { id: '156', cat: 'TV', desc: 'Джек Райан' },
      {
        id: '158',
        cat: 'TV',
        desc: 'Леденящие кровь приключения Сабрины',
      },
      { id: '161', cat: 'TV', desc: 'Частные сыщики' },
      { id: '162', cat: 'TV', desc: 'Изнанка дела' },
      { id: '163', cat: 'TV', desc: 'Наркос: Мексика' },
      { id: '164', cat: 'TV', desc: 'Возвращение домой' },
      { id: '165', cat: 'TV', desc: 'Метод Комински' },
      { id: '166', cat: 'TV', desc: 'Элита' },
      { id: '167', cat: 'TV', desc: 'Грязный Джон' },
      { id: '169', cat: 'TV', desc: 'Романовы' },
      { id: '170', cat: 'TV', desc: 'Страна приливов' },
      { id: '171', cat: 'TV', desc: 'Тюрьма Оз' },
      { id: '172', cat: 'TV', desc: 'Смертельный класс' },
      { id: '173', cat: 'TV', desc: 'Парфюм' },
      { id: '174', cat: 'TV', desc: 'Цветочный дом' },
      { id: '175', cat: 'TV', desc: 'Каратель' },
      { id: '176', cat: 'TV', desc: 'Матрёшка' },
      { id: '177', cat: 'TV', desc: 'Берлинская резидентура' },
      { id: '178', cat: 'TV', desc: 'Настоящий Детектив' },
      { id: '179', cat: 'TV', desc: 'Половое Просвещение' },
      { id: '180', cat: 'TV', desc: 'АКАДЕМИЯ АМБРЕЛЛА' },
      { id: '181', cat: 'TV', desc: 'Сорвиголова' },
      { id: '182', cat: 'TV', desc: 'Мистер Посредник' },
      { id: '9', cat: 'TV', desc: 'Иерихон' },
      { id: '11', cat: 'TV', desc: '11-22-63' },
      { id: '12', cat: 'TV', desc: 'Апокалипсис: Первая мировая война' },
      { id: '13', cat: 'TV', desc: 'Смерть в раю' },
      { id: '14', cat: 'TV', desc: 'Джереми Кларксон: Военные истории' },
      { id: '15', cat: 'TV', desc: 'Чёрные паруса' },
      { id: '17', cat: 'TV', desc: 'Карточный домик' },
      { id: '37', cat: 'TV', desc: 'Джек Айриш' },
      { id: '39', cat: 'TV', desc: 'Чужестранка' },
      { id: '40', cat: 'TV', desc: 'Девушка по вызову' },
      { id: '41', cat: 'TV', desc: 'Джереми Кларксон: Триллер' },
      { id: '43', cat: 'TV', desc: 'Игра престолов' },
      { id: '47', cat: 'TV', desc: 'Острые козырьки' },
      { id: '48', cat: 'TV', desc: 'Странная парочка' },
      { id: '51', cat: 'TV', desc: 'Проповедник' },
      { id: '52', cat: 'TV', desc: 'Изгой' },
      { id: '53', cat: 'TV', desc: 'Рэй Донован' },
      { id: '55', cat: 'TV', desc: 'Оранжевый - хит сезона' },
      { id: '56', cat: 'TV', desc: 'Бесстыдники' },
      { id: '58', cat: 'TV', desc: 'Мистер Робот' },
      { id: '59', cat: 'TV', desc: 'Валландер' },
      { id: '62', cat: 'TV', desc: 'Штамм' },
      { id: '63', cat: 'TV', desc: 'Куорри' },
      { id: '68', cat: 'TV', desc: 'Бесстыжие' },
      { id: '69', cat: 'TV', desc: 'Нарко' },
      { id: '75', cat: 'TV', desc: 'Все схвачено' },
      { id: '77', cat: 'TV', desc: 'Граница' },
      { id: '79', cat: 'TV', desc: 'Бош' },
      { id: '81', cat: 'TV', desc: 'Викинги' },
      { id: '82', cat: 'TV', desc: 'Салем' },
      { id: '86', cat: 'TV', desc: 'Кровавая Гонка' },
      { id: '87', cat: 'TV', desc: 'Сеньор Авила' },
      { id: '88', cat: 'TV', desc: 'Стрелок' },
      { id: '89', cat: 'TV', desc: 'Миднайт Техас' },
      { id: '91', cat: 'TV', desc: 'Утиные Истории' },
      { id: '96', cat: 'TV', desc: 'Двойка' },
      { id: '97', cat: 'TV', desc: 'Тик-герой' },
    ],
    modes: { search: ['q'] },
  },
  settings: [],
  search: {
    paths: [
      {
        path:
          '{{if .Keywords}}tracker/search?freeleech=0&query={{.Keywords}}{{else}}tracker/{{end}}',
        followredirect: true,
      },
    ],
    rows: { selector: 'ol.torrentListItems li.torrentListItem' },
    fields: {
      title: { selector: 'div.name div.titleText h3 a' },
      details: {
        selector: 'div.name div.titleText h3 a',
        attribute: 'href',
        filters: [{ name: 'prepend', args: '{{ .Config.sitelink }}' }],
      },
      category: {
        selector: 'div.torrentCategory a',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'category_id' }],
      },
      download: {
        selector: 'div.download a',
        attribute: 'href',
        filters: [{ name: 'prepend', args: '{{ .Config.sitelink }}' }],
      },
      magnet: {
        selector: 'div.download a[href^="magnet:?"]',
        attribute: 'href',
      },
      date: {
        selector: 'div.name div.titleText div.secondRow div span',
        attribute: 'title',
        filters: [
          { name: 'replace', args: [' в ', ' '] },
          { name: 'replace', args: ['янв', 'Jan'] },
          { name: 'replace', args: ['фев', 'Feb'] },
          { name: 'replace', args: ['мар', 'Mar'] },
          { name: 'replace', args: ['апр', 'Apr'] },
          { name: 'replace', args: ['май', 'May'] },
          { name: 'replace', args: ['июн', 'Jun'] },
          { name: 'replace', args: ['июл', 'Jul'] },
          { name: 'replace', args: ['авг', 'Aug'] },
          { name: 'replace', args: ['сен', 'Sep'] },
          { name: 'replace', args: ['окт', 'Oct'] },
          { name: 'replace', args: ['ноя', 'Nov'] },
          { name: 'replace', args: ['дек', 'Dec'] },
          { name: 'dateparse', args: '2 Jan 2006 15:04' },
        ],
      },
      size: {
        selector: 'div.size',
        filters: [
          { name: 'replace', args: ['.', ''] },
          { name: 'replace', args: [',', '.'] },
          { name: 'replace', args: ['ТБ', 'TB'] },
          { name: 'replace', args: ['ГБ', 'GB'] },
          { name: 'replace', args: ['МБ', 'MB'] },
          { name: 'replace', args: ['КБ', 'KB'] },
        ],
      },
      grabs: { selector: 'div.snatched' },
      seeders: { selector: 'div.seeders' },
      leechers: { selector: 'div.leechers' },
      downloadvolumefactor: {
        case: {
          'div.name div.titleText h3 span:contains("Золото")': '0',
          '*': '1',
        },
      },
      uploadvolumefactor: { text: '1' },
    },
  },
  source: 'jackett',
};
