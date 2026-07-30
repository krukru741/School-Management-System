const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'html', 'index.html');
let content = fs.readFileSync(indexPath, 'utf-8');

// We will find the index of "<!--/ four cards -->" and "<!-- Deposit / Withdraw -->"
const startStr = "<!--/ four cards -->";
const endStr = "<!-- Deposit / Withdraw -->";

const startIndex = content.indexOf(startStr);
let endIndex = content.indexOf(endStr, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    endIndex += endStr.length; // include the comment itself
    const before = content.substring(0, startIndex + startStr.length);
    const after = content.substring(endIndex);
    
    // Write back the content
    fs.writeFileSync(indexPath, before + after);
    console.log('Successfully removed the Deposit / Withdraw block.');
} else {
    console.log('Could not find the block boundaries.');
}
