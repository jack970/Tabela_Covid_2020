import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import api from './services/api'
import BrazilCard from './components/BrazilCard'
import StatCell from './components/StatCell';
import commaNumber from 'comma-number'
import { Loading } from './components/StatCell'

function App() {

  const [loading, setLoading] = useState(false)

  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('api/report/v1').then(response => {
      setProjects(response.data.data)
      setLoading(!loading)
    })
  }, [])

  const date = (date) => {
    date = new Date(date)
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`

  }

  function getFlag(uf) {
    return `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${uf}.png`;
  }

  return (
    <div className="App">
      <Header title="COVID 2020" />
      <BrazilCard title="Tabela de infecção">
        <tbody>
          {loading ? projects.map(project => {
            return(
              <tr key={project.uid}>
                <td>
                  <img src={getFlag(project.uf)} alt="uf flag" width="20px" />
                  {project.uf} </td>
                <td>{commaNumber(project.cases)}</td>
                <td>{ commaNumber(project.deaths)}</td>
                <td> {date(project.datetime)} </td>
              </tr>
            )
          }) : <Loading /> }
        </tbody>
      </BrazilCard>
      {loading ? <StatCell data={projects} />: <Loading /> }
    </div>
  );
}

export default App;
