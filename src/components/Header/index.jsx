import styled from "styled-components";

export default Header = () => {
  return (
    <SHeader>
      <a href="/">
        <Logo className="title">HowI'mDoing</Logo>
      </a>
      <NavBar>
        <a href="#">Config</a>
      </NavBar>
    </SHeader>
  );
};

const SHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--blue);
  color: var(--white);
  height: 80px;
`;

const Logo = styled.h1`
  font-size: 2rem;
  text-align: center;
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
