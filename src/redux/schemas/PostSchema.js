import { schema } from 'normalizr';

const CommentsSchema = new schema.Entity('comments');
const PostSchema = new schema.Entity('post', {
  posts: [CommentsSchema],
});

export { PostSchema };
