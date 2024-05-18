import { HeaderContent } from "../../components/HeaderContent";
import { BodyContent, Container, FooterContent, TextPrice, TextSmall } from "./style";
import { Link, useParams } from "react-router-dom";
import dataItems from "../../data/mockData";
import { INumbersProps } from "../../interfaces/types";
import Loading from "../../components/Loading";
import { covertePrice } from "../../utils/converterPrice";
import { Button } from "../../components/Button";

const Detail: React.FC = () =>{
  const { id } = useParams<{ id: any }>();
  const item: INumbersProps | undefined = dataItems.find((item) => item.id === parseInt(id));

  return (
      <Container>
        {!item ? <Loading /> : (
          <>
            <HeaderContent title={item.value} />

            <BodyContent>
              <TextSmall>Preço mensal</TextSmall>
              <TextPrice>{covertePrice(item.monthyPrice, item.currency)}</TextPrice>
              <TextSmall>Preço de configuração</TextSmall>
              <TextPrice>{covertePrice(item.setupPrice, item.currency)}</TextPrice>
            </BodyContent>
            
            <FooterContent>
              <Link to={'/'}>
                <Button secondary >Voltar</Button>
              </Link>
            </FooterContent>
          </>
        )}
      </Container>
  )
};

export default Detail;