// ----iconsAbdul----
// var iconsAbdul = document.getElementById("iconsAbdul");
function goto_instagram_abdul(){
    location.href="https://www.instagram.com/_abdulrochim_/";
}

function goto_linkedin_abdul(){
    location.href="https://www.linkedin.com/in/abdul-rochim-b8157150/";
}


//////
const downloadFile = () => {
    const link = document.createElement("a");
    const content = document.querySelector("textarea").value;
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "justek laporan";
    link.click();
    URL.revokeObjectURL(link.href);
};
//////


// https://www.youtube.com/watch?v=fAgLnRVHp_I&t=425s
const textarea = document.querySelector("textarea"),
fileNameInput = document.querySelector(".file-name input"),
selectMenu = document.querySelector(".save-as select"),
saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener("change", () => {
    // getting selected option text
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    // console.log(selectedOption.split(" ")[1]);
    saveBtn.innerText = `Disimpan dalam bentuk dokumen ${selectedOption.split(" ")[1]}`;
});

saveBtn.addEventListener("click", () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Blob
    const blob = new Blob([textarea.value], {type: selectMenu.value});  //new Blob(blobContent, Mime-type)
    // URL.createObjectURL creates a url that represent passed object
    const fileUrl = URL.createObjectURL(blob);
    // console.log(fileUrl)
    const link = document.createElement("a"); //creating <a> tag
    link.download = fileNameInput.value; //passing filename as download value of link
    link.href= fileUrl;// passing fileUrl as href value of link
    link.click();// clicking link so the file download
});
