const BASE_URL = 'https://6460b470ca2d89f7e75d061e.mockapi.io';

export const getContacts = async () => {
  try {
    const data = await fetch(`${BASE_URL}/contacts`);
    if (data.statusText === 'OK') {
      return await data.json();
    }
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

export const createContact = async data => {
  const res = await fetch(`${BASE_URL}/contacts`, {
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const deleteContact = async id => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return await res.json();
};
