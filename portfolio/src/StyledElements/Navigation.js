import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
`

export const LogoContainer = styled.div`
    width: 30%;
`

export const HeaderLogo = styled.img`
    width: 55px;
`

export const Navigation = styled.nav`
    margin: 20px 0 30px 14px;
    text-align: right;
    width: 70%;
`

export const NavigationItem = styled.li`
    margin-right: 20px;
    padding: 3px 0;
    list-style: none;
    display: inline;
    border-right: 1px solid #666;
    &:last-child {
        border-right: 0;
    }

    a {
        text-decoration: none;
        color: #666;
        font-size: 18px;
        font-style: italic;
        padding-right: 20px;
        &:hover,
        &:focus {
            color: red;
            text-decoration: underline;
        }
    }
`;