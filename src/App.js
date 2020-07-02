import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import api from './services/api'
import BrazilCard from './components/BrazilCard'

function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('api/report/v1').then(response => {
      setProjects(response.data.data)
    })
  }, [])

  function getFlag(uf) {
    return `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${uf}.png`;
  }

  return (
    <div className="App">
      <Header title="COVID 2020" />
      <BrazilCard title="Tabela de infecção">
        <tbody>
          {projects.map(project => {
            return(
              <tr key={project.uid}>
                <td>
                  <img src={getFlag(project.uf)} alt="uf flag" width="20px" />
                  {project.uf} </td>
                <td>{project.cases} </td>
                <td> {project.deaths} </td>
              </tr>
            )
          })}
        </tbody>
      </BrazilCard>
    </div>
  );
}

export default App;
