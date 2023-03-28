import ThermalPrinter from 'node-thermal-printer'

export const Printv1 = () => {
    // Tạo đối tượng in ấn
    const printer = new ThermalPrinter({
        type: 'epson',
        interface: 'usb',
    })

    // Kết nối đến máy in
    printer
        .init()
        .then(async () => {
            // In nội dung
            printer.setTextDoubleHeight()
            printer.setTextDoubleWidth()
            printer.writeLn('Hello, World!')
            printer.cut()

            // Thực hiện in
            await printer.execute()
        })
        .catch((error) => {
            console.error(error)
        })
}
