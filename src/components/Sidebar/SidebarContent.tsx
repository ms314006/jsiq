import { SidebarLink } from 'components/Sidebar/SidebarLink';
import { PageMeta } from 'utils/getQuestions';

export type SidebarContentProps = {
  routes: PageMeta[];
};

export function SidebarContent({ routes }: SidebarContentProps) {
  return (
    <ul>
      {routes.map((item) => {
        return (
          <SidebarLink as="li" key={item.id} href={item.href}>
            {item.id}. {item.title}
          </SidebarLink>
        );
      })}
    </ul>
  );
}
