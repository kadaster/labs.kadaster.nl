<!DOCTYPE html>
<html lang="{{ site.lang | default: 'nl-NL' }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <title>{{ site.title }}</title>
    <link rel="shortcut icon" href="/assets/images/kadaster-logo.png">
    <link rel="apple-touch-icon" href="/assets/images/kadaster-logo.png">
    <link rel="stylesheet" href="{{ '/assets/css/style.css?v=' | append: site.github.build_revision }}">
    <link rel="stylesheet" href="{{ '/assets/css/theme.css?v=' | append: site.github.build_revision }}">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  </head>
  <body>
    <div class="content">
      <nav class="navbar">
        <div class="navbar-content">
          {%- comment -%}
          When adding changes within this make sure that the selector for the mobile menu still works as it traverses each sibling.
          {%- endcomment -%}
          <input id="mobileNav" type="checkbox" style="display:none">
          <label for="mobileNav" class="hamburger">
            <div class="hamburgerBar"></div>
            <div class="hamburgerBar"></div>
            <div class="hamburgerBar"></div>
          </label>
          <a href="/" class="branding">
            <div class="navbar-title">
              <img class="navbar-icon" src="/assets/images/kadaster-logo-full.png">
            </div>
          </a>
          <div class="navbar-collapsible">
            <a href="/" class="branding">
              <div class="navbar-title">Use Cases</div>
            </a>
            <div class="dropdown">
              <input id="buildingBlockMenu" type="checkbox" style="display: none">
              <div class="navbar-title">
                <label for="buildingBlockMenu">Bouwblokken</label>
              </div>
              <div class="dropdown-items">
                <a href="/stories">
                  <div class="navbar-title">Stories</div>
                </a>
                <a href="/browsers">
                  <div class="navbar-title">Browsers</div>
                </a>
                <a href="/demonstrators">
                  <div class="navbar-title">Demonstrators</div>
                </a>
                <a href="/data" target="_blank">
                  <div class="navbar-title">Data</div>
                </a>
              </div>
            </div>
            <a href="/dissemination">
              <div class="navbar-title">Dissemination</div>
            </a>
            <a href="/internships">
              <div class="navbar-title">Internships</div>
            </a>
            <div class="space"></div>
            <a href="/about">
              <div class="navbar-title">Over ons</div>
            </a>
          </div>
        </div>
      </nav>
      <section class="content">
        <div class="banner">
          <span class="banner-overlay"></span>
          <picture>
            <img class="banner-image" src="{{ page.banner }}">
          </picture>
        </div>
        {{ content }}
      </section>
      <footer></footer>
    </div>
    <script src="/assets/js/main.js"></script>
  </body>
</html>
