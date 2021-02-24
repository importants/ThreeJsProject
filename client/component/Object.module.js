import * as THREE from "../node_modules/three/build/three.module.js";
import { OBJLoader } from "../node_modules/three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "../node_modules/three/examples/jsm/loaders/MTLLoader.js";
import { FBXLoader } from "../node_modules/three/examples/jsm/loaders/FBXLoader.js";

let objLoader = new OBJLoader();
let mtlLoader = new MTLLoader();
let fbxLoader = new FBXLoader();

// window

var window = [];

const Window = (num) => {
  switch (num) {
    case 1:
      fbxLoader.load(
        "./component/object/window/VenetianBlind/VenetianBlind.fbx",
        function (object) {
          object.scale.set(5, 5, 5);
          object.name = "window";
          window.push(object);
        }
      );
      break;
    case 2:
      fbxLoader.load(
        "./component/object/window/window2-1/window2.fbx",
        function (object) {
          object.scale.set(5, 5, 5);
          object.rotateY(-Math.PI / 2);
          object.name = "window";
          window.push(object);
        }
      );
      break;
    case 3:
      fbxLoader.load(
        "./component/object/window/window_mirror/Mirror/Mirror1.fbx",
        function (object) {
          object.scale.set(5, 5, 5);
          object.rotateY(Math.PI / 2);
          object.name = "window";
          window.push(object);
        }
      );
      break;
    default:
      break;
  }
  if (window[window.length - 1]) return window.pop();
};

// desk

let desk = [];

const Desk = (num) => {
  switch (num) {
    case 1:
      fbxLoader.load(
        "./component/object/desk/Desk_desk1/desk1.fbx",
        function (object) {
          object.scale.set(10, 10, 10);
          object.name = "desk";
          desk.push(object);
        }
      );

      break;
    case 2:
      fbxLoader.load(
        "./component/object/desk/desk2/table2.fbx",
        function (object) {
          object.scale.set(10, 10, 10);
          object.name = "desk";
          desk.push(object);
        }
      );

      break;
    case 3:
      fbxLoader.load(
        "./component/object/desk/desk_tabledesk/Table desk N210820/desk3.fbx",
        function (object) {
          object.scale.set(10, 10, 10);
          object.name = "desk";
          desk.push(object);
        }
      );
      break;
    default:
      break;
  }
  if (desk[desk.length - 1]) return desk.pop();
};

// chair

let chair = [];

const Chair = (num) => {
  switch (num) {
    case 1:
      fbxLoader.load(
        "./component/object/chair/chair1/chair1.fbx",
        function (object) {
          object.scale.set(10, 10, 10);
          object.name = "chair";
          desk.push(object);
        }
      );
      break;
    case 2:
      fbxLoader.load("./component/object/chair/chair2.fbx", function (object) {
        object.scale.set(10, 10, 10);
        object.name = "chair";
        desk.push(object);
      });
      break;
    case 3:
      fbxLoader.load(
        "./component/object/chair/chair3/chair3.fbx",
        function (object) {
          object.scale.set(10, 10, 10);
          object.name = "chair";
          desk.push(object);
        }
      );
      break;
    default:
      break;
  }
  if (chair[chair.length - 1]) return chair.pop();
};

// picture

let picture = [];

const Picture = (num) => {
  switch (num) {
    case 1:
      fbxLoader.load(
        "./component/object/frame/frame1/picture1.fbx",
        function (object) {
          object.scale.set(7, 7, 7);
          object.name = "picture";
          picture.push(object);
        }
      );
      break;
    case 2:
      fbxLoader.load(
        "./component/object/frame/frame2/Arah Leaf Frame/Maps/frame2.fbx",
        function (object) {
          object.scale.set(5, 5, 5);
          object.name = "picture";
          picture.push(object);
        }
      );
      break;
    case 3:
      fbxLoader.load(
        "./component/object/frame/frame3/Maps/frame3.fbx",
        function (object) {
          object.scale.set(5, 5, 5);
          object.name = "picture";
          picture.push(object);
        }
      );
      break;
    default:
      break;
  }
  if (picture[picture.length - 1]) return picture.pop();
};

export { Window, Desk, Chair, Picture };
