const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'html', 'index.html');
let content = fs.readFileSync(htmlPath, 'utf-8');

// Fix the newly added icons in Notice Board and Students
content = content.replace(/<i class="ri-notification-4-line ri-24px"><\/i>/g, '<i class="icon-base ri ri-notification-4-line ri-24px"></i>');
content = content.replace(/<i class="ri-notification-3-line ri-24px"><\/i>/g, '<i class="icon-base ri ri-notification-3-line ri-24px"></i>');
content = content.replace(/<i class="ri-edit-box-line"><\/i>/g, '<i class="icon-base ri ri-edit-box-line"></i>');
content = content.replace(/<i class="ri-delete-bin-7-line"><\/i>/g, '<i class="icon-base ri ri-delete-bin-7-line"></i>');

// Also fix the user icons in the Students chart (if any were added without icon-base ri)
content = content.replace(/<i class="ri-user-line" style="font-size: 10px;"><\/i>/g, '<i class="icon-base ri ri-user-line" style="font-size: 10px;"></i>');

fs.writeFileSync(htmlPath, content);
console.log('Icons fixed successfully.');
