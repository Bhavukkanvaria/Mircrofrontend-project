import React, { Suspense } from 'react'
import {useDispatch, useSelector} from 'shared/hooks'
import {login, logout} from 'shared/slices'

const AnalyticsApp = React.lazy(() => import('analytics/AnalyticsApp'));
const AuthApp = React.lazy(() => import('auth/AuthApp'))

export const App = () => {
  const dispatch = useDispatch();
  const { user, role } = useSelector((state) => state.auth);

  const onLogin = () => {
    dispatch(login({ user: { name: 'Bhavuk' } }))
  }

  const onLogout = () => {
    dispatch(logout({}))
  }

  // return (
  //     <div>
  //         <h1>Host App!</h1>
  //         <p>Current user: {user?.name || 'Guest'}</p>
  //         {
  //             !user ? <button onClick={onLogin}>Login</button>
  //                  :
  //                 <button onClick={onLogout}>Logout</button>
  //         }
  //         <Suspense fallback={<div>Loading AnalyticsApp...</div>}>
  //             <AnalyticsApp />
  //         </Suspense>
  //     </div>
  // )
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Enterprise Dashboard</h1>

      {!user ? (
        <Suspense fallback="Loading Auth...">
          <AuthApp />
        </Suspense>
      ) : (
        <>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
            <p>Logged in as: <strong>{user.name}</strong> with email as <strong>{user.email}</strong></p>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </div>

          <Suspense fallback="Loading Analytics...">
            <AnalyticsApp />
          </Suspense>
        </>
      )}
    </div>
  );
}