
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Event = require('../../models/event');
const User = require('../../models/user');

module.exports = {
  events: () => {
    return Event.find().then(events => {
      return events.map(event => {
        return { ...event._doc, _id: event._doc._id.toString() };
      })
    }).catch(err => { throw err });
  },
  login: ({ email, password }) => {
    let newUser;
    return User.findOne({ email: email })
      .then(user => {
        if (!user) {
          throw new Error('User does not exist');
        }
        newUser = user;
        return user.password;
      })
      .then(pass => {
        return bcrypt.compare(password, pass).then(res => res);
      })
      .then(isMatch => {
        if (isMatch) {
          const token = jwt.sign({ userId: newUser.id, email: newUser.email }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
          return { userId: newUser.id, token, tokenExpiration: 1 }
        } else {
          return null;
        }
      })
      .catch(e => { throw e })
  },
  createUser: (args) => {
    return User.findOne({ email: args.userInput.email })
      .then(user => {
        if (user) {
          throw new Error('User exists already!');
        }
        return bcrypt.hash(args.userInput.password, 12)
      })
      .then(hashedPassword => {
        const user = new User({
          firstName: args.userInput.firstName,
          lastName: args.userInput.lastName,
          email: args.userInput.email,
          password: hashedPassword
        });
        return user.save();
      })
      .then(result => {
        return { ...result._doc, password: null, _id: result.id };
      })
      .catch(err => { throw err });

  }
}