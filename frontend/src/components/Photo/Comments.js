import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getComments, createComment, deleteComment } from '../../store/comments';

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
  const [deletedCommentId, setDeletedCommentId] = useState('');

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

  const handleDelete = async e => {
    e.preventDefault();

    console.log('delete', deletedCommentId);
    dispatch(deleteComment(deletedCommentId));
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
          {Object.values(userComments).map(comment => (
            <div key={comment.id}>
              <p id='username-display'>{comment.User.username}</p>
              <p>{comment.body}</p>
              <form onSubmit={handleDelete}>
                <button type='submit' onClick={e => setDeletedCommentId(comment.id)}>X</button>
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