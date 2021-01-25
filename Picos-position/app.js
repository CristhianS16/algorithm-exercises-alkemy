function foundPicosInArray(arr) {
  let picos = [];
  let index = 0;
  if (!arr.length) {
    return "No hay picos";
  }
  if (arr.length === 1) {
    return [index];
  }
  if (!index) {
    if (arr[index] > arr[index + 1]) {
      picos.push(index);
    }
    index += 1;
  }
  while (index !== arr.length - 1) {
    if (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) {
      picos.push(index);
    }
    index += 1;
  }
  if (arr[index] > arr[index - 1]) {
    picos.push(index);
  }
  return picos;
}
