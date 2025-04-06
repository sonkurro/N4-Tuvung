function flipCard(card) {
    card.classList.toggle('flipped');
}

function showLesson(lessonNumber) {
    // Ẩn tất cả các bài học
    document.querySelectorAll('.flashcard-container').forEach(lesson => {
        lesson.style.display = 'none';
    });

    // Hiển thị bài học được chọn
    document.getElementById(`lesson${lessonNumber}`).style.display = 'grid'; // Sửa thành 'grid'
}

// Mặc định hiển thị bài học 1
showLesson(1);
