import React from 'react'
import StatChart from '../StatChart'
import Spinner from 'respin'

const style= {
    margin: 'auto',
    padding: '0',
    width: 'min-content',
    textAlign: 'center'
}

export const Loading = () => (
    <section style={style}>
        <Spinner size={72}/> Loading...
    </section>
)

const StatCell = ({data}) => {
    return(
        <div>
            <section style={style}>
                <h1>Gráfico do COVID-19 nos Estados do Brasil</h1>
                <StatChart data={data} />
            </section>
        </div>
    )
}

export default StatCell