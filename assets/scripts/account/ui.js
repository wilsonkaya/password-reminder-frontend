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


const onPatchSuccess = () => {
  $(".warning-update-data").text("Succesfull !");
  setTimeout(function() {$('.kapat').modal('hide');}, 1300);
  setTimeout(function() {$('.warning-update-data').text("");}, 1300);

};


const onPostSuccess = function (data) {
  $("#warning-create-new-data").text("Succesfull !");
  setTimeout(function() {$('#myModal-create-password').modal('hide');}, 1300);
  setTimeout(function() {$('.clean-create').val("");}, 1300);
  setTimeout(function() {$('#warning-create-new-data').text("");}, 1300);
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
