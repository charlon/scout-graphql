import {buttonCounter} from './button_counter';

// Initialize your hybrid app
$(document).on('turbolinks:load', function() {

  console.log("turbolinks load event fired!");
  buttonCounter();

});
