import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getOnePhoto } from '../../store/photos';
import { getComments, updateUserComment } from '../../store/comments';

import './Comments.css'

function Comments() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const photo = useSelector(state => state.photos)
  const comments = useSelector(state => state.comments);

  console.log('test', comments);
  useEffect(() => {
    dispatch(getOnePhoto(id));
    dispatch(getComments(id));
    dispatch(updateUserComment(id));
  }, [dispatch, id])

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  if (sessionUser.id === photo[7]?.id) {
    return (
      <div>
        {Object.values(comments).map(comment => (
          <div key={comment.id}>
            <p>{comment.User.username}</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      {Object.values(comments).map(comment => (
        <div key={comment.id}>
          <p>{comment.User.username}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Comments;