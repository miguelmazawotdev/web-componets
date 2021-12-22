import { Component, h, Prop } from '@stencil/core';
// import { format, formatTitle } from '../../../utils/utils';
// import { ResourceVm } from '../../../model/login';

@Component({
  tag: 'login1-component',
  styleUrl: 'login1-component.scss',
  shadow: true,
})
export class Login1Component {

  // @Prop() resourceVm: ResourceVm;
  @Prop() username: string = 'username';
  @Prop() password: string = 'password';
  @Prop() usernameIcon: string;
  @Prop() buttonTitle: string = 'Login';
  @Prop() socialTitle: string = 'Login';
  @Prop() titulo: string = 'Login';
  @Prop() boton: string = 'Login';

  // private getTitle(): string {
    // return format(this.username, this.password, this.boton);
  // }

  render() {
    return (
      // <div>hi {this.getTitle()}</div>
      <div class='container'>
        <div class='screen'>
          <div class='screen__content'>
            <form class='login'>

              <h1>{this.titulo}</h1>

              <div class='login__field'>
                <i class='login__icon fas fa-user' />
                <input type="text" class='login__input' placeholder={this.username} />
              </div>

              <div class='login__field'>
                <i class='login__icon fas fa-user'/>
                <input type='password' class='login__input' placeholder={this.password} />
              </div>

              <button class='button login__submit'>
                <span class='button__text' >{this.boton}</span>
                <i class='button__icon' />
              </button>

            </form>

            <div class='social-login'>

              <h3> {this.socialTitle} </h3>

              <div class='social-icons'>
                <a href='#' class='social-login__icon fab fa-instagram'/>
                <a href='#' class='social-login__icon fab fa-facebook'/>
                <a href='#' class='social-login__icon fab fa-twitter'/>
              </div>

            </div>


            <div class="screen__background">
              <span class='screen__background__shape screen__background__shape4'/>
              <span class='screen__background__shape screen__background__shape3'/>
              <span class='screen__background__shape screen__background__shape2'/>
              <span class='screen__background__shape screen__background__shape1' />
            </div>

          </div>
        </div>
      </div>
    );
  }

}
