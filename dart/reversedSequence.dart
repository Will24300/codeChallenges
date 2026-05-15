List<int> reverseSeq(int n) {
  List <int> myArr = [];
  for (var i = n; i >= 1; i--){
    myArr.add(i);
  }
  return myArr;
}