'use strict';
const showBooksTemplate = require('../templates/account-listing.handlebars');
// const logic = require("../programlogic.js");
const onSuccess = (data) => {

  console.log(data);
  let showBooksHtml = showBooksTemplate({ accounts: data.accounts });
  $('.content').append(showBooksHtml);

// console.log(data)
//   logic.print(data);


};

const onError = function (response) {
  console.error(response);
};

const onDeleteSuccess = function () {
  console.log('Book was successfully deleted.');
};

const onPatchSuccess = function () {
  console.log('Book was successfully patched.');
};

const onPostSuccess = function (data) {
  console.log('Book was successfully posted.');
  console.log(data);
};
module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onPatchSuccess,
  onPostSuccess
};
