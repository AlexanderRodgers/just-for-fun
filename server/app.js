const Koa = require('koa');
const cors = require('@koa/cors');
const Router = require('koa-router');
const graphqlHttp = require('koa-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Event = require('./models/event');
const User = require('./models/user');

const app = new Koa();
app.use(cors());
const router = new Router();

router.all('/graphql', graphqlHttp({
  schema: buildSchema(`
    type Event {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    type User {
      _id: ID!
      firstName: String!
      lastName: String!
      email: String!
      password: String
    }

    type RootQuery {
      events: [Event!]!
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    input UserInput {
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
      createUser(userInput: UserInput): User
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
  rootValue: {
    events: () => {
      return Event.find().then(events => {
        return events.map(event => {
          return { ...event._doc, _id: event._doc._id.toString() };
        })
      }).catch(err => { throw err });
    },
    createEvent: (args) => {
      // const event = {
      // _id: Math.random().toString(),
      // title: args.eventInput.title,
      // description: args.eventInput.description,
      // price: +args.eventInput.price,
      // date: args.eventInput.date
      // };
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date)
      });
      return event
        .save()
        .then(res => {
          console.log(res);
          return { ...res._doc };
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
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
  },
  graphiql: true,
  pretty: true
}));

app.use(router.routes()).use(router.allowedMethods());

// If you run into a connection error, it is most likely because the current IP is not whitelisted. You'll have to login to change that.
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-v0lmi.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  { useUnifiedTopology: true, useNewUrlParser: true }
).then(() => {
  app.listen(4200);
}).catch(e => {
  console.log(e);
})

