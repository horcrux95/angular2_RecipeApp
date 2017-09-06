import { Directive,Renderer,OnInit,ElementRef,HostListener,HostBinding ,Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  
  @Input() defaultColor : string ='transparent';
  @Input() highlightColor : string ='blue';

  @HostBinding('style.backgroundColor') backgroundcolor : string=this.defaultColor;

  constructor(private elRef : ElementRef, private renderer : Renderer) { }

  ngOnInit(){
  }
  
  @HostListener('mouseenter') mouseover(eventData : Event){
    this.renderer.setElementStyle(this.elRef.nativeElement,'background-color',this.highlightColor);
  }

  @HostListener('mouseleave') mouseleave(eventData : Event){
    this.renderer.setElementStyle(this.elRef.nativeElement,'background-color',this.defaultColor);
  }
}
