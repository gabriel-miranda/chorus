import shortid from 'shortid';
import validate from '../../lib/validations';

export default class DBObject {
  constructor(props) {
    this.created = props.created || new Date(Date.now()).toISOString();
    this._id = props._id || shortid.generate();
    Object.keys(props).forEach((k) => {
      this[k] = props[k];
    });
    this.validate();
  }
  validate() {
    Object.keys(this).forEach((k) => {
      validate[this.constructor.name][k](this[k]);
    });
  }
}
