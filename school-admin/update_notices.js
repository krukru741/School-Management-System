const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'html', 'index.html');
let content = fs.readFileSync(htmlPath, 'utf-8');

const regex = /<!-- Total Earnings -->[\s\S]*?<!--\/ Total Earnings -->/;

const newNoticeBoard = `<!-- Notice Board -->
              <div class="col-xl-4 col-md-6">
                <div class="card h-100">
                  <div class="card-header d-flex align-items-center justify-content-between">
                    <h5 class="card-title m-0 me-2" style="font-weight: 600;">Notice Board</h5>
                    <a href="javascript:void(0);" class="text-muted text-decoration-underline" style="font-size: 13px;">view all</a>
                  </div>
                  <div class="card-body pt-0 d-flex flex-column">
                    <div class="notices-list flex-grow-1 position-relative pe-2" style="overflow-y: auto; max-height: 220px;">
                      
                      <!-- Notice 1 -->
                      <div class="border rounded p-3 mb-3 d-flex align-items-start">
                        <div class="flex-shrink-0 bg-label-warning rounded d-flex align-items-center justify-content-center me-3" style="width: 48px; height: 48px;">
                          <i class="ri-notification-4-line ri-24px"></i>
                        </div>
                        <div>
                          <h6 class="mb-1 text-heading">Sports Day Announcement</h6>
                          <p class="mb-0 text-muted" style="font-size: 13px; line-height: 1.4;">The school's Annual Sports Day will be held on May 12, 2024. Mark your calendars!</p>
                        </div>
                      </div>

                      <!-- Notice 2 -->
                      <div class="border rounded p-3 mb-3 d-flex align-items-start">
                        <div class="flex-shrink-0 bg-label-primary rounded d-flex align-items-center justify-content-center me-3" style="width: 48px; height: 48px;">
                          <i class="ri-notification-3-line ri-24px"></i>
                        </div>
                        <div>
                          <h6 class="mb-1 text-heading">Summer Break Start Date</h6>
                          <p class="mb-0 text-muted" style="font-size: 13px; line-height: 1.4;">Summer break begins on May 25, 2024. Have a wonderful holiday!</p>
                        </div>
                      </div>

                    </div>
                    
                    <div class="mt-3 d-flex align-items-center gap-2">
                      <button class="btn btn-sm text-body fw-normal" style="background-color: #F8F8F9; border-radius: 6px;">Add New</button>
                      <button class="btn btn-sm btn-icon text-body" style="background-color: #F8F8F9; border-radius: 6px;"><i class="ri-edit-box-line"></i></button>
                      <button class="btn btn-sm btn-icon text-body" style="background-color: #F8F8F9; border-radius: 6px;"><i class="ri-delete-bin-7-line"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <!--/ Notice Board -->`;

content = content.replace(regex, newNoticeBoard);

fs.writeFileSync(htmlPath, content);
console.log('Notice board updated successfully.');
