import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import { empty, sort } from '@ember/object/computed';

export default Controller.extend({
  isAddingSong: false,
  newSongName: '',
  sortBy: 'ratingDesc',
  searchTerm: '',
  queryParams: {
    sortBy: 's',
    searchTerm: 'q'
  },

  sortProperties: computed('sortBy', function() {
    let options = {
      ratingDesc: ['rating:desc', 'title:asc'],
      ratingAsc: ['rating:asc', 'title:asc'],
      titleDesc: ['title:desc'],
      titleAsc: ['tite:asc']
    };
    return options[this.sortBy];
   
  }),

  sortedSongs: sort('matchingSongs', 'sortProperties'),
  isAddButtonDisabled: empty('newSongName'),
  addSong: action(function() {
    this.set('isAddingSong', true);
  }),

  matchingSongs: computed('model.songs.@each.title', 'searchTerm',
  function() {
    let searchTerm = this.searchTerm.toLowerCase();
    return this.model.get('songs').filter((song) => {
      return song.title.toLowerCase().includes(searchTerm);
    });
  }),

  cancelAddSong: action(function() {
    this.set('isAddingSong', false);
  }),

  saveSong: action(async function(event) {
    event.preventDefault();
    let newSong =this.store.createRecord('song', {
      title: this.get('newSongName'),
      band: this.model
    });
    await newSong.save();

    this.set('newSongName', '')
  }),

  updateRating: action(function(song, rating) {
    song.set('rating', song.rating === rating ? 0 : rating);
    song.save();
  })

});
