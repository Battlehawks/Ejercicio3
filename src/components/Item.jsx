import { ProductContainer, Circle, Image, Info, Icon } from './styledComponents';
import { Link } from 'react-router-dom';
 
const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (
        <ProductContainer>
            <Circle />
            <Image src={pictureUrl} />
            <Info>
                <Icon>
                    <span className="bolded">{price}</span>
                </Icon>
                <Icon>
                    <span className="bolded">{stock} unid.</span>
                </Icon>
                <Icon>
                    <Link to={`/detail/${id}`}>detalle</Link>
                </Icon>
            </Info>
        </ProductContainer>
    );
}

export default Item;