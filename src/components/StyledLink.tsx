import React, {FC} from 'react';
import {Button} from "../styles/StyledLink";
import {StyledLinkProps} from "../interfaces/StyledLinkProps";

const StyledLink: FC<StyledLinkProps> = ({width, height, children, onClick}) => {
    return (
        <Button style={{width: width, height: height}} onClick={onClick}>
            {children}
        </Button>
    );
};

export default StyledLink;