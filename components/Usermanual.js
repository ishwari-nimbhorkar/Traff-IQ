import React from "react";

export default function UserManual() {
  return (
    <div className="max-w-8xl mx-auto bg-gray-200 font-poppins px-6 py-10 rounded-xl text-gray-800">
      {/* Title */}
      <p className="text-xl font-bold font-poppins mb-8 text-left text-Gray-600">
    Traffic Signal Controller | User Manual
      </p>

      {/* Three-column layout */}
      <div className="grid md:grid-cols-3 pb-6 gap-8">
        {/* Column 1 */}
        <div className="space-y-6">
          <section>
            <p className="text-lg font-semibold mb-2">System Basics</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Power Switch (P): ON/OFF whole system.</li>
              <li>Signal On/Off (O): Toggle lights only.</li>
            </ul>
          </section>

          <section>
            <p className="text-lg font-semibold mb-2">Control Modes</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Adaptive → Green time by traffic.</li>
              <li>Manual → Operator steps manually.</li>
              <li>Fixed → Equal green for all.</li>
              <li>Actuated → Smart timing limits.</li>
            </ul>
          </section>

          <section>
            <p className="text-lg font-semibold mb-2">Signal Modes</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Normal → Standard cycle</li>
              <li>Manual → Needs Manual Step</li>
              <li>Transit → Bus priority</li>
              <li>Pre-Timed → Fixed cycles</li>
              <li>Pedestrian → Walk priority</li>
            </ul>
          </section>
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          <section>
            <p className="text-lg font-semibold mb-2">Manual Ops</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Manual Step (M): Advance one phase.</li>
              <li>Phase Hold (H): Freeze current light.</li>
            </ul>
          </section>

          <section>
            <p className="text-lg font-semibold mb-2">Emergency</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Emergency Override (E): Emergency priority.</li>
              <li>Help (D): Send help signal.</li>
              <li>Cycle Reset (C): Reset all to Red.</li>
              <li>Test Mode (X): Diagnostic run.</li>
            </ul>
          </section>

          <section>
            <p className="text-lg font-semibold mb-2">Overrides</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Force Green (G) → All Green</li>
              <li>Force Yellow (Y) → All Yellow</li>
              <li>Force Red (R) → All Red</li>
              <li>All-Red Clearance (A) → Stop all</li>
              <li>Detector Bypass (B) → Ignore sensors</li>
              <li>Flash Mode (F) → Blink Yellow</li>
            </ul>
          </section>
        </div>

        {/* Column 3 */}
        <div className="space-y-6">
          <section>
            <p className="text-lg font-semibold mb-2">Light Timing</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Adaptive: Low=2s, Med=4s, High=6s</li>
              <li>Fixed: Always 4s</li>
              <li>Manual: 2s, needs stepping</li>
              <li>Actuated: Low=2s, Med=3.5s, High=6s</li>
              <li>Yellow: 1.5s always</li>
            </ul>
          </section>

          <section>
            <p className="text-lg font-semibold mb-2">Usage</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Normal Traffic → Adaptive / Actuated</li>
              <li>Night → Flash Mode</li>
              <li>VIP/Event → Phase Hold / Force Green</li>
              <li>Emergency → Override / All-Red</li>
              <li>Maintenance → Force Red / Signals OFF</li>
              <li>Pedestrian → Pedestrian Mode</li>
            </ul>
          </section>
            </div>
            </div>
            
<div  className=" border-t-1 pt-7 border-gray-600">
<section>
  <p className="text-lg font-semibold mb-2">Signal Modes</p>
  <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
    <li>
      <strong>Fixed Mode:</strong> Signals change on a fixed timer. Green: 20s → Yellow: 5s → All Red: 3s. Lanes 1 & 3 go first, then 2 & 4.
    </li>
    <li>
      <strong>Adaptive Mode:</strong> Signal times adjust dynamically based on traffic load. Group A (Lanes 1 & 3): Green 12s. Group B (Lanes 2 & 4): Green 8s. Yellow 4s, All Red 2s.
    </li>
    <li>
      <strong>Actuated Mode:</strong> Green time depends on vehicle presence (sensors). Group A: Green 18s, Group B: Green 7s. Yellow 5s, All Red 3s.
    </li>
    <li>
      <strong>Manual Mode:</strong> Operator steps through phases. Green → Yellow → All Red → Switch group. Useful for emergencies or police-controlled junctions.
    </li>
  </ul>
</section>
          
      
      </div>

     

    
    </div>

  
  );
}
