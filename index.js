//Made by Mitchell Reiff/MAPReiff

var request = require('request')

// Init the module
module.exports = (function () {

    var find = function find(game, callback) {

        if (typeof callback !== 'function')
            callback = function callback(err, result) {
                return err || result;
            };

        if (!game || typeof game !== 'object')
            return callback('invalid game');

        if (!game.search)
            return callback('missing search input');

        var result = [],
            timeout = 1000,
            search = game.search,
            reqUrl1 = `http://store.steampowered.com/api/storesearch/?term={${search}}&l=english&cc=US`;

        request.get({
            url: reqUrl1,
            timeout: timeout
        }, function (err, res, body) {

            if (err) return callback(err);
            if (res.statusCode !== 200) return callback(new Error('request failed (' + res.statusCode + ')'));
            if (!body) return callback(new Error('failed to get body content'));

            // Parse body

            var res1 = JSON.parse(body),
                steamID = res1.items[0].id,
                reqUrl2 = `http://store.steampowered.com/api/appdetails?appids=${steamID}`

            request.get({
                    url: reqUrl2,
                    timeout: timeout
                },
                function (err, res, body) {
                    if (err) return callback(err);
                    if (res.statusCode !== 200) return callback(new Error('request failed (' + res.statusCode + ')'));
                    if (!body) return callback(new Error('failed to get body content'));

                    var gameData = JSON.parse(body)
                    var data = gameData[steamID].data
                    return callback(null, data);

                })
        });
    };

    return {
        find: find
    };
})();