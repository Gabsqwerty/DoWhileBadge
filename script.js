const linksSocialMedia = {
  github: "Gabsqwerty",
  youtube: "UCc0q0vdk3f7AaHES-KpRj6w",
  facebook: "gabrieldonascimentomarques",
  instagram: "gabrieldonascimentomarques",
  twitter: "maedazoe",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

function getGithubProfileInfos() {
  const url = "https://api.github.com/users/" + linksSocialMedia.github;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.innerText = data.name;
      userBio.innerText = data.bio;
      userLink.href = data.html_url 
      userImage.src = data.avatar_url
      userLogin.innerText = data.login
    });
}

getGithubProfileInfos();
