title: Electro Discharge Machining
date: 2009-11-17  
tags: metals-processing

Technology suitable for both serial and small quantity production

<abbr title="Electro Discharge Machining">EDM</abbr> is basically a thermal process in which the material is removed by the action of electric sparks between two electrodes made of conductive materials: part-electrode and tool-electrode. The separation space between both electrodes (gap) where the spark takes place is a fundamental process characteristic. Therefore the gap establishes the necessary conditions to establish the electrical field prior to the spark. The electric spark is the material removing effect and presents different stages that only last for some milli- or micro-seconds. The complete sparking cycle is repeated thousands of times per second, generating small craters that conform the final part geometry. EDM is used to machine hard, brittle metals.

In [A_4], micro EDM is widely illustrated. Micro EDM is the successful adaptation of EDM for micromachining from simple holes to complex moulds [A_19]. Here the discharge energy is reduced to the order of 10-6 to 10-7 Joules in order to minimize the unit material removal. Based on the electrode being used, Micro EDM can be classified in to drilling, die-sinking, milling, wire EDM (WEDM) and wire electro-discharge grinding (WEDG) [A_20] [A_21]. An overview of the capabilities of micro EDM is provided in the following table.

<table class="info">
<tr><th>Micro EDM Variant</th><th>Geometric Complexity</th><th>Minimum Feature Size</th><th>Max. Aspect Ratio</th><th>Surface Quality Ra (µm)</th></tr>
<tr><th>Drilling</th><td>2D</td><td>5 µm</td><td>appr. 25</td><td>0.05 - 0.3</td></tr>
<tr><th>Die-Sinking</th><td>3D</td><td>appr. 20 µm</td><td>appr. 15</td><td>0.05 - 0.3</td></tr>
<tr><th>Milling</th><td>3D</td><td>appr. 20 µm</td><td>appr. 10</td><td>0.5 - 1</td></tr>
<tr><th>WEDM</th><td>2,5D</td><td>appr. 30 µm</td><td>appr. 100</td><td>0.1 - 0.2</td></tr>
<tr><th>WEDG</th><td>Axi-sym</td><td>3 µm</td><td>30</td><td>0.8</td></tr>
</table>

Because of the stochastic nature of the sparking, it is difficult to fully explain the mechanism of transient material removal in EDM. It has been known that the mechanism of material removal in EDM is based on electrical energy transfer and thermal process. However, this energy transfer is still not well understood, particularly in micro-EDM using small energy (< 100 μJ) [A_22]. The description of the physical phenomena in the discharge gap has not been established in a common accepted theory [A_23]. The gap phenomena include plasma formation in the dielectric, interaction between electrons and ions, heat transfer and material ejection.

Micro EDM power supply is provided by a relaxation type as well as a transistor type circuits. In a relaxation type circuit, discharge pulse duration is dominated by the capacitance of the capacitor and the inductance of the wire connecting the capacitor to the workpiece and the tool [A_24]. Discharge energy is determined by the used capacitance and by the stray capacitance that exists i) between the electric feeders, ii) between tool electrode holder and work table iii) between the tool electrode and workpiece [A_18]. The transistor type circuit has better controllability and improved capability to handle large currents with high response. Commercial transistor pulse generators can vary the pulse duration, duty factor, and also change the waveform of discharge pulse to reduce the tool wear and improve MRR. However, it is difficult to keep the constant discharge duration shorter than several tens of ns using the transistor type pulse generator [A_18]. By integrating the transistor type isopulse generator with the servo feed control system, about 24 times higher material removal rate has been obtained than that of the conventional RC pulse generator with a constant feed rate in both semifinishing and finishing conditions [A_25]. Nevertheless, the relaxation type pulse generators are still the better choice for finishing in micro EDM because it is difficult to obtain significantly short pulse duration with constant pulse energy using the transistor type pulse generator.

Gap monitoring and control systems are necessary to avoid or minimize the open circuit, arcing and short circuits during machining. A stable gap control system enables better dimensional accuracy of micro machined features by predicting the gap distance and offsetting tool position.

Ignition delay time (td) is an important indicator of the isolation condition of the discharge gap. Larger gap width causes longer ignition delays, resulting in a higher average voltage. Tool feed speed increases when the measured average gap voltage is higher than the preset servo reference voltage and vice versa [A_18]. Other than the average gap voltage, the average delay time can also be used to monitor the gap width [A_26]. In other attempts, gap monitoring circuits were developed to identify the states and ratios of gap open, normal discharge, transient arcing, harmful arcing and short circuit [A_27] [A_28]. These ratios were used as input parameters for online EDM control based on various control strategies.

Instead of complex shaped expensive tools, simple cylindrical tools can be used to machine complex features by profiling [A_29]. It is possible to use hollow electrodes for drilling above 100 μm diameter holes. For lower dimensions solid tools from sintered carbide that have a diameter of around 50 μm are used [47]. Currently WEDG is the widely accepted and commercialized method to fabricate micro tools [A_30] [A_31]. Using single pulse discharge is an innovative technique to produce 20~40 μm diameter tungsten electrodes in hundreds of microseconds. Repeatability of tool shape after fabrication is hard to control in this rapid process [A_32] [A_33] [A_34]. Another method prepares micro rod by self-drilled holes [A_35]. This method does not need initial positioning of the rod with respect to the plate electrode, and the operation is easy and with good repeatability.

Higher heat conductivity, higher melting point and boiling point are desired properties of the tool material. Tungsten which has a high melting point and tensile strength is the predominant tool material in micro EDM [A_36] [A_37]. Tungsten carbide [A_38] and copper have also been used as tool material [A_39]. Electrically conductive CVD diamond is a new entrant. It has shown almost zero electrode wear, even at short pulse duration of 3 μs [A_40]. Mechanical properties and cutting performance of thin wires are the special concern in micro wire EDM [A_41]. In micro wire EDM, apart from tungsten, micro wires made of copper, brass and molybdenum are also commonly used. The tool wear is mainly influenced by polarity and thermal properties of electrode materials [A_18]. The energy dissipation distributed into the anode during discharging is always greater than that into the cathode for both single discharge [A_42] and continuous pulse discharges [A_43]. The carbon layer deposited on the anode surface due to thermal dissociation of the hydrocarbon oil protects the anode surface from wear [A_44]. Thicker carbon layer leads to smaller electrode wear ratio in macro EDM, where the tool is the anode. However, in micro EDM, the tool is typically cathode and hence, deposition of carbon layer is scarce. The effect of thermal properties on electrode wear was investigated in [A_22]. It was found that the boiling point in addition to the melting point of the electrode material plays an important role in the wear of micro EDM tools. It was found that the tool wear ratio reduces with the increase of the tool area [A_37]. Other factors affecting the tool wear ratio, like poor flushing conditions in a deep hole, are difficult to assess and control. This could easily result in wrong estimation of the wear ratio and produced depth [A_45]. Discharge current waveform is yet another factor affecting tool wear [A_18].

Two tool wear compensation methods namely, the linear compensation [A_46] [A_47] and uniform wear method [A_45] have been used in micro EDM. The linear compensation is to feed the tool towards the workpiece and compensate tool wear length after it moves along a certain distance. It is suitable to generate 3D cavities with straight side walls. Uniform wear method includes tool path design rules and tool wear compensation. Tool paths designed based on the uniform wear method can keep the tool wear uniform at the tool tip. This method has been verified by generating 3D micro cavities with inclined side surfaces and spherical surfaces successfully

**Micro Die Sinking EDM** involves the use of an electrode, which is shaped inversely to the desired shape of the workpiece. As part of the material is removed, the electrode is slowly lowered into the workpiece until the resulting cavity has the inverse shape of the electrode. Dielectric fluid is flushed between the electrode and the workpiece to remove the debris created by the process. For this method of fabrication the electrode must be very accurately made and in case of micro EDM should have very small features. Therefore another microfabrication method should be used in advance. The electrodes are mainly made of, copper or/and tungsten copper. When using die sinking to produce micro features special attention should be paid to the uneven wear ratio between micro and macro features on the electrode.

**Micro Wire EDM uses** a fine metallic wire to apply the cut. The wire itself is eroded in the process, but it is continuously fed from a spool through the part, keeping a constant diameter. Nevertheless, if the spark energy is too high, it may break. Wire breakage is the most important technical and economic challenge. µ-WEDM uses the same physical principles with just a few differences; the machines provide higher resolution, the process parameters are controlled in a finer way to reduce the spark energy and applied wires are ∅0.02-0.03 mm. The most widely used dielectric fluid in µ-WEDM is oil, that permits cutting with a smaller gap, and the wire is often made of tungsten. WEDM is widely applied in the manufacturing industry for machining tools (punch and dies) due to its capability to generate ruled geometries in hard materials.

Not involving abrasive agents, nor any contact between part and tool, the machining forces are very low, but not negligible in the case of micromachining. The forces acting on the wire cause it to bend (static component) and vibrate (dynamic component). As a consequence, the real wire position differs from the nominal position programmed for the guides. Thus, the machined part presents some deviations, especially in wall straightness and also in the corners where the directions of the guides’ movements have been changed. In thin wires, these deviations are important errors especially when machining acute angles.

**Micro EDM-milling process**, in which a 3D path is commanded to a simple shape electrode. Using simple shape electrode in micro EDM allows achieving tolerances of 5 µm, holes with an aspect ratio of 100, which can be used for nozzles for ink-jet printers, flow channel orifices and pinholes for X-ray measurements.

<table class="info">
<tr><th colspan="2">Micro-EDM Data Sheet</th></tr>
<tr><td>Mould Materials</td><td>Stainless steel, tool steel, Al7075, Ti, Silicon Carbide, Tungsten Carbide, Graphite, Cu</td></tr>
<tr><td>Electrode (sinkingEDM)</td><td>Tungsten bar electrodes up to Ø0.1, smaller sharpened in the machine up to 20 µm.</td></tr>
<tr><td>Electrode (wireEDM)</td><td>Fine wires of 2000 N/mm2 tungsten Ø0.020-0.030 mm</td>
<tr><td>Machine</td><td>Ultra-precision machine 3-5 axes</td></tr>
<tr><td>Removal rate</td><td>0.6-6 mm3/h depending on process parameters</td>
<tr><th colspan="2">Machining of channels & ribs</th></tr>
<tr><td>Minimum width</td><td>~0.15 mm / ~0.05 mm</td></tr>
<tr><td>Aspect ratio</td><td>10:1 for Ø<0.5; >50:1 for bigger diameters</td></tr>
<tr><td>Accuracy</td><td>±3 µm</td></tr>
<tr><td>Roughness</td><td>0.4~0.5 µm Ra</td></tr>
<tr><th colspan="2">Machining of holes & pins</th></tr>
<tr><td>Minimum diameter</td><td>20-50 µm</td></tr>
<tr><td>Aspect ratio</td><td>10:1 for Ø<0.5; >50:1 for bigger diameters</td></tr>
<tr><td>Accuracy</td><td>+ 3 µm (sinkingEDM); + 1 µm (wireEDM)</td></tr>
<tr><td>Is a 3D freeform surface possible?</td><td>Yes</td></tr>
</table>

[A_4]      Micro and Nano Machining by Electro-Psysical and Chemical Processes, *K.P. Rajurkar, G. Levy , A. Malshe, M.M. Sundaram, J. McGeough, X. Hu, R. Resnick, A. De Silva,* Annals of the CIRP Vol. 55/2/2006, 643-666.

[A_18]     *Kunieda, M., Lauwers, B., Rajurkar , K. P., Schumacher, B. M.,* 2005, Advancing EDM through Fundamental Insight into the Process, Annals of the CIRP, 54 /2: 599-622.

[A_19]     *Uhlmann, E., Piltz, S., Doll, U.,* 2005, Machining of Micro/Miniature Dies and Moulds by Electrical Discharge Machining--Recent Development, Journal of Materials Processing Technology, 167 /2-3: 488-493.

[A_20]     *Pham, D. T., Dimov, S. S., Bigot, S., Ivanov, A., Popov, K.,* 2004, Micro-EDM - Recent Developments and Research Issues, Journal of Materials Processing Technology, 149 /1-3: 50-57.

[A_21]     *Masuzawa, T.,* 2001, Micro-EDM, Proceedings of the 13th International Symposium for Electromachining, Bilbao, Spain, 1-19.

[A_22]     *Tsai, Y.-Y., Masuzawa, T.,* 2004, An Index to Evaluate the Wear Resistance of the Electrode in Micro-EDM, Journal of Materials Processing Technology, 149 /1-3: 304-309.

[A_23]     *Schumacher, B. M.,* 2004, After 60 Years of EDM the Discharge Process Remains Still Disputed, Journal of Materials Processing Technology, 149 /1-3: 376-381.

[A_24]     *Lim, H. S., Wong, Y. S., Rahman, M., Edwin Lee, M. K.,* 2003, A Study on the Machining of High-Aspect Ratio Micro-Structures Using Micro-EDM, Journal of Materials Processing Technology, 140 /1-3: 318-325.

[A_25]     *Han, F., Wachi, S., Kunieda, M.,* 2004, Improvement of Machining Characteristics of Micro-EDM Using Transistor Type Isopulse Generator and Servo Feed Control, Precision Engineering, 28 /4: 378-385.

[A_26]     *Altpeter, F., Perez, R.,* 2004, Relevant Topics in Wire Electrical Discharge Machining Control, Journal of Materials Processing Technology, 149 /1-3: 147-151.

[A_27]     *Rajurkar, K. P., Wang, W. M.,* 1991, On-Line Monitor and Control for Wire Breakage in WEDM, Annals of the CIRP, 40 /1: 219-222.

[A_28]     *Snoeys, R., Dauw, D., Kruth, J. P.,* 1980, Improved Adaptive Control System for EDM Processes, Annals of the CIRP, 29 /1: 97-101

[A_29]     *Yu, Z. Y., Kozak, J., Rajurkar, K. P.,* 2003, Modelling and Simulation of Micro EDM Process, Annals of the CIRP, 52 /1: 143-146.

[A_30]     *Masuzawa, T., Fujino, M., Kobayashi, K., Suzuki, T., Kinoshita, N.,* 1985, Wire Electro-Discharge Grinding for Micro-Machining., Annals of the CIRP, 34 /1: 431- 434.

[A_31]     *Masuzawa, T., Yamaguchi, M., Fujino, M.,* 2005, Surface Finishing of Micropins Produced by WEDG Annals of the CIRP, 54 /1: 171-174.

[A_32]     *Takezawa, H., Hamamatsu, H., Mohri, N., Saito, N.*, 2004, Development of Micro-EDM-Center with Rapidly Sharpened electrode, Journal of Materials Processing Technology, 149 /1-3: 112-116.

[A_33]     *Takezawa, H., Itoh, N., Mohri, N.*, 2001, The Behaviour of Thin Electrode Wear in Electrical Discharge Machining. Proceedings of the 13th International Symposium for Electromachining, Bilbao, Spain, 727-735.

[A_34]     *Takezawa, H., Mohri, N., Furutani, K.,* 2001, Rapid Production of a Thin Electrode by a Single Discharge Machining. I. Machining Phenomena and Application of Formed Electrode, Journal of the Japan Society of Precision Engineering, 67 /8: 1299-1303.

[A_35]     *Yamazaki, M., Suzuki, T., Mori, N., Kunieda, M.,* 2004, EDM of Micro-Rods by Self-Drilled Holes, Journal of Materials Processing Technology , 149 /1-3: 134-138.

[A_36]     *Song, X., Reynaerts, D., Meeusen, W., Van Brussel, H.*, 1999, Investigation of Micro-EDM for Silicon Microstructure Fabrication, Proceedings of SPIE The International Society for Optical Engineering, 3680 /II: 792-799.

[A_37]     *Yu, Z., Rajurkar, K. P., Shen, H.,* 2002, Drilling of Noncircular Blind Micro Holes by Micro EDM, Transactions of the NAMRI/SME 30: 263-270.

[A_38]     *Yu, Z. Y., Masuzawa, T., Fujino, M.,* 1998, 3D Micro- EDM with Simple Shape Electrode Part1, International Journal of Electrical Machining, 3: 7-12.

[A_39]     *Sharma, A., Iwai, M., Kawanaka, K., Suzuki, K., Uematsu, T.,* 2004, Attempt at EDM of Electrically Conductive Diamond and its Application to Miniature Mold Processing. 7th International Symposium on Advances in Abrasive Technology, Bursa, Turkey, 565-568.

[A_40]     *Sharma, A., Iwai, M., Suzuki, K., Uematsu, T.,* 2004, Low-Wear Diamond Electrode for Micro-EDM of Die-Steel. 7th International Symposium on Advances in Abrasive Technology, Bursa, Turkey, 559-560.

[A_41]     *Dauw, D. F.,* 1994, High-Precision Wire-EDM by Online Wire Positioning Control, Annals of the CIRP, 43 /1: 193-197.

[A_42]     *Xia, H., Kunieda, M., Nishiwaki, N.,* 1996, Removal Amount Difference Between Anode and Cathode In EDM Process, International Journal of Electrical Machining, 1: 42-52.

[A_43]     *Xia, H., Hashimoto, H., Kunieda, M., Nishiwaki, N.,* 1996, Measurement of Energy Distribution in Continuous EDM Process, Seimitsu Kogaku Kaishi/Journal of the Japan Society for Precision Engineering, 62 /8: 1141-1145.

[A_44]     *Natsu, W., Kunieda, M., Nishiwaki, N.,* 2004, Study On Influence of Inter-Electrode Atmosphere on Carbon Adhesion and Removal Amount, International Journal of Electrical Machining, 9: 43-50.

[A_45]     *Yu, Z. Y., Masuzawa, T., Fujino, M.,* 1998, Micro-EDM for Three-Dimensional Cavities – Development of Uniform Wear Method, Annals of the CIRP, 47 /1: 169-172.

[A_46]     *Yuzawa, T., Magara, T., Imai, Y., Sato, T.,* 1997, Micro Electric Discharge Scanning Using a Mini-Size Cylindrical Electrode, Kata Gijutsu, 12 /8: 104-105.

[A_47]     *Bleys, P., Kruth, J.-P., Lauwers, B., Zryd, A., Delpretti, R., Tricarico, C.,* 2002, Real-Time Tool Wear Compensation in Milling EDM, Annals of the CIRP, 51 /1: 157-160.