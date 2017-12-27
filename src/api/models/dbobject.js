import shortid from 'shortid';
import validate from '../../lib/validations';

export default class DBObject {
  constructor(props) {
      this.created = new Date(Date.now()).toISOString();
      this._id = shortid.generate();
      for (const k of Object.keys(props)) {
        this[k] = props[k];
      }
      this.validate();
    }
    validate() {
      for (const k of Object.keys(this)) {
          validate[this.constructor.name][k](this[k]);
        }
    }
}
