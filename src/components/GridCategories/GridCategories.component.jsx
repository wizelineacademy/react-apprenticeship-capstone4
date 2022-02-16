import React from 'react';
import Category from './Category.component';
import { GCContainer } from './themes/gridcategories.style';
import { useSelector } from 'react-redux';

function GridCategories() {
  const { categories } = useSelector((state) => state.categories);
  return (
    <GCContainer>
      {categories.map((category) => (
        <Category key={category.id} {...category} />
      ))}
    </GCContainer>
  );
}

export default GridCategories;
