const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'html', 'index.html');
let content = fs.readFileSync(htmlPath, 'utf-8');

// Update CSS for layout-menu to Dark Blue
content = content.replace(
  /#layout-menu\s*{\s*background-color:\s*#E2F6F8\s*!important;\s*}/,
  `#layout-menu {
      background-color: #1a234b !important;
    }
    #layout-menu .menu-link {
      color: #ffffff !important;
    }
    #layout-menu .menu-icon {
      color: #ffffff !important;
    }
    #layout-menu .menu-item.active > .menu-link {
      background-color: #4a9ee6 !important;
      border-radius: 8px;
    }
    #layout-menu .app-brand {
      height: auto;
      padding-top: 2rem;
      padding-bottom: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }`
);

// Replace the entire <aside> inner content
const asideRegex = /<div class="app-brand demo">[\s\S]*?<\/ul>/;
const newAsideContent = `<div class="app-brand demo border-bottom border-secondary mb-4 pb-4">
          <a href="index.html" class="d-flex flex-column align-items-center w-100 text-decoration-none">
            <div class="bg-white rounded-circle d-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
              <!-- Using a simple geometric shape to approximate the logo in the image -->
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 30V15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V22" stroke="#48b7d3" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M30 30V15C30 12.2386 27.7614 10 25 10C22.2386 10 20 12.2386 20 15V22" stroke="#fd5c63" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="20" cy="27" r="4" fill="#303b4d"/>
              </svg>
            </div>
            <span class="text-white fw-semibold" style="font-size: 15px;">Udemy Inter. school</span>
          </a>
        </div>

        <ul class="menu-inner py-1 px-3">
          <!-- Dashboard -->
          <li class="menu-item active mb-2">
            <a href="index.html" class="menu-link px-3 py-2">
              <i class="menu-icon icon-base ri ri-home-3-line"></i>
              <div data-i18n="Dashboard">Dashboard</div>
            </a>
          </li>

          <!-- Teachers -->
          <li class="menu-item mb-2">
            <a href="teachers.html" class="menu-link px-3 py-2">
              <i class="menu-icon icon-base ri ri-home-heart-line"></i>
              <div data-i18n="Teachers">Teachers</div>
            </a>
          </li>

          <!-- Students/ classes -->
          <li class="menu-item mb-2">
            <a href="students.html" class="menu-link px-3 py-2">
              <i class="menu-icon icon-base ri ri-graduation-cap-line"></i>
              <div data-i18n="Students/ classes">Students/ classes</div>
            </a>
          </li>

          <!-- Billing -->
          <li class="menu-item mb-2">
            <a href="billing.html" class="menu-link px-3 py-2">
              <i class="menu-icon icon-base ri ri-bank-line"></i>
              <div data-i18n="Billing">Billing</div>
            </a>
          </li>

          <!-- Settings and profile -->
          <li class="menu-item mb-2">
            <a href="settings.html" class="menu-link px-3 py-2">
              <i class="menu-icon icon-base ri ri-settings-4-line"></i>
              <div data-i18n="Settings and profile">Settings and profile</div>
            </a>
          </li>

          <!-- Exams -->
          <li class="menu-item mb-5">
            <a href="exams.html" class="menu-link px-3 py-2">
              <i class="menu-icon icon-base ri ri-file-paper-2-line"></i>
              <div data-i18n="Exams">Exams</div>
            </a>
          </li>

          <!-- Features -->
          <li class="menu-item mt-5">
            <a href="#" class="menu-link px-3 py-2">
              <i class="menu-icon icon-base ri ri-building-line"></i>
              <div data-i18n="Features" class="flex-grow-1">Features</div>
              <span class="badge rounded-pill bg-light text-dark fw-bold ms-auto" style="font-size: 10px;">NEW</span>
            </a>
          </li>
        </ul>`;

content = content.replace(asideRegex, newAsideContent);

fs.writeFileSync(htmlPath, content);
console.log('Sidebar updated successfully.');
