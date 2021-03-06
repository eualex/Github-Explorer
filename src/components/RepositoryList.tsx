import { useState, useEffect } from 'react'
import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss'

declare interface Repository {
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(res => res.json())
      .then(data => setRepositories(data))
  }, [])

  console.log(repositories)

  return (
    <section className="repositories">
      <h1 className="repositories__title" >Lista de Repositórios</h1>

      <ul className="repositories__list">
        {repositories.map(repository => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  )
}