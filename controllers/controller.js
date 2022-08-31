export default class Controller {
    initialize(model, view) {
        this.model = model;
        this.view = view;
    }

    buildTemplate(windmill) {
        return `
        <div class="card">
        <img src="https://images.unsplash.com/photo-1638068109209-002be3ae4950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="Avatar" style="width:100%">
        <div class="container">
        <p>Id number: ${windmill.getIdNumber()}</p>
        <p>Location: ${windmill.getLocation()}</p>
        <p>Brand: ${windmill.getBrand()}</p>
        <p>Setup year: ${windmill.getSetupYear()}</p>
        <p>Last year produced MW: ${windmill.getMwLastYear()}</p>
        <button type="button" id="${windmill.getIdNumber()}">Delete</button>
        </div>
        </div>
        `
    }

    snSearch(idNumber) {
        const windmill = this.model.windmillList.getWindmill(idNumber);
        let template = "";

        if (windmill !== null) {
            template = this.buildTemplate(windmill);
        } else {
            template = `
            <tr class="customerrow>
            <td colspan="8">Nothing to show</td>
            </tr>`;
        }
        this.view.message(template);
    }

    search(searchWindmill) {
        const windmill = this.model.windmillList.search(searchWindmill);
        let template = "";

        if (windmill !== null) {
            template = this.buildTemplate(windmill);
        } else {
            template = `
            <tr class="customerrow>
            <td colspan="8">Nothing to show</td>
            </tr>`;
        }
        this.view.message(template);
    }

    showAllWindmills() {
        let template = "";
        for (const windmill of this.model.windmillList.allWindmills()) {
            template += this.buildTemplate(windmill);
        }

        this.view.message(template);
    }

    newWindmill(windmill) {
        const doesWindmillAlreadyExist = this.model.windmillList.getWindmill(windmill.idNumber);

        if (doesWindmillAlreadyExist === null) {
            this.model.windmillList.addWindmill(windmill.idNumber, windmill.location, windmill.brand, windmill.setupYear, windmill.mwLastYear);
            this.view.snackbar("The windmill was saved");
            this.showAllWindmills();
        } else {
            this.view.snackbar("The windmill already exist");
        }
    }

    deleteWindmill (id) {
        this.model.windmillList.deleteWindmill(id);
        this.view.snackbar("The windmill was deleted!");
    }
}