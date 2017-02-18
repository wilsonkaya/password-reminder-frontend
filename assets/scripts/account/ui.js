'use strict';

const onSuccess = function (data) {
//  debugger;
  if (data) {
    console.log(data.account);
  } else {
    console.table(data.account);
  }
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
