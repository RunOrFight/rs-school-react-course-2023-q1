import { useState, useEffect } from 'react';

export type FetchStatus = 'idle' | 'fetching' | 'fetched' | 'error';

function useFetch<T>(apiUrl: string) {
  const [url, setUrl] = useState(apiUrl);
  const [status, setStatus] = useState<FetchStatus>('idle');
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setStatus('fetching');
      try {
        const response = await fetch(url);
        const json: T = await response.json();
        setData(json);
        setStatus('fetched');
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error('Unknown error'));
        }
        setStatus('error');
      }
    };
    fetchData();
  }, [url]);

  const refetch = (query?: string) => {
    setUrl(`${apiUrl}${query}`);
  };

  return [{ status, data, error }, refetch] as const;
}

export default useFetch;
