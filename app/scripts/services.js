angular.module('starter.services', [])

.factory('Chats', function() {
   //Might use a resource here that returns a JSON array

    var chats = [{
      id: 0,
      name: 'Ben Sparrow',
      phoneNumbers: 'You on your way?',
      face: 'images/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      phoneNumbers: 'Hey, it\'s me',
      face: 'images/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      phoneNumbers: 'I should buy a boat',
      face: 'images/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      phoneNumbers: 'Look at my mukluks!',
      face: 'images/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      phoneNumbers: 'This is wicked good ice cream.',
      face: 'images/mike.png'
    }];




// find all contacts with 'Bob' in any name field


  return {
    all: function() {

      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
