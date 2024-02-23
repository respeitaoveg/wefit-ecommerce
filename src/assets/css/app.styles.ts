import styled from "styled-components";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 100vh;
  }
`;

export const ContainerSpinner = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  --size: 40px;
  height: var(--size);
  width: var(--size);
  background-image: conic-gradient(transparent 20%, #fff);
  -webkit-mask: radial-gradient(
  circle calc(var(--size) / 2.5),
  transparent 100%, #000);
  mask: radial-gradient(
  circle calc(var(--size) / 2.5),
  transparent 100%, #000);
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
  100% {
  transform: rotate(360deg);
  }
}
`;