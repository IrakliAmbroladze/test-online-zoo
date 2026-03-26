import { useEffect, useRef, useState } from "react";
import { useSlider } from "../hooks/useSlider";
import { FeedbacksSlider } from "./FeedbacksSlider";
import { MeetPets } from "./MeetPets";

const CARD_SELECTOR = ".animals-card";
const FEEDBACK_CARD_SELECTOR = ".feedback-card";

export const Home = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const viewPortRef = useRef<HTMLDivElement>(null);
  const feedbacksRef = useRef<HTMLDivElement>(null);
  const feedbacksViewPortRef = useRef<HTMLDivElement>(null);
  const [VIEWPORT, setVIEWPORT] = useState(0);
  const [feedbacksVIEWPORT, setFeedbacksVIEWPORT] = useState(0);
  const { offset, moveLeft, moveRight } = useSlider(
    sliderRef,
    VIEWPORT,
    CARD_SELECTOR,
  );
  const {
    offset: feedbacksOffset,
    moveLeft: moveFeedbackLeft,
    moveRight: moveFeedbackRight,
  } = useSlider(feedbacksRef, feedbacksVIEWPORT, FEEDBACK_CARD_SELECTOR);

  useEffect(() => {
    const handleResize = () => {
      if (viewPortRef.current) {
        setVIEWPORT(viewPortRef.current.offsetWidth);
      }
      if (feedbacksViewPortRef.current) {
        setFeedbacksVIEWPORT(feedbacksViewPortRef.current.offsetWidth);
      }
    };

    const observer = new ResizeObserver(handleResize);

    if (viewPortRef.current) observer.observe(viewPortRef.current);
    if (feedbacksViewPortRef.current)
      observer.observe(feedbacksViewPortRef.current);

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);
  return (
    <div className="page-landing">
      <main className="main">
        <div className="container">
          <div className="title-container">
            <h1>Watch your favorite animal online</h1>
            <h2>
              Explore the exciting and mysterious world of wild animals in a
              natural setting without leaving your home.
            </h2>
            <button className="btn btn--orange">
              view live cam <img src="./assets/icons/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
        <div className="cover-image">
          <img src="./assets/images/Background.jpg" alt="" />
        </div>
      </main>
      <section className="welcome">
        <div className="container">
          <div className="welcome-card-1">
            <div className="welcome-text-content">
              <h2>Welcome to the Online Zoo!</h2>
              <p>
                On our website, using live webcams, fans of all ages can observe
                various animals. Among them, are Giant pandas, eagles,
                alligators, forest gorillas, African lions, and others. It is
                the whole natural world in real-time in front of our cameras. We
                hope you will enjoy watching closely and explore animals’
                behavior and habitats! Note: animals are not always on view on
                cameras, so please check back if you don't see anything.
              </p>
            </div>
            <div className="welcome-image">
              <img src="./assets/images/welcome.jpg" alt="welcome" />
            </div>
          </div>
          <div className="welcome-card-2">
            <div className="welcome-text-content">
              <h2>How we work</h2>
              <p>
                Online Zoo is a nonprofit committed to inspiring awareness and
                preservation of nature and wild animals in our zoo and
                worldwide. To continue these efforts, we need your help. We're
                so grateful to our supporters. All donations, large and small,
                go a long way to the conservation efforts of our pets.
              </p>
            </div>
            <div className="welcome-image">
              <img src="./assets/images/how_it_works.jpg" alt="how_it_works" />
            </div>
          </div>
        </div>
      </section>
      <section className="donation">
        <div className="container">
          <div className="description">
            <h2>Your donation makes a difference!</h2>
            <p>
              The Online Zoo's animal webcams are some of the most famous on the
              internet. Tune in to watch your favourite animals — live, 24/7!
            </p>
          </div>
          <div className="quick-donate">
            <h3>Quick Donate</h3>
            <div className="amount">
              <span className="donation-amount">$ Donation Amount</span>
              <button className="btn btn--orange">
                <img src="./assets/icons/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <MeetPets {...{ viewPortRef, moveLeft, moveRight, sliderRef, offset }} />
      <section className="what-users-think">
        <div className="gradient"></div>
        <div className="intro">
          <h2>What our users think</h2>
          <p>
            We are continuously striving to improve the experiences of our
            future guests. Below you can leave your own feedback, or simply view
            feedback from past clients.
          </p>
        </div>
        <div
          className="content-container"
          id="feedback-content-container"
          ref={feedbacksViewPortRef}
        >
          <FeedbacksSlider sliderRef={feedbacksRef} offset={feedbacksOffset} />
          <div className="slider-arrows">
            <div
              className="left"
              id="sldr_prev_arrow"
              onClick={moveFeedbackLeft}
            ></div>
            <div
              className="right"
              id="sldr_next_arrow"
              onClick={moveFeedbackRight}
            ></div>
          </div>

          <button className="btn btn--pure-text-white btn-favorite">
            <span>leave feedback</span>
            <img src="./assets/icons/arrow.svg" alt="arrow" />
          </button>
        </div>
      </section>
      <section className="pay-and-feed"></section>
    </div>
  );
};
