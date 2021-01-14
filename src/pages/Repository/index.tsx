import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImage from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
}

interface Issue {
    id: number;
    title: string;
    html_url: string;
    user: {
        login: string;
    }
}

const Repository: React.FC = () => {
    const [repository, setRepository] = useState<Repository | null>(null);

    const [issues, setIssues] = useState<Issue[]>([]);

    const { params } = useRouteMatch<RepositoryParams>();

    useEffect(() => {
        
        api.get(`repos/${params.repository}`).then((response) => {
            setRepository(response.data);
        });

        api.get(`repos/${params.repository}/issues`).then((response) => {
            setIssues(response.data);
        });

        // async function loadData(): Promise<void> {
        //     const [repository, issues] = await Promise.all([
        //         api.get(`repos/${params.repository}`),
        //         api.get(`repos/${params.repository}/issues`)
        //     ]);

        //     console.log(repository);
        //     console.log(issues);
        // }

        // loadData();

    }, [params.repository]);

    return (
        <>
            <Header>
                <img src={logoImage} alt="Github Exporer"/>
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            { repository && (
                <RepositoryInfo>
                    <header>
                        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                        <div>
                            <b>{repository.full_name}</b>
                            <p>{repository.description}</p>
                        </div>
                    </header>
                    <ul>
                        <li>
                            <b>{repository.stargazers_count}</b>
                            <span>Stars</span>
                        </li>
                        <li>
                            <b>{repository.forks_count}</b>
                            <span>Forks</span>
                        </li>
                        <li>
                            <b>{repository.open_issues_count}</b>
                            <span>Issues abertas</span>
                        </li>
                    </ul>
                </RepositoryInfo>
            )}

            <Issues>
                {issues.map(issue => (
                    <a key={issue.id}  href={issue.html_url}>
                        <div>
                            <b>{issue.title}</b>
                            <p>{issue.user.login}</p>
                        </div>
                        <FiChevronRight size={20}/>
                    </a>
                ))}
            </Issues>
        </>
    );
};

export default Repository;