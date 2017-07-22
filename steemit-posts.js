(function ($) {

    // User Blog
    $.fn.steemitBlog = function(options) {

        var settings = $.extend({
            user: "mkt",
            limit: 10,
            postTemplate: '<div><a href="${URL}">${TITLE}</a>${RESTEEMED}<br>${Payout}, ${UPVOTES} Upvotes, ${COMMENTS} Comments</div>',
            defaultImage: 'http://via.placeholder.com/860x460',
            resteemedHtml: ' (resteemed) ',
            dateCallback: function (date) {
                return date;
            }
        }, options);

        var blogContainer = this;

        steem.api.getDiscussionsByBlog({tag: settings.user, limit: settings.limit}, function(err, blog) {
            for (var i = 0; i < blog.length; i++) {
                var metaData = JSON.parse(blog[i].json_metadata);
                var html = settings.postTemplate
                    .replace(/\${URL}/gi, 'https://steemit.com' + blog[i].url)
                    .replace(/\${TITLE}/gi, blog[i].title)
                    .replace(/\${AUTHOR}/gi, blog[i].author)
                    .replace(/\${RESTEEMED}/gi, blog[i].author != settings.user ? settings.resteemedHtml : '')
                    .replace(/\${DATE}/gi, settings.dateCallback(new Date(blog[i].created)))
                    .replace(/\${IMAGE}/gi, metaData.image ? metaData.image[0] : settings.defaultImage)
                    .replace(/\${PAYOUT}/gi, blog[i].pending_payout_value)
                    .replace(/\${COMMENTS}/gi, blog[i].children)
                    .replace(/\${UPVOTES}/gi, blog[i].net_votes)
                    .replace(/\${MAINTAG}/gi, metaData.tags[0]);

                blogContainer.append($(html));
            }
        });
    };

    // User Feed
    $.fn.steemitFeed = function(options) {

        var settings = $.extend({
            user: "mkt",
            limit: 10,
            postTemplate: '<div><a href="${URL}">${TITLE}</a>${RESTEEMED}<br>${Payout}, ${UPVOTES} Upvotes, ${COMMENTS} Comments</div>',
            defaultImage: 'http://via.placeholder.com/860x460',
            resteemedHtml: ' (resteemed) ',
            dateCallback: function (date) {
                return date;
            }
        }, options);

        var blogContainer = this;

        steem.api.getDiscussionsByFeed({tag: settings.user, limit: settings.limit}, function(err, blog) {
            for (var i = 0; i < blog.length; i++) {
                var metaData = JSON.parse(blog[i].json_metadata);
                var html = settings.postTemplate
                    .replace(/\${URL}/gi, 'https://steemit.com' + blog[i].url)
                    .replace(/\${TITLE}/gi, blog[i].title)
                    .replace(/\${AUTHOR}/gi, blog[i].author)
                    .replace(/\${RESTEEMED}/gi, blog[i].first_reblogged_by ? settings.resteemedHtml : '')
                    .replace(/\${RESTEEMEDBY}/gi, blog[i].first_reblogged_by ? 'resteemed by ' + blog[i].first_reblogged_by : '')
                    .replace(/\${DATE}/gi, settings.dateCallback(new Date(blog[i].created)))
                    .replace(/\${IMAGE}/gi, metaData.image ? metaData.image[0] : settings.defaultImage)
                    .replace(/\${PAYOUT}/gi, blog[i].pending_payout_value)
                    .replace(/\${COMMENTS}/gi, blog[i].children)
                    .replace(/\${UPVOTES}/gi, blog[i].net_votes)
                    .replace(/\${MAINTAG}/gi, metaData.tags[0]);

                blogContainer.append($(html));
            }
        });
    };

    // Trending
    $.fn.steemitTrending = function(options) {

        var settings = $.extend({
            tag: null,
            limit: 10,
            postTemplate: '<div><a href="${URL}">${TITLE}</a><br>${Payout}, ${UPVOTES} Upvotes, ${COMMENTS} Comments</div>',
            defaultImage: 'http://via.placeholder.com/860x460',
            dateCallback: function (date) {
                return date;
            }
        }, options);

        var blogContainer = this;

        steem.api.getDiscussionsByTrending({tag: settings.tag, limit: settings.limit}, function(err, blog) {
            for (var i = 0; i < blog.length; i++) {
                var metaData = JSON.parse(blog[i].json_metadata);
                var html = settings.postTemplate
                    .replace(/\${URL}/gi, 'https://steemit.com' + blog[i].url)
                    .replace(/\${TITLE}/gi, blog[i].title)
                    .replace(/\${AUTHOR}/gi, blog[i].author)
                    .replace(/\${DATE}/gi, settings.dateCallback(new Date(blog[i].created)))
                    .replace(/\${IMAGE}/gi, metaData.image ? metaData.image[0] : settings.defaultImage)
                    .replace(/\${PAYOUT}/gi, blog[i].pending_payout_value)
                    .replace(/\${COMMENTS}/gi, blog[i].children)
                    .replace(/\${UPVOTES}/gi, blog[i].net_votes)
                    .replace(/\${MAINTAG}/gi, metaData.tags[0]);

                blogContainer.append($(html));
            }
        });
    };

    // Hot
    $.fn.steemitHot = function(options) {

        var settings = $.extend({
            tag: null,
            limit: 10,
            postTemplate: '<div><a href="${URL}">${TITLE}</a><br>${Payout}, ${UPVOTES} Upvotes, ${COMMENTS} Comments</div>',
            defaultImage: 'http://via.placeholder.com/860x460',
            dateCallback: function (date) {
                return date;
            }
        }, options);

        var blogContainer = this;

        steem.api.getDiscussionsByHot({tag: settings.tag, limit: settings.limit}, function(err, blog) {
            for (var i = 0; i < blog.length; i++) {
                var metaData = JSON.parse(blog[i].json_metadata);
                var html = settings.postTemplate
                    .replace(/\${URL}/gi, 'https://steemit.com' + blog[i].url)
                    .replace(/\${TITLE}/gi, blog[i].title)
                    .replace(/\${AUTHOR}/gi, blog[i].author)
                    .replace(/\${DATE}/gi, settings.dateCallback(new Date(blog[i].created)))
                    .replace(/\${IMAGE}/gi, metaData.image ? metaData.image[0] : settings.defaultImage)
                    .replace(/\${PAYOUT}/gi, blog[i].pending_payout_value)
                    .replace(/\${COMMENTS}/gi, blog[i].children)
                    .replace(/\${UPVOTES}/gi, blog[i].net_votes)
                    .replace(/\${MAINTAG}/gi, metaData.tags[0]);

                blogContainer.append($(html));
            }
        });
    };

}(jQuery));
