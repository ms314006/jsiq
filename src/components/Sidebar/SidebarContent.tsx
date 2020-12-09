import { SidebarLink } from 'components/Sidebar/SidebarLink';

export interface RouteItem {
  title: string;
  path?: string;
}

export type SidebarContentProps = {
  routes: RouteItem[];
  pathname?: string;
};

export function SidebarContent({ routes, pathname }: SidebarContentProps) {
  return (
    <>
      {routes.map((item) => {
        return (
          <SidebarLink as="li" key={item.path} href={item.path}>
            {item.title}
          </SidebarLink>
        );
      })}
    </>
  );
}
