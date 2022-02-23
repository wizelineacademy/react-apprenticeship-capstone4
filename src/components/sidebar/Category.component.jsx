import React, { useState } from 'react';
import { addCategory, removeProductsByCategory } from '../../actions/products';
import { CategoryLi, CategoryLiActive } from './themes/category.style';
import { useDispatch } from 'react-redux';

function Category({ id, category }) {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const handleButtonAdd = () => {
    //setActive((prev) => !prev);
    setTimeout(() => {
      dispatch(addCategory(id, category));
      setActive((prev) => !prev);
    }, 2000);
  };
  const handleButtonRemove = () => {
    //setActive((prev) => !prev);
    setActive((prev) => !prev);
    dispatch(removeProductsByCategory(category));
  };
  return active ? (
    <CategoryLiActive
      data-testid="category-sidebar"
      onClick={handleButtonRemove}
    >
      {category}
    </CategoryLiActive>
  ) : (
    <CategoryLi data-testid="category-sidebar" onClick={handleButtonAdd}>
      {category}
    </CategoryLi>
  );
}

export default Category;
