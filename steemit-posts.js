(function ($) {
 
    $.fn.steemitBlog = function(options) {
 
        var settings = $.extend({
            user: "mkt",
            limit: 10,
            postTemplate: '<a class="steemit-post" href="https://steemit.com${URL}"><h2>${TITLE}</h2><h5>${DATE}</h5><img src="${IMAGE}" alt="${TITLE}" /><p>${PAYOUT}</p><p>${COMMENTS} comments</p><p>${UPVOTES} upvotes</p></a>',
            dateCallback: function (date) {
                return date;
            }
        }, options);
 
        var blogContainer = this;

        steem.api.getDiscussionsByBlog({tag: settings.user, limit: settings.limit}, function(err, blog) {
            for (var i = 0; i < blog.length; i++) {
                var metaData = JSON.parse(blog[i].json_metadata);
                var html = settings.postTemplate
                    .replace(/\${URL}/gi, blog[i].url)
                    .replace(/\${TITLE}/gi, blog[i].title)
                    .replace(/\${DATE}/gi, settings.dateCallback(new Date(blog[i].created)))
                    .replace(/\${IMAGE}/gi, metaData.image[0])
                    .replace(/\${PAYOUT}/gi, blog[i].pending_payout_value)
                    .replace(/\${COMMENTS}/gi, blog[i].children)
                    .replace(/\${UPVOTES}/gi, blog[i].net_votes);

                blogContainer.append($(html));
            }
        });
 
    };
 
}(jQuery));
