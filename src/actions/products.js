import Axios from "axios";

export const productsRequested = payload => {
  return {
    type: "PRODUCTS_REQUESTED",
    payload
  };
};

export const productsReceived = payload => {
  return {
    type: "PRODUCTS_RECEIVED",
    payload,
    receivedAt: Date.now()
  };
};

export const fetchProducts = payload => {
  return dispatch => {
    dispatch(productsRequested(payload));
    const apiUrl = "/api/v1/product/get/all";

    return Axios.get(apiUrl)
      .then(response => {
        dispatch(productsReceived(response.data.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const productAdd = newProduct => {
  return dispatch => {
    const apiUrl = "/api/v1/product/add";
    console.log("np", newProduct);
    return Axios.post(apiUrl, { ...newProduct })
      .then(response => {
        dispatch(productAddSuccess(response.data.products));
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

export const productAddSuccess = payload => {
  return {
    type: "PRODUCT_ADD_SUCCESS",
    payload
  };
};

export const productDelete = productId => {
  return {
    type: "PRODUCT_DELETE",
    payload: productId
  };
};

export const productEdit = product => {
  return {
    type: "PRODUCT_EDIT",
    payload: product
  };
};

export const productsFilter = categorytId => {
  return {
    type: "PRODUCTS_FILTER",
    payload: categorytId
  };
};

export const productsResetCategory = categoryKey => {
  return dispatch => {
    const apiUrl = `/api/v1/product/category-reset/${categoryKey}`;

    return Axios.put(apiUrl)
      .then(response => {
        dispatch(productsResetCategorySuccess(response.data.data));
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

export const productsResetCategorySuccess = payload => {
  return {
    type: "PRODUCTS_RESET_CATEGORY_SUCCESS",
    payload
  };
};
