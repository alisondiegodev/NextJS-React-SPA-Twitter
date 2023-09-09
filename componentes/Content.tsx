"use client";
import "./Content.css";
import { Sparkle } from "phosphor-react";
import Tweet from "./Tweet";
import { useState, FormEvent } from "react";
import GithubUser from "./GithubUser";

function Sidebar() {
  const [newTweet, setNewTweet] = useState("");

  const [tweets, setTweets] = useState([
    {
      user: "Alison",
      likes: 2,
      child:
        "Criei esta rede social para praticar minhas habilidades em trabalhar com NextJS e React!",
      userId: "@alisondiegodev",
    },
    {
      user: "Alison",
      likes: 2,
      child: "Adicione o seu tweet acima.",
      userId: "@alisondiegodev",
    },
    {
      user: "Alison",
      likes: 2,
      child: "Apenas mais um tweet",
      userId: "@alisondiegodev",
    },
    {
      user: "Alison",
      likes: 2,
      child: "Ainda irei implementar a função de login com github",
      userId: "@alisondiegodev",
    },
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    let newTweetObj = {
      user: "Alison",
      likes: 2,
      child: newTweet,
      userId: "@alisondiegodev",
    };
    setTweets([newTweetObj, ...tweets]);
    setNewTweet("");
  }

  return (
    <main className="timeline">
      <div className="timeline-header">
        Home
        <Sparkle />
      </div>
      <form className="new-tweet-form">
        <label htmlFor="tweet">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="perfil" src="https://github.com/alisondiegodev.png" />
          <textarea
            value={newTweet}
            onChange={(event) => {
              setNewTweet(event.target.value);
            }}
            maxLength={140}
            id="tweet"
            placeholder="What's happening?"
          ></textarea>
        </label>
        <button onClick={createNewTweet}>Tweet</button>
      </form>
      <div className="divisor"></div>\
      {tweets.map((item, index) => {
        return (
          <Tweet
            key={index}
            user={item.user}
            userId={item.userId}
            likes={item.likes}
          >
            {item.child}
          </Tweet>
        );
      })}
    </main>
  );
}

export default Sidebar;
