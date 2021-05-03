import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import DemoButton from '../DemoButton';
import './Splash.css'

function Splash() {
  const sessionUser = useSelector(state => state.session.user);

  if (!sessionUser) {
    return (
      <div className='splash-page'>
        <div className='intro-text'>
          <h1>Find your happiness.</h1>
          <h2>Choose a demo user to enter the Puppr community.</h2>
          <div className='demo-users'>
            <DemoButton />
          </div>
        </div>
      </div>
    )
  }
  return (
    <Redirect to='/explore' />
  )
}

export default Splash;