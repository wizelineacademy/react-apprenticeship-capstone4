import React, { useState } from 'react';
import { addCategory, removeCategory } from '../../actions/products';
import { finishLoading, startLoading } from '../../actions/ui';
import { useProductsContext } from '../../providers/Products.provider';
import { CategoryLi, CategoryLiActive } from './themes/category.style';

function Category({ category }) {
  const [active, setActive] = useState(false);
  const { dispatch, products, uiDispatch } = useProductsContext();
  const handleButtonAdd = () => {
    setActive((prev) => !prev);
    uiDispatch(startLoading());
    setTimeout(() => {
      uiDispatch(finishLoading());
      dispatch(addCategory(category, products));
    }, 2000);
  };

  const handleButtonRemove = () => {
    setActive((prev) => !prev);
    uiDispatch(finishLoading());
    dispatch(removeCategory(category.category));
  };
  return active ? (
    <CategoryLiActive onClick={handleButtonRemove}>
      {category.category}
    </CategoryLiActive>
  ) : (
    <CategoryLi onClick={handleButtonAdd}>{category.category}</CategoryLi>
  );
}

export default Category;
