import React from 'react';
import { render } from 'react-dom';
import { Button } from 'react-toolbox/lib/button';

const App = () => {
  return (
    <div>
      <h1>React is awesome!</h1>
      <Button label="Hello World!" raised primary />
    </div>
  );
};

render(
  <App />,
  document.getElementById('app')
);
