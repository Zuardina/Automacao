import { Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const ContainerMenu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #14253d;
  width: 240px;
`;

export const NomeEmpresa = styled(Text)`
  color: white;
`;
