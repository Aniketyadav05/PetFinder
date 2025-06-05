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
export const getPets = async () => {
    if (!token){
        await fetchAccessToken();
    } 
    try {
        const res = await fetch(`${API_BASE_URL}/animals?type=dog&page=1`,{
            headers:{Authorization: `Bearer ${token}`}
        })
        // console.log(`ye h function ka ${res.json()}`)
        return await res.json();
    } catch (error) {
        console.log(error)
    }

}
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