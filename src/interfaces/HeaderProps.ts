export interface HeaderProps {
    isLaptop: boolean;
    toggleBurgerMenu: () => void;
    isBurgerMenuOpen: boolean;
    activeNav: string;
    handleSmoothScroll: (sectionId: string) => void;
}