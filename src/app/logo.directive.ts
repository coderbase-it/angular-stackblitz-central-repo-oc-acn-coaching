import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Category } from './category.enum';

@Directive({
  selector: '[appLogo]'
})
export class LogoDirective implements AfterViewInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    const category = this.elRef.nativeElement.textContent;
    const img = this.renderer.createElement('img');
    this.renderer.setAttribute(img, 'src', this.switchLogo(category));
    this.renderer.setStyle(img, 'margin-left', '10px');
    this.renderer.appendChild(this.elRef.nativeElement, img);
  }

  private switchLogo(category: Category) {
    switch (category) {
      case Category.ANGULAR:
        return "data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 80 80' style='enable-background:new 0 0 80 80;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23DD0031;%7D .st1%7Bfill:%23C3002F;%7D .st2%7Bfill:%23FFFFFF;%7D %3C/style%3E %3Cg%3E %3Cpolygon class='st0' points='40,0 40,0 40,0 2.8,13.3 8.4,62.5 40,80 40,80 40,80 71.6,62.5 77.2,13.3 '/%3E %3Cpolygon class='st1' points='40,0 40,8.9 40,8.8 40,49.4 40,49.4 40,80 40,80 71.6,62.5 77.2,13.3 '/%3E %3Cpath class='st2' d='M40,8.8L16.7,61l0,0h8.7l0,0l4.7-11.7h19.8L54.5,61l0,0h8.7l0,0L40,8.8L40,8.8L40,8.8L40,8.8L40,8.8z M46.8,42.2H33.2L40,25.8L46.8,42.2z'/%3E %3C/g%3E %3C/svg%3E";

      case Category.REACT:
        return "data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_2_1_' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 80 80' style='enable-background:new 0 0 80 80;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%2361DAFB;%7D %3C/style%3E %3Cg%3E %3Cpath class='st0' d='M80,40c0-5.3-6.6-10.3-16.8-13.4c2.3-10.4,1.3-18.6-3.3-21.3c-1.1-0.6-2.3-0.9-3.7-0.9V8 c0.8,0,1.4,0.1,1.9,0.4c2.2,1.3,3.2,6.1,2.4,12.3c-0.2,1.5-0.5,3.1-0.8,4.8c-3.2-0.8-6.7-1.4-10.4-1.8c-2.2-3-4.5-5.8-6.8-8.2 C47.9,10.7,52.9,8,56.3,8V4.4l0,0c-4.5,0-10.4,3.2-16.3,8.7C34,7.6,28.2,4.4,23.7,4.4v3.6c3.4,0,8.4,2.7,13.7,7.6 c-2.3,2.4-4.6,5.1-6.7,8.1c-3.7,0.4-7.2,1-10.4,1.8c-0.4-1.6-0.7-3.2-0.8-4.7c-0.8-6.2,0.2-11.1,2.4-12.4c0.5-0.3,1.1-0.4,1.9-0.4 V4.5l0,0c-1.4,0-2.6,0.3-3.7,0.9c-4.6,2.6-5.6,10.9-3.2,21.2C6.6,29.7,0,34.7,0,40c0,5.3,6.6,10.3,16.8,13.4 c-2.3,10.4-1.3,18.6,3.3,21.3c1.1,0.6,2.3,0.9,3.7,0.9c4.5,0,10.4-3.2,16.3-8.7c5.9,5.5,11.8,8.7,16.3,8.7c1.4,0,2.6-0.3,3.7-0.9 c4.6-2.6,5.6-10.9,3.2-21.2C73.4,50.3,80,45.3,80,40z M58.8,29.1c-0.6,2.1-1.4,4.3-2.2,6.4c-0.7-1.3-1.4-2.6-2.1-3.9 c-0.8-1.3-1.5-2.6-2.3-3.8C54.4,28.2,56.6,28.6,58.8,29.1z M51.3,46.5c-1.3,2.2-2.6,4.3-3.9,6.2c-2.4,0.2-4.9,0.3-7.4,0.3 c-2.5,0-4.9-0.1-7.3-0.3c-1.4-1.9-2.7-4-3.9-6.2c-1.2-2.1-2.4-4.3-3.4-6.5c1-2.2,2.2-4.4,3.4-6.5c1.3-2.2,2.6-4.3,3.9-6.2 c2.4-0.2,4.9-0.3,7.4-0.3c2.5,0,4.9,0.1,7.3,0.3c1.4,1.9,2.7,4,3.9,6.2c1.2,2.1,2.4,4.3,3.4,6.5C53.7,42.2,52.5,44.4,51.3,46.5z M56.6,44.4c0.9,2.2,1.6,4.4,2.3,6.5c-2.1,0.5-4.4,1-6.7,1.3c0.8-1.3,1.6-2.5,2.3-3.9C55.2,47,55.9,45.7,56.6,44.4z M40,61.8 c-1.5-1.6-3-3.3-4.5-5.2c1.5,0.1,3,0.1,4.5,0.1c1.5,0,3,0,4.5-0.1C43.1,58.5,41.5,60.2,40,61.8z M27.9,52.2 c-2.3-0.3-4.5-0.8-6.7-1.3c0.6-2.1,1.4-4.3,2.2-6.4c0.7,1.3,1.4,2.6,2.1,3.9C26.3,49.7,27.1,50.9,27.9,52.2z M40,18.2 c1.5,1.6,3,3.3,4.5,5.2c-1.5-0.1-3-0.1-4.5-0.1c-1.5,0-3,0-4.5,0.1C36.9,21.5,38.5,19.8,40,18.2z M27.9,27.8 c-0.8,1.3-1.6,2.5-2.3,3.9c-0.8,1.3-1.5,2.6-2.1,3.9c-0.9-2.2-1.6-4.4-2.3-6.5C23.3,28.6,25.6,28.2,27.9,27.8z M13.1,48.3 c-5.8-2.5-9.5-5.7-9.5-8.3c0-2.6,3.7-5.8,9.5-8.3c1.4-0.6,2.9-1.1,4.5-1.6c0.9,3.2,2.2,6.5,3.7,9.9c-1.5,3.4-2.7,6.7-3.6,9.9 C16.1,49.4,14.6,48.9,13.1,48.3z M21.9,71.6c-2.2-1.3-3.2-6.1-2.4-12.3c0.2-1.5,0.5-3.1,0.8-4.8c3.2,0.8,6.7,1.4,10.4,1.8 c2.2,3,4.5,5.8,6.8,8.2C32.1,69.3,27.1,72,23.8,72C23,72,22.4,71.8,21.9,71.6z M60.6,59.1c0.8,6.2-0.2,11.1-2.4,12.4 c-0.5,0.3-1.1,0.4-1.9,0.4c-3.4,0-8.4-2.7-13.7-7.6c2.3-2.4,4.6-5.1,6.7-8.1c3.7-0.4,7.2-1,10.4-1.8C60.1,56,60.4,57.6,60.6,59.1z M66.9,48.3c-1.4,0.6-2.9,1.1-4.5,1.6c-0.9-3.2-2.2-6.5-3.7-9.9c1.5-3.4,2.7-6.7,3.6-9.9c1.6,0.5,3.1,1.1,4.6,1.7 c5.8,2.5,9.5,5.7,9.5,8.3C76.4,42.6,72.6,45.8,66.9,48.3z'/%3E %3Cpath class='st0' d='M23.7,4.4L23.7,4.4L23.7,4.4z'/%3E %3Ccircle class='st0' cx='40' cy='40' r='7.5'/%3E %3Cpath class='st0' d='M56.2,4.4L56.2,4.4L56.2,4.4z'/%3E %3C/g%3E %3C/svg%3E";
      case Category.RXJS:
        return "data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 80 80' style='enable-background:new 0 0 80 80;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23FF0090;%7D .st1%7Bfill:url(%23SVGID_1_);%7D .st2%7Bfill:url(%23SVGID_2_);%7D .st3%7Bfill:url(%23SVGID_3_);%7D .st4%7Bfill:url(%23SVGID_4_);%7D %3C/style%3E %3Cg%3E %3Cpath class='st0' d='M5.2,50.6C1.1,28.8,12,7.7,36.8,4.9c-3.4-3.7-8.1-3.7-10.3-3.2c-3.8,1.2-3.7,3.7-8,6.9 C14.3,11,12.1,9.1,9,11.7C5.9,14.2,8,20,6.7,21.1c-1.3,2.3-5.3,4.3-6.1,7.1c-0.6,3.6,1.6,6.2,1.6,9.4c0.3,2.6-2.6,4.1-2.2,6.2 c1.2,3.4,3.6,5.5,4.7,6.5C5,50.4,5.3,50.8,5.2,50.6L5.2,50.6z'/%3E %3CradialGradient id='SVGID_1_' cx='-257.5799' cy='338.7329' r='0.2828' gradientTransform='matrix(213.2106 0 0 -152.5193 54974.8477 51686.4219)' gradientUnits='userSpaceOnUse'%3E %3Cstop offset='0' style='stop-color:%23F80090'/%3E %3Cstop offset='1' style='stop-color:%234D008E'/%3E %3C/radialGradient%3E %3Cpath class='st1' d='M49.5,20.4c-0.9,0-1.6-0.7-1.6-1.6s0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6S50.4,20.4,49.5,20.4L49.5,20.4z M6.2,53C2.2,34,14.4,18.2,38,26c13.9,8.1,31.3,7.6,32.1,2.3C72.1,22,61.3,9.1,45.2,5.7C13.2-0.5-4,34,6.2,53L6.2,53z'/%3E %3CradialGradient id='SVGID_2_' cx='-257.75' cy='339.2935' r='0.2572' gradientTransform='matrix(237.6463 0 0 -179.7698 61309.957 61019.1484)' gradientUnits='userSpaceOnUse'%3E %3Cstop offset='0' style='stop-color:%2357008E'/%3E %3Cstop offset='0.2917' style='stop-color:%235C008E'/%3E %3Cstop offset='1' style='stop-color:%23F80090'/%3E %3C/radialGradient%3E %3Cpath class='st2' d='M58.6,55.1c4.7,0.5,9.2-0.6,13.4-4c-6.3,7-14.2,10.6-23.2,11.5c4.3,3.7,8.5,5.3,12.5,4.6 c-11.1,3.1-20.4-0.3-31.6-11.5c-0.6,3,2.6,7.7,5.9,10.7C16.4,58.1,14.7,32.3,38,25.9C13.9,14.3,0.2,36.9,6.9,55.4 C13.5,69.6,31,80.6,50.2,78.2c9.3-1.1,23.2-7.6,28.9-22.8c-4,3.6-11.2,6.7-14.4,7c10.8-5.4,16.6-14.6,15-27.1 c-2.2,5.3-5.2,9.4-8.9,12.2c7.9-12.2,6.5-18.6,0.7-25.5C75.7,33.4,70.3,46,58.6,55.1L58.6,55.1z'/%3E %3ClinearGradient id='SVGID_3_' gradientUnits='userSpaceOnUse' x1='-256.367' y1='338.1305' x2='-256.1703' y2='337.8669' gradientTransform='matrix(75.1919 0 0 -59.9288 19310.2266 20319.6035)'%3E %3Cstop offset='0' style='stop-color:%23F70090'/%3E %3Cstop offset='0.6697' style='stop-color:%23E50090'/%3E %3Cstop offset='0.8271' style='stop-color:%23D6008F;stop-opacity:0.2'/%3E %3Cstop offset='1' style='stop-color:%23C10090;stop-opacity:0'/%3E %3C/linearGradient%3E %3Cpath class='st3' d='M53,68.2c-0.8-0.2,1.9,1.1-3.3-0.3c-5.2-1.4-10.5-2.7-20.1-12.3c-0.6,3,2.6,7.7,5.9,10.7 c8.9,6.2,2.8,3.3,16.4,8C53,72.2,53,70.3,53,68.2L53,68.2z'/%3E %3ClinearGradient id='SVGID_4_' gradientUnits='userSpaceOnUse' x1='-254.9168' y1='332.1686' x2='-254.9812' y2='332.236' gradientTransform='matrix(54.248 0 0 -29.6196 13861.3721 9856.4775)'%3E %3Cstop offset='0' style='stop-color:%23B2008F;stop-opacity:0.1513'/%3E %3Cstop offset='0.4004' style='stop-color:%23F70090;stop-opacity:0.4'/%3E %3Cstop offset='0.649' style='stop-color:%23F60090;stop-opacity:0.8917'/%3E %3Cstop offset='1' style='stop-color:%23FF0090'/%3E %3C/linearGradient%3E %3Cpath class='st4' d='M35.8,19.5c0,0,1.2-1.7,1.6-2.5c0.6-1,1.4-2.7,1.4-2.7s-9.1-3-11.3-3.3c-6.9,1.8-6.9,4.7-3.1,9.1 C24.9,20.6,35.8,19.5,35.8,19.5L35.8,19.5z'/%3E %3C/g%3E %3C/svg%3E";
      case Category.TYPESCRIPT:
        return "data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 80 80' style='enable-background:new 0 0 80 80;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23007ACC;%7D %3C/style%3E %3Cg transform='translate(0.000000,630.000000) scale(0.100000,-0.100000)'%3E %3Cpath class='st0' d='M0,5900v-400h400h400v400v400H400H0V5900z M644.7,5931.9c20.3-5.1,35.8-14.1,50-28.8 c7.4-7.9,18.3-22.2,19.2-25.7c0.3-1-34.5-24.4-55.6-37.5c-0.8-0.5-3.8,2.8-7.2,7.9c-10.3,15-21.1,21.5-37.6,22.6 c-24.3,1.7-39.9-11-39.7-32.3c0-6.2,0.9-9.9,3.4-15c5.3-11,15.2-17.7,46.3-31.1c57.3-24.6,81.8-40.9,97-64 c17-25.8,20.8-66.9,9.3-97.5c-12.7-33.3-44.2-55.9-88.5-63.4c-13.7-2.4-46.2-2-61,0.6c-32.1,5.7-62.6,21.6-81.4,42.4 c-7.4,8.1-21.7,29.3-20.8,30.9c0.4,0.5,3.7,2.5,7.4,4.7c3.6,2,17,9.8,29.7,17.1l23,13.3l4.8-7.1c6.7-10.3,21.5-24.4,30.3-29.1 c25.5-13.5,60.6-11.6,77.8,3.9c7.4,6.7,10.4,13.7,10.4,24c0,9.3-1.1,13.3-6,20.3c-6.2,8.9-18.9,16.4-55,32 c-41.3,17.8-59,28.8-75.3,46.3c-9.4,10.2-18.3,26.4-22,40c-3,11.3-3.8,39.6-1.4,51c8.5,39.9,38.6,67.7,82,75.9 C598.1,5936.3,630.9,5935.3,644.7,5931.9z M456.9,5898.5l0.3-32.8h-52.1H353v-147.9v-147.9h-36.8h-36.8v147.9v147.9h-52.1h-52.1 v32.1c0,17.8,0.4,32.6,0.9,33c0.4,0.5,63.7,0.8,140.6,0.6l139.8-0.4L456.9,5898.5z'/%3E %3C/g%3E %3C/svg%3E";

      case Category.JAVASCRIPT:
        return 'https://c.staticblitz.com/assets/media/client/homepage/images/stack_icons/js-8608e5f34d31caa152040cb3b7555ffb.png';

      case Category.IONIC:
        return "data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 80 80' style='enable-background:new 0 0 80 80;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23478AFF;%7D %3C/style%3E %3Ctitle%3Eionic-logo-landscape%3C/title%3E %3Cpath class='st0' d='M40,21.8c-10.1,0-18.2,8.2-18.2,18.2c0,10.1,8.2,18.2,18.2,18.2S58.2,50.1,58.2,40l0,0 C58.2,30,50.1,21.8,40,21.8z'/%3E %3Ccircle class='st0' cx='66.2' cy='15.1' r='8.3'/%3E %3Cpath class='st0' d='M76.4,23.4L76,22.7l-0.5,0.6c-1.4,1.5-3.1,2.7-5,3.4L69.9,27l0.2,0.5c6.9,16.7-1,35.8-17.6,42.7 c-16.7,6.9-35.8-1-42.7-17.6s1-35.8,17.6-42.7C36,6.3,45.6,6.6,54,10.5l0.5,0.2l0.2-0.5c0.8-1.9,2.1-3.6,3.7-4.8l0.7-0.5l-0.7-0.4 C52.7,1.5,46.4,0,40,0C17.9,0,0,17.9,0,40s17.9,40,40,40c22.1,0,40-17.9,40-40C80,34.3,78.8,28.6,76.4,23.4L76.4,23.4z'/%3E %3C/svg%3E";

      case Category.SVELTE:
        return "data:image/svg+xml,%3C?xml version='1.0' encoding='utf-8'?%3E %3C!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E %3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 80 80' style='enable-background:new 0 0 80 80;' xml:space='preserve'%3E %3Cstyle type='text/css'%3E .st0%7Bfill:%23FF3E00;%7D .st1%7Bfill:%23FFFFFF;%7D %3C/style%3E %3Cpath class='st0' d='M69,10.6C61.6,0,46.9-3.2,36.3,3.6L17.7,15.4c-5.1,3.2-8.6,8.4-9.7,14.3c-0.9,4.9-0.1,10,2.2,14.5 c-1.6,2.4-2.7,5.1-3.2,8C6,58.2,7.4,64.4,11,69.4c7.5,10.6,22.1,13.8,32.7,7l18.6-11.9c5.1-3.2,8.6-8.4,9.7-14.3 c0.9-4.9,0.1-10-2.2-14.5c1.6-2.4,2.7-5.1,3.2-8C74,21.8,72.6,15.6,69,10.6'/%3E %3Cpath class='st1' d='M34.7,69.6c-5.8,1.5-12-0.8-15.4-5.7c-2.1-2.9-2.9-6.5-2.3-10.1c0.1-0.6,0.2-1.1,0.4-1.7l0.3-1l0.9,0.7 c2.1,1.6,4.5,2.8,7.1,3.5l0.7,0.2l-0.1,0.7c-0.1,1,0.2,1.9,0.7,2.7c1,1.5,2.9,2.2,4.7,1.8c0.4-0.1,0.8-0.3,1.1-0.5l18.1-11.5 c0.9-0.6,1.5-1.5,1.7-2.5c0.2-1.1,0-2.1-0.7-3c-1-1.5-2.9-2.2-4.7-1.7c-0.4,0.1-0.8,0.3-1.1,0.5l-6.9,4.4c-1.1,0.7-2.4,1.3-3.7,1.6 c-5.8,1.5-12-0.8-15.4-5.7c-2.1-2.9-2.9-6.5-2.3-10.1c0.6-3.5,2.7-6.5,5.6-8.4l18.1-11.5c1.1-0.7,2.4-1.3,3.7-1.6 c5.8-1.5,12,0.8,15.4,5.7c2.1,2.9,2.9,6.5,2.3,10.1c-0.1,0.6-0.2,1.1-0.4,1.7l-0.3,1l-0.9-0.7c-2.1-1.6-4.5-2.8-7.1-3.5l-0.7-0.2 l0.1-0.7c0.1-1-0.2-1.9-0.7-2.7c-1-1.5-2.9-2.2-4.7-1.7c-0.4,0.1-0.8,0.3-1.1,0.5L29.1,31.5C28.2,32,27.5,33,27.4,34 c-0.2,1.1,0,2.2,0.7,3c1,1.5,2.9,2.2,4.7,1.7c0.4-0.1,0.8-0.3,1.1-0.5l6.9-4.4c1.1-0.7,2.4-1.3,3.7-1.6c5.8-1.5,12,0.8,15.4,5.7 c2.1,2.9,2.9,6.5,2.3,10.1c-0.6,3.5-2.7,6.5-5.6,8.4L38.4,67.9C37.2,68.7,36,69.2,34.7,69.6'/%3E %3C/svg%3E";

      case Category.ANGULARJS:
        return 'https://c.staticblitz.com/assets/media/client/homepage/images/stack_icons/angularjs-31b91da342f0e4234c1d0526a4949c11.png';
      case Category.IGNITE_UI:
        return 'https://c.staticblitz.com/assets/media/client/homepage/images/stack_icons/ignite-ui-cd0c4ecd59a57a1a59a17a4d7bcc43b9.png';
      case Category.KENDO_REACT:
        return 'https://c.staticblitz.com/assets/media/client/homepage/images/stack_icons/kendo-6a0c4821af08d43823ed93f416780f36.png';

      case Category.REACT_TS:
        return 'https://c.staticblitz.com/assets/media/client/homepage/images/stack_icons/react-ts-8ff03c3af545dbf56c6adc1e9e145646.png';

      case Category.AKITA:
        return 'https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LDIcOEJiLYk8yWho34E%2Favatar.png?generation=1531386974984915&alt=media';
      case Category.NGRX:
        return 'https://ngrx.io/assets/images/badge.svg';
      case Category.NGXS:
        return 'https://avatars2.githubusercontent.com/u/37132593?s=280&v=4';
      case Category.ARTICLE:
        return 'https://blog.jmtalarn.com/logos/logo.black.svg';
      case Category.SITE:
        return 'https://image.flaticon.com/icons/png/512/117/117965.png';
      case Category.GITHUB:
        return 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg==';
      default:
        return 'https://www.ffe.com/var/ezwebin_site/storage/images/media/images/logo-et-visuels-divers/mails/lien-mail/404531-1-fre-FR/Lien-mail_imagelarge.png';
    }
  }
}
