var URL = Java.type("java.net.URL")
var Scanner = Java.type("java.util.Scanner")

function main(c) {
    var url = new URL("https://raw.githubusercontent.com/minSolly/kiosk/main/verify.json")
    var scanner = new Scanner(url.openStream(), "UTF-8").useDelimiter("\\A")
    
    var json = scanner.hasNext() ? scanner.next() : ""
    
    var data = JSON.parse(json)
    
    c.send("My version: alpha 1")
    c.send("Latest version: " + data.latest_available_version)
}
