export const patchUser = (formData, id) => {
  return $.ajax({
    url: `/api/users/${id}`,
    type: 'PATCH',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
  })
}

export const fetchAllUsers = () => {
  return $.get('/api/users');
};