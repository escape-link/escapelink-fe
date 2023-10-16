const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

export default async function fetchGameLink() {
  const res = await fetch('http://localhost:3000/api/v0/games', {
    method: 'POST', 
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': getCookie('X-CSRF-Token')
    }
  })
  if (!res.ok) {
    throw new Error( `${res.status}: Unable to retrieve link`)
  }
  const data = await res.json()
  return data
}