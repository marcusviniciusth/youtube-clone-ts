import { Container, LibraryContainer } from "./styles";
import { useAppContext } from "../../contexts/openMenu";
import Header from "../../components/header";
import Menu from "../../components/menu";

function Library() {

  const { openMenu } = useAppContext();

  return (
    <LibraryContainer>
      <Header />
      <Menu />
      <Container openMenu={openMenu}>
        
      </Container>
    </LibraryContainer>
  )
}

export default Library;