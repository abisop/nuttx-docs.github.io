import{_ as o,c as n,al as t,o as a}from"./chunks/framework.NFAqBSgQ.js";const p=JSON.parse('{"title":"ST Nucleo L452RE","description":"","frontmatter":{},"headers":[],"relativePath":"en/platforms/arm/stm32l4/boards/nucleo-l452re/index.md","filePath":"en/platforms/arm/stm32l4/boards/nucleo-l452re/index.md"}'),i={name:"en/platforms/arm/stm32l4/boards/nucleo-l452re/index.md"};function r(s,e,l,d,u,c){return a(),n("div",null,e[0]||(e[0]=[t(`<h1 id="st-nucleo-l452re" tabindex="-1">ST Nucleo L452RE <a class="header-anchor" href="#st-nucleo-l452re" aria-label="Permalink to &quot;ST Nucleo L452RE&quot;">​</a></h1><p>chip:stm32, chip:stm32l4, chip:stm32l452</p><p>This page file discusses the port of NuttX to the STMicro Nucleo-L452RE board. That board features the STM32L452RET6 MCU with 512KiB of FLASH and 160KiB of SRAM.</p><h2 id="leds" tabindex="-1">LEDs <a class="header-anchor" href="#leds" aria-label="Permalink to &quot;LEDs&quot;">​</a></h2><p>The Nucleo-64 board has one user controllable LED, User LD2. This green LED is a user LED connected to Arduino signal D13 corresponding to STM32 I/O PA5 (PB13 on other some other Nucleo-64 boards).</p><ul><li>When the I/O is HIGH value, the LED is on</li><li>When the I/O is LOW, the LED is off</li></ul><p>These LEDs are not used by the board port unless CONFIG_ARCH_LEDS is defined. In that case, the usage by the board port is defined in include/board.h and src/stm32_autoleds.c. The LEDs are used to encode OS-related events as follows when the red LED (PE24) is available:</p><blockquote><p>SYMBOL Meaning LD2 ------------------- ----------------------- -----------LED_STARTED NuttX has been started OFF LED_HEAPALLOCATE Heap has been allocated OFF LED_IRQSENABLED Interrupts enabled OFF LED_STACKCREATED Idle stack created ON LED_INIRQ In an interrupt No change LED_SIGNAL In a signal handler No change LED_ASSERTION An assertion failed No change LED_PANIC The system has crashed Blinking LED_IDLE MCU is is sleep mode Not used</p></blockquote><p>Thus if LD2, NuttX has successfully booted and is, apparently, running normally. If LD2 is flashing at approximately 2Hz, then a fatal error has been detected and the system has halted.</p><h2 id="buttons" tabindex="-1">Buttons <a class="header-anchor" href="#buttons" aria-label="Permalink to &quot;Buttons&quot;">​</a></h2><p>B1 USER: the user button is connected to the I/O PC13 (pin 2) of the STM32 microcontroller.</p><h2 id="serial-console" tabindex="-1">Serial Console <a class="header-anchor" href="#serial-console" aria-label="Permalink to &quot;Serial Console&quot;">​</a></h2><h3 id="usart1" tabindex="-1">USART1 <a class="header-anchor" href="#usart1" aria-label="Permalink to &quot;USART1&quot;">​</a></h3><p>Pins and Connectors:</p><pre><code>RXD: PA10  D3  CN9 pin 3, CN10 pin 33
     PB7                  CN7  pin 21
TXD: PA9   D8  CN5 pin 1, CN10 pin 21
     PB6   D10 CN5 pin 3, CN10 pin 17
</code></pre><p>NOTE: You may need to edit the include/board.h to select different USART1 pin selections.</p><p>TTL to RS-232 converter connection:</p><pre><code>Nucleo CN10 STM32F072RB
----------- ------------
Pin 21 PA9  USART1_TX   *Warning you make need to reverse RX/TX on
Pin 33 PA10 USART1_RX    some RS-232 converters
Pin 20 GND
Pin 8  U5V
</code></pre><p>To configure USART1 as the console:</p><pre><code>CONFIG_STM32_USART1=y
CONFIG_USART1_SERIALDRIVER=y
CONFIG_USART1_SERIAL_CONSOLE=y
CONFIG_USART1_RXBUFSIZE=256
CONFIG_USART1_TXBUFSIZE=256
CONFIG_USART1_BAUD=115200
CONFIG_USART1_BITS=8
CONFIG_USART1_PARITY=0
CONFIG_USART1_2STOP=0
</code></pre><h3 id="usart2" tabindex="-1">USART2 <a class="header-anchor" href="#usart2" aria-label="Permalink to &quot;USART2&quot;">​</a></h3><p>Pins and Connectors:</p><pre><code>RXD: PA3  To be provided
     PA15
     PD6
TXD: PA2
     PA14
     PD5
</code></pre><p>See &quot;Virtual COM Port&quot; and &quot;RS-232 Shield&quot; below.</p><h3 id="usart3" tabindex="-1">USART3 <a class="header-anchor" href="#usart3" aria-label="Permalink to &quot;USART3&quot;">​</a></h3><p>Pins and Connectors:</p><pre><code>RXD: PB11 To be provided
     PC5
     PC11
     D9
TXD: PB10
     PC4
     PC10
     D8
</code></pre><h3 id="usart4" tabindex="-1">USART4 <a class="header-anchor" href="#usart4" aria-label="Permalink to &quot;USART4&quot;">​</a></h3><p>Pins and Connectors:</p><pre><code>RXD: PA1  To be provided
     PC11
TXD: PA0
     PC10
</code></pre><h3 id="virtual-com-port" tabindex="-1">Virtual COM Port <a class="header-anchor" href="#virtual-com-port" aria-label="Permalink to &quot;Virtual COM Port&quot;">​</a></h3><p>Yet another option is to use UART2 and the USB virtual COM port. This option may be more convenient for long term development, but is painful to use during board bring-up.</p><p>Solder Bridges. This configuration requires:</p><ul><li>SB62 and SB63 Open: PA2 and PA3 on STM32 MCU are disconnected to D1 and D0 (pin 7 and pin 8) on Arduino connector CN9 and ST Morpho connector CN10.</li><li>SB13 and SB14 Closed: PA2 and PA3 on STM32F103C8T6 (ST-LINK MCU) are connected to PA3 and PA2 on STM32 MCU to have USART communication between them. Thus SB61, SB62 and SB63 should be OFF.</li></ul><p>Configuring USART2 is the same as given above.</p><p>115200 8N1 BAUD should be configure to interface with the Virtual COM port.</p><h3 id="default" tabindex="-1">Default <a class="header-anchor" href="#default" aria-label="Permalink to &quot;Default&quot;">​</a></h3><p>As shipped, SB62 and SB63 are open and SB13 and SB14 closed, so the virtual COM port is enabled.</p><h3 id="rs-232-shield" tabindex="-1">RS-232 Shield <a class="header-anchor" href="#rs-232-shield" aria-label="Permalink to &quot;RS-232 Shield&quot;">​</a></h3><p>Supports a single RS-232 connected via:</p><pre><code>Nucleo    STM32F4x1RE     Shield
--------- --------------- --------
CN9 Pin 1 PA3  USART2_RXD RXD
CN9 Pin 2 PA2  USART2_TXD TXD
</code></pre><p>Support for this shield is enabled by selecting USART2 and configuring SB13, 14, 62, and 63 as described above under &quot;Virtual COM Port&quot;</p><h2 id="configurations" tabindex="-1">Configurations <a class="header-anchor" href="#configurations" aria-label="Permalink to &quot;Configurations&quot;">​</a></h2><h3 id="information-common-to-all-configurations" tabindex="-1">Information Common to All Configurations <a class="header-anchor" href="#information-common-to-all-configurations" aria-label="Permalink to &quot;Information Common to All Configurations&quot;">​</a></h3><p>Each configuration is maintained in a sub-directory and can be selected as follow:</p><pre><code>tools/configure.sh nucleo-l452re:&lt;subdir&gt;
</code></pre><p>Before building, make sure the PATH environment variable includes the correct path to the directory than holds your toolchain binaries.</p><p>And then build NuttX by simply typing the following. At the conclusion of the make, the nuttx binary will reside in an ELF file called, simply, nuttx.:</p><pre><code>make oldconfig
make
</code></pre><p>The &lt;subdir&gt; that is provided above as an argument to the tools/configure.sh must be is one of the following.</p><p>NOTES:</p><ol><li><p>These configurations use the mconf-based configuration tool. To change any of these configurations using that tool, you should:</p><p>a. Build and install the kconfig-mconf tool. See nuttx/README.txt see additional README.txt files in the NuttX tools repository. b. Execute &#39;make menuconfig&#39; in nuttx/ in order to start the reconfiguration process.</p></li><li><p>Unless stated otherwise, all configurations generate console output on USART2, as described above under &quot;Serial Console&quot;. The elevant configuration settings are listed below:</p><pre><code>CONFIG_STM32_USART2=y
CONFIG_STM32_USART2_SERIALDRIVER=y
CONFIG_STM32_USART=y

CONFIG_USART2_SERIALDRIVER=y
CONFIG_USART2_SERIAL_CONSOLE=y

CONFIG_USART2_RXBUFSIZE=256
CONFIG_USART2_TXBUFSIZE=256
CONFIG_USART2_BAUD=115200
CONFIG_USART2_BITS=8
CONFIG_USART2_PARITY=0
CONFIG_USART2_2STOP=0
</code></pre></li><li><p>All of these configurations are set up to build under Linux using the &quot;GNU Tools for ARM Embedded Processors&quot; that is maintained by ARM (unless stated otherwise in the description of the configuration).</p><blockquote><p><a href="https://developer.arm.com/open-source/gnu-toolchain/gnu-rm" target="_blank" rel="noreferrer">https://developer.arm.com/open-source/gnu-toolchain/gnu-rm</a></p></blockquote><p>That toolchain selection can easily be reconfigured using &#39;make menuconfig&#39;. Here are the relevant current settings:</p><p>Build Setup:</p><pre><code>CONFIG_HOST_LINUX=y                 : Linux environment
</code></pre><p>System Type -&gt; Toolchain:</p><pre><code>CONFIG_ARM_TOOLCHAIN_GNU_EABI=y  : GNU ARM EABI toolchain
</code></pre></li></ol><h3 id="configuration-sub-directories" tabindex="-1">Configuration sub-directories <a class="header-anchor" href="#configuration-sub-directories" aria-label="Permalink to &quot;Configuration sub-directories&quot;">​</a></h3><h3 id="nsh" tabindex="-1">nsh: <a class="header-anchor" href="#nsh" aria-label="Permalink to &quot;nsh:&quot;">​</a></h3><p>Configures the NuttShell (nsh) located at examples/nsh. This configuration is focused on low level, command-line driver testing.</p>`,55)]))}const S=o(i,[["render",r]]);export{p as __pageData,S as default};
