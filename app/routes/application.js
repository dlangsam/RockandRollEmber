import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

export default Route.extend({
    model() {
        let blackDog = EmberObject.create({
            title: 'Black Dog',
            band: 'Led Zepppelin',
            rating: 3
        });

        let yellowLedbetter = EmberObject.create({
            title: 'Yellow Ledbetter',
            band: 'Pearl Jam', 
            rating: 4
        });

        let pretender = EmberObject.create({
            title: 'The Pretender',
            band: 'Foo Fighters', 
            rating: 2
        });

        return A([blackDog, yellowLedbetter, pretender]);
    }
});

