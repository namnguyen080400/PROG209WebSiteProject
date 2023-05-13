let contactArray = [];

let  ContactObject = function (pName, pEmail, pPhoneNumber) {
    this.name = pName;
    this.email = pEmail;
    this.phoneNumber = pPhoneNumber;
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
            document.getElementById("phone").value
        );
        contactArray.push(contact);

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";

        createList();
        document.location.href = "index.html#display";
    });

    $(document).on("pagebeforeshow", "#display", function (event) {
        createList();
    });
//=====part where i add  =====
    document.getElementById("police").addEventListener("click", function () {
        alert("Police number 911");
    });

    document.getElementById("fire").addEventListener("click", function () {
        alert("FIRE DEPARTMENT NUMBER:425-452-6892");
    });

    document.getElementById("ambulance").addEventListener("click", function () {
        alert("AMBULANCE NUMBER: 425-452-6892");
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
        li.innerHTML = "ID: " + element.ID + "<b> Name: </b>" + element.name + " <b> Email: </b>" + element.email + "<b> Phone Number: </b>" + element.phoneNumber;
      count++;
        myul.appendChild(li);
    });
};