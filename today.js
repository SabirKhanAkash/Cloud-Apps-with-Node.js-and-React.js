module.exports.getDate = function getDate() {
    var date = new Date();
    var bdTime = new Date(date.getTime() + (date.getTimezoneOffset() * 60000) + (3600000*6));
    return bdTime;
}