
let theory_block = document.querySelector(".study_info_th");
let practice_block = document.querySelector(".study_info_pr");

let theory = document.querySelector("#theory_program");
let practice = document.querySelector("#practice_program");
theory.style.display = "none";
practice.style.display = "none";

theory_block.onclick = function () {
    if (theory.style.display == "none") {
        theory.style.display = "block";
    } else {
        theory.style.display = "none";
    }
}

practice_block.onclick = function () {
    if (practice.style.display == "none") {
        practice.style.display = "block";
    } else {
        practice.style.display = "none";
    }
}
