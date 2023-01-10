import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip
} from "recharts";


const ChartAPK = ({report}) => {

    // const[reportChart, setReportChart] = useState({})
    const COLORS = ["#00C49F", "#FFBB28", "#ED1C24 "];
    
    // useEffect(() => {
    //     checkExpiredUserToken();
        
    //     try {
    //         const report_chart = JSON.parse(sessionStorage.getItem("report"));
    //         console.log(report_chart.apk, "chart");
    //         setReportChart(report_chart.apk)
    //         console.log(reportChart, 'report')
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }, []);
    const {INFO, WARNING, HIGH } = report
    console.log(INFO, WARNING, HIGH, 'info,warning,high')
    const data = [
      { name: "LOW", value: INFO},
      { name: "MEDUIM", value: WARNING },
      { name: "HIGH", value: HIGH},
  
    ];

  
    const CustomTooltip = ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <div >
          <p className="label">{`${payload[0].name} : ${payload[0].value}`}</p> 
          </div>
        );
      }
    
      return null;
    };
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
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          {/* <Tooltip /> */}
         
          <Legend layout="vertical" verticalAlign="middle" align="right" />
           
          
            
        </PieChart>
        </ResponsiveContainer>
  );
};



export default ChartAPK;