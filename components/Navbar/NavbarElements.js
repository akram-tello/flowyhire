import styled from 'styled-components';

export const NavContainer = styled.nav`
  max-width: 85%;
`;

export const Logo = styled.img` {
  margin-inline-end: 2rem;
}`;

export const Navbar = styled.nav `{
  background-color: transparent;
  position: fixed;
  z-index: 9999;
  width: 100%;
  top: 0;
  left: 0;
}
`;

export const DemoBtn = styled.a `{
  -webkit-box-pack: center;
  width: 160px;
  height: 48px;
  line-height: 30px;
  text-align: center;
  color: gray;
  border: 2px solid #e95c5d;
  border-radius: 40px;
  margin-right: 0;
  font-size: 15px;
  font-weight: 600;
  
  &:hover{
    color: #fff;
    background-color: #e95c5d;  
    border-color: #e95c5d;
  }
}
`;

export const NavBtn = styled.a `{
  color: #e95c5d;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 30px;
  cursor: pointer;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;

  &.active {
    color: #e95c5d
  }
}`;