import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.h2`
  text-align: center;
`;
export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 8px;
  justify-content: space-evenly;
`;
export const StyledListItem = styled.li`
  display: flex;
  &:hover {
    scale: 1.1;
  }
`;
export const StyledMovieName = styled(Link)`
  font-weight: 500;
  color: darkcyan;
  text-decoration: none;
  align-items: center;
  text-align: center;
`;
