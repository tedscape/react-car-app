import numeral from 'numeral';

const getFormattedPrice = price => `AUD ${numeral(price).format('0,0.00')}`;

export default getFormattedPrice;
