import axios from "./axios";

const handleCatch = (error) => {
    if (error.response) {
  
      if (error.response.status === 422) {
        if (error.response.data.errors) {
          const myObject = error.response.data.errors;
          const firstKey = Object.keys(myObject)[0];
          const firstValue = myObject[firstKey];
          throw new Error(firstValue[0]);
        }
        else {
          throw new Error(error.response.data.message);
        }
      } 
       else if(error.response.status === 400){
        if(error.response.data.message.includes('is already a list member')){
         const msg = error.response.data.message.split('. ')[0];
         throw new Error(msg);
        }
       
        else{
  
          throw new Error(error.response.data.message);
        }
        
      }
    
      else if(error.response.status === 401){
        throw new Error(error.response.data.message);
      }
      else {
  
        throw new Error('An error occurred on the server.');
      }
    } else if (error.request) {
  
      console.log(error.request);
    } else {
  
      console.log('Error', error.message);
    }
    throw error;
  }
export const GetProfileData = async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODZiMzk2ZWMzMGEzMmU4YTM2MjU5ZiIsImlhdCI6MTcwNTk1NDg5NiwiZXhwIjoxNzA2MTI3Njk2fQ.fhRtH2M7nPPONPjEF-_g6LSLZClXmvSl6c2gstyiBvo'
    try {
      
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        
      };
  
      const response = await axios.get(`/auth/profile`,{
        headers
      });
  
      return response.data;
    }
    catch (error) {
      handleCatch(error)
    }
  };
export const UpdateProfileData = async (data) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODZiMzk2ZWMzMGEzMmU4YTM2MjU5ZiIsImlhdCI6MTcwNTk1NDg5NiwiZXhwIjoxNzA2MTI3Njk2fQ.fhRtH2M7nPPONPjEF-_g6LSLZClXmvSl6c2gstyiBvo'
    try {
      
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        
      };
  
      const response = await axios.put(`/auth/profile`,data,{
        headers
      });
  
      return response.data;
    }
    catch (error) {
      handleCatch(error)
    }
  }; 