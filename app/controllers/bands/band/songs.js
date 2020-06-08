import Controller from '@ember/controller';
import { action } from '@ember/object';
import Song from 'rarwe/models/song';
import { empty } from '@ember/object/computed';

export default Controller.extend({
  isAddingSong: false,
  newSongName: '',
  isAddButtonDisabled: empty('newSongName'),
  addSong: action(function() {
    this.set('isAddingSong', true);
  }),

  cancelAddSong: action(function() {
    this.set('isAddingSong', false);
  }),

  saveSong: action(function(event) {
    event.preventDefault();
    let newSong = Song.create({ title: this.newSongName });
    this.model.songs.pushObject(newSong);
    this.set('newSongName', '')
  }),

  updateRating: action(function(song, rating) {
    song.set('rating', song.rating === rating ? 0 : rating);
  })

});
