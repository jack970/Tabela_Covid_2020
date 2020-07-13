import React from 'react'
import './style.css'

const BrazilCard = ({title, children}) => {
    return (
        <div className="Card" style={{textAlign: 'center'}}>
            <h1>{title}</h1>
            <table>
                <thead>
                    <tr>
                        <td>
                            <span>
                                {` `}
                                <strong>Estado</strong>
                            </span>
                        </td>
                        <td>
                            <span>
                                {` `}
                                <strong>Confirmados</strong>
                            </span>
                        </td>
                        <td>
                            <span>
                                {` `}
                                <strong>Mortes</strong>
                            </span>
                        </td>
                        <td>
                            <span>
                                {` `}
                                <strong>Data de Atualização</strong>
                            </span>
                        </td>
                    </tr>
                </thead>
            </table>
            <div className="card-content">
                <table>
                        {children}
                </table>
            </div>
        </div>
    )
}

export default BrazilCard