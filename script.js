const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    const plusIcon = question.querySelector('.plus');
    const minusIcon = question.querySelector('.minus');
    const answer = question.nextElementSibling;

    // Initially hide the minus icon and the answer
    minusIcon.style.display = "none";
    answer.style.display = "none";

    question.addEventListener("click", function () {
        if (answer.style.display === "none") {
            answer.style.display = "block";
            plusIcon.style.display = "none";
            minusIcon.style.display = "block";
        } else {
            answer.style.display = "none";
            plusIcon.style.display = "block";
            minusIcon.style.display = "none";
        }
    });
});

