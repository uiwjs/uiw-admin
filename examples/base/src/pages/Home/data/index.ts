
export const cardData1 = [
  {
    month: "Jan",
    city: "Tokyo",
    temperature: 7
  },
  {
    month: "May",
    city: "Tokyo",
    temperature: 10
  },
  {
    month: "Jun",
    city: "Tokyo",
    temperature: 7.5
  },
  {
    month: "Jul",
    city: "Tokyo",
    temperature: 9.2
  },
  {
    month: "Aug",
    city: "Tokyo",
    temperature: 14.5
  },
  {
    month: "Nov",
    city: "Tokyo",
    temperature: 8.9
  },
  {
    month: "Dec",
    city: "Tokyo",
    temperature: 5.6
  },
]


export const cardData2 = [
  { year: '1951 年', sales: 0 },
  { year: '1952 年', sales: 52 },
  { year: '1956 年', sales: 61 },
  { year: '1957 年', sales: 45 },
  { year: '1958 年', sales: 48 },
  { year: '1959 年', sales: 38 },
  { year: '1960 年', sales: 38 },
  { year: '1962 年', sales: 38 },
]


export const IntervalData1 = [
  { year: "1 月", sales: 38 },
  { year: "2 月", sales: 52 },
  { year: "3 月", sales: 61 },
  { year: "4 月", sales: 45 },
  { year: "5 月", sales: 48 },
  { year: "6 月", sales: 38 },
  { year: "7 月", sales: 36 },
  { year: "8 月", sales: 38 },
  { year: "9 月", sales: 54 },
  { year: "10 月", sales: 45 },
  { year: "11 月", sales: 56 },
  { year: "12 月", sales: 34 },
];


export const listData1 = [
  { label: "X战警新变种人 首曝海报特写诡异人脸", value: 1234 },
  { label: "六大变五大？传迪士尼600亿收购福斯", value: 23 },
  { label: "快跑!《侏罗纪世界2》正式预告要来了", value: 45 },
  { label: "X战警新变种人 首曝海报特写诡异人脸", value: 12 },
  { label: "六大变五大？传迪士尼600亿收购福斯", value: 12 },
];


export type TableDataType = {
  sort: number;
  search: string;
  use: number;
  range: string;
  fig: "up" | "down"
}

export const tableData1: TableDataType[] = [
  { sort: 1, search: "所属", use: 189, range: "30%", fig: "up" },
  { sort: 2, search: "所属2", use: 89, range: "11%", fig: "down" },
  { sort: 3, search: "所属3", use: 123, range: "13%", fig: "up" },
  { sort: 4, search: "所属4", use: 34, range: "45%", fig: "up" },
  { sort: 5, search: "所属5", use: 134, range: "24%", fig: "up" },
  { sort: 6, search: "所属6", use: 34, range: "15%", fig: "down" },
  { sort: 8, search: "所属7", use: 456, range: "12%", fig: "up" },
  { sort: 7, search: "所属8", use: 456, range: "45%", fig: "down" },
  { sort: 9, search: "所属9", use: 189, range: "2%", fig: "up" },
  { sort: 10, search: "所属10", use: 32, range: "23%", fig: "down" },
]
