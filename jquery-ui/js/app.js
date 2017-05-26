"use strict";
var audioContext = new AudioContext();

$(function(){
    var $onOff = $("#on-off");
    var $messageText = $("span");
    var $freqSliderVal = $("input").eq(1).val();
    var osc = false;
    var selectedWaveform = "sawtooth";
    var $waveformTypes = $('li');

    $('li').on("click", function() {
        selectedWaveform = this.id;
        $('li').removeClass("selected-waveform");
        $(this).addClass("selected-waveform");
    });

    setInterval(function () {
        if (!osc) {
            console.log("Oscillator is stopped. Waiting for oscillator to start");
        } else {
            $freqSliderVal = $("input").eq(1).val();
            osc.frequency.value = $freqSliderVal;
            console.log("Oscillator is playing. Frequency value is " + $freqSliderVal);
            osc.type = selectedWaveform;
        }
    }, 50);

    $onOff.on("click", function () {
        if (!osc) {
            osc = audioContext.createOscillator();
            osc.type = selectedWaveform;
            osc.frequency.value = $freqSliderVal;
            osc.connect(audioContext.destination);
            osc.start(audioContext.currentTime);
            $onOff.value = "stop";
            span.innerHTML = "Click to stop oscillator";
        } else {
            osc.stop(audioContext.currentTime);
            osc = false;
            $onOff.value = "start";
            $messageText.text("Click to start oscillator");
        }
    });
});
