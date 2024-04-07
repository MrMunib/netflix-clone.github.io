function btn(id) {
  let ansclassEL = document.getElementById("ans" + id);
  let iclassEL = document.getElementById("faq" + id).querySelector(".plus");

  // Toggle the visibility of the answer element
  if (ansclassEL.style.display === "block") {
    ansclassEL.style.display = "none";
    iclassEL.style.transform = "rotate(0deg)";
  } else {
    // Close all other open answers
    let allAnswers = document.querySelectorAll(".ans");
    allAnswers.forEach(function (answer) {
      if (answer.style.display === "block") {
        answer.style.display = "none";
        let questionId = answer.id.replace("ans", "faq");
        let plusIcon = document
          .getElementById(questionId)
          .querySelector(".plus");
        plusIcon.style.transform = "rotate(0deg)";
      }
    });

    // Open the clicked answer
    ansclassEL.style.display = "block";
    iclassEL.style.transform = "rotate(45deg)";
  }
}
