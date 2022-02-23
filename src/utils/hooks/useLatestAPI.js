import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';

const INITIAL_API_METADATA = { ref: null, isLoading: true };

export function useLatestAPI() {
  const [apiMetadata, setApiMetadata] = useState(() => INITIAL_API_METADATA);

  useEffect(() => {
    const controller = new AbortController();

    async function getAPIMetadata() {
      try {
        setApiMetadata(INITIAL_API_METADATA);

        const response = await fetch(API_BASE_URL, {
          signal: controller.signal,
        });
        const { refs: [{ ref } = {}] = [] } = await response.json();

        setApiMetadata({ ref, isLoading: false });
      } catch (err) {
        console.log(err);
      }
    }

    getAPIMetadata();

    return () => {
      controller.abort();
    };
  }, []);

  return apiMetadata;
}
