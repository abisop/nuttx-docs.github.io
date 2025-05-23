import{_ as n,c as t,al as i,o}from"./chunks/framework.NFAqBSgQ.js";const I=JSON.parse('{"title":"boards/mips/pic32mx/pic32mx-starterkit README","description":"","frontmatter":{},"headers":[],"relativePath":"en/platforms/mips/pic32mx/boards/pic32mx-starterkit/README.md","filePath":"en/platforms/mips/pic32mx/boards/pic32mx-starterkit/README.md"}'),a={name:"en/platforms/mips/pic32mx/boards/pic32mx-starterkit/README.md"};function r(s,e,p,C,l,h){return o(),t("div",null,e[0]||(e[0]=[i(`<h1 id="boards-mips-pic32mx-pic32mx-starterkit-readme" tabindex="-1">boards/mips/pic32mx/pic32mx-starterkit README <a class="header-anchor" href="#boards-mips-pic32mx-pic32mx-starterkit-readme" aria-label="Permalink to &quot;boards/mips/pic32mx/pic32mx-starterkit README&quot;">​</a></h1><p>This README file discusses the port of NuttX to the Microchip PIC32 Ethernet Starter Kit (DM320004) with either</p><ol><li>The Multimedia Expansion Board (MEB, DM320005), or</li><li>The Starter Kit I/O Expansion Board</li></ol><p>See www.microchip.com for further information.</p><p>The PIC32 Ethernet Starter Kit includes:</p><ul><li>PIC32MX795F512L 32-bit microcontroller.</li><li>PIC32MX795F512L USB microcontroller for on-board debugging.</li><li>Green power indicator LED.</li><li>Orange debug indicator LED.</li><li>Three user-defined indicator LEDs.</li><li>Ethernet 10/100 bus speed indicator LED.</li><li>Three push button switches for user-defined inputs.</li><li>On-board crystal for precision microcontroller clocking (8 MHz).</li><li>50 MHz Ethernet PHY oscillator.</li><li>32 kHz oscillator (optional).</li><li>USB connectivity for on-board debugger communications.</li><li>USB Host and OTG power supply for powering PIC32 USB applications.</li><li>USB Type A receptacle connectivity for PIC32 host-based applications.</li><li>USB Type micro-AB receptacle for OTG and USB device connectivity for PIC32 OTG/device-based applications.</li><li>RJ-45 Ethernet port (External Ethernet PHY).</li></ul><p>The MEB adds:</p><ul><li>3.2 inch (8.1 cm) QVGA touch screen display with backlight</li><li>Solomon Systech Graphics Controller (SSD1926)</li><li>Five user-controlled LEDs</li><li>Power LED</li><li>Four-way joystick</li><li>Fire button</li><li>Headphone jack</li><li>Line output jack</li><li>Microphone input jack</li><li>microSD card slot.</li><li>Accelerometer and temperature sensor</li><li>24LC08 EEPROM.</li><li>SPI Flash</li><li>24-bit audio codec</li><li>CPLD for SPI and Chip Select configuration</li><li>Integrated 802.11 wireless connectivity</li></ul><p>The Starter Kit I/O Expansion Board:</p><p>Mostly just brings out all of the pins from the tiny Starter Kit connector.</p><h1 id="contents" tabindex="-1">Contents <a class="header-anchor" href="#contents" aria-label="Permalink to &quot;Contents&quot;">​</a></h1><p>PIC32MX795F512L Pin Out MEB Connector PICtail Serial Output using the Toolchains Creating Compatible NuttX HEX files Serial Console: MEB Serial Console: Starter Kit I/O Expansion Board LEDs PIC32MX Configuration Options Configurations</p><h1 id="pic32mx795f512l-pin-out" tabindex="-1">PIC32MX795F512L Pin Out <a class="header-anchor" href="#pic32mx795f512l-pin-out" aria-label="Permalink to &quot;PIC32MX795F512L Pin Out&quot;">​</a></h1><p>LEFT SIDE, TOP-TO-BOTTOM (if pin 1 is i n upper left)</p><hr><p>PIN CONFIGURATIONS SIGNAL NAME ON-BOARD CONNECTIONS (Family Data Sheet Table 1-1) ( Starter Kit User Guide)</p><p>1 RG15/AERXERR ERXERR Ethernet RX_ER/MDIX_IN 2 VDD P32_VDD --- 3 PMD5/RE5 PMPD5/RE5 J2 pin 13 4 PMD6/RE6 PMPD6/RE6 J2 pin 9 5 PMD7/RE7 PMPD7/RE7 J2 pin 7 6 RC1/T2CK T2CLK/RC1 J2 pin 35 (timer) 7 RC2/AC2TX/T3CK T3CLK/RC2 J2 pin 37 (timer) 8 RC3/AC2RX/T4CK T4CLK/RC3 J2 pin 39 (timer) 9 RC4/SDI1/T5CK SDI1/T4CLK/RC4 J2 pin 41 (timer) J2 pin 93 (SPI1) 10 PMA5/CN8/ECOL/RG6/SCK2/U3RTS/U6TX PMPA5/SCM2C/CN8/RG6 J2 pin 45 (SPI2) J2 pin 117 (PMP address) 11 PMA4/CN9/ECRS/RG7/SDA4/SDI2/U3RX PMPA4/SCM2A/CN9/RG7 J2 pin 47 (SPI2) J2 pin 119 (PMP address) 12 PMA3/AECRSDV/AERXDV/CN10/ECRSDV/ ECRS_DV Ethernet CRS/CRS_DV/LED_CFG ERXDV/RG8/SCL4/SDO2/U3TX 13 MCLR PIC32_MCLR (pulled up) PIC32MX440F512H debug processor J2 pin 130 (ICSP) 14 PMA2/AEREFCLK/AERXCLK/CN11/ EREF_CLK 50MHz clock, Ethernet X1 EREFCLK/ERXCLK/RG9/SS2/U3CTS/ U6RX 15 VSS (grounded) --- 16 VDD P32_VDD --- 17 RA0/TMS TMS/RA0 J2 pin 126 (JTAG/GPIO) 18 AERXD0/INT1/RE8 ERXD0(2) Ethernet RXD_0/PHYAD1 19 AERXD1/INT2/RE9 ERXD1(2) Ethernet RXD_1/PHYAD2 20 AN5/C1IN+/CN7/RB5/VBUSON VBUSON/C1IN+/AN5/CN7/RB5 USB host power supply, TPS20x1B ~EN, Low enables power to host port (J4) USB OTG power supply, MCP1253_MSOP ~SHDN Enables power to device/OTG port (J5) J2 pin 63 (comparator 1) J2 pin 62 (A/D) 21 AN4/C1IN-/CN6/RB4 USBOEN/C1IN-/AN4/CN6/RB4 J2 pin 65 (comparator 1) J2 pin 64 (A/D) 22 AN3/C2IN+/CN5/RB3 C2IN+/AN3/CN5/RB3 TPS20x1B ~OC, sense host port power MCP1253_MSOP PGOOD, sense device/OTG port power J2 pin 67 (comparator 2) J2 pin 66 (A/D) 23 AN2/C2IN-/CN4/RB2 C2IN-/AN2/CN4/RB2 J2 pin 69 (comparator 2) J2 pin 101 J2 pin 68 (A/D) 24 AN1/CN3/PGEC1/RB1 PGC1/AN1/CN3/RB1 J2 pin 70 (A/D) 25 AN0/CN2/PGED1/RB0 PGD1/AN0/CN2/RB0 J2 pin 72 (A/D)</p><p>BOTT OM SIDE, LEFT-TO-RIGHT (if pin 1 is in upper left)</p><hr><p>PIN CONFIGURATIONS SIGNAL NAME ON-BOARD CONNECTIONS (Family Data Sheet Table 1-1) ( Starter Kit User Guide)</p><p>26 AN6/OCFA/PGEC2/RB6 PIC32_PGC2 PIC32MX440F512H debug processor J2 pin 128 (ICSP) 27 AN7/PGED2/RB7 PIC32_PGD2/DBG_SD0 PIC32MX440F512H debug processor J2 pin 132 (ICSP) 28 PMA7/AERXD2/CVREF-/RA9 PMPA7/VREF-/RA9 J2 pin 113 (PMP address) J2 pin 114 (A/D ref) 29 PMA6/AERXD3/CVREF+/RA10/VREF+ PMPA6/VREF+/RA10 J2 pin 115 (PMP address) J2 pin 116 (A/D ref) 30 AVDD P32_VDD --- 31 AVSS (grounded) --- 32 AN8/C1OUT/RB8 C1OUT/AN8/RB8 J2 pin 71 33 AN9/C2OUT/RB9 C2OUT/AN9/RB9 J2 pin 73 34 PMA13/AN10/RB10/CVREFOUT PMPA13/CVREF/AN10 J2 pin 101 (PMP address) J2 pin 102 (Comparator ref) 35 PMA12/AETXERR/AN11/ERXERR/RB11 PMPA12/AN11/RB11 J2 pin 103 (PMP address) 36 VSS (grounded) --- 37 VDD P32_VDD --- 38 RA1/TCK TCK/RA1 PIC32MX440F512H debug processor J2 pin 124 (JTAG/GPIO) 39 AC1TX/RF13/SCK4/U2RTS/U5TX SCM3D/BCLK2/RF13 J2 pin 106 (UART2) 40 AC1RX/RF12/SS4/U2CTS/U5RX SCM3C/RF12 J2 pin 108 (UART2) 41 PMA11/AECRS/AN12/ERXD0/RB12 PMPA11/AN12/RB12 J2 pin 105 (PMP address) 42 PMA10/AECOL/AN13/ERXD1/RB13 PMPA10/AN13/RB13 J2 pin 107 (PMP address) 43 PMA1/AETXD3/AN14/ERXD2/PMALH/RB14 PMPA1/AN14/RB14 J2 pin 127 (PMP address) 44 PMA0/AETXD2/AN15/CN12/ERXD3/OCFB/ PMPA0/AN15/OCFB/CN12 J2 pin 129 (PMP address) PMALL/RB15 J2 pin 36 45 VSS (grounded) --- 46 VDD P32_VDD --- 47 AETXD0/CN20/RD14/SS3/U1CTS/U4RX EXTD0(2) Ethernet TXD_0 48 AETXD1/CN21/RD15/SCK3/U1RTS/U4TX EXTD1(2) Ethernet TXD_1 49 PMA9/CN17/RF4/SDA5/SDI4/U2RX PMPA9/SCM3A/CN17/RF4 J2 pin 109 (PMP address) J2 pin 110 (UART2) 50 PMA8/CN18/RF5/SCL5/SDO4/U2TX PMPA8/SCM3B/CN18/RF5 J2 pin 111 (PMP address) J2 pin 112 (UART2)</p><p>RIGH T SIDE, TOP-TO-BOTTOM (if pin 1 is in upper left)</p><hr><p>PIN CONFIGURATIONS SIGNAL NAME ON-BOARD CONNECTIONS (Family Data Sheet Table 1-1) ( Starter Kit User Guide)</p><p>75 VSS (grounded) 74 CN0/RC14/SOSCO/T1CK SOSC0/T1CK/CN0/RC14 32kHz Oscillator, J2 pin (timer) J2 pin 32 (secondary OSC) 73 CN1/RC13/SOSCI SOSC1/CN1/RC13 32kHz Oscillator J2 pin 32 (secondary OSC) 72 OC1/INT0/RD0/SDO1 SDO1/INT0/OC1/RD0 User LED D4 (high illuminates) J2 pin 87 (EXT_INT) J2 pin 95 (SPI1) J2 pin 46 (OC/PWM) 71 PMA14/AEMDC/EMDC/IC4/PMCS1/RD11 EMDC Ethernet MDC 70 PMA15/IC3/PMCS2/RD10/SCK1 SCK1/IC3/PMPCS2/RD10 J2 pin 29 (PMP control) J2 pin 91 (SPI1) J2 pin 52 (input capture) 69 IC2/RD9/SS1 SS1/IC2/RD9 J2 pin 54 (input capture) 68 AEMDIO/EMDIO/IC1/RD8/RTCC EMDIO Ethernet MDIO 67 AETXEN/INT4/RA15/SDA1 ETXEN(2) Ethernet TX_EN 66 AETXCLK/INT3/RA14/SCL1 INT3/SCL1/RA14 Ethernet PWR_DOWN/INT 65 VSS (grounded) --- 64 CLKO/OSC2/RC15 8MHz crystal 63 CLKI/OSC1/RC12 8MHz crystal 62 VDD P32_VDD --- 61 RA5/TDO TDO/RA5 PIC32MX440F512H debug processor J2 pin 118 (JTAG/GPIO) 60 RA4/TDI TDI/RA4 PIC32MX440F512H debug processor 59 RA3/SDA2 SDA2/RA3 J2 pin 74 (I2C2) 58 RA2/SCL2 SCL2/RA2 J2 pin 76 (I2C2) 57 D+/RG2 D+/RG2 Host port (J4), Device OTG port (J5) 56 D-/RG3 D-/RG3 Host port (J4), Device OTG port (J5) 55 VUSB P32_VDD --- 54 VBUS P32_VBUS --- 53 RF8/SCL3/SDO3/U1TX SCM1B/RF8 J2 pin 90 (UART1) 52 RF2/SDA3/SDI3/U1RX SCM1A/RF2 J2 pin 88 (UART1) 51 RF3/USBID USBID/RF3 Device OTG port (J5)</p><p>TOP SIDE, LEFT-TO-RIGHT (if pin 1 is in upper left)</p><hr><p>PIN CONFIGURATIONS SIGNAL NAME ON-BOARD CONNECTIONS (Family Data Sheet Table 1-1) ( Starter Kit User Guide)</p><p>100 PMD4/RE4 PMPD4/RE4 J2 pin 15 (PMP data) 99 PMD3/RE3 PMPD3/RE3 J2 pin 17 (PMP data) 98 PMD2/RE2 PMPD2/RE2 J2 pin 19 (PMP data) 97 RG13/TRD0 TRD0/RG13 J2 pin 8 (Trace/GPIO) 96 RG12/TRD1 TRD1/RG12 J2 pin 5 95 RG14/TRD2 TRD2/RG14 J2 pin 3 94 PMD1/RE1 PMPD1/RE1 J2 pin 21 (PMP data) 93 PMD0/RE0 PMPD0/RE0 J2 pin 23 (PMP data) 92 RA7/TRD3 TRD3/RA7 J2 pin 6 (Trace/GPIO) 91 RA6/TRCLK TRCLK/RA6 J2 pin 4 (Trace/GPIO) 90 PMD8/C2RX/RG0 PMPD8/RG0 J2 pin 10 (PMP data) 89 PMD9/C2TX/ETXERR/RG1 PMPD9/RG1 J2 pin 14 (PMP data) 88 PMD10/C1TX/ETXD0/RF1 PMPD10/RF1 J2 pin 16 (PMP data) 87 PMD11/C1RX/ETXD1/RF0 PMPD11/RF0 J2 pin 18 (PMP data) 86 VDD P32_VDD --- 85 VCAP/VCORE (capacitor to ground) --- 84 PMD15/CN16/ETXCLK/RD7 PMPD15/CN16/RD7 Switch SW2 (low when closed) J2 pin 26 (PMP data) 83 PMD14/CN15/ETXEN/RD6 PMPD14/CN15/RD6 Switch SW1 (low when closed) J2 pin 24 (PMP data) 82 CN14/PMRD/RD5 PMPRD/CN14/RD5 J2 pin 25 81 CN13/OC5/PMWR/RD4 PMPWR/OC5/C13/RD4 J2 pin 28 (PMP control) J2 pin 38 80 PMD13/CN19/ETXD3/RD13 CN19/PMPD13/RD13 Switch SW3 (low when closed) J2 pin 22 (PMP data) 79 PMD12/ETXD2/IC5/RD12 IC5/PMPD12/RD12 J2 pin 20 (PMP data) J2 pin 48 78 OC4/RD3 OC4/RD3 J2 pin 40 (OC/PWM) 77 OC3/RD2 OC3/RD2 User LED D5 (high illuminates) J2 pin 42 (OC/PWM) 76 OC2/RD1 OC1/RD1 User LED D6 (high illuminates) J2 pin 44 (OC/PWM)</p><h1 id="meb-connector" tabindex="-1">MEB Connector <a class="header-anchor" href="#meb-connector" aria-label="Permalink to &quot;MEB Connector&quot;">​</a></h1><p>The following table summarizes how the pins brought the MEB through the J2 on the Ethernet Starter Kit are mapped. This connect is J2 on the Ethernet Starter Kit and J3 on the MEB.</p><pre><code>                       J3
</code></pre><p>PIC32 SIGNAL PIN CONNECTION</p><hr><p>PMPD0 pin 23 Graphics Controller (SSD1926) PMPD1 pin 21 8-bit or 16-bit Data Bus PMPD2 pin 19<br> PMPD3 pin 17<br> PMPD4 pin 15<br> PMPD6 pin 9<br> PMPD7 pin 7</p><p>PMPD8 pin 10 Graphics Controller (SSD1926) PMPD9 pin 14 16-bit Data Bus PMPD10 pin 16 PMPD11 pin 18 PMPD12 pin 20 PMPD13 pin 22 PMPD14 pin 24 PMPD15 pin 26 -------------------------- ------- ---------------------------------- Graphics Controller (SSD1926) RG13 pin 8 Chip select RB10 pin 101 Register select RC3 pin 39 Wait line RA10 pin 115 Reset (see MRF24WBOMA and PICtail) -------------------------- ------- ---------------------------------- Touchscreen RB11 pin 103 X+ RB12 pin 105 Y- RB13 pin 107 X- RB14 pin 127 Y+</p><hr><p>Joystick CN2/RB0 pin 72 Left CN3/RB1 pin 70 Up CN5/RB3 pin 66 Down CN6/RB4 pin 64 Right CN12/RB15 pin 36 Fire -------------------------- ------- ---------------------------------- LEDs RD1 pin 44 LED1 RD2 pin 42 LED2 RD3 pin 40 LED3 RC1 pin 35 LED4 RC2 pin 37 LED5</p><hr><p>SDA2 pin 74 I2C2 bus for BMA150, MCHP24LC08 SCL2 pin 76 and WM8731 (see also MRF24WBOMA) -------------------------- ------- ---------------------------------- SCK1 pin 91 SPI1 bus for WM8731 SDI1 pin 93 SDO1 pin 95 -------------------------- ------- ---------------------------------- RA6 pin 4 CPLD RA7 pin 6 RG12 pin 5 RG14 pin 3 SCK2 pin 45 (see MRF24WBOMA) SDI2 pin 47 (see MRF24WBOMA) SDO2 pin 49 (see MRF24WBOMA) RG9 pin 51 (see MRF24WBOMA) SCK3A pin 106 (see PICtail) SDI3A pin 110 (see PICtail) SDO3A pin 112 (see PICtail) RF12 pin 108 (see PICtail) ~SSI pin 97 (see PICtail) RD9 pin 54</p><hr><p>INT3 pin 81 MRF24WBOMA RA10 pin 115 (also Graphics Controller and PICtail) RB8 pin 71 -------------------------- ------- ---------------------------------- PICtail J5 SDA2 pin 74 I2C2 bus (see above) SCL2 pin 76 I2C2 bus (see above) SCK2 pin 45 (see CPLD) SDI2 pin 47 (see CPLD) SDO2 pin 49 (see CPLD) RG9 pin 51 (see CPLD) U1RX pin 88 U1TX pin 90 ~U1RTS pin 92 ~U1CTS pin 94 RB9 pin 73 RA10 pin 115 Reset (see Graphics controller and MRF24WBOMA) INT1 pin 85 SCL1 pin 84 SDA1 pin 86 (see CPLD) ~SSI pin 97 (see CPLD) U2RX pin 110 (see CPLD) U2TX pin 112 (see CPLD) ~U2RTS pin 106 (see CPLD) ~U2CTS pin 108 (see CPLD)</p><h1 id="pictail" tabindex="-1">PICtail <a class="header-anchor" href="#pictail" aria-label="Permalink to &quot;PICtail&quot;">​</a></h1><p>The MEB brings many of the signals out via the PICtail (J5). J5 is a 28 pin connector bringing out signals as summarized here (J3 is the designation of the connection to the Ethernet starter kit on the MEB side):</p><hr><p>J3 J5 Table 2-1 PIN PIN Description</p><hr><pre><code>  1  3.3V
  2  I/O_4 (Test Point)
</code></pre><p>76 3 SCL2 84 4 SCL1 74 5 SDA2 86 6 SDA1 47 7 SDI2/SDI2A/CN9/RG7 97 8 SS1, WFI_SDO 49 9 SDO2/SDO2A 10 WFI_SDI 45 11 SCK2/SCK2A 12 WFI_SCK 51 13 SS2/SS2A/RG9 14 SS1/RB2 88 15 U1RX/SDI1A 110 16 U2RX/SDI3A 90 17 U1TX/RA10 112 18 U2TX/SDO3A 92 19 U1RTS/C2OUT/AN9 106 20 U2RTS/SCK3A 94 21 U1CTS/SDO1A 108 22 U2CTS/SS3A/RF12 73 23 RB9/INT1/RE8 115 25 RA10/SCK1A 26 3.3V 85 27 INT1/SS1/RD14 28 GND</p><h1 id="toolchains" tabindex="-1">Toolchains <a class="header-anchor" href="#toolchains" aria-label="Permalink to &quot;Toolchains&quot;">​</a></h1><p>MPLAB/C32 ---------</p><p>I am using the free, &quot;Lite&quot; version of the PIC32MX toolchain available for download from the microchip.com web site. I am using the Windows version. The MicroChip toolchain is the only toolchain currently supported in these configurations, but it should be a simple matter to adapt to other toolchains by modifying the Make.defs file include in each configuration.</p><p>C32 Toolchain Options:</p><pre><code>CONFIG_MIPS32_TOOLCHAIN_MICROCHIPW      - MicroChip full toolchain for Windows
CONFIG_MIPS32_TOOLCHAIN_MICROCHIPL      - MicroChip full toolchain for Linux
CONFIG_MIPS32_TOOLCHAIN_MICROCHIPW_LITE - MicroChip &quot;Lite&quot; toolchain for Windows
CONFIG_MIPS32_TOOLCHAIN_MICROCHIPL_LITE - MicroChip &quot;Lite&quot; toolchain for Linux
CONFIG_MIPS32_TOOLCHAIN_PINGUINOL       - Pinquino toolchain for Linux
CONFIG_MIPS32_TOOLCHAIN_PINGUINOW       - Pinquino toolchain for Windows
CONFIG_MIPS32_TOOLCHAIN_MICROCHIPOPENL  - Microchip open toolchain for Linux
CONFIG_MIPS32_TOOLCHAIN_GNU_ELF         - General mips-elf toolchain for Linux
</code></pre><p>NOTE: The &quot;Lite&quot; versions of the toolchain does not support C++. Also certain optimization levels are not supported by the &quot;Lite&quot; toolchain.</p><p>MicrochipOpen -------------</p><p>An alternative, build-it-yourself toolchain is available here: <a href="http://sourceforge.net/projects/microchipopen/" target="_blank" rel="noreferrer">http://sourceforge.net/projects/microchipopen/</a> . These tools were last updated circa 2010. NOTE: C++ support still not available in this toolchain.</p><p>Building MicrochipOpen (on Linux)</p><ol><li><p>Get the build script from this location:</p><p><a href="http://microchipopen.svn.sourceforge.net/viewvc/microchipopen/ccompiler4pic32/buildscripts/trunk/" target="_blank" rel="noreferrer">http://microchipopen.svn.sourceforge.net/viewvc/microchipopen/ccompiler4pic32/buildscripts/trunk/</a></p></li><li><p>Build the code using the build script, for example:</p><p>./build.sh -b v105_freeze</p><p>This will check out the selected branch and build the tools.</p></li><li><p>Binaries will then be available in a subdirectory with a name something like pic32-v105-freeze-20120622/install-image/bin (depending on the current data and the branch that you selected.</p><p>Note that the tools will have the prefix, mypic32- so, for example, the compiler will be called mypic32-gcc.</p></li></ol><p>Pinguino mips-elf Toolchain ---------------------------</p><p>Another option is the mips-elf toolchain used with the Pinguino project. This is a relatively current mips-elf GCC and should provide free C++ support as well. This toolchain can be downloaded from the Pinguino website: <a href="http://wiki.pinguino.cc/index.php/Main%5C_Page%5C#Download" target="_blank" rel="noreferrer">http://wiki.pinguino.cc/index.php/Main\\_Page\\#Download</a> .</p><p>See also boards/mirtoo/README.txt. There is an experimental (untested) configuration for the Mirtoo platform in that directory.</p><p>MPLAB/C32 vs MPLABX/X32 -----------------------</p><p>It appears that Microchip is phasing out the MPLAB/C32 toolchain and replacing it with MPLABX and XC32. At present, the XC32 toolchain is <em>not</em> compatible with the NuttX build scripts. Here are some of the issues that I see when trying to build with XC32:</p><ol><li><p>Make.def changes: You have to change the tool prefix:</p><p>CROSSDEV=xc32-</p></li><li><p>debug.ld/release.ld: The like expect some things that are not present in the current linker scripts (or are expected with different names). Here are some partial fixes:</p><p>Rename: kseg0_progmem to kseg0_program_mem Rename: kseg1_datamem to kseg1_data_mem</p></li></ol><p>Even then, there are more warnings from the linker and some undefined symbols for non-NuttX code that resides in the unused Microchip libraries. You will have to solve at least this undefined symbol problem if you want to used the XC32 toolchain.</p><p>Windows Native Toolchains -------------------------</p><p>NOTE: There are several limitations to using a Windows based toolchain in a Cygwin environment. The three biggest are:</p><ol><li><p>The Windows toolchain cannot follow Cygwin paths. Path conversions are performed automatically in the Cygwin makefiles using the &#39;cygpath&#39; utility but you might easily find some new path problems. If so, check out &#39;cygpath -w&#39;</p></li><li><p>Windows toolchains cannot follow Cygwin symbolic links. Many symbolic links are used in NuttX (e.g., include/arch). The make system works around these problems for the Windows tools by copying directories instead of linking them. But this can also cause some confusion for you: For example, you may edit a file in a &quot;linked&quot; directory and find that your changes had no effect. That is because you are building the copy of the file in the &quot;fake&quot; symbolic directory. If you use a Windows toolchain, you should get in the habit of making like this:</p><p>make clean_context all</p><p>An alias in your .bashrc file might make that less painful.</p></li></ol><h1 id="powering-the-board" tabindex="-1">Powering the Board <a class="header-anchor" href="#powering-the-board" aria-label="Permalink to &quot;Powering the Board&quot;">​</a></h1><p>Ethernet Starter Kit:</p><pre><code>There are two ways to supply power to the PIC32 Ethernet Starter Kit:

  - USB bus power connected to USB debug connector J1.
  - An external application board with a regulated DC power supply that
    provides +5V can be connected to the J2 application board connector
    that is provided on the bottom side of the board.

One green LED (D3) is provided to show that the PIC32 microcontroller
is powered up.
</code></pre><p>Ethernet Starter Kit with MEB:</p><pre><code>Power can be supplied to the Multimedia Expansion Board through the DC
connector located on the Multimedia Expansion Board... By connecting
9-14V power supply to the DC connector, the Multimedia Expansion Board
and starter kit will receive the proper voltages. The user can also
supply power via the starter kit. However, if the application uses
multiple features of the Multimedia Expansion Board, it is recommended
to use 9-14V power supply.&quot;
</code></pre><h1 id="on-board-debug-support" tabindex="-1">On Board Debug Support <a class="header-anchor" href="#on-board-debug-support" aria-label="Permalink to &quot;On Board Debug Support&quot;">​</a></h1><p>The PIC32 Ethernet Starter Kit includes a PIC32MX440F512H USB microcontroller that provides debugger connectivity over USB. The PIC32MX440F512H is hard-wired to the PIC32 device to provide two types of protocol translation:</p><pre><code>- I/O pins of PIC32MX440F512H to the ICSP™ pins of the PIC32
- I/O pins of PIC32MX440F512H to the JTAG pins of the PIC32
</code></pre><p>The PIC32 Ethernet Starter Kit currently uses the JTAG pins of the PIC32 device for programming and debugging.</p><h1 id="creating-compatible-nuttx-hex-files" tabindex="-1">Creating Compatible NuttX HEX files <a class="header-anchor" href="#creating-compatible-nuttx-hex-files" aria-label="Permalink to &quot;Creating Compatible NuttX HEX files&quot;">​</a></h1><p>Intel Hex Format Files: -----------------------</p><pre><code>When NuttX is built it will produce two files in the top-level NuttX
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
  mkpichex $PWD    #  Convert addresses in nuttx.hex.  $PWD is the path
                   # to the top-level build directory.  It is the only
                   # required input to mkpichex.

  This procedure is automatically performed at the end of a build.
</code></pre><h1 id="serial-console-meb" tabindex="-1">Serial Console: MEB <a class="header-anchor" href="#serial-console-meb" aria-label="Permalink to &quot;Serial Console: MEB&quot;">​</a></h1><p>[[Warning: This all sounds great, but the fact is that I have not yet gotten any serial UART output to work from the MEB.]]</p><p>A serial console is not required to use NuttX. However, all of the NuttX example code in the apps/examples assumes that you have a serial console. The Ethernet Starter Kit(even with the MEB) does not have any RS-232 connector needed to drive the serial console.</p><p>Raw UART signals are available at the MEB&#39;s PICtail connector, however, and can be connected to an external MAX2232 board to get a serial console. The defconfig files are set up to use UART2. So the proper connections would be:</p><p>PICtail PIN FUNCTION -------- ----------- 1 3.3V 16 U2RX 18 U2TX 28 GND</p><p>UART1 is also brought out on the PICtail and would be connected as:</p><p>PICtail PIN FUNCTION -------- ----------- 1 3.3V 15 U1RX 17 U1TX 28 GND</p><p>Here is a summary of the tortuous routes taken by the PIC32MX UART pins:</p><hr><p>PIN CONFIGURATIONS SIGNAL NAME ON-BOARD CONNECTIONS (Family Data Sheet Table 1-1) ( Starter Kit User Guide)</p><hr><p>39 AC1TX/RF13/SCK4/U2RTS/U5TX SCM3D/BCLK2/RF13 J2 pin 106 (UART2) 40 AC1RX/RF12/SS4/U2CTS/U5RX SCM3C/RF12 J2 pin 108 (UART2) 49 PMA9/CN17/RF4/SDA5/SDI4/U2RX PMPA9/SCM3A/CN17/RF4 J2 pin 109 (PMP address) J2 pin 110 (UART2) 50 PMA8/CN18/RF5/SCL5/SDO4/U2TX PMPA8/SCM3B/CN18/RF5 J2 pin 111 (PMP address) J2 pin 112 (UART2) 52 RF2/SDA3/SDI3/U1RX SCM1A/RF2 J2 pin 88 (UART1) 53 RF8/SCL3/SDO3/U1TX SCM1B/RF8 J2 pin 90 (UART1)</p><p>J2 is the connector at the bottom of the Ethernet start kit that mates the Ethernet Starter kit to the MEB. The MEB then makes the following signals available on the PICtail (J5):</p><p>MEB Connector:</p><hr><p>Signal J3</p><hr><p>U1RX U1TX ~U1RTS ~U1CTS pin 88 U2RX U2TX ~U2RTS ~U2CTS pin 90 pin 92 pin 94 pin 110 pin 112 pin 106 pin 108</p><hr><p>PICtail:</p><p>The pins are labeled differently in Table 2-1 and in the schematic. This is confusing. I will trust Table 2-1.</p><hr><pre><code>    Tabl   e 2-1         Sche   matic
</code></pre><p>J3 J5 J3 J5<br> PIN PIN NAME PIN PIN Description</p><hr><pre><code>                     1  3.3V
</code></pre><p>88 15 U1RX 88 15 SDI1A 110 16 U2RX 110 16 SDI3A 90 17 U1TX 17 RA10 90 SD01A 112 18 U2TX 113 18 SDO3A 92 19 U1RTS 19 C2OUT/AN9 92 SCK1A 106 20 U2RTS 106 20 SCK3A 94 21 U1CTS 21 SDO1A 94 SS1/RD14 108 22 U2CTS 108 22 SS3A/RF12 26 3.3V 28 GND</p><h1 id="serial-console-starter-kit-i-o-expansion-board" tabindex="-1">Serial Console: Starter Kit I/O Expansion Board <a class="header-anchor" href="#serial-console-starter-kit-i-o-expansion-board" aria-label="Permalink to &quot;Serial Console: Starter Kit I/O Expansion Board&quot;">​</a></h1><p>U1: Ethernet Starter Kit Expansion I/O board</p><hr><p>PIN Description J2 J1 J10/J11 --- ---------------------------------- ------------- ------------------ 47 AETXD0/CN20/RD14/SS3/U1CTS/U4RX Not available N/A 48 AETXD1/CN21/RD15/SCK3/U1RTS/U4TX Not available N/A 52 RF2/SDA3/SDI3/U1RX J2 pin 88 J11 pin 41 53 RF8/SCL3/SDO3/U1TX J2 pin 90 J11 pin 43</p><p>U2: Ethernet Starter Kit Expansion I/O board</p><hr><p>PIN Description J2 J1 J10/J11 --- ---------------------------------- ------------- ------------------ 39 AC1TX/RF13/SCK4/U2RTS/U5TX J2 pin 106 J11 pin 42 40 AC1RX/RF12/SS4/U2CTS/U5RX J2 pin 108 J11 pin 44 50 PMA8/CN18/RF5/SCL5/SDO4/U2TX J2 pin 111 J10 pin 52 J2 pin 112 J11 pin 48 49 PMA9/CN17/RF4/SDA5/SDI4/U2RX J2 pin 109 J10 pin 51 J2 pin 110 J11 pin 46</p><p>U3: Ethernet Starter Kit Expansion I/O board</p><hr><p>PIN Description J2 J1 J10/J11 --- ---------------------------------- ------------- ------------------ 10 PMA5/CN8/ECOL/RG6/SCK2/U3RTS/U6TX J2 pin 45 J10 pin 23 J2 pin 117 J10 pin 55 11 PMA4/CN9/ECRS/RG7/SDA4/SDI2/U3RX J2 pin 47 J10 pin 24 J2 pin 119 J10 pin 56 12 PMA3/AECRSDV/AERXDV/CN10/ECRSDV/ Not available N/A ERXDV/RG8/SCL4/SDO2/U3TX 14 PMA2/AEREFCLK/AERXCLK/CN11/ EREFCLK/ERXCLK/RG9/SS2/U3CTS/ Not available N/A U6RX</p><p>U4: Ethernet Starter Kit Expansion I/O board</p><hr><p>PIN Description J2 J1 J10/J11 --- ---------------------------------- ------------- ------------------ 47 AETXD0/CN20/RD14/SS3/U1CTS/U4RX Not available N/A 48 AETXD1/CN21/RD15/SCK3/U1RTS/U4TX Not available N/A</p><p>U5: Ethernet Starter Kit Expansion I/O board</p><hr><p>PIN Description J2 J1 J10/J11 --- ---------------------------------- ------------- ------------------ 39 AC1TX/RF13/SCK4/U2RTS/U5TX J2 pin 106 J11 pin 42 40 AC1RX/RF12/SS4/U2CTS/U5RX J2 pin 108 J11 pin 44</p><p>U6: PIN Description --- ---------------------------------- 10 PMA5/CN8/ECOL/RG6/SCK2/U3RTS/U6TX J2 pin 45 J10 pin 23 J2 pin 117 J10 pin 55 14 PMA2/AEREFCLK/AERXCLK/CN11/ Not available N/A EREFCLK/ERXCLK/RG9/SS2/U3CTS/ U6RX</p><h1 id="leds" tabindex="-1">LEDs <a class="header-anchor" href="#leds" aria-label="Permalink to &quot;LEDs&quot;">​</a></h1><p>The PIC32MX Ethernet Starter kit has 3 user LEDs labeled LED1-3 on the board graphics (but referred to as LED4-6 in the schematic):</p><p>PIN User&#39;s Guide Board Stencil Notes</p><hr><p>RD0 &quot;User LED D4&quot; &quot;LED1 (RD0&quot;) High illuminates (RED) RD2 &quot;User LED D5&quot; &quot;LED3 (RD2)&quot; High illuminates (YELLOW) RD1 &quot;User LED D6&quot; &quot;LED2 (RD1)&quot; High illuminates (GREEN)</p><p>We will use the labels on the board to identify LEDs. If CONFIG_ARCH_LEDS is defined, then NuttX will control these LEDs as follows:</p><pre><code> ON                          OFF    
</code></pre><hr><pre><code> LED1   LED2   LED3   LED1   LED2   LED3
</code></pre><p>LED_STARTED 0 OFF OFF OFF --- --- --- LED_HEAPALLOCATE 1 ON OFF N/C --- --- --- LED_IRQSENABLED 2 OFF ON N/C --- --- --- LED_STACKCREATED 3 ON ON N/C --- --- --- LED_INIRQ 4 N/C N/C ON N/C N/C OFF LED_SIGNAL 4 N/C N/C ON N/C N/C OFF LED_ASSERTION 4 N/C N/C ON N/C N/C OFF LED_PANIC 5 ON N/C N/C OFF N/C N/C</p><p>There are 5 additional LEDs available on the MEB. These are not used by NuttX.</p><pre><code>RD1          LED1
RD2          LED2
RD3          LED3
RC1          LED4
RC2          LED5
</code></pre><h1 id="pic32mx-configuration-options" tabindex="-1">PIC32MX Configuration Options <a class="header-anchor" href="#pic32mx-configuration-options" aria-label="Permalink to &quot;PIC32MX Configuration Options&quot;">​</a></h1><p>General Architecture Settings:</p><pre><code>CONFIG_ARCH - Identifies the arch/ subdirectory.  This should
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

   CONFIG_ARCH_CHIP_PIC32MX795F512L=y

CONFIG_ARCH_BOARD - Identifies the boards/ subdirectory and
   hence, the board that supports the particular chip or SoC.

   CONFIG_ARCH_BOARD=pic32mx-starterkit

CONFIG_ARCH_BOARD_name - For use in C code

   CONFIG_ARCH_BOARD_PIC32MX_STARTERKIT=y

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
   CONFIG_PIC32MX_I2C3           - I2C 3
   CONFIG_PIC32MX_I2C4           - I2C 4
   CONFIG_PIC32MX_I2C5           - I2C 5
   CONFIG_PIC32MX_SPI1           - SPI 1
   CONFIG_PIC32MX_SPI2           - SPI 2
   CONFIG_PIC32MX_SPI3           - SPI 3
   CONFIG_PIC32MX_SPI4           - SPI 4
   CONFIG_PIC32MX_UART1          - UART 1
   CONFIG_PIC32MX_UART2          - UART 2
   CONFIG_PIC32MX_UART3          - UART 3
   CONFIG_PIC32MX_UART4          - UART 4
   CONFIG_PIC32MX_UART5          - UART 5
   CONFIG_PIC32MX_UART6          - UART 6
   CONFIG_PIC32MX_ADC            - ADC 1
   CONFIG_PIC32MX_PMP            - Parallel Master Port
   CONFIG_PIC32MX_CM1            - Comparator 1
   CONFIG_PIC32MX_CM2            - Comparator 2
   CONFIG_PIC32MX_RTCC           - Real-Time Clock and Calendar
   CONFIG_PIC32MX_DMA            - DMA
   CONFIG_PIC32MX_FLASH          - FLASH
   CONFIG_PIC32MX_USBDEV         - USB device
   CONFIG_PIC32MX_USBHOST        - USB host
   CONFIG_PIC32MX_CAN1           - Controller area network 1
   CONFIG_PIC32MX_CAN2           - Controller area network 2
   CONFIG_PIC32MX_ETHERNET       - Ethernet

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
   CONFIG_PIC32MX_I2C3PRIO       - I2C 3
   CONFIG_PIC32MX_I2C4PRIO       - I2C 4
   CONFIG_PIC32MX_I2C5PRIO       - I2C 5
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
   CONFIG_PIC32MX_DMA4PRIO       - DMA Channel 4
   CONFIG_PIC32MX_DMA5PRIO       - DMA Channel 5
   CONFIG_PIC32MX_DMA6PRIO       - DMA Channel 6
   CONFIG_PIC32MX_DMA7PRIO       - DMA Channel 7
   CONFIG_PIC32MX_FCEPRIO        - Flash Control Event
   CONFIG_PIC32MX_USBPRIO        - USB
</code></pre><p>PIC32MXx specific device driver settings. NOTE: For the Ethernet starter kit, there is no RS-232 connector (even with the MEB). See discussion above (&quot;&quot;) for information about how you can configure an external MAX2232 board to get a serial console.</p><pre><code>CONFIG_UARTn_SERIAL_CONSOLE - selects the UARTn for the
   console and ttys0 (default is the UART0).
CONFIG_UARTn_RXBUFSIZE - Characters are buffered as received.
   This specific the size of the receive buffer
CONFIG_UARTn_TXBUFSIZE - Characters are buffered before
   being sent.  This specific the size of the transmit buffer
CONFIG_UARTn_BAUD - The configure BAUD of the UART.  Must be
CONFIG_UARTn_BITS - The number of bits.  Must be either 7 or 8.
CONFIG_UARTn_PARTIY - 0=no parity, 1=odd parity, 2=even parity
CONFIG_UARTn_2STOP - Two stop bits
</code></pre><p>PIC32MX specific PHY/Ethernet device driver settings</p><pre><code>CONFIG_ETH0_PHY_KS8721 - Selects the Micrel KS8721 PHY
CONFIG_ETH0_PHY_DP83848C - Selects the National Semiconductor DP83848C PHY
CONFIG_ETH0_PHY_LAN8720 - Selects the SMSC LAN8720 PHY
CONFIG_PIC32MX_PHY_AUTONEG - Enable auto-negotiation
CONFIG_PIC32MX_PHY_SPEED100 - Select 100Mbit vs. 10Mbit speed.
CONFIG_PIC32MX_PHY_FDUPLEX - Select full (vs. half) duplex
CONFIG_PIC32MX_ETH_NTXDESC - Configured number of Tx descriptors. Default: 2
CONFIG_PIC32MX_ETH_NRXDESC - Configured number of Rx descriptors. Default: 4
CONFIG_NET_DUMPPACKET - Dump all received and transmitted packets.
  Also needs CONFIG_DEBUG_FEATURES.
CONFIG_NET_REGDEBUG - Enabled low level register debug.  Also needs
  CONFIG_DEBUG_FEATURES.
CONFIG_PIC32MX_MULTICAST - Enable receipt of multicast (and unicast) frames.
  Automatically set if CONFIG_NET_MCASTGROUP is selected.
</code></pre><p>Related DEVCFG3 Configuration Settings: CONFIG_PIC32MX_FETHIO: Ethernet I/O Pin Selection bit: 1 = Default Ethernet I/O Pins 0 = Alternate Ethernet I/O Pins CONFIG_PIC32MX_FMIIEN: Ethernet MII Enable bit 1 = MII enabled 0 = RMII enabled</p><p>PIC32MXx USB Device Configuration</p><p>PIC32MXx USB Host Configuration (the PIC32MX does not support USB Host)</p><h1 id="configurations" tabindex="-1">Configurations <a class="header-anchor" href="#configurations" aria-label="Permalink to &quot;Configurations&quot;">​</a></h1><p>Each PIC32MX configuration is maintained in a sub-directory and can be selected as follow:</p><pre><code>tools/configure.sh pic32mx-starterkit:&lt;subdir&gt;
</code></pre><p>Where <code>&lt;subdir&gt;</code> is one of the following:</p><p>nsh:</p><pre><code>This is the NuttShell (NSH) using the NSH startup logic at
apps/examples/nsh.

NOTES:

1. This configuration uses the mconf-based configuration tool.  To
   change this configurations using that tool, you should:

   a. Build and install the kconfig-mconf tool.  See nuttx/README.txt
      see additional README.txt files in the NuttX tools repository.

   b. Execute &#39;make menuconfig&#39; in nuttx/ in order to start the
      reconfiguration process.

2. Serial Output

   The OS test produces all of its test output on the serial console.
   This configuration has UART1 enabled as a serial console.  I have
   been unable to get this UART work on the MEB.  But on the Expansion
   I/O board, this maps to RX = J11 pin 41 and TX = J11 pin 43

3. SB Configurations

   Several USB device configurations can be enabled and included
   as NSH built-in built in functions.

   To use USB device, connect the starter kit to the host using a cable
   with a Type-B micro-plug to the starter kit&#39;s micro-A/B port J5, located
   on the bottom side of the starter kit. The other end of the cable
   must have a Type-A plug. Connect it to a USB host. Jumper JP2 should be
   removed.

   All USB device configurations require the following basic setup in
   your NuttX configuration file to enable USB device support:

     CONFIG_USBDEV=y         : Enable basic USB device support
     CONFIG_PIC32MX_USBDEV=y : Enable PIC32 USB device support

   system/cdcacm -  The system/cdcacm program can be included by
   adding the following to the configuration file:

     CONFIG_CDCACM=y         : Enable the CDCACM device
     CONFIG_EXAMPLES_CDCACM=y

3. Networking Configurations

   Several Networking configurations can be enabled and included
   as NSH built-in built in functions.  The following additional
   configuration settings are required:

     CONFIG_NET=y              : Enable networking support
     CONFIG_PIC32MX_ETHERNET=y : Enable the PIC32 Ethernet driver
     CONFIG_NSH_TELNET=y       : Enable the Telnet NSH console (optional)

   NOTES:

   a. This logic will assume that a network is connected.  During its
      initialization, it will try to negotiate the link speed.  If you have
      no network connected when you reset the board, there will be a long
      delay (maybe 30 seconds?) before anything happens.  That is the timeout
      before the networking finally gives up and decides that no network is
      available.

   b. This example can support an FTP client.  In order to build in FTP client
      support simply add the following to the NuttX configuration file:

     CONFIG_NETUTILS_FTPC=y
     CONFIG_EXAMPLES_FTPC=y

   c. This example can support an FTP server.  In order to build in FTP server
      support simply add the following to the NuttX configuration file:

     CONFIG_NETUTILS_FTPD=y
     CONFIG_EXAMPLES_FTPD=y
</code></pre><p>nsh2:</p><pre><code>This is an alternative NSH configuration.  Without the Expansion I/O board,
there is no way to connect a serial console.  This NSH alternative supports
only a Telnet console.  The nsh2 differs from the nsh configuration in the
following ways:

NOTES:

1. Networking is enabled:

   CONFIG_NET=y                : Enable networking support
   CONFIG_PIC32MX_ETHERNET=y   : Enable the PIC32 Ethernet driver
   CONFIG_NSH_CONSOLE=n        : Disable NSH serial console
   CONFIG_NSH_TELNET=y         : Enable the Telnet NSH console

   See apps/nshlib/README.txt for other NSH networking-related configuration
   settings.

2. UART1 is disabled

  CONFIG_PIC32MX_UART1=n        : UART1 is disabled (as well as other UARTs)
  CONFIG_UART1_SERIAL_CONSOLE=n : There is no serial console

3. The RAM log is enabled&quot;

  CONFIG_RAMLOG=y             : Enable the RAM-based logging feature.
  CONFIG_RAMLOG_SYSLOG=y      : This enables the RAM-based logger as the
                                system logger.

  Logging is currently set up to use 16Kb of memory:

  CONFIG_RAMLOG_BUFSIZE=16384

There are a few other configuration differences as necessary to support
this different device configuration. Just the do the &#39;diff&#39; if you are
curious.

NOTES:
  See the notes for the nsh configuration.  Most also apply to the nsh2
  configuration.
</code></pre><h2 id="using-a-ram-disk-and-the-usb-msc-device-with-nsh-and-nsh2" tabindex="-1">Using a RAM disk and the USB MSC device with nsh and nsh2 <a class="header-anchor" href="#using-a-ram-disk-and-the-usb-msc-device-with-nsh-and-nsh2" aria-label="Permalink to &quot;Using a RAM disk and the USB MSC device with nsh and nsh2&quot;">​</a></h2><p>Here is an experimental change to either examples/nsh or examples/nsh2 that will create a RAM disk and attempt to export that RAM disk as a USB mass storage device.</p><ol><li>Changes to nuttx/.config</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- --&gt;</span></span></code></pre></div><pre><code>a) Enable support for the PIC32 USB device

  -CONFIG_PIC32MX_USBDEV=n
  +CONFIG_PIC32MX_USBDEV=y

b) Enable NuttX USB device support

  -CONFIG_USBDEV=n
  +CONFIG_USBDEV=y

c) Enable the USB MSC class driver

  -CONFIG_USBMSC=n
  +CONFIG_USBMSC=y

d) Use a RAM disk (instead of an SD card) as the USB MSC logical unit:

  -CONFIG_SYSTEM_USBMSC_DEVPATH1=&quot;/dev/mmcsd0&quot;
  +CONFIG_SYSTEM_USBMSC_DEVPATH1=&quot;/dev/ram0&quot;

e) Enable building of the system/usbmsc:

  +CONFIG_SYSTEM_USBMSC=y
</code></pre><ol start="3"><li>When NSH first comes up, you must manually create the RAM disk before exporting it:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- --&gt;</span></span></code></pre></div><pre><code>a) Create a 64Kb RAM disk at /dev/ram0:

  nsh&gt; mkrd -s 512 128

b) Put a FAT file system on the RAM disk:

  nsh&gt; mkfatfs /dev/ram0

b) Now the &#39;msconn&#39; command will connect to the host and
   export /dev/ram0 as the USB logical unit:

  nsh&gt; msconn

NOTE:  This modification should be considered experimental.  IN the
little testing I have done with it, it appears functional.  But the
logic has not been stressed and there could still be lurking issues.
(There is a bug associated with this configuration listed in the
top-level TODO list).
</code></pre>`,165)]))}const d=n(a,[["render",r]]);export{I as __pageData,d as default};
