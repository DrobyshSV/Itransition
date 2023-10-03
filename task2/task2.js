const fs = require('fs');
const crypto = require('crypto');

const email = 'drobyshsv@gmail.com';
const files = fs.readdirSync(__dirname).filter(file => file.endsWith('.data'));
console.log('files length', files.length);

const hashes = files.map(file => {
  const fileBuffer = fs.readFileSync(file);
  const sha3Hash = crypto.createHash('sha3-256');
  sha3Hash.update(fileBuffer);
  return sha3Hash.digest('hex');
});

const sortedAndJoinedWithEmail = hashes.sort().join('')
    + email.toLowerCase();

const resultHash = crypto.createHash('sha3-256').
    update(sortedAndJoinedWithEmail).
    digest('hex');

console.log(`Result: ${resultHash}`);
