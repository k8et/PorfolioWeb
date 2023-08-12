import styled from 'styled-components';
import {FC} from "react";

const WorkButton = styled.div`
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
    deploymentLink: string;
    githubLink: string;
}

const DemoGitHubLink: FC<DemoGitHubLinkProps> = ({deploymentLink, githubLink}) => {
    return (
        <div>
            <WorkButton>
                <a href={deploymentLink} className='hover:text-white transition ease-in-out duration-300' target="_blank" rel="noreferrer">Demo</a>
                |
                <a href={githubLink} className='hover:text-white transition ease-in-out duration-300' target="_blank" rel="noreferrer">GitHub</a>
                <WorkButtonIcon className="bx bx-right-arrow-alt work__button-icon"/>
            </WorkButton>
        </div>
    );
};

export default DemoGitHubLink;
