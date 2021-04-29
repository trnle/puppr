import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getComments, updateUserComment } from '../../store/comments';


function Comments() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { id } = useParams();

  const comments = useSelector(state => state.comments);
  // retrieve comments of user
  let userComments = Object.values(comments).filter(comment => comment?.userId === sessionUser.id)
  let otherComments = Object.values(comments).filter(comment => comment?.userId !== sessionUser.id)

  const [body, setBody] = useState('test');
  const handleSubmit = async e => {
    // e.preventDefault();
    await dispatch(updateUserComment(id));
  }

  // const handleDelete = async e => {
    // e.preventDefault();
    // await dispatch(deleteUserPhoto(id))
    // history.push(`/profile/${photo[4]}`);
  // }

  useEffect(() => {
    dispatch(getComments(id));
  }, [dispatch, id])

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

 
  if (sessionUser.id === userComments[0]?.userId) {
    return (
      <div>
        {Object.values(userComments).map(comment => (
          <div key={comment.id}>
            <p>{comment?.User.username}</p>
            <p>{comment.body}</p>
            <form key={comment.id} onSubmit={handleSubmit}>
              <input type="text" value={body} placeholder='Comment'/>
              <button>Save</button>
              <button>Delete</button>
            </form>
          </div>
        ))}
        {Object.values(otherComments).map(comment => (
          <div key={comment.id}>
            <p>{comment.User.username}</p>
            <p>{comment.body}</p>
          </div>
        ))}
        <div>
          <form>
            Write a comment
          </form>
        </div>
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