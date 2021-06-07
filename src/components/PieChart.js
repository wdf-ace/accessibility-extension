import React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';

const PieChart = ({pass}) => {
    return(
        <div className="chartContainer">
          <h1>Accessibility Results</h1>

          <svg viewBox="0 0 250 250">
            <VictoryPie
              standalone={false}
              width={250}
              height={250}
              data={[
                { x: 'Pass', y: pass },
                { x: 'Fail', y: 100 - pass },
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
              text={`${pass}%`}
              style={{ fontSize: 30 }}
            />
          </svg>
        </div>
    )
}

export default PieChart;