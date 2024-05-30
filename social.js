// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {

    //increment the currentId variable to show a new user
    this.currentID++
    //create user obj to store name and id key val pairs
    let user = {

      name: name,

      id: this.currentID

    };

    //initialize a set to track who this user follows
    this.users[user.id] = user;

    this.follows[user.id] = new Set();

    //return uniqueId
    return user.id;

  }

  getUser(userID) {

    // //iterte through obj
    // for (let user in this.users) {

    // //ask if UserId is absent from users obj
    //   if(this.users[userID] === undefined) {

    // //if absent return null\
    //       return null;

    //   }

    // //otherwise return the user obj
    // return this.users[userID];

    // }

    if(this.users[userID]) {

      return this.users[userID];

    }

    return null;

  }

  follow(userID1, userID2) {

    if(!this.getUser(userID1) || !this.getUser(userID2)) {

      return false;

    }

    this.follows[userID1].add(userID2)

    return true;

  }

  getFollows(userID) {

    return this.follows[userID];

  }

  getFollowers(userID) {

    let userIds = Object.keys(this.follows);

    let followers = new Set();

    userIds.forEach(id => {

      let followList = this.follows[id];

      if(followList.has(userId)) {

        followers.add(Number(id));

      }

    });

    return followers;

  }

  getRecommendedFollows(userID, degrees) {

    let queue = [[userID]];

    let visited = new Set();

    while(queue.length) {

      let curr = queue.shift();

      if(!visited.has(userID)) {

        for (let neighbor in this.follows[userID]) {

          queue.push(neighbor);

          visited.add(neighbor);

        }
      }
    }
  }
}

module.exports = SocialNetwork;
