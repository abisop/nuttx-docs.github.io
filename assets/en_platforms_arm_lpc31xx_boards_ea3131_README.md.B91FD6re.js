import{_ as t,c as o,al as i,o as a}from"./chunks/framework.NFAqBSgQ.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"en/platforms/arm/lpc31xx/boards/ea3131/README.md","filePath":"en/platforms/arm/lpc31xx/boards/ea3131/README.md"}'),n={name:"en/platforms/arm/lpc31xx/boards/ea3131/README.md"};function r(s,e,l,d,p,h){return a(),o("div",null,e[0]||(e[0]=[i(`<p>README ^^^^^^</p><p>This README file discusses the port of NuttX to the Embedded Artists EA3131 board.</p><p>Contents ^^^^^^^^</p><p>o Development Environment o GNU Toolchain Options o IDEs o NuttX buildroot Toolchain o Boot Sequence o Image Format o Image Download to ISRAM o Using OpenOCD and GDB o On-Demand Paging o ARM/EA3131-specific Configuration Options o Configurations</p><p>Development Environment ^^^^^^^^^^^^^^^^^^^^^^^</p><p>Either Linux or Cygwin on Windows can be used for the development environment. The source has been built only using the GNU toolchain (see below). Other toolchains will likely cause problems.</p><p>GNU Toolchain Options ^^^^^^^^^^^^^^^^^^^^^</p><p>The NuttX make system has been modified to support the following different toolchain options.</p><ol><li>The NuttX buildroot Toolchain (see below), or</li><li>Any generic arm-none-eabi GNU toolchain.</li></ol><p>All testing has been conducted using the NuttX buildroot toolchain. To use a different toolchain, you simply need to modify the configuration. As an example:</p><pre><code>CONFIG_ARM_TOOLCHAIN_GNU_EABI : Generic arm-none-eabi toolchain
</code></pre><h2 id="generic-arm-none-eabi-gnu-toolchain" tabindex="-1">Generic arm-none-eabi GNU Toolchain <a class="header-anchor" href="#generic-arm-none-eabi-gnu-toolchain" aria-label="Permalink to &quot;Generic arm-none-eabi GNU Toolchain&quot;">​</a></h2><p>There are a number of toolchain projects providing support for ARMv4/v5 class processors, including:</p><pre><code>GCC ARM Embedded
  https://developer.arm.com/open-source/gnu-toolchain/gnu-rm
</code></pre><p>Others exist for various Linux distributions, MacPorts, etc. Any version based on GCC 4.6.3 or later should work.</p><p>IDEs ^^^^</p><p>NuttX is built using command-line make. It can be used with an IDE, but some effort will be required to create the project.</p><h2 id="makefile-build" tabindex="-1">Makefile Build <a class="header-anchor" href="#makefile-build" aria-label="Permalink to &quot;Makefile Build&quot;">​</a></h2><p>Under Eclipse, it is pretty easy to set up an &quot;empty makefile project&quot; and simply use the NuttX makefile to build the system. That is almost for free under Linux. Under Windows, you will need to set up the &quot;Cygwin GCC&quot; empty makefile project in order to work with Windows (Google for &quot;Eclipse Cygwin&quot; - there is a lot of help on the internet).</p><h2 id="native-build" tabindex="-1">Native Build <a class="header-anchor" href="#native-build" aria-label="Permalink to &quot;Native Build&quot;">​</a></h2><p>Here are a few tips before you start that effort:</p><ol><li>Select the toolchain that you will be using in your .config file</li><li>Start the NuttX build at least one time from the Cygwin command line before trying to create your project. This is necessary to create certain auto-generated files and directories that will be needed.</li><li>Set up include paths: You will need include/, arch/arm/src/lpc31xx, arch/arm/src/common, arch/arm/src/arm, and sched/.</li><li>All assembly files need to have the definition option -D <strong>ASSEMBLY</strong> on the command line.</li></ol><p>Startup files will probably cause you some headaches. The NuttX startup file is arch/arm/src/lpc31xx/lpc31_vectors.S. You may have to build NuttX one time from the Cygwin command line in order to obtain the pre-built startup object needed by an IDE.</p><p>NuttX buildroot Toolchain ^^^^^^^^^^^^^^^^^^^^^^^^^</p><p>A GNU GCC-based toolchain is assumed. The PATH environment variable should be modified to point to the correct path to the Cortex-M3 GCC toolchain (if different from the default in your PATH variable).</p><p>If you have no Cortex-M3 toolchain, one can be downloaded from the NuttX Bitbucket download site (<a href="https://bitbucket.org/nuttx/buildroot/downloads/" target="_blank" rel="noreferrer">https://bitbucket.org/nuttx/buildroot/downloads/</a>). This GNU toolchain builds and executes in the Linux or Cygwin environment.</p><ol><li><p>You must have already configured NuttX in <code>&lt;some-dir&gt;</code>/nuttx.</p><p>tools/configure.sh ea3131:<code>&lt;sub-dir&gt;</code></p></li><li><p>Download the latest buildroot package into <code>&lt;some-dir&gt;</code></p></li><li><p>unpack the buildroot tarball. The resulting directory may have versioning information on it like buildroot-x.y.z. If so, rename <code>&lt;some-dir&gt;</code>/buildroot-x.y.z to <code>&lt;some-dir&gt;</code>/buildroot.</p></li><li><p>cd <code>&lt;some-dir&gt;</code>/buildroot</p></li><li><p>cp boards/arm926t-defconfig-4.2.4 .config</p></li><li><p>make oldconfig</p></li><li><p>make</p></li><li><p>Make sure that the PATH variable includes the path to the newly built binaries.</p></li></ol><p>See the file boards/README.txt in the buildroot source tree. That has more detailed PLUS some special instructions that you will need to follow if you are building a Cortex-M3 toolchain for Cygwin under Windows.</p><p>Boot Sequence ^^^^^^^^^^^^^ LPC313x has on chip bootrom which loads properly formatted images from multiple sources into SRAM. These sources include including SPI Flash, NOR Flash, UART, USB, SD Card, and NAND Flash.</p><p>In all configurations, NuttX is loaded directly into ISRAM. NuttX is linked to execute from ISRAM, regardless of the boot source.</p><p>Image Format ^^^^^^^^^^^^</p><p>In order to use the bootrom bootloader, a special header must be added to the beginning of the binary image that includes information about the binary (things like the entry point, the size, and CRC&#39;s to verify the image.</p><p>NXP provides a Windows program to append such a header to the binary image. However, (1) that program won&#39;t run under Linux, and (2) when I try it under WinXP, Symantec immediately claims that the program is misbehaving and deletes it!</p><p>To work around both of these issues, I have created a small program under boards/arm/lpc31xx/ea3131/tools to add the header. This program can be built under either Linux or Cygwin (and probably other tool environments as well). That tool can be built as follows:</p><ul><li>cd boards/arm/lpc31xx/ea3131/tools</li><li>make</li></ul><p>Then, to build the NuttX binary ready to load with the bootloader, just following these steps:</p><ul><li>tools/configure.sh ea3131:nsh # (using the nsh configuration for this example)</li><li>cd .. # Set up environment</li><li>make # Make NuttX. This will produce nuttx.bin</li><li>mklpc.sh # Make the bootloader binary (nuttx.lpc)</li></ul><p>NOTES:</p><pre><code>1. You will need to set your PATH variable appropriately or use the full path
   to mklpc.sh in the final step.
2. You can instruct Symantec to ignore the errors and it will stop quarantining
   the NXP program.
3. The CRC32 logic in boards/arm/lpc31xx/ea3131/tools doesn&#39;t seem to work.  As a result,
   the CRC is currently disabled in the header:

   RCS file: /cvsroot/nuttx/nuttx/boards/arm/lpc31xx/ea3131/tools/lpchdr.c,v
   retrieving revision 1.2
   diff -r1.2 lpchdr.c
   264c264
   &lt;   g_hdr.imagetype       = 0x0000000b;
   ---
   &gt;   g_hdr.imagetype       = 0x0000000a;
</code></pre><p>Image Download to ISRAM ^^^^^^^^^^^^^^^^^^^^^^^</p><p>Assuming that you already have the FTDI driver installed*, then here is the are the steps that I use for loading new code into the EA3131:</p><ul><li>Create the bootloader binary, nuttx.lpc, as described above.</li><li>Connected the EA3131 using the FTDI USB port (not the lpc3131 USB port) This will power up the EA3131 and start the bootloader.</li><li>Start a terminal emulator (such as TeraTerm) at 115200 8NI.</li><li>Reset the EA3131 and you should see: LPC31xx READY FOR PLAIN IMAGE&gt;</li><li>Send the nuttx.lpc file and you should see: Download finished</li></ul><p>That will load the NuttX binary into ISRAM and attempt to execute it.</p><p>*See the LPC313x documentation if you do not have the FTDI driver installed.</p><p>Using OpenOCD and GDB ^^^^^^^^^^^^^^^^^^^^^</p><p>I have been using the Olimex ARM-USB-OCD JTAG debugger with the EA3131 (<a href="http://www.olimex.com" target="_blank" rel="noreferrer">http://www.olimex.com</a>). The OpenOCD configuration file is here: tools/armusbocb.cfg. There is also a script on the tools directory that I used to start the OpenOCD daemon on my system called oocd.sh. That script would probably require some modifications to work in another environment:</p><pre><code>- possibly the value of OPENOCD_PATH
- If you are working under Linux you will need to change any
  occurrences of \`cygpath -w blablabla\` to just blablabla
</code></pre><p>Then you should be able to start the OpenOCD daemon like:</p><pre><code>boards/arm/lpc31xx/ea3131/tools/oocd.sh $PWD
</code></pre><p>Where it is assumed that you are executing oocd.sh from the top level directory where NuttX is installed.</p><p>Once the OpenOCD daemon has been started, you can connect to it via GDB using the following GDB command:</p><p>arm-nuttx-elf-gdb (gdb) target remote localhost:3333</p><p>And you can load the NuttX ELF file:</p><p>(gdb) symbol-file nuttx (gdb) load nuttx</p><p>On-Demand Paging ^^^^^^^^^^^^^^^^</p><p>There is a configuration that was used to verify the On-Demand Paging feature for the ARM926 (see <a href="https://bitbucket.org/nuttx/documentation/src/master/NuttXDemandPaging.html" target="_blank" rel="noreferrer">https://bitbucket.org/nuttx/documentation/src/master/NuttXDemandPaging.html</a>). That configuration is contained in the pgnsh sub-directory. The pgnsh configuration is only a test configuration, and lacks some logic to provide the full On-Demand Paging solution (see below).</p><p>Page Table Layout: ------------------</p><p>The ARM926 MMU uses a page table in memory. The page table is divided into (1) a level 1 (L1) page table that maps 1Mb memory regions to level 2 page tables (except in the case of 1Mb sections, of course), and (2) a level 2 (L2) page table that maps the 1Mb memory regions into individual 64Kb, 4kb, or 1kb pages. The pgnsh configuration uses 1Kb pages: it positions 48x1Kb pages at beginning of SRAM (the &quot;locked&quot; memory region), 16x1Kb pages at the end of SRAM for the L1 page table, and 44x1Kb pages just before the L1 page table. That leaves 96x1Kb virtual pages in the middle of SRAM for the paged memory region; up to 384x1kb of physical pages may be paged into this region. Physical memory map:</p><pre><code>11028000 &quot;locked&quot; text region   48x1Kb
11034000 &quot;paged&quot; text region    96x1Kb
1104c000 &quot;data&quot; region          32x1Kb
11054000 L1 page table          16x1Kb
-------- --------------------- ------
11058000                       192x1Kb
</code></pre><p>The virtual memory map allows more space for the paged region:</p><pre><code>11028000 &quot;locked&quot; text region   48x1Kb
11034000 &quot;paged&quot; text region   384x1Kb
11094000 &quot;data&quot; region          32x1Kb
1109c000 L1 page table          16x1Kb
-------- --------------------- ------
110a0000                       480x1Kb
</code></pre><p>The L1 contains a single 1Mb entry to span the entire LPC3131 SRAM memory region. The virtual address for this region is 0x11028000. The offset into the L1 page table is given by:</p><pre><code>offset = ((0x11028000 &gt;&gt; 20) &lt;&lt; 2) = 0x00000440
</code></pre><p>The value at that offset into the L1 page table contains the address of the L2 page table (0x11056000) plus some extra bits to specify that that entry is valid and and points to a 1Kb L1 page table:</p><pre><code>11054440 11056013
</code></pre><p>Why is the address 11056000 used for the address of the L2 page table? Isn&#39;t that inside of the L1 page table? Yes, this was done to use the preceious SRAM memory more conservatively. If you look at the LPC313x virtual memory map, you can see that no virtual addresses above 0x60100000 are used. That corresponds to L1 page table offset 0x0001800 (physical address 0x11055800). The rest of the L1 page table is unused and so we reuse it to hold the L2 page table (or course, this could cause some really weird addressing L1 mapping issues if bad virtual addresses were used in that region -- oh well). The address 0x11056000 is then the first properly aligned memory that can be used in that L2 page table area.</p><p>Only only L2 page table will be used to span the LPC3131 SRAM virtual text address region (480x1Kb). That one entry maps the virtual address range of 0x11000000 through 0x110ffc00. Each entry maps a 1Kb page of physical memory:</p><pre><code>PAGE      VIRTUAL ADDR L2 OFFSET
--------- ------------ ---------
Page 0    0x11000000   0x00000000
Page 1    0x11000400   0x00000004
Page 2    0x11000800   0x00000008
...
Page 1023 0x110ffc00   0x00000ffc
</code></pre><p>The &quot;locked&quot; text region begins at an offset of 0x00028000 into that region. The 48 page table entries needed to make this region begin at:</p><pre><code>offset = ((0x00028000 &gt;&gt; 10) &lt;&lt; 2) = 0x00000280
</code></pre><p>Each entry contains the address of a physical page in the &quot;locked&quot; text region (plus some extra bits to identify domains, page sizes, access privileges, etc.):</p><pre><code>0x11000280 0x1102800b
0x11000284 0x1102840b
0x11000288 0x1102880b
...
</code></pre><p>The locked region is initially unmapped. But the data region and page table regions must be mapped in a similar manner. Those</p><pre><code>Data:
   Virtual address  = 0x11094000 Offset = 0x00064000
   Physical address = 0x1104c000
   L2 offset        = ((0x00094000 &gt;&gt; 10) &lt;&lt; 2) = 0x00000940

Page table:
   Virtual address  = 0x1109c000 Offset = 0x0009c000
   Physical address = 0x11054000
   L2 offset        = ((0x0009c000 &gt;&gt; 10) &lt;&lt; 2) = 0x000009c0
</code></pre><p>Build Sequence: ---------------</p><p>This example uses a two-pass build. The top-level Makefile recognizes the configuration option CONFIG_BUILD_2PASS and will execute the Makefile in boards/arm/lpc31xx/ea3131/locked/Makefile to build the first pass object, locked.r. This first pass object contains all of the code that must be in the locked text region. The Makefile in arch/arm/src/Makefile then includes this 1st pass in build, positioning it as controlled by boards/arm/lpc31xx/ea3131/scripts/pg-ld.script.</p><p>Finishing the Example: ----------------------</p><p>This example is incomplete in that it does not have any media to reload the page text region from: The file boards/arm/lpc31xx/ea3131/src/up_fillpage.c is only a stub. That logic to actually reload the page from some storage medium (among other things) would have to be implemented in order to complete this example. At present, the example works correctly up to the point where up_fillpage() is first called and then fails in the expected way.</p><p>Here are the detailed list of things that would need to be done in addition to finishing th up_fillpage() logic (this assumes that SPI NOR FLASH is the media on which the NuttX image is stored):</p><ol><li>Develop a NOR FLASH layout can can be used to (1) boot the locked text section into memory on a reset, and (2) map a virtual fault address to an offset into paged text section in NOR FLASH.</li><li>Develop/modify the build logic to build the binaries for this NOR flash layout: Can the NuttX image be formed as a single image that is larger than the IRAM? Can we boot from such a large image? If so, then no special build modifications are required. Or, does the locked section have to be smaller with a separate paged text section image in FLASH? In this case, some tool will be needed to break the nuttx.bin file into the two pieces.</li><li>Develop a mechanism to load the NuttX image into SPI NOR FLASH. A basic procedure is already documented in NXP publications: &quot;LPC313x Linux Quick Start Guide, Version 2.0&quot; and &quot;AN10811 Programming SPI flash on EA3131 boards, V1 (May 1, 2009).&quot; That procedure may be sufficient, depending on the decisions made in (1) and (2):</li><li>Develop a procedure to boot the locked text image from SPI NOR. The references and issues related to this are discussed in (2) and (3) above.</li></ol><p>Basic support for paging from SPI NOR FLASH can be enabled by adding:</p><pre><code>CONFIG_PAGING_AT45DB=y
</code></pre><p>Or:</p><pre><code>CONFIG_PAGING_M25PX=y
</code></pre><p>NOTE: See the TODO list in the top-level directory:</p><pre><code>&quot;arch/arm/src/lpc31xx/lpc31_spi.c may or may not be functional.  It was
 reported to be working, but I was unable to get it working with the
 Atmel at45dbxx serial FLASH driver.&quot;
</code></pre><p>Alternative: ------------</p><p>I have implemented an alternative within boards/arm/lpc31xx/ea3131/src/up_fillpage.c which is probably only useful for testing. Here is the usage module for this alternative</p><ol><li><p>Place the nuttx.bin file on an SD card.</p></li><li><p>Insert the SD card prior to booting</p></li><li><p>In up_fillpage(), use the virtual miss address (minus the virtual base address) as an offset into the nuttx.bin file, and read the required page from that offset in the nuttx.bin file:</p><p>off_t offset = (off_t)vpage - PG_LOCKED_VBASE; off_t pos = lseek(fd, offset, SEEK_SET); if (pos != (off_t)-1) { int ret = read(fd, vpage, PAGESIZE); }</p></li></ol><p>In this way, the paging implementation can do on-demand paging from an image file on the SD card. Problems/issues with this approach probably make it only useful for testing:</p><ol><li>You would still have to boot the locked section over serial or using a bootloader -- it is not clear how the power up boot would occur. For testing, the nuttx.bin file could be both provided on the SD card and loaded over serial.</li><li>If the SD card is not in place, the system will crash.</li><li>This means that all of the file system logic and FAT file system would have to reside in the locked text region.</li></ol><p>And the show-stopper:</p><ol start="4"><li>There is no MCI driver for the ea3131, yet!</li></ol><p>ARM/EA3131-specific Configuration Options ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</p><pre><code>CONFIG_ARCH - Identifies the arch/ subdirectory.  This should
   be set to:

   CONFIG_ARCH=arm

CONFIG_ARCH_family - For use in C code:

   CONFIG_ARCH_ARM=y

CONFIG_ARCH_architecture - For use in C code:

   CONFIG_ARCH_ARM926EJS=y

CONFIG_ARCH_CHIP - Identifies the arch/*/chip subdirectory

   CONFIG_ARCH_CHIP=lpc313x

CONFIG_ARCH_CHIP_name - For use in C code

   CONFIG_ARCH_CHIP_LPC3131

CONFIG_ARCH_BOARD - Identifies the boards/ subdirectory and
   hence, the board that supports the particular chip or SoC.

   CONFIG_ARCH_BOARD=ea3131

CONFIG_ARCH_BOARD_name - For use in C code

   CONFIG_ARCH_BOARD_EA3131

CONFIG_ARCH_LOOPSPERMSEC - Must be calibrated for correct operation
   of delay loops

CONFIG_ENDIAN_BIG - define if big endian (default is little
   endian)

CONFIG_RAM_SIZE - For most ARM9 architectures, this describes the
  size of installed DRAM.  For the LPC313X, it is used only to
  determine how to map the executable regions.  It is SDRAM size
  only if you are executing out of the external SDRAM; or it could
  be NOR FLASH size, external SRAM size, or internal SRAM size.

CONFIG_RAM_START - The start address of installed DRAM (physical)

CONFIG_RAM_VSTART - The startaddress of DRAM (virtual)

CONFIG_ARCH_LEDS - Use LEDs to show state. Unique to boards that
   have LEDs

CONFIG_ARCH_INTERRUPTSTACK - This architecture supports an interrupt
   stack. If defined, this symbol is the size of the interrupt
   stack in bytes.  If not defined, the user task stacks will be
  used during interrupt handling.

CONFIG_ARCH_STACKDUMP - Do stack dumps after assertions

CONFIG_ARCH_LEDS -  Use LEDs to show state. Unique to board architecture.

CONFIG_ARCH_BUTTONS -  Enable support for buttons. Unique to board architecture.

CONFIG_ARCH_DMA - Support DMA initialization

CONFIG_ARCH_LOWVECTORS - define if vectors reside at address 0x0000:00000
  Undefine if vectors reside at address 0xffff:0000

CONFIG_ARCH_ROMPGTABLE - A pre-initialized, read-only page table is available.
  If defined, then board-specific logic must also define PGTABLE_BASE_PADDR,
  PGTABLE_BASE_VADDR, and all memory section mapping in a file named
  board_memorymap.h.
</code></pre><p>Individual subsystems can be enabled:</p><pre><code>CONFIG_LPC31_MCI, CONFIG_LPC31_SPI, CONFIG_LPC31_UART
</code></pre><p>External memory available on the board (see also CONFIG_MM_REGIONS)</p><pre><code>CONFIG_LPC31_EXTSRAM0 - Select if external SRAM0 is present
CONFIG_LPC31_EXTSRAM0HEAP - Select if external SRAM0 should be
  configured as part of the NuttX heap.
CONFIG_LPC31_EXTSRAM0SIZE - Size (in bytes) of the installed
  external SRAM0 memory
CONFIG_LPC31_EXTSRAM1 - Select if external SRAM1 is present
CONFIG_LPC31_EXTSRAM1HEAP - Select if external SRAM1 should be
  configured as part of the NuttX heap.
CONFIG_LPC31_EXTSRAM1SIZE - Size (in bytes) of the installed
  external SRAM1 memory
CONFIG_LPC31_EXTDRAM - Select if external SDRAM is present
CONFIG_LPC31_EXTDRAMHEAP - Select if external SDRAM should be
  configured as part of the NuttX heap.
CONFIG_LPC31_EXTDRAMSIZE - Size (in bytes) of the installed
  external SDRAM memory
CONFIG_LPC31_EXTNAND - Select if external NAND is present
CONFIG_LPC31_EXTNANDSIZE - Size (in bytes) of the installed
  external NAND memory
</code></pre><p>LPC313X specific device driver settings</p><pre><code>CONFIG_UART_SERIAL_CONSOLE - selects the UART for the
  console and ttys0
CONFIG_UART_RXBUFSIZE - Characters are buffered as received.
  This specific the size of the receive buffer
CONFIG_UART_TXBUFSIZE - Characters are buffered before
  being sent.  This specific the size of the transmit buffer
CONFIG_UART_BAUD - The configure BAUD of the UART.  Must be
CONFIG_UART_BITS - The number of bits.  Must be either 7 or 8.
CONFIG_UART_PARTIY - 0=no parity, 1=odd parity, 2=even parity
CONFIG_UART_2STOP - Two stop bits
</code></pre><p>Configurations ^^^^^^^^^^^^^^</p><h2 id="common-configuration-notes" tabindex="-1">Common Configuration Notes <a class="header-anchor" href="#common-configuration-notes" aria-label="Permalink to &quot;Common Configuration Notes&quot;">​</a></h2><ol><li><p>Each EA3131 configuration is maintained in a sub-directory and can be selected as follow:</p><p>tools/configure.sh ea3131:<code>&lt;subdir&gt;</code></p><p>Where <code>&lt;subdir&gt;</code> is one of the configuration sub-directories described in the following paragraph.</p></li><li><p>These configurations use the mconf-based configuration tool. To change a configurations using that tool, you should:</p><p>a. Build and install the kconfig-mconf tool. See nuttx/README.txt see additional README.txt files in the NuttX tools repository.</p><p>b. Execute &#39;make menuconfig&#39; in nuttx/ in order to start the reconfiguration process.</p></li><li><p>By default, all configurations assume the ARM EABI toolchain under Cygwin with Windows. This is easily reconfigured, however:</p><p>CONFIG_HOST_WINDOWS=y CONFIG_WINDOWS_CYGWIN=y CONFIG_ARM_TOOLCHAIN_GNU_EABI=y</p></li></ol><h2 id="configuration-sub-directories" tabindex="-1">Configuration Sub-Directories <a class="header-anchor" href="#configuration-sub-directories" aria-label="Permalink to &quot;Configuration Sub-Directories&quot;">​</a></h2><p>locked:</p><pre><code>This is not a configuration.  When on-demand page is enabled
then we must do a two pass link:  The first pass creates an
intermediate object that has all of the code that must be
placed in the locked memory partition.  This is logic that
must be locked in memory at all times.

The directory contains the logic necessary to do the platform
specific first pass link for the EA313x.
</code></pre><p>nsh</p><pre><code>Configures the NuttShell (nsh) located at examples/nsh.  The
Configuration enables only the serial NSH interface.
</code></pre><p>pgnsh</p><pre><code>This is the same configuration as nsh, but with On-Demand
paging enabled.  See https://nuttx.apache.org/docs/latest/components/paging.html.
This configuration is an experiment for the purposes of test
and debug.  At present, this does not produce functioning,
usable system
</code></pre><p>usbserial</p><pre><code>This configuration directory exercises the USB serial class
driver at examples/usbserial.  See examples/README.txt for
more information.
</code></pre>`,113)]))}const f=t(n,[["render",r]]);export{u as __pageData,f as default};
