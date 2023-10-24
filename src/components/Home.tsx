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
      <h1>Hi</h1>
  <p>Glad you're here! I am Vedansh and I like reading research papers, teaching and making stuff.</p>
  <p>I am interested in everything computer science and biology.</p>
  <p>If you want to contact me or are looking for a buddy to build LITERALLY ANYTHING cool with, you can mail me at vedansh0739[at]gmail[dot]com</p>
  <h2>Notes</h2>
  <p>[24/10/23] Trolley works!</p> <iframe width="560" height="315" src="https://www.youtube.com/embed/u2-eOczQ4Wc?si=s0S6nR4x3TEhiWaF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <p>[15/10/23] I've been working on this tool called "Trolley" to help YouTubers collaborate better with freelance video editors. The problem many YouTubers face is the hassle of downloading edited videos from freelancers and then uploading them to YouTube. It's a time-consuming task, especially for those always on the move. Also, they are uncomfortable sharing their YouTube account passwords with freelancers for direct uploads due to security concerns.

    Trolley aims to simplify this process. It allows YouTubers to grant upload access to freelancers without sharing any account details. Once the editing is done, freelancers upload the videos to Trolley. The YouTuber then gets an online preview. If they like it, they give Trolley the go-ahead to upload the video directly to their YouTube channel. This way, the YouTuber doesn't have to download or re-upload anything, saving them a lot of time.

    Moreover, Trolley ensures that freelancers don’t get direct access to the YouTuber's channel, which addresses the security worries. It's about making the whole process of getting a video from the editor to YouTube less tedious and more secure for everyone involved.</p>
      
    </div>
  );
}

export default Home;



//use the following for linked pages
/*


{samplePosts.map(post => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.content.substring(0, 100)}...</p>
        </div>
      ))}




*/
