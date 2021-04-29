import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import applyChecklist from './script';
import { checklist } from '../checklist';
import { VictoryPie, VictoryLabel } from 'victory';
import { assign } from 'lodash';

export const Popup = (props) => {
  const [responses, setResponses] = useState({})
  const [responsesByPass, setResponsesByPass] = useState({})

  useEffect( async () => {
    setResponses(await applyChecklist(checklist));
  },[])

  useEffect(() => {
    let tempResponses = {length: 0, SUCCESS: {}, ERROR: {}} 
    for(let check in responses){
      responses[check].SUCCESS 
      ? tempResponses.SUCCESS[check] = responses[check]
      : tempResponses.ERROR[check] = responses[check]
      tempResponses.length += 1;
    }
    setResponsesByPass(tempResponses);
  },[responses])

  function calcPercentage () {
    return Math.round(Object.keys(responsesByPass.SUCCESS).length / responsesByPass.length * 100);
  }

  const theme = {
    pie: assign(
      {
        colorScale: ['#338333', '#000000']
      }
    )
  }

  return (
    <div>
      <h1>Accessibility Results</h1>
      {
        responsesByPass.length && 
        <>
        <VictoryPie
          
          data = {[
            {x: "Pass", y: calcPercentage()},
            {x: "Fail", y: 100 - calcPercentage()},
          ]}
          innerRadius = {120}
          style = {{
            data: {
              fill: ({datum}) => {
                let color;
                if(datum.y > 80) color = '#338333'
                else if (datum.y > 65) color = '#ff8b3d'
                else color = 'red'
                return datum.x === "Pass" ? color : "transparent"
              }
            },
          }}
          // theme = {theme}
        />
        <VictoryLabel
          textAnchor="middle"
          verticalAnchor="middle"
          x={200} y={200}
          text={`${calcPercentage()}%`}
          style={{ fontSize: 45 }}
        />
        </>
      }
      
      {
        Object.entries(responses).map((check) => {
          if(check[1].SUCCESS) {
            return <p className='passed'>PASSED: {check[1].SUCCESS}</p>
          }
          return <p className='failed'>ERROR: {check[1].ERROR}</p>
        })
      }
    </div>
  );
};

ReactDOM.render(<Popup />, document.getElementById('app'));
