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
    else if (error.response.status === 400) {
      if (error.response.data.message.includes('is already a list member')) {
        const msg = error.response.data.message.split('. ')[0];
        throw new Error(msg);
      }

      else {

        throw new Error(error.response.data.message);
      }

    }

    else if (error.response.status === 401) {
      localStorage.clear()
      window.location.reload()
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
  const token = localStorage.getItem('user_token')
  try {

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`

    };

    const response = await axios.get(`/auth/profile`, {
      headers
    });

    return response.data;
  }
  catch (error) {
    handleCatch(error)
  }
};
export const UpdateProfileData = async (data) => {
  const token = localStorage.getItem('user_token')
  try {

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`

    };

    const response = await axios.put(`/auth/profile`, data, {
      headers
    });

    return response.data;
  }
  catch (error) {
    handleCatch(error)
  }
};

export const UpdateProfileImage = async (imageFile) => {
  const token = localStorage.getItem('user_token');
  try {
    const formData = new FormData();
    formData.append('image', imageFile);

    const headers = {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    };

    const response = await axios.post(`/auth/profile-image`, formData, {
      headers
    });

    return response.data;
  } catch (error) {
    handleCatch(error);
  }
};

export const GetCmcData = async (shariahStatus, rank) => {
  const token = localStorage.getItem('user_token')
  try {

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`

    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    let endpoit = '';
    if (shariahStatus === 'All' && rank === null) {
      endpoit = `/cmc/all`
    }
    else if (shariahStatus !== 'All' && rank === null) {
      endpoit = `/cmc/all?shariahStatus=${shariahStatus}`
    }
    else if (shariahStatus === 'All' && rank !== null) {
      endpoit = `/cmc/all?rank=${rank}`
    }
    else {
      endpoit = `/cmc/all?shariahStatus=${shariahStatus}&rank=${rank}`
    }
    const response = await axios.get(endpoit, {
      headers
    });

    return response.data;
  }
  catch (error) {
    handleCatch(error)
  }
};

export const GetFavData = async () => {
  const token = localStorage.getItem('user_token')
  try {

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`

    };

    const response = await axios.get(`/watch-list`, {
      headers
    });

    return response.data;
  }
  catch (error) {
    handleCatch(error)
  }
};

export const AddToFavorite = async (data) => {
  const token = localStorage.getItem('user_token')
  try {

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`

    };

    const response = await axios.post(`/watch-list/add-coin`, data, {
      headers
    });

    return response.data;
  }
  catch (error) {
    handleCatch(error)
  }
};
export const RemoveFromFavorite = async (data) => {
  const token = localStorage.getItem('user_token')
  try {

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`

    };

    const response = await axios.put(`/watch-list/remove-coin`, data, {
      headers
    });

    return response.data;
  }
  catch (error) {
    handleCatch(error)
  }
};

export const SetNewPassword = async (data) => {
  const token = localStorage.getItem('user_token')
  try {

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`

    };

    const response = await axios.post(`/auth/new-password`, data, {
      headers
    });

    return response.data;
  }
  catch (error) {
    handleCatch(error)
  }
};