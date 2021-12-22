import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'login2-component',
  styleUrl: 'login2-component.scss',
  shadow: true,
})
export class Login2Component {

  @Event() login: EventEmitter;

  render(): any {
    return (
      <div class='prueba'>
        <h1>Prueba</h1>
      </div>
    );
  }

}
