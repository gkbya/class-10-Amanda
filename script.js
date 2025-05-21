document.querySelectorAll('.question').forEach((question) => {
  const correctOption = question.getAttribute('data-answer');
  const options = question.querySelectorAll('li');

  options.forEach(option => {
    option.addEventListener('click', () => {
      // Prevent re-answering
      if (question.classList.contains('answered')) return;

      question.classList.add('answered');
      const userOption = option.getAttribute('data-option');

      if (userOption === correctOption) {
        option.style.backgroundColor = '#c8e6c9'; // Light green
      } else {
        option.style.backgroundColor = '#ffcdd2'; // Light red

        // Highlight the correct option
        options.forEach(opt => {
          if (opt.getAttribute('data-option') === correctOption) {
            opt.style.border = '2px solid green';
            opt.style.backgroundColor = '#d4edda'; // Greenish background
          }
        });

        // Display correct answer below the question
        const correctText = [...options].find(opt =>
          opt.getAttribute('data-option') === correctOption
        ).innerText;

        const note = document.createElement('div');
        note.innerText = `Correct answer: ${correctText}`;
        note.style.color = 'green';
        note.style.fontStyle = 'italic';
        note.style.marginTop = '8px';
        question.appendChild(note);
      }
    });
  });
});
