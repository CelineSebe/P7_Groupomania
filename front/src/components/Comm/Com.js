import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const ComContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

const Comment = styled.div`
  margin: 3px;
  padding: 3px;
  font-size: 15px;
  border-radius: 8px;
  width: 100%;
  border: solid 2px ${colors.secondary};
`;
const ProfilImgContainer = styled.div`

`;

const UserImg= styled.div`

`;
const Com = ({ postId, imageUrlUser, pseudo }) => {
  const [allComments, setAllComments] = useState([]);

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
        setAllComments(response.data.comments);
        console.log(response)
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <>
      {allComments && allComments.length > 0 && (
        <ComContainer>
          {allComments.map((comment) => (
            <Comment key={postId}>
              {comment}
            </Comment>
          ))}
        </ComContainer>
      )}
    </>
  );
};

export default Com;
