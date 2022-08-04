import styles from './stats.module.scss';
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer, Label, CartesianGrid, Tooltip, Pie, PieChart, LabelList, Legend, Cell } from 'recharts';
import randomColor from 'randomcolor';

function Stats(props) {

    const linedata = props.data.map((item) => ({ date: new Date(item.paymentDate).getTime(), amount: item.amount }));

    const reducer = (groupedData, item) => {
        const index = groupedData.findIndex( arrayItem => arrayItem.type === item.type );
        if (index >= 0) {
            groupedData[index].amount = groupedData[index].amount + item.amount;
        } else {
            groupedData.push({type: item.type, amount: item.amount});
        }
        return groupedData;
    }

    const piedata = props.data.reduce(reducer, []);
    const piecolors = randomColor({count: piedata.length, seed: "kulukirjanpito"});

/*<ResponsiveContainer width={'100%'} heigth={360}>

*/
    return (
        <div className={styles.stats}>

            <h2>Statsit</h2>
            <h3>Tankkaukset aikajanalla</h3>
            <div style={{position: 'relative', width: '100%', paddingBottom: '360px'}}>
  <div
    style={{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    }}
  >
            <ResponsiveContainer width='99%' heigth='99%'>
            <LineChart data={linedata} margin={{ top: 30, left: 20, right: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" 
                        dataKey="date" 
                        domain={["dataMin","dataMax"]} 
                        scale="time" 
                        tickFormatter={timeStr => new Date(timeStr).toLocaleDateString("fi-FI")}
                        />
                <YAxis>
                    <Label value="Summa" 
                            position="left"
                            angle={-90}
                            style={{ textAnchor: "middle" }}/>
                </YAxis>
                <Line dataKey="amount" name="kulut" unit="€" />
                <Tooltip labelFormatter={value => new Date(value).toLocaleDateString("fi-FI")}/>
            </LineChart>
            </ResponsiveContainer>

            <h3>Kulut yhteensä ajoneuvoittain</h3>

            <ResponsiveContainer width={"100%"} height={360}>
            <PieChart>
                <Pie data={piedata} dataKey="amount" nameKey="type">
                    <LabelList dataKey="amount" position="inside" />
                    { piecolors.map(color => <Cell fill={color} key={color} />) }
                </Pie>
                <Legend />
                <Tooltip formatter={value => value + " €"} />
            </PieChart>
            </ResponsiveContainer>

        </div></div></div>
        
);
}

export default Stats;