function createElement(error, data) {
  if (error) {
    console.error(error);
  } else {
    const paragraph = document.createElement("p");
    const content = document.createTextNode(data);
    paragraph.appendChild(content);
    document.body.appendChild(paragraph);
  }
}

function queryWikipedia(callback) {
  const url =
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
  const xhttpreq = new XMLHttpRequest();
  xhttpreq.open("GET", url);
  xhttpreq.send();
  xhttpreq.onload = function () {
    if (xhttpreq !== 200) {
      callback(`Error ${xhttpreq.status}: ${xhttpreq.statusText}`);
    } else {
      const data = JSON.parse(xhttpreq.response).query.pages[21721040].extract;
      callback(null, data);
    }
  };
}

queryWikipedia(createElement);
