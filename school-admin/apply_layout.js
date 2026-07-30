const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'html', 'index.html');
let content = fs.readFileSync(htmlPath, 'utf-8');

const contentRegex = /<!-- Content -->[\s\S]*?<!-- \/ Content -->/;

const newContent = `<!-- Content -->
          <div class="container-xxl flex-grow-1 container-p-y">
            
            <!-- Row 1 -->
            <div class="row gy-4 mb-4">
              <!-- Welcome Hero Card -->
              <div class="col-md-6 col-lg-6">
                <div class="card h-100">
                  <div class="card-body d-flex justify-content-between align-items-center h-100">
                    <div class="pe-3">
                      <h4 class="card-title mb-3 flex-wrap text-nowrap fw-bold text-dark">Welcome, Laurel Higher<br>Secondary School Team!</h4>
                      <p class="mb-0 text-muted" style="font-size: 14px; line-height: 1.6;">Manage your school operations with ease. Stay updated on academics, attendance, finances, and more—all in one place. Let's keep shaping a brighter future together!</p>
                    </div>
                    <div class="d-none d-md-block ms-3">
                      <img src="../assets/img/illustrations/misc-mask-light.png" alt="Welcome Illustration" style="max-height: 140px;" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Stats Column -->
              <div class="col-md-2 col-lg-2">
                <div class="d-flex flex-column h-100 gap-3">
                  <div class="card flex-grow-1" style="background-color: #FCEFB4;">
                    <div class="card-body p-2 px-3 d-flex flex-column justify-content-center position-relative">
                      <h6 class="card-title text-dark mb-1">Students</h6>
                      <h4 class="mb-0 text-dark fw-bold">5,909</h4>
                      <div class="dropdown position-absolute top-0 end-0 mt-2 me-2">
                        <button class="btn p-0 text-dark" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icon-base ri ri-more-fill"></i></button>
                      </div>
                    </div>
                  </div>
                  <div class="card flex-grow-1" style="background-color: #E6DAF9;">
                    <div class="card-body p-2 px-3 d-flex flex-column justify-content-center position-relative">
                      <h6 class="card-title text-dark mb-1">Teachers</h6>
                      <h4 class="mb-0 text-dark fw-bold">60</h4>
                      <div class="dropdown position-absolute top-0 end-0 mt-2 me-2">
                        <button class="btn p-0 text-dark" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icon-base ri ri-more-fill"></i></button>
                      </div>
                    </div>
                  </div>
                  <div class="card flex-grow-1" style="background-color: #FCEFB4;">
                    <div class="card-body p-2 px-3 d-flex flex-column justify-content-center position-relative">
                      <h6 class="card-title text-dark mb-1">Employee</h6>
                      <h4 class="mb-0 text-dark fw-bold">100</h4>
                      <div class="dropdown position-absolute top-0 end-0 mt-2 me-2">
                        <button class="btn p-0 text-dark" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icon-base ri ri-more-fill"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Static Calendar -->
              <div class="col-md-4 col-lg-4">
                <div class="card h-100">
                  <div class="card-header pb-2 d-flex justify-content-between align-items-center">
                    <button class="btn btn-sm btn-icon text-muted"><i class="icon-base ri ri-arrow-left-s-line"></i></button>
                    <span class="fw-bold text-dark" style="font-size: 15px;">September 2021</span>
                    <button class="btn btn-sm btn-icon text-muted"><i class="icon-base ri ri-arrow-right-s-line"></i></button>
                  </div>
                  <div class="card-body">
                    <div class="calendar-grid" style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; text-align: center; font-size: 13px;">
                      <!-- Days -->
                      <div class="text-muted fw-medium" style="font-size: 10px;">SUN</div><div class="text-muted fw-medium" style="font-size: 10px;">MON</div><div class="text-muted fw-medium" style="font-size: 10px;">TUE</div><div class="text-muted fw-medium" style="font-size: 10px;">WED</div><div class="text-muted fw-medium" style="font-size: 10px;">THU</div><div class="text-muted fw-medium" style="font-size: 10px;">FRI</div><div class="text-muted fw-medium" style="font-size: 10px;">SAT</div>
                      
                      <!-- Dates row 1 -->
                      <div class="py-1">1</div><div class="py-1 text-dark fw-medium">2</div><div class="py-1 text-dark fw-medium">3</div><div class="py-1 text-dark fw-medium">4</div><div class="py-1 text-dark fw-medium">5</div><div class="py-1 text-dark fw-medium">6</div><div class="py-1 text-dark fw-medium">7</div>
                      <!-- Dates row 2 -->
                      <div class="py-1">8</div><div class="py-1 text-dark fw-medium">9</div><div class="py-1 text-dark fw-medium">10</div><div class="py-1 text-dark fw-medium">11</div><div class="py-1 text-danger fw-bold">12</div><div class="py-1 text-dark fw-medium">13</div><div class="py-1 text-dark fw-medium">14</div>
                      <!-- Dates row 3 -->
                      <div class="py-1">15</div><div class="py-1 text-dark fw-medium">16</div><div class="py-1 text-dark fw-medium">17</div><div class="py-1 text-dark fw-medium">18</div><div class="py-1 bg-danger text-white rounded-circle d-inline-block mx-auto fw-medium" style="width: 24px; height: 24px; line-height: 24px;">19</div><div class="py-1 text-dark fw-medium">20</div><div class="py-1 text-dark fw-medium">21</div>
                      <!-- Dates row 4 -->
                      <div class="py-1">22</div><div class="py-1 text-dark fw-medium">23</div><div class="py-1 text-dark fw-medium">24</div><div class="py-1 text-dark fw-medium">25</div><div class="py-1 text-dark fw-medium">26</div><div class="py-1 text-dark fw-medium">27</div><div class="py-1 text-dark fw-medium">28</div>
                      <!-- Dates row 5 -->
                      <div class="py-1">29</div><div class="py-1 text-dark fw-medium">30</div><div class="py-1 text-dark fw-medium">31</div><div></div><div></div><div></div><div></div>
                    </div>
                    <div class="mt-3">
                      <button class="btn btn-sm text-body" style="background-color: #F4F5FA;">Manage Calendar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Row 2 -->
            <div class="row gy-4 mb-4">
              <!-- Students Overview Chart -->
              <div class="col-md-4 col-lg-4">
                <div class="card h-100">
                  <div class="card-header pb-0">
                    <div class="d-flex justify-content-between align-items-center">
                      <h5 class="mb-0 text-dark fw-bold">Students</h5>
                      <div class="dropdown">
                        <button class="btn text-body-secondary p-0" type="button" id="studentsOverviewDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="icon-base ri ri-more-fill"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="studentsOverviewDropdown">
                          <a class="dropdown-item" href="javascript:void(0);">Refresh</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body d-flex align-items-center justify-content-center pt-0 mt-n3">
                    <div class="row w-100">
                      <div class="col-6 d-flex flex-column align-items-center">
                        <div id="boysChart"></div>
                        <div class="mt-1 d-flex align-items-center">
                          <span class="badge bg-label-primary p-1 rounded-circle me-2"><i class="icon-base ri ri-user-line" style="font-size: 10px;"></i></span>
                          <span class="fw-bold text-heading">3,178</span> <span class="text-muted ms-1" style="font-size: 13px;">(boys)</span>
                        </div>
                      </div>
                      <div class="col-6 d-flex flex-column align-items-center">
                        <div id="girlsChart"></div>
                        <div class="mt-1 d-flex align-items-center">
                          <span class="badge bg-label-warning p-1 rounded-circle me-2"><i class="icon-base ri ri-user-line" style="font-size: 10px;"></i></span>
                          <span class="fw-bold text-heading">2,731</span> <span class="text-muted ms-1" style="font-size: 13px;">(Girls)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Notice Board -->
              <div class="col-md-4 col-lg-4">
                <div class="card h-100">
                  <div class="card-header d-flex align-items-center justify-content-between pb-2">
                    <h5 class="card-title m-0 me-2 text-dark fw-bold">Notice Board</h5>
                    <a href="javascript:void(0);" class="text-muted text-decoration-underline" style="font-size: 13px;">view all</a>
                  </div>
                  <div class="card-body pt-0 d-flex flex-column">
                    <div class="notices-list flex-grow-1 position-relative pe-2 mt-2" style="overflow-y: auto; max-height: 220px;">
                      <!-- Notice 1 -->
                      <div class="border rounded p-3 mb-3 d-flex align-items-start">
                        <div class="flex-shrink-0 bg-label-warning rounded d-flex align-items-center justify-content-center me-3" style="width: 48px; height: 48px;">
                          <i class="icon-base ri ri-notification-4-line ri-24px"></i>
                        </div>
                        <div>
                          <h6 class="mb-1 text-heading">Sports Day Announcement</h6>
                          <p class="mb-0 text-muted" style="font-size: 13px; line-height: 1.4;">The school's Annual Sports Day will be held on May 12, 2024. Mark your calendars!</p>
                        </div>
                      </div>
                      <!-- Notice 2 -->
                      <div class="border rounded p-3 mb-3 d-flex align-items-start">
                        <div class="flex-shrink-0 bg-label-primary rounded d-flex align-items-center justify-content-center me-3" style="width: 48px; height: 48px;">
                          <i class="icon-base ri ri-notification-3-line ri-24px"></i>
                        </div>
                        <div>
                          <h6 class="mb-1 text-heading">Summer Break Start Date</h6>
                          <p class="mb-0 text-muted" style="font-size: 13px; line-height: 1.4;">Summer break begins on May 25, 2024. Have a wonderful holiday!</p>
                        </div>
                      </div>
                    </div>
                    <div class="mt-2 d-flex align-items-center gap-2">
                      <button class="btn btn-sm text-body fw-normal" style="background-color: #F4F5FA; border-radius: 6px;">Add New</button>
                      <button class="btn btn-sm btn-icon text-body" style="background-color: #F4F5FA; border-radius: 6px;"><i class="icon-base ri ri-edit-box-line"></i></button>
                      <button class="btn btn-sm btn-icon text-body" style="background-color: #F4F5FA; border-radius: 6px;"><i class="icon-base ri ri-delete-bin-7-line"></i></button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Financial Overview -->
              <div class="col-md-4 col-lg-4">
                <div class="card h-100">
                  <div class="card-header pb-2 d-flex justify-content-between align-items-center">
                    <h5 class="mb-0 text-dark fw-bold">Financial Overview</h5>
                    <div class="d-flex gap-2">
                      <span class="badge text-body fw-medium px-2 py-1" style="background-color: #F4F5FA;">2023-2024 <i class="icon-base ri ri-arrow-down-s-line"></i></span>
                      <span class="badge text-body fw-medium px-2 py-1" style="background-color: #F4F5FA;">Annual <i class="icon-base ri ri-arrow-down-s-line"></i></span>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex flex-column gap-3 h-100 justify-content-center">
                      <div class="rounded p-3 position-relative overflow-hidden" style="background-color: #E2F6F8;">
                        <div class="d-flex justify-content-between align-items-start mb-0">
                          <div id="financialIncomeSparkline" style="margin-left: -10px; width: 60px;"></div>
                          <span class="badge bg-white text-success fw-medium"><i class="icon-base ri ri-arrow-up-line"></i> 12%</span>
                        </div>
                        <h4 class="mb-0 text-dark fw-bold mt-1">₹29,545,000</h4>
                        <span class="text-dark" style="font-size: 13px;">Total Income</span>
                      </div>
                      
                      <div class="rounded p-3 position-relative overflow-hidden" style="background-color: #E2F6F8;">
                        <div class="d-flex justify-content-between align-items-start mb-0">
                          <div id="financialExpenseSparkline" style="margin-left: -10px; width: 60px;"></div>
                          <span class="badge bg-white text-success fw-medium"><i class="icon-base ri ri-arrow-up-line"></i> 8.5%</span>
                        </div>
                        <h4 class="mb-0 text-dark fw-bold mt-1">₹19,291,266</h4>
                        <span class="text-dark" style="font-size: 13px;">Total Expenses</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Row 3 -->
            <div class="row gy-4">
              <!-- Earnings Chart -->
              <div class="col-md-6 col-lg-6">
                <div class="card h-100">
                  <div class="card-header pb-0 d-flex justify-content-between align-items-center">
                    <h5 class="mb-0 text-dark fw-bold">Earnings</h5>
                    <div class="d-flex align-items-center gap-3">
                      <div class="d-flex align-items-center"><span class="badge bg-info p-1 rounded-circle me-2"></span> <span class="text-dark fw-medium" style="font-size: 13px;">Income</span></div>
                      <div class="d-flex align-items-center"><span class="badge bg-primary p-1 rounded-circle me-2"></span> <span class="text-dark fw-medium" style="font-size: 13px;">Expense</span></div>
                      <button class="btn btn-sm btn-icon text-muted"><i class="icon-base ri ri-more-fill"></i></button>
                    </div>
                  </div>
                  <div class="card-body pt-2">
                    <div id="earningsLineChart"></div>
                  </div>
                </div>
              </div>
              
              <!-- Fee Status -->
              <div class="col-md-3 col-lg-3">
                <div class="card h-100">
                  <div class="card-header pb-2 d-flex justify-content-between align-items-center">
                    <h5 class="mb-0 text-dark fw-bold">Fee Status</h5>
                    <button class="btn btn-sm btn-icon text-muted"><i class="icon-base ri ri-more-fill"></i></button>
                  </div>
                  <div class="card-body d-flex flex-column gap-3 justify-content-between pb-3 mt-1">
                    <div class="border rounded px-3 py-2 d-flex justify-content-between align-items-center">
                      <h4 class="mb-0 text-dark fw-bold">1,335</h4>
                      <span class="badge bg-label-success rounded-pill fw-medium"><span style="display:inline-block; width: 6px; height: 6px; border-radius: 50%; background: currentcolor; margin-right: 4px;"></span> Paid</span>
                    </div>
                    <div class="border rounded px-3 py-2 d-flex justify-content-between align-items-center">
                      <h4 class="mb-0 text-dark fw-bold">4,366</h4>
                      <span class="badge bg-label-warning rounded-pill fw-medium"><span style="display:inline-block; width: 6px; height: 6px; border-radius: 50%; background: currentcolor; margin-right: 4px;"></span> Pending</span>
                    </div>
                    <div class="border rounded px-3 py-2 d-flex justify-content-between align-items-center">
                      <h4 class="mb-0 text-dark fw-bold">208</h4>
                      <span class="badge bg-label-danger rounded-pill fw-medium"><span style="display:inline-block; width: 6px; height: 6px; border-radius: 50%; background: currentcolor; margin-right: 4px;"></span> Overdue</span>
                    </div>
                    <div class="mt-auto pt-2">
                      <span class="badge text-body fw-medium px-2 py-1" style="background-color: #F4F5FA;">Annual <i class="icon-base ri ri-arrow-down-s-line"></i></span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Messages -->
              <div class="col-md-3 col-lg-3">
                <div class="card h-100">
                  <div class="card-header pb-2 d-flex justify-content-between align-items-center">
                    <h5 class="mb-0 text-dark fw-bold">Messages</h5>
                    <button class="btn btn-sm btn-icon text-muted"><i class="icon-base ri ri-more-fill"></i></button>
                  </div>
                  <div class="card-body pt-3">
                    <ul class="list-unstyled mb-0">
                      <li class="d-flex mb-3 align-items-center pb-1">
                        <div class="avatar me-3">
                          <img src="../assets/img/avatars/2.png" alt="Avatar" class="rounded-circle" />
                        </div>
                        <div class="d-flex flex-column flex-grow-1">
                          <div class="d-flex justify-content-between align-items-center">
                            <h6 class="mb-0 text-dark">Jane Cooper</h6>
                            <small class="text-muted" style="font-size: 11px;">12:34 pm</small>
                          </div>
                          <small class="text-muted text-truncate" style="max-width: 140px; font-size: 12px;">Don't forget the lab repo...</small>
                        </div>
                      </li>
                      <li class="d-flex mb-3 align-items-center pb-1">
                        <div class="avatar me-3">
                          <img src="../assets/img/avatars/3.png" alt="Avatar" class="rounded-circle" />
                        </div>
                        <div class="d-flex flex-column flex-grow-1">
                          <div class="d-flex justify-content-between align-items-center">
                            <h6 class="mb-0 text-dark">Kristin Watson</h6>
                            <small class="text-muted" style="font-size: 11px;">12:34 pm</small>
                          </div>
                          <small class="text-muted text-truncate" style="max-width: 140px; font-size: 12px;">Do we have maths test...</small>
                        </div>
                      </li>
                      <li class="d-flex mb-3 align-items-center pb-1">
                        <div class="avatar me-3">
                          <img src="../assets/img/avatars/4.png" alt="Avatar" class="rounded-circle" />
                        </div>
                        <div class="d-flex flex-column flex-grow-1">
                          <div class="d-flex justify-content-between align-items-center">
                            <h6 class="mb-0 text-dark">Jenny Wilson</h6>
                            <small class="text-muted" style="font-size: 11px;">12:34 pm</small>
                          </div>
                          <small class="text-muted text-truncate" style="max-width: 140px; font-size: 12px;">Wud?</small>
                        </div>
                      </li>
                      <li class="d-flex mb-3 align-items-center pb-1">
                        <div class="avatar me-3">
                          <img src="../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle" />
                        </div>
                        <div class="d-flex flex-column flex-grow-1">
                          <div class="d-flex justify-content-between align-items-center">
                            <h6 class="mb-0 text-dark">Brooklyn Sim</h6>
                            <small class="text-muted" style="font-size: 11px;">12:34 pm</small>
                          </div>
                          <small class="text-muted text-truncate" style="max-width: 140px; font-size: 12px;">Did Sachin gave any ki...</small>
                        </div>
                      </li>
                      <li class="d-flex align-items-center">
                        <div class="avatar me-3">
                          <img src="../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle" />
                        </div>
                        <div class="d-flex flex-column flex-grow-1">
                          <div class="d-flex justify-content-between align-items-center">
                            <h6 class="mb-0 text-dark">Darrell Steward</h6>
                            <small class="text-muted" style="font-size: 11px;">12:34 pm</small>
                          </div>
                          <small class="text-muted text-truncate" style="max-width: 140px; font-size: 12px;">Can we go for a movie...</small>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <!-- / Content -->`;

content = content.replace(contentRegex, newContent);

// Add icons to the Navbar
const navbarRegex = /<div class="navbar-nav-right d-flex align-items-center justify-content-end" id="navbar-collapse">[\s\S]*?<!-- User -->/;
const newNavbar = `<div class="navbar-nav-right d-flex align-items-center justify-content-end" id="navbar-collapse">
            <!-- Search -->
            <div class="navbar-nav align-items-center">
              <div class="nav-item d-flex align-items-center bg-light rounded-pill px-3 py-1" style="background-color: #F4F5FA !important;">
                <i class="icon-base ri ri-search-line icon-md lh-0 text-muted"></i>
                <input type="text" class="form-control border-0 shadow-none bg-transparent ps-2" placeholder="Search"
                  aria-label="Search" style="width: 200px;" />
              </div>
            </div>
            <!-- /Search -->

            <ul class="navbar-nav flex-row align-items-center ms-md-auto">
              <!-- Quick actions -->
              <li class="nav-item me-2">
                <a class="nav-link btn btn-icon btn-sm text-muted rounded-circle" style="background-color: #F4F5FA;" href="javascript:void(0);">
                  <i class="icon-base ri ri-notification-3-line"></i>
                </a>
              </li>
              <li class="nav-item me-2">
                <a class="nav-link btn btn-icon btn-sm text-muted rounded-circle" style="background-color: #F4F5FA;" href="javascript:void(0);">
                  <i class="icon-base ri ri-message-3-line"></i>
                </a>
              </li>
              <li class="nav-item me-3">
                <a class="nav-link btn btn-icon btn-sm text-muted rounded-circle" style="background-color: #F4F5FA;" href="javascript:void(0);">
                  <i class="icon-base ri ri-settings-4-line"></i>
                </a>
              </li>

              <!-- User -->`;
              
content = content.replace(navbarRegex, newNavbar);

fs.writeFileSync(htmlPath, content);
console.log('Layout updated successfully.');
