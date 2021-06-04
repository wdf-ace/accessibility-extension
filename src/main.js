import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import applyChecklist from './script';
import { checklist } from '../checklist';
import { VictoryPie, VictoryLabel } from 'victory';
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
      <div id="logo">
        <img src={'../public/logo/Wide_Logo.png'} />
      </div>

      {responsesByPass.length && (
        <div className="chartContainer">
          <h1>Accessibility Results</h1>
          <svg viewBox="0 0 250 250">
            <VictoryPie
              standalone={false}
              width={250}
              height={250}
              data={[
                { x: 'Pass', y: calcPercentage() },
                { x: 'Fail', y: 100 - calcPercentage() },
              ]}
              innerRadius={50}
              labelRadius={90}
              labels={() => null}
              style={{
                data: {
                  fill: ({ datum }) => {
                    let color;
                    if (datum.y > 80) color = '#3ea990';
                    else if (datum.y > 65) color = '#FAC479';
                    else color = '#ee5d52';
                    return datum.x === 'Pass' ? color : 'transparent';
                  },
                },
              }}
            />
            <VictoryLabel
              textAnchor="middle"
              // verticalAnchor="middle"
              x={125}
              y={125}
              text={`${calcPercentage()}%`}
              style={{ fontSize: 30 }}
            />
          </svg>
        </div>
      )}

      {Object.entries(responses).map((check) => {
        if (check[1].SUCCESS) {
          return (
            <div className="message">
              <FontAwesomeIcon icon={faCheckCircle} className="passed" />
              <p> {check[1].SUCCESS}</p>
            </div>
          );
        }
        return (
          <div className="message">
            <FontAwesomeIcon icon={faTimesCircle} className="failed" />
            <p>{check[1].ERROR}</p>
          </div>
        );
      })}
    </div>
  );
};

ReactDOM.render(<Popup />, document.getElementById('app'));
