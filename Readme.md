# Computer Graphics Project – MyRoom 3D Scene
![alt text](./MyRoom/assets/gif/sampleVideo.gif)

Student ID: 2022041069  
Name: Lee Insu  
Development Environment: Windows 11  
Editor: Visual Studio Code  
Languages and Libraries: JavaScript, Three.js, GLTFLoader, TrackballControls, DragControls


###  실행 방법

이 프로젝트는 로컬 웹 서버 환경**에서 실행해야 합니다.

* **VS Code 사용 시:** HTML 파일을 마우스 우클릭하여 **Live Server**로 실행하세요.

###  How to Run

This project **must be run in a local web server environment**.

* **If using VS Code:** Right-click the HTML file and run it with **Live Server**.

## 1. Project Overview

This project is a Three.js-based real-time 3D rendering assignment that implements a room scene.  
It includes external GLB models, image textures, lighting, animations, and user interactions, combining various objects and structures into a single scene.

## 2. Development Environment and Tools

### 2-1. Development Environment
- Windows 11  
- Visual Studio Code  
- Live Server extension  
- Chrome browser  

### 2-2. Libraries and Tools Used
- Three.js  
- GLTFLoader  
- TrackballControls  
- DragControls  
- Stats.js  
- Markmap.js  
- Blender-created or provided GLB model files

## 3. Main Components

### 3-1. Scene
A Three.js Scene was created and its background color was set.  
All objects belong to this Scene.

### 3-2. Camera
A PerspectiveCamera was used, and TrackballControls were applied to allow free rotation, movement, and zoom.

### 3-3. Renderer
WebGLRenderer was used with shadow support, sRGB encoding, and anti-aliasing enabled.

### 3-4. Lighting

The following light sources were implemented in this project:

- AmbientLight  
- DirectionalLight  
- PointLight (ceiling light)  
- PointLights (two stand lights)  
- Emissive rectangular ceiling light  

### 3-5. Texture and Material

The following textures were loaded and applied:

- mattress_texture.png  
- sheet_texture.jpg  
- duvet_texture.jpg  
- pillow_texture.jpg  
- catImage.png  

For the duvet, the vertices of a PlaneGeometry were modified to create a wrinkled effect.  
Other geometries applied repeated textures or single textures as needed.

### 3-6. GLB Model Loading

GLTFLoader was used to load the following GLB models:

- bass_guitar.glb  
- keyboard.glb  
- Computer.glb  
- hangersAndShirts.glb  
- light_switch.glb  

Each model was configured with scale, position, rotation, and shadow properties.

### 3-7. Major Object Groups

#### 1) Bedding Group
- Mattress  
- Pillows  
- Duvet  
- Bed sheet  

#### 2) Desk Setup Group
- Desk  
- Two monitors  
- GLB keyboard  
- Mouse pad  
- Mouse (movable with DragControls)  
- Desktop computer (GLB)  

#### 3) Storage Group
- Bookshelf  
- Multiple books  
- Wardrobe  
- Hangers and shirts (GLB)  

#### 4) Other Single Objects
- Air purifier  
- Torus knot decoration  
- Wall picture  

### 3-8. Animation

AnimationMixer was used to create door opening and closing animations.  
The TorusKnot object was given a looping rotation AnimationClip.  
Mouse movement values were mapped into screen space to animate a 2D ball displayed on the monitor.  
The light switch was implemented so that clicking it turns lights on or off.

### 3-9. Interaction

User interactions were implemented as follows:

- DragControls were used to allow the mouse object to move only within the mousepad area.  
- Clicking the door triggers the opening or closing animation.  
- Clicking the switch toggles all lights on or off.  
- Clicking the computer case toggles the appearance of a 2D ball on the monitor screen.  
- When the ball is visible, clicking it changes its color randomly.

## 4. Animate Loop

The animate function updates the following elements every frame:

- AnimationMixer updates  
- Door animation updates  
- Torus animation updates  
- TrackballControls updates  
- Monitor 2D ball position mapped from the mouse position  
- renderer.render(scene, camera) call  

## 5. Scene Graph Markmap Structure

- Refer to SceneGraph.html
