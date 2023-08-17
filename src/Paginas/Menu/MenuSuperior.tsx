import { LogoLogout, MenuSuperiorEstilo } from "./MenuSuperior.styled";

const MenuSuperior = () => {
  return (
    <MenuSuperiorEstilo>
      <LogoLogout onClick={() => alert("sair")} />
    </MenuSuperiorEstilo>
  );
};

export default MenuSuperior;
