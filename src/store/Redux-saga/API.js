export const API = {
  fetchSuggestedMusic: () => {
    const fetch = async () => {
      const response = await fetch(
        'https://azmari-e08fd-default-rtdb.firebaseio.com/suggestedMusics.json'
        // {
        //   method: 'PUT',
        //   body: JSON.stringify(DummyMusics),
        //   headers: {
        //     'Content-type': 'application/json; charset=UTF-8'
        //   }
        // }
      );
      if (!response.ok) {
        throw new Error('error 404 , known error on post');
      }
      const suggestedMusics = await response.json();

      return suggestedMusics;
    };
    return fetch();
  }
};
