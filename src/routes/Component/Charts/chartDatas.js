import { DateTime } from 'luxon';

const visitData = [];
const beginDay = new Date().getTime();
const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];

for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: DateTime.fromMillis(beginDay + (1000 * 60 * 60 * 24 * i)).toFormat('yyyy-LL-dd'),
    y: fakeY[i],
  });
}

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}

const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `明珠路 ${i} 号店`,
    total: 323234,
  });
}


export {
  visitData,
  salesData,
  rankingListData,
};

