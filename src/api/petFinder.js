const API_BASE_URL='https://api.petfinder.com/v2';
let token = null;

export const fetchAccessToken = async() => {
    const res = await fetch(`${API_BASE_URL}/oauth2/token`,{
        method:'POST',
        headers: {'content-Type':'application/x-www-form-urlencoded'},
        body: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: import.meta.env.VITE_PETFINDER_CLIENT_ID,
            client_secret: import.meta.env.VITE_PETFINDER_CLIENT_SECRET,
        })
    })
   

    const data = await res.json();
    token = data.access_token;
    return token;
}
export const getPets = async ({ type = "", page = "1" } = {}) => {
  if (!token) {
    await fetchAccessToken();
  }

  try {
    const res = await fetch(`${API_BASE_URL}/animals?type=${type}&page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch pets: ${res.status} ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('getPets error:', error);
    return null; // To prevent "undefined" issues
  }
};

export const getOrgs = async () => {
    if(!token){
        await fetchAccessToken()
    }
    try {
        const res = await fetch(`${API_BASE_URL}/organizations`,{
            headers:{Authorization: `Bearer ${token}`}
        })
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}
export const getPet = async({id}) => {
    if(!token){
        await fetchAccessToken();
    }
    try {
        const res = await fetch(`${API_BASE_URL}/animals/${id}`,{
            headers:{Authorization: `Bearer ${token}`}
        })
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}