import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";


const Chart = () => {
    const examResults = [
        { student: "Student 1", mathMark: 85, banglaMark: 15 },
        { student: "Student 2", mathMark: 40, banglaMark: 50 },
        { student: "Student 3", mathMark: 92, banglaMark: 85 },
        { student: "Student 4", mathMark: 58, banglaMark: 20 },
        { student: "Student 5", mathMark: 88, banglaMark: 82 }
    ];


    return (

        <div>
            <h2></h2>
            <AreaChart
                width={900}
                height={400}
                data={examResults}
                margin={{
                    top: 10,
                    right: 30,
                    left: 20,
                    bottom: 20,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                {/* <XAxis dataKey="name" /> */}
                {/* <YAxis /> */}
                <Tooltip />
                <Area type="monotone" dataKey="mathMark" stroke="#8884d8" fill="#5314d6" />
            </AreaChart>
            <BarChart width={350} height={400} data={examResults}>
                <XAxis></XAxis>
                <YAxis></YAxis>
          <Bar dataKey="mathMark" fill="#8884d8" />
        </BarChart>
        </div>
    );
};

export default Chart;