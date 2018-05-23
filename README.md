# Casper-bylucas

Based on the default theme for [Ghost](http://github.com/tryghost/ghost/). This is the latest development version of Casper-bylucas.

![screenshot-desktop](https://user-images.githubusercontent.com/120485/27221326-1e31d326-5280-11e7-866d-82d550a7683b.jpg)

## Ghost

Ghost uses a simple templating language called [Handlebars](http://handlebarsjs.com/) for its themes.

Once you feel comfortable with how everything works, take a look at the full [theme API documentation](https://themes.ghost.org) which explains every possible Handlebars helper and template.

**The main files are:**

- `default.hbs` - The main template file
- `index.hbs` - Used for the home page
- `post.hbs` - Used for individual posts
- `page.hbs` - Used for individual pages
- `tag.hbs` - Used for tag archives
- `author.hbs` - Used for author archives

One really neat trick is that you can also create custom one-off templates just by adding the slug of a page to a template file. For example:

- `page-about.hbs` - Custom template for the `/about/` page
- `tag-news.hbs` - Custom template for `/tag/news/` archive
- `author-ali.hbs` - Custom template for `/author/ali/` archive


## Development
All Scss files are still in place for further development. This theme as been developed with [CodeKit](https://codekitapp.com)


## SVG Icons
The theme uses inline SVG icons, included via Handlebars partials. You can find all icons inside `/partials/icons`. To use an icon just include the name of the relevant file, eg. To include the SVG icon in `/partials/icons/rss.hbs` - use `{{> "icons/rss"}}`. You can use the SVG icons by changing the .hbs extension to .img.

You can add your own SVG icons in the same manner.

## Classes
The theme uses the following extra classes besides all the regular Markdown features:

+ .img-framed - _frames an image_
+ .img-circle - _round images_
+ .table-condensed - condensed table
+ .table-bordered - bordered table
+ .table-striped - striped table

The theme uses `prism.js` for code highlighting - use;

+ code class="language-"
+ pre class="language-"

eg a code block would be:

    -<pre class="langauge-html"><code>your code here</code></pre>

Substitute the `html` for your code langauge

__Full bleed images (#full)__
Super neat trick courtesy of @JoelDrapper

Usage (In Ghost edtior):

    ![img](/some/image.jpg#full)

__Image captions__

Usage (In Ghost editor):

    ![img](/some/image.jpg)
    <small>Your image caption</small>    

## Copyright & License

Copyright (c) 2018 bylucas
