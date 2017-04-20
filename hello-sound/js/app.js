'use strict';

var audioContext = new AudioContext();
var osc = audioContext.createOscillator();
var waveformType = ['sine', 'sawtooth', 'triangle', 'square']; // ;
var frequencyValue = 200;

/**
 * params
 */
osc.type = waveformType[3]; //type of signal (wave form)
osc.frequency.value = frequencyValue;
osc.connect(audioContext.destination); //speakers


osc.start(audioContext.currentTime); //start now

console.log(waveformType[3]);