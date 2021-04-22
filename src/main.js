import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import applyChecklist from './script';
import { checklist } from '../checklist'

export const Popup = (props) => {
  const [response, setResponse] = useState({})

  useEffect( async () => {
    setResponse(await applyChecklist(checklist));
  },[])

  return (
    <div>
      {
        Object.entries(response).map((check) => {
          return <p>{check[1]}</p>
        })
      }
    </div>
  );
};

ReactDOM.render(<Popup />, document.getElementById('app'));
