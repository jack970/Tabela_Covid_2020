import { CartesianGrid, 
    LineChart, 
    Line,
    Legend,
    YAxis, 
    XAxis, 
    Tooltip } from 'recharts'
import React from 'react'
import { orderBy, find } from 'lodash'
import theme from '../../theme'
import commaNumber from 'comma-number'

const StatChart = ({data}) => {
    const sortedData = orderBy(data, 'cases')

    const list = {
        deaths: 'Mortes',
        cases: 'Casos'
    }

    const yAxisFormatter = (i) => i
                                    .toString()
                                    .replace(/(\d+)(\d0{2})$/, (a, b) => `${b}k`)
    
    const stateFromKey = (key) => {
        const listValues = Object.values(sortedData)
        return(find(listValues, ['uf', key]).state)
    }

    return(
        <LineChart width={600} height={300} data={sortedData}>
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
                labelFormatter={(value) => {
                    return(
                        stateFromKey(value)
                    )}}
                separator=": "
                formatter={(value, key) => {
                return [
                       commaNumber(value),
                       list[key],
                    ]
            } }
            />
            <Legend width={100}
                formatter={(value) => list[value]}
                wrapperStyle={{ 
                    top: 20, 
                    left: 100, 
                    backgroundColor: 
                    '#f5f5f5', 
                    border: '1px solid #d5d5d5', 
                    borderRadius: 3, 
                    lineHeight: '40px' }} />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey='cases' stroke={theme.colors['orange']} />
            <Line type="monotone" dataKey='deaths' stroke={theme.colors['dark']} />
        </LineChart>
    )
}

export default StatChart