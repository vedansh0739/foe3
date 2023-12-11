import React from 'react';
// import { Link } from 'react-router-dom';
import '../des.css';
// const samplePosts = [
//   { id: '1', title: 't', content: 'This is the content of the first post.' },
//   { id: '2', title: 'Second Blog Post', content: 'This is the content of the second post.' },
//   // Add more sample posts as needed.
// ];
import img1 from './a1.png';
import img2 from './a2.png';

const Home: React.FC = () => {
  return (
    <div className="col">
    <h1>Vedansh Bagadia</h1>
      
  <p>Hi! I'm so glad you're here! I am Vedansh and I am currently working on making autonomous agents.</p>
  <p>vedansh0739[at]gmail[dot]com</p>
  <p>Lets talk!</p>
  <br></br>
  <h2>Notes</h2>
  <p>[10/12/23] Tried to add Email functionality to the bot. Google doesn't allow bots to sign in, so 
    used proton's email service. Then I came across this beauty<img src={img1} style={{ width: '650px' }}></img>
    After inspecting it you will realize that the "password" input box has a <i>type</i> attribute but the username input box doesn't have one for lord knows what reason!<img src={img2} style={{width:'650px'}}></img>This atrocity complete wrecked my gpt inference as it was dependant on the type attribute to make a decision. The thing that I am most triggered about is that this inconsistency is on the same page with amongst two very similar looking input boxes! ID attribute, on the other hand, does have the required value, however, it consists of irrelevant values in many cases. Therefore, the autocomplete attribute seems like the best choice for now. However, after coming across so many inconsistencies, I am sure of one thing: DOM simplifaction for GPT inference in NOT AT ALL generalisable. Multi Modal is the ONLY way.

  </p>
  <br></br>
  <p>[7/12/23] <a href="https://github.com/nat/natbot">Natbot</a> is pretty dope.  <a href="https://www.loom.com/share/1d5d499f08ef4fac9756815509861df6">Over the past few days</a>, I made it's prompt more deterministic, added &lt;textarea&gt; so that it can detect more text input areas, experimented a lot with OCR until I realized that simply using JS is the best approach, and learnt how awesome the DOM snapshot feature of playwright is!</p>
  <br></br>
  <p>[6/12/23] If you want to figure out the coordinates of UI Elements from a webpage, there is no need to use OCR! There is a really cool Javascript method getBoundingClientRect() that'll do the same!</p>
  <br></br>
  <p>[6/12/23] "What information should GPT use to determine whether to scroll down or not?" is a bad question to ask, that results from a reluctance to think deeper (I was committing the same mistake for a very long time). The browser should always try to scroll down to gather the max information it possibly can from a webpage. "How to scroll back up by the correct amount to issue the necessary click?" is a better question to ask.</p>
  <br></br>
  <p>[5/12/23] DOM simplification is quick and easy. OCR gives coordinates of every indivisible part of the string, i.e. every single word (GPT doesn't like it). Replicate's llava-13b vision model is great for getting visual description of the images (this helpful for GPT in determining when to scroll), however, messes up the coordinates. Gotta find a way to combine all three!</p>
  <br></br>
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
