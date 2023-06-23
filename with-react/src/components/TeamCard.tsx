import { useState } from "react";

type TeamCardProps = {
  name: string;
  title: string;
  imgSrc: string;
}

export function TeamCard({ name, title, imgSrc }: TeamCardProps) {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeButtonClick = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="team-card">
      <img src={imgSrc} alt={name} />
      <div className="name">{name}</div>
      <div className="title">{title}</div>
      <div>Likes: <span className="like-count">{likeCount}</span></div>
      <button className="like-button" onClick={handleLikeButtonClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up">
          <path d="M7 10v12" />
          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
      </button>
    </div>
  );
}