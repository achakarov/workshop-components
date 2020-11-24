import { html, render } from 'https://unpkg.com/lit-html?module';
import { login } from '../services/authService.js';

const template = (ctx) => html`
<form class="text-center border border-light p-5" action="" method="" @submit=${ctx.onSubmit}>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" placeholder="Email" name="email" value="">
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" placeholder="Password" name="password" value="">
    </div>

    <button type="submit" class="btn btn-primary">Login</button>
</form>
`;


export default class Login extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    onSubmit(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let email = formData.get('email');
        let password = formData.get('password');

        login(email, password)
            .then(res => {
                notify('Successful Login!', 'success');
                // TODO redirect to homepage
            })
            .catch(err => {
                notify(err.message, 'error');
            });

    }

    render() {
        render(template(this), this, { eventContext: this });
    }
}






