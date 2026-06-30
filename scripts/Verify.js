var cur_ver = "alpha 2"

var URL = Java.type("java.net.URL")
var Scanner = Java.type("java.util.Scanner")

function main(c) {
    var url = new URL("https://raw.githubusercontent.com/minSolly/kiosk/main/verify.json?t=" + java.lang.System.currentTimeMillis())
    var scanner = new Scanner(url.openStream(), "UTF-8").useDelimiter("\\A")
    
    var json = scanner.hasNext() ? scanner.next() : ""
    
    var data = JSON.parse(json)
    scanner.close()
    
    if (data.latest_available_version != cur_ver) {
        c.send("У вас установлена неактуальная версия игры! ")
        c.send("Установите последнее обновление " + data.latest_available_version)
    }
}
