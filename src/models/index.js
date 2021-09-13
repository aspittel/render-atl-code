// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ContentType = {
  "VIDEO": "VIDEO",
  "IMAGE": "IMAGE"
};

const { User, Comment, Content, TimelineItem } = initSchema(schema);

export {
  User,
  Comment,
  Content,
  TimelineItem,
  ContentType
};