import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="text-center mt-3">
    <img className="my-2" alt="Calendar logo" src="/android-chrome-192x192.png" />
    <h5 className="mt-2">
      Click <Link to="/calendar">here</Link> to open the calendar.
    </h5>
  </div>
);

export default Home;
