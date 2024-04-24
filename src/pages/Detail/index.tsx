import { HeaderContent } from "../../components/HeaderContent";
import { Container } from "./style";
import { useParams } from "react-router-dom";
import dataItems from "../../data/mockData";
import { INumbersProps } from "../../interfaces/types";

const Detail: React.FC = () =>{
  const { id } = useParams<{ id: any }>();
  const item: INumbersProps | undefined = dataItems.find((item) => item.id === parseInt(id));


  if (!item) {
    return <div>Item não encontrado</div>;
  }

  return (
      <Container>
        <HeaderContent title={item.value} />
      </Container>
  )
};

export default Detail;