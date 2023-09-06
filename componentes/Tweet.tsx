import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.css";

interface TweetProps {
  user: string;
  likes?: number;
  children: string;
  userId: string;
}
export default function Tweet(props: TweetProps) {
  return (
    <div className="tweet-layout">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://github.com/alisondiegodev.png" alt="perfil" />
      <div className="tweet">
        <div className="tweet-header">
          <strong>{props.user}</strong>
          <p>{props.userId}</p>
        </div>
        <div className="tweet-text">{props.children}</div>

        <div className="tweet-bottom">
          <button>
            <ChatCircle />
          </button>
          <button>
            <ArrowsClockwise />
          </button>
          <button>
            <Heart />
            {props.likes ?? 0}
          </button>
        </div>
      </div>
    </div>
  );
}
