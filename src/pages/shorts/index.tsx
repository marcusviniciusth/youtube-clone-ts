import { Container, ShortsContainer } from "./styles";
import { useAppContext } from "../../contexts/openMenu";
import Header from "../../components/header";
import Menu from "../../components/menu";

function Shorts() {

  const { openMenu } = useAppContext();

  return (
    <ShortsContainer>
      <Header />
      <Menu />
      <Container openMenu={openMenu}>
        
      </Container>
    </ShortsContainer>
  )
}

export default Shorts;