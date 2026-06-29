document.addEventListener('DOMContentLoaded', () => {
  const boot = document.getElementById('boot');
  const announcement = document.getElementById('announcement');
  const openAnnouncement = document.getElementById('openAnnouncement');
  const closeAnnouncement = document.getElementById('closeAnnouncement');

  setTimeout(() => {
    if (boot) boot.classList.add('done');
    if (announcement && !sessionStorage.getItem('hqAnnouncementClosed')) {
      announcement.classList.add('show');
      announcement.setAttribute('aria-hidden', 'false');
    }
  }, 1900);

  const closePop = () => {
    announcement.classList.remove('show');
    announcement.setAttribute('aria-hidden', 'true');
    sessionStorage.setItem('hqAnnouncementClosed', 'yes');
  };

  if (closeAnnouncement) closeAnnouncement.addEventListener('click', closePop);
  if (announcement) announcement.addEventListener('click', (e) => { if (e.target === announcement) closePop(); });
  if (openAnnouncement) openAnnouncement.addEventListener('click', () => { announcement.classList.add('show'); announcement.setAttribute('aria-hidden','false'); });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
