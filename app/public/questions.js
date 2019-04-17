const questions = [
  "I have a vivid imagination",
  "I am passionate about causes.",
  "I believe in the importance of art.",
  "I prefer variety to routine.",
  "I dislike being the center of attention.",
  "I like order.",
  "I seek adventure.",
  "I believe there is no absolute right and wrong.",
  "I am always prepared.",
  "I do a lot in my spare time."
];

window.onload = function() {
  console.log("hello");
  createQuestions();
};

const createQuestions = () => {

  for (let i = 0; i < questions.length; i++) {
    var html = `<h4>Question ${i+1}</h4>
    <label for="friend-q${i}">${questions[i]}</label>
    <select class="custom-select mr-sm-2" id="friend-q${i}" name="ans${i}">
      <option selected>Select an Option</option>
      <option>1 (Strongly Disagree)</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5 (Strongly Agree)</option>
    </select>`;
    $("#disp-questions").append(html);
  }
};

const clearQuestions = () => {
  $("#friend-name").val("");
  $("#friend-photo").val("");
  for (let i = 0; i < questions.length; i++) {
    $(`#friend-q${i}`).val("");
  }
};

const getScores = () => {
  let arr = [];
  for (let i = 0; i < questions.length; i++) {
    let value = parseInt($(`#friend-q${i}`).val());
    console.log(value);
    arr.push(value|| 0);
  }
  console.log('array is ');
  console.log(arr);
  return arr;
};
