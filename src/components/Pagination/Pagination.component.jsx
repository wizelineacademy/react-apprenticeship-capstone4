import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { decrementPage, incrementPage } from '../../actions/page';
import { Button, Index, PaginationContainer } from './themes/pagination.style';
function Pagination() {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.page);
  const { productsGrid } = useSelector((state) => state.products);

  const handleIncrement = () => {
    dispatch(incrementPage(page));
  };

  const handleDecrement = () => {
    dispatch(decrementPage(page));
  };
  return (
    productsGrid.length > 0 && (
      <PaginationContainer>
        <Button
          data-testid="decrement"
          onClick={handleDecrement}
          disabled={page === 1}
        >
          <i className="fas fa-arrow-left"></i>
        </Button>
        <Index>{page}</Index>
        <Button data-testid="increment" onClick={handleIncrement}>
          <i className="fas fa-arrow-right"></i>
        </Button>
      </PaginationContainer>
    )
  );
}

export default Pagination;
