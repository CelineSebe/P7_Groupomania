import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Like = styled.div`
  opacity: 1;
  color: blueviolet;
  font-size: 18px;
`;

const Dislike = styled.div`
  opacity: 1;
  color: blueviolet;
  font-size: 18px;
`;

function modifyLike({
  postId,
  countDislike,
  countLike,
  usersLikes,
  usersDislikes,
}) {
  const token = JSON.parse(localStorage.getItem('token'));

  axios({
    method: 'PUT',
    url: `http://localhost:5000/api/publis/${postId}/like`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    data: {
      likes: countLike,
      dislikes: countDislike,
      usersLikes: usersLikes,
      usersDislikes: usersDislikes,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // alert('vos likes ont bien été modifié')
    })
    .catch((err) => {
      console.log(err);
      // window.alert("Vos likes n'ont pas été modifié. Veuillez recommencer!")
    });
}

const ButtonLike = ({
  postId,
  likes,
  dislikes,
  usersLikes,
  usersDislikes,
  description,
  imageUrl,
}) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const userId = JSON.parse(localStorage.getItem('userId'));

  useEffect(() => {
    if (usersLikes.includes(userId)) {
      setLiked(true);
    }
    if (usersDislikes.includes(userId)) {
      setDisliked(true);
    }
  }, [usersLikes, usersDislikes, userId]);

  const handleLike = () => {
    let updatedCounts = { countLike: likes, countDislike: dislikes };

    if (liked === false) {
      setLiked(true);
      updatedCounts.countLike += 1;

      if (!usersLikes.includes(userId)) {
        usersLikes.push(userId);
      }

      if (disliked) {
        setDisliked(false);
        updatedCounts.countDislike -= 1;

        const index = usersDislikes.indexOf(userId);
        if (index !== -1) {
          usersDislikes.splice(index, 1);
        }
      }
    } else {
      setLiked(false);
      updatedCounts.countLike -= 1;

      const index = usersLikes.indexOf(userId);
      if (index !== -1) {
        usersLikes.splice(index, 1);
      }
    }

    if (disliked === false) {
      setDisliked(true);
      updatedCounts.countDislike += 1;

      if (!usersDislikes.includes(userId)) {
        usersDislikes.push(userId);
      }

      if (liked) {
        setLiked(false);
        updatedCounts.countLike -= 1;

        const index = usersLikes.indexOf(userId);
        if (index !== -1) {
          usersLikes.splice(index, 1);
        }
      }
    } else {
      setDisliked(false);
      updatedCounts.countDislike -= 1;

      const index = usersDislikes.indexOf(userId);
      if (index !== -1) {
        usersDislikes.splice(index, 1);
      }
    }

    modifyLike({
      postId,
      countLike: updatedCounts.countLike,
      countDislike: updatedCounts.countDislike,
      usersLikes,
      usersDislikes,
    });
  };

  return (
    <>
      <Like onClick={handleLike}>
        {likes > 0 ? likes : <></>}
        {liked === true ? (
          <i className="fa-solid fa-thumbs-up" />
        ) : (
          <i className="fa-regular fa-thumbs-up" />
        )}
      </Like>
      <Dislike onClick={handleLike}>
        {dislikes > 0 ? dislikes : <></>}
        {disliked === true ? (
          <i className="fa-solid fa-thumbs-down" />
        ) : (
          <i className="fa-regular fa-thumbs-down" />
        )}
      </Dislike>
    </>
  );
};

export default ButtonLike;
