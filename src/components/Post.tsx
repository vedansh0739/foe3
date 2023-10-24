import React from 'react';
import { useParams } from 'react-router-dom';

interface PostParams {
  id: string;
}

const samplePosts = [
  { id: '1', title: 'First Blog Post', content: 'This is the content of the first post.' },
  { id: '2', title: 'Second Blog Post', content: 'This is the content of the second post.' },
  // Add more sample posts as needed.
];

const Post: React.FC = () => {
  const { id } = useParams<PostParams>();
  const post = samplePosts.find(p => p.id === id);

  if (!post) return <div>Post not found!</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
