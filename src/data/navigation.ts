export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Treatments', href: '/treatments/' },
  { label: 'About', href: '/about/' },
  { label: 'Our Team', href: '/team/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Gift Vouchers', href: '/gift-vouchers/' },
  { label: 'Contact', href: '/contact/' },
];
