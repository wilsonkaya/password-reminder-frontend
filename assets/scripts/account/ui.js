'use strict';
const showBooksTemplate = require('../templates/account-listing.handlebars');
// const logic = require("../programlogic.js");
const onSuccess = (data) => {
  let showBooksHtml = showBooksTemplate({ accounts: data.accounts });
  $('.content').append(showBooksHtml);
};

const onError = function (response) {
  console.error(response);
};

const onDeleteSuccess = function () {
  console.log('Account was successfully deleted.');
};


const onPatchSuccess = (data) => {
  console.log(data);
  // console.log(data);
  // let showBooksHtml = showBooksTemplate({ accounts: data.accounts });
  // $('.content').append(showBooksHtml);

};

const onPostSuccess = function (data) {
  $("#warning-create-new-data").text("Succesfull !");
  console.log(data);
};

const onPostError = function() {
  $("#warning-create-new-data").text("Please fill in !");
};
module.exports = {
  onSuccess,
  onError,
  onDeleteSuccess,
  onPatchSuccess,
  onPostSuccess,
  onPostError
};
