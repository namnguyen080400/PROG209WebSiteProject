let contactArray = [];

let  ContactObject = function (pName, pEmail, pPhoneNumber, pPhotoName, pPhoto_URL) {
    this.name = pName;
    this.email = pEmail;
    this.phoneNumber = pPhoneNumber;
    this.PhotoName = pPhotoName;
    this.Photo_URL = pPhoto_URL;
    this.ID = Math.random().toString(16).slice(5);
}

// code runs immediately
//================================================================

// runs when DOM is loaded
document.addEventListener("DOMContentLoaded", function (event) {

    createList();

    document.getElementById("submitContact").addEventListener("click", function () {
        var contact = new ContactObject(
            document.getElementById("name").value,
            document.getElementById("email").value,
            document.getElementById("phone").value,
            document.getElementById("PhotoName").value,
            document.getElementById("Photo_URL").value
        );
        contactArray.push(contact);

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("PhotoName").value = "";
        document.getElementById("Photo_URL").value = "";

        createList();
        document.location.href = "index.html#display";
    });

    $(document).on("pagebeforeshow", "#display", function (event) {
        createList();
    });

});

//======================================
// function definitions
function createList() {
    // clear prior data
    var myul = document.getElementById("myul");
    myul.innerHTML = "";
      count = 1;   
    contactArray.forEach(function (element) {   // use handy array forEach method
        var li = document.createElement('li');
        // added data-role="listview" to the ul in the html
        li.innerHTML = "ID: " + element.ID + "<b> Name: </b>" + element.name + " <b> Email: </b>" + element.email + "<b> Phone Number: </b>" + element.phoneNumber + " Photo <a href=" + element.Photo_URL + ">" + element.PhotoName + "</a>";
      count++;
        myul.appendChild(li);
    });
};

let contacts = [];

function addContact() {
  const nameInput = document.getElementById("Avatar1");
  const photoUrlInput = document.getElementById("Photo_URL");

  const contact = {
    name: nameInput.value,
    photoUrl: photoUrlInput.value
  };

  contacts.push(contact);

  const contactList = document.getElementById("avatar-list");

  const PHOTO = document.createElement("li");
  const LINK = document.createElement("a");
  LINK.innerText = contact.name;
  LINK.href = contact.photoUrl;
  LINK.target = "_blank";
  PHOTO.appendChild(LINK);

  contactList.appendChild(PHOTO);

  nameInput.value = "";
  photoUrlInput.value = "";
}