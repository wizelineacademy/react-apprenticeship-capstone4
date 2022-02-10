import { page, total_pages } from '../../mocks/en-us/featured-products.json';
import { useProductsContext } from '../../providers/Products.provider';
import { useCounter } from '../../utils/hooks/useCounter';
import {
  ButtonLeft,
  ButtonRight,
  Index,
  PaginationContainer,
} from './themes/pagination.style';
function Pagination() {
  const { index, increment, decrement } = useCounter(page, total_pages);
  const { state } = useProductsContext();
  const products = Object.values(state).flat();
  return (
    products.length > 0 && (
      <PaginationContainer>
        <ButtonLeft onClick={decrement}>
          <i className="fas fa-arrow-left"></i>
        </ButtonLeft>
        <Index>{index}</Index>
        <ButtonRight onClick={increment}>
          <i className="fas fa-arrow-right"></i>
        </ButtonRight>
      </PaginationContainer>
    )
  );
}

export default Pagination;
