export const shortenTxt = (txt, limit) => {
  var newTxt = [];

  if (txt.length > limit) {
    txt.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTxt.push(cur);
      }
      return acc + cur.length;
    }, 0);

    // return the result
    return newTxt.join(' ') + '...';
  }
  return txt;
};
