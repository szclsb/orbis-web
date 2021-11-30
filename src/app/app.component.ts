import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'orbis-web';

  @ViewChild('glCanvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement> | undefined;

  private gl: WebGLRenderingContext | undefined | null;

  ngOnInit(): void {
    this.gl = this.canvas?.nativeElement.getContext("webgl");
    if (!this.gl) {
      alert("Unable to initialize WebGL. Your browser or machine may not support it.");
      return;
    }

    // Set clear color to black, fully opaque
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }

  start(): void {


    //this.render()
  }

  render(): void {


    requestAnimationFrame(() => this.render());
  }
}
