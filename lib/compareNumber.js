import extend from "extend"
import returnError from "./returnError"
const compareNumber = function (data, item, minKey, maxKey, value, settings) {
    let min = Number(item[minKey])
    let max = Number(item[maxKey])
    if (isNaN(min)) { min = undefined }
    if (isNaN(max)) { max = undefined }
    if (typeof min !== 'undefined' || typeof max !== 'undefined') {
        if (typeof min !== 'undefined' && typeof max !== 'undefined') {
            if (value >= min && value <= max) {
                return true
            }
            else {
                return false
            }
        }
        else {
            if (typeof min !== 'undefined') {
                if (value < min) {
                    return false
                }
                else {
                    return true
                }
            }
            if (typeof max !== 'undefined') {
                if (value > max) {
                    return false
                }
                else {
                    return true
                }
            }
        }
    }
    return 'NOT_MATCH'
}
export default compareNumber