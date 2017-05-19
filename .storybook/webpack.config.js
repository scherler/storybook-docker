const path = require('path');

module.exports = {
    module: {},
    node: {
        net: "empty",
        dns: "empty",
        tls: "empty"
    },
    resolve: {
        extensions: [
            '.js',
            '', '.jsx'
        ],
    },
    externals: {
       'jsdom': 'window',
       'cheerio': 'window',
       'react/lib/ExecutionEnvironment': true,
       'react/lib/ReactContext': 'window',
       'react/addons': true,
     }
};
