import React from "react";
import { Carousel } from "react-bootstrap";
import howto0 from "./HowToPics/howto0.png";
import howto1 from "./HowToPics/howto1.png";
import howto2 from "./HowToPics/howto2.png";
import howto3 from "./HowToPics/howto3.png";
import howto4 from "./HowToPics/howto4.png";
import howto5 from "./HowToPics/howto5.png";


function HowTo(props) {
  return (
    <div id="HowToDiv">
      <h1>Here's how you play</h1>
      <h2>Introduction</h2>
      <p>
        Red Flags is a party game about convincing your friends to go on
        terrible dates.
      </p>
      <h2>Here's how it works</h2>
      <p>
        One of your friends is going to be the "single". <br />
        Every other player uses TWO perk cards to make a hot date that they
        think would be a great match for that person.
      </p>

      <h2>You'll get characteristics (perk) cards like:</h2>
      <ul>
        <li>
          <p>is a brain surgeon</p>
        </li>
        <li>
          <p>loves to cuddle</p>
        </li>
        <li>
          <p>is an olympic gymnast</p>
        </li>
        <li>
          <p>loves video games</p>
        </li>
        <li>
          <p>owns your favorite sports team</p>
        </li>
      </ul>
      <h2>
        But then everyone also gets red flag cards like:
      </h2>
      <ul>
        <li>
          <p>Keeps mosquitoes as pets</p>
        </li>
        <li>
          <p>Uses Crayola as make up</p>
        </li>
        <li>
          <p>Can only walk horizontally</p>
        </li>
      </ul>
      <h2>Using one of your red flags you can now ruin one of your freind's suggested date. Now all of these perfect dates will have flaws like:</h2>
      <ul>
        <li>
          <p>An olympic gymnast that loves video games who keeps mosquitoes as pets</p>
        </li>
        <li>
          <p>A brain surgeon who loves to cuddle but uses Crayola as make up</p>
        </li>
        <li>
          <p>A millionaire who is humble but can only walk horizontally</p>
        </li>
      </ul>
      <h2>
        Now that all of the dates are horrible, everyone tries to convince the
        single to go out with their date. <br/>
        That's pretty much it.<br/> The game can be as raunchy or tame as your
        imaginations allow.
      </h2>
      <div className="divider"></div>
      <h1>Here's what the game actually looks like.</h1>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={howto0}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="carouselh3"></h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={howto1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="carouselh3">Select two preks</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={howto2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="carouselh3">Then submit those two perks by clicking the submit match button at the bottom of the page.</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={howto3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="carouselh3">Select a red flag</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={howto4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="carouselh3">After you see all the ponential matches, tag a red flag onto a date you want to ruin.</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={howto5}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="carouselh3">Finally when all the dates are ruined the current single will decide on the best date the went to go on.</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
      {/* <img src={howto0} alt="" width="80%" height="80%" />
      <h2>Once the game starts select two preks.</h2>
      <img src={howto1} alt="" width="80%" height="80%" />
      <h2>
        Then submit those two perks by clicking the submit match button at the
        bottom of the page.
      </h2>
      <img src={howto2} alt="" width="80%" height="80%" />
      <h2>
        Now it'll show up at the top on the matches for the current single.
      </h2>
      <img src={howto3} alt="" width="80%" height="80%" />
      <h2>
        After you see all the ponential matches, tag a redflags onto a match you
        want to ruin.
      </h2>

      <img src={howto4} alt="" width="80%" height="80%" />
      <h2>
        Finally when all the dates are ruined the current single will decide on
        the best date the went to go on.
      </h2>

      <img src={howto5} alt="" width="80%" height="80%" /> */}
      
    </div>
  );
}
export default HowTo;
