export const calculateAge = (dateAdded: any) => {
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
