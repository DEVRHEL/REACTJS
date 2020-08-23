export const fetchData = async (number) => {
    try {
      console.log('NUMBER', number)
      const response = await fetch("https://randomuser.me/api");
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };