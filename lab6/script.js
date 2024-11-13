
  async function getData() {
    const url = "https://randomuser.me/api";
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data= await response.json();
      return data;

    } catch (error) {
      console.error(error.message);
    }
  }

  
  async function outputUsers(){
    const usersContainer = document.getElementById("users")
    for(let i = 0;i<5;i++){
        data = await getData();
        let pictureSrc = data.results[0].picture.large;
        let cell = data.results[0].cell;
        let country = data.results[0].location.country;
        let postCode = data.results[0].location.postcode;
        let user = createUser(pictureSrc,cell,country,postCode);
        usersContainer.append(user);
    }
    

  } 

  function createUser(imgSrc,cell,country,postCode){
    const userContainer = document.createElement("div");
    userContainer.className = "user-container";


    const userPictureContainer = document.createElement("div");
    userPictureContainer.className = "user-picture-container";
    const userPicture = document.createElement("img");
    userPicture.setAttribute("src",`${imgSrc}`);
    userPictureContainer.append(userPicture);

    const userCellContainer = document.createElement("div");
    userCellContainer.className = "user-cell-container";
    const userCellLabel = document.createElement("p");
    userCellLabel.innerText = "Cell:";
    userCellLabel.className = "label";
    const userCell = document.createElement("p");
    userCell.innerText = `${cell}`;
    userCellContainer.append(userCellLabel,userCell);


    const userCountryContainer = document.createElement("div");
    userCountryContainer.className = "user-country-container";
    const userCountryLabel = document.createElement("p");
    userCountryLabel.innerText = "Country:";
    userCountryLabel.className = "label";
    const userCountry = document.createElement("p");
    userCountry.innerText = `${country}`;
    userCountryContainer.append(userCountryLabel,userCountry);


    const userPostCodeContainer = document.createElement("div");
    userPostCodeContainer.className = "user-postcode-container";
    const userPostCodeLabel = document.createElement("p");
    userPostCodeLabel.innerText = "Postcode:";
    userPostCodeLabel.className = "label";
    const userPostCode = document.createElement("p");
    userPostCode.innerText = `${postCode}`;
    userPostCodeContainer.append(userPostCodeLabel,userPostCode);


    userContainer.append(userPictureContainer,userCellContainer,userCountryContainer,userPostCodeContainer);
    return userContainer;
  }