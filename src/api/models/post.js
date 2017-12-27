import DBObject from './dbobject';

export default class Post extends DBObject {
  constructor(title, content) {
    super({title, content});
  }
}
