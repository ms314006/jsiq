import { SidebarLink } from 'components/Sidebar/SidebarLink';
import { PageMeta } from 'utils/getQuestions';

export type SidebarContentProps = {
  routes: PageMeta[];
  pathname?: string;
};

export function SidebarContent({ routes, pathname }: SidebarContentProps) {
  return (
    <>
      {routes.map((item) => {
        return (
          <SidebarLink as="li" key={item.id} href={item.href}>
            {item.title}
          </SidebarLink>
        );
      })}
    </>
  );
}
