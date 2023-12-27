// NavLink.tsx
import React from 'react';
import { Link } from 'react-scroll';

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => (
    <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-70} // Adjust the offset based on your layout
        duration={500}
    >
    {children}
    </Link>
);

export default NavLink;
