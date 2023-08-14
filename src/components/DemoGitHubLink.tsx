import {FC} from "react";
import {WorkButton, WorkButtonIcon} from "../styles/DemoGitHubLinkStyle";
import {DemoGitHubLinkProps} from "../interfaces/DemoGitHubLinkProps";

const DemoGitHubLink: FC<DemoGitHubLinkProps> = ({deploymentLink, githubLink}) => {
    return (
        <div>
            <WorkButton>
                <a href={deploymentLink} className='hover:text-white transition ease-in-out duration-300'
                   target="_blank" rel="noreferrer">Demo</a>
                |
                <a href={githubLink} className='hover:text-white transition ease-in-out duration-300' target="_blank"
                   rel="noreferrer">GitHub</a>
                <WorkButtonIcon className="bx bx-right-arrow-alt work__button-icon"/>
            </WorkButton>
        </div>
    );
};

export default DemoGitHubLink;
