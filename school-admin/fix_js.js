const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, 'assets', 'js', 'dashboards-analytics.js');
let content = fs.readFileSync(jsPath, 'utf-8');

// The original IIFE closure
const closureStr = '})();\n\n  // Earnings Line Chart';

if (content.includes(closureStr)) {
  content = content.replace(closureStr, '  // Earnings Line Chart');
  content = content.trim() + '\n})();\n';
  fs.writeFileSync(jsPath, content);
  console.log('Fixed dashboards-analytics.js IIFE closure.');
} else {
  console.log('Could not find the specific closure string.');
}
