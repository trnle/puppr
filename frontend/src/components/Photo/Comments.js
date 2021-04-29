import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getComments, updateUserComment } from '../../store/comments';


function Comments() {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const { id } = useParams();

  const comments = useSelector(state => state.comments);

  console.log('test', comments);
  useEffect(() => {
    dispatch(getComments(id));
    dispatch(updateUserComment(id));
  }, [dispatch, id])

  if (!sessionUser) {
    return (
      <Redirect to='/login' />
    )
  }

  // retrieve comments of user
  let userComments = Object.values(comments).filter(comment => comment?.userId === sessionUser.id)
  // console.log('user', userComments[0].userId);
  let otherComments = Object.values(comments).filter(comment => comment?.userId !== sessionUser.id)

  if (sessionUser.id === userComments[0]?.userId) {
    return (
      <div>
        {Object.values(userComments).map(comment => (
          <div key={comment.id}>
            <p>{comment?.User.username}</p>
            <p>{comment.body}</p>
            <form>
              <input type="text" placeholder='Comment'/>
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