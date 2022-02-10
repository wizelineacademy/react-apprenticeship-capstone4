import React from 'react';
import { results } from '../../mocks/en-us/product-categories.json';
import Category from './Category.component';
import { CategoriesContainer, Title } from './themes/sidebar.style';

function Sidebar() {
  const categories = results.map((result) => {
    return {
      id: result.id,
      type: result.type,
      category: result.data.name,
      image: result.data.main_image.url,
      height: result.data.main_image.dimensions.height,
      width: result.data.main_image.dimensions.width,
      alt: result.data.alt,
      href: result.href,
    };
  });
  return (
    <CategoriesContainer>
      <Title>Categories</Title>
      <hr />
      <div>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </CategoriesContainer>
  );
}

export default Sidebar;
