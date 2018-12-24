

export default function isTestable(value) {
    return function decorator(target) {
       target.isTestable = value;
    }
}