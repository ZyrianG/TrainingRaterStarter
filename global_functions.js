to = function(promise) { // promise syntax
    return promise
    .then(data => {
        return [null, data];
    }).catch(err => [pe(err)])
};