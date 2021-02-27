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
      mtlLoader.setPath("./component/object/chair/chair1/");
      mtlLoader.load(
        "Arm chair.mtl",
        function (materials) {
          materials.preload();

          objLoader.setMaterials(materials);

          objLoader.setPath("./component/object/chair/chair1/");
          objLoader.load(
            "Arm chair.obj",
            function (object) {
              object.scale.set(7, 7, 7);
              object.name = "chair";
              chair.push(object);
            },
            function (xhr) {
              console.log(
                "OBJLoader: ",
                (xhr.loaded / xhr.total) * 100,
                "% loaded"
              );
            },
            function (error) {
              alert("모델을 로드 중 오류가 발생하였습니다.");
            }
          );
        },
        function (xhr) {
          console.log(
            "MTLLoader: ",
            (xhr.loaded / xhr.total) * 100,
            "% loaded"
          );
        },
        function (error) {
          console.error("MTLLoader 로드 중 오류가 발생하였습니다.", error);
          alert("MTLLoader 로드 중 오류가 발생하였습니다.");
        }
      );
      break;
    case 2:
      mtlLoader.setPath("./component/object/chair/chair2-1/");
      mtlLoader.load(
        "de_sede_ds-414_swivel.mtl",
        function (materials) {
          materials.preload();

          objLoader.setMaterials(materials);

          objLoader.setPath("./component/object/chair/chair2-1/");
          objLoader.load(
            "de_sede_ds-414_swivel.obj",
            function (object) {
              object.scale.set(7, 7, 7);
              object.name = "chair";
              chair.push(object);
            },
            function (xhr) {
              console.log(
                "OBJLoader: ",
                (xhr.loaded / xhr.total) * 100,
                "% loaded"
              );
            },
            function (error) {
              alert("모델을 로드 중 오류가 발생하였습니다.");
            }
          );
        },
        function (xhr) {
          console.log(
            "MTLLoader: ",
            (xhr.loaded / xhr.total) * 100,
            "% loaded"
          );
        },
        function (error) {
          console.error("MTLLoader 로드 중 오류가 발생하였습니다.", error);
          alert("MTLLoader 로드 중 오류가 발생하였습니다.");
        }
      );
      break;
    case 3:
      mtlLoader.setPath("./component/object/chair/chair3/");
      mtlLoader.load(
        "Chaire.mtl",
        function (materials) {
          materials.preload();

          objLoader.setMaterials(materials);
          objLoader.setPath("./component/object/chair/chair3/");
          objLoader.load(
            "Chaire.obj",
            function (object) {
              object.scale.set(10, 10, 10);
              object.name = "chair";
              chair.push(object);
            },
            function (xhr) {
              console.log(
                "OBJLoader: ",
                (xhr.loaded / xhr.total) * 100,
                "% loaded"
              );
            },
            function (error) {
              alert("모델을 로드 중 오류가 발생하였습니다.");
            }
          );
        },
        function (xhr) {
          console.log(
            "MTLLoader: ",
            (xhr.loaded / xhr.total) * 100,
            "% loaded"
          );
        },
        function (error) {
          console.error("MTLLoader 로드 중 오류가 발생하였습니다.", error);
          alert("MTLLoader 로드 중 오류가 발생하였습니다.");
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
