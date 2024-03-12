import './App.css'
import {useState} from "react";
import {Axis, Heading, Legend, LineSeries, Plot} from "react-plot";


type Point = {
    x: number
    y: number
}


function App() {

    const w = (freq: number) => { return Math.PI * freq * 2; }

    const [magnitude,      setMagnitude   ] = useState("");
    const [frequency,       setFrequency    ] = useState("");
    const [resistance,    setResistance ] = useState("");

    const plot1 = (
        frequency: number
    ) => {

        const plotData: Point[] = [];
        const w1 = w(frequency);

        for (let i = 0; i < 2; i += 0.03) {
            plotData.push({
                    x: i,
                    y: frequency * w1 * Math.sin(w1 * i)
            })
        }

        return plotData;
    }

    const plot2 = (
        frequency:  number,
        resistance: number
    ) => {

        const plotData: Point[] = [];
        const w1 = w(frequency);

        for (let i = 0; i < 2; i += 0.03) {
            plotData.push({
                x: i,
                y: frequency * w1 * Math.sin(w1 * i) / resistance
            })
        }

        return plotData;
    }

    return (
        <div className={"wrapper11"}>

            <div className={"inputWrapper11"}>
                <div>
                    <label> Enter values to see the plots </label>
                    <input
                        placeholder={"Magnitude"}
                        value={magnitude}
                        onChange={(event) => setMagnitude(event.target.value)}
                    />
                </div>
                <div>
                    <input
                        placeholder={"Frequency"}
                        value={frequency}
                        onChange={(event) => setFrequency(event.target.value)}

                    />
                </div>
                <div>
                    <input
                        placeholder={"Resistance"}
                        value={resistance}
                        onChange={(event) => setResistance(event.target.value)}

                    />
                </div>
            </div>

            <div className={"plots"}>

            <div
                className={"plot1"}
            >

                <Plot
                    width={1200}
                    height={700}
                >

                    <Heading
                        title={"Dependence of EMF on time"}
                    ></Heading>

                    <LineSeries
                        data={ plot1(Number.parseFloat(frequency)) }
                        xAxis="x"
                        yAxis="y"
                        label={"EMF(time)"}
                        lineStyle={{ strokeWidth: 3 }}
                        displayMarkers={false}
                    />
                    <Axis
                        id="x"
                        position="bottom"
                        label="t, sec"
                        displayPrimaryGridLines
                    />
                    <Axis
                        id="y"
                        position="left"
                        label="EMF, V"
                        displayPrimaryGridLines
                    />
                    <Legend position="right" />

                </Plot>

            </div>

            <div className={"plot2"}>

                <Plot
                    width={1200}
                    height={700}
                >

                    <Heading
                        title={"Dependence of induction current on time"}
                    ></Heading>

                    <LineSeries
                        data={ plot2(
                            Number.parseFloat(frequency),
                            Number.parseFloat(resistance)
                        ) }
                        xAxis="x"
                        yAxis="y"
                        label={"I(time)"}
                        lineStyle={{ strokeWidth: 3 }}
                        displayMarkers={false}
                    />
                    <Axis
                        id="x"
                        position="bottom"
                        label="t, sec"
                        displayPrimaryGridLines
                    />
                    <Axis
                        id="y"
                        position="left"
                        label="I, A"
                        displayPrimaryGridLines
                    />
                    <Legend position="right" />

                </Plot>

            </div>

            </div>

        </div>
    )
}

export default App
