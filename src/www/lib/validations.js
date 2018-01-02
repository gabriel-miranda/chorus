import { TITLE_MAX_LENGTH, BODY_MAX_LENGTH, EXCERPT_LENGTH } from './post';

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
  title: t => v(
    typeof t === 'string' && t.length > 1 && t.length < TITLE_MAX_LENGTH,
    'title',
  ),
  content: (content) => {
    content.forEach(({type, body}) => {
      v(type === 'markdown', 'content.type');
      v(
        typeof body === 'string' && body.length > 1 && body.length < BODY_MAX_LENGTH,
        'content.body',
      );
    });
  },
  excerpt: e => v(typeof e === 'string' && e.length >= EXCERPT_LENGTH, 'excerpt'),
};

export default {
  Post,
};
