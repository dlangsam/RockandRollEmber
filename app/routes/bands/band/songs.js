import Route from '@ember/routing/route';
import { capitalize } from 'rarwe/helpers/capitalize';
import { computed } from '@ember/object';

export default Route.extend({
  model() {
    return this.modelFor('bands.band');
  },
  resetController(controller) { controller.setProperties({
    isAddingSong: false,
              newSongTitle: ''
            });
          },
  newSongPlaceholder: computed('model.name', function() {
    let bandName = this.model.name;
    return `New ${capitalize(bandName)} song`
  })
});