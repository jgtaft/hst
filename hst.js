var svg = d3.select("#hst").append("svg")
  .attr("height", 700)
  .attr("width", 700);

var hsts = ["0,0 30,0 0,30", "30,0 30,30 0,30", "0,0 30,0 30,30", "0,0 30,30 0,30"];

function showHST(n){
  svg.selectAll("polygon").remove();

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
  svg.selectAll("polygon").remove();
  svg.selectAll("g").remove();
  //need even number size
  if(n%2 !=0){ n=n-1; }

  var hstRotArr = [];
  for (i=1; i<(n/2)+1; i++){
    for (j=1; j<(n/2)+1; j++){
      var obj = {x: i * 30, y: j*30, b: hsts[Math.floor(Math.random()*Math.floor(4))]};
      hstRotArr.push(obj);
    }
  }

  var g1 = svg.append("g");
  var hst1 = g1.selectAll("polygon").data(hstRotArr);
  hst1.enter().append("polygon")
    .merge(hst1)
    .attr("points", function(d){return d.b; })
    .attr("transform", function(d){
      return "translate(" + d.x + "," + d.y + ")";
    })
    .attr("fill", "black");

  var g2 = svg.append("g");
  var hst2 = g2.selectAll("polygon").data(hstRotArr);
  hst2.enter().append("polygon")
    .merge(hst2)
    .attr("points", function(d){return d.b; })
    .attr("transform", function(d){
      return "translate(" + d.x + "," + d.y + ")";
    })
    .attr("fill", "black");

  g2.attr("transform", "translate("+n*30+","+0+") rotate(90 30 30)");

  var g3 = svg.append("g");
  var hst3 = g3.selectAll("polygon").data(hstRotArr);
  hst3.enter().append("polygon")
    .merge(hst3)
    .attr("points", function(d){return d.b; })
    .attr("transform", function(d){
      return "translate(" + d.x + "," + d.y + ")";
    })
    .attr("fill", "black");

  g3.attr("transform", "translate("+n*30+","+n*30+") rotate(180 30 30)");

  var g4 = svg.append("g");
  var hst4 = g4.selectAll("polygon").data(hstRotArr);
  hst4.enter().append("polygon")
    .merge(hst4)
    .attr("points", function(d){return d.b; })
    .attr("transform", function(d){
      return "translate(" + d.x + "," + d.y + ")";
    })
    .attr("fill", "black");

  g4.attr("transform", "translate("+0+","+n*30+") rotate(-90 30 30)");

}

function showHSTref(n){
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

  var g2 = svg.append("g");
  var hst2 = g2.selectAll("polygon").data(hstRefArr);
  hst2.enter().append("polygon")
    .merge(hst2)
    .attr("points", function(d){return d.b; })
    .attr("transform", function(d){
      return "translate(" + d.x + "," + d.y + ")";
    })
    .attr("fill", "black");

  g2.attr("transform", "translate("+((30*n)+60)+","+0+") scale(-1,1)");

  var g3 = svg.append("g");
  var hst3 = g3.selectAll("polygon").data(hstRefArr);
  hst3.enter().append("polygon")
    .merge(hst3)
    .attr("points", function(d){return d.b; })
    .attr("transform", function(d){
      return "translate(" + d.x + "," + d.y + ")";
    })
    .attr("fill", "black");

  g3.attr("transform", "translate("+((30*n)+60)+","+((30*n)+60)+") scale(-1,-1)");

  var g4 = svg.append("g");
  var hst4 = g4.selectAll("polygon").data(hstRefArr);
  hst4.enter().append("polygon")
    .merge(hst4)
    .attr("points", function(d){return d.b; })
    .attr("transform", function(d){
      return "translate(" + d.x + "," + d.y + ")";
    })
    .attr("fill", "black");

  g4.attr("transform", "translate("+0+","+((30*n)+60)+") scale(1,-1)");

}

showHST(4,4);
