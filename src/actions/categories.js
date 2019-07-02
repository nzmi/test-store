import Axios from "axios";

export const categoriesRequested = payload => {
  return {
    type: "CATEGORIES_REQUESTED",
    payload
  };
};

export const categoriesReceived = payload => {
  return {
    type: "CATEGORIES_RECEIVED",
    payload,
    receivedAt: Date.now()
  };
};

export const fetchCategories = payload => {
  return dispatch => {
    dispatch(categoriesRequested(payload));

    const apiUrl = "/api/v1/categories/";
    return Axios.get(apiUrl)
      .then(response => {
        dispatch(categoriesReceived(response.data.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const categoryAdd = title => {
  return dispatch => {
    const apiUrl = "/api/v1/category/add";
    return Axios.post(apiUrl, { title })
      .then(response => {
        dispatch(categoryAddSuccess(response.data));
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        throw error;
      });
  };
};

export const categoryAddSuccess = data => {
  return {
    type: "CATEGORY_ADD_SUCCESS",
    payload: data
  };
};

export const categoryDelete = categorytId => {
  return {
    type: "CATEGORY_DELETE",
    payload: categorytId
  };
};