import styled, { css } from 'styled-components';
import { shade } from 'polished';
//Template literals

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3A3A3A;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
`;

export const Form  = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;
    height: 70px;
    display: flex;

    input {
        flex: 1;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3A3A3A;
        border: 2px solid white;
        border-right: 0;

        ${(props) => props.hasError &&
        css`
            border-color: #C53030;
        `}

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        background: #04D361;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: white;
        font-weight: bold;
        transition: background-color 0.2s;
        &:hover {
            background: ${ shade(0.2, '#04D361') };
        }
    }
`;

export const Error = styled.span`
    display: block;
    font-weight: bold;
    padding-left: 5px;
    color: #C53030;
    margin-top: 8px;
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

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

        img {
            width: 64px;
            border-radius: 50%;
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