# Steemit Posts

### This jQuery plugin lets you display posts from steemit.com on your website. See a [live demo](https://markus-kottlaender.de) on my website.

For the impatient, here's a quick minimum implementation to display your own posts:

```html
<body>
  <h1>My Steemit Blog</h1>
  <div id="blog"></div>

  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
  <script src="https://cdn.steemjs.com/lib/latest/steem.min.js"></script>
  <script src="https://cdn.rawgit.com/mktcode/steemit-posts/9dd3edfa/steemit-posts.js"></script>
  <script>
    $('#blog').steemitBlog({user: 'your-username'});
  </script>
</body>
```
You can adjust it to your needs, by looking at the [options](#step-3-configure).

There is also a simple and an advanced example html file in the `examples` directory.

# Step 1: Installation

The fastest and easiest way to include all necessary files is to use CDN resources like in the example above. This way you don't have to download and host the files yourself.

However, you can also [download the archive](https://github.com/mktcode/steemit-posts/archive/master.zip) and copy the files to your website directory.

Given the following directory structure:

```
website/
|-- index.html
|-- js/
    |-- steemit-posts/
        |-- steemit-posts.js
        |-- lib/
            |-- jquery-3.2.1.min.js
            |-- steem.min.js
```

The includes look like this:

```html
<script src="/js/steemit-posts/lib/jquery-3.2.1.min.js"></script>
<script src="/js/steemit-posts/lib/steem.min.js"></script>
<script src="/js/steemit-posts/steemit-posts.js"></script>
```

# Step 2: Initiate

First of all you'll need a place on your website where the posts should be displayed. Just put and empty `div` element somehwere in your html and give it an id.

```html
<h2>My Steemit Blog</h2>

<div id="blog"></div>
```

Next you have to initiate the plugin. This must be after the includes from the first step.

```html
<script src="/js/steemit-posts/lib/jquery-3.2.1.min.js"></script>
<script src="/js/steemit-posts/lib/steem.min.js"></script>
<script src="/js/steemit-posts/steemit-posts.js"></script>
<script>
  $('#blog').steemitBlog({user: 'your-username'});
</script>
```
You can not only display a users blog but also a users feed and trending or hot posts from a specific tag or all of them.

## Feed

```html
<script>
  $('#blog').steemitFeed({user: 'your-username'});
</script>
```

## Trending

```html
<script>
  // display trending posts from all tags
  $('#blog').steemitTrending();

  // display trending posts from the steemit tag
  $('#blog').steemitTrending({tag: 'steemit'});
</script>
```

## Hot

```html
<script>
  // display hot posts from all tags
  $('#blog').steemitHot();

  // display hot posts from the life tag
  $('#blog').steemitHot({tag: 'life'});
</script>
```

# Step 3: Configure

To adjust the output to your needs you can use the following options. (They are slightly different for blog/feed and trending/hot.)

## Options for Blog and Feed

- **user**: (string) the steemit.com username (default: `'mkt'`)
- **resteemedIndicator**: (string) html output if a post was resteemed (default: `' (resteemed) '`)

## Options for Trending and Hot

- **tag**: (string) a tag from steemit.com (default: `null`)

## Options for All

- **limit**: (integer) the maximum number of posts to show (default: `10`)
- **dateCallback**: (callback) a callback function to manipulate the date output, (default: `function (date) {return date;}`
- **defaultImage**: (string) default image source
- **postTemplate**: (string) the html template for a post (default: `'<div><a href="${URL}">${TITLE}</a>${RESTEEMED}<br>${Payout}, ${UPVOTES} Upvotes, ${COMMENTS} Comments</div>'`

# Step 4: Styling and Placeholders

The html output for each post can be completely customized by using the `postTemplate` option. In this html template you can use the following placeholders:

- *${TITLE}*: post title
- *${AUTHOR}*: post author
- *${DATE}*: date of post creation
- *${IMAGE}*: post image
- *${RESTEEMED}*: html from `resteemedIndicator` option
- *${RESTEEMEDBY}*: user who resteemed the post
- *${PAYOUT}*: total post payout in SBD
- *${COMMENTS}*: number of comments
- *${UPVOTES}*: number of upvotes
- *${MAINTAG}*: the first tag of the post (category)

## Date Format

To format the post dates you can use moment.js which is included in the `lib` directory.

```html
<script src="/js/steemit-posts/lib/jquery-3.2.1.min.js"></script>
<script src="/js/steemit-posts/lib/moment.min.js"></script>
<script src="/js/steemit-posts/lib/steem.min.js"></script>
<script src="/js/steemit-posts/steemit-posts.js"></script>
<script>
  $('#blog').steemitBlog({
    user: 'mkt',
    dateCallback: function (date) {
      return moment(date).format('MMMM Do YYYY, h:mm a');
    }
  });
</script>
```
