bool solution(String text, String ending) {
  if (ending.length > text.length) return false;
  var end = text.substring(text.length - ending.length);
  return ending == end;
}

void main() {
  solution("abc", 'bc');
}
