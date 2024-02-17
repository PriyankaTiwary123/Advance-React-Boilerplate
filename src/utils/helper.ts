export const debounce = <T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ) => {
    let timeoutId: ReturnType<typeof setTimeout>;
  
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  export const fuzzySearch = (searchTerm: string, input: string) => {
    let i = 0;
    let j = 0;

    while (i < searchTerm.length && j < input.length) {
      if (searchTerm[i] === input[j]) {
        j++;
      }
      i++;
    }

    return j === input.length;
  };
  