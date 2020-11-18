import round from './round';

// Formats 2.18 as 0.0218
export default (percent) => (percent ? round(percent / 100, 4) : 0);
