import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const Comment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-right: 200px;
  padding-right: 8px;
  font-size: 15px;
  border-radius: 50px;
  width: 100%;
  border: solid 2px ${colors.secondary};
`;

const ProfilImgContainer = styled.div`
display: flex;
align-items: center
  border-radius: 12px;
  width: 40px;
  font-size: 10px;
  text-align: center;
`;

const UserImg = styled.img`
  width: 100%;
  border-radius: 50px;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  color: red;
  cursor: pointer;
  font-size: 12px;
  margin-left: 4px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Com = ({ postId }) => {
  const [allComments, setAllComments] = useState([]);
  const role = JSON.parse(localStorage.getItem('role'))

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));

    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/publis/comments/${postId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        const commentsWithInfo = response.data.comments.map((comment) => ({
          ...comment,
          pseudo: comment.pseudo,
          imageUrlUser: comment.imageUrlUser,
        }));

        setAllComments(commentsWithInfo);
        console.log('commentInfo', response);
        console.log('commentWithInfo', commentsWithInfo);

      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [postId]);

  const handleDeleteComment = async (commentId) => {
    try {
      const token = JSON.parse(localStorage.getItem('token'));
      await axios.delete(
        `http://localhost:5000/api/publis/comments/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
        );
        
        // Mettre à jour les commentaires après la suppression
        setAllComments((prevComments) =>
        prevComments.filter((comment) => comment._id !== commentId)
        );
      } catch (error) {
        console.error('Error deleting comment:', error);
      }
    };
    
  return (
    <Container>
      {allComments && allComments.length > 0 && (
        <>
          {allComments.map((comment) => (
            <Comment key={comment._id}>
              <ProfilImgContainer>
                <UserImg alt="image profil" src={comment.imageUrlUser} />
                <div style={{margin: "4px"}}>{comment.pseudo}</div>
              </ProfilImgContainer>
              <div style={{ margin: '4px' }}>{comment.content}</div>
              {role === "administrateur" ? (
              <DeleteButton
                onClick={() => handleDeleteComment(comment._id)}
              >
                <i className="fa-solid fa-xmark" style={{fontSize: '18px'}}></i>
              </DeleteButton>
              ) : (<></>)}
            </Comment>
          ))}
        </>
      )}
    </Container>
  );
};

export default Com;
