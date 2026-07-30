const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'html', 'auth-login-basic.html');
let content = fs.readFileSync(htmlPath, 'utf-8');

// Replace the logo block
const logoRegex = /<div class="app-brand justify-content-center mt-5">[\s\S]*?<\/div>/;
const newLogoContent = `<div class="app-brand justify-content-center mt-5">
              <a href="index.html" class="app-brand-link gap-3 d-flex flex-column align-items-center text-decoration-none">
                <div class="rounded-circle d-flex align-items-center justify-content-center mb-2" style="width: 70px; height: 70px; background-color: #1a234b;">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 30V15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V22" stroke="#48b7d3" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M30 30V15C30 12.2386 27.7614 10 25 10C22.2386 10 20 12.2386 20 15V22" stroke="#fd5c63" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                    <circle cx="20" cy="27" r="4" fill="#ffffff" />
                  </svg>
                </div>
                <span class="app-brand-text text-heading fw-semibold" style="font-size: 20px;">IHMA School</span>
              </a>
            </div>`;

content = content.replace(logoRegex, newLogoContent);

// Replace welcome text
content = content.replace('Welcome to Materio! 👋🏻', 'Welcome to IHMA School! 👋🏻');
content = content.replace('Please sign-in to your account and start the adventure', 'Please sign in to access your school dashboard.');

// Remove buy-now button
const buyNowRegex = /<div class="buy-now">[\s\S]*?<\/div>/;
content = content.replace(buyNowRegex, '');

fs.writeFileSync(htmlPath, content);
console.log('Login page updated successfully.');
