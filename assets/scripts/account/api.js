'use strict';
const config = require("../config");
const store = require('../store');


const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/accounts',
    method: 'GET',
  });
};

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/accounts/' + id,
    method: 'GET',
  });
};

const destroy = function(id){
  return $.ajax({
    url: config.apiOrigin + '/accounts/' + id,
    method: 'DELETE',
  });
};

const patch = function(data){
  return $.ajax({
    url: config.apiOrigin + '/accounts/' + data.book.id,
    method: 'PATCH',
    data,
  });
};

const post = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/accounts' ,
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`,
    },
    data,
  });
};

module.exports = {
  index,
  show,
  destroy,
  patch,
  post
};
