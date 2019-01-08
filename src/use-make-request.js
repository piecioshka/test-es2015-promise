
const files = [
    'data/1.json',
    'data/2.json',
    'data/3.json',
];

Promise
    .all(files.map(makeRequest))
    .then((...args) => {
        console.log('[make-request]', '====== THEN =====');
        console.log('[make-request]', args);
    })
    .catch((err) => {
        console.log('[make-request]', '====== CATCH =====');
        console.error('[make-request]', err);
    })
    .finally((...args) => {
        console.log('[make-request]', '====== FINALLY =====');
        console.log('[make-request]', ...args);
    });
