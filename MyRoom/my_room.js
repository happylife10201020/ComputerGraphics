// 기본 Scene, Camera, Renderer 설정
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xaaaaaa);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(6, 4, 8);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// OrbitControls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1, 0);
controls.update();

// 조명 추가
const light = new THREE.PointLight(0xffffff, 1.2);
light.position.set(5, 6, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040)); // 주변광

// 바닥
const floorGeo = new THREE.BoxGeometry(10, 0.1, 10);
const floorMat = new THREE.MeshPhongMaterial({ color: 0x999999 });
const floor = new THREE.Mesh(floorGeo, floorMat);
floor.position.y = -0.05;
scene.add(floor);

// 벽 4개
const wallMat = new THREE.MeshPhongMaterial({ color: 0xffffff });
const wallGeo = new THREE.BoxGeometry(10, 3, 0.1);
const wall1 = new THREE.Mesh(wallGeo, wallMat);
wall1.position.set(0, 1.5, -5);
scene.add(wall1);

const wall2 = wall1.clone();
wall2.position.set(0, 1.5, 5);
scene.add(wall2);

const wall3 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 3, 10), wallMat);
wall3.position.set(-5, 1.5, 0);
scene.add(wall3);

const wall4 = wall3.clone();
wall4.position.set(5, 1.5, 0);
scene.add(wall4);

// 문
const doorGeo = new THREE.BoxGeometry(1, 2, 0.1);
const doorMat = new THREE.MeshPhongMaterial({ color: 0x552200 });
const door = new THREE.Mesh(doorGeo, doorMat);
door.position.set(-4.5, 1, -5);
scene.add(door);

// 침대
const bedGeo = new THREE.BoxGeometry(2, 0.5, 1);
const bedMat = new THREE.MeshPhongMaterial({ color: 0x4444aa });
const bed = new THREE.Mesh(bedGeo, bedMat);
bed.position.set(-2, 0.25, 3);
scene.add(bed);

// 책상
const deskGeo = new THREE.BoxGeometry(2, 0.8, 1);
const deskMat = new THREE.MeshPhongMaterial({ color: 0x884400 });
const desk = new THREE.Mesh(deskGeo, deskMat);
desk.position.set(2, 0.4, 3);
scene.add(desk);

// 옷장
const wardrobeGeo = new THREE.BoxGeometry(1.5, 2.5, 0.8);
const wardrobeMat = new THREE.MeshPhongMaterial({ color: 0x777777 });
const wardrobe = new THREE.Mesh(wardrobeGeo, wardrobeMat);
wardrobe.position.set(4, 1.25, -3);
scene.add(wardrobe);

// 기타 스탠드
const guitarGeo = new THREE.BoxGeometry(0.3, 1, 0.3);
const guitarMat = new THREE.MeshPhongMaterial({ color: 0xaa2222 });
const guitar = new THREE.Mesh(guitarGeo, guitarMat);
guitar.position.set(3, 0.5, -2);
scene.add(guitar);

// 애니메이션 루프
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// 창 크기 조절 대응
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
