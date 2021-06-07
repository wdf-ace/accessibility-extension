import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import applyChecklist from './script';
import PieChart from './components/PieChart'
import { checklist } from '../checklist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

export const Popup = (props) => {
  const [responses, setResponses] = useState({});
  const [responsesByPass, setResponsesByPass] = useState({});

  useEffect(async () => {
    setResponses(await applyChecklist(checklist));
  }, []);

  useEffect(() => {
    let tempResponses = { length: 0, SUCCESS: {}, ERROR: {} };
    for (let check in responses) {
      responses[check].SUCCESS
        ? (tempResponses.SUCCESS[check] = responses[check])
        : (tempResponses.ERROR[check] = responses[check]);
      tempResponses.length += 1;
    }
    setResponsesByPass(tempResponses);
  }, [responses]);

  function calcPercentage() {
    return Math.round(
      (Object.keys(responsesByPass.SUCCESS).length / responsesByPass.length) *
        100
    );
  }

  return (
    <div>
      <header id="logo">
        <img src={'../public/logo/Wide_Logo.png'} />
      </header>

      { responsesByPass.length &&
        <PieChart pass={calcPercentage()} />
       }

      {
        Object.entries(responses).map((check) => {
          let passed = !!check[1].SUCCESS;

          return (
            <div className="message">
              <FontAwesomeIcon 
                icon={passed ? faCheckCircle : faTimesCircle} 
                className={passed ? 'passed' : 'failed'} 
              />
              <p> {check[1][passed ? 'SUCCESS' : 'ERROR']}</p>
            </div>
          );
        })
      }

    </div>
  );
};

ReactDOM.render(<Popup />, document.getElementById('app'));
