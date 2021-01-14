import styled from 'styled-components';
import { shade }from 'polished';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display:flex;
        align-items:center;
        text-decoration: none;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover {
            color: #3d3d4d;
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            border-radius: 50%50%;
        }

        div {
            margin-left: 24px;

            b {
                font-size: 36px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #737380;
                margin-top: 4px;
            }
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {
            & + li {
                margin-left: 80px;
            }

            b {
                display: block;
                font-size: 36px;
                color: #3d3d4d;
            }

            span {
                display: block;
                color: #6c6c80;
                margin-top: 4px;
            }
        }
    }
`;

export const Issues = styled.div`
    margin-top: 80px;

    a {
        background: white;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        text-decoration: none;

        display: flex;
        align-items: center;
        
        transition: background-color 0.2s;
        transition: transform 0.2s;
        &:hover {
            background-color: ${ shade(0.01, '#FFF') };
            transform: translateX(10px);
        }

        /* Testa se o elemento anterior era um a,
        se for aplica o css (usado para aplicar a
        partir do segundo elemento) */
        & + a {
            margin-top: 16px;
        }

        div {
            margin: 0 16px;
            flex: 1;

            b {
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #CBCBD6;
        }
    }
`;