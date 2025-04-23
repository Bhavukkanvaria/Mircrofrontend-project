import React, {useEffect} from 'react';
// import {useSelector} from 'react-redux'
import {useSelector, useDispatch} from 'shared/hooks';
import {incrementPageView} from 'shared/slices';
import {fetchData} from 'shared/slices'



const AnalyticsApp = () => {
    const {data, loading} = useSelector((state) => state.analytics) // Uses host's store!
    const user = useSelector((state) => state.auth.user);
    const pageViews = useSelector((state)=> state.analytics.pageViews);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, []);

    // return (<div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem' }}>
    //     <h2>Analytics Micro-App</h2>
    //     <p>Logged in as: <strong>{user?.name || 'Guest'}</strong></p>
    //     {user && <p>User analytics data will appear here</p>}
    //     <p>Page views: {pageViews}</p>
    //     <button onClick={() => dispatch(incrementPageView())}>
    //         Track Page View
    //     </button>
    // </div>)
    return (
        <div style={{ padding: '20px', border: '1px solid #eee' }}>
          <h2>Analytics Dashboard</h2>
          {user && <p>Welcome, {user.name}!</p>}
          {loading ? (
            <p>Loading data...</p>
          ) : (
            <div>
              <h3>Monthly Stats</h3>
              <ul>
                {data.map(item => (
                  <li key={item.month}>
                    {item.month}: {item.value} users
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
    );
}

export default AnalyticsApp