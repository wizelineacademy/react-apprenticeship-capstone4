import { useContext, useReducer } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import { results } from '../mocks/en-us/featured-products.json';
import { productReducer } from '../reducers/productsReducer';
import { uiReducer } from '../reducers/uiReducer';

function useProductsContext() {
  const context = useContext(ProductsContext);
  if (!context) {
    return new Error(
      'You can not use useRouterContext without an RouterProvider'
    );
  }
  return context;
}
function ProductsProvider({ children }) {
  const products = results.map((result) => {
    return {
      id: result.id,
      type: result.type,
      name: result.data.name,
      idCategory: result.data.category.id,
      image: result.data.mainimage.url,
      height: result.data.mainimage.dimensions.height,
      width: result.data.mainimage.dimensions.width,
      alt: result.data.alt,
      description: result.data.short_description,
      stock: result.data.stock,
      price: result.data.price,
      href: result.href,
    };
  });

  const uiInitialState = {
    loading: false,
    msgError: null,
  };

  const [state, dispatch] = useReducer(productReducer, {});
  const [uiState, uiDispatch] = useReducer(uiReducer, uiInitialState);
  return (
    <ProductsContext.Provider
      value={{ products, state, dispatch, uiState, uiDispatch }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export { ProductsProvider, useProductsContext };
