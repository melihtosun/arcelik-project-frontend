export const GET = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/user');
    console.log('Data from API:', response); 
    return response; 
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

