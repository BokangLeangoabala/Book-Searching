import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Readacon</h2>
            <p className='fs-17'>Readacon is an online library that specializes in science fiction and fantasy books. It was founded in 2021 by a group of avid fans who wanted to share their passion for these genres with other readers. Readacon offers a curated selection of books, ranging from classics to new releases, as well as exclusive content, such as interviews, podcasts, and quizzes. Readacon also hosts online events, such as book clubs, author chats, and trivia nights, where members can interact and have fun. Readacon is more than just an online library, it is a community of readers who love to explore new worlds and possibilities</p>
            <p className='fs-17'>Readacon provides easy and affordable access to books for everyone. They enrich our minds, broaden our horizons, and connect us with others</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
