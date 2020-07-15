import { CartesianGrid, 
    LineChart, 
    Line, 
    YAxis, 
    XAxis, 
    Tooltip } from 'recharts'
import React from 'react'
import { orderBy, find } from 'lodash'
import theme from '../../theme'
import commaNumber from 'comma-number'

const StatChart = ({data, dataKey, color}) => {
    const sortedData = orderBy(data, 'cases')

    const yAxisFormatter = (i) => i
                                    .toString()
                                    .replace(/(\d+)(\d0{2})$/, (a, b) => `${b}k`)
    
    const stateFromKey = (key, value) => {
        const listValues = Object.values(sortedData)
        return(find(listValues, [value, key]).state)
    }

    return(
        <LineChart width={500} height={300} data={sortedData}>
            <XAxis dataKey="uf"
            />
            <YAxis
                tickFormatter={yAxisFormatter}
                label={{
                    value: 'Total de casos COVID-19 em cada Estado.',
                    angle: -90,
                    position: 'left'
                }}
            />
            <Tooltip
             
                separator=" "
                formatter={(value, key) => {
                return [
                        commaNumber(value),
                        stateFromKey(value, key)
                    ]
            } }
            />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey={dataKey} stroke={theme.colors[color]} />
        </LineChart>
    )
}

export default StatChart