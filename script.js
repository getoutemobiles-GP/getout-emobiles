const announcement = document.getElementById('announcement');
const closePopup = document.getElementById('closePopup');
const openAnnouncement = document.getElementById('openAnnouncement');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();
unction showAnnouncement() {
  announcement.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function hideAnnouncement() {
  announcement.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

closePopup.addEventListener('click', hideAnnouncement);
openAnnouncement.addEventListener('click', showAnnouncement);
announcement.addEventListener('click', (event) => {
  if (event.target === announcement) hideAnnouncement();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') hideAnnouncement();
});
