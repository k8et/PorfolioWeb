export interface HomeProps {
    isLaptop: boolean;
    activeNav: string;
    handleSmoothScroll: (sectionId: string) => void;
}