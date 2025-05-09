function flipCard(card) {
    const innerCard = card.querySelector('.card');
    innerCard.classList.toggle('flipped');
}

function showLesson(lessonNumber) {
    document.querySelectorAll('.flashcard-container').forEach(lesson => {
        lesson.style.display = 'none';
    });
    
    const lessonToShow = document.getElementById(`lesson${lessonNumber}`);
    if (lessonToShow) {
        lessonToShow.style.display = 'grid';
    }
}

// Xử lý tham số URL nếu có
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const lessonParam = urlParams.get('lesson');
    
    if (lessonParam) {
        showLesson(parseInt(lessonParam));
    } else {
        showLesson(1);
    }
});
