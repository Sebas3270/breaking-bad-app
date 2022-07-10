import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import useCurrentPath from '../hooks/useCurrentPath';

const Layout = () => {

  const mainPath = useCurrentPath();

  return (
    <>

      <NavBar />
      <Container className={mainPath  ? 'main' : ''}>
        <Outlet />
      </Container>

    </>
  )
}

export default Layout

const Container = styled.main`
    padding: 0 20px;
    padding-top: 75px;

    &.main{
      padding: 0;
    }
`
