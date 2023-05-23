export const fetchSuggestedSongs = async () => {
  const response = await fetch(
    'https://azmari-e08fd-default-rtdb.firebaseio.com/suggestedMusics.json'
  );
  if (!response.ok) {
    throw new Error('error 404 , known error on post');
  }
  const suggestedMusics = await response.json();
  return suggestedMusics;
};

export const fetchUserSongs = async () => {
  const response = await fetch('https://azmari-e08fd-default-rtdb.firebaseio.com/userSongs.json');
  if (!response.ok) {
    throw new Error('error 404 , known error on post');
  }
  const userSongs = await response.json();
  return userSongs;
};

export const postSuggestedSongs = async (dummysongs) => {
  const response = await fetch(
    'https://azmari-e08fd-default-rtdb.firebaseio.com/suggestedMusics.json',
    {
      method: 'PUT',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dummysongs)
    }
  );
  if (!response.ok) {
    throw new Error('error 404, known error on post');
  }
};

export const updateUserSongs = async (userSongs) => {
  console.log(userSongs);
  const response = await fetch('https://azmari-e08fd-default-rtdb.firebaseio.com/userSongs.json', {
    method: 'PUT',
    header: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userSongs)
  });
  if (!response.ok) {
    throw new Error('error 404, known error on post');
  }
};

//for future use
export const updateSuggestedSong = async (newSongs) => {
  const response = await fetch(
    'https://azmari-e08fd-default-rtdb.firebaseio.com/suggestedMusics.json',
    {
      method: 'PUT',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSongs)
    }
  );

  if (!response.ok) {
    throw new Error('error 404 , known error on post');
  }

  const suggestedMusics = await response.json();
  return suggestedMusics;
};
