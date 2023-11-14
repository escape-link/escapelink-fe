const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

export default async function fetchGameLink(roomName) {
  const res = await fetch(`https://escapelink-be-42ffc95e6cf7.herokuapp.com/api/v0/games?room_name=${roomName}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': getCookie('X-CSRF-Token')
    },
  })
  if (!res.ok) {
    throw new Error( `${res.status}: Unable to retrieve link`)
  }
  const data = await res.json()
  return data
}
