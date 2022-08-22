export function valueToPoint(value, index, total) {

    const x = 0
    const y = -value * 0.8

    const angle = ((Math.PI * 2) / total) * index
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)

    const tx = x * cos - y * sin + 100
    const ty = x * sin + y * cos + 100

    //數學不太懂，反正就回傳相應的 x 和 y 兩個數字。
    return {
        x: tx,
        y: ty
    }

}
