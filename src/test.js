(function (global) { if(typeof (global) === "undefined") { throw new Error("window is undefined"); } var _hash = "!"; var noBackPlease = function () { global.location.href += "#"; global.setTimeout(function () { global.location.href += "!"; }, 50); }; global.onhashchange = function () { if (global.location.hash !== _hash) { global.location.hash = _hash; } }; global.onload = function () { noBackPlease();  document.body.onkeydown = function (e) { var elm = e.target.nodeName.toLowerCase(); if (e.which === 8 && (elm !== 'input' && elm !== 'textarea')) { e.preventDefault(); }