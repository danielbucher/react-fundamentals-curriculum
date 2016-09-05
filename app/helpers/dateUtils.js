var moment = require('moment');

var getDisplayDate = (unixTimestamp) => {
  var date = moment.unix(unixTimestamp);
  return date.format("dddd, MMM D");
}

module.exports.getDisplayDate = getDisplayDate;
