import DBObject from './dbobject';
import { EXCERPT_LENGHT, encodeSlug } from '../../lib/post';

export default class Post extends DBObject {
  buildBaseView() {
    const slug = encodeSlug(this.title, this._id);
    return {
      ...this,
      slug,
    };
  }
  buildSummary() {
    const excerpt = `${this.content[0].body.substring(0, EXCERPT_LENGHT)}...`;
    delete this.content;
    return {
      ...this.buildBaseView(),
      excerpt,
    };
  }
}
