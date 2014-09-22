// How often do we want to call drawInfo?
var refreshInterval = 1000,
    infoContainer = document.getElementById('infoContainer');


/** Simple info draw function
 * Clears body.innnerHTML;
 * Draws table with information
 */
function drawInfo(){

  // Recall drawInfo with the refresh rate specified in refreshInterval
  setTimeout(drawInfo, refreshInterval);

  // Clear the currently drawn information
  infoContainer.innerHTML = '';

  // Get block information from backgroundPage global namespace
  var blocks = chrome.extension.getBackgroundPage().blocks || { ad: 'ERROR', ga: 'ERROR', all: 'ERROR' };

  // Actualy draw the information to body.innerHTML
  infoContainer.innerHTML =
    "<div><table>"
      + "<th>Block type</th> <th>Count</th>"
      + "<tr> <td>ad</td> <td class='countElement'><b>" + blocks.ad + "</b></td> </tr>"
      + "<tr> <td>ga</td> <td class='countElement'><b>" + blocks.ga + "</b></td> </tr> "
      + "<tr> <td>total</td> <td class='countElement'><b>" + blocks.all + "</b></td> </tr> "
    + "</table></div>";

}


drawInfo();
