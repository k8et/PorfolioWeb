import styled from "styled-components";

export const WorkButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  column-gap: 0.25rem;
  color: #a4a2a2;
  text-decoration: none;

  &:hover .work__button-icon {
    transform: translateX(0.25rem);
  }
`;

export const WorkButtonIcon = styled.i`
  font-size: 1rem;
  transition: 0.4s;
`;