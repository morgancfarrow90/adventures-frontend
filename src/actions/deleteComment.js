export function deleteComment(id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/comments/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      })
    .then(response => response.json())
    .then(user => {
          dispatch({type: 'DELETE_COMMENT',
          payload: user})
    })
  }
}
