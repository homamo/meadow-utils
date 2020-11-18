import round from './round';

// Formats 0.0218 as 2.18
export default (decimal) => (decimal ? round(decimal * 100, 2) : 0);
