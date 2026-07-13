import React, { useState, useEffect } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  // useEffect runs whenever 'likes' changes
  useEffect(() => {
    console.log(`Likes updated: ${likes}`);

    // Here you can call API like:
    // updateLikes(likes);

  }, [likes]); // dependency array

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
      <h2>Likes: {likes}</h2>
      <button onClick={handleClick}>👍 Like</button>
    </div>
  );
}

export default LikeButton;

const [isOn, setIsOn] = useState(false);

useEffect(() => {
  console.log("Light status changed:", isOn);
}, [isOn]);

<button onClick={() => setIsOn(!isOn)}>
  Toggle Light
</button>
