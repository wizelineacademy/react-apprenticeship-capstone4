import { useDispatch } from 'react-redux';
import {
  calculateTotalCart,
  calculateTotalProducts,
  deleteProduct,
} from '../../actions/cart';
import { Delete } from '../CartTable/themes/table.style';

function DeleteProduct({ id }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteProduct(id));
    dispatch(calculateTotalProducts());
    dispatch(calculateTotalCart());
  };
  return <Delete onClick={handleDelete}>X</Delete>;
}

export default DeleteProduct;
