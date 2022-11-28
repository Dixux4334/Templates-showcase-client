import { NavLinksStyleSheets, NavLinksTemplates } from './NavLinks'

const NavLinks = {
  '/': NavLinksTemplates,
  '/stylesheets': NavLinksStyleSheets,
}

export const useNavLinks = route => NavLinks[route] || NavLinks['/']
