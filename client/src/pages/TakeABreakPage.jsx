import React from "react";
import s from '../Styles/TakeABreakPage.module.css';

const TakeABreakPage = () => {
  const games = [
    {
      title: "Chess",
      description: "Test your strategy with a quick chess match against the computer!",
      image: "src/assets/chess.jpg", 
      link: "https://www.chess.com/play/computer",
    },
    {
      title: "Tetris",
      description: "Stack falling blocks strategically to create and clear complete rows in this classic puzzle game!",
      image: "src/assets/tetris.jpg",
      link: "https://tetris.com/play-tetris",
    },
    {
      title: "Flappy Bird",
      description: "Guide your bird through obstacles by tapping to flap - simple but addictively challenging!",
      image: "src/assets/flappybird.jpg",
      link: "https://flappybird.io",
    }
  ];

  return (
    <div className={s.outercontainer}>
      <div className="flex-1">
        <div className={s.pageContainer}>
          <h1 className={s.pageTitle}>Time to Recharge!</h1>
          <div className={s.gamesGrid}>
            {games.map((game) => (
              <div key={game.title} className={s.gameCard}>
                <img src={game.image} alt={game.title} className={s.gameImage} />
                <div className={s.gameContent}>
                  <h2 className={s.gameTitle}>{game.title}</h2>
                  <p className={s.gameDescription}>{game.description}</p>
                  <a href={game.link} target="_blank" rel="noopener noreferrer">
                    <button className={s.playButton}>
                      Play Now
                  </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeABreakPage;