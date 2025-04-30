
export const fetchApi = async <T>(url: string): Promise<T | null> => {
    try {
      const res = await fetch(url);
  
      if (!res.ok) {
        throw new Error('Error fetching data');
      }
  
      const data = await res.json() as T;
      return data;
    } catch (error) {
      return null;
    }
  };
  
  
  export default fetchApi