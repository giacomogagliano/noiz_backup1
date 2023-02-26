function binary_search_tree(array) {
  if (array.length === 1) {
    return array[0];
  }
  const base = array[0];
  const right = array.findIndex(n => n > base);
  binary_search_tree(array.slice(1, right));
  binary_search_tree(array.slice(right));
}

binary_search_tree([890, 325, 290, 530, 965]);
