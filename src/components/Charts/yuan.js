import numeral from 'numeral';

const yuan = val => `&yen; ${numeral(val).format('0,0')}`;

export default yuan;
