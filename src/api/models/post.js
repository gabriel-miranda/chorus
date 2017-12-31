import DBObject from './dbobject';
import { EXCERPT_LENGHT } from '../../lib/post';

export default class Post extends DBObject {
  buildSummary() {
    const excerpt = `${this.content[0].body.substring(0, EXCERPT_LENGHT)}...`;
    delete this.content;
    return {
      ...this,
      excerpt,
    };
  }
}
