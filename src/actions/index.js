export const categoriesLoad = newCategories => {
  return {
    type: "CATEGORIES_LOADED",
    payload: newCategories
  };
};

export const productsLoad = newProducts => {
  return {
    type: "PRODUCTS_LOADED",
    payload: newProducts
  };
};

export const categoryAdd = newCategory => {
	return {
		type: "CATEGORY_ADD",
		payload: newCategory
	}
}