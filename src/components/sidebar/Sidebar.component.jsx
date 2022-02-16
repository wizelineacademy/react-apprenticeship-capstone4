import React from 'react';
import Category from './Category.component';
import { CategoriesContainer, Clear, Title } from './themes/sidebar.style';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearFilterCategories } from '../../actions/categories';

function Sidebar() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { filtered } = useSelector((state) => state.products);
  const isEmpty =
    Object.keys(filtered).length === 0 && filtered.constructor === Object;
  const handleFilter = () => {
    dispatch(clearFilterCategories());
  };
  return (
    <CategoriesContainer>
      <Title>Categories</Title>
      <hr />
      <div>
        {categories.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </div>
      {!isEmpty && <Clear onClick={handleFilter}>Clear</Clear>}
    </CategoriesContainer>
  );
}

export default Sidebar;
