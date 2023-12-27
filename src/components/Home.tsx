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
      
  <p>Hi! I'm so glad you're here! I am Vedansh and I am currently working on making autonomous agents. I am primarily focussing on two things and these will stay true for atleast several years in the future: firstly, creating something, and secondly, collecting feedback from users who use that thing. I also believe it's important to carry out these tasks quickly and with assertiveness, even when the best choices are not clear. Inspired by John Carmack, I try to maximize the time I spend operating on something like a <a href="https://www.youtube.com/watch?v=I845O57ZSy4&t=18762s"  target='_blank'>gradient descent</a>.</p>
  <p>Lets talk!</p>
  <p>vedansh0739[at]gmail[dot]com</p>
  <br></br>
  <h2>Notes</h2>
  <h3>Forked  <a href="https://github.com/nat/natbot">Natbot</a> to make it more reliable</h3>
  <p>[13/12/23] This agent seeks detailed commands for precision of workflows. This allows it to execute tasks more reliably.</p>
  <div style={{ position: 'relative', paddingBottom: '62.5%', height: 0 }}>
      <iframe 
        src="https://www.loom.com/embed/7f1b615263274a849772967e5d6323ab?sid=f46f64fd-381b-464b-b17d-ab911dbdbde3"
        frameBorder="0"
        allowFullScreen
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      ></iframe>
    </div>

    <p><a href="https://github.com/vedansh0739/Deterministic-Browser-Agent">Github</a> (contact me to get the dataset used for finetuning GPT 3.5 turbo 1106 that this works off of)
    </p><p>NOTE: This does not work as well on some websites because the DOM structure of websites varies greatly across the web. I have started working on an agent that uses snapshots of webpages to make decisions instead (thanks to <a href='https://www.semanticscholar.org/paper/From-Pixels-to-UI-Actions%3A-Learning-to-Follow-via-Shaw-Joshi/ee7020fc413590878dca60dcf41896bbe6a6c628#citing-papers'>this</a> paper!)</p>
  <br></br>
  <p>[10/12/23] Tried to add Email functionality to the bot. Google doesn't allow bots to sign in, so 
    used proton's email service. Then I came across this beauty<img src={img1} style={{ width: '100%' }}></img>
    After inspecting it you will realize that the "password" input box has a <i>type</i> attribute but the username input box doesn't have one inspite of visual similarity <img src={img2} style={{width:'100%'}}></img>These sorts of inconsistencies in the front end take a toll on gpt inference. There exist alternatives to solve this like using ID attribute, however, the solution is not generalisable as the ID attribute does not contain relevant values on all websites on the web. One way to solve this problem might be to prompt the LLM to extract the relevant content from the HTML by itself. OCR might seem like an alternative to building agents that perform tasks on the web. However, web interfaces are supposed to be consumed without clear boundaries between textual and visual elements. Both of these approaches cannot consume  user interfaces holistically. 

  </p>
  <br></br>
  <p>[7/12/23] <a href="https://github.com/nat/natbot">Natbot</a> is pretty dope.  <a href="https://www.loom.com/share/1d5d499f08ef4fac9756815509861df6">Over the past few days</a>, I changed it's input interpretation to better benefit from more detailed prompts, added more HTML elements/attibutes for it to consider while neglecting the less relevant ones, and learnt how awesome the DOM snapshot feature of playwright is!</p>
  <br></br>
  <p>[5/12/23] I am skeptical of using OCR to feed information to the LLM as it would limit understanding to the surface level of the text, neglecting the deeper context and the interaction between textual and visual elements in UIs. Therefore, DOM simplification seems like the way to go for now</p>
  <br></br>
  <p>[5/12/23] So excited for reliably automating a browser! Oscillating between using DOM simplification and OCR for the LLM to better comprehend and issue the desired commands.</p>
  <br></br>
  <p>[9/11/23] I used a domain I had lying around to make this <a href="http://www.vedanshbackend.xyz" className='underline'>Url Shortener</a> which has one very important feature: It enhances link clarity by removing visually similar characters 'I' (uppercase i) and 'l' (lowercase L) from its generated URLs, thus preventing misinterpretation and typos.</p>
  
  <br></br>
  

  <h3>Poked sticks in the OAuth 2.0 protocol</h3> 
  <p>[15/10/23] Stitched togethor a prototype of a web app that helps YouTubers collaborate better with freelance video editors. YouTubers face the hassle of downloading ready-to-upload videos which they receive from video editor freelancers and then uploading them to YouTube. It's a time-consuming task, especially for those always on the move. Also, they are uncomfortable sharing their YouTube account passwords with freelancers for direct uploads due to security concerns.

    This app (let's call it Trolley) aims to simplify this process. It allows YouTubers to grant upload access to freelancers without sharing any account details. Once the editing is done, freelancers upload the videos to Trolley. The YouTuber then gets an online preview. If they like it, they give Trolley the go-ahead to upload the video directly to their YouTube channel. This way, the YouTuber doesn't have to download or re-upload anything, saving them a lot of time.

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
