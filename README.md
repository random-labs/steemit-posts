# Steemit Posts

### Show posts from steemit.com blogs on your website. ([demo](https://markus-kottlaender.de))

# Include Files

Include jQuery, Steem.js and the plugin itself into your website.

    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdn.steemjs.com/lib/latest/steem.min.js"></script>
    <script src="https://cdn.rawgit.com/mktcode/steemit-posts/dab46ba5/steemit-posts.js"></script>

You can also download those files and upload them to you webspace. However, using these CDN resources saves performance and space and is quicker.

# Usage

    <script>
        $('#blog').steemitBlog({
            user: 'mkt',
            limit: 10,
            // ...
        });
    </script>

# Options

- **user**: string, the steemit.com username (default: `'mkt'`)
- **limit**: integer, the maximum number of posts to show (default: `10`)
- **dateCallback**: callback, a callback function to manipulation the date output, (default: `function (date) {return date;}`
- **postTemplate**: string, the html template for a post (default: `'<a class="steemit-post" href="https://steemit.com${URL}"><h2>${TITLE}</h2><h5>${DATE}</h5><img src="${IMAGE}" alt="${TITLE}" /><p>${PAYOUT}</p><p>${COMMENTS} comments</p><p>${UPVOTES} upvotes</p></a>'`
- **resteemedHtml**: string, html output if a post was resteemed,
- **defaultImage**: string, default image source

## Placeholders

In the html of the`postTemplate` option you can use the following placeholders:

- *${TITLE}*: post title
- *${RESTEEMED}*: resteemed html
- *${DATE}*: date of post creation
- *${IMAGE}*: post image
- *${PAYOUT}*: total post payout in SBD
- *${COMMENTS}*: number of comments
- *${UPVOTES}*: number of upvotes
- *${MAINTAG}*: the first tag (category)
