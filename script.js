function checkLS() {
  if (typeof(Storage) !== "undefined") {
    document.getElementById("checkLS").innerHTML = "This browser <b>supports</b> Local Storage";
  } else {
    document.getElementById("checkLS").innerHTML = "This browser <b>does not support</b> Local Storage";
  }
}

function clearLS() {
  localStorage.clear();
  alert("Saved data has been cleared");
}

function convert(value) {
  if (value !== undefined && value !== null) {
    return value;
  } else {
    return "[no data]";
  }
}

function convertPerson(value) {
  var out = value;
  switch(value) {
    case "ISTJ":
      out = "ISTJ - The Duty Fullfiller: Serious and quiet, interested in security and peaceful living";
      break;
    case "ISTP":
      out = "ISTP - The Mechanic: Quiet and reserved, interested in how things work and why";
      break;
    case "ISFJ":
      out = "ISFJ - The Nurturer: Quiet, kind, and conscientious. Can be depended on to follow through";
      break;
    case "ISFP":
      out = "ISFP - The Artist: Quiet, serious, sensitive, and kind. Do not like conflicts";
      break;
    case "INFJ":
      out = "INFJ - The Protector: Quietly forceful, original, and sensitive. Tends to stick to things until they are done";
      break;
    case "INFP":
      out = "INFP - The Idealist: Quiet, reflective, and idealistic. Interested in serving humanity";
      break;
    case "INTJ":
      out = "INTJ - The Scientist: Independent, original, analytical, and determined. Values knowledge, competence, and structure";
      break;
    case "INTP":
      out = "INTP - The Thinker: Logical, original, creative thinker. Can be very excited about theories and ideas";
      break;
    case "ESTP":
      out = "ESTP - The Doer: Friendly, adaptable, action-oriented. Focused on immediate results";
      break;
    case "ESTJ":
      out = "ESTJ - The Guardian: Practical, traditional, and organized. Often athletic and uninterested in theory unless they see practical application";
      break;
    case "ESFP":
      out = "ESFP - The Performer: People-oriented and fun-loving, make things more fun for others. Live for the moment";
      break;
    case "ESFJ":
      out = "ESFJ - The Caregiver: Warm-hearted, popular, and conscientious. Tends to put the needs of others over their own";
      break;
    case "ENFP":
      out = "ENFP - The Inspirer: Enthusiastic, idealistic, and creative. Able to do almost anything that interests them. Great people skill";
      break;
    case "ENFJ":
      out = "ENFJ - The Giver: Popular and sensitive, with outstanding people skills. Externally focused, dislikes being alone";
      break;
    case "ENTP":
      out = "ENTP - The Visionary: Creative, resourceful, and intellectually quick. Good at a broad range of things. Enjoys debating issues";
      break;
    case "ENTJ":
      out = "ENTJ - The Executive: Assertive and outspoken, driven to lead. Excellent ability to solve organizational problems";
      break;
    default:
      out = "NONE - No personality selected or just no personality";
      break;
  }
  return out;
}

function show() {
  var ID = parseFloat(document.getElementById("fetchID").value);
  var output = "<br>No data has been found for this ID";
  var tempArr = [];
  
  if (localStorage[ID] !== undefined && localStorage[ID] !== "erased") {
    tempArr = JSON.parse(localStorage[ID]);
    output = "<br>Name: " + convert(tempArr[0]) + "<br><br>Birthday: " + convert(tempArr[1]) + "/" + convert(tempArr[2]) + "/" + convert(tempArr[3]) + "<br><br>Email: " + convert(tempArr[4]) + "<br><br>Education: " + convert(tempArr[5]) + "<br><br>Occupation: " + convert(tempArr[6]) + "<br><br>Personality: " + convertPerson(tempArr[7]) + "<br><br>Superpower: " + convert(tempArr[8]);
  }
  
  document.getElementById("dataDisplay").innerHTML = output;
}

function remove() {
  var ID = parseFloat(document.getElementById("removeID").value);
  
  if (localStorage[ID] === undefined || localStorage[ID] === "erased") {
    alert("Error: no data stored with this ID has been found.");
    return;
  }
  
  if (localStorage[ID] !== undefined && localStorage[ID] !== "erased" && confirm("There is data stored with this ID. Are you sure you would like to delete it?") === false) {
    return;
  }
  
  localStorage[ID] = "erased";
  alert("All data stored with this ID has been deleted successfully");
}

function save() {
  var ID = parseFloat(document.getElementById("entryID").value);
  var tempArr = [];
  var notEmpty = false;
  
  var name = document.getElementById("entryName").value;
  if (name.length !== 0 && name !== null && name !== "") {
    tempArr[0] = name;
    notEmpty = true;
  }
  
  var day = parseFloat(document.getElementById("entryDay").value);
  if (isNaN(day) === false && 0 <= day <= 31) {
    tempArr[1] = day;
    notEmpty = true;
  }
  
  var month = parseFloat(document.getElementById("entryMonth").value);
  if (isNaN(month) === false && 0 <= month <= 12) {
    tempArr[2] = month;
    notEmpty = true;
  }
  
  var year = parseFloat(document.getElementById("entryYear").value);
  if (isNaN(year) === false && 1000 <= year <= 3000) {
    tempArr[3] = year;
    notEmpty = true;
  }
  
  var email = document.getElementById("entryEmail").value;
  if (email.length !== 0 && email !== null && email !== "") {
    tempArr[4] = email;
    notEmpty = true;
  }
  
  var edu = document.getElementById("entryEdu").value;
  if (edu.length !== 0 && edu !== null && edu !== "") {
    tempArr[5] = edu;
    notEmpty = true;
  }
  
  var job = document.getElementById("entryJob").value;
  if (job.length !== 0 && job !== null && job !== "") {
    tempArr[6] = job;
    notEmpty = true;
  }
  
  var person = document.getElementById("entryPerson").value;
  if (person.length !== 0 && person !== null && person !== "") {
    tempArr[7] = person;
    notEmpty = true;
  }
  
  var superpower = document.getElementById("entrySuperpower").value;
  if (superpower.length !== 0 && superpower !== null && superpower !== "") {
    tempArr[8] = superpower;
    notEmpty = true;
  }
  
  if (notEmpty === true) {
    if (localStorage[ID] !== undefined && localStorage[ID] !== "erased" && confirm("There is already data stored with this ID. Would you like to overwrite it?") === false) {
      return;
    }
    localStorage[ID] = JSON.stringify(tempArr);
    alert("Profile saved successfully");
  }
}