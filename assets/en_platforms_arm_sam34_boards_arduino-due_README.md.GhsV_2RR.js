import{_ as n,c as t,al as o,o as i}from"./chunks/framework.NFAqBSgQ.js";const p=JSON.parse('{"title":"README","description":"","frontmatter":{},"headers":[],"relativePath":"en/platforms/arm/sam34/boards/arduino-due/README.md","filePath":"en/platforms/arm/sam34/boards/arduino-due/README.md"}'),a={name:"en/platforms/arm/sam34/boards/arduino-due/README.md"};function r(s,e,l,A,d,u){return i(),t("div",null,e[0]||(e[0]=[o(`<h1 id="readme" tabindex="-1">README <a class="header-anchor" href="#readme" aria-label="Permalink to &quot;README&quot;">​</a></h1><p>This README discusses issues unique to NuttX configurations for the Arduino DUE board featuring the Atmel ATSAM3X8E MCU running at 84 MHz.</p><p>NOTE: If found that newer Arduino Due board differ from the older boards mine: Mine has the 32.768 slow clock crystal and associated caps installed. the newer boards do not. This can cause a hang in the SAM startup code where it waits for the slow crystal input to lock on.</p><p>Options: (1) Solder a 32.768 KHz crystal and associated caps on board or, (2) disable the function sam_setupsupc() in sam_clockconfig.c</p><h2 id="supported-shields" tabindex="-1">Supported Shields <a class="header-anchor" href="#supported-shields" aria-label="Permalink to &quot;Supported Shields&quot;">​</a></h2><p>- ITEAD 2.4&quot; TFT with Touch, Arduino Shield 1.0</p><h1 id="contents" tabindex="-1">Contents <a class="header-anchor" href="#contents" aria-label="Permalink to &quot;Contents&quot;">​</a></h1><ul><li>PIO Pin Usage</li><li>Rev 2 vs. Rev 3</li><li>ITEAD 2.4&quot; TFT with Touch</li><li>Buttons and LEDs</li><li>Serial Consoles</li><li>Loading Code</li><li>Arduino Due-specific Configuration Options</li><li>Configurations</li></ul><h1 id="pio-pin-usage" tabindex="-1">PIO Pin Usage <a class="header-anchor" href="#pio-pin-usage" aria-label="Permalink to &quot;PIO Pin Usage&quot;">​</a></h1><p>PORTA PORTB PORTC</p><hr><p>PIO SIGNAL CONN PIN PIO SIGNAL CONN PIN PIO SIGNAL CONN PIN</p><p>PA0 CANTX0 ADCH 8 PB0 ETX_CLK ETH 1 PC0 ERASE N/A PA1 CANRX0 ACDH 7 PB1 ETX_EN ETH 3 PC1 PIN33 XIO 14 PA2 AD7 ADCL 8 PB2 ETXD0 ETH 5 PC2 PIN34 XIO 15 PA3 AD6 ADCL 7 PB3 ETXD1 ETH 7 PC3 PIN35 XIO 16 PA4 AD5 ADCL 6 PB4 ERX_DV ETH 10 PC4 PIN36 XIO 17 PA5 EEXTINT ETH 8 PB5 ERXD0 ETH 9 PC5 PIN37 XIO 18 PA6 AD4 ADCL 5 PB6 ERXD1 ETH 11 PC6 PIN38 XIO 19 PA7 PIN31 XIO 12 PB7 ERX_ER ETH 13 PC7 PIN39 XIO 20 PA8 [U]RX PWML 1 PB8 EMDC ETH 14 PC8 PIN40 XIO 21 PA9 [U]TX PWML 2 PB9 EMDIO ETH 12 PC9 PIN41 XIO 22 PA10 RXD2 COMM 6 PB10 UOTGVBOF Vbus power PC10 N/C N/A PA11 TXD2 COMM 5 PB11 UOTGID USB1 4 PC11 N/C N/A PA12 RXD1 COMM 4 PB12 SDA0-3 COMM 7 PC12 PIN51 XIO 32 PA13 TXD1 COMM 3 PB13 SCL0-3 COMM 8 PC13 PIN50 XIO 31 PA14 PIN23 XIO 4 PB14 CANTX1/IO XIO 34 PC14 PIN49 XIO 30 PA15 PIN24 XIO 5 PB15 DAC0(CANRX1) ADCH 5 PC15 PIN48 XIO 29 PA16 AD0 ADCL 1 PB16 DAC1 ADCH 6 PC16 PIN47 XIO 28 PA17 SDA1 PWMH 9 PB17 AD8 ADCH 1 PC17 PIN46 XIO 27 PA18 SCL1 PWMH 10 PB18 AD9 ADCH 2 PC18 PIN45 XIO 26 PA19 PIN42 XIO 23 PB19 AD10 ADCH 3 PC19 PIN44 XIO 25 PA20 PIN43 XIO 24 PB20 AD11(TXD3) ADCH 4 PC20 N/C N/A PA21 TXL TX YELLOW LED PB21 AD14(RXD3) XIO 33 PC21 PWM9 PWMH 2 PA22 AD3 ADCL 4 PB22 N/C N/A PC22 PWM8 PWMH 1 PA23 AD2 ADCL 3 PB23 SS3 ??? PC23 PWM7 PWML 8 PA24 AD1 ADCL 2 PB24 N/C N/A PC24 PWM6 PWML 7 PA25 MISO SPI 1 PB25 PWM2 PWML 3 PC25 PWM5 PWML 6 PA26 MOSI SPI 4 PB26 PIN22 ??? PC26 SS1/PWM4 PWML 10 (there are two) PA27 SPCK SPI 3 PB27 PWM13 PWMH 6 PC27 N/C N/A PA28 SS0/PWM10 (ETH) PWML 10 PB28 JTAG_TCK JTAG 4 PC28 PWM3 PWML 4 PA29 SS1/PWM4 (SD) PB29 JTAG_TDI JTAG 8 PC29 SS0/PWM10 ??? (there are two) PA30 N/A N/A PB30 JTAG_TDO JTAG 6 PC30 RXL RX YELLOW LED PA31 N/A N/A PB31 JTAG_TMS JTAG 2 PC31 N/A N/A ----- ---------- ---- -------- ----- ------------ ----</p><hr><p>PORTA PORTB PORTC</p><hr><p>PIO SIGNAL CONN PIN PIO SIGNAL CONN PIN PIO SIGNAL CONN PIN</p><p>PA0 PIN25 XIO 6 PE0 N/A N/A PF0 N/A N/A PD1 PIN26 XIO 7 PE1 N/A N/A PF1 N/A N/A PD2 PIN27 XIO 8 PE2 N/A N/A PF2 N/A N/A PD3 PIN28 XIO 9 PE3 N/A N/A PF3 N/A N/A PD4 TXD0 COMM 1 PE4 N/A N/A PF4 N/A N/A PD5 RXD0 COMM 2 PE5 N/A N/A PF5 N/A N/A PD6 PIN29 XIO 10 PE6 N/A N/A PF6 N/A N/A PD7 PWM11 PWMH 4 PE7 N/A N/A PF7 N/A N/A PD8 PWM12 PWMH 5 PE8 N/A N/A PF8 N/A N/A PD9 PIN30 XIO 11 PE9 N/A N/A PF9 N/A N/A PD10 PIN32 XIO 13 PE10 N/A N/A PF10 N/A N/A PD11 N/A N/A PE11 N/A N/A PF11 N/A N/A PD12 N/A N/A PE12 N/A N/A PF12 N/A N/A PD13 N/A N/A PE13 N/A N/A PF13 N/A N/A PD14 N/A N/A PE14 N/A N/A PF14 N/A N/A PD15 N/A N/A PE15 N/A N/A PF15 N/A N/A PD16 N/A N/A PE16 N/A N/A PF16 N/A N/A PD17 N/A N/A PE17 N/A N/A PF17 N/A N/A PD18 N/A N/A PE18 N/A N/A PF18 N/A N/A PD19 N/A N/A PE19 N/A N/A PF19 N/A N/A PD20 N/A N/A PE20 N/A N/A PF20 N/A N/A PD21 N/A N/A PE21 N/A N/A PF21 N/A N/A PD22 N/A N/A PE22 N/A N/A PF22 N/A N/A PD23 N/A N/A PE23 N/A N/A PF23 N/A N/A PD24 N/A N/A PE24 N/A N/A PF24 N/A N/A PD25 N/A N/A PE25 N/A N/A PF25 N/A N/A PD26 N/A N/A PE26 N/A N/A PF26 N/A N/A PD27 N/A N/A PE27 N/A N/A PF27 N/A N/A PD28 N/A N/A PE28 N/A N/A PF28 N/A N/A PD29 N/A N/A PE29 N/A N/A PF29 N/A N/A PD30 N/A N/A PE30 N/A N/A PF30 N/A N/A PD31 N/A5 N/A PE31 N/A N/A PF31 N/A N/A ----- ----------</p><hr><hr><h1 id="rev-2-vs-rev-3" tabindex="-1">Rev 2 vs. Rev 3 <a class="header-anchor" href="#rev-2-vs-rev-3" aria-label="Permalink to &quot;Rev 2 vs. Rev 3&quot;">​</a></h1><p>This port was performed on the Arduino Due Rev 2 board. NuttX users have reported issues with the serial port on his Arduino Due Rev 3 board. That problem was resolved as by configuring the UART0 RXD with a pull-up (see include/board.h). That fix as well as any others that we may find will be enabled by selecting</p><pre><code>CONFIG_ARDUINO_DUE_REV3=y
</code></pre><h1 id="itead-2-4-tft-with-touch" tabindex="-1">ITEAD 2.4&quot; TFT with Touch <a class="header-anchor" href="#itead-2-4-tft-with-touch" aria-label="Permalink to &quot;ITEAD 2.4\\&quot; TFT with Touch&quot;">​</a></h1><p>The Arduino 2.4&quot; TFT Touch Shield is designed for all the Arduino compatible boards. It works in 3.3V voltage level. It can be directly plugged on the Arduino and other compatible boards. It will offer display, touch and storage functions for the Arduino board</p><p>Features:</p><pre><code>1. Compatible with 3.3/5V operation voltage level
2. Compatible with UTFT library
3. With SD Card Socket
</code></pre><p>The Arduino 2.4&quot; TFT Touch shield uses the S6D1121 controller , it supports 8-bit data interface. The touch IC is XPT2046.</p><p>NOTE: When used with the ITEAD shield, the power from the USB connector seems to be inefficient (for example, I lose the USB connection when I insert an SD card). I recommend using a 7-12V power supply with the Arduino in this case.</p><p>Connector:</p><hr><p>Arduino GPIO ATSAM3X FUNCTION Due SIGNAL ITHEAD PIN SIGNAL NOTES Due PIN</p><hr><p>PWMH 10 PA18 TWCK0/A20/WKUP9 TWD0SPCK0 SCL1 SDA1 --- --- --- --- --- N/C SCL not SCL1 9 PA17 --- --- AREF GND --- J2 pin 8 --- SD_SCK available SDA SDA1 8 --- SPI0_SPCK/A20/WKUP10 PWM13 PWM12 Vref J2 pin SD_MISO not available Aref 7 --- A21/NANDALE/TIOB8 PWM11 7 GND J2 pin SD_MOSI --- --- SCK, GND 6 PB27 A17/BA1/TIOA8 SS0/PWM10 6 D13 J2 pin SD_CS also LED &quot;L&quot;, PWM13 5 PD8 SPI0_NPCS0/PCK2/WKUP11 PWM9 PWM8 5 D12 J2 pin Touch_Dout Pulled low PWM12 4 PD7 A0/NBS0/PWML4 A1/PWML5 4 D11 J2 pin Touch_IRQ MISO not PWM11 3 PA28 3 D10 J2 pin available PWM10 2 PC21 2 D9 J2 pin MOSI not PWM9 1 PC22 1 D8 available, PWM8 Pulled low Pulled low on-board --- ---</p><h2 id="pwml-8-pc23-a2-pwml6-a3-pwml7-pwm7-pwm6-j3-pin-8-d7-db15-db14-pwm7-7-pc24-a4-tioa6-a5-tiob6-pwm5-j3-pin-7-d6-db13-db12-pwm6-6-pc25-a7-tioa7-rts0-tioa0-ss1-pwm4-j3-pin-6-d5-db11-db10-db9-uart0-txpwm5-5-pc26-utxd-pwmh3-pwm3-pwm2-j3-pin-5-d4-db8-uart0-rxpwm4-4-pc28-urxd-pwmh0-wkup4-tx-rx-j3-pin-4-d3pwm3-3-pb25-j3-pin-3-d2pwm2-2-pa9-j3-pin-2-d1pwm1-1-pa8-j3-pin-1-d0pwm0" tabindex="-1">PWML 8 PC23 A2/PWML6 A3/PWML7 PWM7 PWM6 J3 pin 8 D7 DB15 DB14 --- --- --- PWM7 7 PC24 A4/TIOA6 A5/TIOB6 PWM5 J3 pin 7 D6 DB13 DB12 --- --- --- PWM6 6 PC25 A7/TIOA7 RTS0/TIOA0 SS1/PWM4 J3 pin 6 D5 DB11 DB10 DB9 UART0 TX PWM5 5 PC26 UTXD/PWMH3 PWM3 PWM2 J3 pin 5 D4 DB8 UART0 RX PWM4 4 PC28 URXD/PWMH0/WKUP4 TX RX J3 pin 4 D3<br> PWM3 3 PB25 J3 pin 3 D2<br> PWM2 2 PA9 J3 pin 2 D1<br> PWM1 1 PA8 J3 pin 1 D0<br> PWM0 <a class="header-anchor" href="#pwml-8-pc23-a2-pwml6-a3-pwml7-pwm7-pwm6-j3-pin-8-d7-db15-db14-pwm7-7-pc24-a4-tioa6-a5-tiob6-pwm5-j3-pin-7-d6-db13-db12-pwm6-6-pc25-a7-tioa7-rts0-tioa0-ss1-pwm4-j3-pin-6-d5-db11-db10-db9-uart0-txpwm5-5-pc26-utxd-pwmh3-pwm3-pwm2-j3-pin-5-d4-db8-uart0-rxpwm4-4-pc28-urxd-pwmh0-wkup4-tx-rx-j3-pin-4-d3pwm3-3-pb25-j3-pin-3-d2pwm2-2-pa9-j3-pin-2-d1pwm1-1-pa8-j3-pin-1-d0pwm0" aria-label="Permalink to &quot;PWML 8    PC23   A2/PWML6 A3/PWML7         PWM7 PWM6   J3 pin 8 D7  DB15 DB14     --- --- ---
  PWM7 7    PC24   A4/TIOA6 A5/TIOB6         PWM5        J3 pin 7 D6  DB13 DB12     --- --- ---
  PWM6 6    PC25   A7/TIOA7 RTS0/TIOA0       SS1/PWM4    J3 pin 6 D5  DB11 DB10 DB9 UART0 TX
  PWM5 5    PC26   UTXD/PWMH3                PWM3 PWM2   J3 pin 5 D4  DB8           UART0 RX
  PWM4 4    PC28   URXD/PWMH0/WKUP4          TX RX       J3 pin 4 D3                
  PWM3 3    PB25                                         J3 pin 3 D2                
  PWM2 2    PA9                                          J3 pin 2 D1                
  PWM1 1    PA8                                          J3 pin 1 D0                
  PWM0&quot;">​</a></h2><p>POWER 1 --- --- --- --- --- --- --- --- 2 IOref --- --- IOREF +3V3 --- --- --- --- 3 RESET --- --- MASTER_RESET J4 pin 1 RST --- --- 5 5V --- --- +5V J4 pin 2 3.3V --- --- 4 3.3V --- --- +3V3 J4 pin 3 5V --- --- 6 GND --- --- GND J4 pin 4 GND --- --- 7 GND --- --- GND J4 pin 5 GND --- --- 8 Vin --- --- VIN J4 pin 6 Vin --- --- ADCL 1 A0 PA16 SPCK1/TD/AD7 AD0 J1 pin 1 A0/D14 Touch_Din --- 2 A1 PA24 MCDA3/PCK1/AD6 AD1 J1 pin 2 A1/D15 Touch_CLK --- 3 A2 PA23 MCDA2/TCLK4/AD5 AD2 J1 pin 3 A2/D16 --- --- 4 A3 PA22 MCDA1/TCLK3/AD4 AD3 J1 pin 4 A3/D17 TFT_CS --- 5 A4 PA6 TIOB2/NCS0/AD3 AD4 J1 pin 5 A4/D18 TFT_WR --- 6 A5 PA4 TCLK1/NWAIT/AD2 AD5 J1 pin 6 A5/D19 TFT_RS --- 7 A6 PA3 TIOB1/PWMFI1/AD1/WKUP1 AD6 --- --- --- --- 8 A7 PA2 TIOA1/NANDRDY/AD0 AD7 --- --- --- --- ----------</p><hr><hr><p>NOTES:</p><ol><li>It is not possible to use any of the SPI devices on the Shield unless a bit-bang SPI interface is used. This includes the touch controller a bit-bang SPI interface is used. This includes the touch controller and the SD card.</li><li>UART0 cannot be used. USARTs on the COMM connector should be available.</li><li>Parallel data is not contiguous in the PIO register</li><li>Touchcontroller /CS pin is connected to ground (always selected).</li><li>Either PA28 or PC29 may drive PWM10</li><li>The schematics I have do not agree with the documentation. The Touch IRQ and Dout pins are reversed in the Documentation (D9 an D8, respectively). I am assuming that the schematic is correct (and the schematic does seem to match up with what little I can see on the single visible side of the board).</li></ol><p>SD Interface:</p><hr><p>SD C ONNECTOR ARDUINO C ONNECTORS AT91SAM S D CON NECTOR A RDUINO NNECTORS A T91SAM PIN SIGNAL PIN SIGNAL GPIO P IN S IGNAL P CO IN S IGNAL G PIO</p><hr><p>1 3 5 /CS GND J2 pin 3 D10 --- D13 PA28 --- 2 4 6 DI VCC J2 pin 4 D11 --- PD7 --- 7 9 CLK DO N/C --- J2 D12 --- --- PB27 PD8 8 10 GND IRQ --- --- --- --- --- --- 11 13 WP CD GND pin 6 J2 --- --- --- --- 12 14 SW CD N/C N/C --- --- --- --- 15 pin 5 --- --- --- 16 GND GND N/C --- --- --- --- --- N/C N/C ---<br> ---</p><hr><p>NOTES: - The SD slot shares the pin with LED &quot;L&quot; so LED support must be disabled to use the MMC/SD card on the ITEAD shield. - Either PA28 or PC29 may drive D10</p><p>Touch Controller Interface:</p><hr><p>XP T2046 ARDUINO C ONNECTORS AT91SAM XPT2 046 A RDUINO NNECTORS A T91SAM PIN SIGNAL PIN SIGNAL GPIO PIN SIGNAL CO PIN SIGNAL GPIO</p><hr><p>1 3 5 VCC Y+ --- --- --- --- --- --- --- 2 4 6 X+ X- --- --- --- --- --- --- 7 9 Y- IN3 --- N/C --- --- D9 --- --- 8 10 GND IN4 --- N/C --- --- --- --- 11 13 VREF IRQ --- J2 --- --- --- PC21 12 14 VCC DOUT --- J2 --- D8 --- PC22 15 BUSY /CS pin 2 N/C --- --- 16 DIN DCLK pin 1 J1 A0/D15 PA16 --- pin 1 J1 A1/D15 PA24 pin 2</p><hr><p>NOTES: - /CS is connected to ground (XPT2046 is always selected)</p><h1 id="buttons-and-leds" tabindex="-1">Buttons and LEDs <a class="header-anchor" href="#buttons-and-leds" aria-label="Permalink to &quot;Buttons and LEDs&quot;">​</a></h1><h2 id="buttons" tabindex="-1">Buttons <a class="header-anchor" href="#buttons" aria-label="Permalink to &quot;Buttons&quot;">​</a></h2><p>There are no buttons on the Arduino Due board.</p><h2 id="leds" tabindex="-1">LEDs <a class="header-anchor" href="#leds" aria-label="Permalink to &quot;LEDs&quot;">​</a></h2><p>There are three user-controllable LEDs on board the Arduino Due board:</p><pre><code>  LED              GPIO
  ---------------- -----
  L   Amber LED    PB27
  TX  Yellow LED   PA21
  RX  Yellow LED   PC30
</code></pre><p>LED L is connected to ground and can be illuminated by driving the PB27 output high. The TX and RX LEDs are pulled high and can be illuminated by driving the corresponding GPIO output to low.</p><p>These LEDs are not used by the board port unless CONFIG_ARCH_LEDS is defined. In that case, the usage by the board port is defined in include/board.h and src/sam_leds.c. The LEDs are used to encode OS-related events as follows:</p><pre><code>SYMBOL                MEANING                         LED STATE
                                                L         TX       RX
-------------------  -----------------------  -------- -------- --------
LED_STARTED          NuttX has been started     OFF      OFF      OFF
LED_HEAPALLOCATE     Heap has been allocated    OFF      OFF      OFF
LED_IRQSENABLED      Interrupts enabled         OFF      OFF      OFF
LED_STACKCREATED     Idle stack created         ON       OFF      OFF
LED_INIRQ            In an interrupt            N/C      GLOW     OFF
LED_SIGNAL           In a signal handler        N/C      GLOW     OFF
LED_ASSERTION        An assertion failed        N/C      GLOW     OFF
LED_PANIC            The system has crashed     N/C      N/C      Blinking
LED_IDLE             MCU is is sleep mode       ------ Not used --------
</code></pre><p>Thus if LED L is statically on, NuttX has successfully booted and is, apparently, running normally. If LED RX is glowing, then NuttX is handling interrupts (and also signals and assertions). If TX is flashing at approximately 2Hz, then a fatal error has been detected and the system has halted.</p><h1 id="serial-consoles" tabindex="-1">Serial Consoles <a class="header-anchor" href="#serial-consoles" aria-label="Permalink to &quot;Serial Consoles&quot;">​</a></h1><p>The SAM3X has a UART and 4 USARTS. The Programming port uses a USB-to- serial chip connected to the first UART0 of the MCU (RX0 and TX0). The output from that port is visible using the Arduino tool.</p><p>Any of UART and USART0-3 may be used as a serial console. By default, the UART is used as the serial console in all configurations. But that is easily changed by modifying the configuration as described under &quot;Configurations&quot; below.</p><p>Here are the UART signals available on pins. Under signal name, the first column is the name on the schematic associated with the GPIO, the second comes from: <a href="http://arduino.cc/en/Hacking/PinMappingSAM3X" target="_blank" rel="noreferrer">http://arduino.cc/en/Hacking/PinMappingSAM3X</a>, and the third is the name of the multiplexed SAM3X UART function from the data sheet. This is more than a little confusing.</p><pre><code>------------------------------------------------------------------
PIO              SIGNAL NAME                    CONNECTOR PIN
      DUE SCHEM. PIN MAPPING    SAM3X       DUE SCHEM. BOARD LABEL
----- ---------- -------------- ----------- ---------- -----------
PA8   [U]RX      RX0            UART0  URXD  PWML 1    RX0&lt;-0
PA9   [U]TX      TX0            UART0  UTXD  PWML 2    TX0-&gt;1
PD5   RXD0       RX3            USART3 RXD3  COMM 2    RX3
PD4   TXD0       TX3            USART3 TXD3  COMM 1    TX3
PA12  RXD1       RX2            USART1 RXD1  COMM 4    TX2
PA13  TXD1       TX2            USART1 TXD1  COMM 3    RX2
PA10  RXD2       RX1            USART0 RXD0  COMM 6    RX1
PA11  TXD2       TX1            USART0 TXD0  COMM 5    TX1
PB21  AD14(RXD3) Digital Pin 52 USART2 RXD2  XIO  33   33
PB20  AD11(TXD3) Analog In 11   USART2 TXD2  ADCH 4    A11
</code></pre><p>The outputs from these pins is 3.3V. You will need to connect RS232 transceiver to get the signals to RS232 levels (or connect to the USB virtual COM port in the case of UART0).</p><h1 id="loading-code" tabindex="-1">Loading Code <a class="header-anchor" href="#loading-code" aria-label="Permalink to &quot;Loading Code&quot;">​</a></h1><p>[NOTE: I believe that there have been significant changes to the more recent tool environment such that Bossac may no longer be usable. I don&#39;t know that for certain and perhaps someone with more knowledge of the tools than I could make this work. See the Flip&#39;n&#39;Clip SAM3X README file for additional information.]</p><h2 id="installing-the-arduino-usb-driver-under-windows" tabindex="-1">Installing the Arduino USB Driver under Windows: <a class="header-anchor" href="#installing-the-arduino-usb-driver-under-windows" aria-label="Permalink to &quot;Installing the Arduino USB Driver under Windows:&quot;">​</a></h2><ol><li><p>Download the Windows version of the Arduino software, not the 1.0.x release but the latest (1.5.x or later) that supports the Due. When the download finishes, unzip the downloaded file.</p><p>In the current 1.8.x release, the Arduino Due support is not included in the base package but can be added by selecting the &quot;Boards Manager&quot; from the &quot;Tools&quot; menu.</p></li><li><p>Connect the Due to your computer with a USB cable via the Programming port.</p></li><li><p>The Windows driver installation should fail.</p></li><li><p>Open the Device Manager</p></li><li><p>Look for the listing named &quot;Ports (COM &amp; LPT)&quot;. You should see an open port named &quot;Arduino Due Prog. Port&quot;. Right click and select &quot;Update driver&quot;.</p></li><li><p>Select the &quot;Browse my computer for Driver software&quot; option.</p></li><li><p>Right click on the &quot;Arduino Due Prog. Port&quot; and choose &quot;Update Driver Software&quot;.</p></li><li><p>Navigate to the folder with the Arduino IDE you downloaded and unzipped earlier. Locate and select the &quot;Drivers&quot; folder in the main Arduino folder (not the &quot;FTDI USB Drivers&quot; sub-directory).</p></li></ol><h2 id="loading-nuttx-to-the-due-using-bossa" tabindex="-1">Loading NuttX to the Due Using Bossa: <a class="header-anchor" href="#loading-nuttx-to-the-due-using-bossa" aria-label="Permalink to &quot;Loading NuttX to the Due Using Bossa:&quot;">​</a></h2><p>Arduino uses BOSSA under the hood to load code and you can use BOSSA outside of Arduino.</p><p>Where do you get it?</p><pre><code>Generic BOSSA installation files are available here:
https://github.com/shumatech/BOSSA (formerly at
http://sourceforge.net/projects/b-o-s-s-a/?source=dlp)

Pre-built binaries are available: https://github.com/shumatech/BOSSA/releases

The original Arduino DUE used a patched version of BOSSA available
as source code here: https://github.com/shumatech/BOSSA/tree/arduino
But that has most likely been incorporated into the main github
repository.

But, fortunately, since you already installed Arduino, you already have
BOSSA installed.  In my installation, it is here:

C:\\Program Files (x86)\\Arduino\\arduino-1.5.2\\hardware\\tools\\bossac.exe

On Debian like distribution, BOSSA can be install through repository:
sudo apt install bossa-cli
</code></pre><p>General Procedure</p><pre><code>1) Erase the FLASH and put the Due in bootloader mode
2) Write the file to FLASH
3) Configure to boot from FLASH
4) Reset the DUE
</code></pre><p>Erase FLASH and Put the Due in Bootloader Mode</p><pre><code>This is accomplished by simply configuring the programming port in 1200
baud and sending something on the programming port.  Here is some sample
output from a Windows CMD.exe shell.  NOTE that my Arduino programming
port shows up as COM26.  It may be different on your system.

To enter boot mode, set the baud to 1200 and send anything to the
programming port:

  C:\\Program Files (x86)\\Arduino\\arduino-1.5.2\\hardware\\tools&gt;mode com26:1200,n,8,1

  Status for device COM26:

      Baud:            1200
      Parity:          None
      Data Bits:       8
      Stop Bits:       1
      Timeout:         ON
      XON/XOFF:        OFF
      CTS handshaking: OFF
      DSR handshaking: OFF
      DSR sensitivity: OFF
      DTR circuit:     ON
      RTS circuit:     ON

  C:\\Program Files (x86)\\Arduino\\arduino-1.5.2\\hardware\\tools&gt;bossac.exe --port=COM26 --usb-port=false -i
  Device       : ATSAM3X8
  Chip ID      : 285e0a60
  Version      : v1.1 Dec 15 2010 19:25:04
  Address      : 524288
  Pages        : 2048
  Page Size    : 256 bytes
  Total Size   : 512KB
  Planes       : 2
  Lock Regions : 32
  Locked       : none
  Security     : false
  Boot Flash   : false
</code></pre><h2 id="writing-flash-and-setting-flash-boot-mode" tabindex="-1">Writing FLASH and Setting FLASH Boot Mode <a class="header-anchor" href="#writing-flash-and-setting-flash-boot-mode" aria-label="Permalink to &quot;Writing FLASH and Setting FLASH Boot Mode&quot;">​</a></h2><p>In a Cygwin BaSH shell:</p><pre><code>  export PATH=&quot;/cygdrive/c/Program Files (x86)/Arduino/arduino-1.5.2/hardware/tools&quot;:$PATH

Erasing, writing, and verifying FLASH with bossac:

  $ bossac.exe --port=COM26 --usb-port=false -e -w -v -b nuttx.bin -R
  Erase flash
  Write 86588 bytes to flash
  [==============================] 100% (339/339 pages)
  Verify 86588 bytes of flash
  [==============================] 100% (339/339 pages)
  Verify successful
  Set boot flash true
  CPU reset.

Some things that can go wrong:

  $ bossac.exe --port=COM26 --usb-port=false -e -w -v -b nuttx.bin -R
  No device found on COM26

This error means that there is code running on the Due already so the
bootloader cannot connect. Press reset and try again

  $ bossac.exe --port=COM26 --usb-port=false -e -w -v -b nuttx.bin -R
  No device found on COM26

Sill No connection because Duo does not jump to bootloader after reset.
Press ERASE button and try again

  $ bossac.exe --port=COM26 --usb-port=false -e -w -v -b nuttx.bin -R
  Erase flash
  Write 86588 bytes to flash
  [==============================] 100% (339/339 pages)
  Verify 86588 bytes of flash
  [==============================] 100% (339/339 pages)
  Verify successful
  Set boot flash true
  CPU reset.

In Linux shell:

  bossac -i --port=ttyACM0 -U false -e -w -v -b nuttx.bin -R
</code></pre><p>Other useful bossac operations.</p><pre><code>a) Write code to FLASH don&#39;t change boot mode and don&#39;t reset.  This lets
   you examine the FLASH contents that you just loaded while the bootloader
   is still active.

   $ bossac.exe --port=COM26 --usb-port=false -e -w -v --boot=0 nuttx.bin
   Write 64628 bytes to flash
   [==============================] 100% (253/253 pages)
   Verify 64628 bytes of flash
   [==============================] 100% (253/253 pages)
   Verify successful

b) Verify the FLASH contents (the bootloader must be running)

   $ bossac.exe --port=COM26 --usb-port=false -v nuttx.bin
   Verify 64628 bytes of flash
   [==============================] 100% (253/253 pages)
   Verify successful

c) Read from FLASH to a file  (the bootloader must be running):

   $ bossac.exe --port=COM26 --usb-port=false --read=4096 nuttx.dump
   Read 4096 bytes from flash
   [==============================] 100% (16/16 pages)

d) Change to boot from FLASH

   $ bossac.exe --port=COM26 --usb-port=false --boot=1
   Set boot flash true
</code></pre><h2 id="uploading-nuttx-to-the-due-using-jtag" tabindex="-1">Uploading NuttX to the Due Using JTAG <a class="header-anchor" href="#uploading-nuttx-to-the-due-using-jtag" aria-label="Permalink to &quot;Uploading NuttX to the Due Using JTAG&quot;">​</a></h2><p>The JTAG/SWD signals are brought out to a 10-pin header JTAG connector:</p><pre><code>PIN SIGNAL         JTAG STANDARD     NOTES
--- -------------- ----------------- --------------------------------
 1  3.3V           VTref
 2  JTAG_TMS       SWDIO/TMS         SAM3X pin 31, Pulled up on board
 3  GND            GND
 4  JTAG_TCK       SWDCLK/TCK        SAM3X pin 28, Pulled up on board
 5  GND            GND
 6  JTAG_TDO       SWO/EXta/TRACECTL SAM3X pin 30, ulled up on board
 7  N/C            Key
 8  JTAG_TDI       NC/EXTb/TDI       SAM3X pin 29, Pulled up on board
 9  GND            GNDDetect
 10 MASTER-RESET   nReset
</code></pre><p>You should be able to use a 10- to 20-pin adapter to connect a SAM-ICE debugger to the Arduino Due. I have this Olimex adapter: <a href="https://www.olimex.com/Products/ARM/JTAG/ARM-JTAG-20-10/" target="_blank" rel="noreferrer">https://www.olimex.com/Products/ARM/JTAG/ARM-JTAG-20-10/</a> . But so far I have been unable to get the get the SAM-ICE to communicate with the Due.</p><h1 id="arduino-due-specific-configuration-options" tabindex="-1">Arduino DUE-specific Configuration Options <a class="header-anchor" href="#arduino-due-specific-configuration-options" aria-label="Permalink to &quot;Arduino DUE-specific Configuration Options&quot;">​</a></h1><p>CONFIG_ARCH - Identifies the arch/ subdirectory. This should be set to:</p><pre><code>CONFIG_ARCH=arm
</code></pre><p>CONFIG_ARCH_family - For use in C code:</p><pre><code>CONFIG_ARCH_ARM=y
</code></pre><p>CONFIG_ARCH_architecture - For use in C code:</p><pre><code>CONFIG_ARCH_CORTEXM3=y
</code></pre><p>CONFIG_ARCH_CHIP - Identifies the arch/*/chip subdirectory</p><pre><code>CONFIG_ARCH_CHIP=&quot;sam34&quot;
</code></pre><p>CONFIG_ARCH_CHIP_name - For use in C code to identify the exact chip:</p><pre><code>CONFIG_ARCH_CHIP_SAM34
CONFIG_ARCH_CHIP_SAM3X
CONFIG_ARCH_CHIP_ATSAM3X8E
</code></pre><p>CONFIG_ARCH_BOARD - Identifies the boards/ subdirectory and hence, the board that supports the particular chip or SoC.</p><pre><code>CONFIG_ARCH_BOARD=arduino-due (for the Arduino Due development board)
</code></pre><p>CONFIG_ARCH_BOARD_name - For use in C code</p><pre><code>CONFIG_ARCH_BOARD_ARDUINO_DUE=y
</code></pre><p>CONFIG_ARCH_LOOPSPERMSEC - Must be calibrated for correct operation of delay loops</p><p>CONFIG_RAM_SIZE - Describes the installed DRAM (SRAM in this case):</p><pre><code>CONFIG_RAM_SIZE=65536 (64Kb)
</code></pre><p>CONFIG_RAM_START - The start address of installed DRAM</p><pre><code>CONFIG_RAM_START=0x20000000
</code></pre><p>CONFIG_ARCH_LEDS - Use LEDs to show state. Unique to boards that have LEDs</p><p>Individual subsystems can be enabled:</p><pre><code>CONFIG_SAM34_ADC12B      - 12-bit Analog To Digital Converter
CONFIG_SAM34_CAN0        - CAN Controller 0
CONFIG_SAM34_CAN1        - CAN Controller 1
CONFIG_SAM34_DACC        - Digital To Analog Converter
CONFIG_SAM34_DMAC0       - DMA Controller
CONFIG_SAM34_EMAC        - Ethernet MAC
CONFIG_SAM34_HSMCI       - High Speed Multimedia Card Interface
CONFIG_SAM34_PWM         - Pulse Width Modulation
CONFIG_SAM34_RTC         - Real Time Clock
CONFIG_SAM34_RTT         - Real Time Timer
CONFIG_SAM34_SDRAMC      - SDRAM Controller
CONFIG_SAM34_SMC         - Static Memory Controller
CONFIG_SAM34_SPI0        - Serial Peripheral Interface 0
CONFIG_SAM34_SPI1        - Serial Peripheral Interface 1
CONFIG_SAM34_SSC         - Synchronous Serial Controller
CONFIG_SAM34_TC0         - Timer Counter 0
CONFIG_SAM34_TC1         - Timer Counter 1
CONFIG_SAM34_TC2         - Timer Counter 2
CONFIG_SAM34_TC3         - Timer Counter 3
CONFIG_SAM34_TC4         - Timer Counter 4
CONFIG_SAM34_TC5         - Timer Counter 5
CONFIG_SAM34_TC6         - Timer Counter 6
CONFIG_SAM34_TC7         - Timer Counter 7
CONFIG_SAM34_TC8         - Timer Counter 8
CONFIG_SAM34_TRNG        - True Random Number Generator
CONFIG_SAM34_TWIM/S0     - Two-Wire Interface 0 (master/slave)
CONFIG_SAM34_TWIM/S1     - Two-Wire Interface 1 (master/slave)
CONFIG_SAM34_UART0       - UART 0
CONFIG_SAM34_UOTGHS      - USB OTG High Speed
CONFIG_SAM34_USART0      - USART 0
CONFIG_SAM34_USART1      - USART 1
CONFIG_SAM34_USART2      - USART 2
CONFIG_SAM34_USART3      - USART 3
CONFIG_SAM34_WDT         - Watchdog Timer
</code></pre><p>Some subsystems can be configured to operate in different ways. The drivers need to know how to configure the subsystem.</p><pre><code>CONFIG_SAM34_GPIOA_IRQ
CONFIG_SAM34_GPIOB_IRQ
CONFIG_SAM34_GPIOC_IRQ
CONFIG_SAM34_GPIOD_IRQ
CONFIG_SAM34_GPIOE_IRQ
CONFIG_SAM34_GPIOF_IRQ
</code></pre><h1 id="configurations" tabindex="-1">Configurations <a class="header-anchor" href="#configurations" aria-label="Permalink to &quot;Configurations&quot;">​</a></h1><p>Each Arduino Due configuration is maintained in a sub-directory and can be selected as follow:</p><pre><code>tools/configure.sh [OPTIONS] arduino-due:&lt;subdir&gt;
</code></pre><p>Where typical options are -l to configure to build on Linux or -c to configure for Cygwin under Linux. &#39;tools/configure.sh -h&#39; will show you all of the options.</p><p>Before building, make sure the PATH environment variable includes the correct path to the directory than holds your toolchain binaries.</p><p>And then build NuttX by simply typing the following. At the conclusion of the make, the nuttx binary will reside in an ELF file called, simply, nuttx.</p><pre><code>make
</code></pre><p>The <code>&lt;subdir&gt;</code> that is provided above as an argument to the tools/configure.sh must be is one of the following.</p><p>NOTES:</p><ol><li>These configurations use the mconf-based configuration tool. To change any of these configurations using that tool, you should:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;!-- --&gt;</span></span></code></pre></div><pre><code>a. Build and install the kconfig-mconf tool.  See nuttx/README.txt
   see additional README.txt files in the NuttX tools repository.

b. Execute &#39;make menuconfig&#39; in nuttx/ in order to start the
   reconfiguration process.
</code></pre><ol start="2"><li><p>Unless stated otherwise, all configurations generate console output on UART0 which is available both on the USB virtual COM port and on the PWML connector (see the section &quot;Serial Consoles&quot; above).</p><p>However, the pin usage by the ITEAD TFT shield conflict with the pin usage for UART0. In this case you need to switch to USART0 by modifying the configuration as follows:</p><p>Board Selection -&gt; Peripheral CONFIG_SAM34_UART0=n : Disable UART0. Can&#39;t use with this shield CONFIG_SAM34_USART0=y : Enable USART0 CONFIG_USART0_SERIALDRIVER=y</p><p>Device Drivers -&gt; Serial CONFIG_USART0_SERIAL_CONSOLE=y : Configure the console on USART0 CONFIG_USART0_RXBUFSIZE=256 CONFIG_USART0_TXBUFSIZE=256 CONFIG_USART0_BAUD=115200 CONFIG_USART0_BITS=8 CONFIG_USART0_PARITY=0 CONFIG_USART0_2STOP=0</p><p>NOTE: USART0 TTL levels are available on COMM 5 (TXD0) and COMM 6 (RXD0).</p></li><li><p>Unless otherwise stated, the configurations are setup for Linux (or any other POSIX environment like Cygwin under Windows):</p><p>Build Setup: CONFIG_HOST_LINUX=y : Linux or other POSIX environment</p></li><li><p>These configurations use the older, OABI, buildroot toolchain. But that is easily reconfigured:</p><p>System Type -&gt; Toolchain: CONFIG_ARM_TOOLCHAIN_BUILDROOT=y : Buildroot toolchain CONFIG_ARM_TOOLCHAIN_BUILDROOT_OABI=y : Older, OABI toolchain</p><p>If you want to use the Atmel GCC toolchain, here are the steps to do so:</p><p>Build Setup: CONFIG_HOST_WINDOWS=y : Windows CONFIG_HOST_CYGWIN=y : Using Cygwin or other POSIX environment</p><p>System Type -&gt; Toolchain: CONFIG_ARM_TOOLCHAIN_GNU_EABI=y : General GCC EABI toolchain under windows</p><p>This re-configuration should be done before making NuttX or else the subsequent &#39;make&#39; will fail. If you have already attempted building NuttX then you will have to 1) &#39;make distclean&#39; to remove the old configuration, 2) &#39;tools/configure.sh sam3u-ek/ksnh&#39; to start with a fresh configuration, and 3) perform the configuration changes above.</p><p>Also, make sure that your PATH variable has the new path to your Atmel tools. Try &#39;which arm-none-eabi-gcc&#39; to make sure that you are selecting the right tool.</p></li></ol><h2 id="configuration-sub-directories" tabindex="-1">Configuration sub-directories <a class="header-anchor" href="#configuration-sub-directories" aria-label="Permalink to &quot;Configuration sub-directories&quot;">​</a></h2><p>nsh: This configuration directory will build the NuttShell. See NOTES above.</p><pre><code>NOTES:
1. NSH built-in applications are supported.  However, there are
   no built-in applications built with the default configuration.

   Binary Formats:
     CONFIG_BUILTIN=y                    : Enable support for built-in programs

   Application Configuration:
     CONFIG_NSH_BUILTIN_APPS=y           : Enable starting apps from NSH command line

2. By default, this configuration uses UART0 and has support LEDs
   enabled.  UART0 output is available on the USB debugging port or
   on pins 0-1 of the PWML connector.

   This configuration can be modified to use peripherals on the ITEAD
   TFT shield as described below.  However, in that case the UART0 and
   LED &quot;L&quot; GPIO pins conflict with the pin usage by the ITEAD TFT
   Shield.  In this case you need to switch to USART0 and disable LEDs
   by modifying the configuration as follows:

   Board Selection -&gt; Peripheral
     CONFIG_SAM34_UART0=n              : Disable UART0.  Can&#39;t use with this shield
     CONFIG_SAM34_USART0=y             : Enable USART0
     CONFIG_USART0_SERIALDRIVER=y

   Device Drivers -&gt; Serial
     CONFIG_USART0_SERIAL_CONSOLE=y    : Configure the console on USART0
     CONFIG_USART0_RXBUFSIZE=256
     CONFIG_USART0_TXBUFSIZE=256
     CONFIG_USART0_BAUD=115200
     CONFIG_USART0_BITS=8
     CONFIG_USART0_PARITY=0
     CONFIG_USART0_2STOP=0

     NOTE: USART0 TTL levels are available on COMM 5 (TXD0) and
     COMM 6 (RXD0)

   Board Selection -&gt; Board-Specific Options:
     CONFIG_ARCH_LEDS=n                : Can&#39;t support LEDs with this shield installed
     CONFIG_ARDUINO_ITHEAD_TFT=y       : Enable support for the Shield

3. If the ITEAD TFT shield is connected to the Arduino Due, then
   support for the SD card slot can be enabled by making the following
   changes to the configuration:

   NOTE: You cannot use UART0 or LEDs with this ITEAD module.  You must
   switch to USART0 and disable LED support as described above.

   Board Selection -&gt; Board-Specific Options:
     CONFIG_ARDUINO_ITHEAD_TFT=y       : Enable support for the Shield

   File Systems:
     CONFIG_DISABLE_MOUNTPOINT=n       : Mountpoint support is needed
     CONFIG_FS_FAT=y                   : Enable the FAT file system
     CONFIG_FAT_LCNAMES=y              : Enable upper/lower case 8.3 file names (Optional, see below)
     CONFIG_FAT_LFN=y                  : Enable long file named (Optional, see below)
     CONFIG_FAT_MAXFNAME=32            : Maximum supported file name length

     There are issues related to patents that Microsoft holds on FAT long
     file name technologies.  See the top level NOTICE file for further
     details.

   Device Drivers
     CONFIG_SPI=y                      : Enable SPI support
     CONFIG_SPI_EXCHANGE=y             : The exchange() method is supported
     CONFIG_SPI_BITBANG=y              : Enable SPI bit-bang support

     CONFIG_MMCSD=y                    : Enable MMC/SD support
     CONFIG_MMCSD_NSLOTS=1             : Only one MMC/SD card slot
     CONFIG_MMCSD_MULTIBLOCK_LIMIT=0   : Should not need to disable multi-block transfers
     CONFIG_MMCSD_HAVE_CARDDETECT=y    : I/O1 module as a card detect GPIO
     CONFIG_MMCSD_SPI=y                : Use the SPI interface to the MMC/SD card
     CONFIG_MMCSD_SPICLOCK=20000000    : This is a guess for the optimal MMC/SD frequency
     CONFIG_MMCSD_SPIMODE=0            : Mode 0 is required

   Board Selection -&gt; Common Board Options
     CONFIG_NSH_ARCHINIT=y             : Initialize the MMC/SD slot when NSH starts
     CONFIG_NSH_MMCSDSLOTNO=0          : Only one MMC/SD slot, slot 0
     CONFIG_NSH_MMCSDSPIPORTNO=0       : (does not really matter in this case)

   Application Configuration -&gt; NSH Library
     CONFIG_NSH_ARCHINIT=y             : Board has architecture-specific initialization

   STATUS:
   2013-7-2:  SD card is not responding.  All 0&#39;s received on SPI.

3. This configuration has been used for verifying the touchscreen on
   on the ITEAD TFT Shield.  With the modifications below, you can
   include the touchscreen test program at apps/examples/touchscreen as
   an NSH built-in application.  You can enable the touchscreen and test
   by modifying the  default configuration in the following ways:

   NOTE: You cannot use UART0 or LEDs with this ITEAD module.  You must
   switch to USART0 and disable LED support as described above.

   Board Selection -&gt; Board-Specific Options:
     CONFIG_ARDUINO_ITHEAD_TFT=y       : Enable support for the Shield

   Device Drivers
     CONFIG_SPI=y                      : Enable SPI support
     CONFIG_SPI_EXCHANGE=y             : The exchange() method is supported
     CONFIG_SPI_BITBANG=y              : Enable SPI bit-bang support

     CONFIG_INPUT=y                    : Enable support for input devices
     CONFIG_INPUT_ADS7843E=y           : Enable support for the XPT2046
     CONFIG_ADS7843E_SPIDEV=0          : (Doesn&#39;t matter)
     CONFIG_ADS7843E_SPIMODE=0         : Use SPI mode 0
     CONFIG_ADS7843E_FREQUENCY=1000000 : SPI BAUD 1MHz
     CONFIG_ADS7843E_SWAPXY=y          : If landscape orientation
     CONFIG_ADS7843E_THRESHX=51        : These will probably need to be tuned
     CONFIG_ADS7843E_THRESHY=39

   System Type:
     CONFIG_SAM34_GPIO_IRQ=y           : GPIO interrupt support
     CONFIG_SAM34_GPIOC_IRQ=y          : Enable GPIO interrupts from port C

   Library Support:
     CONFIG_SCHED_WORKQUEUE=y          : Work queue support required

   Application Configuration:
     CONFIG_EXAMPLES_TOUCHSCREEN=y     : Enable the touchscreen built-int test

   Defaults should be okay for related touchscreen settings.  Touchscreen
   debug output on USART0 can be enabled with:

   Build Setup:
     CONFIG_DEBUG_FEATURES=y           : Enable debug features
     CONFIG_DEBUG_INFO=y               : Enable verbose debug output
     CONFIG_DEBUG_INPUT=y              : Enable debug output from input devices

   STATUS:
   2013-7-2:  TSC is not responding.  All 0&#39;s received on SPI.
</code></pre><p>nsh-leds: This configuration directory will build the NuttX Shell and enable the user LEDS (/dev/userleds). It will also enable the LED example program (leds). Running the leds command will start up an LED daemon which will light up the L (user), TX, and RX LEDs in a binary sequence.</p>`,133)]))}const c=n(a,[["render",r]]);export{p as __pageData,c as default};
