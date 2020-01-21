import React, { useState } from 'react';
import Layout from '../src/components/Layout';

const Dashboard = () => {
  const [resource, setResource] = useState('posts');

  return (
    <Layout>
      <div>
        <div>
          <button onClick={() => setResource('howdy')}>Howdy</button>
          <button onClick={() => setResource('there')}>There</button>
        </div>
        {resource}
      </div>
    </Layout>
  );
}

export default Dashboard;