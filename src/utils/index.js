exports.isXHR = (req) => req.header('accept') === '*/*';

exports.getType = (val) => Object.prototype.toString.call(val);

exports.getTime = function getTime(_date = null) {
  const [date, time] = new Date().toLocaleString().split(' ');
  if (_date === 'date') return date;
  if (_date === 'time') return time.split(':').join('_');
  return `${date}_${time}`;
};
