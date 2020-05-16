import React from "react";
import howto1 from "./HowToPics/1.png";
import howto2 from "./HowToPics/2.png";
import howto3 from "./HowToPics/3.png";
import howto4 from "./HowToPics/4.png";
import howto5 from "./HowToPics/5.png";

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
        One of your friends is going to be the single. <br />
        Every other player uses TWO perk cards to make a hot date that they
        think would be a great match for that person.
      </p>

      <h2>You'll get characters like:</h2>
      <ul>
        <li>
          <p>A brain surgeon that loves to cuddle</p>
        </li>
        <li>
          <p>An olympic gymnast that loves video game</p>
        </li>
        <li>
          <p>A famous musician that owns your favorite sports team</p>
        </li>
      </ul>

      <h2>
        But then everyone gets to play a Red Flag onto another player at the
        table.
        <br /> Now all of these perfect dates will have flaws like:
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

      <h2>
        Now that all of the dates are horrible, everyone tries to convince the
        single to go out with their date. <br />
        That's pretty much it. The game can be as raunchy or tame as your
        imaginations allow.
      </h2>
      <img src={howto1} alt="" width="80%" height="80%" />
      <img src={howto2} alt="" width="80%" height="80%" />
      <img src={howto3} alt="" width="80%" height="80%" />
      <img src={howto4} alt="" width="80%" height="80%" />
      <img src={howto5} alt="" width="80%" height="80%" />
    </div>
  );
}
export default HowTo;
