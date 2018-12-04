var svg = d3.select("#hst").append("svg");
  // .attr("height", 700)
  // .attr("width", 700);

var hsts = ["0,0 30,0 0,30", "30,0 30,30 0,30", "0,0 30,0 30,30", "0,0 30,30 0,30"];

function showHST(n){
  svg.selectAll("polygon").remove();
  svg.attr("height", n*30 + 30).attr("width", n*30+30);

  var hstArr = [];
  for (i=0; i<n; i++){
    for (j=0; j<n; j++){
      var obj = {x: i * 30, y: j*30, b: hsts[Math.floor(Math.random()*Math.floor(4))]};
      hstArr.push(obj);
    }
  }

  var hst = svg.selectAll("polygon").data(hstArr);
  hst.enter().append("polygon")
    .merge(hst)
    .attr("points", function(d){return d.b; })
    .attr("transform", function(d){
      return "translate(" + d.x + "," + d.y + ")";
    })
    .attr("fill", "black");
}

function showHSTrot(n){
  svg.attr("height", n*30+30).attr("width", n*30+30);
  svg.selectAll("polygon").remove();
  svg.selectAll("g").remove();
  //need even number size
  if(n%2 !=0){ n=n-1; }

  var hstRotArr = [];
  for (i=1; i<(n/2)+1; i++){
    for (j=1; j<(n/2)+1; j++){
      var obj = {x: i*30, y: j*30, b: hsts[Math.floor(Math.random()*Math.floor(4))]};
      hstRotArr.push(obj);
    }
  }

  var t = (n*30)-30;

  var g1 = svg.append("g");
  var hst1 = g1.selectAll("polygon").data(hstRotArr);
  hst1.enter().append("polygon")
    .merge(hst1)
    .attr("points", function(d){return d.b; })
    .attr("transform", function(d){
      return "translate(" + d.x + "," + d.y + ")";
    })
    .attr("fill", "black");

  g1.attr("transform", "translate("+-30 + "," +-30+")");

  var g2 = svg.append("g");
  var hst2 = g2.selectAll("polygon").data(hstRotArr);
  hst2.enter().append("polygon")
    .merge(hst2)
    .attr("points", function(d){return d.b; })
    .attr("transform", function(d){
      return "translate(" + d.x + "," + d.y + ")";
    })
    .attr("fill", "black");

  g2.attr("transform", "translate("+t+","+-30+") rotate(90 30 30)");

  var g3 = svg.append("g");
  var hst3 = g3.selectAll("polygon").data(hstRotArr);
  hst3.enter().append("polygon")
    .merge(hst3)
    .attr("points", function(d){return d.b; })
    .attr("transform", function(d){
      return "translate(" + d.x + "," + d.y + ")";
    })
    .attr("fill", "black");

  g3.attr("transform", "translate("+t+","+t+") rotate(180 30 30)");

  var g4 = svg.append("g");
  var hst4 = g4.selectAll("polygon").data(hstRotArr);
  hst4.enter().append("polygon")
    .merge(hst4)
    .attr("points", function(d){return d.b; })
    .attr("transform", function(d){
      return "translate(" + d.x + "," + d.y + ")";
    })
    .attr("fill", "black");

  g4.attr("transform", "translate("+-30+","+t+") rotate(-90 30 30)");

}

function showHSTref(n){
  svg.attr("height", n*30+30).attr("width", n*30+30);
  svg.selectAll("polygon").remove();
  svg.selectAll("g").remove();
  //need even number size
  if(n%2 !=0){ n=n-1; }

  var hstRefArr = [];
  for (i=1; i<(n/2)+1; i++){
    for (j=1; j<(n/2)+1; j++){
      var obj = {x: i * 30, y: j*30, b: hsts[Math.floor(Math.random()*Math.floor(4))]};
      hstRefArr.push(obj);
    }
  }

  var g1 = svg.append("g");
  var hst1 = g1.selectAll("polygon").data(hstRefArr);
  hst1.enter().append("polygon")
    .merge(hst1)
    .attr("points", function(d){return d.b; })
    .attr("transform", function(d){
      return "translate(" + d.x + "," + d.y + ")";
    })
    .attr("fill", "black");

  g1.attr("transform", "translate("+-30+","+-30+")");

  var g2 = svg.append("g");
  var hst2 = g2.selectAll("polygon").data(hstRefArr);
  hst2.enter().append("polygon")
    .merge(hst2)
    .attr("points", function(d){return d.b; })
    .attr("transform", function(d){
      return "translate(" + d.x + "," + d.y + ")";
    })
    .attr("fill", "black");

  g2.attr("transform", "translate("+((30*n)+30)+","+-30+") scale(-1,1)");

  var g3 = svg.append("g");
  var hst3 = g3.selectAll("polygon").data(hstRefArr);
  hst3.enter().append("polygon")
    .merge(hst3)
    .attr("points", function(d){return d.b; })
    .attr("transform", function(d){
      return "translate(" + d.x + "," + d.y + ")";
    })
    .attr("fill", "black");

  g3.attr("transform", "translate("+((30*n)+30)+","+((30*n)+30)+") scale(-1,-1)");

  var g4 = svg.append("g");
  var hst4 = g4.selectAll("polygon").data(hstRefArr);
  hst4.enter().append("polygon")
    .merge(hst4)
    .attr("points", function(d){return d.b; })
    .attr("transform", function(d){
      return "translate(" + d.x + "," + d.y + ")";
    })
    .attr("fill", "black");

  g4.attr("transform", "translate("+-30+","+((30*n)+30)+") scale(1,-1)");

}

showHST(4,4);

function saveSvg(svgEl, name) {
    svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    var svgData = svgEl.outerHTML;
    var preface = '<?xml version="1.0" standalone="no"?>\r\n';
    var svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
