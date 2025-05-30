import{_ as e,c as t,al as n,o}from"./chunks/framework.NFAqBSgQ.js";const b=JSON.parse('{"title":"boards/mips/pic32mx/mirtoo README","description":"","frontmatter":{},"headers":[],"relativePath":"en/platforms/mips/pic32mx/boards/mirtoo/README.md","filePath":"en/platforms/mips/pic32mx/boards/mirtoo/README.md"}'),i={name:"en/platforms/mips/pic32mx/boards/mirtoo/README.md"};function l(r,a,p,s,u,c){return o(),t("div",null,a[0]||(a[0]=[n(`<h1 id="boards-mips-pic32mx-mirtoo-readme" tabindex="-1">boards/mips/pic32mx/mirtoo README <a class="header-anchor" href="#boards-mips-pic32mx-mirtoo-readme" aria-label="Permalink to &quot;boards/mips/pic32mx/mirtoo README&quot;">​</a></h1><p>This README file discusses the port of NuttX to the DTX1-4000L &quot;Mirtoo&quot; module. This module uses MicroChip PIC32MX250F128D and the Dimitech DTX1-4000L EV-kit1 V2. See <a href="http://www.dimitech.com/" target="_blank" rel="noreferrer">http://www.dimitech.com/</a> for further information.</p><h1 id="contents" tabindex="-1">Contents <a class="header-anchor" href="#contents" aria-label="Permalink to &quot;Contents&quot;">​</a></h1><p>PIC32MX250F128D Pin Out Toolchains Loading NuttX with ICD3 LED Usage UART Usage Analog Input PIC32MX Configuration Options Configurations</p><h1 id="pic32mx250f128d-pin-out" tabindex="-1">PIC32MX250F128D Pin Out <a class="header-anchor" href="#pic32mx250f128d-pin-out" aria-label="Permalink to &quot;PIC32MX250F128D Pin Out&quot;">​</a></h1><p>PIC32MX250F128D 44 pin package.</p><p>PIN PIC32 SIGNAL(s) BOARD SIGNAL/USAGE EV-Kit1 CONNECTION</p><hr><p>1 RPB9/SDA1/CTED4/PMD3/RB9 FUNC3 FUNC3, to X3, pin3 RPB9 Peripheral pin selection RB9<br> SDA1 I2C1 data<br> CTED4 CTMU External Edge Input 4<br> PMD3 Parallel Master Port data bit 3<br> RB9 PORTB, Pin 9</p><h2 id="_2-rpc6-pma1-rc6-func5-func5-to-x3-pin5-rpc6-peripheral-pin-selectionrc6-pma1-parallel-master-port-address-bit-1-rc6-portc-pin-6" tabindex="-1">2 RPC6/PMA1/RC6 FUNC5 FUNC5, to X3, pin5 RPC6 Peripheral pin selection RC6 PMA1 Parallel Master Port Address bit 1 RC6 PORTC, Pin 6 --- <a class="header-anchor" href="#_2-rpc6-pma1-rc6-func5-func5-to-x3-pin5-rpc6-peripheral-pin-selectionrc6-pma1-parallel-master-port-address-bit-1-rc6-portc-pin-6" aria-label="Permalink to &quot;2 RPC6/PMA1/RC6 FUNC5 FUNC5, to X3, pin5 RPC6 Peripheral pin selection
RC6 PMA1 Parallel Master Port Address bit 1 RC6 PORTC, Pin 6 ---&quot;">​</a></h2><p>---------------------------------- ---------------------------------- 3 RPC7/PMA0/RC7 PEN, PGA117 ENA pin Not available off module RPC7 Peripheral pin selection RC7 Not available PMA0 Parallel Master Port Address bit 0 Not available RC7 PORTC, Pin 7 Used for PGA117 ENA output</p><hr><h2 id="_4rpc8-pma5-rc8-led0-not-available-off-module-rpc8-peripheral-selection-portc-pin-8-not-available-pma5-parallel-master-port-address-bit-5-notavailable-rc8-portc-pin-8-used-to-drive-led0" tabindex="-1">---------------------------------- ---------------------------------- 4 RPC8/PMA5/RC8 LED0 Not available off module RPC8 Peripheral Selection, PORTC, Pin 8 Not available PMA5 Parallel Master Port Address bit 5 Not available RC8 PORTC, Pin 8 Used to drive LED0 --- <a class="header-anchor" href="#_4rpc8-pma5-rc8-led0-not-available-off-module-rpc8-peripheral-selection-portc-pin-8-not-available-pma5-parallel-master-port-address-bit-5-notavailable-rc8-portc-pin-8-used-to-drive-led0" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 4
RPC8/PMA5/RC8 LED0 Not available off module RPC8 Peripheral Selection,
PORTC, Pin 8 Not available PMA5 Parallel Master Port Address bit 5 Not
available RC8 PORTC, Pin 8 Used to drive LED0 ---&quot;">​</a></h2><h2 id="_5rpc9-cted7-pma6-rc9-led1-not-available-off-module-rpc9-peripheralselection-portc-pin-9-not-available-cted7-ctmu-external-edge-input-7not-available-pma6-parallel-master-port-address-bit-6-not-available-rc9portc-pin-9-used-to-drive-led1" tabindex="-1">---------------------------------- ---------------------------------- 5 RPC9/CTED7/PMA6/RC9 LED1 Not available off module RPC9 Peripheral Selection, PORTC, Pin 9 Not available CTED7 CTMU External Edge Input 7 Not available PMA6 Parallel Master Port Address bit 6 Not available RC9 PORTC, Pin 9 Used to drive LED1 --- <a class="header-anchor" href="#_5rpc9-cted7-pma6-rc9-led1-not-available-off-module-rpc9-peripheralselection-portc-pin-9-not-available-cted7-ctmu-external-edge-input-7not-available-pma6-parallel-master-port-address-bit-6-not-available-rc9portc-pin-9-used-to-drive-led1" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 5
RPC9/CTED7/PMA6/RC9 LED1 Not available off module RPC9 Peripheral
Selection, PORTC, Pin 9 Not available CTED7 CTMU External Edge Input 7
Not available PMA6 Parallel Master Port Address bit 6 Not available RC9
PORTC, Pin 9 Used to drive LED1 ---&quot;">​</a></h2><h2 id="_6vss-vss-not-available-off-module" tabindex="-1">---------------------------------- ---------------------------------- 6 VSS VSS Not available off module --- <a class="header-anchor" href="#_6vss-vss-not-available-off-module" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 6
VSS VSS Not available off module ---&quot;">​</a></h2><h2 id="_7vcap-vcap-not-available-off-module" tabindex="-1">---------------------------------- ---------------------------------- 7 VCAP VCAP Not available off module --- <a class="header-anchor" href="#_7vcap-vcap-not-available-off-module" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 7
VCAP VCAP Not available off module ---&quot;">​</a></h2><h2 id="_8pged2-rpb10-d-cted11-rb10-func0-func0-to-ft230xs-rxd-and-debug-portpged2-debug-channel-2-data-used-at-boot-time-for-icd3-rpb10-peripheralselection-portb-pin-10-used-for-uart-rxd-d-usb-d-not-availablected11-ctmu-external-edge-input-11-not-available-rb10-portb-pin-10-notavailable-9pgec2-rpb11-d-rb11-func1-func1-to-ft230xs-txd-pgec2-debug-channel-2clock-used-at-boot-time-for-icd3-rpb11-peripheral-selection-portb-pin11-used-for-uart-txd-d-usb-d-not-available-rb11-portb-pin-11-notavailable-10vusb3v3-3-3v-via-vbat-pin-1-vusb3v3-usb-internal-transceiver-supply3-3v-11an11-rpb13-ctpls-pmrd-rb13-csm-sst25vf3032b-chip-select-not-availableoff-module-an11-analog-input-channel-11-not-available-rpb13-peripheralselection-portb-pin-12-not-available-ctpls-ctmu-pulse-output-notavailable-pmrd-parallel-master-port-read-strobe-not-available-rb13portb-pin-12-used-for-sst25vf3032b-chip-select" tabindex="-1">---------------------------------- ---------------------------------- 8 PGED2/RPB10/D+/CTED11/RB10 FUNC0 FUNC0, to FT230XS RXD and debug port PGED2 Debug Channel 2 data Used at boot time for ICD3 RPB10 Peripheral Selection, PORTB, Pin 10 Used for UART RXD D+ USB D+ Not available CTED11 CTMU External Edge Input 11 Not available RB10 PORTB, Pin 10 Not available --- ------------------------------------------------ ---------------------------------- ---------------------------------- 9 PGEC2/RPB11/D-/RB11 FUNC1 FUNC1, to FT230XS TXD PGEC2 Debug Channel 2 clock Used at boot time for ICD3 RPB11 Peripheral Selection, PORTB, Pin 11 Used for UART TXD D- USB D- Not available RB11 PORTB, Pin 11 Not available --- ------------------------------------------------ ---------------------------------- ---------------------------------- 10 VUSB3V3 3.3V (via VBAT, Pin 1) VUSB3V3 USB internal transceiver supply 3.3V --- ------------------------------------------------ ---------------------------------- ---------------------------------- 11 AN11/RPB13/CTPLS/PMRD/RB13 ~CSM SST25VF3032B Chip Select Not available off-module AN11 Analog input channel 11 Not available RPB13 Peripheral Selection, PORTB, Pin 12 Not available CTPLS CTMU Pulse Output Not available PMRD Parallel Master Port read strobe Not available RB13 PORTB, Pin 12 Used for SST25VF3032B Chip Select --- <a class="header-anchor" href="#_8pged2-rpb10-d-cted11-rb10-func0-func0-to-ft230xs-rxd-and-debug-portpged2-debug-channel-2-data-used-at-boot-time-for-icd3-rpb10-peripheralselection-portb-pin-10-used-for-uart-rxd-d-usb-d-not-availablected11-ctmu-external-edge-input-11-not-available-rb10-portb-pin-10-notavailable-9pgec2-rpb11-d-rb11-func1-func1-to-ft230xs-txd-pgec2-debug-channel-2clock-used-at-boot-time-for-icd3-rpb11-peripheral-selection-portb-pin11-used-for-uart-txd-d-usb-d-not-available-rb11-portb-pin-11-notavailable-10vusb3v3-3-3v-via-vbat-pin-1-vusb3v3-usb-internal-transceiver-supply3-3v-11an11-rpb13-ctpls-pmrd-rb13-csm-sst25vf3032b-chip-select-not-availableoff-module-an11-analog-input-channel-11-not-available-rpb13-peripheralselection-portb-pin-12-not-available-ctpls-ctmu-pulse-output-notavailable-pmrd-parallel-master-port-read-strobe-not-available-rb13portb-pin-12-used-for-sst25vf3032b-chip-select" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 8
PGED2/RPB10/D+/CTED11/RB10 FUNC0 FUNC0, to FT230XS RXD and debug port
PGED2 Debug Channel 2 data Used at boot time for ICD3 RPB10 Peripheral
Selection, PORTB, Pin 10 Used for UART RXD D+ USB D+ Not available
CTED11 CTMU External Edge Input 11 Not available RB10 PORTB, Pin 10 Not
available --- ------------------------------------------------
---------------------------------- ---------------------------------- 9
PGEC2/RPB11/D-/RB11 FUNC1 FUNC1, to FT230XS TXD PGEC2 Debug Channel 2
clock Used at boot time for ICD3 RPB11 Peripheral Selection, PORTB, Pin
11 Used for UART TXD D- USB D- Not available RB11 PORTB, Pin 11 Not
available --- ------------------------------------------------
---------------------------------- ---------------------------------- 10
VUSB3V3 3.3V (via VBAT, Pin 1) VUSB3V3 USB internal transceiver supply
3.3V --- ------------------------------------------------
---------------------------------- ---------------------------------- 11
AN11/RPB13/CTPLS/PMRD/RB13 \\~CSM SST25VF3032B Chip Select Not available
off-module AN11 Analog input channel 11 Not available RPB13 Peripheral
Selection, PORTB, Pin 12 Not available CTPLS CTMU Pulse Output Not
available PMRD Parallel Master Port read strobe Not available RB13
PORTB, Pin 12 Used for SST25VF3032B Chip Select ---&quot;">​</a></h2><h2 id="_12pged-tms-pma10-ra10-din5-port5-to-x7-pin-2-pged4-debug-channel-4-data-also-x13-pin6-tms-jtag-test-mode-select-pin-pma10-parallelmaster-port-address-bit-10-not-available-ra10-porta-pin-10-may-be-usedas-gpio-input-13pgec-tck-cted8-pma7-ra7-din2-port2-to-x4-pin-2-pgec4-debug-channel-4clock-not-available-also-x13-pin5-tck-jtag-test-clock-input-pin-maybe-used-as-jtag-clock-input-cted8-ctmu-external-edge-input-8-may-be-usedas-ctmu-input-pma7-parallel-master-port-address-bit-7-not-available-ra7porta-pin-7-may-be-used-as-gpio-input" tabindex="-1">---------------------------------- ---------------------------------- 12 PGED/TMS/PMA10/RA10 DIN5 PORT5, to X7, pin 2 PGED4 Debug Channel 4 data (?) (also X13, pin6) TMS JTAG Test mode select pin (?) PMA10 Parallel Master Port Address bit 10 Not available RA10 PORTA, Pin 10 May be used as GPIO input --- ------------------------------------------------ ---------------------------------- ---------------------------------- 13 PGEC/TCK/CTED8/PMA7/RA7 DIN2 PORT2, to X4, pin 2 PGEC4 Debug Channel 4 clock Not available (also X13, pin5) TCK JTAG test clock input pin May be used as JTAG clock input CTED8 CTMU External Edge Input 8 May be used as CTMU input PMA7 Parallel Master Port Address bit 7 Not available RA7 PORTA, Pin 7 May be used as GPIO input --- <a class="header-anchor" href="#_12pged-tms-pma10-ra10-din5-port5-to-x7-pin-2-pged4-debug-channel-4-data-also-x13-pin6-tms-jtag-test-mode-select-pin-pma10-parallelmaster-port-address-bit-10-not-available-ra10-porta-pin-10-may-be-usedas-gpio-input-13pgec-tck-cted8-pma7-ra7-din2-port2-to-x4-pin-2-pgec4-debug-channel-4clock-not-available-also-x13-pin5-tck-jtag-test-clock-input-pin-maybe-used-as-jtag-clock-input-cted8-ctmu-external-edge-input-8-may-be-usedas-ctmu-input-pma7-parallel-master-port-address-bit-7-not-available-ra7porta-pin-7-may-be-used-as-gpio-input" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 12
PGED/TMS/PMA10/RA10 DIN5 PORT5, to X7, pin 2 PGED4 Debug Channel 4 data
(?) (also X13, pin6) TMS JTAG Test mode select pin (?) PMA10 Parallel
Master Port Address bit 10 Not available RA10 PORTA, Pin 10 May be used
as GPIO input --- ------------------------------------------------
---------------------------------- ---------------------------------- 13
PGEC/TCK/CTED8/PMA7/RA7 DIN2 PORT2, to X4, pin 2 PGEC4 Debug Channel 4
clock Not available (also X13, pin5) TCK JTAG test clock input pin May
be used as JTAG clock input CTED8 CTMU External Edge Input 8 May be used
as CTMU input PMA7 Parallel Master Port Address bit 7 Not available RA7
PORTA, Pin 7 May be used as GPIO input ---&quot;">​</a></h2><h2 id="_14cvref-an10-c3inb-rpb14-vbuson-sck1-cted5-rb14-func5-through-resistor-func5-to-x3-pin5-cvrefout-comparator-voltage-reference-output-an10analog-input-channel-10-c3inb-comparator-3-input-b-rpb14-peripheralselection-portb-pin-14-vbuson-usb-host-and-otg-bus-power-control-sck1spi1-clock-cted5-ctmu-external-edge-input-5-rb14-portb-pin-14" tabindex="-1">---------------------------------- ---------------------------------- 14 CVREF/AN10/C3INB/RPB14/VBUSON/SCK1/CTED5/RB14 FUNC5 (through resistor) FUNC5, to X3, pin5 CVREFOUT Comparator Voltage Reference output AN10 Analog input channel 10 C3INB Comparator 3 Input B RPB14 Peripheral Selection, PORTB, Pin 14 VBUSON USB Host and OTG bus power control SCK1 SPI1 clock CTED5 CTMU External Edge Input 5 RB14 PORTB, Pin 14 --- <a class="header-anchor" href="#_14cvref-an10-c3inb-rpb14-vbuson-sck1-cted5-rb14-func5-through-resistor-func5-to-x3-pin5-cvrefout-comparator-voltage-reference-output-an10analog-input-channel-10-c3inb-comparator-3-input-b-rpb14-peripheralselection-portb-pin-14-vbuson-usb-host-and-otg-bus-power-control-sck1spi1-clock-cted5-ctmu-external-edge-input-5-rb14-portb-pin-14" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 14
CVREF/AN10/C3INB/RPB14/VBUSON/SCK1/CTED5/RB14 FUNC5 (through resistor)
FUNC5, to X3, pin5 CVREFOUT Comparator Voltage Reference output AN10
Analog input channel 10 C3INB Comparator 3 Input B RPB14 Peripheral
Selection, PORTB, Pin 14 VBUSON USB Host and OTG bus power control SCK1
SPI1 clock CTED5 CTMU External Edge Input 5 RB14 PORTB, Pin 14 ---&quot;">​</a></h2><h2 id="_15an9-c3ina-rpb15-sck2-cted6-pmcs1-rb15-sck-not-available-off-module-an9analog-input-channel-9-not-available-c3ina-comparator-3-input-a-notavailable-rpb15-peripheral-selection-portb-pin-15-not-available-sck2spi2-clock-used-for-spi2-clock-cted6-ctmu-external-edge-input-6-notavailable-pmcs1-parallel-master-port-chip-select-1-not-available-rb15portb-pin-15-not-available" tabindex="-1">---------------------------------- ---------------------------------- 15 AN9/C3INA/RPB15/SCK2/CTED6/PMCS1/RB15 SCK Not available off module AN9 Analog input channel 9 Not available C3INA Comparator 3 Input A Not available RPB15 Peripheral Selection, PORTB, Pin 15 Not available SCK2 SPI2 clock Used for SPI2 clock CTED6 CTMU External Edge Input 6 Not available PMCS1 Parallel Master Port Chip Select 1 Not available RB15 PORTB, Pin 15 Not available --- <a class="header-anchor" href="#_15an9-c3ina-rpb15-sck2-cted6-pmcs1-rb15-sck-not-available-off-module-an9analog-input-channel-9-not-available-c3ina-comparator-3-input-a-notavailable-rpb15-peripheral-selection-portb-pin-15-not-available-sck2spi2-clock-used-for-spi2-clock-cted6-ctmu-external-edge-input-6-notavailable-pmcs1-parallel-master-port-chip-select-1-not-available-rb15portb-pin-15-not-available" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 15
AN9/C3INA/RPB15/SCK2/CTED6/PMCS1/RB15 SCK Not available off module AN9
Analog input channel 9 Not available C3INA Comparator 3 Input A Not
available RPB15 Peripheral Selection, PORTB, Pin 15 Not available SCK2
SPI2 clock Used for SPI2 clock CTED6 CTMU External Edge Input 6 Not
available PMCS1 Parallel Master Port Chip Select 1 Not available RB15
PORTB, Pin 15 Not available ---&quot;">​</a></h2><h2 id="_16avss-avss-not-available-off-module" tabindex="-1">---------------------------------- ---------------------------------- 16 AVSS AVSS Not available off module --- <a class="header-anchor" href="#_16avss-avss-not-available-off-module" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 16
AVSS AVSS Not available off module ---&quot;">​</a></h2><h2 id="_17avdd-avdd-not-available-off-module" tabindex="-1">---------------------------------- ---------------------------------- 17 AVDD AVDD Not available off module --- <a class="header-anchor" href="#_17avdd-avdd-not-available-off-module" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 17
AVDD AVDD Not available off module ---&quot;">​</a></h2><h2 id="_18-mclr-mclr-tc2030-nl-pin-1-not-available-off-module" tabindex="-1">---------------------------------- ---------------------------------- 18 ~MCLR ~MCLR, TC2030-NL, pin 1 Not available off module --- <a class="header-anchor" href="#_18-mclr-mclr-tc2030-nl-pin-1-not-available-off-module" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 18
\\~MCLR \\~MCLR, TC2030-NL, pin 1 Not available off module ---&quot;">​</a></h2><h2 id="_19pged3-vref-cvref-an0-c3inc-rpa0-cted1-pmd7-ra0-ain-pga117-vout-an0analog-input-channel-0-ain-ra0-porta-pin-0-not-available-cvref-comparator-voltage-reference-high-c3inc-comparator-3-input-c-pmd7-parallel-master-port-data-bit-7-not-available-cted1-ctmu-externaledge-input-1-not-available-pged3-debug-channel-3-data-not-availablevref-analog-voltage-reference-high-not-available" tabindex="-1">---------------------------------- ---------------------------------- 19 PGED3/VREF+/CVREF+/AN0/C3INC/RPA0/CTED1/PMD7/RA0 AIN PGA117 Vout AN0 Analog input channel 0 AIN RA0 PORTA, Pin 0 Not available CVREF+ Comparator Voltage Reference (high) (?) C3INC Comparator 3 Input C (?) PMD7 Parallel Master Port data bit 7 Not available CTED1 CTMU External Edge Input 1 Not available PGED3 Debug Channel 3 data Not available VREF+ Analog voltage reference (high) Not available --- <a class="header-anchor" href="#_19pged3-vref-cvref-an0-c3inc-rpa0-cted1-pmd7-ra0-ain-pga117-vout-an0analog-input-channel-0-ain-ra0-porta-pin-0-not-available-cvref-comparator-voltage-reference-high-c3inc-comparator-3-input-c-pmd7-parallel-master-port-data-bit-7-not-available-cted1-ctmu-externaledge-input-1-not-available-pged3-debug-channel-3-data-not-availablevref-analog-voltage-reference-high-not-available" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 19
PGED3/VREF+/CVREF+/AN0/C3INC/RPA0/CTED1/PMD7/RA0 AIN PGA117 Vout AN0
Analog input channel 0 AIN RA0 PORTA, Pin 0 Not available CVREF+
Comparator Voltage Reference (high) (?) C3INC Comparator 3 Input C (?)
PMD7 Parallel Master Port data bit 7 Not available CTED1 CTMU External
Edge Input 1 Not available PGED3 Debug Channel 3 data Not available
VREF+ Analog voltage reference (high) Not available ---&quot;">​</a></h2><h2 id="_20pgec3-vref-cvref-an1-rpa1-cted2-pmd6-ra1-si-not-available-off-modulepgec3-debug-channel-3-clock-not-available-vref-analog-voltage-reference-low-not-available-cvref-comparator-voltage-reference-low-notavailable-an1-analog-input-channel-1-not-available-rpa1-peripheralselection-porta-pin-1-used-for-si-cted2-ctmu-external-edge-input-2-notavailable-pmd6-parallel-master-port-data-bit-6-not-available-ra1-porta-pin-1-not-available-21pged1-an2-c1ind-c2inb-c3ind-rpb0-pmd0-rb0-din6-port6-to-x9-pin-2-pged1debug-channel-1-data-not-available-also-x13-pin4-an2-analog-inputchannel-2-not-available-digital-input-only-c1ind-comparator-1-input-dnot-available-digital-input-only-c2inb-comparator-2-input-b-notavailable-digital-input-only-c3ind-comparator-3-input-d-not-available-digital-input-only-rpb0-peripheral-selection-portb-pin-0-may-be-usedfor-peripheral-input-pmd0-parallel-master-port-data-bit-0-not-availablerb0-portb-pin-0-may-be-used-for-gpio-input" tabindex="-1">---------------------------------- ---------------------------------- 20 PGEC3/VREF-/CVREF-/AN1/RPA1/CTED2/PMD6/RA1 SI Not available off module PGEC3 Debug Channel 3 clock Not available VREF- Analog voltage reference (low) Not available CVREF- Comparator Voltage Reference (low) Not available AN1 Analog input channel 1 Not available RPA1 Peripheral Selection PORTA, Pin 1 Used for SI CTED2 CTMU External Edge Input 2 Not available PMD6 Parallel Master Port data bit 6 Not available RA1 PORTA, Pin 1 Not available --- ------------------------------------------------ ---------------------------------- ---------------------------------- 21 PGED1/AN2/C1IND/C2INB/C3IND/RPB0/PMD0/RB0 DIN6 PORT6, to X9, pin 2 PGED1 Debug Channel 1 data Not available (also X13, pin4) AN2 Analog input channel 2 Not available (digital input only) C1IND Comparator 1 Input D Not available (digital input only) C2INB Comparator 2 Input B Not available (digital input only) C3IND Comparator 3 Input D Not available (digital input only) RPB0 Peripheral Selection PORTB, Pin 0 May be used for peripheral input PMD0 Parallel Master Port data bit 0 Not available RB0 PORTB, Pin 0 May be used for GPIO input --- <a class="header-anchor" href="#_20pgec3-vref-cvref-an1-rpa1-cted2-pmd6-ra1-si-not-available-off-modulepgec3-debug-channel-3-clock-not-available-vref-analog-voltage-reference-low-not-available-cvref-comparator-voltage-reference-low-notavailable-an1-analog-input-channel-1-not-available-rpa1-peripheralselection-porta-pin-1-used-for-si-cted2-ctmu-external-edge-input-2-notavailable-pmd6-parallel-master-port-data-bit-6-not-available-ra1-porta-pin-1-not-available-21pged1-an2-c1ind-c2inb-c3ind-rpb0-pmd0-rb0-din6-port6-to-x9-pin-2-pged1debug-channel-1-data-not-available-also-x13-pin4-an2-analog-inputchannel-2-not-available-digital-input-only-c1ind-comparator-1-input-dnot-available-digital-input-only-c2inb-comparator-2-input-b-notavailable-digital-input-only-c3ind-comparator-3-input-d-not-available-digital-input-only-rpb0-peripheral-selection-portb-pin-0-may-be-usedfor-peripheral-input-pmd0-parallel-master-port-data-bit-0-not-availablerb0-portb-pin-0-may-be-used-for-gpio-input" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 20
PGEC3/VREF-/CVREF-/AN1/RPA1/CTED2/PMD6/RA1 SI Not available off module
PGEC3 Debug Channel 3 clock Not available VREF- Analog voltage reference
(low) Not available CVREF- Comparator Voltage Reference (low) Not
available AN1 Analog input channel 1 Not available RPA1 Peripheral
Selection PORTA, Pin 1 Used for SI CTED2 CTMU External Edge Input 2 Not
available PMD6 Parallel Master Port data bit 6 Not available RA1 PORTA,
Pin 1 Not available --- ------------------------------------------------
---------------------------------- ---------------------------------- 21
PGED1/AN2/C1IND/C2INB/C3IND/RPB0/PMD0/RB0 DIN6 PORT6, to X9, pin 2 PGED1
Debug Channel 1 data Not available (also X13, pin4) AN2 Analog input
channel 2 Not available (digital input only) C1IND Comparator 1 Input D
Not available (digital input only) C2INB Comparator 2 Input B Not
available (digital input only) C3IND Comparator 3 Input D Not available
(digital input only) RPB0 Peripheral Selection PORTB, Pin 0 May be used
for peripheral input PMD0 Parallel Master Port data bit 0 Not available
RB0 PORTB, Pin 0 May be used for GPIO input ---&quot;">​</a></h2><h2 id="_22pgec1-an3-c1inc-c2ina-rpb1-cted12-pmd1-rb1-din7-port7-to-x10-pin-2pgec1-debug-channel-1-clock-also-x13-pin2-an3-analog-inputchannel-3-not-available-digital-input-only-c1inc-comparator-1-input-cnot-available-digital-input-only-c2ina-comparator-2-input-a-notavailable-digital-input-only-rpb1-peripheral-selection-portb-pin-1may-be-used-for-peripheral-input-pmd1-parallel-master-port-data-bit-1not-available-cted12-ctmu-external-edge-input-12-may-be-used-as-ctmuinput-rb1-portb-pin-1-may-be-used-as-gpio-input" tabindex="-1">---------------------------------- ---------------------------------- 22 PGEC1/AN3/C1INC/C2INA/RPB1/CTED12/PMD1/RB1 DIN7 PORT7, to X10, pin 2 PGEC1 Debug Channel 1 clock (?) (also X13, pin2) AN3 Analog input channel 3 Not available (digital input only) C1INC Comparator 1 Input C Not available (digital input only) C2INA Comparator 2 Input A Not available (digital input only) RPB1 Peripheral Selection, PORTB, Pin 1 May be used for peripheral input PMD1 Parallel Master Port data bit 1 Not available CTED12 CTMU External Edge Input 12 May be used as CTMU input RB1 PORTB, Pin 1 May be used as GPIO input --- <a class="header-anchor" href="#_22pgec1-an3-c1inc-c2ina-rpb1-cted12-pmd1-rb1-din7-port7-to-x10-pin-2pgec1-debug-channel-1-clock-also-x13-pin2-an3-analog-inputchannel-3-not-available-digital-input-only-c1inc-comparator-1-input-cnot-available-digital-input-only-c2ina-comparator-2-input-a-notavailable-digital-input-only-rpb1-peripheral-selection-portb-pin-1may-be-used-for-peripheral-input-pmd1-parallel-master-port-data-bit-1not-available-cted12-ctmu-external-edge-input-12-may-be-used-as-ctmuinput-rb1-portb-pin-1-may-be-used-as-gpio-input" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 22
PGEC1/AN3/C1INC/C2INA/RPB1/CTED12/PMD1/RB1 DIN7 PORT7, to X10, pin 2
PGEC1 Debug Channel 1 clock (?) (also X13, pin2) AN3 Analog input
channel 3 Not available (digital input only) C1INC Comparator 1 Input C
Not available (digital input only) C2INA Comparator 2 Input A Not
available (digital input only) RPB1 Peripheral Selection, PORTB, Pin 1
May be used for peripheral input PMD1 Parallel Master Port data bit 1
Not available CTED12 CTMU External Edge Input 12 May be used as CTMU
input RB1 PORTB, Pin 1 May be used as GPIO input ---&quot;">​</a></h2><h2 id="_23an4-c1inb-c2ind-rpb2-sda2-cted13-pmd2-cnb2-rb2-dout0-port0-to-x1-pin-2an4-analog-input-channel-4-not-available-digital-output-only-alsox13-pin1-c1inb-comparator-1-input-b-not-available-digital-outputonly-c2ind-comparator-2-input-d-not-available-digital-output-only-rpb2-peripheral-selection-portb-pin-2-may-be-used-for-peripheral-outputsda2-i2c2-data-not-available-cted13-ctmu-external-edge-input-13-notavailable-pmd2-parallel-master-port-data-bit-2-not-available-cnb2-portb-pin-2-change-notification-not-available-rb2-portb-pin-2-may-be-for-gpiooutput-24an5-c1ina-c2inc-rtcc-rpb3-scl2-pmwr-cnb3-rb3-dout1-port1-to-x2-pin-2an5-analog-input-channel-5-not-available-digital-output-only-alsox13-pin3-c1ina-comparator-1-input-a-not-available-digital-outputonly-c2inc-comparator-2-input-c-not-available-digital-output-only-rtcc-real-time-clock-alarm-output-may-be-used-for-rtcc-output-rpb3peripheral-selection-portb-pin-3-may-be-used-for-peripheral-outputscl2-i2c2-clock-pmwr-parallel-master-port-write-strobe-not-availablecnb3-portb-pin-3-change-notification-not-available-rb3-portb-pin-3-maybe-used-for-gpio-output" tabindex="-1">---------------------------------- ---------------------------------- 23 AN4/C1INB/C2IND/RPB2/SDA2/CTED13/PMD2/CNB2/RB2 DOUT0 PORT0, to X1, pin 2 AN4 Analog input channel 4 Not available (digital output only) (also X13, pin1) C1INB Comparator 1 Input B Not available (digital output only) C2IND Comparator 2 Input D Not available (digital output only) RPB2 Peripheral Selection PORTB, Pin 2 May be used for peripheral output SDA2 I2C2 data Not available(?) CTED13 CTMU External Edge Input 13 Not available PMD2 Parallel Master Port data bit 2 Not available CNB2 PORTB, Pin 2 Change Notification Not available RB2 PORTB, Pin 2 May be for GPIO output --- ------------------------------------------------ ---------------------------------- ---------------------------------- 24 AN5/C1INA/C2INC/RTCC/RPB3/SCL2/PMWR/CNB3/RB3 DOUT1 PORT1, to X2, pin 2 AN5 Analog input channel 5 Not available (digital output only) (also X13, pin3) C1INA Comparator 1 Input A Not available (digital output only) C2INC Comparator 2 Input C Not available (digital output only) RTCC Real-Time Clock alarm output May be used for RTCC output RPB3 Peripheral Selection, PORTB, Pin 3 May be used for peripheral output SCL2 I2C2 clock (?) PMWR Parallel Master Port write strobe Not available CNB3 PORTB, Pin 3 Change Notification Not available RB3 PORTB, Pin 3 May be used for GPIO output --- <a class="header-anchor" href="#_23an4-c1inb-c2ind-rpb2-sda2-cted13-pmd2-cnb2-rb2-dout0-port0-to-x1-pin-2an4-analog-input-channel-4-not-available-digital-output-only-alsox13-pin1-c1inb-comparator-1-input-b-not-available-digital-outputonly-c2ind-comparator-2-input-d-not-available-digital-output-only-rpb2-peripheral-selection-portb-pin-2-may-be-used-for-peripheral-outputsda2-i2c2-data-not-available-cted13-ctmu-external-edge-input-13-notavailable-pmd2-parallel-master-port-data-bit-2-not-available-cnb2-portb-pin-2-change-notification-not-available-rb2-portb-pin-2-may-be-for-gpiooutput-24an5-c1ina-c2inc-rtcc-rpb3-scl2-pmwr-cnb3-rb3-dout1-port1-to-x2-pin-2an5-analog-input-channel-5-not-available-digital-output-only-alsox13-pin3-c1ina-comparator-1-input-a-not-available-digital-outputonly-c2inc-comparator-2-input-c-not-available-digital-output-only-rtcc-real-time-clock-alarm-output-may-be-used-for-rtcc-output-rpb3peripheral-selection-portb-pin-3-may-be-used-for-peripheral-outputscl2-i2c2-clock-pmwr-parallel-master-port-write-strobe-not-availablecnb3-portb-pin-3-change-notification-not-available-rb3-portb-pin-3-maybe-used-for-gpio-output" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 23
AN4/C1INB/C2IND/RPB2/SDA2/CTED13/PMD2/CNB2/RB2 DOUT0 PORT0, to X1, pin 2
AN4 Analog input channel 4 Not available (digital output only) (also
X13, pin1) C1INB Comparator 1 Input B Not available (digital output
only) C2IND Comparator 2 Input D Not available (digital output only)
RPB2 Peripheral Selection PORTB, Pin 2 May be used for peripheral output
SDA2 I2C2 data Not available(?) CTED13 CTMU External Edge Input 13 Not
available PMD2 Parallel Master Port data bit 2 Not available CNB2 PORTB,
Pin 2 Change Notification Not available RB2 PORTB, Pin 2 May be for GPIO
output --- ------------------------------------------------
---------------------------------- ---------------------------------- 24
AN5/C1INA/C2INC/RTCC/RPB3/SCL2/PMWR/CNB3/RB3 DOUT1 PORT1, to X2, pin 2
AN5 Analog input channel 5 Not available (digital output only) (also
X13, pin3) C1INA Comparator 1 Input A Not available (digital output
only) C2INC Comparator 2 Input C Not available (digital output only)
RTCC Real-Time Clock alarm output May be used for RTCC output RPB3
Peripheral Selection, PORTB, Pin 3 May be used for peripheral output
SCL2 I2C2 clock (?) PMWR Parallel Master Port write strobe Not available
CNB3 PORTB, Pin 3 Change Notification Not available RB3 PORTB, Pin 3 May
be used for GPIO output ---&quot;">​</a></h2><h2 id="_25an6-rpc0-rc0-dout3-port3-to-x5-pin-2-an6-analog-input-channel-6-notavailable-digital-output-only-also-x13-pin7-rpc0-peripheralselection-portc-pin-0-may-be-used-for-peripheral-output-rc0-portc-pin0-may-be-used-for-gpio-output" tabindex="-1">---------------------------------- ---------------------------------- 25 AN6/RPC0/RC0 DOUT3 PORT3, to X5, pin 2 AN6 Analog input channel 6 Not available (digital output only) (also X13, pin7) RPC0 Peripheral Selection, PORTC, Pin 0 May be used for peripheral output RC0 PORTC, Pin 0 May be used for GPIO output --- <a class="header-anchor" href="#_25an6-rpc0-rc0-dout3-port3-to-x5-pin-2-an6-analog-input-channel-6-notavailable-digital-output-only-also-x13-pin7-rpc0-peripheralselection-portc-pin-0-may-be-used-for-peripheral-output-rc0-portc-pin0-may-be-used-for-gpio-output" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 25
AN6/RPC0/RC0 DOUT3 PORT3, to X5, pin 2 AN6 Analog input channel 6 Not
available (digital output only) (also X13, pin7) RPC0 Peripheral
Selection, PORTC, Pin 0 May be used for peripheral output RC0 PORTC, Pin
0 May be used for GPIO output ---&quot;">​</a></h2><h2 id="_26an7-rpc1-rc1-dout4-port4-to-x6-pin-2-an7-analog-input-channel-7-notavailable-digital-output-only-also-x13-pin8-rpc1-peripheralselection-portc-pin-1-may-be-used-for-peripheral-output-rc1-portc-pin1-may-be-used-for-gpio-output" tabindex="-1">---------------------------------- ---------------------------------- 26 AN7/RPC1/RC1 DOUT4 PORT4, to X6, pin 2 AN7 Analog input channel 7 Not available (digital output only) (also X13, pin8) RPC1 Peripheral Selection, PORTC, Pin 1 May be used for peripheral output RC1 PORTC, Pin 1 May be used for GPIO output --- <a class="header-anchor" href="#_26an7-rpc1-rc1-dout4-port4-to-x6-pin-2-an7-analog-input-channel-7-notavailable-digital-output-only-also-x13-pin8-rpc1-peripheralselection-portc-pin-1-may-be-used-for-peripheral-output-rc1-portc-pin1-may-be-used-for-gpio-output" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 26
AN7/RPC1/RC1 DOUT4 PORT4, to X6, pin 2 AN7 Analog input channel 7 Not
available (digital output only) (also X13, pin8) RPC1 Peripheral
Selection, PORTC, Pin 1 May be used for peripheral output RC1 PORTC, Pin
1 May be used for GPIO output ---&quot;">​</a></h2><h2 id="_27an8-rpc2-pma2-rc2-dout5-port5-to-x7-pin-2-an8-analog-input-channel-8not-available-digital-output-only-also-x13-pin6-rpc2-peripheralselection-portc-pin-2-may-be-used-for-peripheral-output-pma2-parallelmaster-port-address-bit-2-not-available-rc2-portc-pin-2-may-be-used-forgpio-output-28vdd-vdd-not-available-off-module" tabindex="-1">---------------------------------- ---------------------------------- 27 AN8/RPC2/PMA2/RC2 DOUT5 PORT5, to X7, pin 2 AN8 Analog input channel 8 Not available (digital output only) (also X13, pin6) RPC2 Peripheral Selection, PORTC, Pin 2 May be used for peripheral output PMA2 Parallel Master Port Address bit 2 Not available RC2 PORTC, Pin 2 May be used for GPIO output --- ------------------------------------------------ ---------------------------------- ---------------------------------- 28 VDD VDD Not available off module --- <a class="header-anchor" href="#_27an8-rpc2-pma2-rc2-dout5-port5-to-x7-pin-2-an8-analog-input-channel-8not-available-digital-output-only-also-x13-pin6-rpc2-peripheralselection-portc-pin-2-may-be-used-for-peripheral-output-pma2-parallelmaster-port-address-bit-2-not-available-rc2-portc-pin-2-may-be-used-forgpio-output-28vdd-vdd-not-available-off-module" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 27
AN8/RPC2/PMA2/RC2 DOUT5 PORT5, to X7, pin 2 AN8 Analog input channel 8
Not available (digital output only) (also X13, pin6) RPC2 Peripheral
Selection, PORTC, Pin 2 May be used for peripheral output PMA2 Parallel
Master Port Address bit 2 Not available RC2 PORTC, Pin 2 May be used for
GPIO output --- ------------------------------------------------
---------------------------------- ---------------------------------- 28
VDD VDD Not available off module ---&quot;">​</a></h2><h2 id="_29vss-vss-not-available-off-module" tabindex="-1">---------------------------------- ---------------------------------- 29 VSS VSS Not available off module --- <a class="header-anchor" href="#_29vss-vss-not-available-off-module" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 29
VSS VSS Not available off module ---&quot;">​</a></h2><h2 id="_30osc1-clki-rpa2-ra2-so-r1-din0-r2-not-available-off-module-osc1oscillator-crystal-input-not-available-clki-external-clock-source-inputnot-available-rpra2-peripheral-selection-porta-pin-2-used-for-so-ra2porta-pin-2-not-available" tabindex="-1">---------------------------------- ---------------------------------- 30 OSC1/CLKI/RPA2/RA2 SO (R1) DIN0 (R2) Not available off module OSC1 Oscillator crystal input Not available CLKI External clock source input Not available RPRA2 Peripheral Selection PORTA, Pin 2 Used for SO RA2 PORTA, Pin 2 Not available --- <a class="header-anchor" href="#_30osc1-clki-rpa2-ra2-so-r1-din0-r2-not-available-off-module-osc1oscillator-crystal-input-not-available-clki-external-clock-source-inputnot-available-rpra2-peripheral-selection-porta-pin-2-used-for-so-ra2porta-pin-2-not-available" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 30
OSC1/CLKI/RPA2/RA2 SO (R1) DIN0 (R2) Not available off module OSC1
Oscillator crystal input Not available CLKI External clock source input
Not available RPRA2 Peripheral Selection PORTA, Pin 2 Used for SO RA2
PORTA, Pin 2 Not available ---&quot;">​</a></h2><h2 id="_31osc2-clko-rpa3-ra3-din0-r1-din3-r2-port0-to-x1-pin-2-osc2oscillator-crystal-output-not-available-also-x13-pin1-clko-oscillatorcrystal-output-not-available-rpa3-peripheral-selection-for-porta-pin-3may-be-used-for-peripheral-input-ra3-porta-pin-3-may-be-used-for-gpioinput-32tdo-rpa8-pma8-ra8-din3-r1-s0-r2-port3-to-x5-pin-2-tdo-jtag-testdata-output-pin-not-available-also-x13-pin7-rpa8-porta-pin-8-may-beused-for-peripheral-input-pma8-parallel-master-port-address-bit-8-notavailable-ra8-porta-pin-8-may-be-used-for-gpio-input" tabindex="-1">---------------------------------- ---------------------------------- 31 OSC2/CLKO/RPA3/RA3 DIN0 (R1) DIN3 (R2) PORT0, to X1, pin 2 OSC2 Oscillator crystal output Not available (also X13, pin1) CLKO Oscillator crystal output Not available RPA3 Peripheral Selection for PORTA, Pin 3 May be used for peripheral input RA3 PORTA, Pin 3 May be used for GPIO input --- ------------------------------------------------ ---------------------------------- ---------------------------------- 32 TDO/RPA8/PMA8/RA8 DIN3 (R1) S0 (R2) PORT3, to X5, pin 2 TDO JTAG test data output pin Not available (also X13, pin7) RPA8 PORTA, Pin 8 May be used for peripheral input PMA8 Parallel Master Port Address bit 8 Not available RA8 PORTA, Pin 8 May be used for GPIO input --- <a class="header-anchor" href="#_31osc2-clko-rpa3-ra3-din0-r1-din3-r2-port0-to-x1-pin-2-osc2oscillator-crystal-output-not-available-also-x13-pin1-clko-oscillatorcrystal-output-not-available-rpa3-peripheral-selection-for-porta-pin-3may-be-used-for-peripheral-input-ra3-porta-pin-3-may-be-used-for-gpioinput-32tdo-rpa8-pma8-ra8-din3-r1-s0-r2-port3-to-x5-pin-2-tdo-jtag-testdata-output-pin-not-available-also-x13-pin7-rpa8-porta-pin-8-may-beused-for-peripheral-input-pma8-parallel-master-port-address-bit-8-notavailable-ra8-porta-pin-8-may-be-used-for-gpio-input" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 31
OSC2/CLKO/RPA3/RA3 DIN0 (R1) DIN3 (R2) PORT0, to X1, pin 2 OSC2
Oscillator crystal output Not available (also X13, pin1) CLKO Oscillator
crystal output Not available RPA3 Peripheral Selection for PORTA, Pin 3
May be used for peripheral input RA3 PORTA, Pin 3 May be used for GPIO
input --- ------------------------------------------------
---------------------------------- ---------------------------------- 32
TDO/RPA8/PMA8/RA8 DIN3 (R1) S0 (R2) PORT3, to X5, pin 2 TDO JTAG test
data output pin Not available (also X13, pin7) RPA8 PORTA, Pin 8 May be
used for peripheral input PMA8 Parallel Master Port Address bit 8 Not
available RA8 PORTA, Pin 8 May be used for GPIO input ---&quot;">​</a></h2><h2 id="_33sosci-rpb4-rb4-dout2-port2-to-x4-pin-2-sosci-32-768-khz-crystal-inputnot-available-also-x13-pin5-rpb4-peripheral-seclection-portb-pin-4may-be-used-for-peripheral-output-rb4-portb-pin-4-may-be-used-for-gpiooutput-34sosco-rpa4-t1ck-cted9-ra4-din1-port1-to-x2-pin-2-sosco-32-768-khzcrystal-output-not-available-also-x13-pin3-rpa4-peripheral-selectionporta-pin-4-may-be-used-for-peripheral-input-t1ck-timer1-external-clockinput-may-be-used-for-timer-1-input-cted9-ctmu-external-edge-input-9-maybe-used-for-ctmu-input-ra4-porta-pin-4-may-be-used-as-gpio-input" tabindex="-1">---------------------------------- ---------------------------------- 33 SOSCI/RPB4/RB4 DOUT2 PORT2, to X4, pin 2 SOSCI 32.768 kHz crystal input Not available (also X13, pin5) RPB4 Peripheral Seclection, PORTB, Pin 4 May be used for peripheral output RB4 PORTB, Pin 4 May be used for GPIO output --- ------------------------------------------------ ---------------------------------- ---------------------------------- 34 SOSCO/RPA4/T1CK/CTED9/RA4 DIN1 PORT1, to X2, pin 2 SOSCO 32.768 kHz crystal output Not available (also X13, pin3) RPA4 Peripheral Selection PORTA, Pin 4 May be used for peripheral input T1CK Timer1 external clock input May be used for timer 1 input CTED9 CTMU External Edge Input 9 May be used for CTMU input RA4 PORTA, Pin 4 May be used as GPIO input --- <a class="header-anchor" href="#_33sosci-rpb4-rb4-dout2-port2-to-x4-pin-2-sosci-32-768-khz-crystal-inputnot-available-also-x13-pin5-rpb4-peripheral-seclection-portb-pin-4may-be-used-for-peripheral-output-rb4-portb-pin-4-may-be-used-for-gpiooutput-34sosco-rpa4-t1ck-cted9-ra4-din1-port1-to-x2-pin-2-sosco-32-768-khzcrystal-output-not-available-also-x13-pin3-rpa4-peripheral-selectionporta-pin-4-may-be-used-for-peripheral-input-t1ck-timer1-external-clockinput-may-be-used-for-timer-1-input-cted9-ctmu-external-edge-input-9-maybe-used-for-ctmu-input-ra4-porta-pin-4-may-be-used-as-gpio-input" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 33
SOSCI/RPB4/RB4 DOUT2 PORT2, to X4, pin 2 SOSCI 32.768 kHz crystal input
Not available (also X13, pin5) RPB4 Peripheral Seclection, PORTB, Pin 4
May be used for peripheral output RB4 PORTB, Pin 4 May be used for GPIO
output --- ------------------------------------------------
---------------------------------- ---------------------------------- 34
SOSCO/RPA4/T1CK/CTED9/RA4 DIN1 PORT1, to X2, pin 2 SOSCO 32.768 kHz
crystal output Not available (also X13, pin3) RPA4 Peripheral Selection
PORTA, Pin 4 May be used for peripheral input T1CK Timer1 external clock
input May be used for timer 1 input CTED9 CTMU External Edge Input 9 May
be used for CTMU input RA4 PORTA, Pin 4 May be used as GPIO input ---&quot;">​</a></h2><h2 id="_35tdi-rpa9-pma9-ra9-din4-port4-to-x6-pin-2-tdi-jtag-test-data-input-pinmay-be-used-for-jtag-input-also-x13-pin8-rpa9-peripheral-selectionfor-porta-pin-9-may-be-used-for-peripheral-input-pma9-parallel-masterport-address-bit-9-not-available-ra9-porta-pin-9-may-be-used-for-gpioinput-36an12-rpc3-rc3-dout6-port6-to-x9-pin-2-an12-analog-input-channel-12-notavailable-digtial-output-only-also-x13-pin4-rpc3-peripheralselection-portc-pin-3-may-be-used-for-peripheral-output-rc3-portc-pin3-may-be-used-for-gpio-output" tabindex="-1">---------------------------------- ---------------------------------- 35 TDI/RPA9/PMA9/RA9 DIN4 PORT4, to X6, pin 2 TDI JTAG test data input pin May be used for JTAG input (also X13, pin8) RPA9 Peripheral Selection for PORTA, Pin 9 May be used for peripheral input PMA9 Parallel Master Port Address bit 9 Not available RA9 PORTA, Pin 9 May be used for GPIO input --- ------------------------------------------------ ---------------------------------- ---------------------------------- 36 AN12/RPC3/RC3 DOUT6 PORT6, to X9, pin 2 AN12 Analog input channel 12 Not available (digtial output only) (also X13, pin4) RPC3 Peripheral Selection, PORTC, Pin 3 May be used for peripheral output RC3 PORTC, Pin 3 May be used for GPIO output --- <a class="header-anchor" href="#_35tdi-rpa9-pma9-ra9-din4-port4-to-x6-pin-2-tdi-jtag-test-data-input-pinmay-be-used-for-jtag-input-also-x13-pin8-rpa9-peripheral-selectionfor-porta-pin-9-may-be-used-for-peripheral-input-pma9-parallel-masterport-address-bit-9-not-available-ra9-porta-pin-9-may-be-used-for-gpioinput-36an12-rpc3-rc3-dout6-port6-to-x9-pin-2-an12-analog-input-channel-12-notavailable-digtial-output-only-also-x13-pin4-rpc3-peripheralselection-portc-pin-3-may-be-used-for-peripheral-output-rc3-portc-pin3-may-be-used-for-gpio-output" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 35
TDI/RPA9/PMA9/RA9 DIN4 PORT4, to X6, pin 2 TDI JTAG test data input pin
May be used for JTAG input (also X13, pin8) RPA9 Peripheral Selection
for PORTA, Pin 9 May be used for peripheral input PMA9 Parallel Master
Port Address bit 9 Not available RA9 PORTA, Pin 9 May be used for GPIO
input --- ------------------------------------------------
---------------------------------- ---------------------------------- 36
AN12/RPC3/RC3 DOUT6 PORT6, to X9, pin 2 AN12 Analog input channel 12 Not
available (digtial output only) (also X13, pin4) RPC3 Peripheral
Selection, PORTC, Pin 3 May be used for peripheral output RC3 PORTC, Pin
3 May be used for GPIO output ---&quot;">​</a></h2><h2 id="_37rpc4-pma4-rc4-dout7-port7-to-x10-pin-2-rpc4-peripheral-selection-portc-pin-4-may-be-used-for-peripheral-output-also-x13-pin2-pma4parallel-master-port-address-bit-4-not-available-rc4-portc-pin-4-may-beused-for-gpio-output" tabindex="-1">---------------------------------- ---------------------------------- 37 RPC4/PMA4/RC4 DOUT7 PORT7, to X10, pin 2 RPC4 Peripheral Selection, PORTC, Pin 4 May be used for peripheral output (also X13, pin2) PMA4 Parallel Master Port Address bit 4 Not available RC4 PORTC, Pin 4 May be used for GPIO output --- <a class="header-anchor" href="#_37rpc4-pma4-rc4-dout7-port7-to-x10-pin-2-rpc4-peripheral-selection-portc-pin-4-may-be-used-for-peripheral-output-also-x13-pin2-pma4parallel-master-port-address-bit-4-not-available-rc4-portc-pin-4-may-beused-for-gpio-output" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 37
RPC4/PMA4/RC4 DOUT7 PORT7, to X10, pin 2 RPC4 Peripheral Selection,
PORTC, Pin 4 May be used for peripheral output (also X13, pin2) PMA4
Parallel Master Port Address bit 4 Not available RC4 PORTC, Pin 4 May be
used for GPIO output ---&quot;">​</a></h2><h2 id="_38rpc5-pma3-rc5-func4-func4-to-x3-pin4-rpc5-peripheral-selection-portc-pin-5-pma3-parallel-master-port-address-bit-3-rc5-portc-pin-5" tabindex="-1">---------------------------------- ---------------------------------- 38 RPC5/PMA3/RC5 FUNC4 FUNC4, to X3, pin4 RPC5 Peripheral Selection, PORTC, Pin 5 PMA3 Parallel Master Port Address bit 3 RC5 PORTC, Pin 5 --- <a class="header-anchor" href="#_38rpc5-pma3-rc5-func4-func4-to-x3-pin4-rpc5-peripheral-selection-portc-pin-5-pma3-parallel-master-port-address-bit-3-rc5-portc-pin-5" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 38
RPC5/PMA3/RC5 FUNC4 FUNC4, to X3, pin4 RPC5 Peripheral Selection, PORTC,
Pin 5 PMA3 Parallel Master Port Address bit 3 RC5 PORTC, Pin 5 ---&quot;">​</a></h2><h2 id="_39vss-vss-not-available-off-module" tabindex="-1">---------------------------------- ---------------------------------- 39 VSS VSS Not available off module --- <a class="header-anchor" href="#_39vss-vss-not-available-off-module" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 39
VSS VSS Not available off module ---&quot;">​</a></h2><h2 id="_40vdd-vdd-not-available-off-module" tabindex="-1">---------------------------------- ---------------------------------- 40 VDD VDD Not available off module --- <a class="header-anchor" href="#_40vdd-vdd-not-available-off-module" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 40
VDD VDD Not available off module ---&quot;">​</a></h2><h2 id="_41rpb5-usbid-rb5-func3-func3-to-x3-pin3-rpb5-peripheral-selection-portb-pin-5-usbid-41-usb-otg-id-detect-rb5-41-portb-pin-5" tabindex="-1">---------------------------------- ---------------------------------- 41 RPB5/USBID/RB5 FUNC3 FUNC3, to X3, pin3 RPB5 Peripheral Selection, PORTB, Pin 5 USBID 41 USB OTG ID detect RB5 41 PORTB, Pin 5 --- <a class="header-anchor" href="#_41rpb5-usbid-rb5-func3-func3-to-x3-pin3-rpb5-peripheral-selection-portb-pin-5-usbid-41-usb-otg-id-detect-rb5-41-portb-pin-5" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 41
RPB5/USBID/RB5 FUNC3 FUNC3, to X3, pin3 RPB5 Peripheral Selection,
PORTB, Pin 5 USBID 41 USB OTG ID detect RB5 41 PORTB, Pin 5 ---&quot;">​</a></h2><h2 id="_42vbus-func2-func2-to-x3-pin2-vbus-analog-usb-bus-power-monitor" tabindex="-1">---------------------------------- ---------------------------------- 42 VBUS FUNC2 FUNC2, to X3, pin2 VBUS Analog USB bus power monitor --- <a class="header-anchor" href="#_42vbus-func2-func2-to-x3-pin2-vbus-analog-usb-bus-power-monitor" aria-label="Permalink to &quot;---------------------------------- ---------------------------------- 42
VBUS FUNC2 FUNC2, to X3, pin2 VBUS Analog USB bus power monitor ---&quot;">​</a></h2><p>---------------------------------- ---------------------------------- 43 RPB7/CTED3/PMD5/INT0/RB7 PGA117 ~CSAI Not available off module RPB7 Peripheral Selection, PORTB, Pin 7 CTED3 CTMU External Edge Input 3 PMD5 Parallel Master Port data bit 5 INT0 External Interrupt 0 RB7 PORTB, Pin 7 --- ------------------------------------------------ ---------------------------------- ---------------------------------- 44 RPB8/SCL1/CTED10/PMD4/RB8 FUNC2 FUNC2 RPB8 PORTB, Pin 8 SCL1 I2C1 clock CTED10 CTMU External Edge Input 10 PMD4 Parallel Master Port data bit 4 RB8 PORTB, Pin 8 --- ------------------------------------------------</p><hr><h2 id="additional-signals-available-via-peripheral-pin-selections-pps" tabindex="-1">Additional signals available via Peripheral Pin Selections (PPS) <a class="header-anchor" href="#additional-signals-available-via-peripheral-pin-selections-pps" aria-label="Permalink to &quot;Additional signals available via Peripheral Pin Selections (PPS)&quot;">​</a></h2><p>REFCLKI Reference Input Clock REFCLKO Reference Output Clock IC1 Capture Inputs 1 IC2 Capture Inputs 2 IC3 Capture Inputs 3 IC4 Capture Inputs 4 IC5 Capture Inputs 5 OC1 Output Compare Output 1 OC2 Output Compare Output 2 OC3 Output Compare Output 3 OC4 Output Compare Output 4 OC5 Output Compare Output 5 OCFA Output Compare Fault A Input OCFB Output Compare Fault B Input INT1 External Interrupt 1 INT2 External Interrupt 2 INT3 External Interrupt 3 INT4 External Interrupt 4 T2CK Timer2 external clock input T3CK Timer3 external clock input T4CK Timer4 external clock input T5CK Timer5 external clock input U1CTS UART1 clear to send U1RTS UART1 ready to send U1RX UART1 receive U1TX UART1 transmit U2CTS UART2 clear to send U2RTS UART2 ready to send U2RX UART2 receive U2TX UART2 transmit SDI1 SPI1 data in SDO1 SPI1 data out SS1 SPI1 slave synchronization or frame pulse I/O SDI2 SPI2 data in SDO2 SPI2 data out SS2 SPI2 slave synchronization or frame pulse I/O C1OUT Comparator 1 Output C2OUT Comparator 2 Output C3OUT Comparator 3 Output</p><h1 id="toolchains" tabindex="-1">Toolchains <a class="header-anchor" href="#toolchains" aria-label="Permalink to &quot;Toolchains&quot;">​</a></h1><p>Note that in addition to the configuration options listed below, the toolchain can be configured using the kconfig-mconf utility (&#39;make menuconfig&#39;) or by passing CONFIG_MIPS32_TOOLCHAIN=<code>&lt;toolchain&gt;</code> to make, where <code>&lt;toolchain&gt;</code> is one of GNU_ELF, MICROCHIPL, MICROCHIPW, MICROCHIPL_LITE, MICROCHIPW_LITE, MICROCHIPOPENL or PINGUINOW as described below.</p><p>MPLAB/C32 ---------</p><p>I am using the free, &quot;Lite&quot; version of the PIC32MX toolchain available for download from the microchip.com web site. I am using the Windows version. The MicroChip toolchain is the only toolchain currently supported in these configurations, but it should be a simple matter to adapt to other toolchains by modifying the Make.defs file include in each configuration.</p><p>Toolchain Options:</p><pre><code>CONFIG_MIPS32_TOOLCHAIN_MICROCHIPW      - MicroChip full toolchain for Windows (C32)
CONFIG_MIPS32_TOOLCHAIN_MICROCHIPL      - MicroChip full toolchain for Linux (C32)
CONFIG_MIPS32_TOOLCHAIN_MICROCHIPW_LITE - MicroChip LITE toolchain for Windows (C32)
CONFIG_MIPS32_TOOLCHAIN_MICROCHIPL_LITE - MicroChip LITE toolchain for Linux (C32)
</code></pre><p>NOTE: The &quot;Lite&quot; versions of the toolchain does not support C++. Also certain optimization levels are not supported by the Lite toolchain.</p><p>MicrochipOpen -------------</p><p>An alternative, build-it-yourself toolchain is available here: <a href="http://sourceforge.net/projects/microchipopen/" target="_blank" rel="noreferrer">http://sourceforge.net/projects/microchipopen/</a> . These tools were last updated circa 2010. NOTE: C++ support still not available in this toolchain. Use this configuration option to select the microchipopen toolchain:</p><pre><code>CONFIG_MIPS32_TOOLCHAIN_MICROCHIPOPENL - microchipOpen toolchain for Linux
</code></pre><p>And set the path appropriately in the PATH environment variable.</p><p>Building MicrochipOpen (on Linux) ---------------------------------</p><ol><li><p>Get the build script from this location:</p><p><a href="http://microchipopen.svn.sourceforge.net/viewvc/microchipopen/ccompiler4pic32/buildscripts/trunk/" target="_blank" rel="noreferrer">http://microchipopen.svn.sourceforge.net/viewvc/microchipopen/ccompiler4pic32/buildscripts/trunk/</a></p></li><li><p>Build the code using the build script, for example:</p><p>./build.sh -b v105_freeze</p><p>This will check out the selected branch and build the tools.</p></li><li><p>Binaries will then be available in a subdirectory with a name something like pic32-v105-freeze-20120622/install-image/bin (depending on the current data and the branch that you selected.</p><p>Note that the tools will have the prefix, mypic32- so, for example, the compiler will be called mypic32-gcc.</p></li></ol><h2 id="pinguino-mips-elf-generic-mips-elf-toolchain" tabindex="-1">Pinguino mips-elf / Generic mips-elf Toolchain <a class="header-anchor" href="#pinguino-mips-elf-generic-mips-elf-toolchain" aria-label="Permalink to &quot;Pinguino mips-elf / Generic mips-elf Toolchain&quot;">​</a></h2><p>Another option is the mips-elf toolchain used with the Pinguino project. This is a relatively current mips-elf GCC and should provide free C++ support as well. This toolchain can be downloaded from the Pinguino website: <a href="http://wiki.pinguino.cc/index.php/Main%5C_Page%5C#Download" target="_blank" rel="noreferrer">http://wiki.pinguino.cc/index.php/Main\\_Page\\#Download</a> .</p><p>Support for the Pinguino mips-elf toolchain has been included in the Mirtoo configurations. Use one of these configuration options to select the Pinguino mips-elf toolchain:</p><pre><code>CONFIG_MIPS32_TOOLCHAIN_PINGUINOW - Pinguino mips-elf toolchain for Windows
CONFIG_MIPS32_TOOLCHAIN_GNU_ELF   - mips-elf toolchain for Linux or macOS
</code></pre><p>And set the path appropriately in the PATH environment variable. These tool configurations are untested -- expect some additional integration issues. Good luck!</p><p>This configuration will also work with any generic mips-elf GCC past version 4.6 or so.</p><p>MPLAB/C32 vs MPLABX/X32 -----------------------</p><p>It appears that Microchip is phasing out the MPLAB/C32 toolchain and replacing it with MPLABX and XC32. At present, the XC32 toolchain is <em>not</em> compatible with the NuttX build scripts. Here are some of the issues that I see when trying to build with XC32:</p><ol><li><p>Make.def changes: You have to change the tool prefix:</p><p>CROSSDEV=xc32-</p></li><li><p>debug.ld/release.ld: The linker expects some things that are not present in the current linker scripts (or are expected with different names). Here are some partial fixes:</p><p>Rename: kseg0_progmem to kseg0_program_mem Rename: kseg1_datamem to kseg1_data_mem</p></li></ol><p>Even then, there are more warnings from the linker and some undefined symbols for non-NuttX code that resides in the unused Microchip libraries. You will have to solve at least this undefined symbol problem if you want to use their XC32 toolchain.</p><p>Windows Native Toolchains -------------------------</p><p>NOTE: There are several limitations to using a Windows based toolchain in a Cygwin environment. The three biggest are:</p><ol><li><p>The Windows toolchain cannot follow Cygwin paths. Path conversions are performed automatically in the Cygwin makefiles using the &#39;cygpath&#39; utility but you might easily find some new path problems. If so, check out &#39;cygpath -w&#39;</p></li><li><p>Windows toolchains cannot follow Cygwin symbolic links. Many symbolic links are used in NuttX (e.g., include/arch). The make system works around these problems for the Windows tools by copying directories instead of linking them. But this can also cause some confusion for you: For example, you may edit a file in a &quot;linked&quot; directory and find that your changes had no effect. That is because you are building the copy of the file in the &quot;fake&quot; symbolic directory. If you use a Windows toolchain, you should get in the habit of making like this:</p><p>make clean_context all</p><p>An alias in your .bashrc file might make that less painful.</p></li></ol><h1 id="loading-nuttx-with-icd3" tabindex="-1">Loading NuttX with ICD3 <a class="header-anchor" href="#loading-nuttx-with-icd3" aria-label="Permalink to &quot;Loading NuttX with ICD3&quot;">​</a></h1><p>Intel Hex Format Files: -----------------------</p><pre><code>When NuttX is built it will produce two files in the top-level NuttX
directory:

1) nuttx - This is an ELF file, and
2) nuttx.hex - This is an Intel Hex format file.  This is controlled by
   the setting CONFIG_INTELHEX_BINARY in the .config file.

The PICkit tool wants an Intel Hex format file to burn into FLASH. However,
there is a problem with the generated nutt.hex: The tool expects the nuttx.hex
file to contain physical addresses.  But the nuttx.hex file generated from the
top-level make will have address in the KSEG0 and KSEG1 regions.
</code></pre><p>tools/pic32/mkpichex: ----------------------</p><pre><code>There is a simple tool in the NuttX tools/pic32 directory that can be
used to solve both issues with the nuttx.hex file.  But, first, you must
build the tool:

  cd tools/pic32
  make -f Makefile.host

Now you will have an executable file call mkpichex (or mkpichex.exe on
Cygwin).  This program will take the nutt.hex file as an input, it will
convert all of the KSEG0 and KSEG1 addresses to physical address, and
it will write the modified file, replacing the original nuttx.hex.

To use this file, you need to do the following things:

  export PATH=???  # Add the NuttX tools/pic32 directory to your
                   # PATH variable
  make             # Build nuttx and nuttx.hex
  mkpichex $PWD    # Convert addresses in nuttx.hex.  $PWD is the path
                   # to the top-level build directory.  It is the only
                   # required input to mkpichex.

  This procedure is automatically performed at the end of a build.
</code></pre><h1 id="led-usage" tabindex="-1">LED Usage <a class="header-anchor" href="#led-usage" aria-label="Permalink to &quot;LED Usage&quot;">​</a></h1><p>The Mirtoo module has 2 user LEDs labeled LED0 and LED1 in the schematics:</p><pre><code>---  ----- --------------------------------------------------------------
PIN  Board Notes
---  ----- --------------------------------------------------------------
RC8  LED0  Grounded, high value illuminates
RC9  LED1  Grounded, high value illuminates
</code></pre><p>The Dimitech DTX1-4000L EV-kit1 supports 3 more LEDs, but there are not controllable from software.</p><p>If CONFIG_ARCH_LEDS is defined, then NuttX will control these LEDs as follows: ON OFF ------------------------- ---- ---- ---- ---- LED0 LED1 LED0 LED1 ------------------------- ---- ---- ---- ---- LED_STARTED 0 OFF OFF --- --- LED_HEAPALLOCATE 1 ON OFF --- --- LED_IRQSENABLED 2 OFF ON --- --- LED_STACKCREATED 3 ON ON --- --- LED_INIRQ 4 ON N/C OFF N/C LED_SIGNAL 4 ON N/C OFF N/C LED_ASSERTION 4 ON N/C OFF N/C LED_PANIC 4 ON N/C OFF N/C</p><h1 id="uart-usage" tabindex="-1">UART Usage <a class="header-anchor" href="#uart-usage" aria-label="Permalink to &quot;UART Usage&quot;">​</a></h1><p>When mounted on the DTX1-4000L EV-kit1 board, serial output is available through an FT230X device via the FUNC0 and FUNC1 module outputs. If CONFIG_PIC32MX_UART2 is enabled, the src/pic32_boot will configure the UART2 pins as follows:</p><pre><code>---------- ------ ----- ------ -------------------------
   BOARD   MODULE  PIN  SIGNAL NOTES
---------- ------ ----- ------ -------------------------
FT230X RXD  FUNC0 RPB11  U2RX  UART2 RX (Also PGEC2)
FT230X TXD  FUNC1 RPB10  U2TX  UART2 TX (Also PGED2)
</code></pre><p>However, since the FUNC0/1 pins are shared with the PGEC/D2, they cannot be used for UART2 if you are also debugging with the ICD3. In that case, you may need to switch to UART1.</p><p>If CONFIG_PIC32MX_UART1 is enabled, the src/pic32_boot will configure the UART pins as follows. This will support communictions (via an external RS-232 driver) through X3 pins 4 and 5:</p><pre><code>---------- ------ ----- ------ -------------------------
   BOARD   MODULE  PIN  SIGNAL NOTES
---------- ------ ----- ------ -------------------------
X3, pin 4   FUNC4 RPBC5  U1TX  UART1 TX
X3, pin 5   FUNC5 RPBC6  U1RX  UART1 RX
</code></pre><p>If you are not using MPLAB to debug, you may also want to change Make.defs to use the release.ld linker script instead of the debug.ld link script. This change will give you a little more memory by reusing the boot FLASH and SRAM that would otherwise be reserved for MPLAB.</p><h1 id="analog-input" tabindex="-1">Analog Input <a class="header-anchor" href="#analog-input" aria-label="Permalink to &quot;Analog Input&quot;">​</a></h1><p>The Mirtoo features a PGA117 amplifier/multipexer that can be configured to bring any analog signal from PORT0,.. PORT7 to pin 19 of the PIC32MX:</p><hr><p>PIN PIC32 SIGNAL(s) BOARD SIGNAL/USAGE</p><hr><p>19 PGED3/VREF+/CVREF+/AN0/C3INC/RPA0/CTED1/PMD7/RA0 AIN PGA117 Vout</p><hr><p>The PGA117 driver can be enabled by setting the following the nsh configuration:</p><pre><code>CONFIG_ADC=y         : Enable support for analog input devices
CONFIG_PIC32MX_ADC=y : Enable support the PIC32 ADC driver
CONFIG_ADC_PGA11X=y  : Enable support for the PGA117
</code></pre><p>When CONFIG_PIC32MX_ADC=y is defined, the Mirtoo boot up logic will automatically configure pin 18 (AN0) as an analog input (see boards/mirtoo/src/up_adc.c). To initializee and use the PGA117, you to add logic something like the following in your application code:</p><p>#include &lt;nuttx/spi/spi.h&gt; #include &lt;nuttx/analog/pga11x.h&gt;</p><p>struct spi_dev_s *spi; PGA11X_HANDLE handle;</p><p>/* Get the SPI port */</p><p>spi = pic32mx_spibus_initialize(2); if (!spi) { _err(&quot;ERROR: Failed to initialize SPI port 2<code>\\n</code>&quot;); return -ENODEV; }</p><p>/* Now bind the SPI interface to the PGA117 driver */</p><p>handle = pga11x_initialize(spi); if (!handle) { _err(&quot;ERROR: Failed to bind SPI port 2 to the PGA117 driver<code>\\n</code>&quot;); return -ENODEV; }</p><p>After that initialization is set, then one of PORT0-7 can be select as an analog input to AN0 like:</p><p>struct pga11x_settings_s settings; int ret;</p><p>settings.channel = PGA11X_CHAN_CH2; settings.gain = PGA11X_GAIN_2;</p><p>ret = pga11x_select(handle, &amp;settings); if (ret &lt; 0) { _err(&quot;ERROR: Failed to select channel 2, gain 2<code>\\n</code>&quot;); return -EIO; }</p><p>The above logic may belong in boards/mirtoo/src/up_adc.c?</p><p>There is still one missing piece to complete the analog support on the Mirtoo. This is the ADC driver that collects analog data and provides and ADC driver that can be used with standard open, close, read, and write interfaces. To complete this driver, the following is needed:</p><p>(1) arch/mips/src/pic32mx/pic32mx_adc.c. The ADC driver that implements the ADC interfaces defined in include/nuttx/analog/adc.h and must be built when CONFIG_PIC32MX_ADC is defined.</p><p>(2) boards/mirtoo/up_adc.c. Add Mirtoo logic that initializes and registers the ADC driver.</p><p>A complete ADC driver will be a considerable amount of work to support all of the ADC features (such as timer driven sampling). If all you want to do is a simple analog conversion, then in lieu of a real ADC driver, you can use simple in-line logic such as you can see in the PIC32MX7 MMB touchscreen driver at boards/pic32mx7mmb/src/up_touchscreen.c</p><h1 id="pic32mx-configuration-options" tabindex="-1">PIC32MX Configuration Options <a class="header-anchor" href="#pic32mx-configuration-options" aria-label="Permalink to &quot;PIC32MX Configuration Options&quot;">​</a></h1><p>General Architecture Settings:</p><pre><code>CONFIG_ARCH - Identifies the arch/ subdirectory.  This should
 be set to:

   CONFIG_ARCH=mips

CONFIG_ARCH_family - For use in C code:

   CONFIG_ARCH_MIPS=y

CONFIG_ARCH_architecture - For use in C code:

   CONFIG_ARCH_MIPS32=y

CONFIG_ARCH_CHIP - Identifies the arch/*/chip subdirectory

   CONFIG_ARCH_CHIP=pic32mx

CONFIG_ARCH_CHIP_name - For use in C code to identify the exact
   chip:

   CONFIG_ARCH_CHIP_PIC32MX250F128D=y

CONFIG_ARCH_BOARD - Identifies the boards/ subdirectory and
   hence, the board that supports the particular chip or SoC.

   CONFIG_ARCH_BOARD=mirtoo

CONFIG_ARCH_BOARD_name - For use in C code

   CONFIG_ARCH_BOARD_MIRTOO=y

CONFIG_ARCH_LOOPSPERMSEC - Must be calibrated for correct operation
   of delay loops

CONFIG_ENDIAN_BIG - define if big endian (default is little
   endian)

CONFIG_RAM_SIZE - Describes the installed DRAM (CPU SRAM in this case):

   CONFIG_RAM_SIZE=(32*1024) (32Kb)

   There is an additional 32Kb of SRAM in AHB SRAM banks 0 and 1.

CONFIG_RAM_START - The start address of installed DRAM

   CONFIG_RAM_START=0xa0000000

CONFIG_ARCH_LEDS - Use LEDs to show state. Unique to boards that
   have LEDs

CONFIG_ARCH_INTERRUPTSTACK - This architecture supports an interrupt
   stack. If defined, this symbol is the size of the interrupt
   stack in bytes.  If not defined, the user task stacks will be
   used during interrupt handling.

CONFIG_ARCH_STACKDUMP - Do stack dumps after assertions

CONFIG_ARCH_LEDS -  Use LEDs to show state. Unique to board architecture.

PIC32MX Configuration

  CONFIG_PIC32MX_MVEC - Select muli- vs. single-vectored interrupts

Individual subsystems can be enabled:

   CONFIG_PIC32MX_WDT            - Watchdog timer
   CONFIG_PIC32MX_T2             - Timer 2 (Timer 1 is the system time and always enabled)
   CONFIG_PIC32MX_T3             - Timer 3
   CONFIG_PIC32MX_T4             - Timer 4
   CONFIG_PIC32MX_T5             - Timer 5
   CONFIG_PIC32MX_IC1            - Input Capture 1
   CONFIG_PIC32MX_IC2            - Input Capture 2
   CONFIG_PIC32MX_IC3            - Input Capture 3
   CONFIG_PIC32MX_IC4            - Input Capture 4
   CONFIG_PIC32MX_IC5            - Input Capture 5
   CONFIG_PIC32MX_OC1            - Output Compare 1
   CONFIG_PIC32MX_OC2            - Output Compare 2
   CONFIG_PIC32MX_OC3            - Output Compare 3
   CONFIG_PIC32MX_OC4            - Output Compare 4
   CONFIG_PIC32MX_OC5            - Output Compare 5
   CONFIG_PIC32MX_I2C1           - I2C 1
   CONFIG_PIC32MX_I2C2           - I2C 2
   CONFIG_PIC32MX_SPI1           - SPI 1
   CONFIG_PIC32MX_SPI2           - SPI 2
   CONFIG_PIC32MX_UART1          - UART 1
   CONFIG_PIC32MX_UART2          - UART 2
   CONFIG_PIC32MX_ADC            - ADC 1
   CONFIG_PIC32MX_PMP            - Parallel Master Port
   CONFIG_PIC32MX_CM1            - Comparator 1
   CONFIG_PIC32MX_CM2            - Comparator 2
   CONFIG_PIC32MX_CM3            - Comparator 3
   CONFIG_PIC32MX_RTCC           - Real-Time Clock and Calendar
   CONFIG_PIC32MX_DMA            - DMA
   CONFIG_PIC32MX_FLASH          - FLASH
   CONFIG_PIC32MX_USBDEV         - USB device
   CONFIG_PIC32MX_USBHOST        - USB host
   CONFIG_PIC32MX_CTMU           - CTMU

PIC32MX Configuration Settings
DEVCFG0:
  CONFIG_PIC32MX_DEBUGGER - Background Debugger Enable. Default 3 (disabled). The
    value 2 enables.
  CONFIG_PIC32MX_ICESEL - In-Circuit Emulator/Debugger Communication Channel Select
    Default 1 (PG2)
  CONFIG_PIC32MX_PROGFLASHWP  - Program FLASH write protect.  Default 0xff (disabled)
  CONFIG_PIC32MX_BOOTFLASHWP - Default 1 (disabled)
  CONFIG_PIC32MX_CODEWP - Default 1 (disabled)
DEVCFG1: (All settings determined by selections in board.h)
DEVCFG2: (All settings determined by selections in board.h)
DEVCFG3:
  CONFIG_PIC32MX_USBIDO - USB USBID Selection.  Default 1 if USB enabled
    (USBID pin is controlled by the USB module), but 0 (GPIO) otherwise.
  CONFIG_PIC32MX_VBUSIO - USB VBUSON Selection (Default 1 if USB enabled
    (VBUSON pin is controlled by the USB module, but 0 (GPIO) otherwise.
  CONFIG_PIC32MX_WDENABLE - Enabled watchdog on power up.  Default 0 (watchdog
    can be enabled later by software).

The priority of interrupts may be specified.  The value ranage of
priority is 4-31. The default (16) will be used if these any of these
are undefined.

   CONFIG_PIC32MX_CTPRIO         - Core Timer Interrupt
   CONFIG_PIC32MX_CS0PRIO        - Core Software Interrupt 0
   CONFIG_PIC32MX_CS1PRIO        - Core Software Interrupt 1
   CONFIG_PIC32MX_INT0PRIO       - External Interrupt 0
   CONFIG_PIC32MX_INT1PRIO       - External Interrupt 1
   CONFIG_PIC32MX_INT2PRIO       - External Interrupt 2
   CONFIG_PIC32MX_INT3PRIO       - External Interrupt 3
   CONFIG_PIC32MX_INT4PRIO       - External Interrupt 4
   CONFIG_PIC32MX_FSCMPRIO       - Fail-Safe Clock Monitor
   CONFIG_PIC32MX_T1PRIO         - Timer 1 (System timer) priority
   CONFIG_PIC32MX_T2PRIO         - Timer 2 priority
   CONFIG_PIC32MX_T3PRIO         - Timer 3 priority
   CONFIG_PIC32MX_T4PRIO         - Timer 4 priority
   CONFIG_PIC32MX_T5PRIO         - Timer 5 priority
   CONFIG_PIC32MX_IC1PRIO        - Input Capture 1
   CONFIG_PIC32MX_IC2PRIO        - Input Capture 2
   CONFIG_PIC32MX_IC3PRIO        - Input Capture 3
   CONFIG_PIC32MX_IC4PRIO        - Input Capture 4
   CONFIG_PIC32MX_IC5PRIO        - Input Capture 5
   CONFIG_PIC32MX_OC1PRIO        - Output Compare 1
   CONFIG_PIC32MX_OC2PRIO        - Output Compare 2
   CONFIG_PIC32MX_OC3PRIO        - Output Compare 3
   CONFIG_PIC32MX_OC4PRIO        - Output Compare 4
   CONFIG_PIC32MX_OC5PRIO        - Output Compare 5
   CONFIG_PIC32MX_I2C1PRIO       - I2C 1
   CONFIG_PIC32MX_I2C2PRIO       - I2C 2
   CONFIG_PIC32MX_SPI1PRIO       - SPI 1
   CONFIG_PIC32MX_SPI2PRIO       - SPI 2
   CONFIG_PIC32MX_UART1PRIO      - UART 1
   CONFIG_PIC32MX_UART2PRIO      - UART 2
   CONFIG_PIC32MX_CN             - Input Change Interrupt
   CONFIG_PIC32MX_ADCPRIO        - ADC1 Convert Done
   CONFIG_PIC32MX_PMPPRIO        - Parallel Master Port
   CONFIG_PIC32MX_CM1PRIO        - Comparator 1
   CONFIG_PIC32MX_CM2PRIO        - Comparator 2
   CONFIG_PIC32MX_FSCMPRIO       - Fail-Safe Clock Monitor
   CONFIG_PIC32MX_RTCCPRIO       - Real-Time Clock and Calendar
   CONFIG_PIC32MX_DMA0PRIO       - DMA Channel 0
   CONFIG_PIC32MX_DMA1PRIO       - DMA Channel 1
   CONFIG_PIC32MX_DMA2PRIO       - DMA Channel 2
   CONFIG_PIC32MX_DMA3PRIO       - DMA Channel 3
   CONFIG_PIC32MX_FCEPRIO        - Flash Control Event
   CONFIG_PIC32MX_USBPRIO        - USB
</code></pre><p>PIC32MXx specific device driver settings</p><pre><code>CONFIG_UARTn_SERIAL_CONSOLE - selects the UARTn for the
   console and ttys0 (default is the UART0).
CONFIG_UARTn_RXBUFSIZE - Characters are buffered as received.
   This specific the size of the receive buffer
CONFIG_UARTn_TXBUFSIZE - Characters are buffered before
   being sent.  This specific the size of the transmit buffer
CONFIG_UARTn_BAUD - The configure BAUD of the UART.  Must be
CONFIG_UARTn_BITS - The number of bits.  Must be either 7 or 8.
CONFIG_UARTn_PARTIY - 0=no parity, 1=odd parity, 2=even parity
CONFIG_UARTn_2STOP - Two stop bits
</code></pre><p>PIC32MXx USB Device Configuration</p><p>PIC32MXx USB Host Configuration (the PIC32MX does not support USB Host)</p><h1 id="configurations" tabindex="-1">Configurations <a class="header-anchor" href="#configurations" aria-label="Permalink to &quot;Configurations&quot;">​</a></h1><p>Each PIC32MX configuration is maintained in a sub-directory and can be selected as follow:</p><pre><code>tools/configure.sh mirtoo:&lt;subdir&gt;
</code></pre><p>Where <code>&lt;subdir&gt;</code> is one of the following:</p><p>nsh</p><pre><code>This configuration directory holds configuration files that can
be used to support the NuttShell (NSH).  This configuration use
UART1 which is available on FUNC 4 and 5 on connector X3:

  CONFIG_PIC32MX_UART1=y           : UART1 for serial console
  CONFIG_UART1_SERIAL_CONSOLE=n

NOTES:

1. This configuration uses the mconf-based configuration tool.  To
   change this configurations using that tool, you should:

   a. Build and install the kconfig-mconf tool.  See nuttx/README.txt
      see additional README.txt files in the NuttX tools repository.

   b. Execute &#39;make menuconfig&#39; in nuttx/ in order to start the
      reconfiguration process.

2. UART2

   If you are not using MPLAB to debug, you may switch to UART2
   by modifying the NuttX configuration to disable UART1 and to
   select UART2.  You should also change Make.defs to use the
   release.ld linker script instead of the debug.ld link script.

3. This configuration also uses the Microchip C32 toolchain under
   windows by default:

     CONFIG_MIPS32_TOOLCHAIN_MICROCHIPW_LITE=y : Lite version of windows toolchain

   To switch to the Linux C32 toolchain you will have to change (1) the
   toolchain selection in .config (after configuration) and (2) the
   path to the toolchain in the PATH environment variable.  See notes above
   with regard to the XC32 toolchain.

4. PGA117 Support

   The Mirtoo&#39;s PGA117 amplifier/multiplexer is not used by this configuration
   but can be enabled by setting:

     CONFIG_ADC=y         : Enable support for analog input devices
     CONFIG_ADC_PGA11X=y  : Enable support for the PGA117
</code></pre><p>nxffs</p><pre><code>This is a configuration very similar to the nsh configuration.  This
configure also provides the NuttShell (NSH).  And this configuration use
UART1 which is available on FUNC 4 and 5 on connector X3 (as described
for the nsh configuration).  This configuration differs from the nsh
configuration in the following ways:

1. This configuration uses the mconf-based configuration tool.  To
   change this configurations using that tool, you should:

   a. Build and install the kconfig-mconf tool.  See nuttx/README.txt
      see additional README.txt files in the NuttX tools repository.

   b. Execute &#39;make menuconfig&#39; in nuttx/ in order to start the
      reconfiguration process.

2. It uses the Pinguino toolchain be default (this is easily changed,
   see above).

     CONFIG_MIPS32_TOOLCHAIN_PINGUINOW=y

3. SPI2 is enabled and support is included for the NXFFS file system
   on the 32Mbit SST25 device on the Mirtoo board.  NXFFS is the NuttX
   wear-leveling file system.

     CONFIG_PIC32MX_SPI2=y
     CONFIG_MTD_SST25=y
     CONFIG_SST25_SECTOR512=y
     CONFIG_DISABLE_MOUNTPOINT=n
     CONFIG_FS_NXFFS=y
     CONFIG_NSH_ARCHINIT=y

4. Many operating system features are suppressed to produce a smaller
   footprint.

     CONFIG_SCHED_WAITPID=n
     CONFIG_DISABLE_POSIX_TIMERS=y
     CONFIG_DISABLE_PTHREAD=y
     CONFIG_DISABLE_MQUEUE=y
     CONFIG_DISABLE_MQUEUE=y

5. Many NSH commands are suppressed, also for a smaller FLASH footprint

   CONFIG_NSH_DISABLESCRIPT=y
   CONFIG_NSH_DISABLEBG=y

   CONFIG_NSH_DISABLE_EXEC=y
   CONFIG_NSH_DISABLE_EXIT=y
   CONFIG_NSH_DISABLE_GET=y
   CONFIG_NSH_DISABLE_IFCONFIG=y
   CONFIG_NSH_DISABLE_KILL=y
   CONFIG_NSH_DISABLE_MKFIFO=y
   CONFIG_NSH_DISABLE_MKRD=y
   CONFIG_NSH_DISABLE_PUT=y
   CONFIG_NSH_DISABLE_SOURCE=y
   CONFIG_NSH_DISABLE_TEST=y
   CONFIG_NSH_DISABLE_WGET=y

  When the system boots, you should have the NXFFS file system mounted
  at /mnt/sst25.

  NOTES:

  a) It takes many seconds to boot the system using the NXFFS
     file system because the entire FLASH must be verified on power up
     (and longer the first time that NXFFS comes up and has to format the
     entire FLASH).
  b) FAT does not have these delays and this configuration can be modified
     to use the (larger) FAT file system as described below.  But you will,
     or course, lose the wear-leveling feature if FAT is used.

6. FAT

   There is no FAT configuration, but the nxffx configuration can be used
   to support the FAT FS if the following changes are made to the NuttX
   configuration file:

     CONFIG_FS_NXFFS=n
     CONFIG_FS_FAT=y
     CONFIG_NSH_DISABLE_MKFATFS=n

   In this configuration, the FAT file system will not be automatically
   mounted.  When NuttX boots to the NSH prompt, you will find the
   SST5 block driver at /dev/mtdblock0.  This can be formatted with a
   FAT file system and mounted with these commands:

     nsh&gt; mkfatfs /dev/mtdblock0
     nsh&gt; mount -t vfat /dev/mtdblock0 /mnt/sst25

7. PGA117 Support

   The Mirtoo&#39;s PGA117 amplifier/multipexer is not used by this
   configuration but can be enabled by setting:

     CONFIG_ADC=y         : Enable support for anlog input devices
     CONFIG_ADC_PGA11X=y  : Enable support for the PGA117
</code></pre>`,128)]))}const h=e(i,[["render",l]]);export{b as __pageData,h as default};
