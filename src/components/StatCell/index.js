import React from 'react'
import StatChart from '../StatChart'

const StatCell = ({data}) => {
    return(
        <div>
            <section style={{ 
                margin: 'auto',
                padding: '0',
                width: 'min-content',
                textAlign: 'center'}}>
                <h1>Gráfico do COVID-19 nos Estados do Brasil</h1>
                <StatChart data={data} />
            </section>
        </div>
    )
}

export default StatCell