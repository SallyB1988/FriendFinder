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
  createQuestions();
};

const createQuestions = () => {

  for (let i = 0; i < questions.length; i++) {
    var html = `
    <div class="my-1 p-2 border question-card">
      <h4 class="py-1 px-3">Question ${i+1}</h4>
      <label class="px-4 py-1" for="friend-q${i}"><h5>${questions[i]}</h5></label>
      <select class="custom-select w-100 mx-4" id="friend-q${i}" name="ans${i}">
        <option selected>Select an Option</option>
        <option>1 (Strongly Disagree)</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5 (Strongly Agree)</option>
      </select>
    </div>`;
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
    arr.push(value|| 0);
  }
  return arr;
};

const displayBestMatch = (name, img) => {
  let $friendImage = $("#modal-image");
  let $friendName = $("#modal-name");
  $friendImage.html(`<img id="friend-image" src=${img} >`);
  $friendName.html(`<h3>${name}</h3>`);
  $("#bestMatchModal").modal();
}
