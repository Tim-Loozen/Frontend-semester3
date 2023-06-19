<template>
  <nav class="navbar navbar-light navbar-glass navbar-top navbar-expand t">
    <button class="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse"
            aria-expanded="false" aria-label="Toggle Navigation"><span class="navbar-toggle-icon"><span
        class="toggle-line"></span></span></button>
    <ul class="navbar-nav align-items-center d-none d-lg-block">
      <li class="nav-item">
        <div class="search-box">
          <form class="position-relative show" data-bs-toggle="search" data-bs-display="static" aria-expanded="true">
            <input
                class="form-control search-input fuzzy-search" type="search" placeholder="Search..."
                aria-label="Search">
            <svg class="svg-inline--fa fa-search fa-w-16 search-box-icon" aria-hidden="true" focusable="false"
                 data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512" data-fa-i2svg="">
              <path fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
          </form>
        </div>
      </li>
    </ul>
    <ul class="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
      <li class="nav-item dropdown">
        <a class="nav-link notification-indicator notification-indicator-primary px-0 fa-icon-wait"
           id="navbarDropdownNotification" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
           aria-expanded="false" data-hide-on-body-scroll="data-hide-on-body-scroll">
          <svg class="svg-inline--fa fa-bell fa-w-14" data-fa-transform="shrink-6"
               style="font-size: 33px;transform-origin: 0.4375em 0.5em;" aria-hidden="true" focusable="false"
               data-prefix="fas" data-icon="bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
               data-fa-i2svg="">
            <g transform="translate(224 256)">
              <g transform="translate(0, 0)  scale(0.625, 0.625)  rotate(0 0 0)">
                <path fill="currentColor"
                      d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
                      transform="translate(-224 -256)"></path>
              </g>
            </g>
          </svg>
        </a>
      </li>
      <li class="nav-item dropdown px-1">
        <a class="nav-link fa-icon-wait nine-dots p-1" id="navbarDropdownMenu" role="button"
           data-hide-on-body-scroll="data-hide-on-body-scroll" data-bs-toggle="dropdown" aria-haspopup="true"
           aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="43" viewBox="0 0 16 16" fill="none">
            <circle cx="2" cy="2" r="2" fill="#6C6E71"></circle>
            <circle cx="2" cy="8" r="2" fill="#6C6E71"></circle>
            <circle cx="2" cy="14" r="2" fill="#6C6E71"></circle>
            <circle cx="8" cy="8" r="2" fill="#6C6E71"></circle>
            <circle cx="8" cy="14" r="2" fill="#6C6E71"></circle>
            <circle cx="14" cy="8" r="2" fill="#6C6E71"></circle>
            <circle cx="14" cy="14" r="2" fill="#6C6E71"></circle>
            <circle cx="8" cy="2" r="2" fill="#6C6E71"></circle>
            <circle cx="14" cy="2" r="2" fill="#6C6E71"></circle>
          </svg>
        </a>
        <div class="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end dropdown-menu-card dropdown-caret-bg"
             aria-labelledby="navbarDropdownMenu">
          <div class="card shadow-none">

          </div>
        </div>
      </li>
      <li class="nav-item dropdown"><a class="nav-link pe-0 ps-2" id="navbarDropdownUser" role="button"
                                       data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <div class="avatar avatar-xl">
          <img class="rounded-circle" src="../../../public/avatar.jpg" alt="">
        </div>
      </a>
        <div class="dropdown-menu dropdown-caret dropdown-caret dropdown-menu-end py-0"
             aria-labelledby="navbarDropdownUser">
          <div class="bg-white dark__bg-1000 rounded-2 py-2">
            <a class="dropdown-item fw-bold text-warning" href="#!">
              <svg class="svg-inline--fa fa-crown fa-w-20 me-1" aria-hidden="true" focusable="false" data-prefix="fas"
                   data-icon="crown" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                   data-fa-i2svg="">
                <path fill="currentColor"
                      d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"></path>
              </svg><!-- <span class="fas fa-crown me-1"></span> Font Awesome fontawesome.com --><span>Go Pro</span></a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#!">Set status</a>
            <a class="dropdown-item" href="pages/user/profile.html">Profile &amp; account</a>
            <a class="dropdown-item" href="#!">Feedback</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="/dashboard/personal/settings">Settings</a>
            <a class="dropdown-item" href="/" onclick="localStorage.clear()">Uitloggen</a>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "search"
}
</script>

<style scoped>

</style>
