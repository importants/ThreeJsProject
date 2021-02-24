import * as THREE from "../node_modules/three/build/three.module.js";
import * as OBJECT from "../component/Object.module.js";
import { DragControls } from "../node_modules/three/examples/jsm/controls/DragControls.js";
import { TransformControls } from "../node_modules/three/examples/jsm/controls/TransformControls.js";

let Front = document.getElementsByClassName("Front")[0];
let Left = document.getElementsByClassName("Left")[0];
let Right = document.getElementsByClassName("Right")[0];
let Sky = document.getElementsByClassName("Sky")[0];
let Back = document.getElementsByClassName("Back")[0];
let threeJs = document.getElementById("ThreeJs");
let camera, scene, renderer;
let mouse,
  raycaster,
  isShiftDown = false,
  optionClick = false;
let rollOverMesh, rollOverMaterial;
let rotationNum = 1; // 회전
let changeR = false;
const objects = []; // raycaster 해당 물체
const load_object = []; // 물체 담기
const save_object = []; // 물체 저장
init();

function init() {
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.set(-2000, 1000, 0);
  camera.lookAt(0, 0, 0); // 나중에 키보드나 클릭으로 전환해주는 function 만들기

  scene = new THREE.Scene();
  scene.background = new THREE.Color("rgb(243, 243, 253)");

  // roll-over helpers
  const rollOverGeo = new THREE.BoxGeometry(50, 50, 50);
  rollOverMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    opacity: 0.5,
    transparent: true,
  });
  rollOverMesh = new THREE.Mesh(rollOverGeo, rollOverMaterial);
  scene.add(rollOverMesh);

  //grid

  const gridHelper = new THREE.GridHelper(1000, 20);
  scene.add(gridHelper);

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  // 벽면
  wallMake();

  // lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); //자연광
  ambientLight.intensity = 1.34;
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(0, 1000, 0).normalize();
  scene.add(directionalLight);

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: threeJs,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // drag drop

  document.addEventListener("mousemove", onDocumentMouseMove);
  document.addEventListener("mousedown", onDocumentMouseDown);
  document.addEventListener("mouseup", onDocumentMouseUp);
  document.addEventListener("keydown", onDocumentKeyDown);
  document.addEventListener("keyup", onDocumentKeyUp);
  window.addEventListener("resize", onWindowResize);
}

// items

const desk1 = document.getElementsByClassName("desk1")[0];
desk1.addEventListener(
  "click",
  function () {
    if (load_object[load_object.length - 1]) {
      return;
    }
    optionClick = true;
    load_object.push(OBJECT.Desk(1));
    console.log(load_object);
    if (!load_object[load_object.length - 1]) {
      load_object.pop();
    }
  },
  false
);
const desk2 = document.getElementsByClassName("desk2")[0];
desk2.addEventListener(
  "click",
  function () {
    if (load_object[load_object.length - 1]) {
      return;
    }
    optionClick = true;
    load_object.push(OBJECT.Desk(2));
    if (!load_object[load_object.length - 1]) {
      load_object.pop();
    }
  },
  false
);
const desk3 = document.getElementsByClassName("desk3")[0];
desk3.addEventListener(
  "click",
  function () {
    if (load_object[load_object.length - 1]) {
      return;
    }
    optionClick = true;
    load_object.push(OBJECT.Desk(3));
    if (!load_object[load_object.length - 1]) {
      load_object.pop();
    }
  },
  false
);
const window1 = document.getElementsByClassName("window1")[0];
window1.addEventListener(
  "click",
  function () {
    if (load_object[load_object.length - 1]) {
      return;
    }
    optionClick = true;
    load_object.push(OBJECT.Window(1));
    if (!load_object[load_object.length - 1]) {
      load_object.pop();
    }
  },
  false
);
const window2 = document.getElementsByClassName("window2")[0];
window2.addEventListener(
  "click",
  function () {
    if (load_object[load_object.length - 1]) {
      return;
    }
    optionClick = true;
    load_object.push(OBJECT.Window(2));
    if (!load_object[load_object.length - 1]) {
      load_object.pop();
    }
  },
  false
);
const window3 = document.getElementsByClassName("window3")[0];
window3.addEventListener(
  "click",
  function () {
    if (load_object[load_object.length - 1]) {
      return;
    }
    optionClick = true;
    load_object.push(OBJECT.Window(3));
    if (!load_object[load_object.length - 1]) {
      load_object.pop();
    }
  },
  false
);
const picture1 = document.getElementsByClassName("picture1")[0];
picture1.addEventListener(
  "click",
  function () {
    if (load_object[load_object.length - 1]) {
      return;
    }
    optionClick = true;
    load_object.push(OBJECT.Picture(1));
    if (!load_object[load_object.length - 1]) {
      load_object.pop();
    }
  },
  false
);

const picture2 = document.getElementsByClassName("picture2")[0];
picture2.addEventListener(
  "click",
  function (e) {
    if (load_object[load_object.length - 1]) {
      return;
    }
    optionClick = true;
    load_object.push(OBJECT.Picture(2));
    if (!load_object[load_object.length - 1]) {
      load_object.pop();
    }
  },
  false
);
const picture3 = document.getElementsByClassName("picture3")[0];
picture3.addEventListener(
  "click",
  function () {
    if (load_object[load_object.length - 1]) {
      return;
    }
    optionClick = true;
    load_object.push(OBJECT.Picture(3));
    if (!load_object[load_object.length - 1]) {
      load_object.pop();
    }
  },
  false
);

const chair1 = document.getElementsByClassName("chair1")[0];
chair1.addEventListener(
  "click",
  function () {
    if (load_object[load_object.length - 1]) {
      return;
    }
    optionClick = true;
    load_object.push(OBJECT.Chair(1));
    if (!load_object[load_object.length - 1]) {
      load_object.pop();
    }
  },
  false
);

const chair2 = document.getElementsByClassName("chair2")[0];
chair2.addEventListener(
  "click",
  function (e) {
    if (load_object[load_object.length - 1]) {
      return;
    }
    optionClick = true;
    load_object.push(OBJECT.Chair(2));
    if (!load_object[load_object.length - 1]) {
      load_object.pop();
    }
  },
  false
);
const chair3 = document.getElementsByClassName("chair3")[0];
chair3.addEventListener(
  "click",
  function (e) {
    if (load_object[load_object.length - 1]) {
      scene.remove(load_object[load_object.length - 1]);
      load_object.pop();
    }
    optionClick = true;
    load_object.push(OBJECT.Chair(3));
    if (!load_object[load_object.length - 1]) {
      load_object.pop();
    }
  },
  false
);

//function

function wallMake() {
  //책상일 때 바닥에 설치할 수 있게 나머지는 제거
  let geometry = [];
  let plane = [];
  for (let i = 0; i < 4; i++) {
    if (!i) {
      geometry[i] = new THREE.PlaneGeometry(1000, 1000);
      plane[0] = new THREE.Mesh(
        geometry[0],
        new THREE.MeshBasicMaterial({
          color: "white",
          map: new THREE.TextureLoader().load(
            "./component/object/wall/back2.jpg"
          ),
          transparent: true,
          opacity: 0.3,
        })
      );
    } else {
      geometry[i] = new THREE.PlaneGeometry(1000, 500);
      plane[i] = new THREE.Mesh(
        geometry[i],
        new THREE.MeshBasicMaterial({
          color: "rgb(236, 230, 236)",
        })
      );
    }
  }

  geometry[0].rotateX(-Math.PI / 2);
  geometry[1].rotateX(-Math.PI / 1);
  geometry[1].rotateY(Math.PI / 2);
  geometry[2].rotateX(-Math.PI / 1);
  geometry[3].rotateX(-Math.PI / 1);
  geometry[3].rotateY(Math.PI / 1);
  plane[1].position.set(500, 0, 0); // 북쪽
  plane[2].position.set(0, 0, 500); // 서쪽
  plane[3].position.set(0, 0, -500); // 동쪽
  plane[0].name = "Ground";
  plane[1].name = "N";
  plane[2].name = "W";
  plane[3].name = "E";

  for (let i = 0; i < plane.length; i++) {
    scene.add(plane[i]);
    if (!i) {
    } else {
      plane[i].position.y = +250;
    }
    objects.push(plane[i]); // 이 곳에 넣어서 배치할 수 있게 따로 빼서 만들기 // find
  }
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
  event.preventDefault();
  mouse.set(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  );

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(objects);
  let itemOne = load_object[load_object.length - 1];

  if (intersects.length > 0) {
    const intersect = intersects[0];
    if (optionClick) {
      scene.remove(rollOverMesh);
      switch (intersect.object.name) {
        case "Ground": // ground
          if (!itemOne) break;
          if (itemOne.name === "desk" || itemOne.name === "chair") {
            itemOne.position.copy(intersect.point).add(intersect.face.normal);
            itemOne.position
              .divideScalar(50)
              .floor()
              .multiplyScalar(50)
              .addScalar(25);
            if (changeR) {
              // 방향전환
              if (rotationNum === 0) {
                itemOne.rotateY(Math.PI / 2);
                rotationNum = 1;
                changeR = false;
              } else if (rotationNum === 2) {
                itemOne.rotateY(-Math.PI / 2);
                rotationNum = 1;
                changeR = false;
              }
            }
            scene.add(itemOne);
          }
          break;
        case "N":
          if (!itemOne) break;
          if (itemOne.name === "window" || itemOne.name === "picture") {
            itemOne.rotation.y = Math.PI / 2;
            itemOne.position.copy(intersect.point).add(intersect.face.normal);
            itemOne.position
              .divideScalar(50)
              .floor()
              .multiplyScalar(50)
              .addScalar(25);
            itemOne.position.y = 150;
            scene.add(itemOne);
          }
          break;
        case "E":
          if (!itemOne) break;
          if (itemOne.name === "window" || itemOne.name === "picture") {
            itemOne.rotation.y = Math.PI;
            itemOne.position.copy(intersect.point).add(intersect.face.normal);
            itemOne.position
              .divideScalar(50)
              .floor()
              .multiplyScalar(50)
              .addScalar(25);
            itemOne.position.y = 150;
            scene.add(itemOne);
          }
          break;
        case "W":
          if (!itemOne) break;
          if (itemOne.name === "window" || itemOne.name === "picture") {
            itemOne.rotation.y = 0;
            itemOne.position.copy(intersect.point).add(intersect.face.normal);
            itemOne.position
              .divideScalar(50)
              .floor()
              .multiplyScalar(50)
              .addScalar(25);

            itemOne.position.y = 150;
            scene.add(itemOne);
          }
          break;
        default:
          // 아무것도 없음
          break;
      }
    } else {
      rollOverMesh.position.copy(intersect.point).add(intersect.face.normal);
      rollOverMesh.position
        .divideScalar(50)
        .floor()
        .multiplyScalar(50)
        .addScalar(25);
    }
  }

  render();
}

function onDocumentMouseDown(event) {
  event.preventDefault();

  mouse.set(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  );
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(objects);

  if (intersects.length > 0) {
    const intersect = intersects[0];

    if (isShiftDown) {
    } else {
      let itemOne = load_object[load_object.length - 1];
      switch (intersect.object.name) {
        case "Ground": // ground
          if (itemOne.name === "desk" || itemOne.name === "chair") {
            scene.add(itemOne);

            objects.push(itemOne);
            save_object.push(load_object.pop());

            if (load_object)
              for (let i = 0; i < objects.length; i++) {
                load_object.pop();
              }
            optionClick = false;
          }
          break;
        case "N":
          if (itemOne.name === "window" || itemOne.name === "picture") {
            scene.add(itemOne);
            objects.push(itemOne);
            save_object.push(load_object.pop());
            optionClick = false;
          }
          break;
        case "E":
          if (itemOne.name === "window" || itemOne.name === "picture") {
            scene.add(itemOne);
            objects.push(itemOne);
            save_object.push(load_object.pop());
            optionClick = false;
          }
          break;
        case "W":
          if (itemOne.name === "window" || itemOne.name === "picture") {
            scene.add(itemOne);
            objects.push(itemOne);
            save_object.push(load_object.pop());
            optionClick = false;
          }
          break;
        default:
          console.log("no thank");
          break;
      }
    }
    render();
  }
}
function onDocumentMouseUp(event) {
  //console.log(load_object);
}

function onDocumentKeyDown(event) {
  // 방향 만들기 & q e 이용해서 객체를 만든 뒤 q를 입력하면 -1를 입력하면 +1
  // 1 가운데 2 왼쪽 3 뒤 4 오른쪽 만들어 주기
  switch (event.keyCode) {
    case 16:
      if (!isShiftDown) isShiftDown = true;
      else {
        isShiftDown = false;
      }
      break;
    case 81: // q 왼쪽으로 회전
      if (rotationNum != 1) {
        rotationNum = 1;
      }
      rotationNum--;
      console.log(rotationNum);
      changeR = true;

      break;
    case 69: // e 오른쪽으로 회전
      if (rotationNum != 1) {
        rotationNum = 1;
      }
      rotationNum++;
      console.log(rotationNum);
      changeR = true;
      break;
    case 37:
      console.log("left");
      camera.position.set(0, 1000, -2000);
      camera.lookAt(0, 0, 0);
      render();
      break; //옆
    case 38:
      console.log("front");
      camera.position.set(-2000, 1000, 0);
      camera.lookAt(0, 0, 0);
      render();
      break; //위
    case 39:
      console.log("right");
      camera.position.set(0, 1000, 2000);
      camera.lookAt(0, 0, 0);
      render();
      break; //오른쪽
    case 40:
      console.log("sky");
      camera.position.set(0, 3000, 0);
      camera.lookAt(1, 0, 0);
      render();
      break; //아래
    case 68: // 물체 삭제
      console.log("delete");
      if (!save_object) alert("사물이 존재하지 않습니다");
      scene.remove(save_object.pop());
      break;
    case 83: // 물체 취소
      console.log("cancel");
      if (!save_object) alert("사물이 존재하지 않습니다");
      scene.remove(load_object[load_object.length - 1]);
      load_object.pop();
      break;
  }
}

function onDocumentKeyUp(event) {
  switch (event.keyCode) {
    case 65:
      console.log(load_object);
      break;
  }
}

// 방향-> 나중에 버튼 없애고 다른 것으로 전환
Front.addEventListener(
  "click",
  function (e) {
    console.log("front");
    camera.position.set(-2000, 1000, 0);
    camera.lookAt(0, 0, 0);
  },
  false
);
Left.addEventListener(
  "click",
  function (e) {
    console.log("left");
    camera.position.set(0, 1000, -2000);
    camera.lookAt(0, 0, 0);
  },
  false
);
Right.addEventListener(
  "click",
  function (e) {
    console.log("right");
    camera.position.set(0, 1000, 2000);
    camera.lookAt(0, 0, 0);
  },
  false
);
Sky.addEventListener(
  "click",
  function (e) {
    console.log("sky");
    camera.position.set(0, 3000, 0);
    camera.lookAt(1, 0, 0);
  },
  false
);
Back.addEventListener(
  "click",
  function (e) {
    scene.remove(save_object.pop());
  },
  false
);

let Value = document.getElementsByClassName("backColor")[0];
Value.addEventListener("input", function (e) {
  console.log(Value.value);
  scene.children[3].material.color.set(Value.value);
  scene.children[4].material.color.set(Value.value);
  scene.children[5].material.color.set(Value.value);
});

function render() {
  renderer.render(scene, camera);
}
