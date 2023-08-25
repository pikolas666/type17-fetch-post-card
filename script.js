    const jobsURL = "https://zany-skitter-caper.glitch.me/experiences";
    const skillsURL = "https://zany-skitter-caper.glitch.me/skills";
    const experience = document.getElementById('experience-wrapper');
    const skillsContainer = document.getElementById('skills-wrapper');
  
    async function fetchexperienceData(url) {
      try {
        const response = await fetch(url);
        const dataArray = await response.json();
        return dataArray;
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
    }
  
    function createExperienceCard(element) {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.innerHTML = `
        <div class="work-experience-wrapper">
          <div class="yearAndCopany">
            <h5>${element.startYear} - ${element.finishYear}</h5>
            <h5 class="company-name">${element.companyName}</h5>
          </div>
          <div class="roleAndTasks">
            <h4>${element.position}</h4>
            <p>${element.description}</p>
          </div>
        </div>`;
      
      return card;
    }
  
    function createSkillCard(element) {
      const skillCard = document.createElement('div');
      skillCard.setAttribute('class', 'skill-card');
      skillCard.innerHTML = `
        <p>${element.title}</p>
        <div class="skillBarcontainer">
          <div class="skills" style="width:${element.level}%;">${element.level}</div>
        </div>`;
      
      return skillCard;
    }
  
    async function fetchDataAndDisplay(url, container, cardCreator) {
      const dataArray = await fetchexperienceData(url);
      
      dataArray.forEach((element) => {
        const card = cardCreator(element);
        container.appendChild(card);
      });
    }
  
    fetchDataAndDisplay(jobsURL, experience, createExperienceCard);
    fetchDataAndDisplay(skillsURL, skillsContainer, createSkillCard);

  