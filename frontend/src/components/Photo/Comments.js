import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getComments, updateUserComment, createComment } from '../../store/comments';

import './Photo.css'

function Comments() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { id } = useParams();

  const comments = useSelector(state => state.comments);
  // retrieve comments of user
  let userComments = Object.values(comments).filter(comment => comment?.userId === sessionUser.id)
  let otherComments = Object.values(comments).filter(comment => comment?.userId !== sessionUser.id)

  const [body, setBody] = useState('');
  const [newComment, setNewComment] = useState('');


  useEffect(() => {
    dispatch(getComments(id));
  }, [dispatch, id])

  const handleSubmit = async e => {
    await dispatch(updateUserComment(id));
  }

  const addUserComment = async e => {
    // e.preventDefault();
    await dispatch(createComment(id));

    const comment = {
      body,
      userId: sessionUser.id,
      photoId: id
    }

    const newComment = await dispatch(createComment(comment));
    return newComment;
  }

  // const handleDelete = async e => {
    // e.preventDefault();
    // await dispatch(deleteUserPhoto(id))
    // history.push(`/profile/${photo[4]}`);
  // }

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

 
  if (sessionUser.id === userComments[0]?.userId) {
    return (
      <div className='comments-container'>
        {Object.values(userComments).map(comment => (
          <div key={comment.id}>
            <p id='username-display'>{comment?.User.username}</p>
            <p>{comment.body}</p>
            <form key={comment.id} onSubmit={handleSubmit}>
              <input type="text" value={body} placeholder={body}/>
              <button>Save</button>
              <button>Delete</button>
            </form>
          </div>
        ))}
        {Object.values(otherComments).map(comment => (
          <div key={comment.id}>
            <p id='username-display'>{comment.User.username}</p>
            <p>{comment.body}</p>
          </div>
        ))}
        <div>
          <form onSubmit={addUserComment}>
            <textarea value={newComment} onChange={e => setNewComment(e.target.value)} name="" placeholder='Write a comment...' id="" cols="30" rows="10" required></textarea>
            <button>Comment</button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className='comments-container'>
      {Object.values(comments).map(comment => (
        <div key={comment.id}>
          <p id='username-display'>{comment.User.username}</p>
          <p>{comment.body}</p>
        </div>
      ))}
      <div>
        <form onSubmit={addUserComment}>
          <textarea value={newComment} onChange={e => setNewComment(e.target.value)} name="" placeholder='Write a comment...' id="" cols="30" rows="10" required></textarea>
          <button>Comment</button>
        </form>
      </div>
    </div>
  )
}

export default Comments;