export type Language = 'pl' | 'en';

export interface NavItem {
  label: {
    pl: string;
    en: string;
  };
  href: string;
}