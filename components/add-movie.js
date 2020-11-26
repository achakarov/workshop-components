import { html, render } from 'https://unpkg.com/lit-html?module';
import { addMovie } from '../services/movieService.js';

const template = (ctx) => html`
<form class="text-center border border-light p-5" action="#" method="" @submit=${ctx.onAddMovie}>
    <h1>Add Movie</h1>
    <div class="form-group">
        <label for="title">Movie Title</label>
        <input type="text" class="form-control" placeholder="Title" name="title" value="">
    </div>
    <div class="form-group">
        <label for="description">Movie Description</label>
        <textarea class="form-control" placeholder="Description" name="description"></textarea>
    </div>
    <div class="form-group">
        <label for="imageUrl">Image url</label>
        <input type="text" class="form-control" placeholder="Image Url" name="imageUrl" value="">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
`;

export default class AddMovie extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        this.render();
    }

    onAddMovie(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');

        //TODO check if any of the above is empty string

        addMovie({
            title,
            description,
            imageUrl,
        })
            .then(res => {
                this.render();
            });
    }


    render() {
        render(template(this), this, { eventContext: this });
    }
}




