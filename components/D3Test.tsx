import * as d3 from "d3";
import * as d3shape from 'd3-shape';

import React from 'react'
import { Path } from 'react-native-svg'
import { AreaChart, Grid, LineChart } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import * as shape from 'd3-shape'

export class AreaChartExample extends React.PureComponent {

    render() {

        // const data = [ -50, -100, 40, 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
        const data = new Array(100).fill(0).map( () => Math.random() * 200 - 100 )

        const [dataMin,dataMax] = [ Math.min( ...data ), Math.max( ...data ) ];
        const yMax = dataMax > -dataMin ? dataMax : -dataMin;
        const off = dataMax / ( dataMax - dataMin)
        const grad = {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1,
        }

        console.log( [ dataMin, dataMax ] )

        const Line = ({ line }) => (
            <Path
                key={'line'}
                d={line}
                stroke={'rgb(134, 65, 244)'}
                fill={'none'}

            />
        )

        return (
            <AreaChart
                style={{ height: 320, width: data.length * 20 }}
                data={ data }
                contentInset={{ top: 50, bottom: 50 }}
                curve={ shape.curveNatural }
                yMin={ -yMax }
                yMax={  yMax }
                // svg={{ fill: 'rgba(134, 65, 244, 0.2)' }}
                svg={{
                    strokeWidth: 2,
                    stroke: 'url(#gradient2)',
                    fill: 'url(#gradient1)',
                }}
                gridProps={{
                    svg:{
                        stroke: 'white',
                    }
                }}
                // yScale={ d3.scaleSqrt }
                >
                <Grid/>
                
                <Defs key={'gradient1'}>
                    <LinearGradient id={'gradient1'} {...grad}>
                        <Stop offset={0} stopColor={'#1D6F'}/>
                        <Stop offset={off} stopColor={'#2220'}/>
                        <Stop offset={1} stopColor={'#D11F'}/>
                    </LinearGradient>
                    <LinearGradient id={'gradient2'} {...grad}>
                        <Stop offset={0} stopColor={'#1D6F'}/>
                        <Stop offset={off} stopColor={'#8884'}/>
                        <Stop offset={1} stopColor={'#D11F'}/>
                    </LinearGradient>
                </Defs>

            </AreaChart>
        )
    }
}


// const data = [
//     {"number":  8, "name": 'Fun activities'},
//     {"number": 7, "name": 'Dog'},
//     {"number": 16, "name": 'Food'},
//     {"number": 23, "name": 'Car'},
//     {"number": 42, "name": 'Rent'},
//     {"number":  4, "name": 'Misc'},
// ];

// console.log( d3 )
// console.log( d3shape )

// var arcs = d3shape.pie().value( o => { valueOf : o.number} )( data );

// console.log( arcs )



// // var arcs = d3.shape.pie()
// //         .value(this._value)
// //         (this.props.data);


