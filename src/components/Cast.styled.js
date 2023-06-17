import styled from '@emotion/styled';

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
  justify-content: space-evenly;
`;
export const StyledListItem = styled.li`
  display: flex;
`;
export const StyledMovieName = styled.span`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
`;
