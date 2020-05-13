function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)})` : null;
  }

  function lightOrDark(color) {
    if(color !== null){
    let r, g, b, hsp;
   
    if (color.match(/^rgb/)) {

       
        color = color.match(/^rgb?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        
        r = color[1];
        g = color[2];
        b = color[3];
    } 
    else {
        
      
        color = +("0x" + color.slice(1).replace( 
        color.length < 5 && /./g, '$&$&'));

        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;
    }
  
    hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
    );

    if (hsp>127.5) {

        return "black";
    } 
    else {

        return "white";
    }}
}
const randomColor = () => {
    let x = "#"+Math.floor(Math.random()*16777215).toString(16);
    while(x.length !== 7){
        x = "#"+Math.floor(Math.random()*16777215).toString(16);
    }
    return x;
}

export const generateScheme = () => {
    const color = randomColor();
    const text = lightOrDark(hexToRgb(color));
    return {backgroundColor : color,color:text}
}