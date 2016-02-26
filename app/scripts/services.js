angular.module('starter.services', [])

.factory('Chats', function() {
   //Might use a resource here that returns a JSON array

    var chats = [];
   /* {
      id: 0,
        displayName: 'Ben Sparrow',
      phoneNumbers: [{"normalizedNumber":'18591404229'},{"normalizedNumber":'185914042779'}],
      face: 'images/ben.png'
    }, {
      id: 1,
        displayName: 'Max Lynx',
        phoneNumbers:  [{"normalizedNumber":'18591404229'},{"normalizedNumber":'185914042779'}],
        face: 'images/max.png'
    }, {
      id: 2,
        displayName: 'Adam Bradleyson',
        phoneNumbers: [{"normalizedNumber":'18591404229'},{"normalizedNumber":'185914042779'}],
        face: 'images/adam.jpg'
    }, {
      id: 3,
        displayName: 'Perry Governor',
        phoneNumbers: [{"normalizedNumber":'18591404229'},{"normalizedNumber":'185914042779'}],
        face: 'images/perry.png'
    }, {
      id: 4,
        displayName: 'Mike Harrington',
        phoneNumbers: [{"normalizedNumber":'18591404229'},{"normalizedNumber":'185914042779'}],
        face: 'images/mike.png'
    }
*/



// find all contacts with 'Bob' in any displayName field


  return {
    all: function() {
     return  chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id == parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
    getContacts:function(){
      navigator.contactsPhoneNumbers.list(function(contacts) {
        chats=contacts;
      }, function(error) {
        console.error(error);
      });
    },
  };
});
