const videoInterviewWrapper = document.querySelector('[data-video-interview-container]');

const controlVideo = () => {
  if (!videoInterviewWrapper) {
    return;
  }
  let video;

  video = videoInterviewWrapper.querySelector('[data-video-interview]');
  const videoDurationText = videoInterviewWrapper.querySelector('[data-video-duration]');
  const timeCodes = videoInterviewWrapper.querySelectorAll('[data-video-timecode]');

  video.addEventListener('loadedmetadata', () => {
    let duration = video.duration;

    let minutes = Math.floor(duration / 60);
    let second = Math.floor(duration % 60);

    videoDurationText.textContent = `${minutes}:${second}`;

    for (let i = 0; i < timeCodes.length; i++) {
      let timeCode = timeCodes[i].dataset.videoTimecode;

      let timeCodeMinutes = Math.floor(timeCode / 60);
      let timeCodeSecond = Math.floor(timeCode % 60);

      timeCodes[i].textContent = `${timeCodeMinutes}:${timeCodeSecond}`;

      timeCodes[i].addEventListener('click', (evt) => {
        video.currentTime = evt.target.dataset.videoTimecode;
      });
    }
  });
};

export {controlVideo};
