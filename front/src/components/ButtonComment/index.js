import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const ButtonComment = ({ postId, userId, comments, onClick }) => {
    return (
      <div onClick={onClick}>
        <i className="fa-regular fa-comment"></i>
        {comments && comments.length} {/* Afficher le nombre de commentaires */}
      </div>
    );
  };

export default ButtonComment;