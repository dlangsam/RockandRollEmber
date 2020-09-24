import Route from '@ember/routing/route';
import wait from 'rarwe/utils/wait';

export default Route.extend({
  model() {
    return this.store.findAll('band');
  }
});

