'use client';

import { AppPages } from '../../../lib';

export interface MainNavProps {
  title: string;
  items?: NavItem[];
}

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}

export const MarketingNavItems: NavItem[] = [
  { title: 'Blogs', href: AppPages.blogs },
  { title: 'Courses', href: AppPages.faq },
  { title: 'Projects', href: AppPages.faq },
  { title: 'Contacts', href: AppPages.faq },
];
