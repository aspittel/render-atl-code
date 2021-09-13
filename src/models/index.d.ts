import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ContentType {
  VIDEO = "VIDEO",
  IMAGE = "IMAGE"
}



type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ContentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TimelineItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly username?: string;
  readonly profilePic?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Comment {
  readonly id: string;
  readonly body?: string;
  readonly user?: User;
  readonly timelineitemID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class Content {
  readonly id: string;
  readonly type?: ContentType | keyof typeof ContentType;
  readonly source?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Content, ContentMetaData>);
  static copyOf(source: Content, mutator: (draft: MutableModel<Content, ContentMetaData>) => MutableModel<Content, ContentMetaData> | void): Content;
}

export declare class TimelineItem {
  readonly id: string;
  readonly description?: string;
  readonly postTime?: string;
  readonly content?: Content;
  readonly user?: User;
  readonly comments?: (Comment | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TimelineItem, TimelineItemMetaData>);
  static copyOf(source: TimelineItem, mutator: (draft: MutableModel<TimelineItem, TimelineItemMetaData>) => MutableModel<TimelineItem, TimelineItemMetaData> | void): TimelineItem;
}