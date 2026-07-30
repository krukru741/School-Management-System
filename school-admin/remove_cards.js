const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'html', 'index.html');
let content = fs.readFileSync(indexPath, 'utf-8');

// The regex will match from <!-- Sales by Countries --> up to <!-- Deposit / Withdraw --> inclusive
content = content.replace(/<!-- Sales by Countries -->[\s\S]*?<!-- Deposit \/ Withdraw -->/, '');

fs.writeFileSync(indexPath, content);
console.log('Cards removed successfully.');
