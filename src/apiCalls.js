const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};


export default async function fetchGameLink() {
  const room_name = "Where's Bob?"; // Define the room_name variable as '1'
  const res = await fetch('https://escapelink-be-42ffc95e6cf7.herokuapp.com/api/v0/games', {
  // const res = await fetch('http://localhost:3000/api/v0/games', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': getCookie('X-CSRF-Token')
    },
    body: JSON.stringify({ room_name }), // Include the room_name in the request body
  })
  if (!res.ok) {
    throw new Error( `${res.status}: Unable to retrieve link`)
  }
  const data = await res.json()
  return data
}
