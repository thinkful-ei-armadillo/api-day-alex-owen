'use strict';
/* global store */

const api = (function() {
    const BASE_URL = 'https://thinkful-list-api.herokuapp.com/alexowen';

    const fetchRequest = function(...args) {
        let error = false;
        return fetch(...args)
            .then(res => {
                if (!res.ok) {
                    error = true;
                }
                return res.json();
            })
            .then(data => {
                if (error) throw new Error(data.message);
                return data;
            });
            //.catch(err => console.log(err.message));
    };

    const getItems = function() {
        return fetchRequest(`${BASE_URL}/items`);
    };

    const createItem = function(name) {
        const item = JSON.stringify({ name });
        return fetchRequest(`${BASE_URL}/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: item,
        });
    };

    const updateItem= function(id, updateData) {
        updateData = JSON.stringify(updateData);
        return fetchRequest(`${BASE_URL}/items/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: updateData
        });
    };

    const deleteItem = function(id) {
        return fetchRequest(`${BASE_URL}/items/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
    };

    return {getItems, createItem, updateItem, deleteItem};
}());
