const topBarCenterText = `KN4RUW - FAIRHOPE, AL`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  
  ["2196F3", "WINDY", "https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=%C2%B0F&metricWind=default&zoom=5&overlay=radar&product=radar&level=surface&lat=31.062&lon=-90.956", "1"],
  [
    "2196F3",
    "PLANES",
    "https://globe.adsbexchange.com/",
    "1",
  ],
  [
    "2196F3",
    "RADAR",
    "https://weather.cod.edu/satrad/nexrad/?parms=MOB-N0B-0-00-000",
    "1",
    "L"
  ],
  ["2196F3", "DX CLUSTER", "https://www.nnvl.noaa.gov/NESDIS/site/videos/GOES/USlamWV-sector.mp4?_ga=2.214018519.1525759656.1717948358-643504581.1714231811", "1","R"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R",
  ],
  
  ["2196F3", "WATER VAPOR", "https://cw3e.ucsd.edu/ivt_iwv_namerica/", '1'],

  ["2196F3", "CURRENTS", "https://earth.nullschool.net/#current/ocean/surface/currents/orthographic=-71.31,25.84,793/loc=-68.845,31.7940", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "file:///X:/MAPS/WXTOOLS.html",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  ["", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/Sandwich/GOES16-CONUS-Sandwich-625x375.gif",
  ],
  [
    "",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/CONUS/GEOCOLOR/GOES16-CONUS-GEOCOLOR-625x375.gif",
  ],
  ["10M PROPAGATION", "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/CAR/Sandwich/GOES16-CAR-Sandwich-1000x1000.gif"],
  [
    "",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/SP/Sandwich/GOES16-SP-Sandwich-600x600.gif",
  ],
  [
    "",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/GM/Sandwich/GOES16-GM-Sandwich-1000x1000.gif", ".8",
  ],
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
  ],
  [
    "WARNINGS",
    "https://climate.cod.edu/data/satellite/regional/southcentral/current/southcentral.ww.gif",
  ],
  ["24HR FORECAST", "https://www.wpc.ncep.noaa.gov/noaa/noaad1.gif"],
  [
    "48HR FORECAST",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad2.gif",
  ],
  [
    "72HR FORECAST",
    "https://www.wpc.ncep.noaa.gov/noaa/noaad3.gif",
  ],

  [
    "ISS & RS-44 POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909",
  ],
 
];
