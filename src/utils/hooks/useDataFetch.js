import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function useDataFetch(url) {
  const isMounted = useRef(true);
  const [state, setState] = useState({ data: {}, loading: true, error: null });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(`${url}`);
        console.log(data);
        setState({
          data: data.results.map((result) => {
            return {
              id: result.id,
              title: result.data.title,
              description: result.data.description[0].text,
              imageAlt: result.data.main_image.alt,
              imageHeight: result.data.main_image.dimensions.height,
              imageWidth: result.data.main_image.dimensions.width,
              imageUrl: result.data.main_image.url,
              href: result.href,
            };
          }),
          loading: false,
          error: null,
        });
      } catch (e) {
        setState({
          data: null,
          loading: false,
          error: 'There was an error, please try again',
        });
      }
    };
    fetchData();
  }, [url]);

  return state;
}

export default useDataFetch;
