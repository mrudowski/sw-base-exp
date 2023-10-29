import {useTranslation} from 'react-i18next';
import {NavLink, Outlet, useNavigation} from 'react-router-dom';

import {ROUTES} from '../router/ROUTES.ts';
import {RouteId} from '../router/types.ts';

type NavItemProps = {
  route: RouteId;
};
const NavItem = ({route}: NavItemProps) => {
  const {t} = useTranslation();
  return (
    <li>
      <NavLink to={route} className={({isActive, isPending}) => (isActive ? 'active' : isPending ? 'pending' : '')}>
        {t(`domain.${route}`)}
      </NavLink>
    </li>
  );
};

const Layout = () => {
  const navigation = useNavigation();

  return (
    <>
      <header>
        <h1>SW BaseExp</h1>
        <nav>
          <ul>
            <NavItem route={ROUTES.characters} />
            <NavItem route={ROUTES.planets} />
            <NavItem route={ROUTES.vehicles} />
          </ul>
        </nav>
      </header>
      <main className={navigation.state === 'loading' ? 'loading' : ''}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
