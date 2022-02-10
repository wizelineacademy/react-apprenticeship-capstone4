import React from 'react';
import { results } from '../../mocks/en-us/product-categories.json';
import Category from './Category.component';
import { GCContainer } from './themes/gridcategories.style';

function GridCategories() {
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
    <GCContainer>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </GCContainer>
  );
}

export default GridCategories;
