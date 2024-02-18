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


  export const calculateAge = (dateAdded: string) => {
    const today = new Date();
    const addedDate = new Date(dateAdded);
    const diff = today.getTime() - addedDate.getTime();
    const ageInMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.4375));
    const ageInYears = Math.floor(ageInMonths / 12);
    const remainingMonths = ageInMonths % 12;
    if (!isNaN(ageInYears) && !isNaN(remainingMonths)) {
      if (ageInYears === 0) {
        return `${ageInMonths} months`;
      } else {
        return `${ageInYears} years ${remainingMonths} months`;
      }
    } else {
      return "Invalid date";
    }
  };
  