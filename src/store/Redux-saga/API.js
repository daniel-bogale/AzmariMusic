export const fetchSuggestedSongs = async () => {
  const response = await fetch(
    'https://azmari-e08fd-default-rtdb.firebaseio.com/suggestedMusics.json'
  );
  if (!response.ok) {
    throw new Error('error 404 , known error on post');
  }
  const suggestedMusics = await response.json();
  console.log(suggestedMusics);
  return suggestedMusics;
};

export const fetchNow = async () => {
  const res = await fetch('https://azmari-e08fd-default-rtdb.firebaseio.com/suggestedMusics.json');
  const response = await res.json();
  return response;
};
