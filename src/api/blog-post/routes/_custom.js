module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/blog-posts/:slug',
            handler: 'blog-post.findOne',
            config: {
                auth: false
            },
        }
    ]
}