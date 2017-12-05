import ApiClient from './api-client';

export default class ChorusApiClient extends ApiClient {
  constructor(req: ?Object) {
    const baseUri = req ? 'proxy://proxy:3000' : '/api';
    super(baseUri, {cacheEnabled: Boolean(req)});
  }
}
