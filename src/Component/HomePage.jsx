// HomePage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../Store/Store';

const HomePage = () => {
  const loggedInUser = useSelector((state) => state.loggedInUser);
  const dispatch = useDispatch();


  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <h2>Home Page</h2>
      {loggedInUser && (
        <div>
        <p>
          {loggedInUser.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {loggedInUser ? (
        <table>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>password</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{loggedInUser.email}</td>
                    <td>{loggedInUser.password}</td>
                </tr>
            </tbody>
        </table>
      ):(
        <p>Please Login to view User details.</p>
      )}
    </div>
  );
};

export default HomePage;
