import { ListProps, List, ListItem } from '@chakra-ui/react';
import { mainNavLinks, MainNavLink } from './Sidebar';

export const LanguageNavBar = (props: ListProps) => {
  return (
    <List spacing="4" styleType="none" pl={2} {...props}>
      {mainNavLinks.map((item) => (
        <ListItem key={item.label}>
          <MainNavLink icon={item.icon} href={item.href}>
            {item.label}
          </MainNavLink>
        </ListItem>
      ))}
    </List>
  );
};
