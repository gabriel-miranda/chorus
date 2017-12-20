const v = (t, m) => {
  if (!t) {
    throw new Error(`Validation Error: ${m} is not valid`);
  }
};

export default {
  created: d => v(!isNaN(Date.parse(d)), 'date'),
  _id: i => v(typeof i === 'string' && i.length > 6 && i.length < 15),
  title: t => v(typeof t === 'string' && t.length > 1 && t.length < 70),
  content: c => v(typeof c === 'string' && c.length > 1 && c.length < 25000),
};
