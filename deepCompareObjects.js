/**
* JavaScript Object Deep Comparison, Simple & Efficient
*
* Usage: deepCompareObjects(objA,objB);
* Returns true / false based on the comparison result
*
* Author: kcak11 --> github.com/kcak11
*/
function deepCompareObjects(a, b) {
    return (a === b) ? true : (function() {
        function objType(obj) {
            return Object.prototype.toString.call(obj);
        }
        return (objType(a) !== objType(b)) ? false : (function() {
            String.prototype.repAll = function(str, rep) {
                var r = new RegExp(str,"g");
                return this.replace(r, rep);
            };
            var rawA = getRaw(a);
            var rawB = getRaw(b);
            function getRaw(obj) {
                try {
                    var json = JSON.stringify(obj) || "";
                    json = json.repAll("{", "^").repAll(",", "^").repAll("}", "^").repAll(":", "^");
                    return json.split("^").sort().join("^");
                } catch (exjs) {
                    return false;
                }
            }
            return rawA === rawB;
        }());
    }());
}
