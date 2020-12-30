import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="search__info">
        <p>62 stays . 26 august to 30 august . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>

        <SearchResult
        img="https://a0.muscache.com/im/pictures/ed7c7063-c765-4e33-9977-0f1e2d7e86ed.jpg?im_w=960"
        location="Private room in house located in london"
        title="Private room in house hosted by Suchandra And Sourya"
        description="This is not an ordinary AirBnB; not spare space, but a labor of love, built with passion, energy and splashes of creativity, constructed to give you a new lease of life."
        star= {4.8}
        price= "$30 / night"
        total= "$117 total"
        />
        <SearchResult
        img="https://a0.muscache.com/im/pictures/ed7c7063-c765-4e33-9977-0f1e2d7e86ed.jpg?im_w=960"
        location="Private room in house located in london"
        title="Private room in house hosted by Suchandra And Sourya"
        description="This is not an ordinary AirBnB; not spare space, but a labor of love, built with passion, energy and splashes of creativity, constructed to give you a new lease of life."
        star= {4.8}
        price= "$30 / night"
        total= "$117 total"
        />
        <SearchResult
        img="https://a0.muscache.com/im/pictures/ed7c7063-c765-4e33-9977-0f1e2d7e86ed.jpg?im_w=960"
        location="Private room in house located in london"
        title="Private room in house hosted by Suchandra And Sourya"
        description="This is not an ordinary AirBnB; not spare space, but a labor of love, built with passion, energy and splashes of creativity, constructed to give you a new lease of life."
        star= {4.8}
        price= "$30 / night"
        total= "$117 total"
        />
    

      </div>
  
    </div>
  );
}

export default SearchPage;
