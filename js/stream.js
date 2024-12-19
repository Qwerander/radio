let audioElement;
let isPlaying = false;

document
  .getElementById("playStream")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Предотвращаем переход по ссылке

    if (!audioElement) {
      const audioFiles = ["static/1.mp4", "static/2.mp4", "static/3.mp4"];

      audioElement = document.createElement("audio");
      audioElement.autoplay = true;
      audioElement.style.display = "none"; // Скрываем аудио элемент
      document.body.appendChild(audioElement);

      let currentIndex = 0;

      const playNextAudio = () => {
        audioElement.src = audioFiles[currentIndex];
        audioElement.play();
        currentIndex = (currentIndex + 1) % audioFiles.length; // Переход на следующий файл или начало списка
      };

      audioElement.addEventListener("ended", playNextAudio);

      // Запускаем воспроизведение первого файла
      playNextAudio();
      isPlaying = true;
    } else {
      if (isPlaying) {
        audioElement.pause();
        isPlaying = false;
      } else {
        audioElement.play();
        isPlaying = true;
      }
    }
  });
