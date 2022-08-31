import Windmill from "../utils/windmillClass.js";

export default class View {
    constructor(controller) {
        const self = this;
        const snSearchForm = document.getElementById("snSearchForm");
        const idField = document.getElementById("idField");
        const panelText = document.getElementById("panelText");
        const closeCross = document.getElementById("closeCross");
        const searchForm = document.getElementById("searchForm");
        const brand = document.getElementById("brand");
        const location = document.getElementById("location");
        const setup = document.getElementById("setup");
        const lastyear = document.getElementById("lastyear");
        const showAllWindmillsButton = document.getElementById("showAllWindmillsButton");
        const windmillDialogForm = document.getElementById("windmillDialogForm");
        const addWindmillButton = document.getElementById("addWindmillButton");
        const windmillDialog = document.getElementById("windmillDialog");
        const cancelButton = document.getElementById("cancelButton");
        const saveButton = document.getElementById("saveButton");
        const searchResult = document.getElementById("searchResult");
        const hiddenSnField = document.getElementById("hiddenSnField");
        const confirmDialog = document.getElementById("confirmDialog");
        const confirmDialogForm = document.getElementById("confirmDialogForm");
        const cancelConfirmBtn = document.getElementById("cancelConfirmBtn");

        self.controller = controller;

        showAllWindmillsButton.onclick = function() {
            self.controller.showAllWindmills();
        }

        snSearchForm.onsubmit = function (e) {
            e.preventDefault();
            self.controller.snSearch(idField.value);
        }

        searchForm.onsubmit = function (e) {
            e.preventDefault();
            const optimalWindmill = new Windmill ("", location.value, brand.value, setup.value, lastyear.value);
            self.controller.search(optimalWindmill);
            searchPanel.classList.remove("searchPanelAnim");
        }

        panelText.onclick = function () {
            searchPanel.classList.add("searchPanelAnim");
        }

        closeCross.onclick = function () {
            searchPanel.classList.remove("searchPanelAnim");
        }

        //Dialog eventhandler
        addWindmillButton.onclick = function () {
            windmillDialogForm.reset();
            windmillDialog.showModal();
        }

        cancelButton.onclick = function () {
            windmillDialog.close();
        }

        windmillDialogForm.onsubmit = function () {
            self.controller.newWindmill({
                idNumber: document.getElementById("idfield").value,
                location: document.getElementById("locationfield").value,
                brand: document.getElementById("brandfield").value,
                setupYear:parseFloat(document.getElementById("setupfield").value),
                mwLastYear: parseFloat(document.getElementById("lastyearfield").value)
            })
        }

        searchResult.onclick = function (e) {
            if (e.target.nodeName === "BUTTON") {
                hiddenSnField.value = e.target.id;
                confirmDialog.showModal();

            }
        }

        cancelConfirmBtn.onclick = function () {
            confirmDialog.close();
        }

        confirmDialogForm.onsubmit = function () {
            self.controller.deleteWindmill(hiddenSnField.value);
            self.controller.showAllWindmills();
        }

    }

    message(template) {
        const element = document.getElementById("searchResult");
        element.innerHTML= "", //resets result output element
        element.insertAdjacentHTML("beforeend", template);
    }

    snackbar(snackmessage) {
        const snackbar = document.getElementById("snackbar");
        snackbar.innerHTML = snackmessage;
        snackbar.className = "show";
        setTimeout(function () {
            snackbar.className = snackbar.className.replace("show", "")
        },3000);

    }
}