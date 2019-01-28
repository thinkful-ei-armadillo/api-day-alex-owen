'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/alexowen';

  const getItems = function() {
    return fetch(`${BASE_URL}/items`);
  };

  const createItem = function(name) {
    const item = JSON.stringify({ name });
    return fetch(`${BASE_URL}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: item,
    });
  };
  const updateItem= function(id, updateData) {
    updateData = JSON.stringify(updateData);
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: updateData
    });
  };
  return {getItems, createItem, updateItem};
}());
