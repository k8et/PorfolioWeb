import React from "react";

export interface StyledLinkProps {
    width?: string;
    height?: string;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}