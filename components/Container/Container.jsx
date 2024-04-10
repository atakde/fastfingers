const { ContainerWrapper } = require("./ScContainer");

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;