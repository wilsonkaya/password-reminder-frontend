'use strict';

const api = require('./api.js');
const ui = require('./ui.js');
// attach getFormFields globally

const getFormFields = require('../../../lib/get-form-fields');

// get in the habit of naming your handlers, it eases debugging.
//
// also, follow a convention for handlers. here, I name my handler
// beginning with 'on' to denote that it is done when the GET /books
// button is clicked
// const onGetAccount = function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//
//  if (data.book.id.length === 0){
//     api.index()
//       .then(ui.onSuccess)
//       .catch(ui.onError);
//   } else {
//     api.show(data.book.id)
//       .then(ui.onSuccess)
//       .catch(ui.onError);
//   }
//
// };
//
// const onDeleteAccount = function(event){
//   event.preventDefault();
//   // let bookId = $('#delete-book-id').val();
//   // multiple ways to do everything.
//   // However prefer this way.
//
//  let data = getFormFields(event.target);
//   api.destroy(data.book.id)
//     .then(ui.onDeleteSuccess)
//     .catch(ui.onError);
// };
//
// const onPatchAccount = function(event){
//   event.preventDefault();
//
//  let data = getFormFields(event.target);
//   api.patch(data)
//     .then(ui.onPatchSuccess)
//     .catch(ui.onError);
// };

const onPostAccount = function(event){
  event.preventDefault();

 let data = getFormFields(event.target);
 console.log(data);
  api.post(data)
    .then(ui.onPostSuccess)
    .catch(ui.onError);
};

const accountHandlers = () => {
  // $('#create-hint').on('submit', onGetAccount);
  // $('#create-hint').on('submit', onDeleteAccount);
  // $('#create-hint').on('submit', onPatchAccount);
  $('#create-hint').on('submit', onPostAccount);

};
module.exports = {
  accountHandlers
};
