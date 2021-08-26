import React from "react";
import SearchbarDefault from "../../components/searchbar/SearchbarDefault";
import FeedItem from "../../components/feeditems/FeedItem";
import FeedSuggestion from "../../components/feeditems/FeedSuggestion";

export default function HomepageContainer() {
  let today = new Date();
  let suggestions = [
    {
      subscription: "free",
      userAvatar:
        "https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      userBanner:
        "https://images.pexels.com/photos/1317534/pexels-photo-1317534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      displayName: "TigerFist",
      userHandler: "@tigerfist",
      verified: true,
    },
    {
      subscription: "free",
      userAvatar:
        "https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      userBanner:
        "https://images.pexels.com/photos/1317534/pexels-photo-1317534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      displayName: "TigerFist2",
      userHandler: "@tigerfist2",
      verified: false,
    },
    {
      subscription: "free",
      userAvatar:
        "https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      userBanner:
        "https://images.pexels.com/photos/1317534/pexels-photo-1317534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      displayName: "TigerFist3",
      userHandler: "@tigerfist3",
      verified: true,
    },
  ];
  let posts = [
    {
      displayName: "TigerFist4",
      user: "Badb",
      handler: "@ouhandler",
      date: today.toLocaleDateString("en-US"),
      img: "https://images.pexels.com/photos/906052/pexels-photo-906052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      textContent:
        "Mia Khalifa hits the streets for an all-day adventure in the season 2 premiere of Unlocked! @miakhalifa and host @caseboon turn themselves into 3-D holograms and rock out in a classic convertible while @miakhalifa spills the tea on everything from why she started an OnlyFans to her not-so-secret obsession with Batman. ",
      likes: "250",
      userAvatar:
        "https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      likes: "250",
      comments: [
        {
          displayName: "TigerFist4",
          user: "Badb",
          handler: "@ouhandler",
          commentText:
            "I like the way you did this, Its the best work to date, Thanks for sharing",
          userAvatar:
            "https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          displayName: "TigerFist4",
          user: "Badb",
          handler: "@ouhandler",
          commentText:
            "I like the way you did this, Its the best work to date, Thanks for sharing",
          userAvatar:
            "https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
      ],
    },
    {
      displayName: "TigerFist4",
      user: "Badb2",
      handler: "@ourIg2",
      date: today.toLocaleDateString("en-US"),
      img: "https://images.pexels.com/photos/906052/pexels-photo-906052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      textContent:
        "Mia Khalifa hits the streets for an all-day adventure in the season 2 premiere of Unlocked! @miakhalifa and host @caseboon turn themselves into 3-D holograms and rock out in a classic convertible while @miakhalifa spills the tea on everything from why she started an OnlyFans to her not-so-secret obsession with Batman. ",
      likes: "255",
      userAvatar:
        "https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      likes: "250",
      comments: [
        {
          displayName: "TigerFist4",
          user: "Badb",
          handler: "@ouhandler",
          commentText:
            "I like the way you did this, Its the best work to date, Thanks for sharing",
          userAvatar:
            "https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          displayName: "TigerFist4",
          user: "Badb",
          handler: "@ouhandler",
          commentText:
            "I like the way you did this, Its the best work to date, Thanks for sharing",
          userAvatar:
            "https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          displayName: "TigerFist4",
          user: "Badb",
          handler: "@ouhandler",
          commentText:
            "I like the way you did this, Its the best work to date, Thanks for sharing",
          userAvatar:
            "https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
      ],
    },
    {
      displayName: "TigerFist4",
      user: "Badb3",
      handler: "@ourIg3",
      date: today.toLocaleDateString("en-US"),
      img: "https://images.pexels.com/photos/906052/pexels-photo-906052.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      textContent:
        "Mia Khalifa hits the streets for an all-day adventure in the season 2 premiere of Unlocked! @miakhalifa and host @caseboon turn themselves into 3-D holograms and rock out in a classic convertible while @miakhalifa spills the tea on everything from why she started an OnlyFans to her not-so-secret obsession with Batman. ",
      likes: "289",
      userAvatar:
        "https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      likes: "250",
      comments: [
        {
          displayName: "TigerFist4",
          user: "Badb",
          handler: "@ouhandler",
          commentText:
            "I like the way you did this, Its the best work to date, Thanks for sharing",
          userAvatar:
            "https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          displayName: "TigerFist4",
          user: "Badb",
          handler: "@ouhandler",
          commentText:
            "I like the way you did this, Its the best work to date, Thanks for sharing",
          userAvatar:
            "https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          displayName: "TigerFist4",
          user: "Badb",
          handler: "@ouhandler",
          commentText:
            " I lgfdgdf gfdgdfgdfgike the way you did this, ItI lgfdgdf gfdgdfgdfgike the way you did this, ItI lgfdgdf gfdgdfgdfgike the way you did this, ItI lgfdgdf gfdgdfgdfgike the way you did this, Its the best work to date, Thanks for sharing",
          userAvatar:
            "https://images.pexels.com/photos/3155588/pexels-photo-3155588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
      ],
    },
  ];
  return (
    <div className="home-page">
      <div className="home-page__header">
        <h1 className="home-page__title">Home</h1>
        <SearchbarDefault />
      </div>
      <div className="home-page__content">
        <div className="home-page__feed-stream">
          {posts.map((post) => {
            return <FeedItem post={post} />;
          })}
        </div>
        <div className="home-page__feed-suggestions">
          {suggestions.map((suggestion) => {
            return <FeedSuggestion suggestion={suggestion} />;
          })}
        </div>
      </div>
    </div>
  );
}
