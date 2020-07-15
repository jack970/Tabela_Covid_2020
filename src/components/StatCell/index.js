import React from 'react'
import StatChart from '../StatChart'

const StatCell = ({data}) => {
    return(
        <div>
            <section>
                <h1>casos</h1>
                <StatChart data={data} color='dark' dataKey='cases'></StatChart>
            </section>
        </div>
    )
}

export default StatCell