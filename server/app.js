const Koa = require('koa');
const Router = require('koa-router');
const graphqlHttp = require('koa-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');

const Event = require('./models/event');

const app = new Koa();
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

    type RootQuery {
      events: [Event!]!
    }

    input EventInput {
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    type RootMutation {
      createEvent(eventInput: EventInput): Event
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
    }
  },
  graphiql: true,
  pretty: true
}));

app.use(router.routes()).use(router.allowedMethods());

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-v0lmi.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  { useUnifiedTopology: true, useNewUrlParser: true }
).then(() => {
  app.listen(4200);
}).catch(e => {
  console.log(e);
})

