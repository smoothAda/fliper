const colorHexCodes = [
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#000000", // Black
    "#FFFFFF", // White
    "#808080", // Gray
    "#800000", // Maroon
    "#008000", // Olive
    "#000080", // Navy
    "#FFA07A", // Light Salmon
    "#00CED1", // Dark Turquoise
    "#800080", // Purple
    "#6A5ACD", // Slate Blue
    "#FF4500", // Orange Red
    "#2E8B57", // Sea Green
    "#9932CC", // Dark Orchid
    "#8A2BE2", // Blue Violet
    "#DC143C", // Crimson
    "#00FF7F", // Spring Green
    "#4169E1", // Royal Blue
    "#7FFF00", // Chartreuse
    "#B22222", // Fire Brick
    "#228B22", // Forest Green
    "#4B0082", // Indigo
    "#800000", // Maroon
    "#008080", // Teal
    "#483D8B", // Dark Slate Blue
    "#8B4513", // Saddle Brown
    "#2F4F4F", // Dark Slate Gray
    "#556B2F", // Dark Olive Green
    "#00FF00", // Lime
    "#B8860B", // Dark Goldenrod
    "#DA70D6", // Orchid
    "#DDA0DD", // Plum
    "#5F9EA0", // Cadet Blue
    "#FF1493", // Deep Pink
    "#32CD32", // Lime Green
    "#1E90FF", // Dodger Blue
    "#D2691E", // Chocolate
    "#808000", // Olive
    "#A0522D", // Sienna
    "#BC8F8F", // Rosy Brown
    "#9400D3", // Dark Violet
    "#9932CC", // Dark Orchid
    "#A0522D", // Sienna
    "#D2B48C", // Tan
    "#8B0000", // Dark Red
    "#8A2BE2", // Blue Violet
    "#4B0082", // Indigo
    "#556B2F", // Dark Olive Green
    "#FF00FF", // Magenta
    "#00FFFF", // Aqua
    "#FFD700", // Gold
    "#9ACD32", // Yellow Green
  ];

document.getElementById("btn").onclick=function clicked() {

 const num= Math.floor(Math.random() * colorHexCodes.length +0);

 document.getElementById("colorcode").textContent=colorHexCodes[num];
 let colr=colorHexCodes[num];
let boddy= document.getElementById("mainbody");
document.body.style.backgroundColor=colr;
}

//document.getElementById("mainbody").body.style.backgroundColor = colr;
