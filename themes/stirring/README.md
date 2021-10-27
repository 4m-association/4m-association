# Stirring

Stirring is a theme for Pelican, it's inspired by the Pelican's theme [Medius](https://github.com/onur/medius) and [Fresh](https://github.com/jsliang/pelican-fresh), Hexo's theme [Tranquilpeak](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak), and website [Medium](https://medium.com/).

Check out live demo for the Stirring theme [here](https://hansliu.com/pelican-stirring/demo).

[![screenshot](/screenshot.png)](https://hansliu.com/pelican-stirring/demo)

- [Features](#features)
- [Settings](#settings)
- [Contributing](#contributing)
- [License](#license)

**General features:**

- Fully responsive
- Customizable favicon icon
- Customizable background image
- Navigation menu
- Customizable menu icon
- Customizable menu display
- Customizable category image
- Customizable social icon
- Image lightbox gallery
- Image lazyload
- Pagination

**Integrated services:**

- Google Analytics
- Google Custom Search Engine
- Disqus

**Integrated plugins:**

- [Related Posts](https://github.com/pelican-plugins/related-posts)

**Depended libraries:**

- [Bootstrap 4.5](https://getbootstrap.com/)
- [Font Awesome 5](https://fontawesome.com/)
- [jQuery 3.5.1](https://github.com/jquery/jquery)
- [Magnific Popup](https://github.com/dimsemenov/Magnific-Popup)
- [Lazy Load](https://github.com/tuupola/lazyload)

### Built-in Global Variables

- DISQUS_SITENAME
- GOOGLE_ANALYTICS

```python
DISQUS_SITENAME = 'your disqus sitename'
GOOGLE_ANALYTICS = 'your google analytics Id'
```

### Theme-specific Global Variables

- GOOGLE_CUSTOM_SEARCH
- SITEAUTHORS
- SITECATEGORIES
- SITEFAVICON
- SITECOVER
- THEME_MENUITEMS
- THEME_SOCIAL
- INTERNAL_LINKS

```python
GOOGLE_CUSTOM_SEARCH = 'your google custom search Id'
SITEAUTHORS = {
    'the author name': {
        'image': 'the author image',
        'description': 'the author profile'
    }
}
SITECATEGORIES =
    'the category name': {
        'image': 'the category image',
    }
}
SITEFAVICON = 'your favicon.ico path'
SITECOVER = 'your background cover image path'
# Replace MENUITEMS, the tuple list support font awesome icon
THEME_MENUITEMS = (
    ('Home', '#', 'fas fa-home'),
    ('You can modify those links in your config file', '#', 'font awesome icon')
)
# Replace SOCIAL, the tuple list support font awesome icon
THEME_SOCIAL = (
    ('Github', 'https://github.com/hansliu', 'fab fa-github-square fa-2x'),
    ('You can modify those links in your config file', '#', 'font awesome icon')
)
# The INTERNAL LINKS open the linked in current window
INTERNAL_LINKS = (
    ('Terms', 'pages/tos.html'),
    ('Privacy', 'pages/privacy.html'),
    ('You can modify those links in your config file', '#')
)
# Like DISPLAY_PAGES_ON_MENU, you could control DISPLAY_FEEDS_ON_MENU by yourself
DISPLAY_FEEDS_ON_MENU = True
```

### Theme-specific File metadata

The post support the `cover` and `cover_caption` metadata, use for display article in various places. Example metadata used in the post:

```
category: Demo
date: 2020-09-13
cover: https://hansliu.com/theme/images/cover.png
cover_caption: Image by Author
```

*NOTE: you don't need put cover image into article again.*

All kinds of contributions (enhancements, features, documentation & code improvements, bugs reporting) are welcome.

pelican-temp is released under the terms of the [GNU General Public License v3.0](https://github.com/hansliu/pelican-stirring/blob/master/LICENSE)
