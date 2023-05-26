Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    else{
        button.disabled=true;
    }
    
});
nextButton.style.display="block";
