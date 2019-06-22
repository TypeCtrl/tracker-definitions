import { TrackerDefinition } from '../definition-interface';

export const definition: TrackerDefinition = {
  site: 'ebooks-shares',
  name: 'Ebooks-Shares',
  description: 'Ebooks-Shares is a Private Torrent Tracker for EBOOKS / AUDIOBOOKS',
  language: 'en-US',
  type: 'private',
  encoding: 'UTF-8',
  links: ['https://ebooks-shares.org/'],
  caps: {
    categorymappings: [
      { id: '274', cat: 'Audio/Audiobook', desc: 'Audio: Poetry' },
      { id: '1', cat: 'Audio/Audiobook', desc: 'Audio: Adventure' },
      {
        id: '2',
        cat: 'Audio/Audiobook',
        desc: 'Audio: Radio Programs ie Dramas, Talk',
      },
      { id: '3', cat: 'Audio/Audiobook', desc: 'Audio: Non English' },
      {
        id: '42',
        cat: 'Audio/Audiobook',
        desc: 'Audio: Biography/Memoirs',
      },
      { id: '4', cat: 'Audio/Audiobook', desc: 'Audio: Business' },
      { id: '5', cat: 'Audio/Audiobook', desc: 'Audio: Childrens' },
      { id: '7', cat: 'Audio/Audiobook', desc: 'Audio: Classics' },
      { id: '41', cat: 'Audio/Audiobook', desc: 'Audio: Comedy' },
      {
        id: '9',
        cat: 'Audio/Audiobook',
        desc: 'Audio: Crime/Mystery/Thriller',
      },
      { id: '10', cat: 'Audio/Audiobook', desc: 'Audio: Factual' },
      {
        id: '11',
        cat: 'Audio/Audiobook',
        desc: 'Audio: Graphic Audio Books',
      },
      {
        id: '43',
        cat: 'Audio/Audiobook',
        desc: 'Audio: Historical Fiction',
      },
      {
        id: '12',
        cat: 'Audio/Audiobook',
        desc: 'Audio: History/Military',
      },
      { id: '269', cat: 'Audio/Audiobook', desc: 'Audio: History' },
      { id: '14', cat: 'Audio/Audiobook', desc: 'Audio: Horror' },
      { id: '15', cat: 'Audio/Audiobook', desc: 'Audio: Medical' },
      { id: '16', cat: 'Audio/Audiobook', desc: 'Audio: Music' },
      { id: '45', cat: 'Audio/Audiobook', desc: 'Audio: Non-Fict/Ref' },
      { id: '46', cat: 'Audio/Audiobook', desc: 'Audio: Novels' },
      { id: '17', cat: 'Audio/Audiobook', desc: 'Audio: General' },
      {
        id: '22',
        cat: 'Audio/Audiobook',
        desc: 'Audio: Philosophy/Belief',
      },
      { id: '23', cat: 'Audio/Audiobook', desc: 'Audio: Romance' },
      { id: '24', cat: 'Audio/Audiobook', desc: 'Audio: Sci-Fi/Fantasy' },
      {
        id: '25',
        cat: 'Audio/Audiobook',
        desc: 'Audio: Self-Improvement',
      },
      {
        id: '26',
        cat: 'Audio/Audiobook',
        desc: 'Audio: Mod. Scholar/TTC',
      },
      { id: '27', cat: 'Audio/Audiobook', desc: 'Audio: Travel' },
      { id: '33', cat: 'Audio/Audiobook', desc: 'Audio: Tutorials' },
      { id: '34', cat: 'Audio/Audiobook', desc: 'Audio: Western' },
      { id: '35', cat: 'Audio/Audiobook', desc: 'Audio: Young Adult' },
      { id: '275', cat: 'Audio/Audiobook', desc: 'Audio: Language' },
      {
        id: '276',
        cat: 'Audio/Audiobook',
        desc: 'Audio: Military Fiction',
      },
      { id: '299', cat: 'Audio/Audiobook', desc: 'Audio: Magazines' },
      { id: '301', cat: 'Audio/Audiobook', desc: 'Audio: Collections' },
      { id: '47', cat: 'Books/Ebook', desc: "Children's: Adventure" },
      { id: '48', cat: 'Books/Ebook', desc: "Children's: Novels" },
      { id: '49', cat: 'Books/Ebook', desc: "Children's: Collections" },
      { id: '50', cat: 'Books/Ebook', desc: "Children's: Educational" },
      { id: '51', cat: 'Books/Ebook', desc: "Children's: Games" },
      { id: '52', cat: 'Books/Ebook', desc: "Children's: General" },
      {
        id: '283',
        cat: 'Books/Ebook',
        desc: "Children's: Sci-Fi/Fantasy",
      },
      { id: '284', cat: 'Books/Ebook', desc: "Children's: Mystery" },
      {
        id: '286',
        cat: 'Books/Ebook',
        desc: "Children's: Early Years / Picture",
      },
      { id: '295', cat: 'Books/Ebook', desc: "Children's: Nonfiction" },
      {
        id: '296',
        cat: 'Books/Ebook',
        desc: "Children's: Leveled / Decodable Readers",
      },
      { id: '288', cat: 'Books/Ebook', desc: 'Collections: Same Author' },
      { id: '289', cat: 'Books/Ebook', desc: 'Collections: Same Series' },
      { id: '291', cat: 'Books/Ebook', desc: 'Collections: Fiction' },
      { id: '292', cat: 'Books/Ebook', desc: 'Collections: Non Fiction' },
      { id: '220', cat: 'Books/Comics', desc: 'Comics: Archie' },
      {
        id: '222',
        cat: 'Books/Comics',
        desc: 'Comics: Books &amp; Mags - Comics',
      },
      {
        id: '225',
        cat: 'Books/Comics',
        desc: 'Comics: ComicStrip Collection',
      },
      { id: '228', cat: 'Books/Comics', desc: 'Comics: DC' },
      { id: '244', cat: 'Books/Comics', desc: 'Comics: Manga' },
      { id: '245', cat: 'Books/Comics', desc: 'Comics: Marvel' },
      {
        id: '258',
        cat: 'Books/Comics',
        desc: 'Comics: Other Pub - Humor/Satire',
      },
      {
        id: '262',
        cat: 'Books/Comics',
        desc: 'Comics: Other Pub - Educational',
      },
      {
        id: '264',
        cat: 'Books/Comics',
        desc: 'Comics: Independent Publishers',
      },
      { id: '265', cat: 'Books/Comics', desc: 'Comics: General/Misc' },
      { id: '281', cat: 'Books/Technical', desc: 'Computer: Tutorials' },
      {
        id: '38',
        cat: 'Books/Technical',
        desc: 'Computer: Applications',
      },
      { id: '55', cat: 'Books/Technical', desc: 'Computer: Gaming ' },
      { id: '56', cat: 'Books/Technical', desc: 'Computer: General' },
      { id: '57', cat: 'Books/Technical', desc: 'Computer: Graphics' },
      {
        id: '58',
        cat: 'Books/Technical',
        desc: 'Computer: Internet-WWW',
      },
      { id: '59', cat: 'Books/Technical', desc: 'Computer: Networking' },
      { id: '60', cat: 'Books/Technical', desc: 'Computer: OS/Mac' },
      { id: '61', cat: 'Books/Technical', desc: 'Computer: OS/Other' },
      { id: '62', cat: 'Books/Technical', desc: 'Computer: OS/Windows' },
      {
        id: '63',
        cat: 'Books/Technical',
        desc: 'Computer: Programming ',
      },
      { id: '66', cat: 'Books/Ebook', desc: 'Doc/Vid/Tut: Computer' },
      { id: '67', cat: 'Books/Ebook', desc: 'Doc/Vid/Tut: Crafts' },
      { id: '68', cat: 'Books/Ebook', desc: 'Doc/Vid/Tut: Educational' },
      { id: '69', cat: 'Books/Ebook', desc: 'Doc/Vid/Tut: General' },
      { id: '70', cat: 'Books/Ebook', desc: 'Doc/Vid/Tut: History' },
      {
        id: '71',
        cat: 'Books/Ebook',
        desc: 'Doc/Vid/Tut: Medical/Health',
      },
      { id: '72', cat: 'Books/Ebook', desc: 'Doc/Vid/Tut: Military' },
      { id: '73', cat: 'Books/Ebook', desc: 'Doc/Vid/Tut: Modelling' },
      { id: '74', cat: 'Books/Ebook', desc: 'Doc/Vid/Tut: Sciences' },
      {
        id: '75',
        cat: 'Books/Ebook',
        desc: 'Doc/Vid/Tut: Transportation',
      },
      { id: '76', cat: 'Books/Ebook', desc: 'Doc/Vid/Tut: Woodworking' },
      {
        id: '287',
        cat: 'Books/Ebook',
        desc: 'Doc/Vid/Tut: Martial Arts/Boxing/Wrestling',
      },
      { id: '121', cat: 'Books/Ebook', desc: 'Educational: Arts' },
      {
        id: '122',
        cat: 'Books/Ebook',
        desc: 'Educational: Astronomy/Cosmology',
      },
      {
        id: '123',
        cat: 'Books/Ebook',
        desc: 'Educational: Biology &amp; Genetics',
      },
      { id: '124', cat: 'Books/Ebook', desc: 'Educational: Chemistry' },
      {
        id: '125',
        cat: 'Books/Ebook',
        desc: 'Educational: Culture/Languages',
      },
      {
        id: '126',
        cat: 'Books/Ebook',
        desc: 'Educational: Earth Sciences',
      },
      {
        id: '127',
        cat: 'Books/Ebook',
        desc: 'Educational:  Educational',
      },
      {
        id: '128',
        cat: 'Books/Ebook',
        desc: 'Educational: Engineering &amp; Technology ',
      },
      {
        id: '129',
        cat: 'Books/Ebook',
        desc: 'Educational: Environmental Studies',
      },
      {
        id: '130',
        cat: 'Books/Ebook',
        desc: 'Educational: General Science Titles',
      },
      {
        id: '131',
        cat: 'Books/Ebook',
        desc: 'Educational: Literature / Writing',
      },
      {
        id: '132',
        cat: 'Books/Ebook',
        desc: 'Educational: Mathematics and Statistics',
      },
      {
        id: '133',
        cat: 'Books/Ebook',
        desc: 'Educational: Medical Texts',
      },
      {
        id: '134',
        cat: 'Books/Ebook',
        desc: 'Educational: Military History',
      },
      {
        id: '135',
        cat: 'Books/Ebook',
        desc: 'Educational: Non-Military History',
      },
      {
        id: '136',
        cat: 'Books/Ebook',
        desc: 'Educational: Paleontology',
      },
      { id: '137', cat: 'Books/Ebook', desc: 'Educational: Physics' },
      { id: '138', cat: 'Books/Ebook', desc: 'Educational: Psychology' },
      {
        id: '139',
        cat: 'Books/Ebook',
        desc: 'Educational: Student Reference',
      },
      {
        id: '297',
        cat: 'Books/Ebook',
        desc: 'Educational: Life Sciences/Evolution/Human ',
      },
      { id: '77', cat: 'Books/Ebook', desc: 'Fiction: Adventure' },
      { id: '78', cat: 'Books/Ebook', desc: 'Fiction: Classics' },
      { id: '79', cat: 'Books/Ebook', desc: 'Fiction: Collections' },
      {
        id: '80',
        cat: 'Books/Ebook',
        desc: 'Fiction: Comedy/Humorous  ',
      },
      {
        id: '81',
        cat: 'Books/Ebook',
        desc: 'Fiction: Crime/Mystery/Thriller',
      },
      { id: '302', cat: 'Books/Ebook', desc: 'Fiction: Cozy Mysteries' },
      { id: '82', cat: 'Books/Ebook', desc: 'Fiction: General Fiction' },
      { id: '83', cat: 'Books/Ebook', desc: 'Fiction: Horror' },
      {
        id: '84',
        cat: 'Books/Ebook',
        desc: 'Fiction: Military &amp; Historic',
      },
      { id: '86', cat: 'Books/Ebook', desc: 'Fiction: Romance' },
      { id: '87', cat: 'Books/Ebook', desc: 'Fiction: Sci-Fi/Fantasy' },
      { id: '88', cat: 'Books/Ebook', desc: 'Fiction: Westerns' },
      { id: '270', cat: 'Books/Ebook', desc: 'Fiction: Historical ' },
      { id: '312', cat: 'Books/Ebook', desc: 'Fiction: Various Authors' },
      { id: '303', cat: 'Books/Ebook', desc: 'Fiction: Poetry' },
      { id: '140', cat: 'Books/Ebook', desc: 'Hobby/Pastime: Art' },
      { id: '141', cat: 'Books/Ebook', desc: 'Hobby/Pastime: Boating' },
      {
        id: '142',
        cat: 'Books/Ebook',
        desc: 'Hobby/Pastime: Crafts/Knitting/Sewing',
      },
      {
        id: '143',
        cat: 'Books/Ebook',
        desc: 'Hobby/Pastime: Food &amp; Drink',
      },
      {
        id: '144',
        cat: 'Books/Ebook',
        desc: 'Hobby/Pastime: Games/RPG/Gaming',
      },
      {
        id: '145',
        cat: 'Books/Ebook',
        desc: 'Hobby/Pastime: General Pastimes',
      },
      {
        id: '146',
        cat: 'Books/Ebook',
        desc: 'Hobby/Pastime: Graphic Arts and Design',
      },
      {
        id: '147',
        cat: 'Books/Ebook',
        desc: 'Hobby/Pastime: Health/Lifestyle',
      },
      {
        id: '148',
        cat: 'Books/Ebook',
        desc: 'Hobby/Pastime: Home/Gardening',
      },
      {
        id: '149',
        cat: 'Books/Ebook',
        desc: 'Hobby/Pastime: Metalworking',
      },
      { id: '150', cat: 'Books/Ebook', desc: 'Hobby/Pastime: Modelling' },
      {
        id: '151',
        cat: 'Books/Ebook',
        desc: 'Hobby/Pastime: Pets/Vet Science',
      },
      {
        id: '152',
        cat: 'Books/Ebook',
        desc: 'Hobby/Pastime: Photography',
      },
      {
        id: '153',
        cat: 'Books/Ebook',
        desc: 'Hobby/Pastime: Quiz and Crossword Books',
      },
      { id: '154', cat: 'Books/Ebook', desc: 'Hobby/Pastime: Sports' },
      { id: '155', cat: 'Books/Ebook', desc: 'Hobby/Pastime: Travel' },
      {
        id: '156',
        cat: 'Books/Ebook',
        desc: 'Hobby/Pastime: Woodworking',
      },
      { id: '157', cat: 'Books/Ebook', desc: 'Language Learn: Arabic' },
      { id: '158', cat: 'Books/Ebook', desc: 'Language Learn: Chinese' },
      { id: '159', cat: 'Books/Ebook', desc: 'Language Learn: English' },
      { id: '160', cat: 'Books/Ebook', desc: 'Language Learn: French' },
      { id: '161', cat: 'Books/Ebook', desc: 'Language Learn: German' },
      { id: '162', cat: 'Books/Ebook', desc: 'Language Learn: Italian' },
      { id: '163', cat: 'Books/Ebook', desc: 'Language Learn: Japanese' },
      { id: '164', cat: 'Books/Ebook', desc: 'Language Learn: Latin' },
      {
        id: '165',
        cat: 'Books/Ebook',
        desc: 'Language Learn: Nordic Lang',
      },
      {
        id: '166',
        cat: 'Books/Ebook',
        desc: 'Language Learn: Oriental Lang',
      },
      { id: '167', cat: 'Books/Ebook', desc: 'Language Learn: Russian' },
      { id: '168', cat: 'Books/Ebook', desc: 'Language Learn: Spanish' },
      {
        id: '169',
        cat: 'Books/Ebook',
        desc: 'Language Learn: Other Lang',
      },
      {
        id: '310',
        cat: 'Books/Magazines',
        desc: 'Magazines: Woodworking',
      },
      {
        id: '311',
        cat: 'Books/Magazines',
        desc: 'Magazines: Sewing, Knitting and Quilting',
      },
      { id: '170', cat: 'Books/Magazines', desc: 'Magazines : Computer' },
      {
        id: '171',
        cat: 'Books/Magazines',
        desc: 'Magazines: Current Events',
      },
      {
        id: '172',
        cat: 'Books/Magazines',
        desc: 'Magazines: Business/Finance ',
      },
      {
        id: '173',
        cat: 'Books/Magazines',
        desc: 'Magazines: Electronics',
      },
      {
        id: '174',
        cat: 'Books/Magazines',
        desc: 'Magazines: General/Misc',
      },
      { id: '175', cat: 'Books/Magazines', desc: 'Magazines: Military' },
      {
        id: '176',
        cat: 'Books/Magazines',
        desc: 'Magazines: Photography',
      },
      { id: '177', cat: 'Books/Magazines', desc: 'Magazines: Sciences ' },
      { id: '178', cat: 'Books/Magazines', desc: 'Magazines: Sports' },
      {
        id: '179',
        cat: 'Books/Magazines',
        desc: 'Magazines: Technology',
      },
      {
        id: '180',
        cat: 'Books/Magazines',
        desc: 'Magazines: Transportation',
      },
      { id: '181', cat: 'Books/Ebook', desc: 'Military: Aircraft' },
      { id: '182', cat: 'Books/Ebook', desc: 'Military: Armour' },
      {
        id: '183',
        cat: 'Books/Ebook',
        desc: 'Military: General Military',
      },
      { id: '184', cat: 'Books/Ebook', desc: 'Military: Miscellaneous' },
      { id: '185', cat: 'Books/Ebook', desc: 'Military: Naval' },
      { id: '186', cat: 'Books/Foreign', desc: 'Non English Bks: Dutch' },
      {
        id: '187',
        cat: 'Books/Foreign',
        desc: 'Non English Bks: French',
      },
      {
        id: '188',
        cat: 'Books/Foreign',
        desc: 'Non English Bks: German',
      },
      { id: '189', cat: 'Books/Foreign', desc: 'Non English Bks: Greek' },
      {
        id: '190',
        cat: 'Books/Foreign',
        desc: 'Non English Bks: Hungarian',
      },
      {
        id: '191',
        cat: 'Books/Foreign',
        desc: 'Non English Bks: Italian',
      },
      {
        id: '192',
        cat: 'Books/Foreign',
        desc: 'Non English Bks: Japanese',
      },
      { id: '194', cat: 'Books/Foreign', desc: 'Non English Bks: Other' },
      {
        id: '193',
        cat: 'Books/Foreign',
        desc: 'Non English Bks: Polish',
      },
      {
        id: '195',
        cat: 'Books/Foreign',
        desc: 'Non English Bks: Romanian',
      },
      {
        id: '196',
        cat: 'Books/Foreign',
        desc: 'Non English Bks: Russian',
      },
      {
        id: '197',
        cat: 'Books/Foreign',
        desc: 'Non English Bks: Scandinavian',
      },
      {
        id: '198',
        cat: 'Books/Foreign',
        desc: 'Non English Bks: Serbian',
      },
      {
        id: '199',
        cat: 'Books/Foreign',
        desc: 'Non English Bks: Spanish',
      },
      {
        id: '89',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Agricultural',
      },
      {
        id: '90',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Alt. Therapies',
      },
      {
        id: '95',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Architecture',
      },
      {
        id: '91',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Auto &amp; Repair',
      },
      { id: '92', cat: 'Books/Ebook', desc: 'Non Fict/Ref: Aviation' },
      {
        id: '94',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Biographies and Memoirs',
      },
      {
        id: '96',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Business/Finance',
      },
      {
        id: '97',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Comedy/Humorous',
      },
      { id: '98', cat: 'Books/Ebook', desc: 'Non Fict/Ref: Crime' },
      { id: '99', cat: 'Books/Ebook', desc: 'Non Fict/Ref: Criminology' },
      {
        id: '100',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Economics &amp; Math',
      },
      {
        id: '102',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Electronics',
      },
      {
        id: '103',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Enc/Dict/Atlas,s',
      },
      {
        id: '104',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Entertainment',
      },
      {
        id: '105',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: General Ref',
      },
      {
        id: '106',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Geo &amp; Archaeology',
      },
      {
        id: '107',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Journ/Current Affairs ',
      },
      { id: '108', cat: 'Books/Ebook', desc: 'Non Fict/Ref: Legal' },
      {
        id: '109',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Medical/Health',
      },
      { id: '110', cat: 'Books/Ebook', desc: 'Non Fict/Ref: Motorcycle' },
      { id: '111', cat: 'Books/Ebook', desc: 'Non Fict/Ref:  Music' },
      {
        id: '112',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Parenting/Family',
      },
      {
        id: '113',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Philosophy &amp; Belief',
      },
      {
        id: '114',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Literature / Writing',
      },
      {
        id: '115',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Political Science',
      },
      {
        id: '116',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Project Management',
      },
      {
        id: '117',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Self-Improvement',
      },
      {
        id: '118',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Sht Music-Tablatures',
      },
      {
        id: '119',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Sociology/Politics',
      },
      {
        id: '120',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Transportation',
      },
      {
        id: '266',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Technology Books',
      },
      {
        id: '267',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: History Books',
      },
      {
        id: '271',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Collections',
      },
      {
        id: '272',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: DIY (Do It Yourself)',
      },
      {
        id: '273',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Archaeology',
      },
      {
        id: '278',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Conspiracy Theory/UFO/Alien Bk',
      },
      { id: '279', cat: 'Books/Ebook', desc: 'Non Fict/Ref: Psychology' },
      { id: '280', cat: 'Books/Ebook', desc: 'Non Fict/Ref: Education' },
      {
        id: '282',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Martial Arts/Boxing/Wrestling',
      },
      {
        id: '293',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Zoology &amp; Veterinary Science',
      },
      {
        id: '294',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: True Stories',
      },
      {
        id: '300',
        cat: 'Books/Ebook',
        desc: 'Non Fict/Ref: Maritime Books (Building,navig',
      },
      { id: '200', cat: 'Books/Ebook', desc: 'Teens: Collections' },
      { id: '201', cat: 'Books/Ebook', desc: 'Teens: Educational' },
      { id: '202', cat: 'Books/Ebook', desc: 'Teens: Fiction' },
      { id: '203', cat: 'Books/Ebook', desc: 'Teens: Non Fiction' },
      { id: '285', cat: 'Books/Ebook', desc: 'Teens: Sci-Fi/Fantasy' },
      { id: '305', cat: 'Books/Other', desc: 'VIP: Science Fiction' },
      { id: '307', cat: 'Books/Other', desc: 'VIP: Thriller' },
      { id: '306', cat: 'Books/Other', desc: 'VIP: Mystery' },
      { id: '308', cat: 'Books/Other', desc: 'VIP: Crime' },
      { id: '309', cat: 'Books/Other', desc: 'VIP: Fantasy ' },
      { id: '204', cat: 'Books/Other', desc: 'VIP: Collections ' },
      { id: '205', cat: 'Books/Other', desc: 'VIP: Audiobooks' },
      { id: '206', cat: 'Books/Other', desc: 'VIP: Comics' },
      { id: '207', cat: 'Books/Other', desc: 'VIP: Computers' },
      { id: '208', cat: 'Books/Other', desc: 'VIP: Documentaries' },
      { id: '209', cat: 'Books/Other', desc: 'VIP: Educational' },
      { id: '210', cat: 'Books/Other', desc: 'VIP: Fiction' },
      { id: '211', cat: 'Books/Other', desc: 'VIP: Hobby/Craft' },
      { id: '212', cat: 'Books/Other', desc: 'VIP: Literature' },
      { id: '213', cat: 'Books/Other', desc: 'VIP: Medical' },
      { id: '214', cat: 'Books/Other', desc: 'VIP: Military' },
      { id: '215', cat: 'Books/Other', desc: 'VIP: Music' },
      { id: '216', cat: 'Books/Other', desc: 'VIP: Non Fiction' },
      { id: '217', cat: 'Books/Other', desc: 'VIP: Original Content' },
      { id: '218', cat: 'Books/Other', desc: 'VIP: RPG' },
    ],
    modes: { search: ['q'] },
  },
  login: {
    path: 'account-login.php',
    method: 'post',
    inputs: {
      username: '{{ .Config.username }}',
      password: '{{ .Config.password }}',
    },
    error: [{ selector: 'div.panel:contains("Access Denied")' }],
    test: { path: 'index.php' },
  },
  search: {
    paths: [{ path: 'torrents-search.php' }],
    inputs: {
      $raw: '{{range .Categories}}filter_cat[{{.}}]=1&{{end}}',
      search: '{{if .Keywords}}"{{.Keywords}}"{{else}}{{end}}',
      incldead: 0,
      freeleech: 0,
      lang: 0,
    },
    rows: { selector: 'tr.t-row' },
    fields: {
      category: {
        selector: 'a[href^="torrents.php?cat="]',
        attribute: 'href',
        filters: [{ name: 'querystring', args: 'cat' }],
      },
      title: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'title',
      },
      details: {
        selector: 'a[href^="torrents-details.php?id="]',
        attribute: 'href',
      },
      download: {
        selector: 'a[href^="download.php?id="]',
        attribute: 'href',
      },
      seeders: { selector: 'td:nth-child(5)' },
      leechers: { selector: 'td:nth-child(6)' },
      size: { selector: 'td:nth-child(7)' },
      description: {
        selector: 'td:nth-child(8)',
        filters: [{ name: 'prepend', args: 'wait: ' }],
      },
      date: { text: 'now' },
      downloadvolumefactor: {
        case: { 'img[src="images/free.gif"]': 0, '*': '1' },
      },
      uploadvolumefactor: { case: { '*': '1' } },
    },
  },
  source: 'jackett',
};
