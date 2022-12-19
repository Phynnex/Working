import { useEffect, useState} from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { checkExpiredUserToken } from "utils";
import axios from "axios";


const Chart = () => {

    const[reportChart, setReportChart] = useState({})
    const COLORS = ["#00C49F", "#FFBB28", "#ED1C24 "];
    
    useEffect(() => {
        checkExpiredUserToken();
        
        try {
            const report_chart = JSON.parse(sessionStorage.getItem("report"));
            console.log(report_chart.apk, "chart");
            setReportChart(report_chart.apk)
            console.log(reportChart, 'report')
        } catch (error) {
            console.log(error);
        }
    }, []);
    const {INFO, WARNING, HIGH } = reportChart
    console.log(reportChart, 'info')
    const data = [
      { name: "INFO", value: INFO},
      { name: "WARNING", value: WARNING },
      { name: "HIGH", value: HIGH},
    ];
    return (
        <ResponsiveContainer width="100%" aspect={2}>
        <PieChart width={800} height={400}>
            
            <Pie
            data={data}
            cx={120}
            cy={100}
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {/* <Tooltip /> */}
         
          <Legend />
           
          
            
        </PieChart>
        </ResponsiveContainer>
  );
};



export default Chart;
