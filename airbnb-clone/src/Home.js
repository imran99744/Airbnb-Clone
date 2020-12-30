import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
        
      <Banner />
      <h1>Live anywhere</h1>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=320"
          title="Entire Homes"
          description="Choose your comfortable room to stay with a affordable price. Let's pick one and enjoy"
        />
        
        <Card
          src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=320"
          title="Cabins and Cottage"
          description="Choose your comfortable room to stay with a affordable price. Let's pick one and enjoy"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=320"
          title="Unique Stays"
          description="Choose your comfortable room to stay with a affordable price. Let's pick one and enjoy"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/d8b8e4ec-3a1c-494e-aca7-25432f7b8af5.jpg?im_w=960"
          title="Small Single Bedroom near Euston Station (16)
          "
          description="Choose your comfortable room to stay with a affordable price. Let's pick one and enjoy"
          price="$90/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/c584d745-9905-4fb7-bdf9-fb02380f4d59.jpg?im_w=960"
          title="Private room in house hosted by Marianne"
          description="Choose your comfortable room to stay with a affordable price. Let's pick one and enjoy"
          price="$190/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/d0619bae-c152-4590-9992-cbd4b162ed45.jpg?im_w=960"
          title="Superhost - modern,stylish doubleroom in zone 2"
          description="Choose your comfortable room to stay with a affordable price. Let's pick one and enjoy"
          price="$50/night"
        />
      </div>
    </div>
  );
}

export default Home;
