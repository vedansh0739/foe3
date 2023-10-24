import React from 'react';
import { Link } from 'react-router-dom';
import '../des.css';
const samplePosts = [
  { id: '1', title: 't', content: 'This is the content of the first post.' },
  { id: '2', title: 'Second Blog Post', content: 'This is the content of the second post.' },
  // Add more sample posts as needed.
];

const Home: React.FC = () => {
  return (
    <div className='centered-container'>
        <h1>Vedansh Bagadia</h1>


      {samplePosts.map(post => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
