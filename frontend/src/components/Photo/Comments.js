import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { getComments, createComment, deleteComment } from '../../store/comments';

import './Photo.css'

function Comments() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const comments = useSelector(state => state.comments);
  // retrieve comments of user
  let userComments = Object.values(comments).filter(comment => comment.userId === sessionUser.id)
  let otherComments = Object.values(comments).filter(comment => comment.userId !== sessionUser.id)

  const [newComment, setNewComment] = useState('');
  // const [currentComment, setCurrentComment] = useState(-1);
  const [deletedCommentId, setDeletedCommentId] = useState('');

  // const [body, setBody] = useState('');

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

  // const handleEdit = i => {
  //   setCurrentComment(i);
  // }

  // const handleSaveEdit = e => {
  //   e.preventDefault();
  //   const updateComment = {
  //     body,
  //     userId: sessionUser.id,
  //     photoId: id
  //   }
  //   setCurrentComment(!currentComment);
  //   // console.log('testttting', updateComment);
  //   return dispatch(updateUserComment(updateComment));
  // }

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
              <a href={`/profile/${comment.User.id}`} onClick={e => {
                e.preventDefault();
                history.push(`/profile/${comment.User.id}`)
              }}>
                <p className='username-display'>{comment.User.username}</p>
              </a>
              <p className='user-comment'>{comment.body}</p>
            </div>
          ))}
          {Object.values(userComments).map((comment, i) => (
            <div key={i} className='edit-form'>
              <a href={`/profile/${comment.User?.id}`} onClick={e => {
                e.preventDefault();
                history.push(`/profile/${comment.User.id}`)
              }}>
                <p className='session-username-display'>{comment.User?.username}</p>
              </a>
              <div className='edit-user-comment'>
                <p className='session-user-comment'>{comment.body}</p>
                <div className='form'>
                  {/* {currentComment === i &&
                    <form className='input-form' onSubmit={handleSaveEdit}>
                      <input type='text' value={body} onChange={e => setBody(e.target.value)} />
                      <button id='save-btn'>Save</button>
                    </form>
                  }
                  <button id='edit-comment-btn' onClick={() => handleEdit(i)}>Edit</button> */}
                  <form onSubmit={handleDelete}>
                    <button id='delete-btn' type='submit' onClick={e => setDeletedCommentId(comment.id)}>X</button>
                  </form>
                </div>
              </div>
            </div>
          ))}
          <hr id='comments-hr'/>
          <div className='user-comment-container'>
            <form onSubmit={addUserComment}>
              <textarea value={newComment} onChange={e => setNewComment(e.target.value)} placeholder='Write a comment...' cols="53" rows="7" required></textarea>
              <button id='comment-btn'>Comment</button>
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
            <a href={`/profile/${comment.User.id}`} onClick={e => {
              e.preventDefault();
              history.push(`/profile/${comment.User.id}`)
            }}>
              <p className='username-display'>{comment.User.username}</p>
            </a>
            <p className='user-comment'>{comment.body}</p>
          </div>
        ))}
        <hr id='comments-hr'/>
        <div className='user-comment-container'>
          <form onSubmit={addUserComment}>
            <textarea value={newComment} onChange={e => setNewComment(e.target.value)} placeholder='Write a comment...' cols="53" rows="7" required></textarea>
            <button id='comment-btn'>Comment</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Comments;