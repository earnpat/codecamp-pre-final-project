function submit() {
  let full = document.getElementById("full");
  let nick = document.getElementById("nick");
  document.getElementById("fullname").innerHTML = full.value;
  document.getElementById("nickname").innerHTML = nick.value;
}

function listskill(lst) {
  let sk, list, mysk, re;
  if (lst === "add") {
    sk = document.getElementById("sk");
    list = document.createElement("li");
    mysk = document.createTextNode(sk.value);
    list.appendChild(mysk);
    document.getElementById("skill").appendChild(list);
  }
  if (lst === "remove") {
    re = document.getElementById("skill");
    re.removeChild(re.lastChild);
  }
}

function btn(ccc) {
  if (ccc === "c1") {
    bgcolor.style.backgroundColor = "#FFFF88";
    th.style.backgroundColor = "#FFFF88";
    fill.style.textShadow = "2px 2px 0px" + "#FFFF88";
    document.getElementById("resume").onmouseover = function() {
      this.style.borderColor = "#FFFF88";
    };
    document.getElementById("resume").onmouseleave = function() {
      this.style.borderColor = "#666666";
    };
  }
  if (ccc === "c2") {
    bgcolor.style.backgroundColor = "#FFBE7D";
    th.style.backgroundColor = "#FFBE7D";
    fill.style.textShadow = "2px 2px 0px" + "#FFBE7D";
    document.getElementById("resume").onmouseover = function() {
      this.style.borderColor = "#FFBE7D";
    };
    document.getElementById("resume").onmouseleave = function() {
      this.style.borderColor = "#666666";
    };
  }
  if (ccc === "c3") {
    bgcolor.style.backgroundColor = "#FFDDDD";
    th.style.backgroundColor = "#FFDDDD";
    fill.style.textShadow = "2px 2px 0px" + "#FFDDDD";
    document.getElementById("resume").onmouseover = function() {
      this.style.borderColor = "#FFDDDD";
    };
    document.getElementById("resume").onmouseleave = function() {
      this.style.borderColor = "#666666";
    };
  }
  if (ccc === "c4") {
    bgcolor.style.backgroundColor = "#CCFFFF";
    th.style.backgroundColor = "#CCFFFF";
    fill.style.textShadow = "2px 2px 0px" + "#CCFFFF";
    document.getElementById("resume").onmouseover = function() {
      this.style.borderColor = "#CCFFFF";
    };
    document.getElementById("resume").onmouseleave = function() {
      this.style.borderColor = "#666666";
    };
  }
  if (ccc === "c5") {
    bgcolor.style.backgroundColor = "#E1FD8E";
    th.style.backgroundColor = "#E1FD8E";
    fill.style.textShadow = "2px 2px 0px" + "#E1FD8E";
    document.getElementById("resume").onmouseover = function() {
      this.style.borderColor = "#E1FD8E";
    };
    document.getElementById("resume").onmouseleave = function() {
      this.style.borderColor = "#666666";
    };
  }
  if (ccc === "c6") {
    bgcolor.style.backgroundColor = "#F0DBFF";
    th.style.backgroundColor = "#F0DBFF";
    fill.style.textShadow = "2px 2px 0px" + "#F0DBFF";
    document.getElementById("resume").onmouseover = function() {
      this.style.borderColor = "#F0DBFF";
    };
    document.getElementById("resume").onmouseleave = function() {
      this.style.borderColor = "#666666";
    };
  }
}
