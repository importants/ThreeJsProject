if (intersects.length > 0) {
  const intersect = intersects[0];

  if (isShiftDown) {
    //   if (
    //     intersect.name !== "E" ||
    //     intersect.name !== "N" ||
    //     intersect.name !== "W" ||
    //     intersect.name !== "Ground"
    //   ) {
    //     scene.remove(intersect.object);
    //     objects.splice(objects.indexOf(intersect.object), 1);
    //   }
  } else {
    let itemOne = load_object[load_object.length - 1];
    switch (intersect.object.name) {
      case "Ground": // ground
        if (itemOne.name === "desk" || itemOne.name === "chair") {
          itemOne.position.copy(intersect.point).add(intersect.face.normal);
          itemOne.position
            .divideScalar(50)
            .floor()
            .multiplyScalar(50)
            .addScalar(25);
          scene.add(itemOne);
          objects.push(itemOne);
          load_object.pop();
        }
        break;
      case "N":
        if (itemOne.name === "window" || itemOne.name === "picture") {
          itemOne.position.copy(intersect.point).add(intersect.face.normal);
          itemOne.position
            .divideScalar(50)
            .floor()
            .multiplyScalar(50)
            .addScalar(25);
          //windowN.position.y += 100;
          scene.add(itemOne);
          itemOne;
          objects.push(itemOne);
        }
        break;
      case "E":
        if (itemOne.name === "window" || itemOne.name === "picture") {
          itemOne.position.copy(intersect.point).add(intersect.face.normal);
          itemOne.position
            .divideScalar(50)
            .floor()
            .multiplyScalar(50)
            .addScalar(25);
          itemOne.rotateY(-Math.PI / 2);
          //windowN.position.y += 100;
          scene.add(itemOne);
          objects.push(itemOne);
        }
        break;
      case "W":
        if (itemOne.name === "window" || itemOne.name === "picture") {
          //
          itemOne.position.copy(intersect.point).add(intersect.face.normal);
          itemOne.position
            .divideScalar(50)
            .floor()
            .multiplyScalar(50)
            .addScalar(25);
          itemOne.rotateY(Math.PI / 2);
          //windowN.position.y += 100;
          scene.add(itemOne);
          objects.push(itemOne);
        }
        break;
      default:
        rollOverMesh.position.copy(intersect.point).add(intersect.face.normal);
        rollOverMesh.position
          .divideScalar(50)
          .floor()
          .multiplyScalar(50)
          .addScalar(25);
        break;
    }

    if (intersects.length > 0) {
      const intersect = intersects[0];
      //console.log(intersect);
      if (optionClick) {
        if (intersect.object.name !== "Ground") {
          // 벽부분
          if (itemOne.name == "window" || itemOne.name == "picture") {
            console.log(itemOne);
            scene.remove(rollOverMesh);
            itemOne.position.copy(intersect.point).add(intersect.face.normal);
            itemOne.position
              .divideScalar(50)
              .floor()
              .multiplyScalar(50)
              .addScalar(25);
          } else {
            rollOverMesh.position
              .copy(intersect.point)
              .add(intersect.face.normal);
            rollOverMesh.position
              .divideScalar(50)
              .floor()
              .multiplyScalar(50)
              .addScalar(25);
          }
        } else {
          // 바닥 부분에 chair desk
          console.log(itemOne);
          if (itemOne.name === "desk" || itemOne.name === "chair") {
            scene.remove(rollOverMesh);
            console.log(itemOne);
            scene.add(itemOne);
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
          } else {
            rollOverMesh.position
              .copy(intersect.point)
              .add(intersect.face.normal);
            rollOverMesh.position
              .divideScalar(50)
              .floor()
              .multiplyScalar(50)
              .addScalar(25);
          }
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
  }
}
