function numberList(start, end) {
  if (!Number.isInteger(start)){
    throw new Error('Please use an integer for the starting number');
  }
  let count = start;
  let i = 0;
  let step = 1;
  let size = end - start + 1;
  let direction = (count, end) => count <= end;
  if (start > end) {
    step = -1;
    size = start - end + 1;
    direction = (count, end) => count >= end;
  }
  let list = new Array(size);
  for (i = 0; direction(count, end); ++i, count += step) {
    list[i] = count;
  }
  return list.toString() + ".";
}
module.exports = numberList;
