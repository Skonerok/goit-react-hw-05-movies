import { NavLink, Outlet } from "react-router-dom";
import styled from 'styled-components';

export const Header = () => {
const StyledLink = styled(NavLink)`
font-size: 20px; 
font-weight: 700;
color: black;
margin-left: 50px;

    &:last-child {
        margin-left: 20px;
    }

  &.active {
    color: orange;
  }
`;

    return (
        <>
            <StyledLink to='/'>
                Home
            </StyledLink>
             <StyledLink to='/movies'>
                Movies
            </StyledLink>
            <Outlet />
        </>
    )
}