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
      <h1>Hi</h1>
  <p>Glad you're here! I am Vedansh and I like reading dense information, teaching, making stuff and playing around with non-deterministic systems to make them work better.</p>
  <p>I am currently working on improving a Convolutional Neural Network to enhance its ability to detect skin cancer from images.</p>
  <p>If you want to contact me or are looking for a buddy to build LITERALLY ANYTHING of utility with, you can mail me at vedansh0739[at]gmail[dot]com</p>
  <br></br>
  <h2>Notes</h2>
  <p>[9/11/23] I used a domain I had lying around to make this <a href="http://www.vedanshbackend.xyz" className='underline'>Url Shortener</a> which has one very important feature: It enhances link clarity by removing visually similar characters 'I' (uppercase i) and 'l' (lowercase L) from its generated URLs, thus preventing misinterpretation and typos!😮‍💨🥲</p>
  
  <br></br>
  
  <p>[24/10/23] <a href="https://www.youtube.com/watch?v=u2-eOczQ4Wc&ab_channel=VedanshBagadia" className="underline"> Trolley</a> works!</p> <iframe width="560" height="315" src="https://www.youtube.com/embed/u2-eOczQ4Wc?si=s0S6nR4x3TEhiWaF" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
  <p>[15/10/23] I've been working on this tool called "Trolley" to help YouTubers collaborate better with freelance video editors. The problem many (actually very few lol) YouTubers face is the hassle of downloading edited videos from freelancers and then uploading them to YouTube. It's a time-consuming task, especially for those always on the move. Also, they are uncomfortable sharing their YouTube account passwords with freelancers for direct uploads due to security concerns.

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
