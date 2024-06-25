import "./single.scss";
import { Tooltip } from "@mui/material";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const Single = () => {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <img src="" alt="" />
            <h1>Jane Doe</h1>
            <button>Update</button>
          </div>
          <div className="details">
            <div className="item">
              <span className="itemTitle">UserName</span>
              <span className="itemValue"></span>
            </div>
            <div className="item">
              <span className="itemTitle">UserName</span>
              <span className="itemValue"></span>
            </div>
            <div className="item">
              <span className="itemTitle">UserName</span>
              <span className="itemValue"></span>
            </div>
          </div>
          <hr />
          <div className="chart">
            {/* <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer> */}
          </div>
        </div>
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        <ul>
          <li>
            <div>
              <p>long</p>
              <time>3days ago</time>
            </div>
          </li>
          <li>
            <div>
              <p>long</p>
              <time>3days ago</time>
            </div>
          </li>
          <li>
            <div>
              <p>long</p>
              <time>3days ago</time>
            </div>
          </li>
          <li>
            <div>
              <p>long</p>
              <time>3days ago</time>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Single;
