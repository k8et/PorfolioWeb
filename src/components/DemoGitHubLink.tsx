import styled from 'styled-components';
import {FC} from "react";

const WorkButton = styled.a`
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

const WorkButtonIcon = styled.i`
  font-size: 1rem;
  transition: 0.4s;
`;
interface DemoGitHubLinkProps {
    deploymentLink: string
}
const DemoGitHubLink:FC<DemoGitHubLinkProps> = ({deploymentLink}) => {
    return (
        <WorkButton href={deploymentLink} target="_blank" rel="noreferrer">
            Demo/GitHub <WorkButtonIcon className="bx bx-right-arrow-alt work__button-icon"/>
        </WorkButton>
    );
};

export default DemoGitHubLink;
