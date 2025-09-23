import { useEffect, useState, useCallback, useRef } from "react";
import ProtectedRoute from "./ProtectedRoute";

// Simulated camera congestion for each lane
const initialCamData = [
  { lane: 1, congestion: "medium" },
  { lane: 2, congestion: "low" },
  { lane: 3, congestion: "high" },
  { lane: 4, congestion: "medium" },
];

export default function ControllerPanel({ camData }) {
  const [powerOn, setPowerOn] = useState(true);
  const [signalsOn, setSignalsOn] = useState(true);
  const controlModes = ["Adaptive", "Manual", "Fixed", "Actuated"];
  const signalModes = ["Normal", "Manual", "Transit", "Pre-Timed", "Pedestrian"];
  const [controlModeIndex, setControlModeIndex] = useState(0);
  const [signalModeIndex, setSignalModeIndex] = useState(0);
  const [emergencyActive, setEmergencyActive] = useState(false);
  const [testMode, setTestMode] = useState(false);
  const [phaseHold, setPhaseHold] = useState(false);
  const [lastAction, setLastAction] = useState("None");
  const [pressedKey, setPressedKey] = useState(null);
  const [manualStepCount, setManualStepCount] = useState(0);

  const [detectorBypass, setDetectorBypass] = useState(false);
  const [forceGreen, setForceGreen] = useState(false);
  const [forceYellow, setForceYellow] = useState(false);
  const [forceRed, setForceRed] = useState(false);
  const [allRed, setAllRed] = useState(false);
  const [flashMode, setFlashMode] = useState(false);

  const [lanePhases, setLanePhases] = useState([0, 0, 0, 0]); // 0=Red,1=Green,2=Yellow
  const [flashOn, setFlashOn] = useState(true);

  const clickSound = useRef(null);

  // Refs for loop state to prevent freezing
  const controlModeRef = useRef(controlModeIndex);
  const manualStepRef = useRef(manualStepCount);
  useEffect(() => { controlModeRef.current = controlModeIndex; }, [controlModeIndex]);
  useEffect(() => { manualStepRef.current = manualStepCount; }, [manualStepCount]);

  // Sound for button clicks
  let soundPlaying = false;
  const playClickSound = () => {
    if (!clickSound.current) return;
    if (soundPlaying) return;
    soundPlaying = true;
    clickSound.current.currentTime = 0;
    clickSound.current.play().finally(() => { soundPlaying = false; });
  };

  useEffect(() => { clickSound.current = new Audio("/music/beep.mp3"); }, []);

  const doAction = useCallback((label) => {
    playClickSound();
    setLastAction(label);
    setPressedKey(label);
    setTimeout(() => setPressedKey(null), 220);
  }, []);

  const resetSignalOverrides = () => {
    setForceGreen(false);
    setForceYellow(false);
    setForceRed(false);
    setAllRed(false);
  };

  // =================== ACTION FUNCTIONS ===================
  const togglePower = () => { setPowerOn(s => !s); doAction("Power Switch"); };
  const toggleSignals = () => { setSignalsOn(s => !s); doAction("Signal On/Off"); };
  const manualStep = () => {
    const manualIndex = controlModes.indexOf("Manual");
    if (manualIndex >= 0) setControlModeIndex(manualIndex);
    const signalManualIndex = signalModes.indexOf("Manual");
    if (signalManualIndex >= 0) setSignalModeIndex(signalManualIndex);
    setManualStepCount(c => c + 1);
    doAction("Manual Step");
  };
  const toggleControlMode = () => { setControlModeIndex(i => (i + 1) % controlModes.length); doAction("Toggle Control Mode"); };
  const toggleSignalMode = () => { setSignalModeIndex(i => (i + 1) % signalModes.length); doAction("Toggle Signal Mode"); };
  const toggleEmergency = () => { setEmergencyActive(s => !s); doAction("Emergency Override"); };
  const sendHelp = () => doAction("Help");
  const cycleReset = () => { setLanePhases([0,0,0,0]); doAction("Cycle Reset"); };
  const toggleTestMode = () => { setTestMode(s => !s); doAction("Test Mode"); };
  const togglePhaseHold = () => { setPhaseHold(s => !s); doAction("Phase Hold / Force"); };

  const toggleForceGreen = () => { resetSignalOverrides(); setForceGreen(s => !s); doAction("Force Green"); };
  const toggleForceYellow = () => { resetSignalOverrides(); setForceYellow(s => !s); doAction("Force Yellow"); };
  const toggleForceRed = () => { resetSignalOverrides(); setForceRed(s => !s); doAction("Force Red"); };
  const toggleAllRed = () => { resetSignalOverrides(); setAllRed(s => !s); doAction("All-Red Clearance"); };
  const toggleDetectorBypass = () => { setDetectorBypass(s => !s); doAction("Detector Bypass"); };
  const toggleFlashMode = () => {
    if (flashMode) { setFlashMode(false); doAction("Flash Mode OFF"); } 
    else { resetSignalOverrides(); setFlashMode(true); doAction("Flash Mode"); }
  };

  // =================== KEYBOARD BINDINGS ===================
  useEffect(() => {
    const onKeyDown = e => {
      const tag = e.target?.tagName || "";
      if(tag==="INPUT"||tag==="TEXTAREA"||e.metaKey||e.ctrlKey) return;
      switch(e.key.toLowerCase()){
        case "p": togglePower(); break;
        case "o": toggleSignals(); break;
        case "m": manualStep(); break;
        case "t": toggleControlMode(); break;
        case "s": toggleSignalMode(); break;
        case "e": toggleEmergency(); break;
        case "d": sendHelp(); break;
        case "c": cycleReset(); break;
        case "x": toggleTestMode(); break;
        case "h": togglePhaseHold(); break;
        case "g": toggleForceGreen(); break;
        case "y": toggleForceYellow(); break;
        case "r": toggleForceRed(); break;
        case "a": toggleAllRed(); break;
        case "b": toggleDetectorBypass(); break;
        case "f": toggleFlashMode(); break;
        default: return;
      }
      e.preventDefault();
    };
    window.addEventListener("keydown", onKeyDown);
    return()=>window.removeEventListener("keydown", onKeyDown);
  }, [togglePower,toggleSignals,manualStep,toggleControlMode,toggleSignalMode,toggleEmergency,sendHelp,cycleReset,toggleTestMode,togglePhaseHold,toggleForceGreen,toggleForceYellow,toggleForceRed,toggleAllRed,toggleDetectorBypass,toggleFlashMode]);

  // =================== TRAFFIC LIGHT CYCLE ===================
  useEffect(() => {
    if (!powerOn || !signalsOn || phaseHold || flashMode) return;

    let isRunning = true;

    const cycleController = async () => {
      let currentGroup = 0; // 0 = lanes 1+3, 1 = lanes 2+4
      while (isRunning) {
        const mode = controlModeRef.current;
        const step = manualStepRef.current;

        // Manual Mode → wait for step
        if (controlModes[mode] === "Manual") {
          await new Promise((resolve) => {
            const check = setInterval(() => {
              if (!isRunning) return clearInterval(check);
              if (manualStepRef.current !== step) { clearInterval(check); resolve(); }
            }, 200);
          });
        }

        // Timing
        let greenTime=10000, yellowTime=4000, redTime=2000;
        if(controlModes[mode]==="Adaptive"){ greenTime=currentGroup===0?12000:8000; yellowTime=4000; redTime=2000; }
        if(controlModes[mode]==="Fixed"){ greenTime=20000; yellowTime=5000; redTime=3000; }
        if(controlModes[mode]==="Actuated"){ greenTime=currentGroup===0?18000:7000; yellowTime=5000; redTime=3000; }

        // GREEN
        setLanePhases([
          currentGroup===0?1:0,
          currentGroup===1?1:0,
          currentGroup===0?1:0,
          currentGroup===1?1:0,
        ]);
        await new Promise(r=>setTimeout(r, greenTime));
        if(!isRunning) return;

        // YELLOW
        setLanePhases([
          currentGroup===0?2:0,
          currentGroup===1?2:0,
          currentGroup===0?2:0,
          currentGroup===1?2:0,
        ]);
        await new Promise(r=>setTimeout(r, yellowTime));
        if(!isRunning) return;

        // ALL RED
        setLanePhases([0,0,0,0]);
        await new Promise(r=>setTimeout(r, redTime));
        if(!isRunning) return;

        // SWITCH GROUP
        if(controlModes[controlModeRef.current]!=="Manual") currentGroup=(currentGroup+1)%2;
      }
    };

    cycleController();
    return ()=>{ isRunning=false; };
  }, [powerOn, signalsOn, phaseHold, flashMode]);

  // =================== FLASH MODE ===================
  useEffect(()=>{
    if(!flashMode) return;
    const flashInterval = setInterval(()=>setFlashOn(f=>!f),500);
    return()=>clearInterval(flashInterval);
  },[flashMode]);

  // =================== LANE COLORS ===================
  const computeLaneColor=(lane)=>{
    if(!powerOn||!signalsOn) return {red:0.2,yellow:0.2,green:0.2};
    if(flashMode) return {red:0.2,yellow:flashOn?1:0.2,green:0.2};
    if(allRed) return {red:1,yellow:0.2,green:0.2};
    if(forceGreen) return {red:0.2,yellow:0.2,green:1};
    if(forceYellow) return {red:0.2,yellow:1,green:0.2};
    if(forceRed) return {red:1,yellow:0.2,green:0.2};
    switch(lanePhases[lane-1]){
      case 0: return {red:1,yellow:0.2,green:0.2};
      case 1: return {red:0.2,yellow:0.2,green:1};
      case 2: return {red:0.2,yellow:1,green:0.2};
      default: return {red:0.2,yellow:0.2,green:0.2};
    }
  };

  // =================== BUTTON STYLES ===================
  const baseBtnClass = "relative transform transition-all duration-150 select-none flex flex-col items-center justify-center font-semibold text-sm focus:outline-none";
  const raisedStyle = {boxShadow:"0 10px 20px rgba(0,0,0,0.25), inset 0 -6px 0 rgba(0,0,0,0.08)", background:"linear-gradient(180deg,#f7f7f9,#F9FAFB)"};
  const pressedStyle = {transform:"translateY(4px)", boxShadow:"0 4px 8px rgba(0,0,0,0.25), inset 0 -4px 0 rgba(0,0,0,0.06)"};
  const colorStyle = (color,dark)=>({background:`linear-gradient(180deg, ${dark?color[1]:color[0]}, ${color[2]})`, color:dark?"#111":"#fff"});

  const styles = {
    power: colorStyle(["#00c853","#009624","#006400"],true),
    signals: colorStyle(["#ffca28","#ffb300","#ff8f00"],true),
    manual: colorStyle(["#4fc3f7","#039be5","#0277bd"],true),
    toggle: colorStyle(["#9fa8da","#7986cb","#5c6bc0"],true),
    stoggle: colorStyle(["#ffd54f","#ffb300","#ff8f00"],true),
    emergency: colorStyle(["#ff5252","#ff1744","#c4001d"],true),
    send: colorStyle(["#81c784","#66bb6a","#388e3c"],true),
    reset: colorStyle(["#b0bec5","#90a4ae","#78909c"],true),
    test: colorStyle(["#ce93d8","#ba68c8","#8e24aa"],true),
    hold: colorStyle(["#ffd180","#ffb74d","#ff9800"],true),
    forceGreen: colorStyle(["#4caf50","#388e3c","#1b5e20"],true),
    forceYellow: colorStyle(["#ffeb3b","#fbc02d","#f57f17"],true),
    forceRed: colorStyle(["#f44336","#d32f2f","#b71c1c"],true),
    allRed: colorStyle(["#ef9a9a","#e57373","#c62828"],true),
    bypass: colorStyle(["#90a4ae","#78909c","#546e7a"],true),
    flash: colorStyle(["#ffe082","#ffca28","#ff8f00"],true),
  };

  const ControllerButton = ({id,label,sub,onClick,styleObj,keyboardKey,active})=>{
    const isPressed = pressedKey===label||pressedKey===id;
    const appliedStyle = isPressed ? {...styleObj,...pressedStyle}:{...styleObj,...raisedStyle};
    const ring = active?"ring-4 ring-opacity-30":"";
    return (
      <button aria-pressed={active??false} title={`${label} (${keyboardKey.toUpperCase()})`} onClick={onClick} className={`${baseBtnClass} px-4 py-3 rounded-2xl w-full text-center ${ring}`} style={appliedStyle}>
        <div className="text-xs opacity-80">{label}</div>
        <div className="text-sm font-bold mt-1">{sub??""}</div>
        <div className="mt-2 text-[11px] opacity-70">Key: {keyboardKey.toUpperCase()}</div>
      </button>
    );
  };

  // =================== RENDER ===================
  return (
    <ProtectedRoute requiredRole="Admin">

    <>
      <div className="flex gap-6 mb-6 justify-between">
        {[1,2,3,4].map((lane)=>{
          const colors = computeLaneColor(lane);
          return (
            <div key={lane} className="flex flex-col items-center gap-3 p-3 bg-gray-900 rounded-xl shadow-lg w-1/4">
              <span className="font-semibold text-gray-200 mb-1">Lane {lane}</span>
              <div className="flex gap-5">
                <div className="w-9 h-9 rounded-full border-2 border-red-700 transition-all duration-500" style={{backgroundColor:`rgba(255,0,0,${colors.red})`,boxShadow:`0 0 15px rgba(255,0,0,${colors.red})`}}></div>
                <div className="w-9 h-9 rounded-full border-2 border-yellow-500 transition-all duration-500" style={{backgroundColor:`rgba(255,255,0,${colors.yellow})`,boxShadow:`0 0 15px rgba(255,255,0,${colors.yellow})`}}></div>
                <div className="w-9 h-9 rounded-full border-2 border-green-700 transition-all duration-500" style={{backgroundColor:`rgba(0,255,0,${colors.green})`,boxShadow:`0 0 15px rgba(0,255,0,${colors.green})`}}></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-5xl mx-auto p-6">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 p-4 bg-gray-50 rounded-lg shadow-inner"><div className="text-xs text-gray-600">Power</div><div className="mt-2 text-xl text-gray-900 font-bold">{powerOn ? "ON" : "OFF"}</div></div>
          <div className="flex-1 p-4 bg-gray-50 rounded-lg shadow-inner"><div className="text-xs text-gray-600">Signals</div><div className="mt-2 text-xl text-gray-900 font-bold">{signalsOn ? "ON" : "OFF (Dark)"}</div></div>
          <div className="flex-1 p-4 bg-gray-50 rounded-lg shadow-inner"><div className="text-xs text-gray-600">Control Type</div><div className="mt-2 text-xl text-gray-900 font-bold">{controlModes[controlModeIndex]}</div></div>
          <div className="flex-1 p-4 bg-gray-50 rounded-lg shadow-inner"><div className="text-xs text-gray-600">Signal Mode</div><div className="mt-2 text-xl text-gray-900 font-bold">{signalModes[signalModeIndex]}</div></div>
          <div className="flex-1 p-4 bg-gray-50 rounded-lg shadow-inner"><div className="text-xs text-gray-600">Emergency</div><div className="mt-2 text-xl text-gray-900 font-bold">{emergencyActive ? "ACTIVE" : "Idle"}</div></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          <ControllerButton id="power" label="Power Switch" sub={powerOn?"ON":"OFF"} onClick={togglePower} styleObj={styles.power} keyboardKey="P" active={powerOn}/>
          <ControllerButton id="signals" label="Signal On/Off" sub={signalsOn?"ON":"OFF"} onClick={toggleSignals} styleObj={styles.signals} keyboardKey="O" active={signalsOn}/>
          <ControllerButton id="manualStep" label="Manual Step" sub={`#${manualStepCount}`} onClick={manualStep} styleObj={styles.manual} keyboardKey="M"/>
          <ControllerButton id="toggleMode" label="Toggle Control Mode" sub={controlModes[controlModeIndex]} onClick={toggleControlMode} styleObj={styles.toggle} keyboardKey="T"/>
          <ControllerButton id="toggleSignal" label="Toggle Signal Mode" sub={signalModes[signalModeIndex]} onClick={toggleSignalMode} styleObj={styles.stoggle} keyboardKey="S"/>
          <ControllerButton id="emergency" label="Emergency Override" sub={emergencyActive?"ACTIVE":"Idle"} onClick={toggleEmergency} styleObj={styles.emergency} keyboardKey="E" active={emergencyActive}/>
          <ControllerButton id="send" label="Help" sub="Send Help" onClick={sendHelp} styleObj={styles.send} keyboardKey="D"/>
          <ControllerButton id="cycle" label="Cycle Reset" sub="Reset Cycle" onClick={cycleReset} styleObj={styles.reset} keyboardKey="C"/>
          <ControllerButton id="test" label="Test Mode" sub={testMode?"ON":"OFF"} onClick={toggleTestMode} styleObj={styles.test} keyboardKey="X" active={testMode}/>
          <ControllerButton id="hold" label="Phase Hold"  sub={phaseHold?"ON":"OFF"} onClick={togglePhaseHold} styleObj={styles.hold} keyboardKey="H" active={phaseHold}/>
          <ControllerButton id="forceGreen" label="Force Green" sub="F Green" onClick={toggleForceGreen} styleObj={styles.forceGreen} keyboardKey="G" active={forceGreen}/>
          <ControllerButton id="forceYellow" label="Force Yellow" sub="F Yellow" onClick={toggleForceYellow} styleObj={styles.forceYellow} keyboardKey="Y" active={forceYellow}/>
          <ControllerButton id="forceRed" label="Force Red" sub="F Red" onClick={toggleForceRed} styleObj={styles.forceRed} keyboardKey="R" active={forceRed}/>
          <ControllerButton id="allRed" label="All-Red Clearance" sub="All Red" onClick={toggleAllRed} styleObj={styles.allRed} keyboardKey="A" active={allRed}/>
          <ControllerButton id="bypass" label="Detector Bypass" sub="By-pass" onClick={toggleDetectorBypass} styleObj={styles.bypass} keyboardKey="B" active={detectorBypass}/>
          <ControllerButton id="flash" label="Flash Mode" sub="Flash" onClick={toggleFlashMode} styleObj={styles.flash} keyboardKey="F" active={flashMode}/>
        </div>

        <div className="mt-4 p-4 rounded-lg bg-white shadow-md flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-500">Last Action</div>
            <div className="text-sm font-medium">{lastAction}</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">Manual Steps</div>
            <div className="text-sm font-medium">{manualStepCount}</div>
          </div>
        </div>

        <p className="mt-3 text-xs text-gray-500">
          Shortcuts: P,O,M,T,S,E,D,C,X,H,G,Y,R,A,B,F
        </p>
      </div>
    </>
        </ProtectedRoute>

  );
}
