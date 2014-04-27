package 
{
    import flash.events.Event;
    import flash.events.MouseEvent;
    import flash.display.Sprite;

    import com.greensock.TweenMax;
    import com.greensock.easing.Elastic;
    
    /**
     * @author victorpotasso
     */
     
    [SWF(width=500, height=500, backgroundColor='#FFFFFF', frameRate=30)]
    public class Main extends Sprite 
    {
        private var asset : Sprite;

        public function Main() 
        {
            addEventListener(Event.ADDED_TO_STAGE, create);
        }

        private function create(evt : Event) : void 
        {
            removeEventListener(Event.ADDED_TO_STAGE, create);
            
            asset = new Sprite();
            asset.graphics.beginFill(0xFF794B);
            asset.graphics.drawCircle(225, 225, 225);
            asset.graphics.endFill();
            addChild(asset);

            asset.addEventListener(MouseEvent.MOUSE_OVER, over);
            asset.addEventListener(MouseEvent.MOUSE_OUT, out);
        }

        private function over(evt:MouseEvent) : void
        {
            TweenMax.to(evt.target, .8, {scaleX:1.1, scaleY:1.1, alpha:.6, ease:Elastic.easeOut});
        }

        private function out(evt:MouseEvent) : void
        {
            TweenMax.to(evt.target, .5, {scaleX:1, scaleY:1, alpha:1, ease:Elastic.easeOut});
        }
    }                                                                            
}                                      
