/* eslint-disable linebreak-style */
const hamburger = document.querySelector('.humburger-container');

const cards = (object) => {
  const {
    title, company, position, year, description, labels, image, alt, live, source,
  } = object;

  const modalContainer = document.createElement('div');
  modalContainer.className = 'modal';

  const modalBody = `<div class="modal-body">
                      <h2 class="align-item modal-h2">${title}</h2>
                      <div class="work-description align-item">
                          <p class="company">${company}</p>
                          <div class="separator"></div>
                          <p class="position">${position}</p>
                          <div class="separator"></div>
                          <p class="year">${year}</p>
                      </div>
                      <div class='image-modal'>
                        <img class="align-item card-image" src="${image}" alt="${alt}" />
                      </div>
                    
                      <div class="data-modal">
                          <div class="detail-modal-container">
                            <p>${description.long}</p>
                          </div>
                          <div class="label-button-modal-container align-item">
                            <div class="tech-modal-container">
                              <ul class="technologie-label tech-modal">
                                  <li>${labels.main[0]}</li>
                                  <li>${labels.main[1]}</li>
                                  <li>${labels.main[2]}</li>
                              </ul>
                            </div>
                            <div class="modal-buttons">
                                <button class="see-project align-item modal-button" href="${live}">See live</button>
                                <button class="see-project align-item modal-button" href="${source}">See Source</button>
                            </div>
                          </div>
                      </div>
                      <img class="close-modal" src="./assets/icons/x-icon.png" />
                    </div>`;

  modalContainer.innerHTML = modalBody;

  document.body.append(modalContainer);

  const sections = document.querySelectorAll('section');

  sections.forEach((section) => {
    section.style.filter = 'blur(0.3rem)';
  });

  const xIcon = document.querySelector('.close-modal');
  xIcon.addEventListener('click', () => {
    modalContainer.remove();
    sections.forEach((section) => {
      section.style.filter = 'none';
    });
  });
};

let controller = false;
hamburger.addEventListener('click', function ham() {
  const navbar = document.querySelector('.menu-container');
  const links = navbar.querySelectorAll('a');
  const slice1 = document.querySelector('.slice-1');
  const slice2 = document.querySelector('.slice-2');
  const meat = document.querySelector('.meat');
  const navbarContainer = document.getElementById('navbar-container');
  const welcomeSection = document.getElementById('welcome-section');
  const myLogo = document.querySelector('.logo');

  if (!controller) {
    navbar.classList.add('full-screen-menu');
    this.classList.add('full-screen-hamburger');
    navbarContainer.classList.add('full-screen-navbar-container');
    links.forEach((link) => {
      link.classList.add('full-screen-menu-links');
      link.addEventListener('click', () => {
        navbar.classList.remove('full-screen-menu');
        hamburger.classList.remove('full-screen-hamburger');
        navbarContainer.classList.remove('full-screen-navbar-container');
        links.forEach((link) => {
          link.classList.remove('full-screen-menu-links');
        });
        slice1.classList.remove('full-screen-slice1');
        slice2.classList.remove('full-screen-slice2');
        meat.classList.remove('full-screen-meat');
        welcomeSection.classList.remove('full-screen-blur');
        myLogo.classList.remove('full-screen-blur');
      });
    });
    slice1.classList.add('full-screen-slice1');
    slice2.classList.add('full-screen-slice2');
    meat.classList.add('full-screen-meat');
    welcomeSection.classList.add('full-screen-blur');
    myLogo.classList.add('full-screen-blur');

    controller = true;
    return;
  }
  navbar.classList.remove('full-screen-menu');
  this.classList.remove('full-screen-hamburger');
  navbarContainer.classList.remove('full-screen-navbar-container');
  links.forEach((link) => {
    link.classList.remove('full-screen-menu-links');
  });
  slice1.classList.remove('full-screen-slice1');
  slice2.classList.remove('full-screen-slice2');
  meat.classList.remove('full-screen-meat');
  welcomeSection.classList.remove('full-screen-blur');
  myLogo.classList.remove('full-screen-blur');

  controller = false;
});

const worksInfo = [
  {
    id: 1,
    title: 'Tonic',
    company: 'CANOPY',
    position: 'Back End Dev',
    year: 2015,
    description: {
      short: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
      long: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    },
    labels: {
      main: ['html', 'css', 'javascript'],
      extra: ['github', 'ruby', 'Bootstraps'],
    },
    image: './assets/images/work-1.png',
    alt: 'Tonic interface',
    live: '#',
    source: '#',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    company: 'CANOPY',
    position: 'Back End Dev',
    year: 2015,
    description: {
      short: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
      long: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    },
    labels: {
      main: ['html', 'css', 'javascript'],
      extra: ['github', 'ruby', 'Bootstraps'],
    },
    image: './assets/images/work-2.png',
    alt: 'Mult-Post Stories',
    live: '#',
    source: '#',
  },
  {
    id: 3,
    title: 'Tonic',
    company: 'CANOPY',
    position: 'Back End Dev',
    year: 2015,
    description: {
      short: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
      long: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    },
    labels: {
      main: ['html', 'css', 'javascript'],
      extra: ['github', 'ruby', 'Bootstraps'],
    },
    image: './assets/images/work-3.png',
    alt: 'Tonic interface',
    live: '#',
    source: '#',
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    company: 'CANOPY',
    position: 'Back End Dev',
    year: 2015,
    description: {
      short: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
      long: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    },
    labels: {
      main: ['html', 'css', 'javascript'],
      extra: ['github', 'ruby', 'Bootstraps'],
    },
    image: '../assets/images/work-4.png',
    alt: 'Mult-Post Stories',
    live: '#',
    source: '#',
  },
];

const workSection = document.getElementById('works-section');

// eslint-disable-next-line array-callback-return
worksInfo.map((work) => {
  const idWork = work.id;
  const titleWork = work.title;
  const conpanyWork = work.company;
  const positionWork = work.position;
  const yearWork = work.year;
  const descriptionWork = work.description.short;
  const imageSrcWork = work.image;
  const altImgWork = work.alt;
  const techLabels = work.labels.main;

  const workContainer = document.createElement('div');
  workContainer.className = 'work-container';
  workContainer.id = `card-${idWork}`;

  /* First workContainer child */
  const imageWork = document.createElement('img');
  imageWork.classList.add('align-item', 'card-image');
  imageWork.src = imageSrcWork;
  imageWork.setAttribute('alt', altImgWork);

  /* Second workContainer child */
  const workAditionInfo = document.createElement('div');
  workAditionInfo.className = 'work-aditional-info';

  workContainer.append(imageWork, workAditionInfo);
  /* First workAditionInfo child */
  const workInfoCont = document.createElement('div');
  workInfoCont.className = 'work-info-container';

  /* workInfoContainer H2 */
  const workTitle = document.createElement('h2');
  workTitle.className = 'align-item';
  workTitle.textContent = titleWork;

  workInfoCont.appendChild(workTitle);

  /* Second workAditionInfo child */
  const workDescrCont = document.createElement('div');
  workDescrCont.classList.add('work-description', 'align-item');

  /* workDescriptionContainer children */
  const companyName = document.createElement('p');
  companyName.className = 'company';
  companyName.textContent = conpanyWork;

  const separator1 = document.createElement('div');
  separator1.className = 'separator';

  const position = document.createElement('p');
  position.className = 'position';
  position.textContent = positionWork;

  const separator2 = document.createElement('div');
  separator2.className = 'separator';

  const year = document.createElement('p');
  year.className = 'year';
  year.textContent = yearWork;

  workDescrCont.append(companyName, separator1, position, separator2, year);

  /* Third workAditionInfo child */
  const projectDescription = document.createElement('div');
  projectDescription.classList.add('project-description', 'align-item');

  /* projectDescription child */
  const description = document.createElement('p');
  description.textContent = descriptionWork;

  projectDescription.appendChild(description);

  /* Fourth workAditionInfo child */
  const technologies = document.createElement('div');
  technologies.classList.add('technologies', 'align-item');
  const ul = `<ul class="technologie-label">
                <li>${techLabels[0]}</li>
                <li>${techLabels[1]}</li>
                <li>${techLabels[2]}</li>
              </ul>`;

  technologies.innerHTML = ul;

  /* Last workAditionInfo child */
  const seeProject = document.createElement('button');
  seeProject.classList.add('see-project', 'align-item');
  seeProject.textContent = 'See Project';
  seeProject.addEventListener('click', () => {
    cards(work);
  });
  workAditionInfo.append(workInfoCont, workDescrCont, projectDescription, technologies, seeProject);

  workSection.append(workContainer);
});