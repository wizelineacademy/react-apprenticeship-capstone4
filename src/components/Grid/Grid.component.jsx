import React from 'react';

function Grid({ gridItems }) {
  // eslint-disable-next-line react/no-unstable-nested-components
  function GridList() {
    return (
      <ul>
        {gridItems.map((item) => (
          <img
            key={item.id}
            src={item.data.main_image.url}
            alt={item.data.main_image.alt}
          />
        ))}
      </ul>
    );
  }
  return (
    <div>
      <h2>Grid</h2>
      <GridList />
    </div>
  );
}

export default Grid;
