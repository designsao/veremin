# Veremin

Veremin is a video theremin based on [PoseNet](https://github.com/tensorflow/tfjs-models/tree/master/posenet) and the brainchild of [John Cohn](https://github.com/johncohn).

It builds upon the PoseNet [Camera Demo](https://github.com/tensorflow/tfjs-models/tree/master/posenet/demos#demo-1-camera) and modifies it to allow you to make music by moving your hands/arms in front of a web camera.

PoseNet is used to predict the location of your wrists within the video. The app takes the predictions and converts them to MIDI values which get sent to a connected MIDI device.

This is currently a **work in progress** and at this time only supports the Chrome browser (version 43 or later).


## Featured tools & technologies

- [PoseNet](https://github.com/tensorflow/tfjs-models/tree/master/posenet) - a machine learning model which allows for real-time human pose estimation in the browser
- [TensorFlow.js](https://js.tensorflow.org) - a JavaScript library for training and deploying ML models in the browser and on Node.js
- [Web MIDI API](https://www.w3.org/TR/webmidi) - an API supporting the MIDI protocol, enabling web applications to enumerate and select MIDI input and output devices on the client system and send and receive MIDI messages
- [Web Audio API](https://www.w3.org/TR/webaudio) - a high-level Web API for processing and synthesizing audio in web applications
- [Tone.js](https://tonejs.github.io/) - a framework for creating interactive music in the browser


## Live demo

To see this app in action without installing anything, simply visit https://veremin.mybluemix.net with a Chrome browser. You will want to have a MIDI synthesizer (hardware or software) connected. See the [Using the app](https://github.com/vabarbosa/veremin#using-the-app) section below for more information.


## Steps

Follow these steps to deploy your own instance of Veremin.

It can be deployed to IBM Cloud. You can also run this app on your local machine for development purposes.

- [Deploy to IBM Cloud](https://github.com/vabarbosa/veremin#deploy-to-ibm-cloud)
- [Run locally](https://github.com/vabarbosa/veremin#deploy-to-ibm-cloud)

### Deploy to IBM Cloud

Pre-requisites:

- Get an [IBM Cloud account](https://console.bluemix.net/)
- Install/Update the [IBM Cloud CLI](https://console.bluemix.net/docs/cli/reference/ibmcloud/download_cli.html#install_use)
- [Configure and login](https://console.bluemix.net/docs/cli/index.html#overview) to the IBM Cloud using the CLI

To deploy to the IBM Cloud, from a terminal run:

1. Clone the `veremin` locally:

    ```
    $ git clone https://github.com/vabarbosa/veremin
    ```

1. Change to the directory of the cloned repo:

    ```
    $  cd veremin
    ```

1. Log in to your IBM Cloud account:

    ```
    $ ibmcloud login
    ```

1. Target a Cloud Foundry org and space:

    ```
    $ ibmcloud target --cf
    ```

1. Push the app to IBM Cloud:

    ```
    $ ibmcloud cf push
    ```
    Deploying can take a few minutes.

1. View the app (with Chrome) at the URL listed in the output

### Run locally

To run the app locally:

1. From a terminal, clone the `veremin` locally:

    ```
    $ git clone https://github.com/vabarbosa/veremin
    ```

1. Point your web server to your app directory and start it up. If you want to use the **Web Server for Chrome** (after installing it from the Chrome Web Store):

    1. Go to your Chrome browser's Apps page
    1. Click on the **Web Server**
    1. From the Web Server, click **CHOOSE FOLDER** and select the directory of the cloned repo
    1. Start the Web Server

1. View the app (with Chrome) at the web server URL


## Using the app

Before using the app, connect a MIDI synthesizer to your computer. If you do not have a MIDI synthesizer you can download and run a software synthesizer such as [SimpleSynth](http://notahat.com/simplesynth/). If no (hardware or software) synthesizer is detected the app defaults to using the Web Audio API to generate tones from the browser.

You will need to view the app with Chrome and accept the prompt to allow access the web camera. Once access is allowed, the PoseNet model gets loaded (it may take a few seconds).

After the model is loaded, the video will load and include an overlay with skeletal and joint information detected by PoseNet. The overlay also include two adjacent zones/boxes. When your wrists are detected within each of the zones, you should here some sound.

You can move your right hand/arm up and down (in the right zone) to generate different notes to send to the connected MIDI device. You can move your left hand/arm left and right (in the left zone) to adjust the velocity of the note.

Click on **Open Controls** to open the control panel. In the control panel you are able to change MIDI devices (if more than one is connected), view the MIDI values being sent, configure PoseNet settings, and set additional optionals for the video.

## Links

 - [IBM Cloud](https://console.bluemix.net/)
 - [Getting started with the IBM Cloud CLI](https://console.bluemix.net/docs/cli/index.html#overview)
 - [Prepare the app for deployment - IBM Cloud](https://console.bluemix.net/docs/runtimes/nodejs/getting-started.html#prepare)
 - [Real-time Human Pose Estimation in the Browser with TensorFlow.js](https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5)
 - [Playing with MIDI in JavaScript](https://medium.com/swinginc/playing-with-midi-in-javascript-b6999f2913c3)
 - [Introduction to Web Audio API](https://css-tricks.com/introduction-web-audio-api)
