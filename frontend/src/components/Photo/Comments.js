import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getComments, createComment, updateUserComment, deleteComment } from '../../store/comments';

import './Photo.css'

function Comments() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { id } = useParams();

  const comments = useSelector(state => state.comments);
  // retrieve comments of user
  let userComments = Object.values(comments).filter(comment => comment.userId === sessionUser.id)
  let otherComments = Object.values(comments).filter(comment => comment.userId !== sessionUser.id)

  const [newComment, setNewComment] = useState('');
  const [currentComment, setCurrentComment] = useState(-1);
  const [deletedCommentId, setDeletedCommentId] = useState('');
  
  const [body, setBody] = useState('');

  useEffect(() => {
    dispatch(getComments(id));
  }, [dispatch, id])

  const addUserComment = async e => {
    e.preventDefault();

    const comment = {
      body: newComment,
      userId: sessionUser.id,
      photoId: id
    }

    dispatch(createComment(comment));
    setNewComment('');
  }
  
  const handleDelete = e => {
    e.preventDefault();
    dispatch(deleteComment(deletedCommentId));
  }

  const handleEdit = i => {
    setCurrentComment(i);
  }

  const handleSaveEdit = e => {
    e.preventDefault();
    const updateComment = {
      body,
      userId: sessionUser.id,
      photoId: id
    }
    console.log('testttting',updateComment);
    return dispatch(updateUserComment(updateComment));
  }

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  if (sessionUser.id === userComments[0]?.userId) {
    return (
      <div className='photos-comments-tags'>
        <div className='comments-container'>
          {Object.values(otherComments).map(comment => (
            <div key={comment.id}>
              <p id='username-display'>{comment.User.username}</p>
              <p>{comment.body}</p>
            </div>
          ))}
          {Object.values(userComments).map((comment, i) => (
            <div key={i}>
              <p id='username-display'>{comment.User?.username}</p>
              <p>{comment.body}</p>
              {currentComment === i && 
                <form onSubmit={handleSaveEdit}>
                  <input type='text' value={body} onChange={e => setBody(e.target.value)} />
                  <button>Save</button>
                </form>
              }
              <button onClick={() => handleEdit(i)}>Edit</button>

              <form onSubmit={handleDelete}>
                <button type='submit' onClick={e => setDeletedCommentId(comment.id)}>X</button>
              </form>
            </div>
          ))}
          <div>
            <form onSubmit={addUserComment}>
              <textarea value={newComment} onChange={e => setNewComment(e.target.value)} placeholder='Write a comment...' cols="53" rows="7" required></textarea>
              <button>Comment</button>
            </form>
          </div>
        </div>
      </div>

    )
  }

  return (
    <div className='photos-comments-tags'>
      <div className='comments-container'>
        {Object.values(comments).map(comment => (
          <div key={comment.id}>
            <p id='username-display'>{comment.User.username}</p>
            <p>{comment.body}</p>
          </div>
        ))}
        <div>
          <form onSubmit={addUserComment}>
            <textarea value={newComment} onChange={e => setNewComment(e.target.value)} placeholder='Write a comment...' cols="53" rows="7" required></textarea>
            <button>Comment</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Comments;