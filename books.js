// Create a class for the element
class Book extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const title    = this.getAttribute('title');
        const subtitle = this.getAttribute('subtitle');
        const author   = this.getAttribute('author');
        const publisher = this.getAttribute('publisher');
        const description = this.getAttribute('description');
        const isbn = this.getAttribute('isbn');
        const published = this.getAttribute('published');

        this.innerHTML = `
            <div class="card">
              <h5 class="card-header">${title}</h5>
              <div class="card-body">
                <h5>${subtitle}</h5>
                    <p class="card-text">
                    <table class="table">
                        <tr>
                            <td class="text-success font-weight-bold">Description:</td>
                            <td>${title}</td>
                        </tr>
                        <tr>
                            <td class="text-success font-weight-bold">Address:</td>
                            <td>${subtitle}</td>
                        </tr>
                        <tr>
                            <td class="text-success font-weight-bold">Project No:</td>
                            <td>${isbn}</td>
                        </tr>
                        <tr>
                            <td class="text-success font-weight-bold">Client:</td>
                            <td>${publisher}</td>
                        </tr>
                        <tr>
                            <td class="text-success font-weight-bold">Details:</td>
                            <td>${description}</td>
                        </tr>
                        <tr>
                            <td class="text-success font-weight-bold">Created:</td>
                            <td>${published}</td>
                        </tr>
                    </table>
                    </p>
              </div>
            </div>
        `;  
    }
}

// Define the new element
customElements.define('mit-book', Book);
