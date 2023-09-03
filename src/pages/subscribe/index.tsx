import { Container, SubscribeContainer } from "./styles";
import { useAppContext } from "../../contexts/openMenu";
import Header from "../../components/header";
import Menu from "../../components/menu";


function Subscribe() {

  
  const { openMenu } = useAppContext();



  return (
    <SubscribeContainer>
      <Header />
      <Menu />
        <Container openMenu={openMenu}>
          
        </Container>
    </SubscribeContainer>
  )
}

export default Subscribe;