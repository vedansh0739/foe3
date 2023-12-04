import React from 'react';
// import { Link } from 'react-router-dom';
import '../des.css';
// const samplePosts = [
//   { id: '1', title: 't', content: 'This is the content of the first post.' },
//   { id: '2', title: 'Second Blog Post', content: 'This is the content of the second post.' },
//   // Add more sample posts as needed.
// ];

const Home: React.FC = () => {
  return (
    <div className='centered-container'>
      <h1>Vedansh Bagadia</h1>
  <p>Hi! I'm so glad you're here! I am Vedansh and I am currently working on making autonomous agents.</p>
  <p>vedansh0739[at]gmail[dot]com</p>
  <p>Lets talk!</p>
  <br></br>
  <h2>Notes</h2>
  <p>[5/12/23] So excited for reliably automating a browser! Oscillating between using DOM simplification and Text Recognition for GPT4 to better comprehend and issue the desired commands. Prolly gonna end up using both!</p>
  <br></br>
  <p>[9/11/23] I used a domain I had lying around to make this <a href="http://www.vedanshbackend.xyz" className='underline'>Url Shortener</a> which has one very important feature: It enhances link clarity by removing visually similar characters 'I' (uppercase i) and 'l' (lowercase L) from its generated URLs, thus preventing misinterpretation and typos!😮‍💨🥲</p>
  
  <br></br>
  

  <p>[15/10/23] Poked sticks in the OAuth 2.0 protocol to make a prototype of a web app that helps YouTubers collaborate better with freelance video editors. YouTubers face the hassle of downloading ready-to-upload videos which they receive from video editor freelancers and then uploading them to YouTube. It's a time-consuming task, especially for those always on the move. Also, they are uncomfortable sharing their YouTube account passwords with freelancers for direct uploads due to security concerns.

    This app(let's call it Trolley) aims to simplify this process. It allows YouTubers to grant upload access to freelancers without sharing any account details. Once the editing is done, freelancers upload the videos to Trolley. The YouTuber then gets an online preview. If they like it, they give Trolley the go-ahead to upload the video directly to their YouTube channel. This way, the YouTuber doesn't have to download or re-upload anything, saving them a lot of time.

    Moreover, Trolley ensures that freelancers don’t get direct access to the YouTuber's channel, which addresses the security worries. It's about making the whole process of getting a video from the editor to YouTube less tedious and more secure for everyone involved. Currently only works for workspace accounts until it gets verified by google (taking ages :( Oauth is hard)</p>
      
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
