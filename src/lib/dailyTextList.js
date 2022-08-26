const dailyTextList = [
  {
    date: 'Saturday, January 1',
    scripture: '2 Tim. 3:15',
    chapter: '2 Tim. 3',
  },
  {
    date: 'Sunday, January 2',
    scripture: 'Rev. 9:5',
    chapter: 'Rev. 9',
  },
  {
    date: 'Monday, January 3',
    scripture: 'Prov. 15:3',
    chapter: 'Prov. 15',
  },
  {
    date: 'Tuesday, January 4',
    scripture: '2 Tim. 4:7',
    chapter: '2 Tim. 4',
  },
  {
    date: 'Wednesday, January 5',
    scripture: 'Eph. 6:13',
    chapter: 'Eph. 6',
  },
  {
    date: 'Thursday, January 6',
    scripture: 'Dan. 11:41',
    chapter: 'Dan. 11',
  },
  {
    date: 'Friday, January 7',
    scripture: 'Ps. 25:14',
    chapter: 'Ps. 25',
  },
  {
    date: 'Saturday, January 8',
    scripture: 'Ps. 119:68',
    chapter: 'Ps. 119',
  },
  {
    date: 'Sunday, January 9',
    scripture: 'Jas. 1:19',
    chapter: 'Jas. 1',
  },
  {
    date: 'Monday, January 10',
    scripture: '1 John 2:14',
    chapter: '1 John 2',
  },
  {
    date: 'Tuesday, January 11',
    scripture: 'Ps. 36:9',
    chapter: 'Ps. 36',
  },
  {
    date: 'Wednesday, January 12',
    scripture: 'Matt. 24:9',
    chapter: 'Matt. 24',
  },
  {
    date: 'Thursday, January 13',
    scripture: '1 John 5:19',
    chapter: '1 John 5',
  },
  {
    date: 'Friday, January 14',
    scripture: 'Matt. 10:16',
    chapter: 'Matt. 10',
  },
  {
    date: 'Saturday, January 15',
    scripture: '2 Chron. 14:6',
    chapter: '2 Chron. 14',
  },
  {
    date: 'Sunday, January 16',
    scripture: '1 Tim. 6:20',
    chapter: '1 Tim. 6',
  },
  {
    date: 'Monday, January 17',
    scripture: '1 Thess. 1:5',
    chapter: '1 Thess. 1',
  },
  {
    date: 'Tuesday, January 18',
    scripture: 'Deut. 6:7',
    chapter: 'Deut. 6',
  },
  {
    date: 'Wednesday, January 19',
    scripture: 'Ezra 7:10',
    chapter: 'Ezra 7',
  },
  {
    date: 'Thursday, January 20',
    scripture: 'Acts 23:11',
    chapter: 'Acts 23',
  },
  {
    date: 'Friday, January 21',
    scripture: '1 John 3:20',
    chapter: '1 John 3',
  },
  {
    date: 'Saturday, January 22',
    scripture: 'Ps. 73:13',
    chapter: 'Ps. 73',
  },
  {
    date: 'Sunday, January 23',
    scripture: 'Rom. 8:26',
    chapter: 'Rom. 8',
  },
  {
    date: 'Monday, January 24',
    scripture: 'Rev. 7:4',
    chapter: 'Rev. 7',
  },
  {
    date: 'Tuesday, January 25',
    scripture: '2 Sam. 22:36',
    chapter: '2 Sam. 22',
  },
  {
    date: 'Wednesday, January 26',
    scripture: 'Prov. 20:29',
    chapter: 'Prov. 20',
  },
  {
    date: 'Thursday, January 27',
    scripture: 'Gal. 6:5',
    chapter: 'Gal. 6',
  },
  {
    date: 'Friday, January 28',
    scripture: 'Jas. 4:8',
    chapter: 'Jas. 4',
  },
  {
    date: 'Saturday, January 29',
    scripture: 'Prov. 27:17',
    chapter: 'Prov. 27',
  },
  {
    date: 'Sunday, January 30',
    scripture: 'Rom. 12:17',
    chapter: 'Rom. 12',
  },
  {
    date: 'Monday, January 31',
    scripture: 'Joel 1:6',
    chapter: 'Joel 1',
  },
  {
    date: 'Tuesday, February 1',
    scripture: 'Phil. 2:3',
    chapter: 'Phil. 2',
  },
  {
    date: 'Wednesday, February 2',
    scripture: 'John 15:13',
    chapter: 'John 15',
  },
  {
    date: 'Thursday, February 3',
    scripture: 'Heb. 12:1',
    chapter: 'Heb. 12',
  },
  {
    date: 'Friday, February 4',
    scripture: '1 Tim. 2:1, 2',
    chapter: '1 Tim. 2',
  },
  {
    date: 'Saturday, February 5',
    scripture: '1 Tim. 4:16',
    chapter: '1 Tim. 4',
  },
  {
    date: 'Sunday, February 6',
    scripture: 'Prov. 3:32',
    chapter: 'Prov. 3',
  },
  {
    date: 'Monday, February 7',
    scripture: 'Ps. 86:11',
    chapter: 'Ps. 86',
  },
  {
    date: 'Tuesday, February 8',
    scripture: 'Hos. 11:4',
    chapter: 'Hos. 11',
  },
  {
    date: 'Wednesday, February 9',
    scripture: 'Jas. 1:12',
    chapter: 'Jas. 1',
  },
  {
    date: 'Thursday, February 10',
    scripture: 'Rev. 12:12',
    chapter: 'Rev. 12',
  },
  {
    date: 'Friday, February 11',
    scripture: 'Rom. 6:23',
    chapter: 'Rom. 6',
  },
  {
    date: 'Saturday, February 12',
    scripture: '1 Tim. 4:16',
    chapter: '1 Tim. 4',
  },
  {
    date: 'Sunday, February 13',
    scripture: '1 Cor. 12:15',
    chapter: '1 Cor. 12',
  },
  {
    date: 'Monday, February 14',
    scripture: 'Ps. 118:6',
    chapter: 'Ps. 118',
  },
  {
    date: 'Tuesday, February 15',
    scripture: '2 Chron. 14:2',
    chapter: '2 Chron. 14',
  },
  {
    date: 'Wednesday, February 16',
    scripture: '1 Cor. 4:6',
    chapter: '1 Cor. 4',
  },
  {
    date: 'Thursday, February 17',
    scripture: 'Prov. 3:15',
    chapter: 'Prov. 3',
  },
  {
    date: 'Friday, February 18',
    scripture: 'Acts 28:14',
    chapter: 'Acts 28',
  },
  {
    date: 'Saturday, February 19',
    scripture: '1 Tim. 4:8',
    chapter: '1 Tim. 4',
  },
  {
    date: 'Sunday, February 20',
    scripture: 'Matt. 16:22',
    chapter: 'Matt. 16',
  },
  {
    date: 'Monday, February 21',
    scripture: '1 Pet. 3:7',
    chapter: '1 Pet. 3',
  },
  {
    date: 'Tuesday, February 22',
    scripture: 'Phil. 3:13, 14',
    chapter: 'Phil. 3',
  },
  {
    date: 'Wednesday, February 23',
    scripture: 'Rev. 7:9, 10',
    chapter: 'Rev. 7',
  },
  {
    date: 'Thursday, February 24',
    scripture: 'Isa. 30:15',
    chapter: 'Isa. 30',
  },
  {
    date: 'Friday, February 25',
    scripture: 'Rev. 7:14',
    chapter: 'Rev. 7',
  },
  {
    date: 'Saturday, February 26',
    scripture: 'Acts 2:17',
    chapter: 'Acts 2',
  },
  {
    date: 'Sunday, February 27',
    scripture: 'Acts 20:28',
    chapter: 'Acts 20',
  },
  {
    date: 'Monday, February 28',
    scripture: 'Ps. 25:14',
    chapter: 'Ps. 25',
  },
  {
    date: 'Tuesday, March 1',
    scripture: 'Luke 6:22',
    chapter: 'Luke 6',
  },
  {
    date: 'Wednesday, March 2',
    scripture: 'Eccl. 3:11',
    chapter: 'Eccl. 3',
  },
  {
    date: 'Thursday, March 3',
    scripture: '2 Chron. 36:19',
    chapter: '2 Chron. 36',
  },
  {
    date: 'Friday, March 4',
    scripture: 'Gen. 19:16',
    chapter: 'Gen. 19',
  },
  {
    date: 'Saturday, March 5',
    scripture: 'Ps. 110:3',
    chapter: 'Ps. 110',
  },
  {
    date: 'Sunday, March 6',
    scripture: 'Prov. 15:8',
    chapter: 'Prov. 15',
  },
  {
    date: 'Monday, March 7',
    scripture: 'Matt. 24:13',
    chapter: 'Matt. 24',
  },
  {
    date: 'Tuesday, March 8',
    scripture: 'Dan. 2:44',
    chapter: 'Dan. 2',
  },
  {
    date: 'Wednesday, March 9',
    scripture: '1 John 4:8',
    chapter: '1 John 4',
  },
  {
    date: 'Thursday, March 10',
    scripture: '2 Cor. 2:11',
    chapter: '2 Cor. 2',
  },
  {
    date: 'Friday, March 11',
    scripture: 'Rom. 15:1',
    chapter: 'Rom. 15',
  },
  {
    date: 'Saturday, March 12',
    scripture: 'John 13:35',
    chapter: 'John 13',
  },
  {
    date: 'Sunday, March 13',
    scripture: '1 John 3:18',
    chapter: '1 John 3',
  },
  {
    date: 'Monday, March 14',
    scripture: 'Acts 24:15',
    chapter: 'Acts 24',
  },
  {
    date: 'Tuesday, March 15',
    scripture: 'Gal. 6:4',
    chapter: 'Gal. 6',
  },
  {
    date: 'Wednesday, March 16',
    scripture: 'Rev. 7:9',
    chapter: 'Rev. 7',
  },
  {
    date: 'Thursday, March 17',
    scripture: 'Matt. 10:22',
    chapter: 'Matt. 10',
  },
  {
    date: 'Friday, March 18',
    scripture: 'Mark 13:10',
    chapter: 'Mark 13',
  },
  {
    date: 'Saturday, March 19',
    scripture: '1 Tim. 1:18',
    chapter: '1 Tim. 1',
  },
  {
    date: 'Sunday, March 20',
    scripture: 'Ps. 119:112',
    chapter: 'Ps. 119',
  },
  {
    date: 'Monday, March 21',
    scripture: 'John 8:29',
    chapter: 'John 8',
  },
  {
    date: 'Tuesday, March 22',
    scripture: 'Heb. 13:5',
    chapter: 'Heb. 13',
  },
  {
    date: 'Wednesday, March 23',
    scripture: 'Isa. 30:15',
    chapter: 'Isa. 30',
  },
  {
    date: 'Thursday, March 24',
    scripture: 'Acts 24:15',
    chapter: 'Acts 24',
  },
  {
    date: 'Friday, March 25',
    scripture: 'Matt. 26:75',
    chapter: 'Matt. 26',
  },
  {
    date: 'Saturday, March 26',
    scripture: 'Ps. 27:3',
    chapter: 'Ps. 27',
  },
  {
    date: 'Sunday, March 27',
    scripture: 'Rev. 7:16',
    chapter: 'Rev. 7',
  },
  {
    date: 'Monday, March 28',
    scripture: '2 Thess. 3:3',
    chapter: '2 Thess. 3',
  },
  {
    date: 'Tuesday, March 29',
    scripture: 'Rom. 8:39',
    chapter: 'Rom. 8',
  },
  {
    date: 'Wednesday, March 30',
    scripture: 'Ps. 55:22',
    chapter: 'Ps. 55',
  },
  {
    date: 'Thursday, March 31',
    scripture: '1 Tim. 5:2',
    chapter: '1 Tim. 5',
  },
  {
    date: 'Friday, April 1',
    scripture: 'Rom. 15:4',
    chapter: 'Rom. 15',
  },
  {
    date: 'Saturday, April 2',
    scripture: 'John 4:35',
    chapter: 'John 4',
  },
  {
    date: 'Sunday, April 3',
    scripture: 'Prov. 15:11',
    chapter: 'Prov. 15',
  },
  {
    date: 'Monday, April 4',
    scripture: '1 Pet. 2:21',
    chapter: '1 Pet. 2',
  },
  {
    date: 'Tuesday, April 5',
    scripture: 'Rom. 14:13',
    chapter: 'Rom. 14',
  },
  {
    date: 'Wednesday, April 6',
    scripture: 'Rev. 7:14',
    chapter: 'Rev. 7',
  },
  {
    date: 'Thursday, April 7',
    scripture: 'Rev. 19:19',
    chapter: 'Rev. 19',
  },
  {
    date: 'Friday, April 8',
    scripture: 'Luke 11:13',
    chapter: 'Luke 11',
  },
  {
    date: 'Saturday, April 9',
    scripture: '1 Cor. 15:21',
    chapter: '1 Cor. 15',
  },
  {
    date: 'Sunday, April 10',
    scripture: 'Rev. 7:10',
    chapter: 'Rev. 7',
  },
  {
    date: 'Monday, April 11',
    scripture: '1 Cor. 11:25',
    chapter: '1 Cor. 11',
  },
  {
    date: 'Tuesday, April 12',
    scripture: '1 John 4:9',
    chapter: '1 John 4',
  },
  {
    date: 'Wednesday, April 13',
    scripture: 'John 15:15',
    chapter: 'John 15',
  },
  {
    date: 'Thursday, April 14',
    scripture: '1 Cor. 15:22',
    chapter: '1 Cor. 15',
  },
  {
    date: 'Friday, April 15',
    scripture: '1 Thess. 4:17',
    chapter: '1 Thess. 4',
  },
  {
    date: 'Saturday, April 16',
    scripture: '1 Cor. 15:20',
    chapter: '1 Cor. 15',
  },
  {
    date: 'Sunday, April 17',
    scripture: '1 Cor. 15:42',
    chapter: '1 Cor. 15',
  },
  {
    date: 'Monday, April 18',
    scripture: '1 Cor. 15:55',
    chapter: '1 Cor. 15',
  },
  {
    date: 'Tuesday, April 19',
    scripture: 'Acts 24:15',
    chapter: 'Acts 24',
  },
  {
    date: 'Wednesday, April 20',
    scripture: 'Gal. 2:20',
    chapter: 'Gal. 2',
  },
  {
    date: 'Thursday, April 21',
    scripture: 'Jas. 1:5',
    chapter: 'Jas. 1',
  },
  {
    date: 'Friday, April 22',
    scripture: 'Rom. 12:3',
    chapter: 'Rom. 12',
  },
  {
    date: 'Saturday, April 23',
    scripture: '2 Chron. 14:6',
    chapter: '2 Chron. 14',
  },
  {
    date: 'Sunday, April 24',
    scripture: '2 Cor. 12:10',
    chapter: '2 Cor. 12',
  },
  {
    date: 'Monday, April 25',
    scripture: '1 John 4:7',
    chapter: '1 John 4',
  },
  {
    date: 'Tuesday, April 26',
    scripture: '1 Cor. 12:18',
    chapter: '1 Cor. 12',
  },
  {
    date: 'Wednesday, April 27',
    scripture: '1 Cor. 7:31',
    chapter: '1 Cor. 7',
  },
  {
    date: 'Thursday, April 28',
    scripture: 'Eccl. 11:4',
    chapter: 'Eccl. 11',
  },
  {
    date: 'Friday, April 29',
    scripture: '1 Tim. 6:20',
    chapter: '1 Tim. 6',
  },
  {
    date: 'Saturday, April 30',
    scripture: 'Isa. 30:20',
    chapter: 'Isa. 30',
  },
  {
    date: 'Sunday, May 1',
    scripture: 'Luke 2:51',
    chapter: 'Luke 2',
  },
  {
    date: 'Monday, May 2',
    scripture: '1 Cor. 15:12',
    chapter: '1 Cor. 15',
  },
  {
    date: 'Tuesday, May 3',
    scripture: 'Phil. 3:4',
    chapter: 'Phil. 3',
  },
  {
    date: 'Wednesday, May 4',
    scripture: 'Rom. 7:21',
    chapter: 'Rom. 7',
  },
  {
    date: 'Thursday, May 5',
    scripture: 'John 15:15',
    chapter: 'John 15',
  },
  {
    date: 'Friday, May 6',
    scripture: '1 Pet. 5:10',
    chapter: '1 Pet. 5',
  },
  {
    date: 'Saturday, May 7',
    scripture: 'John 6:44',
    chapter: 'John 6',
  },
  {
    date: 'Sunday, May 8',
    scripture: 'Rom. 12:2',
    chapter: 'Rom. 12',
  },
  {
    date: 'Monday, May 9',
    scripture: 'Ps. 86:11',
    chapter: 'Ps. 86',
  },
  {
    date: 'Tuesday, May 10',
    scripture: 'Dan. 11:44',
    chapter: 'Dan. 11',
  },
  {
    date: 'Wednesday, May 11',
    scripture: 'Gen. 39:1',
    chapter: 'Gen. 39',
  },
  {
    date: 'Thursday, May 12',
    scripture: 'Acts 5:40',
    chapter: 'Acts 5',
  },
  {
    date: 'Friday, May 13',
    scripture: 'Heb. 11:10',
    chapter: 'Heb. 11',
  },
  {
    date: 'Saturday, May 14',
    scripture: 'Rom. 6:7',
    chapter: 'Rom. 6',
  },
  {
    date: 'Sunday, May 15',
    scripture: '1 Cor. 7:7',
    chapter: '1 Cor. 7',
  },
  {
    date: 'Monday, May 16',
    scripture: 'Matt. 24:36',
    chapter: 'Matt. 24',
  },
  {
    date: 'Tuesday, May 17',
    scripture: '2 Tim. 3:12',
    chapter: '2 Tim. 3',
  },
  {
    date: 'Wednesday, May 18',
    scripture: 'Prov. 21:1',
    chapter: 'Prov. 21',
  },
  {
    date: 'Thursday, May 19',
    scripture: 'Matt. 28:19',
    chapter: 'Matt. 28',
  },
  {
    date: 'Friday, May 20',
    scripture: 'Jas. 4:6',
    chapter: 'Jas. 4',
  },
  {
    date: 'Saturday, May 21',
    scripture: 'Eccl. 12:1',
    chapter: 'Eccl. 12',
  },
  {
    date: 'Sunday, May 22',
    scripture: 'Luke 4:43',
    chapter: 'Luke 4',
  },
  {
    date: 'Monday, May 23',
    scripture: '1 Cor. 15:3, 4',
    chapter: '1 Cor. 15',
  },
  {
    date: 'Tuesday, May 24',
    scripture: 'Ps. 41:3',
    chapter: 'Ps. 41',
  },
  {
    date: 'Wednesday, May 25',
    scripture: 'Ps. 118:6',
    chapter: 'Ps. 118',
  },
  {
    date: 'Thursday, May 26',
    scripture: 'Heb. 6:19',
    chapter: 'Heb. 6',
  },
  {
    date: 'Friday, May 27',
    scripture: 'Jas. 5:11',
    chapter: 'Jas. 5',
  },
  {
    date: 'Saturday, May 28',
    scripture: '1 Pet. 2:21',
    chapter: '1 Pet. 2',
  },
  {
    date: 'Sunday, May 29',
    scripture: 'Ps. 150:6',
    chapter: 'Ps. 150',
  },
  {
    date: 'Monday, May 30',
    scripture: '1 Sam. 30:8',
    chapter: '1 Sam. 30',
  },
  {
    date: 'Tuesday, May 31',
    scripture: 'Rom. 8:38, 39',
    chapter: 'Rom. 8',
  },
  {
    date: 'Wednesday, June 1',
    scripture: '1 Thess. 2:8',
    chapter: '1 Thess. 2',
  },
  {
    date: 'Thursday, June 2',
    scripture: 'Matt. 28:18',
    chapter: 'Matt. 28',
  },
  {
    date: 'Friday, June 3',
    scripture: '2 Cor. 12:10',
    chapter: '2 Cor. 12',
  },
  {
    date: 'Saturday, June 4',
    scripture: '1 Cor. 9:23',
    chapter: '1 Cor. 9',
  },
  {
    date: 'Sunday, June 5',
    scripture: 'Dan. 12:1',
    chapter: 'Dan. 12',
  },
  {
    date: 'Monday, June 6',
    scripture: 'Ps. 135:13',
    chapter: 'Ps. 135',
  },
  {
    date: 'Tuesday, June 7',
    scripture: 'Col. 3:13',
    chapter: 'Col. 3',
  },
  {
    date: 'Wednesday, June 8',
    scripture: 'Prov. 22:3',
    chapter: 'Prov. 22',
  },
  {
    date: 'Thursday, June 9',
    scripture: '1 Cor. 10:24',
    chapter: '1 Cor. 10',
  },
  {
    date: 'Friday, June 10',
    scripture: 'Gal. 1:14',
    chapter: 'Gal. 1',
  },
  {
    date: 'Saturday, June 11',
    scripture: 'John 14:12',
    chapter: 'John 14',
  },
  {
    date: 'Sunday, June 12',
    scripture: 'Heb. 11:17',
    chapter: 'Heb. 11',
  },
  {
    date: 'Monday, June 13',
    scripture: 'Eph. 4:24',
    chapter: 'Eph. 4',
  },
  {
    date: 'Tuesday, June 14',
    scripture: '1 Thess. 4:11',
    chapter: '1 Thess. 4',
  },
  {
    date: 'Wednesday, June 15',
    scripture: '1 Cor. 15:6',
    chapter: '1 Cor. 15',
  },
  {
    date: 'Thursday, June 16',
    scripture: '2 Chron. 15:2',
    chapter: '2 Chron. 15',
  },
  {
    date: 'Friday, June 17',
    scripture: 'Luke 14:33',
    chapter: 'Luke 14',
  },
  {
    date: 'Saturday, June 18',
    scripture: 'Matt. 28:19, 20',
    chapter: 'Matt. 28',
  },
  {
    date: 'Sunday, June 19',
    scripture: 'Zech. 4:6',
    chapter: 'Zech. 4',
  },
  {
    date: 'Monday, June 20',
    scripture: '2 Sam. 22:28',
    chapter: '2 Sam. 22',
  },
  {
    date: 'Tuesday, June 21',
    scripture: 'Acts 17:32',
    chapter: 'Acts 17',
  },
  {
    date: 'Wednesday, June 22',
    scripture: 'Acts 16:4',
    chapter: 'Acts 16',
  },
  {
    date: 'Thursday, June 23',
    scripture: '1 Chron. 29:1',
    chapter: '1 Chron. 29',
  },
  {
    date: 'Friday, June 24',
    scripture: '1 John 4:7',
    chapter: '1 John 4',
  },
  {
    date: 'Saturday, June 25',
    scripture: 'Rom. 15:3',
    chapter: 'Rom. 15',
  },
  {
    date: 'Sunday, June 26',
    scripture: '2 Chron. 14:2',
    chapter: '2 Chron. 14',
  },
  {
    date: 'Monday, June 27',
    scripture: 'Rom. 12:10',
    chapter: 'Rom. 12',
  },
  {
    date: 'Tuesday, June 28',
    scripture: 'Jas. 1:2',
    chapter: 'Jas. 1',
  },
  {
    date: 'Wednesday, June 29',
    scripture: '1 Tim. 6:20',
    chapter: '1 Tim. 6',
  },
  {
    date: 'Thursday, June 30',
    scripture: 'Ps. 6:9',
    chapter: 'Ps. 6',
  },
  {
    date: 'Friday, July 1',
    scripture: 'Matt. 28:18',
    chapter: 'Matt. 28',
  },
  {
    date: 'Saturday, July 2',
    scripture: 'Acts 14:15',
    chapter: 'Acts 14',
  },
  {
    date: 'Sunday, July 3',
    scripture: '1 Pet. 5:7',
    chapter: '1 Pet. 5',
  },
  {
    date: 'Monday, July 4',
    scripture: 'Rom. 1:20',
    chapter: 'Rom. 1',
  },
  {
    date: 'Tuesday, July 5',
    scripture: 'Gen. 3:4',
    chapter: 'Gen. 3',
  },
  {
    date: 'Wednesday, July 6',
    scripture: 'Ps. 68:11',
    chapter: 'Ps. 68',
  },
  {
    date: 'Thursday, July 7',
    scripture: 'Matt. 18:14',
    chapter: 'Matt. 18',
  },
  {
    date: 'Friday, July 8',
    scripture: '1 Tim. 3:1',
    chapter: '1 Tim. 3',
  },
  {
    date: 'Saturday, July 9',
    scripture: 'Gal. 6:5',
    chapter: 'Gal. 6',
  },
  {
    date: 'Sunday, July 10',
    scripture: '1 Cor. 1:27',
    chapter: '1 Cor. 1',
  },
  {
    date: 'Monday, July 11',
    scripture: 'Matt. 6:33',
    chapter: 'Matt. 6',
  },
  {
    date: 'Tuesday, July 12',
    scripture: 'Rev. 2:10',
    chapter: 'Rev. 2',
  },
  {
    date: 'Wednesday, July 13',
    scripture: '2 Tim. 2:15',
    chapter: '2 Tim. 2',
  },
  {
    date: 'Thursday, July 14',
    scripture: 'Heb. 12:3',
    chapter: 'Heb. 12',
  },
  {
    date: 'Friday, July 15',
    scripture: '1 Cor. 11:1',
    chapter: '1 Cor. 11',
  },
  {
    date: 'Saturday, July 16',
    scripture: 'Matt. 28:19, 20',
    chapter: 'Matt. 28',
  },
  {
    date: 'Sunday, July 17',
    scripture: 'Col. 1:9',
    chapter: 'Col. 1',
  },
  {
    date: 'Monday, July 18',
    scripture: 'Eph. 4:3',
    chapter: 'Eph. 4',
  },
  {
    date: 'Tuesday, July 19',
    scripture: 'Jas. 1:22',
    chapter: 'Jas. 1',
  },
  {
    date: 'Wednesday, July 20',
    scripture: 'Acts 16:5',
    chapter: 'Acts 16',
  },
  {
    date: 'Thursday, July 21',
    scripture: '1 Cor. 15:21',
    chapter: '1 Cor. 15',
  },
  {
    date: 'Friday, July 22',
    scripture: 'Ps. 138:6',
    chapter: 'Ps. 138',
  },
  {
    date: 'Saturday, July 23',
    scripture: 'Eph. 6:17',
    chapter: 'Eph. 6',
  },
  {
    date: 'Sunday, July 24',
    scripture: 'Rev. 1:9',
    chapter: 'Rev. 1',
  },
  {
    date: 'Monday, July 25',
    scripture: '1 Sam. 18:1',
    chapter: '1 Sam. 18',
  },
  {
    date: 'Tuesday, July 26',
    scripture: '1 Cor. 11:3',
    chapter: '1 Cor. 11',
  },
  {
    date: 'Wednesday, July 27',
    scripture: 'Acts 16:9',
    chapter: 'Acts 16',
  },
  {
    date: 'Thursday, July 28',
    scripture: 'Jas. 1:2',
    chapter: 'Jas. 1',
  },
  {
    date: 'Friday, July 29',
    scripture: 'Prov. 12:25',
    chapter: 'Prov. 12',
  },
  {
    date: 'Saturday, July 30',
    scripture: '1 Tim. 4:12',
    chapter: '1 Tim. 4',
  },
  {
    date: 'Sunday, July 31',
    scripture: '2 Tim. 4:17',
    chapter: '2 Tim. 4',
  },
  {
    date: 'Monday, August 1',
    scripture: 'John 15:5',
    chapter: 'John 15',
  },
  {
    date: 'Tuesday, August 2',
    scripture: 'Dan. 11:27',
    chapter: 'Dan. 11',
  },
  {
    date: 'Wednesday, August 3',
    scripture: 'Ex. 3:14',
    chapter: 'Ex. 3',
  },
  {
    date: 'Thursday, August 4',
    scripture: 'Acts 17:24, 25',
    chapter: 'Acts 17',
  },
  {
    date: 'Friday, August 5',
    scripture: 'Ezek. 36:23',
    chapter: 'Ezek. 36',
  },
  {
    date: 'Saturday, August 6',
    scripture: 'Col. 3:11',
    chapter: 'Col. 3',
  },
  {
    date: 'Sunday, August 7',
    scripture: 'Acts 17:34',
    chapter: 'Acts 17',
  },
  {
    date: 'Monday, August 8',
    scripture: '1 Ki. 19:4',
    chapter: '1 Ki. 19',
  },
  {
    date: 'Tuesday, August 9',
    scripture: 'Prov. 17:17',
    chapter: 'Prov. 17',
  },
  {
    date: 'Wednesday, August 10',
    scripture: 'Acts 15:6',
    chapter: 'Acts 15',
  },
  {
    date: 'Thursday, August 11',
    scripture: 'Rom. 12:21',
    chapter: 'Rom. 12',
  },
  {
    date: 'Friday, August 12',
    scripture: '2 Sam. 22:36',
    chapter: '2 Sam. 22',
  },
  {
    date: 'Saturday, August 13',
    scripture: '2 Pet. 3:9',
    chapter: '2 Pet. 3',
  },
  {
    date: 'Sunday, August 14',
    scripture: 'Ps. 25:4',
    chapter: 'Ps. 25',
  },
  {
    date: 'Monday, August 15',
    scripture: 'John 11:5',
    chapter: 'John 11',
  },
  {
    date: 'Tuesday, August 16',
    scripture: 'Luke 19:11',
    chapter: 'Luke 19',
  },
  {
    date: 'Wednesday, August 17',
    scripture: 'Acts 24:15',
    chapter: 'Acts 24',
  },
  {
    date: 'Thursday, August 18',
    scripture: 'Ps. 32:8',
    chapter: 'Ps. 32',
  },
  {
    date: 'Friday, August 19',
    scripture: 'Prov. 1:5',
    chapter: 'Prov. 1',
  },
  {
    date: 'Saturday, August 20',
    scripture: 'Matt. 28:19, 20',
    chapter: 'Matt. 28',
  },
  {
    date: 'Sunday, August 21',
    scripture: '1 Cor. 15:32',
    chapter: '1 Cor. 15',
  },
  {
    date: 'Monday, August 22',
    scripture: '1 Cor. 3:9',
    chapter: '1 Cor. 3',
  },
  {
    date: 'Tuesday, August 23',
    scripture: '1 John 4:7',
    chapter: '1 John 4',
  },
  {
    date: 'Wednesday, August 24',
    scripture: 'Gal. 5:26',
    chapter: 'Gal. 5',
  },
  {
    date: 'Thursday, August 25',
    scripture: '1 Cor. 7:28',
    chapter: '1 Cor. 7',
  },
  {
    date: 'Friday, August 26',
    scripture: 'Jas. 1:3',
    chapter: 'Jas. 1',
  },
  {
    date: 'Saturday, August 27',
    scripture: '1 Pet. 1:22',
    chapter: '1 Pet. 1',
  },
  {
    date: 'Sunday, August 28',
    scripture: '1 John 2:14',
    chapter: '1 John 2',
  },
  {
    date: 'Monday, August 29',
    scripture: 'Prov. 24:10',
    chapter: 'Prov. 24',
  },
  {
    date: 'Tuesday, August 30',
    scripture: '2 Cor. 13:11',
    chapter: '2 Cor. 13',
  },
  {
    date: 'Wednesday, August 31',
    scripture: 'Rom. 12:10',
    chapter: 'Rom. 12',
  },
  {
    date: 'Thursday, September 1',
    scripture: 'Joel 2:28',
    chapter: 'Joel 2',
  },
  {
    date: 'Friday, September 2',
    scripture: 'Ezek. 34:11',
    chapter: 'Ezek. 34',
  },
  {
    date: 'Saturday, September 3',
    scripture: 'John 4:35',
    chapter: 'John 4',
  },
  {
    date: 'Sunday, September 4',
    scripture: 'John 15:15',
    chapter: 'John 15',
  },
  {
    date: 'Monday, September 5',
    scripture: 'Dan. 11:25',
    chapter: 'Dan. 11',
  },
  {
    date: 'Tuesday, September 6',
    scripture: 'Eccl. 1:7',
    chapter: 'Eccl. 1',
  },
  {
    date: 'Wednesday, September 7',
    scripture: 'Acts 1:8',
    chapter: 'Acts 1',
  },
  {
    date: 'Thursday, September 8',
    scripture: 'John 17:26',
    chapter: 'John 17',
  },
  {
    date: 'Friday, September 9',
    scripture: 'Gal. 5:26',
    chapter: 'Gal. 5',
  },
  {
    date: 'Saturday, September 10',
    scripture: '1 Tim. 1:13',
    chapter: '1 Tim. 1',
  },
  {
    date: 'Sunday, September 11',
    scripture: 'Luke 12:32',
    chapter: 'Luke 12',
  },
  {
    date: 'Monday, September 12',
    scripture: 'Luke 19:10',
    chapter: 'Luke 19',
  },
  {
    date: 'Tuesday, September 13',
    scripture: 'Rev. 21:4',
    chapter: 'Rev. 21',
  },
  {
    date: 'Wednesday, September 14',
    scripture: 'Matt. 24:14',
    chapter: 'Matt. 24',
  },
  {
    date: 'Thursday, September 15',
    scripture: 'Jer. 20:8',
    chapter: 'Jer. 20',
  },
  {
    date: 'Friday, September 16',
    scripture: '1 Tim. 5:1, 2',
    chapter: '1 Tim. 5',
  },
  {
    date: 'Saturday, September 17',
    scripture: 'Jas. 5:7, 8',
    chapter: 'Jas. 5',
  },
  {
    date: 'Sunday, September 18',
    scripture: 'Ps. 111:1',
    chapter: 'Ps. 111',
  },
  {
    date: 'Monday, September 19',
    scripture: 'Job 36:22',
    chapter: 'Job 36',
  },
  {
    date: 'Tuesday, September 20',
    scripture: 'Mark 14:50',
    chapter: 'Mark 14',
  },
  {
    date: 'Wednesday, September 21',
    scripture: '1 Cor. 4:6',
    chapter: '1 Cor. 4',
  },
  {
    date: 'Thursday, September 22',
    scripture: 'Eccl. 7:16',
    chapter: 'Eccl. 7',
  },
  {
    date: 'Friday, September 23',
    scripture: 'John 7:24',
    chapter: 'John 7',
  },
  {
    date: 'Saturday, September 24',
    scripture: 'John 4:35',
    chapter: 'John 4',
  },
  {
    date: 'Sunday, September 25',
    scripture: 'Heb. 10:24',
    chapter: 'Heb. 10',
  },
  {
    date: 'Monday, September 26',
    scripture: '1 Cor. 15:32',
    chapter: '1 Cor. 15',
  },
  {
    date: 'Tuesday, September 27',
    scripture: '1 Cor. 11:3',
    chapter: '1 Cor. 11',
  },
  {
    date: 'Wednesday, September 28',
    scripture: 'Isa. 48:17',
    chapter: 'Isa. 48',
  },
  {
    date: 'Thursday, September 29',
    scripture: 'Rom. 12:10',
    chapter: 'Rom. 12',
  },
  {
    date: 'Friday, September 30',
    scripture: 'Acts 17:22',
    chapter: 'Acts 17',
  },
  {
    date: 'Saturday, October 1',
    scripture: '1 Cor. 2:16',
    chapter: '1 Cor. 2',
  },
  {
    date: 'Sunday, October 2',
    scripture: 'Isa. 29:23',
    chapter: 'Isa. 29',
  },
  {
    date: 'Monday, October 3',
    scripture: 'Ex. 4:11',
    chapter: 'Ex. 4',
  },
  {
    date: 'Tuesday, October 4',
    scripture: 'Heb. 11:10',
    chapter: 'Heb. 11',
  },
  {
    date: 'Wednesday, October 5',
    scripture: 'Col. 2:6, 7',
    chapter: 'Col. 2',
  },
  {
    date: 'Thursday, October 6',
    scripture: '1 Sam. 16:7',
    chapter: '1 Sam. 16',
  },
  {
    date: 'Friday, October 7',
    scripture: 'Rom. 12:3',
    chapter: 'Rom. 12',
  },
  {
    date: 'Saturday, October 8',
    scripture: '1 Cor. 12:12',
    chapter: '1 Cor. 12',
  },
  {
    date: 'Sunday, October 9',
    scripture: '1 Ki. 22:21',
    chapter: '1 Ki. 22',
  },
  {
    date: 'Monday, October 10',
    scripture: '2 Cor. 12:9',
    chapter: '2 Cor. 12',
  },
  {
    date: 'Tuesday, October 11',
    scripture: 'Heb. 6:11, 12',
    chapter: 'Heb. 6',
  },
  {
    date: 'Wednesday, October 12',
    scripture: 'Phil. 2:6',
    chapter: 'Phil. 2',
  },
  {
    date: 'Thursday, October 13',
    scripture: 'Matt. 28:10',
    chapter: 'Matt. 28',
  },
  {
    date: 'Friday, October 14',
    scripture: '1 Tim. 4:16',
    chapter: '1 Tim. 4',
  },
  {
    date: 'Saturday, October 15',
    scripture: 'Luke 5:10',
    chapter: 'Luke 5',
  },
  {
    date: 'Sunday, October 16',
    scripture: 'Matt. 28:19, 20',
    chapter: 'Matt. 28',
  },
  {
    date: 'Monday, October 17',
    scripture: 'Luke 2:52',
    chapter: 'Luke 2',
  },
  {
    date: 'Tuesday, October 18',
    scripture: 'Prov. 4:25',
    chapter: 'Prov. 4',
  },
  {
    date: 'Wednesday, October 19',
    scripture: '1 Sam. 17:42',
    chapter: '1 Sam. 17',
  },
  {
    date: 'Thursday, October 20',
    scripture: 'Dan. 11:40',
    chapter: 'Dan. 11',
  },
  {
    date: 'Friday, October 21',
    scripture: '1 Cor. 15:35',
    chapter: '1 Cor. 15',
  },
  {
    date: 'Saturday, October 22',
    scripture: 'Ps. 13:2',
    chapter: 'Ps. 13',
  },
  {
    date: 'Sunday, October 23',
    scripture: '1 John 3:15',
    chapter: '1 John 3',
  },
  {
    date: 'Monday, October 24',
    scripture: 'Rev. 11:7',
    chapter: 'Rev. 11',
  },
  {
    date: 'Tuesday, October 25',
    scripture: 'Rom. 12:10',
    chapter: 'Rom. 12',
  },
  {
    date: 'Wednesday, October 26',
    scripture: 'John 15:19',
    chapter: 'John 15',
  },
  {
    date: 'Thursday, October 27',
    scripture: 'John 14:31',
    chapter: 'John 14',
  },
  {
    date: 'Friday, October 28',
    scripture: 'Jas. 5:11',
    chapter: 'Jas. 5',
  },
  {
    date: 'Saturday, October 29',
    scripture: 'Prov. 20:18',
    chapter: 'Prov. 20',
  },
  {
    date: 'Sunday, October 30',
    scripture: 'John 15:18',
    chapter: 'John 15',
  },
  {
    date: 'Monday, October 31',
    scripture: 'Eccl. 7:9',
    chapter: 'Eccl. 7',
  },
  {
    date: 'Tuesday, November 1',
    scripture: 'Prov. 18:13',
    chapter: 'Prov. 18',
  },
  {
    date: 'Wednesday, November 2',
    scripture: 'Acts 17:2, 3',
    chapter: 'Acts 17',
  },
  {
    date: 'Thursday, November 3',
    scripture: 'Acts 10:42',
    chapter: 'Acts 10',
  },
  {
    date: 'Friday, November 4',
    scripture: 'Dan. 11:37, 38',
    chapter: 'Dan. 11',
  },
  {
    date: 'Saturday, November 5',
    scripture: 'Luke 15:32',
    chapter: 'Luke 15',
  },
  {
    date: 'Sunday, November 6',
    scripture: 'Ps. 77:11',
    chapter: 'Ps. 77',
  },
  {
    date: 'Monday, November 7',
    scripture: 'Deut. 28:58',
    chapter: 'Deut. 28',
  },
  {
    date: 'Tuesday, November 8',
    scripture: '2 Tim. 3:14',
    chapter: '2 Tim. 3',
  },
  {
    date: 'Wednesday, November 9',
    scripture: 'Acts 20:35',
    chapter: 'Acts 20',
  },
  {
    date: 'Thursday, November 10',
    scripture: 'Isa. 30:20',
    chapter: 'Isa. 30',
  },
  {
    date: 'Friday, November 11',
    scripture: '1 Thess. 5:12',
    chapter: '1 Thess. 5',
  },
  {
    date: 'Saturday, November 12',
    scripture: 'Matt. 28:19',
    chapter: 'Matt. 28',
  },
  {
    date: 'Sunday, November 13',
    scripture: '3 John 4',
    chapter: '3 John 4',
  },
  {
    date: 'Monday, November 14',
    scripture: 'John 14:1',
    chapter: 'John 14',
  },
  {
    date: 'Tuesday, November 15',
    scripture: 'Mark 14:6',
    chapter: 'Mark 14',
  },
  {
    date: 'Wednesday, November 16',
    scripture: '1 Pet. 5:2',
    chapter: '1 Pet. 5',
  },
  {
    date: 'Thursday, November 17',
    scripture: 'Dan. 11:34',
    chapter: 'Dan. 11',
  },
  {
    date: 'Friday, November 18',
    scripture: '1 Tim. 4:16',
    chapter: '1 Tim. 4',
  },
  {
    date: 'Saturday, November 19',
    scripture: 'Mark 6:3',
    chapter: 'Mark 6',
  },
  {
    date: 'Sunday, November 20',
    scripture: 'Heb. 13:5',
    chapter: 'Heb. 13',
  },
  {
    date: 'Monday, November 21',
    scripture: 'Eccl. 7:10',
    chapter: 'Eccl. 7',
  },
  {
    date: 'Tuesday, November 22',
    scripture: 'Ps. 34:18',
    chapter: 'Ps. 34',
  },
  {
    date: 'Wednesday, November 23',
    scripture: 'Matt. 6:9',
    chapter: 'Matt. 6',
  },
  {
    date: 'Thursday, November 24',
    scripture: 'Ps. 6:3',
    chapter: 'Ps. 6',
  },
  {
    date: 'Friday, November 25',
    scripture: '1 Cor. 11:3',
    chapter: '1 Cor. 11',
  },
  {
    date: 'Saturday, November 26',
    scripture: '1 Tim. 5:8',
    chapter: '1 Tim. 5',
  },
  {
    date: 'Sunday, November 27',
    scripture: 'Prov. 31:27',
    chapter: 'Prov. 31',
  },
  {
    date: 'Monday, November 28',
    scripture: 'Rom. 5:3',
    chapter: 'Rom. 5',
  },
  {
    date: 'Tuesday, November 29',
    scripture: 'Jas. 1:19',
    chapter: 'Jas. 1',
  },
  {
    date: 'Wednesday, November 30',
    scripture: 'Matt. 28:19',
    chapter: 'Matt. 28',
  },
  {
    date: 'Thursday, December 1',
    scripture: 'Jas. 1:6',
    chapter: 'Jas. 1',
  },
  {
    date: 'Friday, December 2',
    scripture: 'Jas. 2:23',
    chapter: 'Jas. 2',
  },
  {
    date: 'Saturday, December 3',
    scripture: 'Prov. 20:5',
    chapter: 'Prov. 20',
  },
  {
    date: 'Sunday, December 4',
    scripture: 'Luke 5:10',
    chapter: 'Luke 5',
  },
  {
    date: 'Monday, December 5',
    scripture: 'Eph. 4:15',
    chapter: 'Eph. 4',
  },
  {
    date: 'Tuesday, December 6',
    scripture: 'Dan. 11:40',
    chapter: 'Dan. 11',
  },
  {
    date: 'Wednesday, December 7',
    scripture: 'Ezek. 34:11',
    chapter: 'Ezek. 34',
  },
  {
    date: 'Thursday, December 8',
    scripture: '2 Cor. 4:18',
    chapter: '2 Cor. 4',
  },
  {
    date: 'Friday, December 9',
    scripture: 'Deut. 32:2',
    chapter: 'Deut. 32',
  },
  {
    date: 'Saturday, December 10',
    scripture: 'Mal. 3:7',
    chapter: 'Mal. 3',
  },
  {
    date: 'Sunday, December 11',
    scripture: 'John 8:31, 32',
    chapter: 'John 8',
  },
  {
    date: 'Monday, December 12',
    scripture: 'Jas. 1:5',
    chapter: 'Jas. 1',
  },
  {
    date: 'Tuesday, December 13',
    scripture: '2 Tim. 1:3',
    chapter: '2 Tim. 1',
  },
  {
    date: 'Wednesday, December 14',
    scripture: 'Matt. 13:40',
    chapter: 'Matt. 13',
  },
  {
    date: 'Thursday, December 15',
    scripture: 'Joel 1:6',
    chapter: 'Joel 1',
  },
  {
    date: 'Friday, December 16',
    scripture: 'Jas. 1:5',
    chapter: 'Jas. 1',
  },
  {
    date: 'Saturday, December 17',
    scripture: 'Eph. 4:16',
    chapter: 'Eph. 4',
  },
  {
    date: 'Sunday, December 18',
    scripture: '1 John 1:8',
    chapter: '1 John 1',
  },
  {
    date: 'Monday, December 19',
    scripture: '1 John 3:18',
    chapter: '1 John 3',
  },
  {
    date: 'Tuesday, December 20',
    scripture: 'Dan. 2:28',
    chapter: 'Dan. 2',
  },
  {
    date: 'Wednesday, December 21',
    scripture: '1 Cor. 9:24',
    chapter: '1 Cor. 9',
  },
  {
    date: 'Thursday, December 22',
    scripture: '1 Cor. 3:9',
    chapter: '1 Cor. 3',
  },
  {
    date: 'Friday, December 23',
    scripture: 'Matt. 28:20',
    chapter: 'Matt. 28',
  },
  {
    date: 'Saturday, December 24',
    scripture: 'Prov. 20:5',
    chapter: 'Prov. 20',
  },
  {
    date: 'Sunday, December 25',
    scripture: 'Eccl. 11:6',
    chapter: 'Eccl. 11',
  },
  {
    date: 'Monday, December 26',
    scripture: '1 Cor. 14:40',
    chapter: '1 Cor. 14',
  },
  {
    date: 'Tuesday, December 27',
    scripture: '1 Pet. 5:7',
    chapter: '1 Pet. 5',
  },
  {
    date: 'Wednesday, December 28',
    scripture: 'Matt. 19:11',
    chapter: 'Matt. 19',
  },
  {
    date: 'Thursday, December 29',
    scripture: '1 John 4:16',
    chapter: '1 John 4',
  },
  {
    date: 'Friday, December 30',
    scripture: 'Rom. 15:5',
    chapter: 'Rom. 15',
  },
  {
    date: 'Saturday, December 31',
    scripture: 'Ps. 127:3',
    chapter: 'Ps. 127',
  },
]

export default dailyTextList
