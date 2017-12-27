const v = (t, m) => {
  if (!t) {
    throw new Error(`Validation Error: ${m} is not valid`);
  }
};

function created(date) {
  return v(!Number.isNaN(Date.parse(date)), 'date');
}

function _id(id) {
  v(typeof id === 'string' && id.length > 6 && id.length < 15, 'id');
}

const DBObject = {
  _id,
  created,
};

const Post = {
  ...DBObject,
  title: t => v(typeof t === 'string' && t.length > 1 && t.length < 70, 'title'),
  content: c => v(typeof c === 'string' && c.length > 1 && c.length < 25000, 'content'),
};

export default {
  Post,
};
