const books = [
  'Gen.',
  'Ex.',
  'Lev.',
  'Num.',
  'Deut.',
  'Josh.',
  'Judg.',
  'Ruth',
  '1 Sam.',
  '2 Sam.',
  '1 Ki.',
  '2 Ki.',
  '1 Chron.',
  '2 Chron.',
  'Ezra',
  'Neh.',
  'Esther',
  'Job',
  'Ps.',
  'Prov.',
  'Eccl.',
  'Song of Sol.',
  'Isa.',
  'Jer.',
  'Lam.',
  'Ezek.',
  'Dan.',
  'Hos.',
  'Joel',
  'Amos',
  'Obad.',
  'Jonah',
  'Mic.',
  'Nah.',
  'Hab.',
  'Zeph.',
  'Hag.',
  'Zech.',
  'Mal.',
  'Matt.',
  'Mark',
  'Luke',
  'John',
  'Acts',
  'Rom.',
  '1 Cor.',
  '2 Cor.',
  'Gal.',
  'Eph.',
  'Phil.',
  'Col.',
  '1 Thess.',
  '2 Thess.',
  '1 Tim.',
  '2 Tim.',
  'Titus',
  'Philem.',
  'Heb.',
  'Jas.',
  '1 Pet.',
  '2 Pet.',
  '1 John',
  '2 John',
  '3 John',
  'Jude',
  'Rev.',
]

const bookIndex = bookName => books.findIndex(b => b === bookName) + 1

export default books
export { bookIndex }
