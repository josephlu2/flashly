import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Up Start Finance</title>
          <meta property="og:title" content="Up Start Finance" />
        </Head>
        <div className="navbar-container">
          <div className="max-width">
            <div className="home-logo">
              <span className="brand-Name">FLASHLY</span>
            </div>
            <div className="home-links">
              <span className="home-text01 navbar-Link">How it works</span>
              <span className="home-text02 navbar-Link">Features</span>
              <span className="home-text03 navbar-Link">Blog</span>
              <span className="home-text04 navbar-Link">Pricing</span>
              <button className="button-secondary button">Log in</button>
              <button className="button button-primary">Get started</button>
            </div>
            <div className="home-burger-menu navbar-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="hero-container section-container">
          <div className="home-max-width1 max-width">
            <div className="home-content">
              <span className="home-subtitle before-Heading">
                START LEARNING WITH FLASHY
              </span>
              <h1 className="home-title">
                <span>Unlock the next generation flashcard </span>
                <br className="home-text06"></br>
                <span className="home-text07">experience</span>
              </h1>
              <span className="home-description">
                Learn anything you need to know in a flash! Our intuitive
                interface makes it easy to get started and stay on track.
              </span>
              <div className="home-container01">
                <button className="home-button2 button button-gradient">
                  Get started
                </button>
                <button className="button button-transparent">Log in</button>
              </div>
            </div>
            <div className="home-image">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1573496129661-bd7fcc7e532b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxzdHVkZW50JTIwb24lMjBjb21wdXRlcnxlbnwwfHx8fDE2NjA1MTk3MDI&amp;ixlib=rb-1.2.1&amp;h=600"
                className="home-hero-image"
              />
              <img
                alt="image"
                src="/playground_assets/union-400w.png"
                className="home-graphic-top"
              />
              <img
                alt="image"
                src="/playground_assets/group%2018-1200w.png"
                className="home-image1"
              />
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width2 max-width">
            <div className="home-image2">
              <img
                alt="image"
                src="/playground_assets/good-faces-mzn7emmv9im-unsplash-1200w.jpg"
                className="home-hero-image1"
              />
            </div>
            <div className="home-content1">
              <h1 className="home-text08">
                <span>
                  The best way to learn.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text10">Period.</span>
              </h1>
              <span className="home-text11">
                Flashcards are a great way to learn new information and improve
                your memory. With Flashly, you can create your own flashcards
                and learn at your own pace.
              </span>
              <div className="home-container02">
                <button className="home-button4 button-secondary button bg-transparent">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section1 section-container">
          <div className="home-max-width3 max-width">
            <div className="home-content2">
              <h1 className="home-text12">The best part?</h1>
              <h1 className="home-text13">
                <span>
                  It&apos;s completely
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text15">free.</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Learn anything,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  anywhere,
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>anytime.</span>
              </h1>
              <div className="home-container03">
                <button className="home-button5 button-secondary button bg-transparent">
                  Start now
                </button>
              </div>
            </div>
            <div className="home-image3">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1603695762547-fba8b88ac8ad?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxzdHVkZW50JTIwb24lMjBjb21wdXRlcnxlbnwwfHx8fDE2NjA1MTk3MDI&amp;ixlib=rb-1.2.1&amp;w=1200"
                className="home-hero-image2"
              />
            </div>
          </div>
        </div>
        <div className="home-section2 section-container">
          <div className="home-max-width4 max-width">
            <div className="home-image4">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxzdHVkZW50JTIwb24lMjBsYXB0b3B8ZW58MHx8fHwxNjYwNTIwMDU0&amp;ixlib=rb-1.2.1&amp;w=1200"
                className="home-hero-image3"
              />
            </div>
            <div className="home-content3">
              <span className="home-text23 before-Heading">get started</span>
              <h1 className="home-text24">
                <span>It&apos;s a </span>
                <span className="home-text26">flash</span>
                <span> away</span>
              </h1>
              <div className="home-step">
                <div className="home-number">
                  <span className="home-text28">1</span>
                </div>
                <div className="home-container04">
                  <span className="home-title1">Click Get Started</span>
                  <span className="home-text29">
                    Flashly is completely free to get started. It&apos;s a great
                    way to study for exams, quizzes, and more!
                  </span>
                </div>
              </div>
              <div className="home-step1">
                <div className="home-number1">
                  <span className="home-text30">2</span>
                </div>
                <div className="home-container05">
                  <span className="home-title2">Create your first set</span>
                  <span className="home-text31">
                    Creating sets in Flashly is super easy. Name your set, and
                    then add terms and definitions.
                  </span>
                </div>
              </div>
              <div className="home-step2">
                <div className="home-number2">
                  <span className="home-text32">3</span>
                </div>
                <div className="home-container06">
                  <span className="home-title3">Start studying</span>
                  <span className="home-text33">
                    We&apos;ll show you the questions, and you give us the
                    answers. That simple!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section3 section-container">
          <div className="home-max-width5 max-width">
            <div className="home-f-a-q">
              <div className="home-questions">
                <span className="home-text34 before-Heading">faq</span>
                <h1 className="home-text35">
                  <span className="home-text36">
                    Frequently Asked
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="home-text38">Questions</span>
                </h1>
                <div data-role="Accordion" className="question">
                  <div data-type="accordion-header" className="home-trigger">
                    <span className="home-text39">Is this really free?</span>
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                    </svg>
                  </div>
                  <div
                    data-type="accordion-content"
                    className="question-content"
                  >
                    <span className="home-text40">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </span>
                  </div>
                </div>
                <div data-role="Accordion" className="question">
                  <div data-type="accordion-header" className="home-trigger1">
                    <span className="home-text41">
                      Is this available to everyone?
                    </span>
                    <svg viewBox="0 0 1024 1024" className="home-icon04">
                      <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                    </svg>
                  </div>
                  <div
                    data-type="accordion-content"
                    className="question-content"
                  >
                    <span className="home-text42">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </span>
                  </div>
                </div>
                <div data-role="Accordion" className="question">
                  <div data-type="accordion-header" className="home-trigger2">
                    <span className="home-text43">
                      What features do you plan on adding?
                    </span>
                    <svg viewBox="0 0 1024 1024" className="home-icon06">
                      <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                    </svg>
                  </div>
                  <div
                    data-type="accordion-content"
                    className="question-content"
                  >
                    <span className="home-text44">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </span>
                  </div>
                </div>
                <div data-role="Accordion" className="question">
                  <div data-type="accordion-header" className="home-trigger3">
                    <span className="home-text45">
                      Do you have an iOS or Android app?
                    </span>
                    <svg viewBox="0 0 1024 1024" className="home-icon08">
                      <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                    </svg>
                  </div>
                  <div
                    data-type="accordion-content"
                    className="question-content"
                  >
                    <span className="home-text46">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit.
                    </span>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src="/playground_assets/group%202-1200w.png"
                className="home-image5"
              />
            </div>
            <div className="home-banner">
              <span className="home-text47 before-Heading">get started</span>
              <h1 className="home-text48">
                <span>Push your studying to</span>
                <span> the next level.</span>
              </h1>
              <span className="home-text51">It&apos;s free!</span>
              <div className="home-btns">
                <button className="home-button6 button button-gradient">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer className="home-footer">
          <div className="home-links-container">
            <div className="home-container07">
              <div className="footer-column">
                <span className="home-text52">Flashly</span>
                <span className="home-text53">How it works</span>
                <span className="home-text54">Features</span>
                <span className="home-text55">Pricing</span>
                <span>FAQ</span>
              </div>
              <div className="footer-column">
                <span className="home-text57">App</span>
                <span className="home-text58">Log in</span>
                <span className="home-text59">Sign up</span>
              </div>
              <div className="footer-column">
                <span className="home-text60">Alpenglow Studio</span>
                <span className="home-text61">About us</span>
                <span className="home-text62">Terms of Condition</span>
                <span className="home-text63">Privacy</span>
                <span>Contact</span>
              </div>
              <div className="footer-column">
                <span className="home-text65">Follow</span>
                <span className="home-text66">Instagram</span>
                <span className="home-text67">Twitter</span>
                <span className="home-text68">Facebook</span>
                <span className="home-text69">Tik Tok</span>
                <span className="home-text70">Linkedln</span>
                <span>Youtube</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-logo {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-links {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-text01 {
            color: var(--dl-color-scheme-green80);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-text02 {
            color: var(--dl-color-scheme-green80);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-text03 {
            color: var(--dl-color-scheme-green80);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-text04 {
            color: var(--dl-color-scheme-green80);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-burger-menu {
            fill: #105749;
            width: 24px;
            height: 24px;
          }
          .home-max-width1 {
            align-items: center;
          }
          .home-content {
            flex: 0 0 auto;
            width: 522px;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-subtitle {
            color: var(--dl-color-scheme-orange100);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-title {
            color: var(--dl-color-scheme-white);
            font-size: 52px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 600;
            line-height: 1.2;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text06 {
            color: var(--dl-color-scheme-lightgreen);
          }
          .home-text07 {
            color: var(--dl-color-scheme-lightgreen);
          }
          .home-description {
            color: var(--dl-color-scheme-white);
            font-size: 18px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-button2 {
            background-color: var(--dl-color-scheme-white);
          }
          .home-image {
            position: relative;
            padding-bottom: var(--dl-space-space-eightunits);
          }
          .home-hero-image {
            flex: 1;
            width: 456px;
            height: 553px;
            max-width: 550px;
            object-fit: cover;
            border-radius: 48px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
          }
          .home-graphic-top {
            top: 0px;
            right: -170px;
            width: 100%;
            height: 100%;
            position: absolute;
            max-width: 359px;
            max-height: 359px;
            object-fit: contain;
            object-position: center;
          }
          .home-image1 {
            right: -170px;
            bottom: 0px;
            position: absolute;
            object-fit: contain;
          }
          .home-max-width2 {
            align-items: stretch;
          }
          .home-hero-image1 {
            width: 657px;
            height: 962px;
            object-fit: contain;
            margin-left: -250px;
            border-radius: 48px;
          }
          .home-content1 {
            width: 50%;
            display: flex;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text08 {
            font-size: 42px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text10 {
            color: var(--dl-color-scheme-orange100);
          }
          .home-text11 {
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-button4 {
            background-color: var(--dl-color-scheme-white);
          }
          .home-section1 {
            background-color: rgba(255, 199, 139, 0.14);
          }
          .home-max-width3 {
            align-items: stretch;
          }
          .home-content2 {
            width: 50%;
            display: flex;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text12 {
            color: var(--dl-color-scheme-green100);
            font-size: 50px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text13 {
            color: var(--dl-color-scheme-green100);
            font-size: 39px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text15 {
            color: var(--dl-color-scheme-orange100);
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-button5 {
            background-color: var(--dl-color-scheme-white);
          }
          .home-hero-image2 {
            width: 826px;
            height: 573px;
            object-fit: contain;
            margin-right: -250px;
            border-radius: 48px;
          }
          .home-section2 {
            background-color: var(--dl-color-scheme-green100);
          }
          .home-max-width4 {
            align-items: stretch;
          }
          .home-image4 {
            width: 50%;
          }
          .home-hero-image3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 48px;
          }
          .home-content3 {
            width: 40%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text23 {
            color: var(--dl-color-scheme-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text24 {
            color: var(--dl-color-scheme-white);
            font-size: 42px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.35;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text26 {
            color: var(--dl-color-scheme-orange100);
          }
          .home-step {
            display: flex;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-number {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .home-text28 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .home-container04 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title1 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text29 {
            color: var(--dl-color-scheme-white);
            line-height: 1.5;
          }
          .home-step1 {
            display: flex;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .home-number1 {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .home-text30 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .home-container05 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title2 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text31 {
            color: var(--dl-color-scheme-white);
            line-height: 1.5;
          }
          .home-step2 {
            display: flex;
            flex-direction: row;
          }
          .home-number2 {
            flex: 0 0 auto;
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius16);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-orange100);
          }
          .home-text32 {
            font-size: 28px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
          }
          .home-container06 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title3 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.5;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text33 {
            color: var(--dl-color-scheme-white);
            line-height: 1.5;
          }
          .home-section3 {
            padding-top: 0px;
          }
          .home-max-width5 {
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-f-a-q {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-eightunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-questions {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text34 {
            color: var(--dl-color-scheme-green80);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text35 {
            font-size: 42px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text36 {
            font-family: Urbanist;
          }
          .home-text38 {
            color: var(--dl-color-scheme-orange100);
            font-family: Urbanist;
          }
          .home-trigger {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-text39 {
            font-size: 20px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 600;
            line-height: 1.5;
          }
          .home-icon02 {
            width: 12px;
            height: 12px;
          }
          .home-text40 {
            margin-top: 8px;
          }
          .home-trigger1 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-text41 {
            font-size: 20px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 600;
            line-height: 1.5;
          }
          .home-icon04 {
            width: 12px;
            height: 12px;
          }
          .home-text42 {
            margin-top: 8px;
          }
          .home-trigger2 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-text43 {
            font-size: 20px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 600;
            line-height: 1.5;
          }
          .home-icon06 {
            width: 12px;
            height: 12px;
          }
          .home-text44 {
            margin-top: 8px;
          }
          .home-trigger3 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-text45 {
            font-size: 20px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 600;
            line-height: 1.5;
          }
          .home-icon08 {
            width: 12px;
            height: 12px;
          }
          .home-text46 {
            margin-top: 8px;
          }
          .home-image5 {
            width: 50%;
            object-fit: cover;
            margin-right: -200px;
          }
          .home-banner {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            border-radius: 48px;
            flex-direction: column;
            background-size: cover;
            background-image: url('/playground_assets/group%2011-1200w.png');
          }
          .home-text47 {
            color: var(--dl-color-scheme-lightgreen);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text48 {
            color: var(--dl-color-scheme-white);
            font-size: 42px;
            font-style: normal;
            text-align: center;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text51 {
            color: rgba(255, 255, 255, 0.6);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-btns {
            flex: 0 0 auto;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .home-button6 {
            padding-top: 12px;
            margin-right: 0px;
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: 12px;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-links-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container07 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text52 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text53 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text54 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text55 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text57 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text58 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text59 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text60 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text61 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text62 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text63 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text65 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text66 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text67 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text68 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text69 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text70 {
            margin-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 991px) {
            .home-content {
              width: 50%;
              margin-right: var(--dl-space-space-unit);
            }
            .home-image {
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-hero-image {
              margin-bottom: 0px;
            }
            .home-max-width2 {
              flex-direction: column;
            }
            .home-image2 {
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-hero-image1 {
              width: 100%;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home-content1 {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-max-width3 {
              flex-direction: column;
            }
            .home-content2 {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-image3 {
              padding-bottom: 0px;
            }
            .home-hero-image2 {
              width: 100%;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home-max-width4 {
              flex-direction: column;
            }
            .home-image4 {
              width: 100%;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-hero-image3 {
              width: 100%;
              margin-left: 0px;
              margin-bottom: 0px;
            }
            .home-content3 {
              width: 100%;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-max-width5 {
              flex-direction: column;
            }
            .home-questions {
              width: 60%;
            }
            .home-image5 {
              margin-right: -100px;
            }
            .home-footer {
              flex-direction: column;
            }
            .home-links-container {
              width: auto;
              margin-top: var(--dl-space-space-twounits);
              flex-direction: row;
            }
            .home-container07 {
              flex-wrap: wrap;
              margin-right: 0px;
            }
          }
          @media (max-width: 767px) {
            .home-links {
              display: none;
            }
            .home-icon {
              fill: var(--dl-color-scheme-green100);
            }
            .home-max-width1 {
              flex-direction: column-reverse;
            }
            .home-content {
              width: 100%;
              margin-right: 0px;
            }
            .home-hero-image {
              margin-right: 0px;
            }
            .home-content1 {
              width: 100%;
              margin-right: 0px;
            }
            .home-content2 {
              width: 100%;
              margin-right: 0px;
            }
            .home-content3 {
              width: 100%;
              margin-right: 0px;
            }
            .home-f-a-q {
              margin-bottom: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-questions {
              width: 100%;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-image5 {
              width: 100%;
              margin-right: 0px;
            }
            .home-banner {
              padding: var(--dl-space-space-twounits);
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-links-container {
              width: auto;
              margin-top: var(--dl-space-space-twounits);
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-container07 {
              width: 100%;
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .home-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
            }
            .home-links-container {
              align-items: flex-start;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-container07 {
              align-items: center;
              margin-right: 0px;
              justify-content: space-between;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
