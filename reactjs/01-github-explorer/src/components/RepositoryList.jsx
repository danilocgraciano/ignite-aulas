import { useState, useEffect } from 'react';
import { RepositoryItem } from '../components/RepositoryItem';

import '../styles/repositories.scss';

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    // será executada uma única vez, assim que o componente for renderizado em tela
    useEffect(() => {
        fetch('https://api.github.com/users/danilocgraciano/repos')
            .then(response => response.json())
            .then(data => setRepositories(data));
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map(
                    repository => {
                        return <RepositoryItem key={repository.id} repository={repository} />;
                    }
                )}
            </ul>
        </section>
    );
}